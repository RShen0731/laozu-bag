// Web Worker for laozu-solver SA
// 纯求解，无 DOM

// 常量
const DE=10000, A_ATK=2001, A_DEF=2002, A_HP=2003, A_ATKP=2004, A_DEFP=2005, A_HPP=2006;
const FILL_BONUS=1e7;

// 全局数据（由主线程传入）
// ATTRS 必须由主线程传入完整版（含 kind/nPower 共 12 项），Worker 内不手写残缺版
let SKILL_BY_ID = {};
let AWAKEN_DB = {};
let ATTRS = [];

// mulberry32
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}

// 优化目标：与主线程一致
const objective=(r,target)=>target==="weighted"?r.weightedTotal:r.powerTotal;

// evaluate
function evaluate(pl,ctx,detail){
  const P=pl.length,R=ctx.R,C=ctx.C;
  const cmap=new Map();pl.forEach((p,i)=>p.cells.forEach(c=>cmap.set(c,i)));
  const neigh=Array.from({length:P},()=>new Set());
  const D4=[[-1,0],[1,0],[0,-1],[0,1]];
  pl.forEach((p,i)=>{for(const cell of p.cells){const r=(cell/C)|0,c=cell%C;
    for(const [dr,dc] of D4){const nr=r+dr,nc=c+dc;if(nr<0||nr>=R||nc<0||nc>=C)continue;
      const j=cmap.get(nr*C+nc);if(j!==undefined&&j!==i){neigh[i].add(j);neigh[j].add(i);}}}});
  const nb=neigh.map(s=>[...s]);
  const awakenMap=ctx.awaken||{};
  let powerTotal=0,weightedTotal=0;const pieces=[];
  for(let h=0;h<P;h++){
    const eq=pl[h].eq,y=new Map(),srcs=[];
    const add=(k,v)=>y.set(k,(y.get(k)??0)+v);
    for(const sid of eq.skillIds){const sk=SKILL_BY_ID[sid];if(!sk||sk.scope!=="self")continue;
      const T=nb[h].filter(p=>((1<<pl[p].eq.element)&sk.mask)!==0);if(!T.length)continue;
      for(const bf of sk.buffs){const F=bf.value*T.length;add(bf.attr,F);
        if(detail)srcs.push({t:"self",skill:sk.name,attr:bf.attr,value:F,per:bf.value,n:T.length,names:T.map(p=>pl[p].eq.name)});}}
    // 觉醒1：按相邻指定系数量给自身加属性（与 self-buff 同机制）
    const awLv=awakenMap[eq.id]??0,awData=AWAKEN_DB[eq.id];
    if(awData&&awLv>=1&&awData.levels[1]){
      for(const ef of awData.levels[1]){
        if(ef.type!=="self_per_adjacent")continue;
        const T=nb[h].filter(p=>pl[p].eq.element===ef.element);
        if(!T.length)continue;
        const F=ef.perUnit*T.length;add(ef.attr,F);
        if(detail)srcs.push({t:"awaken1",skill:`觉醒1`,attr:ef.attr,value:F,per:ef.perUnit,n:T.length,names:T.map(p=>pl[p].eq.name)});
      }
    }
    for(const p of nb[h]){const neq=pl[p].eq;
      for(const sid of neq.skillIds){const sk=SKILL_BY_ID[sid];if(!sk||sk.scope!=="adjacent")continue;
        if(((1<<eq.element)&sk.mask)===0)continue;
        for(const bf of sk.buffs){add(bf.attr,bf.value);
          if(detail)srcs.push({t:"neighbor",skill:sk.name,attr:bf.attr,value:bf.value,from:`${neq.name}·${pl[p].tier}阶`});}}}
    const uid=pl[h].inst.uid;
    const D=ctx.effAtk[uid]*(1+(y.get(A_ATKP)??0)/DE),
          Df=ctx.effDef[uid]*(1+(y.get(A_DEFP)??0)/DE),
          Hp=ctx.effHp[uid]*(1+(y.get(A_HPP)??0)/DE);
    const g=k=>k===A_ATK?D:k===A_DEF?Df:k===A_HP?Hp:(y.get(k)??0);
    let w=0,q=0;
    for(const a of ATTRS){const u=a.kind===2?0.01:1,gv=g(a.id);w+=gv*u*a.nPower;
      q+=gv*u*(ctx.weights?(ctx.weights[a.id]??a.nPower):a.nPower);}
    powerTotal+=w;weightedTotal+=q;
    pieces.push({eq,tier:pl[h].tier,atk:D,def:Df,hp:Hp,buffs:[...y.entries()],srcs,power:w,weighted:q});
  }
  // 觉醒相邻增益（给相邻指定系法宝攻防血+，影响摆法）：觉3起生效；觉5为强化版，替代觉3（取已解锁的最高档，非叠加）
  for(let h=0;h<P;h++){
    const eq=pl[h].eq,awLv=awakenMap[eq.id]??0,awData=AWAKEN_DB[eq.id];
    if(!awData||awLv<3)continue;
    let adjEf=null,adjLv=0;
    for(let lv=3;lv<=awLv;lv++){
      const effs=awData.levels[lv];if(!effs)continue;
      for(const ef of effs)if(ef.type==="adjacent_buff"){adjEf=ef;adjLv=lv;}
    }
    if(!adjEf)continue;
    const mult=adjEf.pct/DE;
    for(const p of nb[h]){
      if(pl[p].eq.element!==adjEf.element)continue;
      const pc=pieces[p];
      const bA=ctx.effAtk[pl[p].inst.uid],bD=ctx.effDef[pl[p].inst.uid],bH=ctx.effHp[pl[p].inst.uid];
      const dA=Math.floor(bA*mult),dD=Math.floor(bD*mult),dH=Math.floor(bH*mult);
      pc.atk+=dA;pc.def+=dD;pc.hp+=dH;
      let dw=0,dq=0;
      for(const a of ATTRS){
        const u=a.kind===2?0.01:1;let gv=0;
        if(a.id===A_ATK)gv=dA;else if(a.id===A_DEF)gv=dD;else if(a.id===A_HP)gv=dH;
        else continue;
        dw+=gv*u*a.nPower;dq+=gv*u*(ctx.weights?(ctx.weights[a.id]??a.nPower):a.nPower);
      }
      pc.power+=dw;pc.weighted+=dq;powerTotal+=dw;weightedTotal+=dq;
      if(detail)pc.srcs.push({t:"awaken3",skill:`觉醒${adjLv}(来自${eq.name})`,attr:"相邻",value:adjEf.pct,per:adjEf.pct,n:1,names:[],from:eq.name});
    }
  }
  // 觉醒全局增益（觉3同形态/觉5同系，背包内全部生效、本法宝除外）：2026-10-11 起计入得分；只取决于已放集合，不影响摆法
  for(let h=0;h<P;h++){
    const eq=pl[h].eq,awLv=awakenMap[eq.id]??0,awData=AWAKEN_DB[eq.id];
    if(!awData||awLv<3)continue;
    for(let lv=3;lv<=awLv;lv++){
      const effs=awData.levels[lv];if(!effs)continue;
      for(const ef of effs){
        if(ef.type!=="global_form"&&ef.type!=="global_element")continue;
        const mult=ef.pct/DE;
        for(let p=0;p<P;p++){
          if(p===h)continue;
          const peq=pl[p].eq;
          if(ef.type==="global_form"?peq.weaponForm!==ef.form:peq.element!==ef.element)continue;
          const pc=pieces[p];
          const bA=ctx.effAtk[pl[p].inst.uid],bD=ctx.effDef[pl[p].inst.uid],bH=ctx.effHp[pl[p].inst.uid];
          const dA=Math.floor(bA*mult),dD=Math.floor(bD*mult),dH=Math.floor(bH*mult);
          pc.atk+=dA;pc.def+=dD;pc.hp+=dH;
          let dw=0,dq=0;
          for(const a of ATTRS){
            const u=a.kind===2?0.01:1;let gv=0;
            if(a.id===A_ATK)gv=dA;else if(a.id===A_DEF)gv=dD;else if(a.id===A_HP)gv=dH;
            else continue;
            dw+=gv*u*a.nPower;dq+=gv*u*(ctx.weights?(ctx.weights[a.id]??a.nPower):a.nPower);
          }
          pc.power+=dw;pc.weighted+=dq;powerTotal+=dw;weightedTotal+=dq;
          if(detail)pc.srcs.push({t:"awakenG",skill:`觉醒${lv}(来自${eq.name})`,attr:"全局",value:ef.pct,per:ef.pct,n:1,names:[],from:eq.name});
        }
      }
    }
  }
  return{powerTotal,weightedTotal,pieces};
}

// stateScore
function stateScore(st){
  if(!st.pl.length)return st.ctx.fillAll?0:0;
  const r=evaluate(st.pl,st.ctx,false);
  const base=objective(r,st.ctx.target);
  const cells=st.pl.reduce((a,p)=>a+p.cells.length,0);
  return base+(st.ctx.fillAll?cells*FILL_BONUS:0);
}

// buildPlacementTable
function buildPlacementTable(instances,R,C,locked){
  const table=new Map(); // uid -> [{r,c,cells}]
  const byAnchor=new Map(); // uid -> Map("r,c" -> placement)
  for(const inst of instances){
    const list=[],am=new Map(),sh=inst.shape;
    for(let r=0;r+sh.h<=R;r++)for(let c=0;c+sh.w<=C;c++){
      const cells=sh.cells.map(([dr,dc])=>(r+dr)*C+(c+dc));
      if(cells.some(i=>locked.has(i)))continue;
      const pm={r,c,cells};
      list.push(pm);am.set(r+","+c,pm);
    }
    table.set(inst.uid,list);byAnchor.set(inst.uid,am);
  }
  return{table,byAnchor};
}

// newSolverState
function newSolverState(instances,table,R,C,locked,ctx){
  return{
    instances,table,R,C,locked,ctx,
    pl:[], // 已放置 [{inst,eq,tier,r,c,cells}]
    unplaced:new Set(instances.map(i=>i.uid)),
    uidToInst:new Map(instances.map(i=>[i.uid,i])),
    score:-Infinity,
  };
}

function buildOcc(pl,R,C,locked){
  const occ=new Int16Array(R*C).fill(-1);
  for(const i of locked)occ[i]=-2;
  pl.forEach((p,pi)=>{for(const c of p.cells)occ[c]=pi;});
  return occ;
}
function cellsFree(cells,occ){for(const i of cells)if(occ[i]!==-1)return false;return true;}

function placeInst(st,uid,pm){
  // pm: {r,c,cells}
  const inst=st.uidToInst.get(uid);
  const occ=buildOcc(st.pl,st.R,st.C,st.locked);
  if(!cellsFree(pm.cells,occ))return false;
  st.pl.push({inst,eq:inst.eq,tier:inst.tier,r:pm.r,c:pm.c,cells:pm.cells});
  st.unplaced.delete(uid);
  return true;
}
function removeInst(st,uid){
  const idx=st.pl.findIndex(p=>p.inst.uid===uid);
  if(idx<0)return null;
  const[p]=st.pl.splice(idx,1);
  st.unplaced.add(uid);
  return p; // 返回被移除的放置（含原位置）
}

// snapshot
function snapshot(st){
  return st.pl.map(p=>({uid:p.inst.uid,r:p.r,c:p.c}));
}

// restore
function restore(st,snap){
  st.pl=[];st.unplaced=new Set(st.instances.map(i=>i.uid));
  for(const s of snap){
    const pm=st.table.byAnchor.get(s.uid).get(s.r+","+s.c);
    if(pm)placeInst(st,s.uid,pm);
  }
}

// greedyPlace
function greedyPlace(st,uid,maxSamples,rng){
  const list=st.table.table.get(uid);
  if(!list||!list.length)return 0;
  const occ=buildOcc(st.pl,st.R,st.C,st.locked);
  const base=stateScore(st);
  const n=list.length,step=n>maxSamples?Math.ceil(n/maxSamples):1;
  const start=step>1?((rng()*step)|0):0;
  let bestPm=null,bestGain=-Infinity;
  for(let i=start;i<n;i+=step){
    const pm=list[i];
    if(!cellsFree(pm.cells,occ))continue;
    const inst=st.uidToInst.get(uid);
    st.pl.push({inst,eq:inst.eq,tier:inst.tier,r:pm.r,c:pm.c,cells:pm.cells});
    const sc=stateScore(st);
    st.pl.pop();
    const gain=sc-base;
    if(gain>bestGain||(gain===bestGain&&rng()<0.3)){bestGain=gain;bestPm=pm;}
  }
  if(bestPm&&placeInst(st,uid,bestPm))return bestGain;
  return 0;
}

// greedyPlaceAll
function greedyPlaceAll(st,uids,rng){
  for(const uid of uids){
    if(!st.unplaced.has(uid))continue;
    greedyPlace(st,uid,64,rng);
  }
}

// makeOperators
function makeOperators(st,rng){
  const T=st.table;
  return[
    {w:40,fn:()=>{ // move：移动一件到同形状另一位置
      if(!st.pl.length)return null;
      const p=st.pl[(rng()*st.pl.length)|0];
      const list=T.table.get(p.inst.uid);
      if(list.length<2)return null;
      const curKey=p.r+","+p.c;
      const pm=list[(rng()*list.length)|0];
      if(pm.r+","+pm.c===curKey)return null;
      const removed=removeInst(st,p.inst.uid);
      if(!removed)return null;
      if(placeInst(st,p.inst.uid,pm)){
        return()=>{removeInst(st,p.inst.uid);placeInst(st,p.inst.uid,T.byAnchor.get(p.inst.uid).get(curKey));};
      }
      // 放回去
      placeInst(st,p.inst.uid,T.byAnchor.get(p.inst.uid).get(curKey));
      return null;
    }},
    {w:15,fn:()=>{ // swap：两件交换位置
      if(st.pl.length<2)return null;
      const a=st.pl[(rng()*st.pl.length)|0];
      let b=st.pl[(rng()*st.pl.length)|0];
      if(a===b)return null;
      const pa=T.byAnchor.get(a.inst.uid).get(b.r+","+b.c);
      const pb=T.byAnchor.get(b.inst.uid).get(a.r+","+a.c);
      if(!pa||!pb)return null;
      const ka=a.r+","+a.c,kb=b.r+","+b.c;
      removeInst(st,a.inst.uid);removeInst(st,b.inst.uid);
      if(placeInst(st,a.inst.uid,pa)&&placeInst(st,b.inst.uid,pb)){
        return()=>{removeInst(st,a.inst.uid);removeInst(st,b.inst.uid);
          placeInst(st,a.inst.uid,T.byAnchor.get(a.inst.uid).get(ka));
          placeInst(st,b.inst.uid,T.byAnchor.get(b.inst.uid).get(kb));};
      }
      // 回滚
      removeInst(st,a.inst.uid);removeInst(st,b.inst.uid);
      placeInst(st,a.inst.uid,T.byAnchor.get(a.inst.uid).get(ka));
      placeInst(st,b.inst.uid,T.byAnchor.get(b.inst.uid).get(kb));
      return null;
    }},
    {w:14,fn:()=>{ // replace：下一件已放的，贪心上一件未放的
      if(!st.pl.length||!st.unplaced.size)return null;
      const p=st.pl[(rng()*st.pl.length)|0];
      const uids=[...st.unplaced];
      const uid=uids[(rng()*uids.length)|0];
      const removed=removeInst(st,p.inst.uid);
      if(!removed)return null;
      const pm0=T.byAnchor.get(p.inst.uid).get(p.r+","+p.c);
      const gain=greedyPlace(st,uid,24,rng);
      // 只要放上去了就接受（由退火准则决定）
      if(!st.unplaced.has(uid)){
        return()=>{removeInst(st,uid);placeInst(st,p.inst.uid,pm0);};
      }
      placeInst(st,p.inst.uid,pm0);
      return null;
    }},
    {w:10,fn:()=>{ // add：贪心上一件未放的
      if(!st.unplaced.size)return null;
      const uids=[...st.unplaced];
      const uid=uids[(rng()*uids.length)|0];
      greedyPlace(st,uid,24,rng);
      if(!st.unplaced.has(uid)){
        return()=>{removeInst(st,uid);};
      }
      return null;
    }},
    {w:6,fn:()=>{ // remove：下一件（逃离局部最优）
      if(!st.pl.length)return null;
      const p=st.pl[(rng()*st.pl.length)|0];
      const pm0=T.byAnchor.get(p.inst.uid).get(p.r+","+p.c);
      removeInst(st,p.inst.uid);
      return()=>{placeInst(st,p.inst.uid,pm0);};
    }},
    {w:12,fn:()=>{ // bigShuffle：LNS大拆，拿下 6-8 件重排（跳出局部最优）
      if(st.pl.length<6)return null;
      const snap=snapshot(st);
      const n=6+((rng()*Math.min(3,st.pl.length-6))|0);
      const idxs=new Set();
      while(idxs.size<n)idxs.add((rng()*st.pl.length)|0);
      const removedUids=[...idxs].map(i=>st.pl[i].inst.uid);
      for(const uid of removedUids)removeInst(st,uid);
      const toPlace=[...removedUids,...st.unplaced];
      for(let i=toPlace.length-1;i>0;i--){const j=(rng()*(i+1))|0;[toPlace[i],toPlace[j]]=[toPlace[j],toPlace[i]];}
      greedyPlaceAll(st,toPlace,rng);
      return()=>{restore(st,snap);};
    }},
    {w:15,fn:()=>{ // shuffle：拿下 2-4 件，重排它们+未放的
      if(st.pl.length<2)return null;
      const snap=snapshot(st);
      const n=2+((rng()*Math.min(3,st.pl.length-1))|0);
      const idxs=new Set();
      while(idxs.size<n)idxs.add((rng()*st.pl.length)|0);
      const removedUids=[...idxs].map(i=>st.pl[i].inst.uid);
      for(const uid of removedUids)removeInst(st,uid);
      // 随机顺序重放
      const toPlace=[...removedUids,...st.unplaced];
      for(let i=toPlace.length-1;i>0;i--){const j=(rng()*(i+1))|0;[toPlace[i],toPlace[j]]=[toPlace[j],toPlace[i]];}
      greedyPlaceAll(st,toPlace,rng);
      return()=>{restore(st,snap);};
    }},
  ];
}

// pickOp
function pickOp(ops,rng){
  const total=ops.reduce((a,o)=>a+o.w,0);
  let x=rng()*total;
  for(const o of ops){x-=o.w;if(x<=0)return o.fn;}
  return ops[0].fn;
}
// 单轮搜索：完全独立的 rng/st/ops，独立温度曲线
// 只通过 shared 跨轮共享全局最优（bestScore/bestSnap），不共享任何可变状态
function runRound(job, roundIdx, roundMs, shared) {
  const {instances, ctx, seed, tempMult} = job;
  const R = ctx.R, C = ctx.C;
  const locked = new Set(ctx.locked);
  const rng = mulberry32((seed + roundIdx * 104729) >>> 0);

  const table = buildPlacementTable(instances, R, C, locked);
  const st = newSolverState(instances, table, R, C, locked, ctx);
  const ops = makeOperators(st, rng);
  greedyPlaceAll(st, instances.map(i => i.uid), rng);
  st.score = stateScore(st);

  // 本轮温度按本轮初始分计算（与主线程单轮逻辑一致）
  const cells0 = st.pl.reduce((a,p) => a + p.cells.length, 0);
  const tb0 = ctx.fillAll ? st.score - cells0 * FILL_BONUS : st.score;
  const T0 = Math.max(1, Math.abs(tb0) * 0.03 * tempMult);
  const T1 = Math.max(1e-9, Math.abs(tb0) * 1e-3 * tempMult);

  const t0 = performance.now();
  const end = t0 + roundMs;
  let iters = 0;
  let curScore = st.score;
  if (st.score > shared.bestScore) {
    shared.bestScore = st.score;
    shared.bestSnap = snapshot(st);
  }

  while (performance.now() < end) {
    const now = performance.now();
    const frac = Math.min(1, (now - t0) / roundMs);
    const T = T0 * Math.pow(T1 / T0, frac);

    const batchUntil = performance.now() + 23;
    while (performance.now() < batchUntil && performance.now() < end) {
      iters++;
      const before = st.score;
      const undo = pickOp(ops, rng)();
      if (!undo) continue;
      st.score = stateScore(st);
      const delta = st.score - before;
      if (delta >= 0 || rng() < Math.exp(delta / T)) {
        // 接受
        if (st.score > curScore) curScore = st.score;
        if (st.score > shared.bestScore) {
          shared.bestScore = st.score;
          shared.bestSnap = snapshot(st);
        }
      } else {
        // 拒绝，回滚
        undo();
        st.score = before;
      }
    }

    // 节流进度汇报（约2秒一次）；最优分有提升时顺带把摆盘快照发给主线程做实时显示
    if (now - shared.lastProg > 2000) {
      shared.lastProg = now;
      const msg = {type: 'progress', iters: shared.iters + iters, bestScore: shared.bestScore, round: roundIdx + 1};
      if (shared.bestScore > shared.lastSentScore && shared.bestSnap.length) {
        shared.lastSentScore = shared.bestScore;
        msg.snap = shared.bestSnap;
      }
      postMessage(msg);
    }
  }

  shared.iters += iters;
}

// Worker 主逻辑：单线退火，多轮独立搜索
// 每 15 秒开一轮全新的搜索（新种子、新贪心起点、新温度曲线），全局最优跨轮保留
function runSingleLine(job) {
  SKILL_BY_ID = job.skillById;
  AWAKEN_DB = job.awakenDb;
  ATTRS = job.attrs;
  if (!ATTRS || !ATTRS.length) throw new Error('Worker 缺少 ATTRS（主线程未传入完整属性表）');

  const ROUND_MS = 15000;
  const budgetMs = job.budget * 1000;
  const t0 = performance.now();
  const shared = {bestScore: -Infinity, bestSnap: [], iters: 0, lastProg: 0, lastSentScore: -Infinity};

  let round = 0;
  while (performance.now() - t0 < budgetMs) {
    const remain = budgetMs - (performance.now() - t0);
    const roundMs = Math.min(ROUND_MS, remain);
    if (roundMs < 500) break; // 剩余太短就不开新轮了
    runRound(job, round, roundMs, shared);
    round++;
  }

  return {bestScore: shared.bestScore, bestSnap: shared.bestSnap, iters: shared.iters, rounds: round};
}



onmessage = function(e) {
  const job = e.data;
  if (job.type === 'solve') {
    try {
      const result = runSingleLine(job);
      postMessage({type: 'done', ...result});
    } catch (err) {
      postMessage({type: 'error', message: err.message, stack: err.stack});
    }
  }
};
