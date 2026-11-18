// ==================== 最强祖师 · 法宝摆放优化器主应用程序 ====================
const AWAKEN_DB = window.AWAKEN_DB;
var Ra = Object.defineProperty;
var La = (t, e, s) =>
  e in t
    ? Ra(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (t[e] = s);
var B = (t, e, s) => La(t, typeof e != "symbol" ? e + "" : e, s);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const l of n)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && a(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(n) {
    const l = {};
    return (
      n.integrity && (l.integrity = n.integrity),
      n.referrerPolicy && (l.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const l = s(n);
    fetch(n.href, l);
  }
})();
var g0,
  L,
  $s,
  Es,
  xe,
  $t,
  Ns,
  Hs,
  D0,
  G1,
  w1,
  Os,
  vt,
  Q0,
  K0,
  t0 = {},
  s0 = [],
  ja = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  w0 = Array.isArray;
function Me(t, e) {
  for (var s in e) t[s] = e[s];
  return t;
}
function It(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function za(t, e, s) {
  var a,
    n,
    l,
    i = {};
  for (l in e)
    l == "key" ? (a = e[l]) : l == "ref" ? (n = e[l]) : (i[l] = e[l]);
  if (
    (arguments.length > 2 &&
      (i.children = arguments.length > 3 ? g0.call(arguments, 2) : s),
    typeof t == "function" && t.defaultProps != null)
  )
    for (l in t.defaultProps) i[l] === void 0 && (i[l] = t.defaultProps[l]);
  return Y1(t, i, a, n, null);
}
function Y1(t, e, s, a, n) {
  var l = {
    type: t,
    props: e,
    key: s,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: n ?? ++$s,
    __i: -1,
    __u: 0,
  };
  return (n == null && L.vnode != null && L.vnode(l), l);
}
function R(t) {
  return t.children;
}
function b1(t, e) {
  ((this.props = t), (this.context = e));
}
function Qe(t, e) {
  if (e == null) return t.__ ? Qe(t.__, t.__i + 1) : null;
  for (var s; e < t.__k.length; e++)
    if ((s = t.__k[e]) != null && s.__e != null) return s.__e;
  return typeof t.type == "function" ? Qe(t) : null;
}
function Ua(t) {
  if (t.__P && t.__d) {
    var e = t.__v,
      s = e.__e,
      a = [],
      n = [],
      l = Me({}, e);
    ((l.__v = e.__v + 1),
      L.vnode && L.vnode(l),
      gt(
        t.__P,
        l,
        e,
        t.__n,
        t.__P.namespaceURI,
        32 & e.__u ? [s] : null,
        a,
        s ?? Qe(e),
        !!(32 & e.__u),
        n,
      ),
      (l.__v = e.__v),
      (l.__.__k[l.__i] = l),
      Us(a, l, n),
      (e.__e = e.__ = null),
      l.__e != s && Rs(l));
  }
}
function Rs(t) {
  if ((t = t.__) != null && t.__c != null)
    return (
      (t.__e = t.__c.base = null),
      t.__k.some(function (e) {
        if (e != null && e.__e != null) return (t.__e = t.__c.base = e.__e);
      }),
      Rs(t)
    );
}
function Et(t) {
  ((!t.__d && (t.__d = !0) && xe.push(t) && !a0.__r++) ||
    $t != L.debounceRendering) &&
    (($t = L.debounceRendering) || Ns)(a0);
}
function a0() {
  try {
    for (var t, e = 1; xe.length;)
      (xe.length > e && xe.sort(Hs), (t = xe.shift()), (e = xe.length), Ua(t));
  } finally {
    xe.length = a0.__r = 0;
  }
}
function Ls(t, e, s, a, n, l, i, o, c, u, f) {
  var v,
    d,
    m,
    A,
    h,
    b,
    I = (a && a.__k) || s0,
    y = e.length;
  for (c = Ga(s, e, I, c, y), v = 0; v < y; v++)
    (m = s.__k[v]) != null &&
      ((d = (m.__i != -1 && I[m.__i]) || t0),
      (m.__i = v),
      (b = gt(t, m, d, n, l, i, o, c, u, f)),
      (A = m.__e),
      m.ref &&
        d.ref != m.ref &&
        (d.ref && wt(d.ref, null, m), f.push(m.ref, m.__c || A, m)),
      h == null && A != null && (h = A),
      4 & m.__u
        ? ((c = js(m, c, t)), d.__e && (d.__e = null))
        : typeof m.type == "function" && b !== void 0
          ? (c = b)
          : A && (c = A.nextSibling),
      (m.__u &= -7));
  return ((s.__e = h), c);
}
function Ga(t, e, s, a, n) {
  var l,
    i,
    o,
    c,
    u,
    f = s.length,
    v = f,
    d = 0;
  for (t.__k = new Array(n), l = 0; l < n; l++)
    (i = e[l]) != null && typeof i != "boolean" && typeof i != "function"
      ? (typeof i == "string" ||
        typeof i == "number" ||
        typeof i == "bigint" ||
        i.constructor == String
          ? (i = t.__k[l] = Y1(null, i, null, null, null))
          : w0(i)
            ? (i = t.__k[l] = Y1(R, { children: i }, null, null, null))
            : i.constructor === void 0 && i.__b > 0
              ? (i = t.__k[l] =
                  Y1(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v))
              : (t.__k[l] = i),
        (c = l + d),
        (i.__ = t),
        (i.__b = t.__b + 1),
        (o = null),
        (u = i.__i = Ya(i, s, c, v)) != -1 && (v--, (o = s[u]) && (o.__u |= 2)),
        o == null || o.__v == null
          ? (u == -1 && (n > f ? d-- : n < f && d++),
            typeof i.type != "function" && (i.__u |= 4))
          : u != c &&
            (u == c - 1
              ? d--
              : u == c + 1
                ? d++
                : (u > c ? d-- : d++, (i.__u |= 4))))
      : (t.__k[l] = null);
  if (v)
    for (l = 0; l < f; l++)
      (o = s[l]) != null &&
        (2 & o.__u) == 0 &&
        (o.__e == a && (a = Qe(o)), Ys(o, o));
  return a;
}
function js(t, e, s) {
  var a, n;
  if (typeof t.type == "function") {
    for (a = t.__k, n = 0; a && n < a.length; n++)
      a[n] && ((a[n].__ = t), (e = js(a[n], e, s)));
    return e;
  }
  t.__e != e &&
    (e && t.type && !e.parentNode && (e = Qe(t)),
    (e = s.insertBefore(t.__e, e || null)));
  do e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function Ya(t, e, s, a) {
  var n,
    l,
    i,
    o = t.key,
    c = t.type,
    u = e[s],
    f = u != null && (2 & u.__u) == 0;
  if ((u === null && o == null) || (f && o == u.key && c == u.type)) return s;
  if (a > (f ? 1 : 0)) {
    for (n = s - 1, l = s + 1; n >= 0 || l < e.length;)
      if (
        (u = e[(i = n >= 0 ? n-- : l++)]) != null &&
        (2 & u.__u) == 0 &&
        o == u.key &&
        c == u.type
      )
        return i;
  }
  return -1;
}
function Nt(t, e, s) {
  e[0] == "-"
    ? t.setProperty(e, s ?? "")
    : (t[e] =
        s == null ? "" : typeof s != "number" || ja.test(e) ? s : s + "px");
}
function j1(t, e, s, a, n) {
  var l, i;
  e: if (e == "style")
    if (typeof s == "string") t.style.cssText = s;
    else {
      if ((typeof a == "string" && (t.style.cssText = a = ""), a))
        for (e in a) (s && e in s) || Nt(t.style, e, "");
      if (s) for (e in s) (a && s[e] == a[e]) || Nt(t.style, e, s[e]);
    }
  else if (e[0] == "o" && e[1] == "n")
    ((l = e != (e = e.replace(Os, "$1"))),
      (i = e.toLowerCase()),
      (e =
        i in t || e == "onFocusOut" || e == "onFocusIn"
          ? i.slice(2)
          : e.slice(2)),
      t.l || (t.l = {}),
      (t.l[e + l] = s),
      s
        ? a
          ? (s[w1] = a[w1])
          : ((s[w1] = vt), t.addEventListener(e, l ? K0 : Q0, l))
        : t.removeEventListener(e, l ? K0 : Q0, l));
  else {
    if (n == "http://www.w3.org/2000/svg")
      e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e != "width" &&
      e != "height" &&
      e != "href" &&
      e != "list" &&
      e != "form" &&
      e != "tabIndex" &&
      e != "download" &&
      e != "rowSpan" &&
      e != "colSpan" &&
      e != "role" &&
      e != "popover" &&
      e in t
    )
      try {
        t[e] = s ?? "";
        break e;
      } catch {}
    typeof s == "function" ||
      (s == null || (s === !1 && e[4] != "-")
        ? t.removeAttribute(e)
        : t.setAttribute(e, e == "popover" && s == 1 ? "" : s));
  }
}
function Ht(t) {
  return function (e) {
    if (this.l) {
      var s = this.l[e.type + t];
      if (e[G1] == null) e[G1] = vt++;
      else if (e[G1] < s[w1]) return;
      return s(L.event ? L.event(e) : e);
    }
  };
}
function gt(t, e, s, a, n, l, i, o, c, u) {
  var f,
    v,
    d,
    m,
    A,
    h,
    b,
    I,
    y,
    S,
    O,
    E,
    N,
    D,
    _,
    p,
    g = e.type;
  if (e.constructor !== void 0) return null;
  (128 & s.__u && ((c = !!(32 & s.__u)), (l = [(o = e.__e = s.__e)])),
    (f = L.__b) && f(e));
  e: if (typeof g == "function") {
    v = i.length;
    try {
      if (
        ((y = e.props),
        (S = g.prototype && g.prototype.render),
        (O = (f = g.contextType) && a[f.__c]),
        (E = f ? (O ? O.props.value : f.__) : a),
        s.__c
          ? (I = (d = e.__c = s.__c).__ = d.__E)
          : (S
              ? (e.__c = d = new g(y, E))
              : ((e.__c = d = new b1(y, E)),
                (d.constructor = g),
                (d.render = Qa)),
            O && O.sub(d),
            d.state || (d.state = {}),
            (d.__n = a),
            (m = d.__d = !0),
            (d.__h = []),
            (d._sb = [])),
        S && d.__s == null && (d.__s = d.state),
        S &&
          g.getDerivedStateFromProps != null &&
          (d.__s == d.state && (d.__s = Me({}, d.__s)),
          Me(d.__s, g.getDerivedStateFromProps(y, d.__s))),
        (A = d.props),
        (h = d.state),
        (d.__v = e),
        m)
      )
        (S &&
          g.getDerivedStateFromProps == null &&
          d.componentWillMount != null &&
          d.componentWillMount(),
          S && d.componentDidMount != null && d.__h.push(d.componentDidMount));
      else {
        if (
          (S &&
            g.getDerivedStateFromProps == null &&
            y !== A &&
            d.componentWillReceiveProps != null &&
            d.componentWillReceiveProps(y, E),
          e.__v == s.__v ||
            (!d.__e &&
              d.shouldComponentUpdate != null &&
              d.shouldComponentUpdate(y, d.__s, E) === !1))
        ) {
          (e.__v != s.__v && ((d.props = y), (d.state = d.__s), (d.__d = !1)),
            (e.__e = s.__e),
            (e.__k = s.__k),
            e.__k.some(function (w) {
              w && (w.__ = e);
            }),
            s0.push.apply(d.__h, d._sb),
            (d._sb = []),
            d.__h.length && i.push(d),
            (o = Qe(s)));
          break e;
        }
        (d.componentWillUpdate != null && d.componentWillUpdate(y, d.__s, E),
          S &&
            d.componentDidUpdate != null &&
            d.__h.push(function () {
              d.componentDidUpdate(A, h, b);
            }));
      }
      if (
        ((d.context = E),
        (d.props = y),
        (d.__P = t),
        (d.__e = !1),
        (N = L.__r),
        (D = 0),
        S)
      )
        ((d.state = d.__s),
          (d.__d = !1),
          N && N(e),
          (f = d.render(d.props, d.state, d.context)),
          s0.push.apply(d.__h, d._sb),
          (d._sb = []));
      else
        do
          ((d.__d = !1),
            N && N(e),
            (f = d.render(d.props, d.state, d.context)),
            (d.state = d.__s));
        while (d.__d && ++D < 25);
      ((d.state = d.__s),
        d.getChildContext != null && (a = Me(Me({}, a), d.getChildContext())),
        S &&
          !m &&
          d.getSnapshotBeforeUpdate != null &&
          (b = d.getSnapshotBeforeUpdate(A, h)),
        (_ =
          f != null && f.type === R && f.key == null
            ? Gs(f.props.children)
            : f),
        (o = Ls(t, w0(_) ? _ : [_], e, s, a, n, l, i, o, c, u)),
        (d.base = e.__e),
        (e.__u &= -161),
        d.__h.length && i.push(d),
        I && (d.__E = d.__ = null));
    } catch (w) {
      if (((i.length = v), (e.__v = null), c || l != null)) {
        if (w.then) {
          for (e.__u |= c ? 160 : 128; o && o.nodeType == 8 && o.nextSibling;)
            o = o.nextSibling;
          (l != null && (l[l.indexOf(o)] = null), (e.__e = o));
        } else if (l != null) for (p = l.length; p--;) It(l[p]);
      } else e.__e = s.__e;
      (e.__k == null && (e.__k = s.__k || []), w.then || zs(e), L.__e(w, e, s));
    }
  } else
    l == null && e.__v == s.__v
      ? ((e.__k = s.__k), (e.__e = s.__e))
      : (o = e.__e = Wa(s.__e, e, s, a, n, l, i, c, u));
  return ((f = L.diffed) && f(e), 128 & e.__u ? void 0 : o);
}
function zs(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(zs));
}
function Us(t, e, s) {
  for (var a = 0; a < s.length; a++) wt(s[a], s[++a], s[++a]);
  (L.__c && L.__c(e, t),
    t.some(function (n) {
      try {
        ((t = n.__h),
          (n.__h = []),
          t.some(function (l) {
            l.call(n);
          }));
      } catch (l) {
        L.__e(l, n.__v);
      }
    }));
}
function Gs(t) {
  return typeof t != "object" || t == null || t.__b > 0
    ? t
    : w0(t)
      ? t.map(Gs)
      : t.constructor !== void 0
        ? null
        : Me({}, t);
}
function Wa(t, e, s, a, n, l, i, o, c) {
  var u,
    f,
    v,
    d,
    m,
    A,
    h,
    b = s.props || t0,
    I = e.props,
    y = e.type;
  if (
    (y == "svg"
      ? (n = "http://www.w3.org/2000/svg")
      : y == "math"
        ? (n = "http://www.w3.org/1998/Math/MathML")
        : n || (n = "http://www.w3.org/1999/xhtml"),
    l != null)
  ) {
    for (u = 0; u < l.length; u++)
      if (
        (m = l[u]) &&
        "setAttribute" in m == !!y &&
        (y ? m.localName == y : m.nodeType == 3)
      ) {
        ((t = m), (l[u] = null));
        break;
      }
  }
  if (t == null) {
    if (y == null) return document.createTextNode(I);
    ((t = document.createElementNS(n, y, I.is && I)),
      o && (L.__m && L.__m(e, l), (o = !1)),
      (l = null));
  }
  if (y == null) b === I || (o && t.data == I) || (t.data = I);
  else {
    if (
      ((l =
        y == "textarea" && I.defaultValue != null
          ? null
          : l && g0.call(t.childNodes)),
      !o && l != null)
    )
      for (b = {}, u = 0; u < t.attributes.length; u++)
        b[(m = t.attributes[u]).name] = m.value;
    for (u in b)
      ((m = b[u]),
        u == "dangerouslySetInnerHTML"
          ? (v = m)
          : u == "children" ||
            u in I ||
            (u == "value" && "defaultValue" in I) ||
            (u == "checked" && "defaultChecked" in I) ||
            j1(t, u, null, m, n));
    for (u in I)
      ((m = I[u]),
        u == "children"
          ? (d = m)
          : u == "dangerouslySetInnerHTML"
            ? (f = m)
            : u == "value"
              ? (A = m)
              : u == "checked"
                ? (h = m)
                : (o && typeof m != "function") ||
                  b[u] === m ||
                  j1(t, u, m, b[u], n));
    if (f)
      (o ||
        (v && (f.__html == v.__html || f.__html == t.innerHTML)) ||
        (t.innerHTML = f.__html),
        (e.__k = []));
    else if (
      (v && (t.innerHTML = ""),
      Ls(
        e.type == "template" ? t.content : t,
        w0(d) ? d : [d],
        e,
        s,
        a,
        y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n,
        l,
        i,
        l ? l[0] : s.__k && Qe(s, 0),
        o,
        c,
      ),
      l != null)
    )
      for (u = l.length; u--;) It(l[u]);
    (o && y != "textarea") ||
      ((u = "value"),
      y == "progress" && A == null
        ? t.removeAttribute("value")
        : A != null &&
          (A !== t[u] ||
            (y == "progress" && !A) ||
            (y == "option" && A != b[u])) &&
          j1(t, u, A, b[u], n),
      (u = "checked"),
      h != null && h != t[u] && j1(t, u, h, b[u], n));
  }
  return t;
}
function wt(t, e, s) {
  try {
    if (typeof t == "function") {
      var a = typeof t.__u == "function";
      (a && t.__u(), (a && e == null) || (t.__u = t(e)));
    } else t.current = e;
  } catch (n) {
    L.__e(n, s);
  }
}
function Ys(t, e, s) {
  var a, n;
  if (
    (L.unmount && L.unmount(t),
    (a = t.ref) && ((a.current && a.current != t.__e) || wt(a, null, e)),
    (a = t.__c) != null)
  ) {
    if (a.componentWillUnmount)
      try {
        a.componentWillUnmount();
      } catch (l) {
        L.__e(l, e);
      }
    a.base = a.__P = a.__n = null;
  }
  if ((a = t.__k))
    for (n = 0; n < a.length; n++)
      a[n] && Ys(a[n], e, s || typeof t.type != "function");
  (s || It(t.__e), (t.__c = t.__ = t.__e = void 0));
}
function Qa(t, e, s) {
  return this.constructor(t, s);
}
function Ka(t, e, s) {
  var a, n, l, i;
  (e == document && (e = document.documentElement),
    L.__ && L.__(t, e),
    (n = (a = !1) ? null : e.__k),
    (l = []),
    (i = []),
    gt(
      e,
      (t = e.__k = za(R, null, [t])),
      n || t0,
      t0,
      e.namespaceURI,
      n ? null : e.firstChild ? g0.call(e.childNodes) : null,
      l,
      n ? n.__e : e.firstChild,
      a,
      i,
    ),
    Us(l, t, i),
    (t.props.children = null));
}
((g0 = s0.slice),
  (L = {
    __e: function (t, e, s, a) {
      for (var n, l, i; (e = e.__);)
        if ((n = e.__c) && !n.__)
          try {
            if (
              ((l = n.constructor) &&
                l.getDerivedStateFromError != null &&
                (n.setState(l.getDerivedStateFromError(t)), (i = n.__d)),
              n.componentDidCatch != null &&
                (n.componentDidCatch(t, a || {}), (i = n.__d)),
              i)
            )
              return (n.__E = n);
          } catch (o) {
            t = o;
          }
      throw t;
    },
  }),
  ($s = 0),
  (Es = function (t) {
    return t != null && t.constructor === void 0;
  }),
  (b1.prototype.setState = function (t, e) {
    var s;
    ((s =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = Me({}, this.state))),
      typeof t == "function" && (t = t(Me({}, s), this.props)),
      t && Me(s, t),
      t != null && this.__v && (e && this._sb.push(e), Et(this)));
  }),
  (b1.prototype.forceUpdate = function (t) {
    this.__v && ((this.__e = !0), t && this.__h.push(t), Et(this));
  }),
  (b1.prototype.render = R),
  (xe = []),
  (Ns =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Hs = function (t, e) {
    return t.__v.__b - e.__v.__b;
  }),
  (a0.__r = 0),
  (D0 = Math.random().toString(8)),
  (G1 = "__d" + D0),
  (w1 = "__a" + D0),
  (Os = /(PointerCapture)$|Capture$/i),
  (vt = 0),
  (Q0 = Ht(!1)),
  (K0 = Ht(!0)));
var Xa = 0;
function r(t, e, s, a, n, l) {
  e || (e = {});
  var i,
    o,
    c = e;
  if ("ref" in c)
    for (o in ((c = {}), e)) o == "ref" ? (i = e[o]) : (c[o] = e[o]);
  var u = {
    type: t,
    props: c,
    key: s,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Xa,
    __i: -1,
    __u: 0,
    __source: n,
    __self: l,
  };
  if (typeof t == "function" && (i = t.defaultProps))
    for (o in i) c[o] === void 0 && (c[o] = i[o]);
  return (L.vnode && L.vnode(u), u);
}
var X0,
  ne,
  T0,
  Ot,
  Rt = 0,
  Ws = [],
  Q = L,
  Lt = Q.__b,
  jt = Q.__r,
  zt = Q.diffed,
  Ut = Q.__c,
  Gt = Q.unmount,
  Yt = Q.__;
function Va(t, e) {
  (Q.__h && Q.__h(ne, t, Rt || e), (Rt = 0));
  var s = ne.__H || (ne.__H = { __: [], __h: [] });
  return (t >= s.__.length && s.__.push({}), s.__[t]);
}
function Qs(t, e) {
  var s = Va(X0++, 7);
  return (en(s.__H, e) && ((s.__ = t()), (s.__H = e), (s.__h = t)), s.__);
}
function Ja() {
  for (var t; (t = Ws.shift());) {
    var e = t.__H;
    if (t.__P && e)
      try {
        (e.__h.some(W1), e.__h.some(V0), (e.__h = []));
      } catch (s) {
        ((e.__h = []), Q.__e(s, t.__v));
      }
  }
}
((Q.__b = function (t) {
  ((ne = null), Lt && Lt(t));
}),
  (Q.__ = function (t, e) {
    (t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Yt && Yt(t, e));
  }),
  (Q.__r = function (t) {
    (jt && jt(t), (X0 = 0));
    var e = (ne = t.__c).__H;
    (e &&
      (T0 === ne
        ? ((e.__h = []),
          (ne.__h = []),
          e.__.some(function (s) {
            (s.__N && (s.__ = s.__N), (s.u = s.__N = void 0));
          }))
        : (e.__h.some(W1), e.__h.some(V0), (e.__h = []), (X0 = 0))),
      (T0 = ne));
  }),
  (Q.diffed = function (t) {
    zt && zt(t);
    var e = t.__c;
    (e &&
      e.__H &&
      (e.__H.__h.length &&
        ((Ws.push(e) !== 1 && Ot === Q.requestAnimationFrame) ||
          ((Ot = Q.requestAnimationFrame) || Za)(Ja)),
      e.__H.__.some(function (s) {
        s.u && ((s.__H = s.u), (s.u = void 0));
      })),
      (T0 = ne = null));
  }),
  (Q.__c = function (t, e) {
    (e.some(function (s) {
      try {
        (s.__h.some(W1),
          (s.__h = s.__h.filter(function (a) {
            return !a.__ || V0(a);
          })));
      } catch (a) {
        (e.some(function (n) {
          n.__h && (n.__h = []);
        }),
          (e = []),
          Q.__e(a, s.__v));
      }
    }),
      Ut && Ut(t, e));
  }),
  (Q.unmount = function (t) {
    Gt && Gt(t);
    var e,
      s = t.__c;
    s &&
      s.__H &&
      (s.__H.__.some(function (a) {
        try {
          W1(a);
        } catch (n) {
          e = n;
        }
      }),
      (s.__H = void 0),
      e && Q.__e(e, s.__v));
  }));
var Wt = typeof requestAnimationFrame == "function";
function Za(t) {
  var e,
    s = function () {
      (clearTimeout(a), Wt && cancelAnimationFrame(e), setTimeout(t));
    },
    a = setTimeout(s, 35);
  Wt && (e = requestAnimationFrame(s));
}
function W1(t) {
  var e = ne,
    s = t.__c;
  (typeof s == "function" && ((t.__c = void 0), s()), (ne = e));
}
function V0(t) {
  var e = ne;
  ((t.__c = t.__()), (ne = e));
}
function en(t, e) {
  return (
    !t ||
    t.length !== e.length ||
    e.some(function (s, a) {
      return s !== t[a];
    })
  );
}
var tn = Symbol.for("preact-signals");
function b0() {
  if (Se > 1) Se--;
  else {
    var t,
      e = !1;
    for (
      (function () {
        var n = r0;
        for (r0 = void 0; n !== void 0;) {
          var l = n.S;
          if (l.v === n.v)
            for (var i = l.t; i !== void 0; i = i.x) i.i === n.i && (i.i = l.i);
          n = n.o;
        }
      })();
      k1 !== void 0;
    ) {
      var s = k1;
      for (k1 = void 0, n0++; s !== void 0;) {
        var a = s.u;
        if (((s.u = void 0), (s.f &= -3), !(8 & s.f) && Xs(s)))
          try {
            s.c();
          } catch (n) {
            e || ((t = n), (e = !0));
          }
        s = a;
      }
    }
    if (((n0 = 0), Se--, e)) throw t;
  }
}
function sn(t) {
  if (Se > 0) return t();
  ((J0 = ++an), Se++);
  try {
    return t();
  } finally {
    b0();
  }
}
var y1,
  G = void 0;
function y0(t) {
  var e = G,
    s = y1;
  ((G = void 0), (y1 = void 0));
  try {
    return t();
  } finally {
    ((G = e), (y1 = s));
  }
}
var k1 = void 0,
  Se = 0,
  n0 = 0,
  an = 0,
  J0 = 0,
  r0 = void 0,
  l0 = 0;
function Ks(t) {
  if (G !== void 0) {
    var e = t.n;
    if (e === void 0 || e.t !== G)
      return (
        (e = {
          i: 0,
          S: t,
          p: G.s,
          n: void 0,
          t: G,
          e: void 0,
          x: void 0,
          r: e,
        }),
        G.s !== void 0 && (G.s.n = e),
        (G.s = e),
        (t.n = e),
        32 & G.f && t.S(e),
        e
      );
    if (e.i === -1)
      return (
        (e.i = 0),
        e.n !== void 0 &&
          ((e.n.p = e.p),
          e.p !== void 0 && (e.p.n = e.n),
          (e.p = G.s),
          (e.n = void 0),
          (G.s.n = e),
          (G.s = e)),
        e
      );
  }
}
function Z(t, e) {
  ((this.v = t),
    (this.i = 0),
    (this.n = void 0),
    (this.t = void 0),
    (this.l = 0),
    (this.W = e?.watched),
    (this.Z = e?.unwatched),
    (this.name = e?.name));
}
Z.prototype.brand = tn;
Z.prototype.h = function () {
  return !0;
};
Z.prototype.S = function (t) {
  var e = this,
    s = this.t;
  s !== t &&
    t.e === void 0 &&
    ((t.x = s),
    (this.t = t),
    s !== void 0
      ? (s.e = t)
      : y0(function () {
          var a;
          (a = e.W) == null || a.call(e);
        }));
};
Z.prototype.U = function (t) {
  var e = this;
  if (this.t !== void 0) {
    var s = t.e,
      a = t.x;
    (s !== void 0 && ((s.x = a), (t.e = void 0)),
      a !== void 0 && ((a.e = s), (t.x = void 0)),
      t === this.t &&
        ((this.t = a),
        a === void 0 &&
          y0(function () {
            var n;
            (n = e.Z) == null || n.call(e);
          })));
  }
};
Z.prototype.subscribe = function (t) {
  var e = this;
  return H1(
    function () {
      var s = e.value;
      y0(function () {
        return t(s);
      });
    },
    { name: "sub" },
  );
};
Z.prototype.valueOf = function () {
  return this.value;
};
Z.prototype.toString = function () {
  return this.value + "";
};
Z.prototype.toJSON = function () {
  return this.value;
};
Z.prototype.peek = function () {
  var t = this;
  return y0(function () {
    return t.value;
  });
};
Object.defineProperty(Z.prototype, "value", {
  get: function () {
    var t = Ks(this);
    return (t !== void 0 && (t.i = this.i), this.v);
  },
  set: function (t) {
    if (t !== this.v) {
      if (n0 > 100) throw new Error("Cycle detected");
      ((function (s) {
        Se !== 0 &&
          n0 === 0 &&
          s.l !== J0 &&
          ((s.l = J0), (r0 = { S: s, v: s.v, i: s.i, o: r0 }));
      })(this),
        (this.v = t),
        this.i++,
        l0++,
        Se++);
      try {
        for (var e = this.t; e !== void 0; e = e.x) e.t.N();
      } finally {
        b0();
      }
    }
  },
});
function C(t, e) {
  return new Z(t, e);
}
function Xs(t) {
  for (var e = t.s; e !== void 0; e = e.n)
    if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
  return !1;
}
function Vs(t) {
  for (var e = t.s; e !== void 0; e = e.n) {
    var s = e.S.n;
    if ((s !== void 0 && (e.r = s), (e.S.n = e), (e.i = -1), e.n === void 0)) {
      t.s = e;
      break;
    }
  }
}
function Js(t) {
  for (var e = t.s, s = void 0; e !== void 0;) {
    var a = e.p;
    (e.i === -1
      ? (e.S.U(e), a !== void 0 && (a.n = e.n), e.n !== void 0 && (e.n.p = a))
      : (s = e),
      (e.S.n = e.r),
      e.r !== void 0 && (e.r = void 0),
      (e = a));
  }
  t.s = s;
}
function Ze(t, e) {
  (Z.call(this, void 0, e),
    (this.x = t),
    (this.s = void 0),
    (this.g = l0 - 1),
    (this.f = 4));
}
Ze.prototype = new Z();
Ze.prototype.h = function () {
  if (((this.f &= -3), 1 & this.f)) return !1;
  if ((36 & this.f) == 32 || ((this.f &= -5), this.g === l0)) return !0;
  if (((this.g = l0), (this.f |= 1), this.i > 0 && !Xs(this)))
    return ((this.f &= -2), !0);
  var t = G;
  try {
    (Vs(this), (G = this));
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) &&
      ((this.v = e), (this.f &= -17), this.i++);
  } catch (s) {
    ((this.v = s), (this.f |= 16), this.i++);
  }
  return ((G = t), Js(this), (this.f &= -2), !0);
};
Ze.prototype.S = function (t) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n) e.S.S(e);
  }
  Z.prototype.S.call(this, t);
};
Ze.prototype.U = function (t) {
  if (this.t !== void 0 && (Z.prototype.U.call(this, t), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n) e.S.U(e);
  }
};
Ze.prototype.N = function () {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var t = this.t; t !== void 0; t = t.x) t.t.N();
  }
};
Object.defineProperty(Ze.prototype, "value", {
  get: function () {
    if (1 & this.f) throw new Error("Cycle detected");
    var t = Ks(this);
    if ((this.h(), t !== void 0 && (t.i = this.i), 16 & this.f)) throw this.v;
    return this.v;
  },
});
function te(t, e) {
  return new Ze(t, e);
}
function Zs(t) {
  var e = t.m;
  if (((t.m = void 0), typeof e == "function")) {
    Se++;
    var s = G;
    G = void 0;
    try {
      e();
    } catch (a) {
      throw ((t.f &= -2), (t.f |= 8), bt(t), a);
    } finally {
      ((G = s), b0());
    }
  }
}
function bt(t) {
  for (var e = t.s; e !== void 0; e = e.n) e.S.U(e);
  ((t.x = void 0), (t.s = void 0), Zs(t));
}
function nn(t) {
  if (G !== this) throw new Error("Out-of-order effect");
  (Js(this), (G = t), (this.f &= -2), 8 & this.f && bt(this), b0());
}
function h1(t, e) {
  ((this.x = t),
    (this.m = void 0),
    (this.s = void 0),
    (this.u = void 0),
    (this.f = 32),
    (this.name = e?.name),
    y1 && y1.push(this));
}
h1.prototype.c = function () {
  var t = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var e = this.x();
    typeof e == "function" && (this.m = e);
  } finally {
    t();
  }
};
h1.prototype.S = function () {
  if (1 & this.f) throw new Error("Cycle detected");
  ((this.f |= 1), (this.f &= -9), Zs(this), Vs(this), Se++);
  var t = G;
  return ((G = this), nn.bind(this, t));
};
h1.prototype.N = function () {
  2 & this.f || ((this.f |= 2), (this.u = k1), (k1 = this));
};
h1.prototype.d = function () {
  ((this.f |= 8), 1 & this.f || bt(this));
};
h1.prototype.dispose = function () {
  this.d();
};
function H1(t, e) {
  var s = new h1(t, e);
  try {
    s.c();
  } catch (n) {
    throw (s.d(), n);
  }
  var a = s.d.bind(s);
  return ((a[Symbol.dispose] = a), a);
}
var ea,
  z1,
  rn = typeof window < "u" && !!window.__PREACT_SIGNALS_DEVTOOLS__,
  ta = [];
H1(function () {
  ea = this.N;
})();
function m1(t, e) {
  L[t] = e.bind(null, L[t] || function () {});
}
function i0(t) {
  if (z1) {
    var e = z1;
    ((z1 = void 0), e());
  }
  z1 = t && t.S();
}
function sa(t) {
  var e = this,
    s = t.data,
    a = on(s);
  ((a.name = "ReactiveDom"), (a.value = s));
  var n = Qs(function () {
      for (var o = e, c = e.__v; (c = c.__);)
        if (c.__c) {
          c.__c.__$f |= 4;
          break;
        }
      var u = te(function () {
          var m = a.value.value;
          return m === 0 ? 0 : m === !0 ? "" : m || "";
        }),
        f = te(function () {
          return !Array.isArray(u.value) && !Es(u.value);
        }),
        v = H1(function () {
          if (((this.N = aa), f.value)) {
            var m = u.value;
            o.__v &&
              o.__v.__e &&
              o.__v.__e.nodeType === 3 &&
              (o.__v.__e.data = m);
          }
        }),
        d = e.__$u.d;
      return (
        (e.__$u.d = function () {
          (v(), d.call(this));
        }),
        [f, u]
      );
    }, []),
    l = n[0],
    i = n[1];
  return l.value ? i.peek() : i.value;
}
sa.displayName = "ReactiveTextNode";
Object.defineProperties(Z.prototype, {
  constructor: { configurable: !0, value: void 0 },
  type: { configurable: !0, value: sa },
  props: {
    configurable: !0,
    get: function () {
      var t = this;
      return {
        data: {
          get value() {
            return t.value;
          },
        },
      };
    },
  },
  __b: { configurable: !0, value: 1 },
});
m1("__b", function (t, e) {
  if (typeof e.type == "string") {
    var s,
      a = e.props;
    for (var n in a)
      if (n !== "children") {
        var l = a[n];
        l instanceof Z &&
          (s || (e.__np = s = {}), (s[n] = l), (a[n] = l.peek()));
      }
  }
  t(e);
});
m1("__r", function (t, e) {
  if ((t(e), e.type !== R)) {
    i0();
    var s,
      a = e.__c;
    (a &&
      ((a.__$f &= -2),
      (s = a.__$u) === void 0 &&
        (a.__$u = s =
          (function (n, l) {
            var i;
            return (
              H1(
                function () {
                  i = this;
                },
                { name: l },
              ),
              (i.c = n),
              i
            );
          })(
            (function (n) {
              return function () {
                var l;
                (rn && ((l = this.y) == null || l.call(this)),
                  (n.__$f |= 1),
                  n.setState({}));
              };
            })(a),
            typeof e.type == "function"
              ? e.type.displayName || e.type.name
              : "",
          ))),
      i0(s));
  }
});
m1("__e", function (t, e, s, a) {
  (i0(), t(e, s, a));
});
m1("diffed", function (t, e) {
  i0();
  var s;
  if (typeof e.type == "string" && (s = e.__e)) {
    var a = e.__np,
      n = e.props,
      l = s.U;
    if (l)
      for (var i in l) {
        var o = l[i];
        o === void 0 || (a && i in a) || (o.d(), (l[i] = void 0));
      }
    if (a) {
      l || ((l = {}), (s.U = l));
      for (var c in a) {
        var u = l[c],
          f = a[c];
        u === void 0 ? ((u = ln(s, c, f, n)), (l[c] = u)) : u.o(f, n);
      }
    }
  }
  t(e);
});
function ln(t, e, s, a) {
  var n = e in t && t.ownerSVGElement === void 0,
    l = C(s);
  return {
    o: function (i, o) {
      ((l.value = i), (a = o));
    },
    d: H1(function () {
      this.N = aa;
      var i = l.value.value;
      a[e] !== i &&
        ((a[e] = i),
        n
          ? (t[e] = i)
          : i != null && (i !== !1 || e[4] === "-")
            ? t.setAttribute(e, i)
            : t.removeAttribute(e));
    }),
  };
}
m1("unmount", function (t, e) {
  if (typeof e.type == "string") {
    var s = e.__e;
    if (s) {
      var a = s.U;
      if (a) {
        s.U = void 0;
        for (var n in a) {
          var l = a[n];
          l && l.d();
        }
      }
    }
    var i = e.__np;
    if (i) {
      var o = e.props;
      for (var c in i) o[c] = i[c];
    }
    e.__np = void 0;
  } else {
    var u = e.__c;
    if (u) {
      var f = u.__$u;
      f && ((u.__$u = void 0), f.d());
    }
  }
  t(e);
});
m1("__h", function (t, e, s, a) {
  (a < 3 && (e.__$f |= 2), t(e, s, a));
});
b1.prototype.shouldComponentUpdate = function (t, e) {
  if (this.__R) return !0;
  var s = this.__$u,
    a = s && s.s !== void 0;
  for (var n in e) return !0;
  if (this.__f || (typeof this.u == "boolean" && this.u === !0)) {
    var l = 2 & this.__$f;
    if (!(a || l || 4 & this.__$f) || 1 & this.__$f) return !0;
  } else if (!(a || 4 & this.__$f) || 3 & this.__$f) return !0;
  for (var i in t) if (i !== "__source" && t[i] !== this.props[i]) return !0;
  for (var o in this.props) if (!(o in t)) return !0;
  return !1;
};
function on(t, e) {
  return Qs(function () {
    return C(t, e);
  }, []);
}
var dn = function (t) {
  queueMicrotask(function () {
    queueMicrotask(t);
  });
};
function un() {
  sn(function () {
    for (var t; (t = ta.shift());) ea.call(t);
  });
}
function aa() {
  ta.push(this) === 1 && (L.requestAnimationFrame || dn)(un);
}
const z = window.z,
  Fe = {
    1: "金",
    2: "木",
    3: "水",
    4: "火",
    5: "土",
    6: "雷",
    7: "邪",
    8: "体",
  },
  yt = {
    0: "其他",
    2: "剑",
    3: "乐",
    4: "异",
    5: "御",
    6: "枪",
    7: "刀",
    8: "锤",
    9: "幡",
  },
  na = (t) => yt[t] ?? "其他",
  isSingleCellEquip = (eq) => {
    if (!eq) return false;
    if (eq.cells && eq.cells.length === 1) return true;
    if (eq.shapeId) {
      const sh = Ca.get(eq.shapeId);
      if (sh && sh.cells && sh.cells.length === 1) return true;
    }
    return eq.weaponForm === 0;
  },
  FORM_NAMES = {
    0: "珠",
    1: "珠",
    7: "刀",
    2: "剑",
    6: "枪",
    3: "乐",
    4: "异",
    5: "御",
    8: "锤",
    9: "幡",
    10: "斗",
  },
  FORM_TABS = [
    { id: 0, name: "全" },
    { id: 7, name: "刀" },
    { id: 2, name: "剑" },
    { id: 6, name: "枪" },
    { id: 3, name: "乐" },
    { id: 4, name: "异" },
    { id: 5, name: "御" },
    { id: 8, name: "锤" },
    { id: 9, name: "幡" },
    { id: 1, name: "珠" },
  ],
  getEquipForms = (eq) => {
    if (!eq) return [1];
    if (eq.id === 250104 || eq.name?.includes("如意金箍棒")) return [6, 10]; // 枪 + 斗
    if (isSingleCellEquip(eq)) return [1]; // 单格归纳为珠
    return [eq.weaponForm ?? 1];
  },
  getEquipFormLabel = (eq) => {
    if (!eq) return "珠";
    if (eq.id === 250104 || eq.name?.includes("如意金箍棒")) return "斗·枪";
    if (isSingleCellEquip(eq)) return "珠";
    return FORM_NAMES[eq.weaponForm] || na(eq.weaponForm) || "珠";
  },
  getBoardFormChar = (eq) => {
    if (!eq) return "珠";
    if (eq.id === 250104 || eq.name?.includes("如意金箍棒")) return "枪"; // 金箍棒在摆盘只展示枪！
    if (isSingleCellEquip(eq)) return "珠"; // 单格归纳为珠！
    return FORM_NAMES[eq.weaponForm] || "珠";
  },
  a1 = 2001,
  o0 = 2002,
  d0 = 2003,
  kt = 2004,
  At = 2005,
  qt = 2006,
  Z0 = 2025,
  et = 2027,
  de = 1e4,
  _t = (t, e) => {
    if (t.quality !== 5 || e === void 0 || !t.elder) return 0;
    let s = 0;
    for (const [a, n] of t.elder.starBonus) a <= e && (s = n);
    return s / de;
  },
  k0 = 5,
  x1 = 4,
  cn = { [kt]: a1, [At]: o0, [qt]: d0 },
  ACQUIRED_TALENTS = window.ACQUIRED_TALENTS,
  pn = (t, e, acTalents = (typeof ACQUIRED_TALENTS !== "undefined" ? ACQUIRED_TALENTS : []), acPicks = (typeof AcquiredTalentState !== "undefined" ? AcquiredTalentState.value : [])) => {
    var l;
    const s = new Map(t.map((i) => [i.id, i])),
      a = {},
      n = new Set();
    for (const i of e) {
      const o = s.get(i);
      if (!o || n.has(i)) continue;
      n.add(i);
      const c = cn[o.attr];
      if (c === void 0) continue;
      const u = a[(l = o.form)] ?? (a[l] = {});
      u[c] = (u[c] ?? 0) + o.value;
    }
    if (acTalents && acPicks) {
      const acMap = new Map(acTalents.map((i) => [i.id, i]));
      const acPicked = new Set();
      for (const i of acPicks) {
        const o = acMap.get(i);
        if (!o || acPicked.has(i)) continue;
        acPicked.add(i);
        if (o.forms && (o.base || o.attrs)) {
          const srcAttrs = o.base || o.attrs;
          for (const f of o.forms) {
            const u = a[f] ?? (a[f] = {});
            for (const [attr, val] of Object.entries(srcAttrs)) {
              const c = cn[attr];
              if (c !== void 0) {
                u[c] = (u[c] ?? 0) + val;
              }
            }
          }
        }
      }
    }
    return a;
  },
  l1 = (t, e, s, a, n, awLv = (typeof AwakenState !== "undefined" ? (AwakenState.value?.[t.id] ?? 0) : 0)) => {
    const l = _t(t, e),
      i = (s?.[t.weaponForm]?.[a] ?? 0) / de,
      o = l + i;
    let aw = 0;
    const awData = AWAKEN_DB[t.id];
    if (awData && awLv > 0) {
      for (let lv = 1; lv <= 5 && lv <= awLv; lv++) {
        const effs = awData.levels[lv];
        if (effs) {
          for (const ef of effs) {
            if (ef.type === "self_mult") aw += ef.pct / de;
          }
        }
      }
    }
    const val = (o || aw) ? Math.floor(n * (1 + o) * (1 + aw)) : n;
    return val > n ? val : n;
  },
  le = 6,
  J = 7,
  C1 = le * J,
  X = (t, e) => t * J + e,
  $e = (t) => (t / J) | 0,
  Ee = (t) => t % J,
  hn = () => ({ lo: 0, hi: 0 }),
  mn = (t, e) => {
    e < 32 ? (t.lo |= 1 << e) : (t.hi |= 1 << (e - 32));
  },
  Qt = (t) => {
    const e = hn();
    for (const s of t) {
      if (s < 0 || s >= C1)
        throw new RangeError(`格索引 ${s} 越界（0~${C1 - 1}）`);
      mn(e, s);
    }
    return e;
  },
  fn = (t, e, s) => {
    const a = new Set(t),
      n = new Set();
    for (const l of t) {
      const i = $e(l),
        o = Ee(l);
      (i > 0 && n.add(X(i - 1, o)),
        i < e - 1 && n.add(X(i + 1, o)),
        o > 0 && n.add(X(i, o - 1)),
        o < s - 1 && n.add(X(i, o + 1)));
    }
    for (const l of a) n.delete(l);
    return [...n].sort((l, i) => l - i);
  },
  vn = (t, e) => {
    for (const s of t) {
      const a = $e(s),
        n = Ee(s);
      for (const l of e) {
        const i = $e(l),
          o = Ee(l);
        if (Math.abs(a - i) + Math.abs(n - o) === 1) return !0;
      }
    }
    return !1;
  },
  Q1 = (t, e, s = { kind: "power" }) => {
    const a = new Map(t.equips.map((h) => [h.id, h])),
      n = new Map(t.skills.map((h) => [h.id, h])),
      l = new Map(t.attrs.map((h) => [h.id, h])),
      i = (h) => l.get(h)?.name ?? `属性${h}`,
      o = (h) => l.get(h)?.nPower ?? 0,
      c = (h) => (s.kind === "power" ? o(h) : (s.weights?.[h] ?? o(h))),
      u = (h) => (l.get(h)?.kind === 2 ? 0.01 : 1),
      f = s.critRate ?? 0,
      v = s.kind === "weighted" && s.mode === "product",
      d = e.map(() => []);
    for (let h = 0; h < e.length; h++)
      for (let b = h + 1; b < e.length; b++)
        vn(e[h].cells, e[b].cells) && (d[h].push(b), d[b].push(h));
    const m = [],
      A = new Map();
    for (let h = 0; h < e.length; h++) {
      const b = e[h],
        I = a.get(b.equipId);
      if (!I) throw new Error(`方案引用了不存在的法宝 ${b.equipId}`);
      const y = new Map(),
        S = [],
        O = (k, M) => y.set(k, (y.get(k) ?? 0) + M),
        E = s.elderStars?.[b.equipId],
        awLv = s.awaken?.[b.equipId] ?? 0,
        awData = AWAKEN_DB[b.equipId];
      for (const k of I.skillIds) {
        const M = n.get(k);
        if (M.scope !== "self") continue;
        const T = d[h].filter(
          (P) => ((1 << a.get(e[P].equipId).element) & M.elementMask) !== 0,
        );
        if (T.length !== 0)
          for (const P of M.buffs) {
            const F = P.value * T.length;
            (O(P.attr, F),
              S.push({
                attr: P.attr,
                attrName: i(P.attr),
                value: F,
                kind: "self",
                skillId: M.id,
                skillName: M.name,
                skillDesc: M.desc,
                perUnit: P.value,
                matchedNames: T.map((x) => e[x].name),
              }));
          }
      }
      if (awData && awLv >= 1) {
        for (let lv = 1; lv <= 5 && lv <= awLv; lv++) {
          const effs = awData.levels[lv];
          if (!effs) continue;
          for (const ef of effs) {
            if (ef.type !== "self_per_adjacent") continue;
            const T = d[h].filter(
              (P) => a.get(e[P].equipId).element === ef.element,
            );
            if (T.length !== 0) {
              const F = ef.perUnit * T.length;
              (O(ef.attr, F),
                S.push({
                  attr: ef.attr,
                  attrName: i(ef.attr),
                  value: F,
                  kind: "self",
                  skillId: 90000 + lv,
                  skillName: `觉醒${lv}`,
                  skillDesc: `相邻${Fe[ef.element]||""}系法宝每件提升自身加成`,
                  perUnit: ef.perUnit,
                  matchedNames: T.map((x) => e[x].name),
                }));
            }
          }
        }
      }
      for (const k of d[h]) {
        const M = a.get(e[k].equipId);
        for (const T of M.skillIds) {
          const P = n.get(T);
          if (
            P.scope === "adjacent" &&
            ((1 << I.element) & P.elementMask) !== 0
          )
            for (const F of P.buffs)
              (O(F.attr, F.value),
                S.push({
                  attr: F.attr,
                  attrName: i(F.attr),
                  value: F.value,
                  kind: "neighbor",
                  skillId: P.id,
                  skillName: P.name,
                  skillDesc: P.desc,
                  fromName: `${e[k].name} ${e[k].tier} 阶`,
                }));
        }
      }
      const N = (k) =>
          l1(I, E, s.talents, k, I.base.find((M) => M.attr === k)?.value ?? 0, awLv),
        D = N(a1) * (1 + (y.get(kt) ?? 0) / de),
        _ = N(o0) * (1 + (y.get(At) ?? 0) / de),
        p = N(d0) * (1 + (y.get(qt) ?? 0) / de);
      m.push({
        piece: b,
        neighbors: d[h],
        base: I.base.map((k) => ({
          attr: k.attr,
          attrName: i(k.attr),
          value: l1(I, E, s.talents, k.attr, k.value, awLv),
        })),
        accumulated: [...y.entries()]
          .filter(([, k]) => k !== 0)
          .sort((k, M) => k[0] - M[0])
          .map(([k, M]) => ({ attr: k, attrName: i(k), value: M })),
        finalAtk: D,
        finalDef: _,
        finalHp: p,
        sources: S,
        powerScore: 0,
        weightedScore: 0,
      });
    }

    // 觉醒相邻增益（觉3~5）
    for (let h = 0; h < e.length; h++) {
      const b = e[h],
        I = a.get(b.equipId),
        awLv = s.awaken?.[b.equipId] ?? 0,
        awData = AWAKEN_DB[b.equipId];
      if (!awData || awLv < 3) continue;
      let adjEf = null, adjLv = 0;
      for (let lv = 3; lv <= awLv; lv++) {
        const effs = awData.levels[lv];
        if (effs) {
          for (const ef of effs) {
            if (ef.type === "adjacent_buff") { adjEf = ef; adjLv = lv; }
          }
        }
      }
      if (!adjEf) continue;
      const mult = adjEf.pct / de;
      for (const p of d[h]) {
        const peq = a.get(e[p].equipId);
        if (peq.element !== adjEf.element) continue;
        const pc = m[p];
        const bA = pc.base.find((k) => k.attr === a1)?.value ?? 0,
          bD = pc.base.find((k) => k.attr === o0)?.value ?? 0,
          bH = pc.base.find((k) => k.attr === d0)?.value ?? 0;
        const dA = Math.floor(bA * mult),
          dD = Math.floor(bD * mult),
          dH = Math.floor(bH * mult);
        pc.finalAtk += dA;
        pc.finalDef += dD;
        pc.finalHp += dH;
        pc.sources.push({
          attr: a1,
          attrName: "相邻增益",
          value: adjEf.pct,
          kind: "neighbor",
          skillId: 90003,
          skillName: `觉醒${adjLv}`,
          skillDesc: `来自 ${e[h].name} 觉醒${adjLv} 的相邻加成 (+ ${adjEf.pct/100}%)`,
          fromName: `${e[h].name} 觉醒${adjLv}`,
        });
      }
    }

    // 觉醒全局增益（同形态/同系全局增益）
    for (let h = 0; h < e.length; h++) {
      const b = e[h],
        I = a.get(b.equipId),
        awLv = s.awaken?.[b.equipId] ?? 0,
        awData = AWAKEN_DB[b.equipId];
      if (!awData || awLv < 3) continue;
      for (let lv = 3; lv <= awLv; lv++) {
        const effs = awData.levels[lv];
        if (!effs) continue;
        for (const ef of effs) {
          if (ef.type !== "global_form" && ef.type !== "global_element") continue;
          const mult = ef.pct / de;
          for (let p = 0; p < e.length; p++) {
            if (p === h) continue;
            const peq = a.get(e[p].equipId);
            if (ef.type === "global_form") {
              const srcForms = getEquipForms(I);
              const targetForms = getEquipForms(peq);
              if (!srcForms.some(f => targetForms.includes(f))) continue;
            } else if (peq.element !== ef.element) continue;
            const pc = m[p];
            const bA = pc.base.find((k) => k.attr === a1)?.value ?? 0,
              bD = pc.base.find((k) => k.attr === o0)?.value ?? 0,
              bH = pc.base.find((k) => k.attr === d0)?.value ?? 0;
            const dA = Math.floor(bA * mult),
              dD = Math.floor(bD * mult),
              dH = Math.floor(bH * mult);
            pc.finalAtk += dA;
            pc.finalDef += dD;
            pc.finalHp += dH;
            pc.sources.push({
              attr: a1,
              attrName: ef.type === "global_form" ? "形态全局" : "同系全局",
              value: ef.pct,
              kind: "global",
              skillId: 90005,
              skillName: `觉醒${lv}`,
              skillDesc: `来自 ${e[h].name} 觉醒${lv} 的全局加成 (+ ${ef.pct/100}%)`,
              fromName: `${e[h].name} 觉醒${lv}`,
            });
          }
        }
      }
    }

    // 汇总每件法宝的得分与总计
    for (let h = 0; h < m.length; h++) {
      const pc = m[h],
        D = pc.finalAtk,
        _ = pc.finalDef,
        p = pc.finalHp;
      pc.sources.sort((k, M) => k.attr - M.attr);
      const accMap = new Map(pc.accumulated.map(k => [k.attr, k.value]));
      const g = (k) =>
        k === a1 ? D : k === o0 ? _ : k === d0 ? p : (accMap.get(k) ?? 0);
      let w = 0;
      for (const k of t.attrs) w += g(k.id) * u(k.id) * k.nPower;
      let q = 0;
      if (v) {
        const k = D * (1 + g(Z0) / de) * (1 + f * (g(et) / de));
        q = c(a1) * k;
        for (const M of t.attrs)
          M.id === a1 ||
            M.id === Z0 ||
            M.id === et ||
            (q += g(M.id) * u(M.id) * c(M.id));
      } else for (const k of t.attrs) q += g(k.id) * u(k.id) * c(k.id);
      pc.powerScore = w;
      pc.weightedScore = q;

      for (const k of t.attrs) {
        const M = g(k.id);
        M !== 0 && A.set(k.id, (A.get(k.id) ?? 0) + M);
      }
    }

    return {
      pieces: m,
      totals: [...A.entries()]
        .sort((h, b) => h[0] - b[0])
        .map(([h, b]) => ({ attr: h, attrName: i(h), value: b })),
      powerTotal: m.reduce((h, b) => h + b.powerScore, 0),
      weightedTotal: m.reduce((h, b) => h + b.weightedScore, 0),
    };
  },
  ra =
    'var xt = Object.defineProperty;\nvar Lt = (T, C, v) =>\n  C in T\n    ? xt(T, C, { enumerable: !0, configurable: !0, writable: !0, value: v })\n    : (T[C] = v);\nvar a = (T, C, v) => Lt(T, typeof C != "symbol" ? C + "" : C, v);\n(function () {\n  "use strict";\n  const T = () => (typeof performance < "u" ? performance.now() : Date.now()),\n    C = (n = 100) => {\n      const t = typeof MessageChannel < "u" ? new MessageChannel() : null;\n      let e = null;\n      t &&\n        (t.port1.onmessage = () => {\n          const o = e;\n          ((e = null), o?.());\n        });\n      let s = T();\n      return (o) => {\n        const i = T();\n        if (!t || i - s >= n) {\n          ((s = i), setTimeout(o, 0));\n          return;\n        }\n        ((e = o), t.port2.postMessage(0));\n      };\n    },\n    A = (n, t) => n * 7 + t,\n    V = (n) => (n / 7) | 0,\n    J = (n) => n % 7,\n    Q = () => ({ lo: 0, hi: 0 }),\n    Z = (n, t) => {\n      t < 32 ? (n.lo |= 1 << t) : (n.hi |= 1 << (t - 32));\n    },\n    H = (n) => {\n      const t = Q();\n      for (const e of n) {\n        if (e < 0 || e >= 42) throw new RangeError(`格索引 ${e} 越界（0~41）`);\n        Z(t, e);\n      }\n      return t;\n    },\n    tt = (n, t, e) => {\n      const s = new Set(n),\n        o = new Set();\n      for (const i of n) {\n        const r = V(i),\n          l = J(i);\n        (r > 0 && o.add(A(r - 1, l)),\n          r < t - 1 && o.add(A(r + 1, l)),\n          l > 0 && o.add(A(r, l - 1)),\n          l < e - 1 && o.add(A(r, l + 1)));\n      }\n      for (const i of s) o.delete(i);\n      return [...o].sort((i, r) => i - r);\n    },\n    et = (n) => {\n      const t = new Set(n.blocked);\n      let e = 0;\n      for (let s = 0; s < n.rows; s++)\n        for (let o = 0; o < n.cols; o++) t.has(A(s, o)) || e++;\n      return e;\n    },\n    st = (n, t) => {\n      const e = new Set(t.blocked),\n        { rows: s, cols: o } = t,\n        i = [],\n        r = [],\n        l = [],\n        p = [],\n        u = [],\n        d = [],\n        c = [],\n        h = [],\n        f = [0],\n        b = new Map();\n      for (const m of n) {\n        const y = i.length;\n        for (let I = 0; I + m.height <= s; I++)\n          for (let S = 0; S + m.width <= o; S++) {\n            const M = [];\n            let K = !0;\n            for (const [B, O] of m.cells) {\n              const j = A(I + B, S + O);\n              if (e.has(j)) {\n                K = !1;\n                break;\n              }\n              M.push(j);\n            }\n            if (!K) continue;\n            M.sort((B, O) => B - O);\n            const W = H(M),\n              G = H(tt(M, s, o));\n            (i.push(m.id),\n              r.push(I),\n              l.push(S),\n              p.push(W.lo),\n              u.push(W.hi),\n              d.push(G.lo),\n              c.push(G.hi));\n            for (const B of M) h.push(B);\n            f.push(h.length);\n          }\n        b.set(m.id, { start: y, end: i.length });\n      }\n      return {\n        count: i.length,\n        shapeId: Int32Array.from(i),\n        anchorRow: Int8Array.from(r),\n        anchorCol: Int8Array.from(l),\n        occLo: Int32Array.from(p),\n        occHi: Int32Array.from(u),\n        nbrLo: Int32Array.from(d),\n        nbrHi: Int32Array.from(c),\n        cells: Int32Array.from(h),\n        cellStart: Int32Array.from(f),\n        byShape: b,\n      };\n    },\n    nt = (n, t) => {\n      const e = n.cellStart[t],\n        s = n.cellStart[t + 1];\n      return Array.from(n.cells.subarray(e, s));\n    };\n  class ot {\n    constructor(t, e = 42) {\n      a(this, "owner", new Int8Array(42).fill(-1));\n      a(this, "placement");\n      a(this, "occLo", 0);\n      a(this, "occHi", 0);\n      a(this, "table");\n      a(this, "seen");\n      if (e > 127) throw new RangeError("槽位数超过 Int8Array 的表示范围");\n      ((this.table = t),\n        (this.placement = new Int32Array(e).fill(-1)),\n        (this.seen = new Int8Array(e)));\n    }\n    canPlace(t) {\n      return (\n        ((this.occLo & this.table.occLo[t]) |\n          (this.occHi & this.table.occHi[t])) ===\n        0\n      );\n    }\n    place(t, e) {\n      if (this.placement[t] !== -1) throw new Error(`槽位 ${t} 已被占用`);\n      if (!this.canPlace(e)) throw new Error(`placement ${e} 与已有摆放冲突`);\n      const { cellStart: s, cells: o, occLo: i, occHi: r } = this.table;\n      for (let l = s[e]; l < s[e + 1]; l++) this.owner[o[l]] = t;\n      ((this.occLo |= i[e]), (this.occHi |= r[e]), (this.placement[t] = e));\n    }\n    remove(t) {\n      const e = this.placement[t];\n      if (e === -1) return;\n      const { cellStart: s, cells: o, occLo: i, occHi: r } = this.table;\n      for (let l = s[e]; l < s[e + 1]; l++) this.owner[o[l]] = -1;\n      ((this.occLo &= ~i[e]), (this.occHi &= ~r[e]), (this.placement[t] = -1));\n    }\n    neighborSlots(t, e) {\n      const s = this.placement[t];\n      if (s === -1) return 0;\n      const { nbrLo: o, nbrHi: i } = this.table,\n        { owner: r, seen: l } = this;\n      let p = 0,\n        u = o[s];\n      for (; u !== 0;) {\n        const c = u & -u;\n        u ^= c;\n        const h = r[31 - Math.clz32(c)];\n        h !== -1 && l[h] === 0 && ((l[h] = 1), (e[p++] = h));\n      }\n      let d = i[s];\n      for (; d !== 0;) {\n        const c = d & -d;\n        d ^= c;\n        const h = r[32 + (31 - Math.clz32(c))];\n        h !== -1 && l[h] === 0 && ((l[h] = 1), (e[p++] = h));\n      }\n      for (let c = 0; c < p; c++) l[e[c]] = 0;\n      return p;\n    }\n    isAdjacent(t, e) {\n      const s = this.placement[t],\n        o = this.placement[e];\n      if (s === -1 || o === -1) return !1;\n      const { nbrLo: i, nbrHi: r, occLo: l, occHi: p } = this.table;\n      return ((i[s] & l[o]) | (r[s] & p[o])) !== 0;\n    }\n    cellsOfPlacement(t) {\n      return this.table.cellStart[t + 1] - this.table.cellStart[t];\n    }\n    occupancy() {\n      return { lo: this.occLo, hi: this.occHi };\n    }\n    occupiedSlots() {\n      const t = [];\n      for (let e = 0; e < this.placement.length; e++)\n        this.placement[e] !== -1 && t.push(e);\n      return t;\n    }\n    clear() {\n      (this.owner.fill(-1),\n        this.placement.fill(-1),\n        (this.occLo = 0),\n        (this.occHi = 0));\n    }\n  }\n  \n  const AWAKEN_DB = {"150103":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":1,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":1,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":1,"pct":1500}]}},"150104":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":1,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":6,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":1,"pct":1500,"excludeSelf":true}]}},"150105":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":1,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":1,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":1,"pct":1500}]}},"150106":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":1,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":2,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":1,"pct":1500,"excludeSelf":true}]}},"150107":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":1,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":1,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":1,"pct":1500}]}},"150108":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":1,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":7,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":1,"pct":1500,"excludeSelf":true}]}},"150109":{"maxLevel":3,"levels":{"1":[{"type":"self_mult","pct":2000}],"2":[],"3":[{"type":"self_mult","pct":3000}]}},"150203":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":2,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":2,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":2,"pct":1500}]}},"150204":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":2,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":2,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":2,"pct":1500,"excludeSelf":true}]}},"150205":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":2,"attr":2006,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":2,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":2,"pct":1500}]}},"150206":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":2,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":4,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":2,"pct":1500,"excludeSelf":true}]}},"150207":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":2,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":2,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":2,"pct":1500}]}},"150208":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":2,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":3,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":2,"pct":1500,"excludeSelf":true}]}},"150303":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":3,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":3,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":3,"pct":1500}]}},"150304":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":3,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":2,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":3,"pct":1500,"excludeSelf":true}]}},"150305":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":3,"attr":2069,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":3,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":3,"pct":1500}]}},"150306":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":3,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":5,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":3,"pct":1500,"excludeSelf":true}]}},"150307":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":3,"attr":2005,"perUnit":7500}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":3,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":3,"pct":1500}]}},"150308":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":3,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":8,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":3,"pct":1500,"excludeSelf":true}]}},"150403":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":4,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":4,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":4,"pct":1500}]}},"150404":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":4,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":4,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":4,"pct":1500,"excludeSelf":true}]}},"150405":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":4,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":4,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":4,"pct":1500}]}},"150406":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":4,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":7,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":4,"pct":1500,"excludeSelf":true}]}},"150407":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":4,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":4,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":4,"pct":1500}]}},"150408":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":4,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":3,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":4,"pct":1500,"excludeSelf":true}]}},"150409":{"maxLevel":3,"levels":{"1":[{"type":"self_mult","pct":2000}],"2":[],"3":[{"type":"self_mult","pct":3000}]}},"150503":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":5,"attr":2005,"perUnit":7500}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":5,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":5,"pct":1500}]}},"150504":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":5,"attr":2005,"perUnit":10000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":8,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":5,"pct":1500,"excludeSelf":true}]}},"150505":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":5,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":5,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":5,"pct":1500}]}},"150506":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":5,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":5,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":5,"pct":1500,"excludeSelf":true}]}},"150507":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":5,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":5,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":5,"pct":1500}]}},"150508":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":5,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":9,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":5,"pct":1500,"excludeSelf":true}]}},"150603":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":6,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":6,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":6,"pct":1500}]}},"150604":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":6,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":6,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":6,"pct":1500,"excludeSelf":true}]}},"150605":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":6,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":6,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":6,"pct":1500}]}},"150606":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":6,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":3,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":6,"pct":1500,"excludeSelf":true}]}},"150607":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":6,"attr":2006,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":6,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":6,"pct":1500}]}},"150608":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":6,"attr":2069,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":9,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":6,"pct":1500,"excludeSelf":true}]}},"150703":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":7,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":7,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":7,"pct":1500}]}},"150704":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":7,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":6,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":7,"pct":1500,"excludeSelf":true}]}},"150705":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":7,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":7,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":7,"pct":1500}]}},"150706":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":7,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":7,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":7,"pct":1500,"excludeSelf":true}]}},"150707":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":7,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":7,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":7,"pct":1500}]}},"150708":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":7,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":9,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":7,"pct":1500,"excludeSelf":true}]}},"150803":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":8,"attr":2006,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":8,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":8,"pct":1500}]}},"150804":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":8,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":5,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":8,"pct":1500,"excludeSelf":true}]}},"150805":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":8,"attr":2005,"perUnit":7500}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":8,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":8,"pct":1500}]}},"150806":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":8,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":8,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":8,"pct":1500,"excludeSelf":true}]}},"150807":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":8,"attr":2006,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":8,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":8,"pct":1500}]}},"150808":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":8,"attr":2006,"perUnit":6000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":4,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":8,"pct":1500,"excludeSelf":true}]}},"150809":{"maxLevel":3,"levels":{"1":[{"type":"self_mult","pct":2000}],"2":[],"3":[{"type":"self_mult","pct":3000}]}},"250103":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":1,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":1,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":1,"pct":1500}]}},"250104":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":1,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":6,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":1,"pct":1500,"excludeSelf":true}]}},"250203":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":2,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":2,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":2,"pct":1500}]}},"250204":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":2,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":2,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":2,"pct":1500,"excludeSelf":true}]}},"250304":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":3,"attr":2004,"perUnit":4000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":5,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":3,"pct":1500,"excludeSelf":true}]}},"250403":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":4,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":4,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":4,"pct":1500}]}},"250404":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":4,"attr":2049,"perUnit":100}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":4,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":4,"pct":1500,"excludeSelf":true}]}},"250503":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":5,"attr":2005,"perUnit":7500}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":5,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":5,"pct":1500}]}},"250504":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":5,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":8,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":5,"pct":1500,"excludeSelf":true}]}},"250603":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":6,"attr":2004,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":6,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":6,"pct":1500}]}},"250604":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":6,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":6,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":6,"pct":1500,"excludeSelf":true}]}},"250803":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":8,"attr":2006,"perUnit":3000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"adjacent_buff","element":8,"pct":800}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"adjacent_buff","element":8,"pct":1500}]}},"250804":{"maxLevel":5,"levels":{"1":[{"type":"self_per_adjacent","element":8,"attr":2025,"perUnit":1000}],"2":[{"type":"self_mult","pct":2000}],"3":[{"type":"global_form","form":5,"pct":1500,"excludeSelf":true}],"4":[{"type":"self_mult","pct":3000}],"5":[{"type":"global_element","element":8,"pct":1500,"excludeSelf":true}]}}};\nconst it = 2001,\n    rt = 2002,\n    ct = 2003,\n    lt = 2004,\n    at = 2005,\n    ht = 2006,\n    ut = 2025,\n    dt = 2027,\n    E = 1e4,\n    pt = (n, t) => {\n      if (n.quality !== 5 || t === void 0 || !n.elder) return 0;\n      let e = 0;\n      for (const [s, o] of n.elder.starBonus) s <= t && (e = o);\n      return e / E;\n    },\n    ft = (n, t, e, s, o, awLv = 0) => {\n      const i = pt(n, t),\n        r = (e?.[n.weaponForm]?.[s] ?? 0) / E,\n        l = i + r;\n      let aw = 0;\n      const awData = AWAKEN_DB[n.id];\n      if (awData && awLv > 0) {\n        for (let lv = 1; lv <= 5 && lv <= awLv; lv++) {\n          const effs = awData.levels[lv];\n          if (effs) {\n            for (const ef of effs) {\n              if (ef.type === "self_mult") aw += ef.pct / E;\n            }\n          }\n        }\n      }\n      const val = l || aw ? Math.floor(o * (1 + l) * (1 + aw)) : o;\n      return val > o ? val : o;\n    },\n    k = (n, t) => {\n      const e = n.get(t);\n      if (e === void 0)\n        throw new Error(`属性 ${t} 不在目录中，结算器无法初始化`);\n      return e;\n    },\n    mt = (n, t = { kind: "power" }) => {\n      const e = n.attrs.map((c) => c.id),\n        s = new Map(e.map((c, h) => [c, h])),\n        o = e.length,\n        i = new Float64Array(o),\n        r = new Float64Array(o);\n      for (const c of n.attrs) {\n        const h = s.get(c.id);\n        ((i[h] = c.nPower), (r[h] = c.kind === 2 ? 0.01 : 1));\n      }\n      const l = new Map(n.skills.map((c) => [c.id, c])),\n        p = [],\n        u = new Map();\n      for (const c of n.equips) {\n        const h = new Float64Array(o),\n          f = t.elderStars?.[c.id],\n          awLv = t.awaken?.[c.id] ?? 0,\n          awData = AWAKEN_DB[c.id];\n        for (const y of c.base)\n          h[k(s, y.attr)] = ft(c, f, t.talents, y.attr, y.value, awLv);\n        const b = [],\n          m = [];\n        for (const y of c.skillIds) {\n          const I = l.get(y);\n          if (!I) throw new Error(`法宝 ${c.id} 引用了不存在的技能 ${y}`);\n          const S = I.scope === "self" ? b : m;\n          for (const M of I.buffs)\n            S.push({\n              elementMask: I.elementMask,\n              attrIndex: k(s, M.attr),\n              value: M.value,\n            });\n        }\n        if (awData && awLv >= 1) {\n          for (let lv = 1; lv <= 5 && lv <= awLv; lv++) {\n            const effs = awData.levels[lv];\n            if (effs) {\n              for (const ef of effs) {\n                if (ef.type === "self_per_adjacent") {\n                  const aIdx = s.get(ef.attr);\n                  if (aIdx !== void 0) {\n                    b.push({\n                      elementMask: 1 << ef.element,\n                      attrIndex: aIdx,\n                      value: ef.perUnit,\n                    });\n                  }\n                }\n              }\n            }\n          }\n        }\n        if (awData && awLv >= 3) {\n          let adjEf = null;\n          for (let lv = 3; lv <= awLv; lv++) {\n            const effs = awData.levels[lv];\n            if (effs) {\n              for (const ef of effs) {\n                if (ef.type === "adjacent_buff") adjEf = ef;\n              }\n            }\n          }\n          if (adjEf) {\n            for (const attrId of [lt, at, ht]) {\n              const aIdx = s.get(attrId);\n              if (aIdx !== void 0) {\n                m.push({\n                  elementMask: 1 << adjEf.element,\n                  attrIndex: aIdx,\n                  value: adjEf.pct,\n                });\n              }\n            }\n          }\n        }\n        (u.set(c.id, p.length),\n          p.push({\n            equipId: c.id,\n            element: c.element,\n            elementBit: 1 << c.element,\n            base: h,\n            selfBuffs: b,\n            adjBuffs: m,\n          }));\n      }\n      const d = Float64Array.from(i);\n      if (t.kind === "weighted" && t.weights)\n        for (const [c, h] of Object.entries(t.weights)) {\n          const f = s.get(Number(c));\n          if (f === void 0) throw new Error(`权重指定了未知属性 ${c}`);\n          d[f] = h;\n        }\n      return {\n        attrIds: e,\n        attrIndex: s,\n        scale: r,\n        nPower: i,\n        profiles: p,\n        equipIndexById: u,\n        objective: {\n          kind: t.kind,\n          weights: d,\n          mode: t.mode ?? "linear",\n          critRate: t.critRate ?? 0,\n          fillBonus: t.fillBonus ?? 0,\n        },\n        iAtk: k(s, it),\n        iDef: k(s, rt),\n        iHp: k(s, ct),\n        iAtkPct: k(s, lt),\n        iDefPct: k(s, at),\n        iHpPct: k(s, ht),\n        iDmgUp: k(s, ut),\n        iCritDmg: k(s, dt),\n      };\n    };\n  class bt {\n    constructor(t, e, s) {\n      a(this, "ctx");\n      a(this, "board");\n      a(this, "slotEquip");\n      a(this, "pieceScore");\n      a(this, "values");\n      a(this, "total", 0);\n      a(this, "nAttrs");\n      a(this, "nbrBuf");\n      a(this, "acc");\n      ((this.ctx = t),\n        (this.board = e),\n        (this.slotEquip = s),\n        (this.nAttrs = t.attrIds.length),\n        (this.pieceScore = new Float64Array(s.length)),\n        (this.values = new Float64Array(s.length * this.nAttrs)),\n        (this.nbrBuf = new Int8Array(64)),\n        (this.acc = new Float64Array(this.nAttrs)));\n    }\n    recomputeAll() {\n      let t = 0;\n      for (let e = 0; e < this.slotEquip.length; e++)\n        t += this.recomputeSlot(e);\n      this.total = t;\n    }\n    recomputeSlots(t, e = t.length) {\n      for (let s = 0; s < e; s++) {\n        const o = t[s],\n          i = this.pieceScore[o],\n          r = this.recomputeSlot(o);\n        this.total += r - i;\n      }\n    }\n    collectNeighbors(t, e) {\n      return this.board.neighborSlots(t, e);\n    }\n    outcomeOf(t) {\n      const e = this.slotEquip[t];\n      if (e === -1) return null;\n      const s = t * this.nAttrs;\n      return {\n        slot: t,\n        equipId: this.ctx.profiles[e].equipId,\n        values: this.values.slice(s, s + this.nAttrs),\n        score: this.pieceScore[t],\n      };\n    }\n    recomputeSlot(t) {\n      const { ctx: e, slotEquip: s, acc: o, nbrBuf: i, nAttrs: r } = this,\n        l = t * r,\n        p = s[t];\n      if (p === -1)\n        return (this.values.fill(0, l, l + r), (this.pieceScore[t] = 0), 0);\n      const u = e.profiles[p];\n      o.fill(0);\n      const d = this.board.neighborSlots(t, i);\n      for (const f of u.selfBuffs) {\n        let b = 0;\n        for (let m = 0; m < d; m++) {\n          const y = s[i[m]];\n          y !== -1 && (e.profiles[y].elementBit & f.elementMask) !== 0 && b++;\n        }\n        b > 0 && (o[f.attrIndex] = o[f.attrIndex] + f.value * b);\n      }\n      for (let f = 0; f < d; f++) {\n        const b = s[i[f]];\n        if (b !== -1)\n          for (const m of e.profiles[b].adjBuffs)\n            (u.elementBit & m.elementMask) !== 0 &&\n              (o[m.attrIndex] = o[m.attrIndex] + m.value);\n      }\n      const c = this.values;\n      for (let f = 0; f < r; f++) c[l + f] = o[f];\n      ((c[l + e.iAtk] = u.base[e.iAtk] * (1 + o[e.iAtkPct] / E)),\n        (c[l + e.iDef] = u.base[e.iDef] * (1 + o[e.iDefPct] / E)),\n        (c[l + e.iHp] = u.base[e.iHp] * (1 + o[e.iHpPct] / E)));\n      let h = this.scoreValues(c, l);\n      if (e.objective.fillBonus !== 0) {\n        const f = this.board.placement[t],\n          b = this.board.cellsOfPlacement(f);\n        h += e.objective.fillBonus * b;\n      }\n      return ((this.pieceScore[t] = h), h);\n    }\n    scoreValues(t, e) {\n      const { ctx: s, nAttrs: o } = this,\n        { weights: i, kind: r, mode: l, critRate: p } = s.objective;\n      if (r === "weighted" && l === "product") {\n        const d = t[e + s.iAtk],\n          c = t[e + s.iDmgUp],\n          h = t[e + s.iCritDmg],\n          f = d * (1 + c / E) * (1 + p * (h / E));\n        let b = i[s.iAtk] * f;\n        for (let m = 0; m < o; m++)\n          m === s.iAtk ||\n            m === s.iDmgUp ||\n            m === s.iCritDmg ||\n            (b += t[e + m] * s.scale[m] * i[m]);\n        return b;\n      }\n      let u = 0;\n      for (let d = 0; d < o; d++) u += t[e + d] * s.scale[d] * i[d];\n      return u;\n    }\n  }\n  const yt = (n, t, e, s) => {\n      const o = new Map(n.equips.map((c) => [c.id, c])),\n        i = new Map(n.shapes.map((c) => [c.id, c.cells.length])),\n        r = new Map(),\n        l = new Map();\n      for (const c of t) {\n        if (c.count <= 0) continue;\n        const h = o.get(c.equipId);\n        if (!h) throw new Error(`持有清单引用了不存在的法宝 ${c.equipId}`);\n        const f = l.get(h.groupId) ?? new Set(),\n          b = h.groupId === 0 || f.has(h.tier);\n        (f.add(h.tier), l.set(h.groupId, f));\n        const m = b ? `item:${h.id}` : `group:${h.groupId}`,\n          y = r.get(m) ?? [];\n        (y.push(c), r.set(m, y));\n      }\n      const p = [];\n      let u = 0;\n      const d = [...r.keys()].sort((c, h) => {\n        const f = Math.min(...r.get(c).map((m) => m.equipId)),\n          b = Math.min(...r.get(h).map((m) => m.equipId));\n        return f - b;\n      });\n      for (const c of d) {\n        const h = r.get(c),\n          f = [];\n        for (const I of [...h].sort(\n          (S, M) => o.get(M.equipId).tier - o.get(S.equipId).tier,\n        ))\n          for (let S = 0; S < I.count; S++) f.push(I.equipId);\n        const b = i.get(o.get(f[0]).shapeId),\n          m = Math.max(1, Math.floor(e / b)),\n          y = Math.min(f.length, m);\n        u += f.length - y;\n        for (let I = 0; I < y; I++) {\n          const S = o.get(f[I]),\n            M = s.get(S.id);\n          if (M === void 0) throw new Error(`法宝 ${S.id} 不在结算上下文中`);\n          p.push({\n            index: p.length,\n            equipId: S.id,\n            equipIndex: M,\n            shapeId: S.shapeId,\n            name: S.name,\n            tier: S.tier,\n            element: S.element,\n            cells: i.get(S.shapeId),\n          });\n        }\n      }\n      return { candidates: p, prunedCount: u };\n    },\n    g = -1;\n  class St {\n    constructor(t, e, s, o = 42) {\n      a(this, "board");\n      a(this, "scoring");\n      a(this, "table");\n      a(this, "candidates");\n      a(this, "slotCandidate");\n      a(this, "candidateSlot");\n      a(this, "slotEquip");\n      a(this, "freeSlots");\n      a(this, "dirty", new Int8Array(128));\n      a(this, "nbrBuf", new Int8Array(64));\n      ((this.table = e),\n        (this.candidates = s),\n        (this.board = new ot(e, o)),\n        (this.slotCandidate = new Int32Array(o).fill(g)),\n        (this.candidateSlot = new Int32Array(s.length).fill(g)),\n        (this.slotEquip = new Int32Array(o).fill(-1)),\n        (this.scoring = new bt(t, this.board, this.slotEquip)),\n        (this.freeSlots = []));\n      for (let i = o - 1; i >= 0; i--) this.freeSlots.push(i);\n    }\n    get total() {\n      return this.scoring.total;\n    }\n    isPlaced(t) {\n      return this.candidateSlot[t] !== g;\n    }\n    placementOf(t) {\n      const e = this.candidateSlot[t];\n      return e === g ? g : this.board.placement[e];\n    }\n    placedCandidates() {\n      const t = [];\n      for (let e = 0; e < this.candidateSlot.length; e++)\n        this.candidateSlot[e] !== g && t.push(e);\n      return t;\n    }\n    unplacedCandidates() {\n      const t = [];\n      for (let e = 0; e < this.candidateSlot.length; e++)\n        this.candidateSlot[e] === g && t.push(e);\n      return t;\n    }\n    canPlace(t) {\n      return this.board.canPlace(t);\n    }\n    place(t, e) {\n      if (this.candidateSlot[t] !== g || !this.board.canPlace(e)) return !1;\n      const s = this.freeSlots.pop();\n      if (s === void 0) return !1;\n      (this.board.place(s, e),\n        (this.slotCandidate[s] = t),\n        (this.candidateSlot[t] = s),\n        (this.slotEquip[s] = this.candidates[t].equipIndex));\n      let o = this.board.neighborSlots(s, this.nbrBuf);\n      for (let i = 0; i < o; i++) this.dirty[i] = this.nbrBuf[i];\n      return (\n        (this.dirty[o++] = s),\n        this.scoring.recomputeSlots(this.dirty, o),\n        !0\n      );\n    }\n    remove(t) {\n      const e = this.candidateSlot[t];\n      if (e === g) return g;\n      const s = this.board.placement[e];\n      let o = this.board.neighborSlots(e, this.nbrBuf);\n      for (let i = 0; i < o; i++) this.dirty[i] = this.nbrBuf[i];\n      return (\n        (this.dirty[o++] = e),\n        this.board.remove(e),\n        (this.slotCandidate[e] = g),\n        (this.candidateSlot[t] = g),\n        (this.slotEquip[e] = -1),\n        this.freeSlots.push(e),\n        this.scoring.recomputeSlots(this.dirty, o),\n        s\n      );\n    }\n    move(t, e) {\n      const s = this.remove(t);\n      return s === g ? !1 : this.place(t, e) ? !0 : (this.place(t, s), !1);\n    }\n    recomputeAll() {\n      this.scoring.recomputeAll();\n    }\n    snapshot() {\n      const t = this.placedCandidates(),\n        e = new Int32Array(t.length * 2);\n      for (let s = 0; s < t.length; s++)\n        ((e[s * 2] = t[s]), (e[s * 2 + 1] = this.placementOf(t[s])));\n      return e;\n    }\n    restore(t) {\n      for (const e of this.placedCandidates()) this.remove(e);\n      for (let e = 0; e < t.length; e += 2) this.place(t[e], t[e + 1]);\n    }\n    clear() {\n      for (const t of this.placedCandidates()) this.remove(t);\n    }\n  }\n  const D = (n) => {\n      let t = n >>> 0;\n      return () => {\n        t = (t + 1831565813) | 0;\n        let e = Math.imul(t ^ (t >>> 15), 1 | t);\n        return (\n          (e = (e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ e),\n          ((e ^ (e >>> 14)) >>> 0) / 4294967296\n        );\n      };\n    },\n    w = (n, t) => Math.floor(n() * t) % t,\n    Y = (n, t) => {\n      for (let e = t.length - 1; e > 0; e--) {\n        const s = w(n, e + 1),\n          o = t[e];\n        ((t[e] = t[s]), (t[s] = o));\n      }\n      return t;\n    },\n    R = () => (typeof performance < "u" ? performance.now() : Date.now()),\n    It = 4e5,\n    gt = 6e4,\n    Mt = 1e4,\n    wt = 1000003,\n    kt = 10,\n    Ct = (n) => {\n      const t = new Map();\n      for (const [e, s] of n.byShape) {\n        const o = new Map();\n        for (let i = s.start; i < s.end; i++)\n          o.set(A(n.anchorRow[i], n.anchorCol[i]), i);\n        t.set(e, o);\n      }\n      return t;\n    },\n    _ = (n, t, e = Number.POSITIVE_INFINITY) => {\n      const { layout: s, table: o, candidates: i, rng: r } = n,\n        l = o.byShape.get(i[t].shapeId);\n      if (!l) return [-1, 0];\n      const p = s.total;\n      let u = -1,\n        d = Number.NEGATIVE_INFINITY;\n      const c = l.end - l.start,\n        h = c > e ? Math.ceil(c / e) : 1,\n        f = h > 1 ? w(r, h) : 0;\n      for (let b = f; b < c; b += h) {\n        const m = l.start + b;\n        if (!s.canPlace(m) || !s.place(t, m)) continue;\n        const y = s.total - p;\n        (s.remove(t), (y > d || (y === d && r() < 0.3)) && ((d = y), (u = m)));\n      }\n      return [u, u === -1 ? 0 : d];\n    },\n    x = (n, t) => {\n      for (const e of t) {\n        if (n.layout.isPlaced(e)) continue;\n        const [s] = _(n, e, 64);\n        s >= 0 && n.layout.place(e, s);\n      }\n    },\n    At = (n) => {\n      const { layout: t, table: e, candidates: s } = n,\n        o = new Float64Array(s.length);\n      for (let i = 0; i < s.length; i++) {\n        const r = e.byShape.get(s[i].shapeId);\n        !r ||\n          r.end === r.start ||\n          (t.place(i, r.start) && ((o[i] = t.total), t.remove(i)));\n      }\n      return o;\n    },\n    L = [\n      {\n        weight: 40,\n        apply: (n) => {\n          const t = n.layout.placedCandidates();\n          if (t.length === 0) return null;\n          const e = t[w(n.rng, t.length)],\n            s = n.table.byShape.get(n.candidates[e].shapeId),\n            o = n.layout.placementOf(e),\n            i = s.start + w(n.rng, s.end - s.start);\n          return i === o || !n.layout.move(e, i)\n            ? null\n            : () => {\n                n.layout.move(e, o);\n              };\n        },\n      },\n      {\n        weight: 15,\n        apply: (n) => {\n          const t = n.layout.placedCandidates();\n          if (t.length < 2) return null;\n          const e = t[w(n.rng, t.length)],\n            s = t[w(n.rng, t.length)];\n          if (e === s) return null;\n          const o = n.layout.placementOf(e),\n            i = n.layout.placementOf(s),\n            r = A(n.table.anchorRow[o], n.table.anchorCol[o]),\n            l = A(n.table.anchorRow[i], n.table.anchorCol[i]),\n            p = n.anchorIndex.get(n.candidates[e].shapeId)?.get(l),\n            u = n.anchorIndex.get(n.candidates[s].shapeId)?.get(r);\n          return p === void 0 || u === void 0\n            ? null\n            : (n.layout.remove(e),\n              n.layout.remove(s),\n              n.layout.place(e, p) && n.layout.place(s, u)\n                ? () => {\n                    (n.layout.remove(e),\n                      n.layout.remove(s),\n                      n.layout.place(e, o),\n                      n.layout.place(s, i));\n                  }\n                : (n.layout.remove(e),\n                  n.layout.remove(s),\n                  n.layout.place(e, o),\n                  n.layout.place(s, i),\n                  null));\n        },\n      },\n      {\n        weight: 14,\n        apply: (n) => {\n          const t = n.layout.placedCandidates(),\n            e = n.layout.unplacedCandidates();\n          if (t.length === 0 || e.length === 0) return null;\n          const s = t[w(n.rng, t.length)],\n            o = e[w(n.rng, e.length)],\n            i = n.layout.remove(s),\n            [r] = _(n, o, 24);\n          return r >= 0 && n.layout.place(o, r)\n            ? () => {\n                (n.layout.remove(o), n.layout.place(s, i));\n              }\n            : (n.layout.place(s, i), null);\n        },\n      },\n      {\n        weight: 10,\n        apply: (n) => {\n          const t = n.layout.unplacedCandidates();\n          if (t.length === 0) return null;\n          const e = t[w(n.rng, t.length)],\n            [s] = _(n, e, 24);\n          return s < 0 || !n.layout.place(e, s)\n            ? null\n            : () => {\n                n.layout.remove(e);\n              };\n        },\n      },\n      {\n        weight: 6,\n        apply: (n) => {\n          const t = n.layout.placedCandidates();\n          if (t.length === 0) return null;\n          const e = t[w(n.rng, t.length)],\n            s = n.layout.remove(e);\n          return () => {\n            n.layout.place(e, s);\n          };\n        },\n      },\n      {\n        weight: 15,\n        apply: (n) => {\n          const t = n.layout.placedCandidates();\n          if (t.length < 2) return null;\n          const e = n.layout.snapshot(),\n            s = 2 + w(n.rng, Math.min(4, t.length - 1)),\n            o = Y(n.rng, [...t]).slice(0, s);\n          for (const r of o) n.layout.remove(r);\n          const i = Y(n.rng, [...o, ...n.layout.unplacedCandidates()]);\n          return (\n            x(n, i),\n            () => {\n              n.layout.restore(e);\n            }\n          );\n        },\n      },\n    ],\n    Tt = L.reduce((n, t) => n + t.weight, 0),\n    Et = (n) => {\n      let t = n() * Tt;\n      for (const e of L) if (((t -= e.weight), t <= 0)) return e.apply;\n      return L[0].apply;\n    },\n    Pt = 15e3,\n    vt = 192,\n    Bt = 40;\n  class Rt {\n    constructor(t, e) {\n      a(this, "seed");\n      a(this, "budgetMs");\n      a(this, "usableCells");\n      a(this, "candidateCount");\n      a(this, "prunedCount");\n      a(this, "candidates");\n      a(this, "table");\n      a(this, "layout");\n      a(this, "eng");\n      a(this, "byIterations");\n      a(this, "totalWork");\n      a(this, "T0");\n      a(this, "T1");\n      a(this, "bestScore", 0);\n      a(this, "fillBonus");\n      a(this, "bestSnap", new Int32Array(0));\n      a(this, "bestStats", { atk: 0, def: 0, hp: 0, filledCells: 0 });\n      a(this, "milestones", []);\n      a(this, "thread");\n      a(this, "history", []);\n      a(this, "iterations", 0);\n      a(this, "consumedMs", 0);\n      a(this, "runningSince", 0);\n      a(this, "running", !1);\n      a(this, "stopRequested", !1);\n      a(this, "finished");\n      a(this, "chunkSize");\n      a(this, "soloOrder", []);\n      a(this, "chunkIndex", 0);\n      a(this, "chunkStartIter", 0);\n      a(this, "chunkIters", 0);\n      a(this, "chunkBestScore", 0);\n      a(this, "chunkBestSnap", new Int32Array(0));\n      a(this, "chunkImproved", !1);\n      a(this, "dryChunks", 0);\n      ((this.seed = e.seed ?? 1),\n        (this.thread = e.thread ?? 0),\n        (this.budgetMs = e.budgetMs ?? Pt),\n        (this.byIterations = e.maxIterations !== void 0));\n      const s = mt(t, e.objective ?? { kind: "power" });\n      ((this.fillBonus = e.objective?.fillBonus ?? 0),\n        (this.usableCells = et(e.board)));\n      const { candidates: o, prunedCount: i } = yt(\n        t,\n        e.holdings,\n        Math.max(1, this.usableCells),\n        s.equipIndexById,\n      );\n      if (\n        ((this.candidates = o),\n        (this.candidateCount = o.length),\n        (this.prunedCount = i),\n        (this.totalWork = this.byIterations ? e.maxIterations : this.budgetMs),\n        (this.chunkSize = Math.min(It, Math.max(gt, o.length * Mt))),\n        o.length === 0 || this.usableCells === 0)\n      ) {\n        ((this.table = null),\n          (this.layout = null),\n          (this.eng = null),\n          (this.T0 = 0),\n          (this.T1 = 0),\n          (this.finished = !0));\n        return;\n      }\n      const r = new Set(o.map((h) => h.shapeId)),\n        l = st(\n          t.shapes.filter((h) => r.has(h.id)),\n          e.board,\n        );\n      if (l.count === 0) {\n        ((this.table = null),\n          (this.layout = null),\n          (this.eng = null),\n          (this.T0 = 0),\n          (this.T1 = 0),\n          (this.finished = !0));\n        return;\n      }\n      const p = new St(s, l, o, Math.min(42, Math.max(1, this.usableCells))),\n        u = {\n          layout: p,\n          table: l,\n          candidates: o,\n          anchorIndex: Ct(l),\n          rng: D(this.seed),\n        };\n      ((this.table = l), (this.layout = p), (this.eng = u));\n      const d = At(u);\n      ((this.soloOrder = [...o.keys()].sort((h, f) => {\n        const b = d[h] / o[h].cells;\n        return d[f] / o[f].cells - b;\n      })),\n        x(u, this.soloOrder),\n        (this.bestScore = p.total),\n        (this.bestSnap = p.snapshot()),\n        this.captureBestStats(),\n        this.recordMilestone(0),\n        this.history.push({ ms: 0, score: this.bestScore }),\n        (this.chunkBestScore = this.bestScore),\n        (this.chunkBestSnap = this.bestSnap),\n        (this.chunkImproved = !0),\n        (this.chunkIters = this.byIterations\n          ? Math.min(this.chunkSize, this.totalWork)\n          : this.chunkSize));\n      const c = Math.max(\n        1,\n        Math.abs(this.trueScore(this.bestScore, this.bestStats.filledCells)),\n      );\n      ((this.T0 = c * 0.03), (this.T1 = c * 1e-5), (this.finished = !1));\n    }\n    get done() {\n      return this.finished;\n    }\n    get stopped() {\n      return this.stopRequested;\n    }\n    requestStop() {\n      this.stopRequested = !0;\n    }\n    progress() {\n      return {\n        elapsedMs: this.elapsedMs(),\n        budgetMs: this.budgetMs,\n        iterations: this.iterations,\n        bestScore: this.trueScore(this.bestScore, this.bestStats.filledCells),\n        thread: this.thread,\n        best: this.bestSnapshot(),\n      };\n    }\n    bestSnapshot() {\n      if (!this.table || this.bestSnap.length === 0) return null;\n      const t = U(this.bestSnap, this.table, this.candidates);\n      return {\n        score: this.trueScore(this.bestScore, this.bestStats.filledCells),\n        pieces: t,\n        ...this.bestStats,\n      };\n    }\n    trueScore(t, e) {\n      return this.fillBonus === 0 ? t : t - this.fillBonus * e;\n    }\n    recordMilestone(t) {\n      if (\n        (this.milestones.push({\n          ms: t,\n          iterations: this.iterations,\n          score: this.bestScore,\n          snap: this.bestSnap,\n          stats: { ...this.bestStats },\n        }),\n        this.milestones.length > Bt)\n      ) {\n        const e = this.milestones.length - 1;\n        this.milestones = this.milestones.filter(\n          (s, o) => o % 2 === 0 || o === e,\n        );\n      }\n    }\n    captureBestStats() {\n      const t = this.layout;\n      if (!t) return;\n      const e = t.scoring.ctx,\n        s = e.attrIds.length,\n        o = t.scoring.values;\n      let i = 0,\n        r = 0,\n        l = 0,\n        p = 0;\n      for (let u = 0; u < t.slotEquip.length; u++) {\n        if (t.slotEquip[u] === -1) continue;\n        const d = u * s;\n        ((i += o[d + e.iAtk]), (r += o[d + e.iDef]), (l += o[d + e.iHp]));\n        const c = t.board.placement[u];\n        p += this.table.cellStart[c + 1] - this.table.cellStart[c];\n      }\n      this.bestStats = { atk: i, def: r, hp: l, filledCells: p };\n    }\n    elapsedMs() {\n      return this.running\n        ? this.consumedMs + (R() - this.runningSince)\n        : this.consumedMs;\n    }\n    workDone() {\n      return this.byIterations ? this.iterations : this.elapsedMs();\n    }\n    startChunk(t) {\n      const e = this.eng,\n        s = this.layout;\n      ((this.chunkIndex = t),\n        (this.chunkStartIter = this.iterations),\n        (this.chunkIters = this.byIterations\n          ? Math.max(\n              1,\n              Math.min(this.chunkSize, this.totalWork - this.iterations),\n            )\n          : this.chunkSize),\n        (e.rng = D(this.seed + t * wt)),\n        s.clear(),\n        x(e, this.soloOrder),\n        (this.chunkBestScore = s.total),\n        (this.chunkBestSnap = s.snapshot()),\n        (this.chunkImproved = !1),\n        s.total > this.bestScore &&\n          ((this.bestScore = s.total),\n          (this.bestSnap = this.chunkBestSnap),\n          this.captureBestStats(),\n          this.recordMilestone(this.elapsedMs()),\n          this.history.push({ ms: this.elapsedMs(), score: this.bestScore }),\n          (this.chunkImproved = !0)));\n    }\n    endChunk() {\n      const t = this.layout;\n      t &&\n        (t.restore(this.chunkBestSnap),\n        this.polish(),\n        t.total > this.bestScore &&\n          ((this.bestScore = t.total),\n          (this.bestSnap = t.snapshot()),\n          this.captureBestStats(),\n          this.recordMilestone(this.elapsedMs()),\n          this.history.push({ ms: this.elapsedMs(), score: this.bestScore }),\n          (this.chunkImproved = !0)),\n        (this.dryChunks = this.chunkImproved ? 0 : this.dryChunks + 1));\n    }\n    runSlice(t) {\n      if (this.finished) return !0;\n      const e = this.eng,\n        s = this.layout,\n        o = R();\n      ((this.runningSince = o), (this.running = !0));\n      const i = (r) => (\n        (this.consumedMs += R() - o),\n        (this.running = !1),\n        (this.finished = this.finished || r),\n        r\n      );\n      for (;;) {\n        if (this.stopRequested || this.workDone() >= this.totalWork)\n          return (this.endChunk(), i(!0));\n        if (R() - o >= t) return i(!1);\n        if (this.iterations - this.chunkStartIter >= this.chunkIters) {\n          if ((this.endChunk(), !this.byIterations && this.dryChunks >= kt))\n            return i(!0);\n          this.startChunk(this.chunkIndex + 1);\n          continue;\n        }\n        const r = Math.min(\n            1,\n            (this.iterations - this.chunkStartIter) / this.chunkIters,\n          ),\n          l = this.T0 * Math.pow(this.T1 / this.T0, r);\n        for (let p = 0; p < vt; p++) {\n          this.iterations++;\n          const u = s.total,\n            d = Et(e.rng)(e);\n          if (!d) continue;\n          const c = s.total - u;\n          if (c >= 0 || e.rng() < Math.exp(c / l)) {\n            if (s.total > this.chunkBestScore) {\n              const h = s.snapshot();\n              ((this.chunkBestScore = s.total),\n                (this.chunkBestSnap = h),\n                s.total > this.bestScore &&\n                  ((this.bestScore = s.total),\n                  (this.bestSnap = h),\n                  this.captureBestStats(),\n                  this.recordMilestone(this.elapsedMs()),\n                  this.history.push({\n                    ms: this.elapsedMs(),\n                    score: this.bestScore,\n                  }),\n                  (this.chunkImproved = !0)));\n            }\n          } else d();\n        }\n      }\n    }\n    materializeMilestones() {\n      return this.table\n        ? this.milestones.map((t) => ({\n            ms: t.ms,\n            iterations: t.iterations,\n            score: this.trueScore(t.score, t.stats.filledCells),\n            pieces: U(t.snap, this.table, this.candidates),\n            ...t.stats,\n          }))\n        : [];\n    }\n    polish() {\n      const t = this.layout,\n        e = this.table;\n      if (!(!t || !e))\n        for (let s = 0; s < 8; s++) {\n          let o = !1;\n          for (const i of t.unplacedCandidates()) {\n            const r = e.byShape.get(this.candidates[i].shapeId);\n            if (!r) continue;\n            const l = t.total;\n            let p = -1,\n              u = 0;\n            for (let d = r.start; d < r.end; d++) {\n              if (!t.canPlace(d) || !t.place(i, d)) continue;\n              const c = t.total - l;\n              (t.remove(i), c > u && ((u = c), (p = d)));\n            }\n            p >= 0 && (t.place(i, p), (o = !0));\n          }\n          if (!o) break;\n        }\n    }\n    countUnplacedThatFit() {\n      const t = this.layout,\n        e = this.table;\n      if (!t || !e) return 0;\n      let s = 0;\n      for (const o of t.unplacedCandidates()) {\n        const i = e.byShape.get(this.candidates[o].shapeId);\n        if (i) {\n          for (let r = i.start; r < i.end; r++)\n            if (t.canPlace(r)) {\n              s++;\n              break;\n            }\n        }\n      }\n      return s;\n    }\n    finish() {\n      const t = {\n        seed: this.seed,\n        iterations: this.iterations,\n        elapsedMs: this.elapsedMs(),\n        stopped: this.stopRequested,\n        history: this.history,\n        milestones: this.materializeMilestones(),\n        candidateCount: this.candidateCount,\n        prunedCount: this.prunedCount,\n        usableCells: this.usableCells,\n      };\n      if (!this.layout || !this.table)\n        return {\n          ...t,\n          pieces: [],\n          score: 0,\n          filledCells: 0,\n          drift: 0,\n          unusedByEquip: $(this.candidates, []),\n          unplacedThatFit: 0,\n        };\n      (this.layout.restore(this.bestSnap), this.polish());\n      const e = this.layout.total;\n      this.layout.recomputeAll();\n      const s = Math.abs(this.layout.total - e),\n        o = qt(this.layout, this.table, this.candidates),\n        i = o.reduce((r, l) => r + l.cells.length, 0);\n      return {\n        ...t,\n        pieces: o,\n        score: this.trueScore(this.layout.total, i),\n        filledCells: i,\n        drift: s,\n        unusedByEquip: $(\n          this.candidates,\n          o.map((r) => r.candidateIndex),\n        ),\n        unplacedThatFit: this.countUnplacedThatFit(),\n      };\n    }\n  }\n  const F = (n, t, e, s) => {\n      const o = s[n];\n      return {\n        candidateIndex: n,\n        equipId: o.equipId,\n        name: o.name,\n        tier: o.tier,\n        element: o.element,\n        shapeId: o.shapeId,\n        row: e.anchorRow[t],\n        col: e.anchorCol[t],\n        cells: nt(e, t),\n      };\n    },\n    N = (n) =>\n      n.sort(\n        (t, e) =>\n          t.equipId - e.equipId || (t.cells[0] ?? 0) - (e.cells[0] ?? 0),\n      ),\n    U = (n, t, e) => {\n      const s = [];\n      for (let o = 0; o < n.length; o += 2) s.push(F(n[o], n[o + 1], t, e));\n      return N(s);\n    },\n    qt = (n, t, e) => {\n      const s = [];\n      for (const o of n.placedCandidates()) {\n        const i = n.placementOf(o);\n        i !== g && s.push(F(o, i, t, e));\n      }\n      return N(s);\n    },\n    $ = (n, t) => {\n      const e = new Set(t),\n        s = new Map();\n      for (const o of n) {\n        if (e.has(o.index)) continue;\n        const i = s.get(o.equipId) ?? {\n          equipId: o.equipId,\n          name: o.name,\n          tier: o.tier,\n          count: 0,\n        };\n        (i.count++, s.set(o.equipId, i));\n      }\n      return [...s.values()].sort((o, i) => o.equipId - i.equipId);\n    },\n    _t = 40,\n    q = (n) => {\n      self.postMessage(n);\n    };\n  let P = null;\n  const X = C(),\n    z = () => {\n      if (!P) return;\n      const n = P;\n      if (n.runSlice(_t)) {\n        ((P = null), q({ type: "done", result: n.finish() }));\n        return;\n      }\n      (q({ type: "progress", progress: n.progress() }), X(z));\n    };\n  ((self.onmessage = (n) => {\n    const t = n.data;\n    try {\n      t.type === "solve"\n        ? ((P = new Rt(t.catalog, t.request)), X(z))\n        : t.type === "stop" && P?.requestStop();\n    } catch (e) {\n      ((P = null),\n        q({\n          type: "error",\n          message: e instanceof Error ? e.message : String(e),\n        }));\n    }\n  }),\n    q({ type: "ready" }));\n})();\n',
  Kt =
    typeof self < "u" &&
    self.Blob &&
    new Blob([ra], { type: "text/javascript;charset=utf-8" });
function In(t) {
  let e;
  try {
    if (((e = Kt && (self.URL || self.webkitURL).createObjectURL(Kt)), !e))
      throw "";
    const s = new Worker(e, { name: t?.name });
    return (
      s.addEventListener("error", () => {
        (self.URL || self.webkitURL).revokeObjectURL(e);
      }),
      s
    );
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ra),
      { name: t?.name },
    );
  } finally {
    e && (self.URL || self.webkitURL).revokeObjectURL(e);
  }
}
const gn = 10,
  wn = 1e3,
  Xt = () => (typeof performance < "u" ? performance.now() : Date.now()),
  bn = (t = 100) => {
    const e = typeof MessageChannel < "u" ? new MessageChannel() : null;
    let s = null;
    e &&
      (e.port1.onmessage = () => {
        const n = s;
        ((s = null), n?.());
      });
    let a = Xt();
    return (n) => {
      const l = Xt();
      if (!e || l - a >= t) {
        ((a = l), setTimeout(n, 0));
        return;
      }
      ((s = n), e.port2.postMessage(0));
    };
  },
  yn = (t = le, e = J, s = []) => {
    if (!Number.isInteger(t) || t < 1 || t > le)
      throw new RangeError(`棋盘行数 ${t} 越界（1~${le}）`);
    if (!Number.isInteger(e) || e < 1 || e > J)
      throw new RangeError(`棋盘列数 ${e} 越界（1~${J}）`);
    for (const a of s)
      if (!Number.isInteger(a) || a < 0 || a >= C1)
        throw new RangeError(`不可用格索引 ${a} 越界（0~${C1 - 1}）`);
    return { rows: t, cols: e, blocked: [...new Set(s)].sort((a, n) => a - n) };
  },
  la = (t) => {
    const e = new Set(t.blocked);
    let s = 0;
    for (let a = 0; a < t.rows; a++)
      for (let n = 0; n < t.cols; n++) e.has(X(a, n)) || s++;
    return s;
  },
  kn = (t, e) => {
    const s = new Set(e.blocked),
      { rows: a, cols: n } = e,
      l = [],
      i = [],
      o = [],
      c = [],
      u = [],
      f = [],
      v = [],
      d = [],
      m = [0],
      A = new Map();
    for (const h of t) {
      const b = l.length;
      for (let I = 0; I + h.height <= a; I++)
        for (let y = 0; y + h.width <= n; y++) {
          const S = [];
          let O = !0;
          for (const [D, _] of h.cells) {
            const p = X(I + D, y + _);
            if (s.has(p)) {
              O = !1;
              break;
            }
            S.push(p);
          }
          if (!O) continue;
          S.sort((D, _) => D - _);
          const E = Qt(S),
            N = Qt(fn(S, a, n));
          (l.push(h.id),
            i.push(I),
            o.push(y),
            c.push(E.lo),
            u.push(E.hi),
            f.push(N.lo),
            v.push(N.hi));
          for (const D of S) d.push(D);
          m.push(d.length);
        }
      A.set(h.id, { start: b, end: l.length });
    }
    return {
      count: l.length,
      shapeId: Int32Array.from(l),
      anchorRow: Int8Array.from(i),
      anchorCol: Int8Array.from(o),
      occLo: Int32Array.from(c),
      occHi: Int32Array.from(u),
      nbrLo: Int32Array.from(f),
      nbrHi: Int32Array.from(v),
      cells: Int32Array.from(d),
      cellStart: Int32Array.from(m),
      byShape: A,
    };
  },
  An = (t, e) => {
    const s = t.cellStart[e],
      a = t.cellStart[e + 1];
    return Array.from(t.cells.subarray(s, a));
  },
  W = -1;
class qn {
  constructor(e, s = 42) {
    B(this, "owner", new Int8Array(C1).fill(W));
    B(this, "placement");
    B(this, "occLo", 0);
    B(this, "occHi", 0);
    B(this, "table");
    B(this, "seen");
    if (s > 127) throw new RangeError("槽位数超过 Int8Array 的表示范围");
    ((this.table = e),
      (this.placement = new Int32Array(s).fill(W)),
      (this.seen = new Int8Array(s)));
  }
  canPlace(e) {
    return (
      ((this.occLo & this.table.occLo[e]) |
        (this.occHi & this.table.occHi[e])) ===
      0
    );
  }
  place(e, s) {
    if (this.placement[e] !== W) throw new Error(`槽位 ${e} 已被占用`);
    if (!this.canPlace(s)) throw new Error(`placement ${s} 与已有摆放冲突`);
    const { cellStart: a, cells: n, occLo: l, occHi: i } = this.table;
    for (let o = a[s]; o < a[s + 1]; o++) this.owner[n[o]] = e;
    ((this.occLo |= l[s]), (this.occHi |= i[s]), (this.placement[e] = s));
  }
  remove(e) {
    const s = this.placement[e];
    if (s === W) return;
    const { cellStart: a, cells: n, occLo: l, occHi: i } = this.table;
    for (let o = a[s]; o < a[s + 1]; o++) this.owner[n[o]] = W;
    ((this.occLo &= ~l[s]), (this.occHi &= ~i[s]), (this.placement[e] = W));
  }
  neighborSlots(e, s) {
    const a = this.placement[e];
    if (a === W) return 0;
    const { nbrLo: n, nbrHi: l } = this.table,
      { owner: i, seen: o } = this;
    let c = 0,
      u = n[a];
    for (; u !== 0;) {
      const v = u & -u;
      u ^= v;
      const d = i[31 - Math.clz32(v)];
      d !== W && o[d] === 0 && ((o[d] = 1), (s[c++] = d));
    }
    let f = l[a];
    for (; f !== 0;) {
      const v = f & -f;
      f ^= v;
      const d = i[32 + (31 - Math.clz32(v))];
      d !== W && o[d] === 0 && ((o[d] = 1), (s[c++] = d));
    }
    for (let v = 0; v < c; v++) o[s[v]] = 0;
    return c;
  }
  isAdjacent(e, s) {
    const a = this.placement[e],
      n = this.placement[s];
    if (a === W || n === W) return !1;
    const { nbrLo: l, nbrHi: i, occLo: o, occHi: c } = this.table;
    return ((l[a] & o[n]) | (i[a] & c[n])) !== 0;
  }
  cellsOfPlacement(e) {
    return this.table.cellStart[e + 1] - this.table.cellStart[e];
  }
  occupancy() {
    return { lo: this.occLo, hi: this.occHi };
  }
  occupiedSlots() {
    const e = [];
    for (let s = 0; s < this.placement.length; s++)
      this.placement[s] !== W && e.push(s);
    return e;
  }
  clear() {
    (this.owner.fill(W),
      this.placement.fill(W),
      (this.occLo = 0),
      (this.occHi = 0));
  }
}
const Ie = (t, e) => {
    const s = t.get(e);
    if (s === void 0) throw new Error(`属性 ${e} 不在目录中，结算器无法初始化`);
    return s;
  },
  _n = (t, e = { kind: "power" }) => {
    const s = t.attrs.map((v) => v.id),
      a = new Map(s.map((v, d) => [v, d])),
      n = s.length,
      l = new Float64Array(n),
      i = new Float64Array(n);
    for (const v of t.attrs) {
      const d = a.get(v.id);
      ((l[d] = v.nPower), (i[d] = v.kind === 2 ? 0.01 : 1));
    }
    const o = new Map(t.skills.map((v) => [v.id, v])),
      c = [],
      u = new Map();
    for (const v of t.equips) {
      const d = new Float64Array(n),
        m = e.elderStars?.[v.id],
        awLv = e.awaken?.[v.id] ?? 0,
        awData = AWAKEN_DB[v.id];
      for (const b of v.base)
        d[Ie(a, b.attr)] = l1(v, m, e.talents, b.attr, b.value, awLv);
      const A = [],
        h = [];
      for (const b of v.skillIds) {
        const I = o.get(b);
        if (!I) throw new Error(`法宝 ${v.id} 引用了不存在的技能 ${b}`);
        const y = I.scope === "self" ? A : h;
        for (const S of I.buffs)
          y.push({
            elementMask: I.elementMask,
            attrIndex: Ie(a, S.attr),
            value: S.value,
          });
      }
      if (awData && awLv >= 1 && awData.levels[1]) {
        for (const ef of awData.levels[1]) {
          if (ef.type === "self_per_adjacent") {
            const aIdx = a.get(ef.attr);
            if (aIdx !== void 0) {
              A.push({
                elementMask: 1 << ef.element,
                attrIndex: aIdx,
                value: ef.perUnit,
              });
            }
          }
        }
      }
      if (awData && awLv >= 3) {
        let adjEf = null;
        for (let lv = 3; lv <= awLv; lv++) {
          const effs = awData.levels[lv];
          if (effs) {
            for (const ef of effs) {
              if (ef.type === "adjacent_buff") adjEf = ef;
            }
          }
        }
        if (adjEf) {
          for (const attrId of [kt, At, qt]) {
            const aIdx = a.get(attrId);
            if (aIdx !== void 0) {
              h.push({
                elementMask: 1 << adjEf.element,
                attrIndex: aIdx,
                value: adjEf.pct,
              });
            }
          }
        }
      }
      (u.set(v.id, c.length),
        c.push({
          equipId: v.id,
          element: v.element,
          elementBit: 1 << v.element,
          base: d,
          selfBuffs: A,
          adjBuffs: h,
        }));
    }
    const f = Float64Array.from(l);
    if (e.kind === "weighted" && e.weights)
      for (const [v, d] of Object.entries(e.weights)) {
        const m = a.get(Number(v));
        if (m === void 0) throw new Error(`权重指定了未知属性 ${v}`);
        f[m] = d;
      }
    return {
      attrIds: s,
      attrIndex: a,
      scale: i,
      nPower: l,
      profiles: c,
      equipIndexById: u,
      objective: {
        kind: e.kind,
        weights: f,
        mode: e.mode ?? "linear",
        critRate: e.critRate ?? 0,
        fillBonus: e.fillBonus ?? 0,
      },
      iAtk: Ie(a, a1),
      iDef: Ie(a, o0),
      iHp: Ie(a, d0),
      iAtkPct: Ie(a, kt),
      iDefPct: Ie(a, At),
      iHpPct: Ie(a, qt),
      iDmgUp: Ie(a, Z0),
      iCritDmg: Ie(a, et),
    };
  };
class Mn {
  constructor(e, s, a) {
    B(this, "ctx");
    B(this, "board");
    B(this, "slotEquip");
    B(this, "pieceScore");
    B(this, "values");
    B(this, "total", 0);
    B(this, "nAttrs");
    B(this, "nbrBuf");
    B(this, "acc");
    ((this.ctx = e),
      (this.board = s),
      (this.slotEquip = a),
      (this.nAttrs = e.attrIds.length),
      (this.pieceScore = new Float64Array(a.length)),
      (this.values = new Float64Array(a.length * this.nAttrs)),
      (this.nbrBuf = new Int8Array(64)),
      (this.acc = new Float64Array(this.nAttrs)));
  }
  recomputeAll() {
    let e = 0;
    for (let s = 0; s < this.slotEquip.length; s++) e += this.recomputeSlot(s);
    this.total = e;
  }
  recomputeSlots(e, s = e.length) {
    for (let a = 0; a < s; a++) {
      const n = e[a],
        l = this.pieceScore[n],
        i = this.recomputeSlot(n);
      this.total += i - l;
    }
  }
  collectNeighbors(e, s) {
    return this.board.neighborSlots(e, s);
  }
  outcomeOf(e) {
    const s = this.slotEquip[e];
    if (s === W) return null;
    const a = e * this.nAttrs;
    return {
      slot: e,
      equipId: this.ctx.profiles[s].equipId,
      values: this.values.slice(a, a + this.nAttrs),
      score: this.pieceScore[e],
    };
  }
  recomputeSlot(e) {
    const { ctx: s, slotEquip: a, acc: n, nbrBuf: l, nAttrs: i } = this,
      o = e * i,
      c = a[e];
    if (c === W)
      return (this.values.fill(0, o, o + i), (this.pieceScore[e] = 0), 0);
    const u = s.profiles[c];
    n.fill(0);
    const f = this.board.neighborSlots(e, l);
    for (const m of u.selfBuffs) {
      let A = 0;
      for (let h = 0; h < f; h++) {
        const b = a[l[h]];
        b !== W && (s.profiles[b].elementBit & m.elementMask) !== 0 && A++;
      }
      A > 0 && (n[m.attrIndex] = n[m.attrIndex] + m.value * A);
    }
    for (let m = 0; m < f; m++) {
      const A = a[l[m]];
      if (A !== W)
        for (const h of s.profiles[A].adjBuffs)
          (u.elementBit & h.elementMask) !== 0 &&
            (n[h.attrIndex] = n[h.attrIndex] + h.value);
    }
    const v = this.values;
    for (let m = 0; m < i; m++) v[o + m] = n[m];
    ((v[o + s.iAtk] = u.base[s.iAtk] * (1 + n[s.iAtkPct] / de)),
      (v[o + s.iDef] = u.base[s.iDef] * (1 + n[s.iDefPct] / de)),
      (v[o + s.iHp] = u.base[s.iHp] * (1 + n[s.iHpPct] / de)));
    let d = this.scoreValues(v, o);
    if (s.objective.fillBonus !== 0) {
      const m = this.board.placement[e],
        A = this.board.cellsOfPlacement(m);
      d += s.objective.fillBonus * A;
    }
    return ((this.pieceScore[e] = d), d);
  }
  scoreValues(e, s) {
    const { ctx: a, nAttrs: n } = this,
      { weights: l, kind: i, mode: o, critRate: c } = a.objective;
    if (i === "weighted" && o === "product") {
      const f = e[s + a.iAtk],
        v = e[s + a.iDmgUp],
        d = e[s + a.iCritDmg],
        m = f * (1 + v / de) * (1 + c * (d / de));
      let A = l[a.iAtk] * m;
      for (let h = 0; h < n; h++)
        h === a.iAtk ||
          h === a.iDmgUp ||
          h === a.iCritDmg ||
          (A += e[s + h] * a.scale[h] * l[h]);
      return A;
    }
    let u = 0;
    for (let f = 0; f < n; f++) u += e[s + f] * a.scale[f] * l[f];
    return u;
  }
}
const Sn = (t, e, s, a) => {
    const n = new Map(t.equips.map((v) => [v.id, v])),
      l = new Map(t.shapes.map((v) => [v.id, v.cells.length])),
      i = new Map(),
      o = new Map();
    for (const v of e) {
      if (v.count <= 0) continue;
      const d = n.get(v.equipId);
      if (!d) throw new Error(`持有清单引用了不存在的法宝 ${v.equipId}`);
      const m = o.get(d.groupId) ?? new Set(),
        A = d.groupId === 0 || m.has(d.tier);
      (m.add(d.tier), o.set(d.groupId, m));
      const h = A ? `item:${d.id}` : `group:${d.groupId}`,
        b = i.get(h) ?? [];
      (b.push(v), i.set(h, b));
    }
    const c = [];
    let u = 0;
    const f = [...i.keys()].sort((v, d) => {
      const m = Math.min(...i.get(v).map((h) => h.equipId)),
        A = Math.min(...i.get(d).map((h) => h.equipId));
      return m - A;
    });
    for (const v of f) {
      const d = i.get(v),
        m = [];
      for (const I of [...d].sort(
        (y, S) => n.get(S.equipId).tier - n.get(y.equipId).tier,
      ))
        for (let y = 0; y < I.count; y++) m.push(I.equipId);
      const A = l.get(n.get(m[0]).shapeId),
        h = Math.max(1, Math.floor(s / A)),
        b = Math.min(m.length, h);
      u += m.length - b;
      for (let I = 0; I < b; I++) {
        const y = n.get(m[I]),
          S = a.get(y.id);
        if (S === void 0) throw new Error(`法宝 ${y.id} 不在结算上下文中`);
        c.push({
          index: c.length,
          equipId: y.id,
          equipIndex: S,
          shapeId: y.shapeId,
          name: y.name,
          tier: y.tier,
          element: y.element,
          cells: l.get(y.shapeId),
        });
      }
    }
    return { candidates: c, prunedCount: u };
  },
  se = -1;
class Fn {
  constructor(e, s, a, n = 42) {
    B(this, "board");
    B(this, "scoring");
    B(this, "table");
    B(this, "candidates");
    B(this, "slotCandidate");
    B(this, "candidateSlot");
    B(this, "slotEquip");
    B(this, "freeSlots");
    B(this, "dirty", new Int8Array(128));
    B(this, "nbrBuf", new Int8Array(64));
    ((this.table = s),
      (this.candidates = a),
      (this.board = new qn(s, n)),
      (this.slotCandidate = new Int32Array(n).fill(se)),
      (this.candidateSlot = new Int32Array(a.length).fill(se)),
      (this.slotEquip = new Int32Array(n).fill(W)),
      (this.scoring = new Mn(e, this.board, this.slotEquip)),
      (this.freeSlots = []));
    for (let l = n - 1; l >= 0; l--) this.freeSlots.push(l);
  }
  get total() {
    return this.scoring.total;
  }
  isPlaced(e) {
    return this.candidateSlot[e] !== se;
  }
  placementOf(e) {
    const s = this.candidateSlot[e];
    return s === se ? se : this.board.placement[s];
  }
  placedCandidates() {
    const e = [];
    for (let s = 0; s < this.candidateSlot.length; s++)
      this.candidateSlot[s] !== se && e.push(s);
    return e;
  }
  unplacedCandidates() {
    const e = [];
    for (let s = 0; s < this.candidateSlot.length; s++)
      this.candidateSlot[s] === se && e.push(s);
    return e;
  }
  canPlace(e) {
    return this.board.canPlace(e);
  }
  place(e, s) {
    if (this.candidateSlot[e] !== se || !this.board.canPlace(s)) return !1;
    const a = this.freeSlots.pop();
    if (a === void 0) return !1;
    (this.board.place(a, s),
      (this.slotCandidate[a] = e),
      (this.candidateSlot[e] = a),
      (this.slotEquip[a] = this.candidates[e].equipIndex));
    let n = this.board.neighborSlots(a, this.nbrBuf);
    for (let l = 0; l < n; l++) this.dirty[l] = this.nbrBuf[l];
    return (
      (this.dirty[n++] = a),
      this.scoring.recomputeSlots(this.dirty, n),
      !0
    );
  }
  remove(e) {
    const s = this.candidateSlot[e];
    if (s === se) return se;
    const a = this.board.placement[s];
    let n = this.board.neighborSlots(s, this.nbrBuf);
    for (let l = 0; l < n; l++) this.dirty[l] = this.nbrBuf[l];
    return (
      (this.dirty[n++] = s),
      this.board.remove(s),
      (this.slotCandidate[s] = se),
      (this.candidateSlot[e] = se),
      (this.slotEquip[s] = W),
      this.freeSlots.push(s),
      this.scoring.recomputeSlots(this.dirty, n),
      a
    );
  }
  move(e, s) {
    const a = this.remove(e);
    return a === se ? !1 : this.place(e, s) ? !0 : (this.place(e, a), !1);
  }
  recomputeAll() {
    this.scoring.recomputeAll();
  }
  snapshot() {
    const e = this.placedCandidates(),
      s = new Int32Array(e.length * 2);
    for (let a = 0; a < e.length; a++)
      ((s[a * 2] = e[a]), (s[a * 2 + 1] = this.placementOf(e[a])));
    return s;
  }
  restore(e) {
    for (const s of this.placedCandidates()) this.remove(s);
    for (let s = 0; s < e.length; s += 2) this.place(e[s], e[s + 1]);
  }
  clear() {
    for (const e of this.placedCandidates()) this.remove(e);
  }
}
const Vt = (t) => {
    let e = t >>> 0;
    return () => {
      e = (e + 1831565813) | 0;
      let s = Math.imul(e ^ (e >>> 15), 1 | e);
      return (
        (s = (s + Math.imul(s ^ (s >>> 7), 61 | s)) ^ s),
        ((s ^ (s >>> 14)) >>> 0) / 4294967296
      );
    };
  },
  ve = (t, e) => Math.floor(t() * e) % e,
  Jt = (t, e) => {
    for (let s = e.length - 1; s > 0; s--) {
      const a = ve(t, s + 1),
        n = e[s];
      ((e[s] = e[a]), (e[a] = n));
    }
    return e;
  },
  U1 = () => (typeof performance < "u" ? performance.now() : Date.now()),
  Bn = 4e5,
  xn = 6e4,
  Cn = 1e4,
  Pn = 1000003,
  Dn = 10,
  Tn = (t) => {
    const e = new Map();
    for (const [s, a] of t.byShape) {
      const n = new Map();
      for (let l = a.start; l < a.end; l++)
        n.set(X(t.anchorRow[l], t.anchorCol[l]), l);
      e.set(s, n);
    }
    return e;
  },
  Mt = (t, e, s = Number.POSITIVE_INFINITY) => {
    const { layout: a, table: n, candidates: l, rng: i } = t,
      o = n.byShape.get(l[e].shapeId);
    if (!o) return [-1, 0];
    const c = a.total;
    let u = -1,
      f = Number.NEGATIVE_INFINITY;
    const v = o.end - o.start,
      d = v > s ? Math.ceil(v / s) : 1,
      m = d > 1 ? ve(i, d) : 0;
    for (let A = m; A < v; A += d) {
      const h = o.start + A;
      if (!a.canPlace(h) || !a.place(e, h)) continue;
      const b = a.total - c;
      (a.remove(e), (b > f || (b === f && i() < 0.3)) && ((f = b), (u = h)));
    }
    return [u, u === -1 ? 0 : f];
  },
  tt = (t, e) => {
    for (const s of e) {
      if (t.layout.isPlaced(s)) continue;
      const [a] = Mt(t, s, 64);
      a >= 0 && t.layout.place(s, a);
    }
  },
  $n = (t) => {
    const { layout: e, table: s, candidates: a } = t,
      n = new Float64Array(a.length);
    for (let l = 0; l < a.length; l++) {
      const i = s.byShape.get(a[l].shapeId);
      !i ||
        i.end === i.start ||
        (e.place(l, i.start) && ((n[l] = e.total), e.remove(l)));
    }
    return n;
  },
  En = (t) => {
    const e = t.layout.placedCandidates();
    if (e.length === 0) return null;
    const s = e[ve(t.rng, e.length)],
      a = t.table.byShape.get(t.candidates[s].shapeId),
      n = t.layout.placementOf(s),
      l = a.start + ve(t.rng, a.end - a.start);
    return l === n || !t.layout.move(s, l)
      ? null
      : () => {
          t.layout.move(s, n);
        };
  },
  Nn = (t) => {
    const e = t.layout.placedCandidates();
    if (e.length < 2) return null;
    const s = e[ve(t.rng, e.length)],
      a = e[ve(t.rng, e.length)];
    if (s === a) return null;
    const n = t.layout.placementOf(s),
      l = t.layout.placementOf(a),
      i = X(t.table.anchorRow[n], t.table.anchorCol[n]),
      o = X(t.table.anchorRow[l], t.table.anchorCol[l]),
      c = t.anchorIndex.get(t.candidates[s].shapeId)?.get(o),
      u = t.anchorIndex.get(t.candidates[a].shapeId)?.get(i);
    return c === void 0 || u === void 0
      ? null
      : (t.layout.remove(s),
        t.layout.remove(a),
        t.layout.place(s, c) && t.layout.place(a, u)
          ? () => {
              (t.layout.remove(s),
                t.layout.remove(a),
                t.layout.place(s, n),
                t.layout.place(a, l));
            }
          : (t.layout.remove(s),
            t.layout.remove(a),
            t.layout.place(s, n),
            t.layout.place(a, l),
            null));
  },
  Hn = (t) => {
    const e = t.layout.placedCandidates(),
      s = t.layout.unplacedCandidates();
    if (e.length === 0 || s.length === 0) return null;
    const a = e[ve(t.rng, e.length)],
      n = s[ve(t.rng, s.length)],
      l = t.layout.remove(a),
      [i] = Mt(t, n, 24);
    return i >= 0 && t.layout.place(n, i)
      ? () => {
          (t.layout.remove(n), t.layout.place(a, l));
        }
      : (t.layout.place(a, l), null);
  },
  On = (t) => {
    const e = t.layout.unplacedCandidates();
    if (e.length === 0) return null;
    const s = e[ve(t.rng, e.length)],
      [a] = Mt(t, s, 24);
    return a < 0 || !t.layout.place(s, a)
      ? null
      : () => {
          t.layout.remove(s);
        };
  },
  Rn = (t) => {
    const e = t.layout.placedCandidates();
    if (e.length === 0) return null;
    const s = e[ve(t.rng, e.length)],
      a = t.layout.remove(s);
    return () => {
      t.layout.place(s, a);
    };
  },
  Ln = (t) => {
    const e = t.layout.placedCandidates();
    if (e.length < 2) return null;
    const s = t.layout.snapshot(),
      a = 2 + ve(t.rng, Math.min(4, e.length - 1)),
      n = Jt(t.rng, [...e]).slice(0, a);
    for (const i of n) t.layout.remove(i);
    const l = Jt(t.rng, [...n, ...t.layout.unplacedCandidates()]);
    return (
      tt(t, l),
      () => {
        t.layout.restore(s);
      }
    );
  },
  st = [
    { weight: 40, apply: En },
    { weight: 15, apply: Nn },
    { weight: 14, apply: Hn },
    { weight: 10, apply: On },
    { weight: 6, apply: Rn },
    { weight: 15, apply: Ln },
  ],
  jn = st.reduce((t, e) => t + e.weight, 0),
  zn = (t) => {
    let e = t() * jn;
    for (const s of st) if (((e -= s.weight), e <= 0)) return s.apply;
    return st[0].apply;
  },
  Un = 15e3,
  Gn = 192,
  Yn = 40;
class Wn {
  constructor(e, s) {
    B(this, "seed");
    B(this, "budgetMs");
    B(this, "usableCells");
    B(this, "candidateCount");
    B(this, "prunedCount");
    B(this, "candidates");
    B(this, "table");
    B(this, "layout");
    B(this, "eng");
    B(this, "byIterations");
    B(this, "totalWork");
    B(this, "T0");
    B(this, "T1");
    B(this, "bestScore", 0);
    B(this, "fillBonus");
    B(this, "bestSnap", new Int32Array(0));
    B(this, "bestStats", { atk: 0, def: 0, hp: 0, filledCells: 0 });
    B(this, "milestones", []);
    B(this, "thread");
    B(this, "history", []);
    B(this, "iterations", 0);
    B(this, "consumedMs", 0);
    B(this, "runningSince", 0);
    B(this, "running", !1);
    B(this, "stopRequested", !1);
    B(this, "finished");
    B(this, "chunkSize");
    B(this, "soloOrder", []);
    B(this, "chunkIndex", 0);
    B(this, "chunkStartIter", 0);
    B(this, "chunkIters", 0);
    B(this, "chunkBestScore", 0);
    B(this, "chunkBestSnap", new Int32Array(0));
    B(this, "chunkImproved", !1);
    B(this, "dryChunks", 0);
    ((this.seed = s.seed ?? 1),
      (this.thread = s.thread ?? 0),
      (this.budgetMs = s.budgetMs ?? Un),
      (this.byIterations = s.maxIterations !== void 0));
    const a = _n(e, s.objective ?? { kind: "power" });
    ((this.fillBonus = s.objective?.fillBonus ?? 0),
      (this.usableCells = la(s.board)));
    const { candidates: n, prunedCount: l } = Sn(
      e,
      s.holdings,
      Math.max(1, this.usableCells),
      a.equipIndexById,
    );
    if (
      ((this.candidates = n),
      (this.candidateCount = n.length),
      (this.prunedCount = l),
      (this.totalWork = this.byIterations ? s.maxIterations : this.budgetMs),
      (this.chunkSize = Math.min(Bn, Math.max(xn, n.length * Cn))),
      n.length === 0 || this.usableCells === 0)
    ) {
      ((this.table = null),
        (this.layout = null),
        (this.eng = null),
        (this.T0 = 0),
        (this.T1 = 0),
        (this.finished = !0));
      return;
    }
    const i = new Set(n.map((d) => d.shapeId)),
      o = kn(
        e.shapes.filter((d) => i.has(d.id)),
        s.board,
      );
    if (o.count === 0) {
      ((this.table = null),
        (this.layout = null),
        (this.eng = null),
        (this.T0 = 0),
        (this.T1 = 0),
        (this.finished = !0));
      return;
    }
    const c = new Fn(a, o, n, Math.min(42, Math.max(1, this.usableCells))),
      u = {
        layout: c,
        table: o,
        candidates: n,
        anchorIndex: Tn(o),
        rng: Vt(this.seed),
      };
    ((this.table = o), (this.layout = c), (this.eng = u));
    const f = $n(u);
    ((this.soloOrder = [...n.keys()].sort((d, m) => {
      const A = f[d] / n[d].cells;
      return f[m] / n[m].cells - A;
    })),
      tt(u, this.soloOrder),
      (this.bestScore = c.total),
      (this.bestSnap = c.snapshot()),
      this.captureBestStats(),
      this.recordMilestone(0),
      this.history.push({ ms: 0, score: this.bestScore }),
      (this.chunkBestScore = this.bestScore),
      (this.chunkBestSnap = this.bestSnap),
      (this.chunkImproved = !0),
      (this.chunkIters = this.byIterations
        ? Math.min(this.chunkSize, this.totalWork)
        : this.chunkSize));
    const v = Math.max(
      1,
      Math.abs(this.trueScore(this.bestScore, this.bestStats.filledCells)),
    );
    ((this.T0 = v * 0.03), (this.T1 = v * 1e-5), (this.finished = !1));
  }
  get done() {
    return this.finished;
  }
  get stopped() {
    return this.stopRequested;
  }
  requestStop() {
    this.stopRequested = !0;
  }
  progress() {
    return {
      elapsedMs: this.elapsedMs(),
      budgetMs: this.budgetMs,
      iterations: this.iterations,
      bestScore: this.trueScore(this.bestScore, this.bestStats.filledCells),
      thread: this.thread,
      best: this.bestSnapshot(),
    };
  }
  bestSnapshot() {
    if (!this.table || this.bestSnap.length === 0) return null;
    const e = Zt(this.bestSnap, this.table, this.candidates);
    return {
      score: this.trueScore(this.bestScore, this.bestStats.filledCells),
      pieces: e,
      ...this.bestStats,
    };
  }
  trueScore(e, s) {
    return this.fillBonus === 0 ? e : e - this.fillBonus * s;
  }
  recordMilestone(e) {
    if (
      (this.milestones.push({
        ms: e,
        iterations: this.iterations,
        score: this.bestScore,
        snap: this.bestSnap,
        stats: { ...this.bestStats },
      }),
      this.milestones.length > Yn)
    ) {
      const s = this.milestones.length - 1;
      this.milestones = this.milestones.filter(
        (a, n) => n % 2 === 0 || n === s,
      );
    }
  }
  captureBestStats() {
    const e = this.layout;
    if (!e) return;
    const s = e.scoring.ctx,
      a = s.attrIds.length,
      n = e.scoring.values;
    let l = 0,
      i = 0,
      o = 0,
      c = 0;
    for (let u = 0; u < e.slotEquip.length; u++) {
      if (e.slotEquip[u] === W) continue;
      const f = u * a;
      ((l += n[f + s.iAtk]), (i += n[f + s.iDef]), (o += n[f + s.iHp]));
      const v = e.board.placement[u];
      c += this.table.cellStart[v + 1] - this.table.cellStart[v];
    }
    this.bestStats = { atk: l, def: i, hp: o, filledCells: c };
  }
  elapsedMs() {
    return this.running
      ? this.consumedMs + (U1() - this.runningSince)
      : this.consumedMs;
  }
  workDone() {
    return this.byIterations ? this.iterations : this.elapsedMs();
  }
  startChunk(e) {
    const s = this.eng,
      a = this.layout;
    ((this.chunkIndex = e),
      (this.chunkStartIter = this.iterations),
      (this.chunkIters = this.byIterations
        ? Math.max(
            1,
            Math.min(this.chunkSize, this.totalWork - this.iterations),
          )
        : this.chunkSize),
      (s.rng = Vt(this.seed + e * Pn)),
      a.clear(),
      tt(s, this.soloOrder),
      (this.chunkBestScore = a.total),
      (this.chunkBestSnap = a.snapshot()),
      (this.chunkImproved = !1),
      a.total > this.bestScore &&
        ((this.bestScore = a.total),
        (this.bestSnap = this.chunkBestSnap),
        this.captureBestStats(),
        this.recordMilestone(this.elapsedMs()),
        this.history.push({ ms: this.elapsedMs(), score: this.bestScore }),
        (this.chunkImproved = !0)));
  }
  endChunk() {
    const e = this.layout;
    e &&
      (e.restore(this.chunkBestSnap),
      this.polish(),
      e.total > this.bestScore &&
        ((this.bestScore = e.total),
        (this.bestSnap = e.snapshot()),
        this.captureBestStats(),
        this.recordMilestone(this.elapsedMs()),
        this.history.push({ ms: this.elapsedMs(), score: this.bestScore }),
        (this.chunkImproved = !0)),
      (this.dryChunks = this.chunkImproved ? 0 : this.dryChunks + 1));
  }
  runSlice(e) {
    if (this.finished) return !0;
    const s = this.eng,
      a = this.layout,
      n = U1();
    ((this.runningSince = n), (this.running = !0));
    const l = (i) => (
      (this.consumedMs += U1() - n),
      (this.running = !1),
      (this.finished = this.finished || i),
      i
    );
    for (;;) {
      if (this.stopRequested || this.workDone() >= this.totalWork)
        return (this.endChunk(), l(!0));
      if (U1() - n >= e) return l(!1);
      if (this.iterations - this.chunkStartIter >= this.chunkIters) {
        if ((this.endChunk(), !this.byIterations && this.dryChunks >= Dn))
          return l(!0);
        this.startChunk(this.chunkIndex + 1);
        continue;
      }
      const i = Math.min(
          1,
          (this.iterations - this.chunkStartIter) / this.chunkIters,
        ),
        o = this.T0 * Math.pow(this.T1 / this.T0, i);
      for (let c = 0; c < Gn; c++) {
        this.iterations++;
        const u = a.total,
          f = zn(s.rng)(s);
        if (!f) continue;
        const v = a.total - u;
        if (v >= 0 || s.rng() < Math.exp(v / o)) {
          if (a.total > this.chunkBestScore) {
            const d = a.snapshot();
            ((this.chunkBestScore = a.total),
              (this.chunkBestSnap = d),
              a.total > this.bestScore &&
                ((this.bestScore = a.total),
                (this.bestSnap = d),
                this.captureBestStats(),
                this.recordMilestone(this.elapsedMs()),
                this.history.push({
                  ms: this.elapsedMs(),
                  score: this.bestScore,
                }),
                (this.chunkImproved = !0)));
          }
        } else f();
      }
    }
  }
  materializeMilestones() {
    return this.table
      ? this.milestones.map((e) => ({
          ms: e.ms,
          iterations: e.iterations,
          score: this.trueScore(e.score, e.stats.filledCells),
          pieces: Zt(e.snap, this.table, this.candidates),
          ...e.stats,
        }))
      : [];
  }
  polish() {
    const e = this.layout,
      s = this.table;
    if (!(!e || !s))
      for (let a = 0; a < 8; a++) {
        let n = !1;
        for (const l of e.unplacedCandidates()) {
          const i = s.byShape.get(this.candidates[l].shapeId);
          if (!i) continue;
          const o = e.total;
          let c = -1,
            u = 0;
          for (let f = i.start; f < i.end; f++) {
            if (!e.canPlace(f) || !e.place(l, f)) continue;
            const v = e.total - o;
            (e.remove(l), v > u && ((u = v), (c = f)));
          }
          c >= 0 && (e.place(l, c), (n = !0));
        }
        if (!n) break;
      }
  }
  countUnplacedThatFit() {
    const e = this.layout,
      s = this.table;
    if (!e || !s) return 0;
    let a = 0;
    for (const n of e.unplacedCandidates()) {
      const l = s.byShape.get(this.candidates[n].shapeId);
      if (l) {
        for (let i = l.start; i < l.end; i++)
          if (e.canPlace(i)) {
            a++;
            break;
          }
      }
    }
    return a;
  }
  finish() {
    const e = {
      seed: this.seed,
      iterations: this.iterations,
      elapsedMs: this.elapsedMs(),
      stopped: this.stopRequested,
      history: this.history,
      milestones: this.materializeMilestones(),
      candidateCount: this.candidateCount,
      prunedCount: this.prunedCount,
      usableCells: this.usableCells,
    };
    if (!this.layout || !this.table)
      return {
        ...e,
        pieces: [],
        score: 0,
        filledCells: 0,
        drift: 0,
        unusedByEquip: es(this.candidates, []),
        unplacedThatFit: 0,
      };
    (this.layout.restore(this.bestSnap), this.polish());
    const s = this.layout.total;
    this.layout.recomputeAll();
    const a = Math.abs(this.layout.total - s),
      n = Qn(this.layout, this.table, this.candidates),
      l = n.reduce((i, o) => i + o.cells.length, 0);
    return {
      ...e,
      pieces: n,
      score: this.trueScore(this.layout.total, l),
      filledCells: l,
      drift: a,
      unusedByEquip: es(
        this.candidates,
        n.map((i) => i.candidateIndex),
      ),
      unplacedThatFit: this.countUnplacedThatFit(),
    };
  }
}
const ia = (t, e, s, a) => {
    const n = a[t];
    return {
      candidateIndex: t,
      equipId: n.equipId,
      name: n.name,
      tier: n.tier,
      element: n.element,
      shapeId: n.shapeId,
      row: s.anchorRow[e],
      col: s.anchorCol[e],
      cells: An(s, e),
    };
  },
  oa = (t) =>
    t.sort(
      (e, s) => e.equipId - s.equipId || (e.cells[0] ?? 0) - (s.cells[0] ?? 0),
    ),
  Zt = (t, e, s) => {
    const a = [];
    for (let n = 0; n < t.length; n += 2) a.push(ia(t[n], t[n + 1], e, s));
    return oa(a);
  },
  Qn = (t, e, s) => {
    const a = [];
    for (const n of t.placedCandidates()) {
      const l = t.placementOf(n);
      l !== se && a.push(ia(n, l, e, s));
    }
    return oa(a);
  },
  es = (t, e) => {
    const s = new Set(e),
      a = new Map();
    for (const n of t) {
      if (s.has(n.index)) continue;
      const l = a.get(n.equipId) ?? {
        equipId: n.equipId,
        name: n.name,
        tier: n.tier,
        count: 0,
      };
      (l.count++, a.set(n.equipId, l));
    }
    return [...a.values()].sort((n, l) => n.equipId - l.equipId);
  },
  K1 = 15,
  St = () => {
    const t =
      typeof navigator < "u" && typeof navigator.hardwareConcurrency == "number"
        ? navigator.hardwareConcurrency
        : 4;
    return Math.max(1, Math.min(4, t - 1));
  },
  ts = (t, e, s) => {
    const a = new Wn(t, e);
    let n;
    const l = new Promise((c) => {
        n = c;
      }),
      i = bn(),
      o = () => {
        if (a.runSlice(gn)) {
          n(a.finish());
          return;
        }
        (s.onProgress?.(a.progress()), i(o));
      };
    return (
      i(o),
      {
        promise: l,
        stop: () => a.requestStop(),
        info: Promise.resolve({ mode: "main-thread", threads: 1 }),
      }
    );
  },
  u0 = (t, e, s, a, n) => (t && e !== a ? e > a : s > n),
  Kn = (t, e) =>
    t.reduce((s, a) =>
      u0(e, a.filledCells, a.score, s.filledCells, s.score) ? a : s,
    ),
  Xn = (t, e) => {
    let s = null,
      a = 0;
    for (const n of t) {
      const l = n.best?.filledCells ?? 0;
      if (s === null) {
        ((s = n), (a = l));
        continue;
      }
      const i = u0(e, l, n.bestScore, a, s.bestScore),
        o = !i && !u0(e, a, s.bestScore, l, n.bestScore);
      (i || (o && n.thread < s.thread)) && ((s = n), (a = l));
    }
    return s;
  },
  ss = (t) => ({
    pieces: [],
    score: Number.NEGATIVE_INFINITY,
    iterations: 0,
    elapsedMs: 0,
    seed: t.seed ?? 1,
    stopped: !1,
    history: [],
    milestones: [],
    candidateCount: 0,
    prunedCount: 0,
    usableCells: 0,
    filledCells: 0,
    drift: 0,
    unusedByEquip: [],
    unplacedThatFit: 0,
  }),
  Vn = (t, e, s = {}) => {
    if (s.forceMainThread || typeof Worker > "u") return ts(t, e, s);
    const a = Math.max(1, Math.min(K1, s.threads ?? St())),
      n = e.seed ?? 1,
      l = (e.objective?.fillBonus ?? 0) > 0;
    let i, o;
    const c = new Promise((D) => {
        i = D;
      }),
      u = new Promise((D) => {
        o = D;
      });
    let f = !1,
      v = !1,
      d = !1,
      m = 0,
      A = null;
    const h = [],
      b = new Map(),
      I = new Map(),
      y = () => {
        for (const D of h)
          try {
            D.terminate();
          } catch {}
        h.length = 0;
      },
      S = () => {
        f ||
          ((f = !0),
          y(),
          v || ((v = !0), o({ mode: "main-thread", threads: 1 })),
          (A = ts(t, e, s)),
          d && A.stop(),
          A.promise.then((D) => i(D)));
      },
      O = () => {
        if (f || h.length === 0 || b.size < h.length) return;
        f = !0;
        const D = [...b.values()];
        y();
        const _ = Kn(D, l);
        i({
          ..._,
          iterations: D.reduce((p, g) => p + Math.max(0, g.iterations), 0),
          stopped: D.some((p) => p.stopped),
        });
      },
      E = (D) => {
        if ((I.set(D.thread, D), !s.onProgress)) return;
        let _ = 0;
        for (const g of I.values()) _ += g.iterations;
        const p = Xn(I.values(), l);
        p && s.onProgress({ ...p, iterations: _ });
      },
      N = setTimeout(() => {
        m === 0 && S();
      }, wn);
    for (let D = 0; D < a; D++) {
      let _;
      try {
        _ = new In();
      } catch {
        if (h.length === 0)
          return (
            clearTimeout(N),
            S(),
            { promise: c, stop: () => (d = !0), info: u }
          );
        break;
      }
      const p = D;
      (h.push(_),
        (_.onmessage = (g) => {
          const w = g.data;
          if (w.type === "ready") {
            (m++,
              clearTimeout(N),
              v || ((v = !0), o({ mode: "worker", threads: h.length })),
              _.postMessage({
                type: "solve",
                catalog: t,
                request: { ...e, seed: n + p * 7919, thread: p },
              }),
              d && _.postMessage({ type: "stop" }));
            return;
          }
          if (w.type === "progress") {
            E(w.progress);
            return;
          }
          if (w.type === "done") {
            (b.set(p, w.result), O());
            return;
          }
          w.type === "error" && (b.set(p, ss(e)), O());
        }),
        (_.onerror = () => {
          if (m === 0) {
            (clearTimeout(N), S());
            return;
          }
          (b.set(p, ss(e)), O());
        }));
    }
    return {
      promise: c,
      stop: () => {
        if (((d = !0), A)) A.stop();
        else for (const D of h) D.postMessage({ type: "stop" });
      },
      info: u,
    };
  },
  Jn = (t, e, s) => {
    const a = [],
      n = new Set(e.blocked),
      l = new Map();
    for (const c of t) {
      if (c.cells.length === 0) {
        a.push(`${c.name} 没有占据任何格`);
        continue;
      }
      for (const u of c.cells) {
        const f = $e(u),
          v = Ee(u);
        ((f < 0 || f >= e.rows || v < 0 || v >= e.cols) &&
          a.push(`${c.name} 的格 (${f},${v}) 越出背包 ${e.rows}×${e.cols}`),
          n.has(u) && a.push(`${c.name} 占据了不可用格 (${f},${v})`));
        const d = l.get(u);
        d
          ? a.push(`${c.name} 与 ${d.name} 在格 (${f},${v}) 重叠`)
          : l.set(u, c);
      }
    }
    const i = new Map();
    for (const c of s) i.set(c.equipId, (i.get(c.equipId) ?? 0) + c.count);
    const o = new Map();
    for (const c of t) o.set(c.equipId, (o.get(c.equipId) ?? 0) + 1);
    for (const [c, u] of o) {
      const f = i.get(c) ?? 0;
      u > f && a.push(`法宝 ${c} 用了 ${u} 件，但只持有 ${f} 件`);
    }
    return a;
  },
  A1 = "wydl-bag:v1:state",
  Ft = 1,
  A0 = [2001, 2002, 2003, 2025, 2027, 2045, 2069, 2049],
  da = (t) => z.attrs.find((e) => e.id === t),
  ua = (t) => da(t)?.nPower ?? 0,
  as = (t) => String(Number(t.toFixed(3))),
  ca = (t) => (t === 0 ? Zn : (t ?? 1)),
  Zn = 0.01,
  q0 = () => Object.fromEntries(A0.map((t) => [t, 1]));
q0();
const ae = C({}),
  AwakenState = C({}),
  recognizedTalents = C(null),
  syncTalentsOnImport = C(!0),
  ke = C(le),
  he = C(J),
  qe = C([]),
  O1 = C(35),
  _0 = C(!1),
  Ye = C(q0()),
  ie = C("power"),
  u1 = C(!1),
  er = 1e7,
  Ke = C("linear"),
  Ne = C({}),
  De = C(Array(x1).fill(0)),
  AcquiredTalentState = C(Array(x1).fill(0)),
  filterTalentsByEquips = C(true),
  onlyBaseStatTalents = C(true),
  talentSearchKeyword = C(""),
  He = C(8e3),
  Xe = C(1),
  P1 = C(1),
  FormFilter = C(0),
  BASE_PV = 19,
  BASE_UV = 17,
  sitePv = C((() => {
    try {
      const v = localStorage.getItem("laozu-bag-pv");
      return v ? Number(v).toLocaleString() : String(BASE_PV);
    } catch { return String(BASE_PV); }
  })()),
  siteUv = C((() => {
    try {
      const v = localStorage.getItem("laozu-bag-uv");
      return v ? Number(v).toLocaleString() : String(BASE_UV);
    } catch { return String(BASE_UV); }
  })()),
  updateBsz = (pv, uv) => {
    if (pv !== undefined && pv !== null && pv !== "") {
      const n = Number(pv);
      if (!isNaN(n) && n > 0) {
        sitePv.value = n.toLocaleString();
        try { localStorage.setItem("laozu-bag-pv", String(n)); } catch {}
      }
    }
    if (uv !== undefined && uv !== null && uv !== "") {
      const n = Number(uv);
      if (!isNaN(n) && n > 0) {
        siteUv.value = n.toLocaleString();
        try { localStorage.setItem("laozu-bag-uv", String(n)); } catch {}
      }
    }
  },
  triggerBsz = (() => {
    let loading = false;
    return async (force = false) => {
      if (typeof window === "undefined") return;
      if (loading && !force) return;
      loading = true;

      // 1. 优先使用国内高性能阿里云节点 (Golang+Redis，绝不 502)
      try {
        const idKey = "laozu-bsz-identity";
        let identity = "";
        try { identity = localStorage.getItem(idKey) || ""; } catch {}
        const headers = {
          "x-bsz-referer": window.location.href || "https://rshen0731.github.io/laozu-bag/",
        };
        if (identity) headers["Authorization"] = "Bearer " + identity;
        const res = await fetch("https://bsz.iirose.cn/api", {
          method: "POST",
          headers,
        });
        if (res.ok) {
          const json = await res.json();
          if (json && json.success && json.data) {
            const newPv = BASE_PV + (json.data.site_pv || 0);
            const newUv = BASE_UV + (json.data.site_uv || 0);
            updateBsz(newPv, newUv);
            const newId = res.headers.get("Set-Bsz-Identity");
            if (newId) {
              try { localStorage.setItem(idKey, newId); } catch {}
            }
            loading = false;
            return;
          }
        }
      } catch (e) {}

      // 2. 备用通道：官方 jsonp
      try {
        const cbName = "BusuanziCallback_" + Math.floor(1e11 * Math.random());
        window[cbName] = (d) => {
          loading = false;
          try {
            if (d && d.site_pv) updateBsz(d.site_pv, d.site_uv);
          } catch (e) {}
          try { delete window[cbName]; } catch (e) {}
        };
        const s = document.createElement("script");
        s.src = "https://busuanzi.ibruce.info/busuanzi?jsonpCallback=" + cbName;
        s.referrerPolicy = "no-referrer-when-downgrade";
        s.onerror = () => { loading = false; };
        document.head.appendChild(s);
      } catch (e) {
        loading = false;
      }
    };
  })(),
  initBusuanzi = (() => {
    if (typeof window === "undefined") return;
    if (document.readyState === "complete" || document.readyState === "interactive") {
      triggerBsz();
    } else {
      window.addEventListener("DOMContentLoaded", () => triggerBsz(), { once: true });
    }
  })(),
  c1 = C(St()),
  Be = C("edit"),
  Ae = C(null),
  pa = (t) => {
    const e = new Map(z.equips.map((a) => [a.id, a])),
      s = [];
    for (const a of t) {
      const n = e.get(a.equipId);
      if (!n || a.cells.length === 0) return null;
      s.push({
        candidateIndex: s.length,
        equipId: n.id,
        name: n.name,
        tier: n.tier,
        element: n.element,
        shapeId: n.shapeId,
        row: Math.min(...a.cells.map($e)),
        col: Math.min(...a.cells.map(Ee)),
        cells: [...a.cells],
      });
    }
    return s;
  },
  ns = te(() => {
    const t = Ae.value;
    return t ? pa(t.pieces) : null;
  }),
  ha = (t, e = "之前摆盘") => {
    const s = new Set(qe.value);
    for (const a of t)
      for (const n of a.cells) {
        const l = $e(n),
          i = Ee(n);
        if (l >= ke.value || i >= he.value) return `${e}越出了背包范围`;
        if (s.has(n)) return `${e}压在了「未解锁」格上`;
      }
    return null;
  },
  $0 = te(() => {
    const t = Ae.value;
    return t ? ha(t.pieces) : null;
  }),
  Ve = C(!0),
  Bt = C({}),
  c0 = te(() => yn(ke.value, he.value, qe.value)),
  ue = te(() => la(c0.value)),
  Te = te(() =>
    Object.entries(ae.value)
      .filter(([, t]) => t > 0)
      .map(([t, e]) => ({ equipId: Number(t), count: e })),
  ),
  Je = te(() => Te.value.reduce((t, e) => t + e.count, 0)),
  q1 = te(() => {
    const t = new Map(z.shapes.map((s) => [s.id, s.cells.length])),
      e = new Map(z.equips.map((s) => [s.id, s]));
    return Te.value.reduce(
      (s, a) => s + (t.get(e.get(a.equipId).shapeId) ?? 0) * a.count,
      0,
    );
  }),
  ma = te(() => pn(z.talents, De.value, ACQUIRED_TALENTS, AcquiredTalentState.value)),
  We = te(() => {
    const t = u1.value ? er : 0,
      e = Ne.value,
      s = ma.value,
      aw = AwakenState.value;
    return ie.value === "power"
      ? { kind: "power", fillBonus: t, elderStars: e, talents: s, awaken: aw }
      : {
          kind: "weighted",
          mode: Ke.value,
          critRate: O1.value / 100,
          weights: Object.fromEntries(
            A0.map((a) => [a, ua(a) * ca(Ye.value[a])]),
          ),
          fillBonus: t,
          elderStars: e,
          talents: s,
          awaken: aw,
        };
  }),
  at = te(() =>
    Te.value.length === 0
      ? "请先录入持有的法宝"
      : ue.value === 0
        ? "请先配置背包可用格"
        : null,
  ),
  tr = te(() => {
    const t = [];
    return (
      q1.value > 0 &&
        q1.value < ue.value &&
        t.push(`持有法宝共占 ${q1.value} 格，不足以填满 ${ue.value} 个可用格`),
      ie.value === "weighted" &&
        Ke.value === "product" &&
        !_0.value &&
        t.push(`乘积模式使用默认暴击率 ${O1.value}%，可在目标设置中修改`),
      t
    );
  }),
  fa = () => ({
    version: Ft,
    holdings: ae.value,
    boardRows: ke.value,
    boardCols: he.value,
    blockedCells: qe.value,
    critRatePct: O1.value,
    critRateTouched: _0.value,
    weightMul: Ye.value,
    objectiveKind: ie.value,
    weightedMode: Ke.value,
    fillFirst: u1.value,
    budgetMs: He.value,
    seed: Xe.value,
    elementFilter: P1.value,
    threads: c1.value,
    currentLayout: Ae.value,
    elderStars: Ne.value,
    talentPicks: De.value,
    acquiredTalentPicks: AcquiredTalentState.value,
    filterTalentsByEquips: filterTalentsByEquips.value,
      onlyBaseStatTalents: onlyBaseStatTalents.value,
    awaken: AwakenState.value,
  }),
  xt = new Set(z.equips.map((t) => t.id)),
  va = new Set(z.equips.filter((t) => t.quality === 5).map((t) => t.id)),
  K = () => {
    if (Ve.value)
      try {
        localStorage.setItem(A1, JSON.stringify(fa()));
      } catch {
        Ve.value = !1;
      }
  },
  sr = () => {
    let t = null;
    try {
      ((t = localStorage.getItem(A1)),
        localStorage.setItem(`${A1}:probe`, "1"),
        localStorage.removeItem(`${A1}:probe`));
    } catch {
      Ve.value = !1;
      return;
    }
    if (!t) return;
    let e;
    try {
      e = JSON.parse(t);
    } catch {
      return;
    }
    Ia(e);
  },
  Ia = (t) => {
    if (t.version === Ft) {
      if (t.holdings && typeof t.holdings == "object") {
        const e = {};
        for (const [s, a] of Object.entries(t.holdings)) {
          const n = Number(s);
          xt.has(n) && Number.isFinite(a) && a > 0 && (e[n] = Math.floor(a));
        }
        ae.value = e;
      }
      if (
        (Number.isInteger(t.boardRows) &&
          t.boardRows >= 1 &&
          t.boardRows <= le &&
          (ke.value = t.boardRows),
        Number.isInteger(t.boardCols) &&
          t.boardCols >= 1 &&
          t.boardCols <= J &&
          (he.value = t.boardCols),
        Array.isArray(t.blockedCells) &&
          (qe.value = t.blockedCells.filter(
            (e) => Number.isInteger(e) && e >= 0 && e < le * J,
          )),
        Number.isFinite(t.critRatePct) &&
          (O1.value = Math.min(100, Math.max(0, t.critRatePct))),
        typeof t.critRateTouched == "boolean" && (_0.value = t.critRateTouched),
        t.weightMul && typeof t.weightMul == "object")
      ) {
        const e = q0();
        for (const s of A0) {
          const a = t.weightMul[s];
          typeof a == "number" &&
            Number.isFinite(a) &&
            a >= 0 &&
            (e[s] = Math.floor(a));
        }
        Ye.value = e;
      }
      ((t.objectiveKind === "power" || t.objectiveKind === "weighted") &&
        (ie.value = t.objectiveKind),
        (t.weightedMode === "linear" || t.weightedMode === "product") &&
          (Ke.value = t.weightedMode),
        typeof t.fillFirst == "boolean" && (u1.value = t.fillFirst),
        Number.isFinite(t.budgetMs) &&
          (He.value = Math.min(12e4, Math.max(500, t.budgetMs))),
        Number.isInteger(t.seed) && (Xe.value = t.seed),
        Number.isInteger(t.elementFilter) && (P1.value = t.elementFilter),
        Number.isInteger(t.threads) &&
          (c1.value = Math.min(15, Math.max(1, t.threads))),
        (Ae.value = rr(t.currentLayout)),
        (Ne.value = nr(t.elderStars)),
        (De.value = ar(t.talentPicks)),
        (AcquiredTalentState.value = ar_ac(t.acquiredTalentPicks)),
        (filterTalentsByEquips.value = t.filterTalentsByEquips ?? true),
      (onlyBaseStatTalents.value = t.onlyBaseStatTalents ?? true),
        (AwakenState.value = tr_aw(t.awaken)));
    }
  },
  tr_aw = (t) => {
    if (!t || typeof t !== "object") return {};
    const e = {};
    for (const [k, v] of Object.entries(t)) {
      const id = Number(k);
      xt.has(id) && Number.isInteger(v) && v >= 1 && v <= 5 && (e[id] = v);
    }
    return e;
  },
  setAwakenLevel = (id, lv) => {
    const aw = { ...AwakenState.value };
    lv > 0 ? (aw[id] = lv) : delete aw[id];
    AwakenState.value = aw;
    K();
  },
  ga = new Set(z.talents.map((t) => t.id)),
  ar = (t) => {
    const e = Array(x1).fill(0);
    if (!Array.isArray(t)) return e;
    const s = new Set();
    for (let a = 0; a < x1; a++) {
      const n = t[a];
      typeof n == "number" && ga.has(n) && !s.has(n) && ((e[a] = n), s.add(n));
    }
    return e;
  },
  ga_ac = new Set(ACQUIRED_TALENTS.map((t) => t.id)),
  ar_ac = (t) => {
    const e = Array(x1).fill(0);
    if (!Array.isArray(t)) return e;
    const s = new Set();
    for (let a = 0; a < x1; a++) {
      const n = t[a];
      typeof n == "number" && ga_ac.has(n) && !s.has(n) && ((e[a] = n), s.add(n));
    }
    return e;
  },
  nr = (t) => {
    if (!t || typeof t != "object") return {};
    const e = {};
    for (const [s, a] of Object.entries(t)) {
      const n = Number(s);
      va.has(n) && Number.isInteger(a) && a >= 1 && a <= k0 && (e[n] = a);
    }
    return e;
  },
  wa = (t) => {
    if (!Array.isArray(t)) return null;
    const e = new Set(),
      s = [];
    for (const a of t) {
      if (
        !a ||
        !xt.has(a.equipId) ||
        !Array.isArray(a.cells) ||
        a.cells.length === 0
      )
        return null;
      for (const n of a.cells) {
        if (!Number.isInteger(n) || n < 0 || n >= le * J || e.has(n))
          return null;
        e.add(n);
      }
      s.push({ equipId: a.equipId, cells: [...a.cells].sort((n, l) => n - l) });
    }
    return s;
  },
  rr = (t) => {
    if (!t || typeof t != "object") return null;
    const e = wa(t.pieces);
    if (!e) return null;
    const s = Number.isInteger(t.missing) && t.missing >= 0 ? t.missing : 0;
    return {
      pieces: e,
      missing: s,
      savedAt: typeof t.savedAt == "string" ? t.savedAt : "",
    };
  },
  lr = () => {
    ((ae.value = {}),
      (ke.value = le),
      (he.value = J),
      (qe.value = []),
      (Ae.value = null),
      (Ne.value = {}),
      (AwakenState.value = {}),
      (De.value = Array(x1).fill(0)),
      (AcquiredTalentState.value = Array(x1).fill(0)),
      (O1.value = 35),
      (_0.value = !1),
      (Ye.value = q0()),
      (ie.value = "power"),
      (Ke.value = "linear"),
      (u1.value = !1),
      (He.value = 8e3),
      (Xe.value = 1),
      (c1.value = St()));
    try {
      localStorage.removeItem(A1);
    } catch {}
  },
  E0 = (t, e) => {
    const s = { ...ae.value };
    (e > 0 ? (s[t] = e) : delete s[t], (ae.value = s), K());
  },
  ir = () => {
    ((ae.value = {}), (Bt.value = {}), K());
  },
  or = (t, e) => {
    if (t === e) return;
    const s = { ...ae.value },
      a = s[t] ?? 0;
    (delete s[t], a > 0 && (s[e] = (s[e] ?? 0) + a), (ae.value = s), K());
  },
  dr = (t, e) => {
    const s = X(t, e),
      a = new Set(qe.value);
    (a.has(s) ? a.delete(s) : a.add(s),
      (qe.value = [...a].sort((n, l) => n - l)),
      K());
  },
  ur = (t, e) => {
    if (!va.has(t)) return;
    const s = { ...Ne.value };
    (Number.isInteger(e) && e >= 1 && e <= k0 ? (s[t] = e) : delete s[t],
      (Ne.value = s),
      K());
  },
  cr = (t, e) => {
    if (!Number.isInteger(t) || t < 0 || t >= x1) return;
    const s = ga.has(e);
    if (s && De.value.some((n, l) => l !== t && n === e)) return;
    const a = [...De.value];
    ((a[t] = s ? e : 0), (De.value = a), K());
  },
  cr_ac = (t, e) => {
    if (!Number.isInteger(t) || t < 0 || t >= x1) return;
    const s = ga_ac.has(e);
    if (s && AcquiredTalentState.value.some((n, l) => l !== t && n === e)) return;
    const a = [...AcquiredTalentState.value];
    ((a[t] = s ? e : 0), (AcquiredTalentState.value = a), K());
  },
  pr = (t, e) => {
    const s = {};
    for (const [a, n] of Object.entries(t)) {
      const l = Number(a);
      !xt.has(l) || !Number.isFinite(n) || n <= 0 || (s[l] = Math.floor(n));
    }
    
    if (v1.value && v1.value.pieces) {
      const newAw = { ...AwakenState.value };
      for (let i = 0; i < v1.value.pieces.length; i++) {
        const piece = v1.value.pieces[i];
        const eq = typeof awScreenshotEquip === "function" ? awScreenshotEquip(v1.value, i) : piece.equip;
        if (eq && eq.quality === 5 && piece.awakenLevel != null) {
          newAw[eq.id] = piece.awakenLevel;
        }
      }
      AwakenState.value = newAw;
    }
    if (v1.value && syncTalentsOnImport?.value && recognizedTalents?.value?.hasTalents) {
      const { innatePicks, acquiredPicks } = recognizedTalents.value;
      if (innatePicks && innatePicks.some(id => id > 0)) {
        De.value = [...innatePicks];
      }
      if (acquiredPicks && acquiredPicks.some(id => id > 0)) {
        AcquiredTalentState.value = [...acquiredPicks];
      }
    }
    ((ae.value = s), e && (Ae.value = e), K());

  },
  hr = (t) => {
    ((qe.value = [...new Set(t)]
      .filter((e) => Number.isInteger(e) && e >= 0 && e < le * J)
      .sort((e, s) => e - s)),
      K());
  },
  ba = "wydl-bag:v1:plans",
  f1 = C([]),
  ya = (t) => {
    f1.value = t;
    try {
      localStorage.setItem(ba, JSON.stringify(t));
    } catch {
      Ve.value = !1;
    }
  },
  mr = () => {
    let t = null;
    try {
      t = localStorage.getItem(ba);
    } catch {
      return;
    }
    if (t)
      try {
        const e = JSON.parse(t);
        if (!Array.isArray(e)) return;
        f1.value = e
          .filter(
            (s) =>
              s &&
              typeof s.name == "string" &&
              s.state &&
              s.state.version === Ft,
          )
          .map((s) => ({
            ...s,
            pieceCount:
              typeof s.pieceCount == "number"
                ? s.pieceCount
                : Object.values(s.state.holdings ?? {}).reduce(
                    (a, n) => a + n,
                    0,
                  ),
          }));
      } catch {}
  },
  rs = (t) => {
    const e = t.trim();
    if (!e) return;
    const s = new Date().toISOString().slice(0, 16).replace("T", " "),
      a = fa(),
      n = Object.values(a.holdings).reduce((o, c) => o + c, 0),
      l = { name: e, savedAt: s, pieceCount: n, state: a },
      i = f1.value.filter((o) => o.name !== e);
    ya([l, ...i]);
  },
  fr = (t) => {
    ya(f1.value.filter((e) => e.name !== t));
  },
  vr = (t) => {
    const e = f1.value.find((s) => s.name === t);
    e && (Ia(e.state), K());
  },
  ka = "wydl-bag:v1:layouts",
  R1 = C([]),
  D1 = C(""),
  Aa = (t) => {
    R1.value = t;
    try {
      localStorage.setItem(ka, JSON.stringify(t));
    } catch {
      Ve.value = !1;
    }
  },
  Ir = () => {
    let t = null;
    try {
      t = localStorage.getItem(ka);
    } catch {
      return;
    }
    if (t)
      try {
        const e = JSON.parse(t);
        if (!Array.isArray(e)) return;
        const s = [];
        for (const a of e) {
          if (!a || typeof a.name != "string" || !a.name.trim()) continue;
          const n = wa(a.pieces);
          !n ||
            n.length === 0 ||
            s.push({
              name: a.name,
              savedAt: typeof a.savedAt == "string" ? a.savedAt : "",
              objectiveKind:
                a.objectiveKind === "weighted" ? "weighted" : "power",
              score: Number.isFinite(a.score) ? a.score : 0,
              pieces: n,
            });
        }
        R1.value = s;
      } catch {}
  },
  gr = (t, e, s, a) => {
    const n = t.trim();
    if (!n || e.length === 0) return;
    const l = new Date().toISOString().slice(0, 16).replace("T", " "),
      i = {
        name: n,
        savedAt: l,
        objectiveKind: a,
        score: s,
        pieces: e.map((o) => ({
          equipId: o.equipId,
          cells: [...o.cells].sort((c, u) => c - u),
        })),
      };
    (Aa([i, ...R1.value.filter((o) => o.name !== n)]), (D1.value = n));
  },
  wr = (t) => {
    (Aa(R1.value.filter((e) => e.name !== t)),
      D1.value === t && (D1.value = ""));
  },
  br = {
    2001: "攻击力",
    2002: "防御",
    2003: "生命值",
    2004: "攻击%",
    2005: "防御%",
    2006: "生命%",
    2025: "增伤",
    2027: "暴伤",
    2045: "治疗",
    2047: "汲取",
    2049: "强汲取",
    2069: "护盾",
  },
  yr = new Map(z.attrs.map((t) => [t.id, t.name])),
  kr = new Map(z.skills.map((t) => [t.id, t])),
  Ar = (t) => br[t] ?? yr.get(t) ?? `属性${t}`,
  _1 = (t) => {
    const e = t / 100;
    return `${Number.isInteger(e) ? e : e.toFixed(1)}%`;
  },
  qr = (t) => {
    const e = [];
    for (let s = 1; s <= 8; s++) t & (1 << s) && e.push(Fe[s]);
    return e.join("/") || "无";
  },
  _r = (t) =>
    t.buffs.map((e) => ({
      scope: t.scope,
      scopeLabel: t.scope === "self" ? "自身" : "相邻",
      text: `${qr(t.elementMask)}系 ${Ar(e.attr)} +${_1(e.value)}`,
      desc: t.desc,
    })),
  Mr = (t) =>
    t.skillIds.flatMap((e) => {
      const s = kr.get(e);
      return s ? _r(s) : [];
    }),
  X1 = (t, e, s) => ({
    atk: l1(t, e, s, 2001, t.base.find((a) => a.attr === 2001)?.value ?? 0),
    def: l1(t, e, s, 2002, t.base.find((a) => a.attr === 2002)?.value ?? 0),
    hp: l1(t, e, s, 2003, t.base.find((a) => a.attr === 2003)?.value ?? 0),
  }),
  nt = (t, e) => _t(t, e) > 0,
  Sr = (t, e) => {
    const s = e?.[t.weaponForm];
    return !!s && Object.values(s).some((a) => a > 0);
  },
  Fr = { 2004: "攻", 2005: "防", 2006: "命" },
  Dr_ac = (i) => {
    if (!i) return "";
    if (i.base) {
      const formNames = (i.forms || []).map((f) => na(f)).join("");
      if (i.base[2004] && i.base[2005] && i.base[2006]) {
        const v = (i.base[2004] / 100).toFixed(1).replace(/\.0$/, "");
        return `${i.name}（${formNames}三围+${v}%）`;
      }
      const parts = [];
      if (i.base[2004]) parts.push("攻");
      if (i.base[2005]) parts.push("防");
      if (i.base[2006]) parts.push("血");
      const v = (Object.values(i.base)[0] / 100).toFixed(1).replace(/\.0$/, "");
      return `${i.name}（${formNames}${parts.join("")}+${v}%）`;
    }
    let brief = i.desc
      .replace(/【.*?】形态法宝/g, "")
      .replace(/【.*?】/g, "")
      .replace(/.*?形态法宝/g, "")
      .replace(/效果/g, "")
      .replace(/强化/g, "")
      .trim();
    brief = brief.replace(/^，|，$/g, "");
    return `${i.name}（${brief}）`;
  },

  Br = (t) => `${t.name}（${na(t.form)}${Fr[t.attr] ?? ""}+${_1(t.value)}）`,
  xr = (t) => "★".repeat(t) + "☆".repeat(Math.max(0, k0 - t)),
  Cr = (t, e) => {
    const s = _t(t, e);
    return s ? `${e}星 +${Math.round(s * 100)}%` : `${e}星`;
  },
  T1 = (t) => ["", "一阶", "二阶", "三阶", "四阶", "五阶"][t] ?? `${t}阶`,
  oe = (t) => Math.round(t).toLocaleString("zh-CN"),
  rt = (t, e) => (e > 0 ? `${((t / e) * 100).toFixed(1)}%` : "—"),
  ls = ({ score: t, live: e }) =>
    e === null
      ? null
      : t >= e
        ? r("span", {
            class: "ok",
            children: [
              " ",
              "· 比实时摆盘高 ",
              oe(t - e),
              "（+",
              rt(t - e, e),
              "）",
            ],
          })
        : r("span", {
            class: "warn",
            children: [
              " ",
              "· 比实时摆盘低 ",
              oe(e - t),
              "（−",
              rt(e - t, e),
              "）",
            ],
          });
function Pr({
  best: t,
  selected: e,
  onSelect: s,
  milestones: a,
  replayAt: n,
  onReplay: l,
  running: i,
}) {
  const o = new Set(qe.value),
    c = ns.value,
    u = R1.value,
    f = u.find((_) => _.name === D1.value) ?? u[0] ?? null,
    v = f ? pa(f.pieces) : null,
    d =
      Be.value === "current" && c
        ? "current"
        : Be.value === "saved" && v
          ? "saved"
          : Be.value === "layout" && t
            ? "layout"
            : "edit",
    m = d === "edit",
    A = d === "current" ? c : d === "saved" ? v : (t?.pieces ?? []),
    h = (_) => {
      const p = Q1(z, _, We.value);
      return ie.value === "power" ? p.powerTotal : p.weightedTotal;
    },
    b = d === "saved" ? h(v) : d === "current" ? h(c) : null,
    I = (Ae.value?.missing ?? 0) === 0,
    y = t && (d === "saved" || (d === "current" && I)) ? h(t.pieces) : null,
    S = d === "saved" ? ha(f.pieces, "这份摆盘") : null,
    O = () => {
      if (!t) return;
      const _ = h(t.pieces),
        p = `摆盘${u.length + 1} · ${oe(_)}分`,
        g = prompt("收藏这份摆盘，起个名字（同名覆盖）：", p);
      g !== null && gr(g.trim() || p, t.pieces, _, ie.value);
    },
    E = new Map();
  A.forEach((_, p) => _.cells.forEach((g) => E.set(g, p)));
  const N = new Map();
  A.forEach((_, p) => {
    let g = -1,
      w = 1 / 0,
      q = 1 / 0;
    for (const k of _.cells) {
      const M = $e(k),
        T = Ee(k);
      (M < w || (M === w && T < q)) && ((w = M), (q = T), (g = k));
    }
    N.set(p, g);
  });
  const D = (_, p) => {
    const g = E.get(X(_, p));
    if (g === void 0) {
      const x = (j, $) =>
          j >= 0 &&
          $ >= 0 &&
          j < ke.value &&
          $ < he.value &&
          E.get(X(j, $)) === void 0,
        H = [];
      return (
        x(_ - 1, p) && H.push("inset 0 1px 0 0 var(--line)"),
        x(_, p - 1) && H.push("inset 1px 0 0 0 var(--line)"),
        H.join(", ")
      );
    }
    const w = (x, H) =>
        x < 0 || H < 0 || x >= ke.value || H >= he.value ? g : E.get(X(x, H)),
      q = (x) => (x === void 0 ? 2 : 1),
      k = w(_ - 1, p),
      M = w(_ + 1, p),
      T = w(_, p - 1),
      P = w(_, p + 1),
      F = [];
    return (
      k !== g
        ? F.push(`inset 0 ${q(k)}px 0 0 var(--outline)`)
        : _ > 0 && F.push("inset 0 1px 0 0 var(--cell-inner)"),
      M !== g && F.push(`inset 0 -${q(M)}px 0 0 var(--outline)`),
      T !== g
        ? F.push(`inset ${q(T)}px 0 0 0 var(--outline)`)
        : p > 0 && F.push("inset 1px 0 0 0 var(--cell-inner)"),
      P !== g && F.push(`inset -${q(P)}px 0 0 0 var(--outline)`),
      F.join(", ")
    );
  };
  return r("section", {
    class: "panel fill",
    id: "board",
    children: [
      r("h2", {
        children: [
          "背包摆盘",
          r("span", {
            class: "muted small",
            children: [" · ", ue, " 个可用格"],
          }),
          r("span", {
            class: "right modes",
            children: [
              r("button", {
                type: "button",
                class: d === "edit" ? "mode on" : "mode",
                onClick: () => (Be.value = "edit"),
                children: "编辑背包",
              }),
              r("button", {
                type: "button",
                class: d === "layout" ? "mode on" : "mode",
                disabled: !t,
                onClick: () => (Be.value = "layout"),
                children: "实时摆盘",
              }),
              r("button", {
                type: "button",
                class: d === "current" ? "mode on" : "mode",
                disabled: !c,
                title: Ae.value
                  ? "截图导入时记录的游戏内摆盘"
                  : "先用「截图导入」记录一份之前摆盘",
                onClick: () => (Be.value = "current"),
                children: "之前摆盘",
              }),
              r("button", {
                type: "button",
                class: d === "saved" ? "mode on" : "mode",
                disabled: !v,
                title: u.length
                  ? "多次求解间收藏下来的摆盘"
                  : "先在「实时摆盘」里收藏一份摆盘",
                onClick: () => (Be.value = "saved"),
                children: "收藏摆盘",
              }),
            ],
          }),
        ],
      }),
      m
        ? r(R, {
            children: [
              r("div", {
                class: "row wrap small",
                children: [
                  r("label", {
                    children: [
                      "行数",
                      r("input", {
                        type: "number",
                        min: 1,
                        max: le,
                        value: ke.value,
                        onInput: (_) => {
                          const p = Number(_.target.value);
                          Number.isInteger(p) &&
                            p >= 1 &&
                            p <= le &&
                            ((ke.value = p), K());
                        },
                      }),
                    ],
                  }),
                  r("label", {
                    children: [
                      "列数",
                      r("input", {
                        type: "number",
                        min: 1,
                        max: J,
                        value: he.value,
                        onInput: (_) => {
                          const p = Number(_.target.value);
                          Number.isInteger(p) &&
                            p >= 1 &&
                            p <= J &&
                            ((he.value = p), K());
                        },
                      }),
                    ],
                  }),
                  r("span", {
                    class: "muted",
                    children: ["上限 ", J, " 列 × ", le, " 行"],
                  }),
                ],
              }),
              r("p", {
                class: "muted small hint",
                children:
                  "点格子切换「可用 / 未解锁」。未解锁的格子不会被任何法宝占据。",
              }),
            ],
          })
        : d === "layout"
          ? null
          : d === "saved"
            ? r(R, {
                children: [
                  r("div", {
                    class: "row wrap small",
                    children: [
                      r("select", {
                        value: f.name,
                        onChange: (_) => (D1.value = _.target.value),
                        children: u.map((_) =>
                          r(
                            "option",
                            {
                              value: _.name,
                              children: [
                                _.name,
                                "（",
                                _.pieces.length,
                                " 件 · ",
                                _.savedAt,
                                "）",
                              ],
                            },
                            _.name,
                          ),
                        ),
                      }),
                      r("button", {
                        type: "button",
                        class: "ghost",
                        onClick: () => {
                          confirm(`删除收藏的摆盘「${f.name}」？`) &&
                            wr(f.name);
                        },
                        children: "删除",
                      }),
                    ],
                  }),
                  r("p", {
                    class: "small summary",
                    children: [
                      "按当前口径得分 ",
                      r("b", { children: oe(b) }),
                      r(ls, { score: b, live: y }),
                      S &&
                        r("span", {
                          class: "warn",
                          children: [" · ", S, "，与当前背包不符"],
                        }),
                    ],
                  }),
                ],
              })
            : r("p", {
                class: "small summary",
                children: [
                  "截图导入的之前摆盘 · ",
                  A.length,
                  " 件 · 按当前口径得分 ",
                  r("b", { children: oe(b) }),
                  r(ls, { score: b, live: y }),
                  !I &&
                    r("span", {
                      class: "warn",
                      children: [
                        " ",
                        "· 不完整（缺 ",
                        Ae.value.missing,
                        " 件），得分仅供参考",
                      ],
                    }),
                  $0.value &&
                    r("span", {
                      class: "warn",
                      children: [" · ", $0.value, "，与当前背包不符"],
                    }),
                ],
              }),
      r("div", {
        class: m ? "grid config" : "grid live",
        style: { gridTemplateColumns: `repeat(${he.value}, ${m ? 34 : 38}px)` },
        children: Array.from({ length: ke.value }, (_, p) =>
          Array.from({ length: he.value }, (g, w) => {
            const q = X(p, w),
              k = o.has(q);
            if (m)
              return r(
                "button",
                {
                  type: "button",
                  class: k ? "cell blocked" : "cell",
                  title: k
                    ? `(${p + 1},${w + 1}) 未解锁`
                    : `(${p + 1},${w + 1}) 可用`,
                  onClick: () => dr(p, w),
                  children: k ? "×" : "",
                },
                q,
              );
            const M = E.get(q);
            if (M === void 0)
              return r(
                "div",
                {
                  class: k ? "cell blocked" : "cell empty",
                  style: { boxShadow: D(p, w) },
                  children: k ? "×" : "",
                },
                q,
              );
            const T = A[M],
              P = e !== null && e !== M;
            return r(
              "div",
              {
                class: `cell piece q${T.tier}${P ? " dim" : ""}${e === M ? " sel" : ""}`,
                style: { boxShadow: D(p, w) },
                title: `#${M + 1} ${T.name}${(cl.get(T.equipId) || T).elder?.name ? ` (${(cl.get(T.equipId) || T).elder.name})` : ''}【${getEquipFormLabel(cl.get(T.equipId) || T)}】${T1(T.tier)} · ${Fe[T.element]}系`,
                onClick: () => s(e === M ? null : M),
                children:
                  N.get(M) === q &&
                  r(R, {
                    children: [
                      r("span", {
                        class: `cell-el el${T.element}`,
                        children: getBoardFormChar(cl.get(T.equipId) || T),
                      }),
                      r("span", { class: "cell-num", children: M + 1 }),
                    ],
                  }),
              },
              q,
            );
          }),
        ),
      }),
      !m &&
        A.length > 0 &&
        r(R, {
          children: [
            r("div", {
              class: "legend-list",
              children: A.map((_, p) =>
                r(
                  "button",
                  {
                    type: "button",
                    class: `legend-item${e === p ? " on" : ""}`,
                    onClick: () => s(e === p ? null : p),
                    title: `${T1(_.tier)} · 左上角 第${_.row + 1}行 第${_.col + 1}列`,
                    children: [
                      r("i", { class: `swatch q${_.tier}` }),
                      "#",
                      p + 1,
                      " ",
                      _.name,
                      (cl.get(_.equipId) || _).elder?.name && r("span", {
                        class: "elder-name",
                        children: [" (", (cl.get(_.equipId) || _).elder.name, ")"],
                      }),
                      r("b", {
                        class: "legend-form-tag",
                        children: getEquipFormLabel(cl.get(_.equipId) || _),
                      }),
                      r("span", {
                        class: "muted",
                        children: [" ", Fe[_.element]],
                      }),
                    ],
                  },
                  p,
                ),
              ),
            }),
            d === "layout" &&
              !i &&
              a.length > 1 &&
              r("div", {
                class: "replay",
                children: [
                  r("div", {
                    class: "row wrap",
                    children: [
                      r("b", { class: "small", children: "回看历史最优" }),
                      r("button", {
                        type: "button",
                        disabled: n === 0,
                        onClick: () => l(Math.max(0, (n ?? a.length - 1) - 1)),
                        children: "‹ 上一档",
                      }),
                      r("input", {
                        class: "slider",
                        type: "range",
                        min: 0,
                        max: a.length - 1,
                        value: n ?? a.length - 1,
                        onInput: (_) => l(Number(_.target.value)),
                      }),
                      r("button", {
                        type: "button",
                        disabled: (n ?? a.length - 1) >= a.length - 1,
                        onClick: () =>
                          l(Math.min(a.length - 1, (n ?? a.length - 1) + 1)),
                        children: "下一档 ›",
                      }),
                      n !== null &&
                        r("button", {
                          type: "button",
                          class: "ghost",
                          onClick: () => l(null),
                          children: "回到最终解",
                        }),
                    ],
                  }),
                  r("p", {
                    class: "muted small",
                    children: [
                      "第 ",
                      (n ?? a.length - 1) + 1,
                      " / ",
                      a.length,
                      " 档",
                      n !== null && a[n]
                        ? ` · 出现在 ${(a[n].ms / 1e3).toFixed(1)} 秒、第 ${a[n].iterations.toLocaleString("zh-CN")} 次迭代`
                        : " · 当前显示最终解",
                      a.length >= 40 && " · 改进过程已按均匀间隔抽稀",
                    ],
                  }),
                ],
              }),
          ],
        }),
      d === "layout" &&
        t &&
        (() => {
          const _ = Q1(z, t.pieces, We.value),
            p = ie.value,
            g = $0.value,
            w = g ? null : ns.value,
            q = Ae.value,
            k = w ? Q1(z, w, We.value) : null,
            M = k ? (p === "power" ? k.powerTotal : k.weightedTotal) : null,
            T = p === "power" ? _.powerTotal : _.weightedTotal,
            P = (q?.missing ?? 0) === 0,
            F = M !== null ? T - M : 0;
          return r(R, {
            children: [
              !i &&
                r("button", {
                  type: "button",
                  class: "primary pin-btn",
                  title:
                    "把当前显示的摆盘存为收藏，方便多次求解之间比较（回看历史档时存的就是那一档）",
                  onClick: O,
                  children: "收藏此摆盘",
                }),
              r("div", {
                class: "score-area",
                children: [
                  r("div", {
                    class: "scores",
                    children: [
                      r("div", {
                        class: p === "power" ? "score on" : "score",
                        children: [
                          r("span", { class: "label", children: "战力得分" }),
                          r("b", { children: oe(_.powerTotal) }),
                          p === "power" &&
                            r("span", {
                              class: "tag",
                              children: "本次优化目标",
                            }),
                        ],
                      }),
                      r("div", {
                        class: p === "weighted" ? "score on" : "score",
                        children: [
                          r("span", {
                            class: "label",
                            children: "自定义权重得分",
                          }),
                          r("b", { children: oe(_.weightedTotal) }),
                          p === "weighted" &&
                            r("span", {
                              class: "tag",
                              children: "本次优化目标",
                            }),
                        ],
                      }),
                      M !== null &&
                        q &&
                        r("div", {
                          class: "score",
                          children: [
                            r("span", {
                              class: "label",
                              children: "较之前摆盘",
                            }),
                            P
                              ? r("b", {
                                  class: F >= 0 ? "ok" : "warn",
                                  children: [
                                    F >= 0 ? "▲ +" : "▼ −",
                                    rt(Math.abs(F), M),
                                  ],
                                })
                              : r("b", { class: "muted", children: "—" }),
                            r("span", {
                              class: "tag muted",
                              children: P
                                ? `${oe(M)} → ${oe(T)}`
                                : `基准缺 ${q.missing} 件，仅供参考`,
                            }),
                          ],
                        }),
                    ],
                  }),
                  r("div", {
                    class: "pills",
                    children: [
                      r("span", {
                        class: "pill",
                        children: [
                          r("span", { class: "k", children: "占格" }),
                          r("b", { children: [t.filledCells, "/", ue] }),
                        ],
                      }),
                      r("span", {
                        class: "pill",
                        children: [
                          r("span", { class: "k", children: "攻击力" }),
                          r("b", { children: oe(t.atk) }),
                        ],
                      }),
                      r("span", {
                        class: "pill",
                        children: [
                          r("span", { class: "k", children: "防御" }),
                          r("b", { children: oe(t.def) }),
                        ],
                      }),
                      r("span", {
                        class: "pill",
                        children: [
                          r("span", { class: "k", children: "生命值" }),
                          r("b", { children: oe(t.hp) }),
                        ],
                      }),
                    ],
                  }),
                  g &&
                    r("p", {
                      class: "warn small",
                      children: [
                        "之前摆盘与背包配置不符（",
                        g,
                        "），已暂停对照。改回背包配置或重新截图导入即可恢复； 已保存的摆盘不会被删除。",
                      ],
                    }),
                  M !== null &&
                    P &&
                    F <= 0 &&
                    r("p", {
                      class: "muted small",
                      children:
                        "求解未能超过之前摆盘——求解是有时间预算的退火，不保证最优，可调大时间预算或线程数重跑。",
                    }),
                  r("details", {
                    class: "explain",
                    children: [
                      r("summary", {
                        class: "muted small",
                        children: "详细说明",
                      }),
                      r("p", {
                        class: "muted small",
                        children: [
                          "战力得分为「法宝属性战力」= Σ(属性最终值 × nPower)，",
                          r("b", { children: "不含" }),
                          "共鸣档位的 iFightPower，也不含法宝之外的战力来源，与游戏内总战力数字不会相等。",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        })(),
    ],
  });
}
const Dr = window.Dr,
  lt = C(!1);
function Tr() {
  if (!lt.value) return null;
  const t = () => {
    lt.value = !1;
  };
  return r("div", {
    class: "import-backdrop",
    onClick: (e) => e.target === e.currentTarget && t(),
    children: r("div", {
      class: "changelog-dialog panel",
      children: [
        r("h2", {
          children: [
            "更新日志",
            r("button", {
              type: "button",
              class: "ghost right",
              onClick: t,
              children: "关闭",
            }),
          ],
        }),
        Dr.map((e) =>
          r(
            "div",
            {
              children: [
                r("h3", { children: e.date }),
                r("ul", {
                  children: e.items.map((s, a) => r("li", { children: s }, a)),
                }),
              ],
            },
            e.date,
          ),
        ),
      ],
    }),
  });
}
const ce = JSON.parse(
    '{"version":1,"geometry":{"patchSize":18,"shifts":[-0.012,-0.006,0,0.006,0.012],"elementBox":[0.045,0.03,0.225,0.205],"formBox":[0.05,0.29,0.22,0.46],"numberBox":[0.735,0.735,0.985,0.985],"badgeBox":[0.04,0.03,0.22,0.21],"moatBox":[0.27,0.03,0.42,0.21],"bgInset":0.07,"bgSpan":[0.34,0.72],"bgStep":0.02,"darkLevel":95,"scanStep":0.012,"sigBlocks":4,"sigSamples":10},"palette":{"q1":[151,170,149],"q2":[134,171,190],"q3":[187,156,194],"q4":[215,164,116],"q5":[196,109,96],"empty":[168,158,149],"locked":[125,114,93]},"thresholds":{"anchorCandidate":0.27,"strictBadge":0.4,"strictMoat":0.3,"strictGap":0.25,"glyphCorr":0.4,"glyphMargin":0.02,"glyphCombined":0.58,"weakGlyphCorr":0.5,"weakGlyphMoat":0.45,"formCorr":0.45,"formMargin":0.05,"numberDisk":0.7,"numberAccept":0.65,"numberMargin":0.1,"bgMaxDistance":20,"fitFalloff":60,"fitConverged":33,"signatureMaxDistance":10,"signatureMinMargin":4,"signatureRescueMaxDistance":7.1,"signatureBlindMaxDistance":4.5},"templates":{"element":{"金":"AwIEHAB4APAD4Hzg4cf/H/snBAPA/wH/B9gOYBuAbcD/D/8/AQAAAAA=","木":"AwMEHABwAMAB+P/g/4P/D+AHwB+A/wC3B884HOMgDAMwAMAAAQMAAAA=","水":"AwAGHBBwAMABAOcA3MN/B/8P+B+A/QB3B855PMdxHMNwAMABAQMAAAA=","火":"AwYGHABwAMABAAdAnIF3D/4cmAMAHgD4APgH4Hzg48MHHg84HcAMAAA=","土":"DwAcMDDAwQAHARwAcADAAfh/4P8BcADAAQAHABxA/p////7/FwAcAAA=","雷":"AwCE/wH+B8AB+P/h/4PvD/gP4B+AfwD+B/gf4H+A/wH+B/gPAAAAAAA=","邪":"BwAOABAAAP5/+P9BZgObDWwesHng/4O/GXhm8NngZoOZBWIGgRkAIAA=","体":"AxAEYhCcAfh/+P/h/4fHAxwfYP6AfQf+P/h/4F/AYxCHwRgeAxgEAAA="},"form":{"剑":"///////zx48fH348EDEMxHAQAEQEMNH5xGcTk0GMEnHCxJkbf3wM4Ak=","乐":"////P/8/+AfgB/Af4D+M/zj+4/gPwTsA4ACA//g/43+M8TAO8TjG4wk=","异":"/5//P/4B8APgz48/Av4A+APwDwA+APgB8M/xDwAEADAAwM/zn88/Hw8=","御":"///////P/yMOAwAMAPADwwcMDwAcABCcQ3AMQyC84fAG8wPABwCf/ww=","枪":"////f//8+OPjjwc/HhgwQgAcASAcAng44MDIATMHzZw8c/P8z+M9DwA=","刀":"/////////wCAAwAMADgA4A+HPzz+ePjh8cfHHx8/Pnz4+PDj4ceHHw8=","锤":"//////l/wHPAz4MfADAAwDAAwQEMAHAAwAEAAwEeB/AcwPPhz48/BwA=","幡":"///////8wHPAzwE+DzAAwAAAAwAMDDgwwAAAAwAMAXAe4PuA7wO+Dwg="},"number":{"2":"4SDij4E/BO4RmMcADwI+AHgA8EDgD8F/Rv6JAxg7MIw/XHw4AzgAAAA=","3":"8TDjh4k/JuawwMGCBwM8DOIwmEPij4kfZgDMB5g7OMZ/XhA8Bz4AAAA=","4":"wTGDjwk+BPww8MPgDoM/DP8x/EcADgE4ZgCMBxh7OIY/TDg8ARAAAAA=","5":"+DHjh40fNg6Y+GFihwEYBmAY/GHxh4UP0wDmA5x/PoM/TzgeAAAAAAA=","6":"wTCDhwkPBBwQ+EDgD8M7DOcQvEPgj4EfQhBMA5g5OMZ/XDg8AzgAAAA=","8":"8SHij4E/BO4Q+IPgD8J/CO8xvEfgD4EfQgDMAhgzOIY/XAA8BxgAAAA=","10":"Dy88/uDchTMe7vi44+KOizM+zl04f+H4wgEIAhARAAQ/TAAYAAAAAAA=","12":"Byc//vn8hTMXzhw4cOLgiMMBjkM4P+H85/GPAxARMIY/TAAYAxgAAAA=","16":"ByY8nPB4hOMQzk84f+HchTsXzl04/+H4wgFMAhgRMIY/TAAcARAAAAA=","20":"Dz58/PHxR+48vONwjuM5zuM4h3d8/PHjxwcOAwAAAAABRAAQAAAAAAA=","24":"Dzh88PHhR4cfHH9w/OH4z+E/h398wPEDwwcMAhAREAYfTAAYAAAAAAA=","32":"Dz58/PH5B+ccHnl84MHBA44HPU98/vH4x8APAhAQEAAeBAAIAAAAAAA=","40":"Dj58/PH5x+ccn/N0xvM5z+8cv3Nw/MHhAwAEAAARAAIGTAAYAAAAAAA=","56":"Hzh88DDgxMATDz98/sE5D+ccnX98/PHgwwAEAwgwEIA/AAAAAAAAAAA=","64":"Dzg88HHgx4EfD398zNH7T+4/nX98wPEAwwAMAhgQMAA/AAAAAAAAAAA="}}}',
  ),
  fe = ce.geometry,
  qa = (t) => {
    const e = t.data,
      s = t.width;
    return {
      w: s,
      h: t.height,
      px: (a, n) => {
        const l = (n * s + a) * 4;
        return [e[l], e[l + 1], e[l + 2]];
      },
    };
  },
  is = new Float64Array(512),
  os = new Float64Array(512),
  ds = new Float64Array(512),
  N0 = (t, e) => {
    for (let s = 1; s < e; s++) {
      const a = t[s];
      let n = s - 1;
      for (; n >= 0 && t[n] > a;) ((t[n + 1] = t[n]), n--);
      t[n + 1] = a;
    }
    return t[e >> 1];
  },
  M0 = (t, e, s) => e >= 0 && s >= 0 && e < t.w && s < t.h,
  V1 = (t, e) => Math.hypot(t[0] - e[0], t[1] - e[1], t[2] - e[2]);
function it(t, e, s, a, n = fe.bgStep) {
  let l = 0;
  const i = e.ox + a * e.pw,
    o = e.oy + s * e.ph,
    c = e.pw * fe.bgInset,
    u = e.ph * fe.bgInset,
    f = (m, A) => {
      if (((m = Math.round(m)), (A = Math.round(A)), !M0(t, m, A))) return;
      const h = t.px(m, A);
      ((is[l] = h[0]), (os[l] = h[1]), (ds[l] = h[2]), l++);
    },
    [v, d] = fe.bgSpan;
  for (let m = v; m < d; m += n)
    (f(i + e.pw * m, o + u),
      f(i + e.pw * m, o + e.ph - u),
      f(i + c, o + e.ph * m),
      f(i + e.pw - c, o + e.ph * m));
  return l ? [N0(is, l), N0(os, l), N0(ds, l)] : null;
}
function p0(t, e, s, a, n) {
  let l = 0,
    i = 0;
  for (let o = n[1]; o < n[3]; o += fe.scanStep)
    for (let c = n[0]; c < n[2]; c += fe.scanStep) {
      const u = Math.round(e.ox + a * e.pw + c * e.pw),
        f = Math.round(e.oy + s * e.ph + o * e.ph);
      if (!M0(t, u, f)) continue;
      const v = t.px(u, f);
      (l++, (v[0] + v[1] + v[2]) / 3 < fe.darkLevel && i++);
    }
  return l ? i / l : 0;
}
function _a(t) {
  let e = 0;
  for (const n of t) e += n;
  e /= t.length;
  let s = 0;
  for (const n of t) s += (n - e) ** 2;
  s = Math.sqrt(s / t.length) || 1;
  const a = new Float64Array(t.length);
  for (let n = 0; n < t.length; n++) a[n] = (t[n] - e) / s;
  return a;
}
function Ma(t, e, s, a, n, l = 0, i = 0) {
  const o = fe.patchSize,
    c = new Float64Array(o * o);
  for (let u = 0; u < o; u++)
    for (let f = 0; f < o; f++) {
      const v = n[0] + ((f + 0.5) / o) * (n[2] - n[0]) + l,
        d = n[1] + ((u + 0.5) / o) * (n[3] - n[1]) + i,
        m = Math.round(e.ox + a * e.pw + v * e.pw),
        A = Math.round(e.oy + s * e.ph + d * e.ph),
        h = M0(t, m, A) ? t.px(m, A) : [128, 128, 128];
      c[u * o + f] = (h[0] + h[1] + h[2]) / 3;
    }
  return _a(c);
}
const Sa = (t, e) => {
  let s = 0;
  for (let a = 0; a < t.length; a++) s += t[a] * e[a];
  return s / t.length;
};
function M1(t, e, s, a, n, l, i = fe.shifts) {
  let o = -2;
  for (const c of i)
    for (const u of i) {
      const f = Sa(Ma(t, e, s, a, n, c, u), l);
      f > o && (o = f);
    }
  return o;
}
function us(t, e, s, a) {
  const n = fe.sigBlocks,
    l = fe.sigSamples,
    i = [];
  for (let o = 0; o < n; o++)
    for (let c = 0; c < n; c++) {
      let u = 0,
        f = 0,
        v = 0,
        d = 0;
      for (let m = 0; m < l; m++)
        for (let A = 0; A < l; A++) {
          const h = Math.round(
              e.ox + a * e.pw + ((c + (A + 0.5) / l) / n) * e.pw,
            ),
            b = Math.round(e.oy + s * e.ph + ((o + (m + 0.5) / l) / n) * e.ph);
          if (!M0(t, h, b)) continue;
          const I = t.px(h, b);
          ((u += I[0]), (f += I[1]), (v += I[2]), d++);
        }
      i.push(d ? u / d : 0, d ? f / d : 0, d ? v / d : 0);
    }
  return i;
}
const n1 = (t, e) => {
    let s = 0;
    for (let a = 0; a < t.length; a++) s += Math.abs(t[a] - e[a]);
    return s / t.length;
  },
  ot = JSON.parse(
    '[{"equipId":110101,"name":"蕴金戒","sig":[131,117,71,147,160,136,140,155,135,144,160,137,146,161,139,170,155,112,152,151,132,135,142,119,149,161,145,162,164,147,140,142,123,136,141,113,136,149,127,127,129,108,139,139,114,136,126,98]},{"equipId":110103,"name":"重金短矛","sig":[131,116,70,156,173,147,149,169,147,140,153,129,143,154,155,149,168,147,136,143,119,148,153,119,150,169,148,143,154,132,136,145,124,144,161,139,140,151,127,133,135,111,147,163,140,142,155,131]},{"equipId":110107,"name":"曜金寸刀","sig":[128,115,70,153,171,148,149,168,148,144,161,139,146,157,157,148,166,147,151,170,150,141,145,119,145,165,145,147,166,146,151,153,124,166,144,99,145,160,137,157,143,105,143,135,111,125,120,104]},{"equipId":110108,"name":"曜金战身刀","sig":[129,117,73,154,172,150,149,169,147,144,161,138,138,149,151,151,170,149,151,170,149,144,161,138,150,169,148,152,171,150,151,170,149,141,157,136,146,165,142,149,169,146,149,168,145,133,143,120]},{"equipId":110302,"name":"净魂刃","sig":[78,108,109,149,169,149,141,159,140,127,141,130,145,156,155,138,156,140,133,150,139,134,150,132,146,165,145,116,134,127,71,109,141,119,138,136,145,161,138,128,162,159,113,170,180,140,153,131]},{"equipId":110309,"name":"净魂锤","sig":[80,113,115,136,162,149,130,165,156,138,156,136,131,143,144,98,156,152,74,148,156,108,132,123,135,155,136,96,169,171,71,123,146,93,136,156,145,161,138,135,161,144,120,157,145,142,156,132]},{"equipId":110401,"name":"炎脉髓","sig":[123,74,64,138,147,129,133,142,124,145,161,138,144,161,141,105,85,77,82,87,80,142,159,137,142,160,139,71,70,63,85,81,59,136,145,121,152,165,141,115,122,104,108,108,87,143,132,103]},{"equipId":110405,"name":"炽影长刀","sig":[118,74,64,153,170,148,146,165,144,124,119,103,150,160,160,148,168,147,134,148,130,125,125,109,149,169,148,148,167,146,72,75,73,131,144,124,145,161,138,147,163,141,97,77,74,124,134,114]},{"equipId":110501,"name":"玄黄令","sig":[112,91,64,149,165,143,138,151,128,135,148,126,135,149,128,125,132,110,102,86,63,133,146,124,94,97,80,101,84,56,108,108,89,123,127,104,143,157,134,136,150,129,143,155,130,138,128,101]},{"equipId":110701,"name":"邪源珠","sig":[111,52,49,134,146,128,135,151,133,145,162,139,139,156,136,71,61,73,104,55,60,118,124,108,143,161,140,74,71,81,124,52,52,118,116,97,145,162,140,128,141,124,108,114,99,135,125,99]},{"equipId":110705,"name":"欢愉短匕","sig":[117,54,51,149,164,142,148,168,146,145,162,139,142,150,150,138,122,110,147,161,141,145,162,140,130,123,110,113,66,69,150,133,117,145,162,140,135,148,129,96,64,72,134,136,118,144,158,135]},{"equipId":110707,"name":"炼魂小幡","sig":[112,52,49,149,164,143,126,141,125,70,71,68,131,143,143,71,69,69,109,106,101,88,92,88,133,136,119,102,56,59,91,44,54,94,43,44,120,81,70,97,44,50,104,79,72,133,136,114]},{"equipId":110709,"name":"玄阴旗","sig":[112,52,48,147,160,139,149,168,147,145,137,117,131,144,144,117,101,93,123,123,109,119,49,52,139,158,139,72,44,49,89,80,77,91,39,47,102,110,99,97,99,89,87,61,62,103,93,81]},{"equipId":110801,"name":"大力丸","sig":[133,132,123,178,174,150,180,178,155,143,159,137,154,164,145,207,197,171,203,191,164,150,160,142,134,144,133,167,164,156,164,157,143,121,121,104,138,148,127,145,151,135,136,133,118,138,125,97]},{"equipId":120101,"name":"蕴金戒","sig":[128,114,74,134,153,155,127,154,166,129,159,174,131,143,138,171,149,99,150,140,116,130,146,146,146,166,173,151,158,154,135,139,131,125,138,134,128,151,162,127,132,127,136,140,132,134,123,100]},{"equipId":120102,"name":"分金刀","sig":[129,118,81,139,174,190,132,167,184,130,160,174,141,153,155,183,193,185,174,187,183,171,179,172,145,174,187,197,199,189,192,192,182,158,165,159,137,160,176,140,164,181,139,163,180,133,152,163]},{"equipId":120107,"name":"曜金寸刀","sig":[126,114,75,137,172,189,131,168,187,130,160,175,147,160,164,132,169,188,139,172,184,140,149,138,132,167,185,170,185,176,170,169,143,163,142,98,161,176,171,171,154,114,150,136,104,127,121,105]},{"equipId":120108,"name":"曜金战身刀","sig":[123,111,74,138,172,189,131,168,188,131,162,177,150,162,165,130,167,185,133,171,190,130,162,177,126,162,181,134,172,191,133,171,191,129,161,175,130,160,174,136,163,178,135,162,176,128,146,150]},{"equipId":120201,"name":"枯荣种","sig":[97,126,80,127,163,174,123,160,173,130,161,176,117,141,152,114,170,114,145,220,138,123,155,164,111,134,145,89,132,105,118,167,123,120,140,139,131,160,175,117,136,145,118,131,132,134,125,102]},{"equipId":120301,"name":"流水散","sig":[77,110,119,118,161,189,109,157,192,129,160,175,123,159,178,85,178,225,84,159,234,104,145,185,124,163,178,88,140,204,67,122,209,100,127,142,131,160,175,117,152,170,108,134,152,134,125,102]},{"equipId":120304,"name":"霜华千影剑","sig":[77,110,119,133,169,190,112,154,170,131,163,178,141,153,157,127,164,182,111,142,157,130,162,176,118,154,172,119,155,173,111,135,155,127,158,173,124,158,173,82,115,146,79,105,136,113,143,152]},{"equipId":120306,"name":"冰魄凝神甲","sig":[78,112,122,134,172,193,132,169,188,122,150,164,129,142,145,68,136,155,94,149,165,59,121,162,131,168,187,86,156,171,42,96,164,47,110,182,130,160,175,109,153,167,51,137,187,44,134,183]},{"equipId":120307,"name":"急冻瓜锤","sig":[78,113,123,134,171,192,131,168,187,123,154,169,129,142,146,139,179,193,118,154,174,111,144,163,131,168,186,148,189,201,110,149,170,130,162,177,133,165,178,110,148,165,124,154,171,130,156,167]},{"equipId":120309,"name":"净魂锤","sig":[76,109,118,122,160,176,122,164,174,127,158,171,131,145,149,105,149,158,75,140,152,104,138,149,126,163,178,103,166,169,67,129,149,81,145,170,130,160,175,126,161,171,114,158,165,131,157,169]},{"equipId":120402,"name":"燎魂唢呐","sig":[114,71,68,137,170,189,131,168,187,124,140,139,147,159,162,127,160,177,128,164,182,115,116,99,131,167,186,131,155,167,119,144,153,109,127,130,131,161,176,119,126,133,96,105,111,124,147,156]},{"equipId":120407,"name":"拜火金锣","sig":[115,74,70,122,133,146,124,144,160,130,161,177,143,154,157,132,126,126,125,72,72,128,161,176,128,136,150,129,106,102,173,114,71,125,152,166,140,117,95,155,114,64,174,134,79,124,119,107]},{"equipId":120501,"name":"玄黄令","sig":[109,89,67,134,167,184,123,149,160,121,146,158,121,147,160,111,130,135,96,86,72,117,143,155,86,96,100,99,87,65,111,115,112,123,131,128,133,156,167,129,152,165,135,154,161,137,125,102]},{"equipId":120503,"name":"撼地重锤","sig":[112,93,73,104,120,128,92,110,119,112,131,141,117,130,132,70,76,79,60,57,56,68,64,63,121,151,166,86,102,111,54,48,46,84,67,60,128,154,166,122,134,131,112,130,141,101,93,86]},{"equipId":120504,"name":"撼地震魄锤","sig":[111,91,71,133,165,181,129,163,181,124,148,162,123,135,137,118,108,101,118,125,130,107,90,87,127,160,176,88,88,90,84,76,73,115,134,143,128,156,168,100,119,130,67,67,69,123,134,136]},{"equipId":120505,"name":"坤元大钟","sig":[107,86,64,129,158,172,133,162,178,133,167,186,129,140,143,151,169,178,122,151,165,127,162,179,113,135,146,93,106,114,87,94,101,137,164,178,83,88,92,92,97,101,78,83,89,101,119,129]},{"equipId":120507,"name":"崩山短幡","sig":[113,93,72,122,138,144,122,143,153,123,139,147,130,142,144,98,82,67,148,123,98,139,119,98,115,127,136,101,81,70,124,99,80,134,109,88,114,126,118,115,111,111,104,103,101,115,134,142]},{"equipId":120601,"name":"雷灵珠","sig":[129,107,131,126,149,165,123,154,172,127,157,171,144,158,148,158,132,186,165,136,188,140,157,152,128,147,151,105,93,165,120,100,170,129,135,121,128,154,164,117,141,156,115,131,137,133,123,100]},{"equipId":120605,"name":"玄阴古筝","sig":[126,109,134,133,163,184,131,168,187,131,163,179,137,150,155,124,149,168,107,119,158,96,103,153,129,159,176,156,144,146,96,90,145,86,83,167,130,150,161,140,148,159,122,129,143,131,151,161]},{"equipId":120607,"name":"雷元短幡","sig":[124,100,125,135,169,190,131,168,187,130,162,178,123,135,139,116,140,167,117,143,167,129,161,177,136,154,178,110,116,148,128,163,183,130,162,178,125,149,167,108,105,121,131,162,177,130,157,168]},{"equipId":120701,"name":"邪源珠","sig":[117,52,58,130,123,136,119,150,169,131,162,177,120,152,170,69,54,68,111,58,62,107,124,133,123,141,157,72,69,81,122,53,52,112,96,93,133,161,175,119,142,154,105,115,117,135,124,101]},{"equipId":120703,"name":"血灵短矛","sig":[114,51,57,134,165,185,131,168,187,98,103,113,140,153,156,129,166,185,124,159,177,90,89,101,126,161,180,134,172,191,121,153,171,108,126,140,131,161,177,133,166,183,108,131,148,123,147,158]},{"equipId":120704,"name":"血灵钻魂枪","sig":[108,52,57,132,163,182,131,168,187,121,145,159,139,152,156,127,164,182,125,160,177,97,77,87,126,161,180,134,172,191,127,162,180,112,126,142,131,161,176,134,166,182,106,125,141,113,132,142]},{"equipId":120707,"name":"炼魂小幡","sig":[103,49,53,133,165,184,114,144,162,67,72,81,127,141,146,66,73,84,112,118,122,90,104,116,123,142,157,97,58,66,86,45,55,83,34,38,118,83,84,104,44,47,99,71,76,122,129,137]},{"equipId":120709,"name":"玄阴旗","sig":[107,49,54,135,167,187,126,160,179,129,148,161,126,138,141,102,75,83,108,85,94,128,53,54,126,162,180,76,47,55,83,76,87,104,39,44,97,111,122,93,102,112,85,58,65,97,86,90]},{"equipId":120801,"name":"大力丸","sig":[129,130,127,166,168,156,167,172,162,146,168,173,167,178,172,209,198,172,197,184,155,147,162,162,124,144,154,165,162,153,161,154,140,120,125,119,128,147,157,137,151,158,132,131,125,135,123,100]},{"equipId":120802,"name":"灵兽肉","sig":[131,134,132,155,182,192,133,163,178,149,133,119,133,146,151,145,173,180,169,162,146,188,142,103,129,165,183,135,161,172,147,131,110,155,126,101,129,158,171,137,165,177,129,140,138,132,132,124]},{"equipId":120803,"name":"罡体腰带","sig":[128,132,132,133,165,181,122,153,167,125,139,144,127,141,146,155,179,184,130,138,137,128,130,126,130,165,183,169,192,197,127,119,118,136,131,119,132,158,171,135,162,177,123,138,149,131,148,153]},{"equipId":120804,"name":"罡体不破甲","sig":[127,129,127,135,170,189,132,169,188,132,164,181,133,146,149,137,169,182,139,173,188,143,168,174,149,176,184,172,180,177,152,159,153,115,137,147,137,151,152,124,107,111,109,91,95,116,115,109]},{"equipId":120805,"name":"百炼短锤","sig":[128,129,126,135,169,187,117,144,157,132,166,184,127,139,141,119,151,167,102,94,99,130,165,183,131,164,181,119,127,142,109,129,143,117,141,156,120,143,153,126,119,127,120,146,160,110,115,124]},{"equipId":120806,"name":"百炼成金锤","sig":[123,126,124,135,162,177,127,148,158,125,144,153,131,144,148,135,138,138,146,145,140,130,128,124,126,144,155,135,138,138,158,155,146,143,140,134,158,177,182,137,149,153,130,131,131,126,132,133]},{"equipId":120808,"name":"无相渡敌钵","sig":[124,126,125,137,173,192,132,169,188,131,162,178,139,151,155,127,163,180,142,165,177,126,157,170,130,166,186,134,159,161,170,160,122,121,141,144,130,160,176,126,141,147,135,121,97,127,152,163]},{"equipId":130101,"name":"蕴金戒","sig":[136,114,77,173,143,151,170,144,168,182,150,179,173,151,134,177,153,97,150,136,108,170,151,151,173,153,161,161,148,142,154,138,129,167,146,146,169,137,161,146,122,125,157,134,132,143,126,105]},{"equipId":130102,"name":"分金刀","sig":[144,120,84,191,155,190,186,154,193,182,149,181,148,157,160,190,176,185,195,179,183,202,190,180,188,159,188,204,190,183,207,199,178,198,192,168,183,148,171,189,151,176,186,152,170,187,165,159]},{"equipId":130103,"name":"重金短矛","sig":[134,112,77,193,157,192,185,155,193,169,140,162,142,150,155,181,153,190,165,144,137,159,137,130,184,153,190,184,167,165,175,158,153,177,148,178,188,167,168,167,146,143,197,185,161,169,141,157]},{"equipId":130104,"name":"重金破阵矛","sig":[136,113,80,195,158,192,184,154,192,145,119,125,143,151,155,183,153,191,167,139,169,127,107,96,185,153,191,187,157,194,170,145,175,161,138,155,180,147,176,186,157,180,162,137,154,168,140,160]},{"equipId":130105,"name":"玄金重剑","sig":[137,115,80,194,157,195,176,147,183,142,119,114,138,147,151,187,157,195,163,141,154,162,140,150,186,155,193,149,124,137,155,136,103,164,146,147,182,148,179,156,129,130,170,151,114,166,149,140]},{"equipId":130106,"name":"玄金碎甲剑","sig":[138,116,79,177,144,167,127,108,115,164,135,160,138,148,151,136,115,108,132,112,121,152,127,144,195,170,188,173,158,134,151,128,83,131,112,95,178,145,174,126,108,82,130,113,78,161,142,132]},{"equipId":130107,"name":"曜金寸刀","sig":[137,115,79,194,157,194,185,156,191,181,148,180,151,159,163,195,173,192,203,185,188,177,158,149,192,167,189,217,207,181,177,159,137,159,139,97,175,152,153,183,159,116,161,146,110,135,129,112]},{"equipId":130108,"name":"曜金战身刀","sig":[141,118,82,192,156,192,186,156,194,182,149,182,147,155,159,184,154,192,187,157,195,196,171,185,186,154,192,188,157,195,188,157,195,192,171,167,181,148,177,171,138,156,175,138,158,160,136,140]},{"equipId":130109,"name":"蕴金枪","sig":[142,119,82,192,156,191,178,148,182,165,138,144,140,149,152,165,140,167,158,133,144,151,126,141,183,155,186,166,148,168,160,134,134,179,151,180,166,145,160,159,140,141,159,134,134,179,145,171]},{"equipId":130201,"name":"枯荣种","sig":[104,121,78,159,135,155,158,143,163,181,149,180,154,128,151,104,143,109,146,216,144,166,144,168,109,114,128,75,124,105,113,153,113,142,123,128,169,144,170,155,127,147,145,120,127,144,129,108]},{"equipId":130202,"name":"老山参","sig":[107,123,82,179,153,171,181,148,170,181,149,179,150,156,161,125,123,89,137,119,107,174,145,176,155,130,154,161,139,146,151,135,145,178,148,180,151,126,137,171,149,131,183,150,182,177,144,169]},{"equipId":130209,"name":"木灵匕首","sig":[107,126,79,191,158,192,164,142,165,150,128,145,140,149,153,167,142,171,176,150,173,129,115,103,159,149,155,124,183,107,137,159,110,135,124,117,164,142,148,157,148,134,182,147,171,157,135,141]},{"equipId":130301,"name":"流水散","sig":[85,111,121,159,155,191,146,152,196,179,147,178,157,165,186,113,183,212,83,157,232,134,147,169,151,134,166,85,140,197,62,111,202,110,124,146,177,146,173,154,145,167,129,126,143,143,128,106]},{"equipId":130302,"name":"净魂刃","sig":[83,105,116,188,155,194,163,137,163,153,129,146,150,155,161,159,136,168,148,134,159,143,129,148,181,151,188,131,121,150,74,115,141,126,127,159,182,148,178,143,151,172,115,159,171,167,140,160]},{"equipId":130303,"name":"霜华轻剑","sig":[82,106,117,187,154,193,162,140,172,158,139,165,151,157,162,155,131,166,141,138,160,142,127,148,186,154,192,123,105,156,110,109,141,143,130,155,158,142,165,137,115,147,103,100,144,125,128,154]},{"equipId":130309,"name":"净魂锤","sig":[87,106,116,156,145,170,148,156,173,167,145,171,141,148,153,109,141,150,101,148,157,130,141,159,160,153,177,110,160,164,75,124,143,99,150,173,167,149,169,147,154,162,143,149,161,176,144,167]},{"equipId":130401,"name":"炎脉髓","sig":[126,72,72,165,127,146,155,126,152,180,148,179,166,122,136,111,83,82,82,74,73,155,122,140,152,120,120,111,103,78,139,122,77,158,121,106,180,145,174,137,111,124,112,93,97,142,126,106]},{"equipId":130403,"name":"至阳火鉴","sig":[125,72,70,130,102,123,120,95,104,162,115,111,144,150,154,135,90,52,224,148,72,228,123,77,115,94,111,166,95,53,238,159,75,205,123,67,169,137,165,95,57,49,146,113,70,112,75,55]},{"equipId":130405,"name":"炽影长刀","sig":[121,69,68,193,156,194,177,146,182,137,103,113,152,160,163,165,118,140,113,105,107,154,121,140,179,112,129,157,105,122,84,75,86,150,122,139,159,99,110,173,118,126,97,70,75,144,100,95]},{"equipId":130407,"name":"拜火金锣","sig":[123,71,70,167,123,151,170,133,165,181,148,179,151,158,162,163,116,127,140,67,72,162,129,137,169,125,152,154,99,106,180,111,72,166,132,155,160,113,99,155,113,64,177,137,82,148,113,109]},{"equipId":130408,"name":"拜火焚星笙","sig":[126,73,71,192,154,191,185,153,191,182,149,182,152,159,162,180,151,188,187,155,194,179,149,183,174,143,171,180,148,181,188,155,195,181,150,184,139,113,120,148,119,139,184,150,182,179,145,172]},{"equipId":130409,"name":"燎魂刀","sig":[126,73,72,192,153,190,185,153,191,182,149,182,152,158,163,171,136,147,162,128,141,181,133,107,141,110,113,164,97,62,124,78,63,137,84,62,181,147,175,176,137,144,172,135,110,170,129,125]},{"equipId":130501,"name":"玄黄令","sig":[116,87,69,188,152,186,169,139,165,166,134,161,168,137,166,148,122,139,117,92,79,159,131,158,113,90,103,110,86,65,132,110,114,156,133,135,179,146,171,175,146,162,177,146,166,148,130,111]},{"equipId":130502,"name":"破岩锤","sig":[115,87,68,100,85,90,119,96,104,146,116,130,129,136,139,113,97,89,103,79,73,125,100,112,166,139,168,90,89,90,74,72,75,169,142,170,179,147,166,149,128,133,147,127,132,184,148,173]},{"equipId":130503,"name":"撼地重锤","sig":[114,86,68,140,115,135,124,106,127,144,119,142,134,140,144,74,69,75,62,59,58,68,64,62,165,139,168,107,90,107,52,43,42,76,62,56,178,145,173,153,127,133,141,114,134,108,85,81]},{"equipId":130504,"name":"撼地震魄锤","sig":[118,89,69,187,151,185,181,150,187,168,137,164,131,137,140,118,100,97,140,113,128,118,87,88,176,147,179,92,82,86,81,72,68,148,123,146,177,144,171,139,116,138,69,69,70,147,126,139]},{"equipId":130506,"name":"坤元生息铠","sig":[121,91,72,187,151,184,168,140,172,169,139,170,135,142,146,119,109,110,91,84,87,77,65,63,142,119,138,101,86,79,75,70,70,93,76,71,140,114,127,108,89,90,83,72,75,83,77,77]},{"equipId":130507,"name":"崩山短幡","sig":[114,86,66,154,128,141,154,118,120,178,145,178,135,143,146,91,73,60,145,120,96,132,96,79,148,118,133,110,85,73,131,106,88,142,106,83,153,120,115,144,117,124,143,120,120,145,109,118]},{"equipId":130508,"name":"崩山裂魂幡","sig":[116,88,69,187,151,185,185,153,191,186,152,188,127,136,138,171,145,178,181,151,188,155,129,155,133,116,132,137,116,137,159,134,164,133,111,131,151,123,141,124,105,110,140,114,131,168,134,153]},{"equipId":130601,"name":"雷灵珠","sig":[136,103,130,171,140,168,170,142,177,176,144,174,179,152,159,155,131,180,161,134,188,178,151,159,184,158,188,121,109,168,108,92,157,152,130,122,180,146,175,171,145,174,156,130,150,144,128,108]},{"equipId":130608,"name":"雷元乌龙旗","sig":[130,98,124,181,147,177,175,146,177,188,158,189,129,138,142,121,106,98,123,109,117,170,153,165,187,162,189,102,89,87,114,100,108,106,91,124,170,142,165,140,120,122,174,141,175,93,82,96]},{"equipId":130701,"name":"邪源珠","sig":[121,50,57,166,94,109,165,131,162,181,148,179,166,126,155,111,52,60,108,54,58,137,112,133,171,104,121,78,60,71,121,51,51,132,92,92,178,141,168,156,127,151,135,110,122,142,127,106]},{"equipId":130702,"name":"玄阴枪","sig":[124,50,57,186,149,185,164,131,162,133,98,114,141,149,154,178,150,187,143,117,146,165,135,164,179,149,186,176,140,173,107,94,118,180,150,182,177,133,158,129,71,82,96,78,99,177,132,154]},{"equipId":130703,"name":"血灵短矛","sig":[121,50,58,190,151,189,185,154,192,120,93,111,141,148,154,182,153,191,176,147,184,108,83,101,177,148,184,188,156,196,174,144,181,124,103,125,183,148,179,189,141,171,146,107,133,168,137,160]},{"equipId":130706,"name":"欢愉蚀骨刃","sig":[119,49,55,189,151,188,184,153,191,179,147,178,155,160,166,181,152,190,182,149,186,133,86,108,176,148,184,185,153,192,119,77,100,152,91,108,183,147,178,139,84,105,105,65,83,179,143,168]},{"equipId":130709,"name":"玄阴旗","sig":[113,48,54,184,147,182,170,140,173,172,132,159,141,146,151,112,64,75,127,80,96,129,50,48,160,126,156,85,50,60,105,73,90,104,39,43,120,100,119,100,80,97,91,55,64,112,79,89]},{"equipId":130801,"name":"大力丸","sig":[137,128,127,174,154,140,184,169,159,180,158,171,190,178,173,204,191,159,191,175,142,183,168,168,154,137,154,164,160,150,160,152,136,131,119,116,167,139,159,165,141,155,141,129,125,145,128,106]},{"equipId":130802,"name":"灵兽肉","sig":[135,126,126,208,190,199,182,157,173,177,125,99,141,148,153,190,178,181,181,155,128,185,138,100,181,150,186,169,151,163,149,134,114,155,130,103,180,146,175,187,156,182,150,133,136,141,133,124]},{"equipId":130803,"name":"罡体腰带","sig":[139,130,133,191,175,186,166,144,172,149,134,145,139,140,147,187,177,185,140,132,134,131,126,125,173,149,178,193,173,196,122,107,103,132,127,116,175,148,173,180,151,180,156,131,147,136,121,124]},{"equipId":130805,"name":"百炼短锤","sig":[138,128,129,184,150,185,145,129,149,181,149,181,133,141,146,169,140,174,112,90,89,170,142,173,185,153,191,148,114,139,148,121,148,142,115,138,157,131,151,145,119,121,174,140,173,138,109,125]},{"equipId":130806,"name":"百炼成金锤","sig":[138,129,129,174,150,174,155,142,157,147,133,144,129,139,143,143,142,141,141,140,136,128,127,123,155,134,158,133,135,135,154,151,143,140,138,132,189,173,176,138,136,135,136,136,137,131,137,139]},{"equipId":130807,"name":"无相念珠","sig":[140,132,131,196,166,191,187,163,187,143,116,118,135,143,148,155,155,152,127,115,123,153,131,139,165,145,163,132,137,137,128,124,130,140,128,124,161,133,148,142,127,107,158,128,154,142,131,134]},{"equipId":140101,"name":"蕴金戒","sig":[140,115,68,179,149,105,181,140,99,205,164,120,178,158,116,171,146,85,162,148,111,196,180,146,194,173,139,164,145,118,215,210,173,182,155,116,201,161,115,161,131,94,177,149,114,153,134,107]},{"equipId":140102,"name":"分金刀","sig":[143,116,69,217,162,113,213,160,114,211,171,129,150,156,156,207,190,162,205,193,166,202,190,163,211,168,124,213,193,165,202,192,169,200,195,170,211,164,114,218,168,119,209,161,116,196,164,126]},{"equipId":140103,"name":"重金短矛","sig":[144,118,70,218,164,115,212,160,114,190,146,103,143,149,147,208,158,113,180,149,104,176,144,100,216,166,117,199,173,136,176,152,116,206,163,119,193,165,123,178,154,118,197,181,137,186,145,102]},{"equipId":140104,"name":"重金破阵矛","sig":[139,114,66,221,166,117,211,159,113,161,125,89,139,147,147,211,161,116,187,143,103,134,109,80,214,165,116,216,169,124,195,154,117,176,141,108,212,164,114,210,177,136,188,152,116,188,148,109]},{"equipId":140106,"name":"玄金碎甲剑","sig":[140,116,67,190,152,109,141,111,82,187,142,102,143,152,151,145,121,84,147,116,84,174,133,95,215,192,152,191,176,136,156,131,77,133,111,78,208,161,112,125,107,75,134,117,81,174,151,114]},{"equipId":140107,"name":"曜金寸刀","sig":[142,117,70,214,169,123,212,162,116,207,156,111,150,157,156,212,184,144,219,189,146,189,162,121,217,178,133,220,207,167,183,161,121,177,158,116,189,159,117,157,136,96,142,129,100,155,148,126]},{"equipId":140108,"name":"曜金战身刀","sig":[137,112,66,220,165,116,213,161,114,205,155,110,153,160,158,207,161,118,214,162,115,215,175,131,222,196,152,231,203,158,218,168,121,200,177,136,212,172,124,213,190,151,205,167,130,170,141,105]},{"equipId":140109,"name":"蕴金枪","sig":[147,121,70,218,164,115,202,154,109,177,144,102,137,144,143,167,136,101,176,137,97,172,132,91,216,168,120,181,151,120,171,135,97,205,159,115,185,153,116,162,137,99,162,128,88,203,155,109]},{"equipId":140201,"name":"枯荣种","sig":[106,121,65,156,127,95,132,122,82,182,145,100,143,122,94,90,128,103,127,181,124,180,148,103,116,118,97,48,101,99,103,134,103,145,132,89,196,158,113,179,140,100,162,128,92,152,133,106]},{"equipId":140202,"name":"老山参","sig":[105,119,64,202,160,109,202,152,106,206,156,110,148,153,151,127,121,76,148,120,79,199,152,108,180,140,99,172,143,99,163,137,93,191,149,104,173,139,96,179,153,107,211,163,114,201,155,109]},{"equipId":140203,"name":"木灵短剑","sig":[110,124,67,152,132,84,144,130,87,206,155,110,143,151,150,150,122,91,142,121,82,182,142,100,163,128,94,112,93,71,144,120,84,115,108,74,200,158,108,109,99,68,123,116,72,117,115,71]},{"equipId":140204,"name":"木灵大宝剑","sig":[109,122,66,218,165,115,180,145,102,180,147,101,147,152,149,188,147,106,135,122,87,182,143,101,145,118,84,149,126,94,129,108,79,166,134,97,143,118,84,163,153,110,146,140,98,157,129,94]},{"equipId":140205,"name":"噬元喷菇","sig":[106,118,63,162,144,98,132,142,85,153,165,96,145,152,151,109,127,72,107,167,80,98,162,76,159,141,94,101,111,65,94,106,59,85,122,61,152,115,79,130,73,46,143,80,50,85,61,41]},{"equipId":140206,"name":"千瘴断魂琴","sig":[109,123,66,200,157,111,189,147,106,198,150,107,150,156,154,166,139,103,155,127,91,143,121,86,183,144,103,187,159,116,127,135,102,120,100,72,169,134,93,159,134,98,149,139,106,88,73,56]},{"equipId":140207,"name":"千瘴短笛","sig":[110,123,67,213,162,113,157,131,93,203,154,110,150,156,155,148,140,94,98,109,66,167,143,98,188,154,105,122,133,82,188,146,103,191,149,106,189,149,101,124,131,79,124,116,77,183,142,101]},{"equipId":140208,"name":"噬元大丽花","sig":[108,121,65,185,146,101,208,157,112,185,140,100,145,152,150,155,119,87,157,127,107,94,82,70,195,150,107,93,77,77,87,77,92,107,85,115,158,124,89,82,74,81,106,93,155,179,131,210]},{"equipId":140209,"name":"木灵匕首","sig":[108,121,65,217,165,116,186,148,103,160,129,88,149,154,152,191,147,107,195,152,110,140,120,86,175,154,110,121,178,105,135,154,98,146,124,87,179,149,104,163,148,102,197,151,107,170,141,96]},{"equipId":140301,"name":"流水散","sig":[90,111,111,180,176,159,167,164,153,198,153,112,156,173,167,120,179,204,96,152,216,151,153,144,157,152,134,91,140,191,65,109,199,120,126,128,200,164,121,176,158,128,145,133,114,149,133,106]},{"equipId":140302,"name":"净魂刃","sig":[88,108,107,195,158,122,195,148,107,160,125,102,151,155,153,150,163,156,146,129,112,157,131,104,198,160,120,129,121,109,73,115,140,138,130,127,211,163,113,159,160,143,110,149,154,184,147,108]},{"equipId":140303,"name":"霜华轻剑","sig":[88,109,107,216,164,119,183,144,106,181,145,106,147,152,150,181,139,106,153,140,120,155,134,108,210,161,114,125,109,137,121,121,130,156,129,101,178,150,114,149,123,108,109,105,136,137,134,135]},{"equipId":140304,"name":"霜华千影剑","sig":[90,109,107,196,167,135,147,161,149,180,153,121,152,156,152,157,171,159,132,120,115,192,148,108,184,153,116,131,142,131,156,128,111,201,153,108,184,152,112,86,123,150,92,123,140,158,142,113]},{"equipId":140305,"name":"冰魄护肩","sig":[92,109,108,206,161,119,209,162,118,183,147,111,145,150,148,122,132,127,132,145,136,102,133,143,164,172,161,124,144,145,94,140,158,126,174,180,190,155,114,104,128,141,69,143,193,113,153,162]},{"equipId":140306,"name":"冰魄凝神甲","sig":[97,111,108,206,165,125,198,158,120,187,150,112,142,147,146,119,145,147,139,170,177,81,115,144,189,159,125,130,184,195,61,101,153,67,111,166,205,166,122,159,152,127,76,135,179,83,155,183]},{"equipId":140308,"name":"急冻流星锤","sig":[89,109,107,163,145,116,189,153,115,137,134,121,140,145,142,121,155,146,97,170,184,72,109,149,220,167,116,165,156,126,113,155,162,70,102,139,217,167,115,177,150,112,123,138,133,89,106,117]},{"equipId":140309,"name":"净魂锤","sig":[88,108,106,175,150,119,159,158,137,191,150,111,141,146,143,100,142,138,92,148,158,125,141,136,156,161,146,103,166,169,68,123,139,81,153,171,189,160,124,155,163,143,150,154,131,198,152,107]},{"equipId":140401,"name":"炎脉髓","sig":[127,70,57,178,127,92,176,131,95,205,154,109,184,127,89,118,84,72,111,84,67,173,129,91,186,138,88,126,111,80,145,121,74,160,118,78,203,153,103,145,114,76,118,95,66,153,135,108]},{"equipId":140402,"name":"燎魂唢呐","sig":[129,72,59,204,145,103,214,161,114,176,137,94,148,154,154,164,96,66,201,151,104,144,116,77,202,146,102,168,107,76,171,130,85,158,124,86,208,148,91,184,130,89,115,80,61,189,146,103]},{"equipId":140403,"name":"至阳火鉴","sig":[128,72,58,145,106,77,132,97,70,173,118,77,146,152,150,133,89,53,224,149,72,228,122,77,126,93,64,157,89,50,238,166,73,212,135,66,178,136,89,97,58,44,146,113,68,110,73,50]},{"equipId":140404,"name":"至阳风火轮","sig":[128,72,58,220,163,115,214,160,114,206,155,110,147,153,153,179,114,85,157,102,73,174,94,71,192,145,102,174,126,74,132,97,68,200,133,77,183,130,80,159,120,74,154,121,83,143,99,64]},{"equipId":140405,"name":"炽影长刀","sig":[124,70,57,210,154,109,207,155,110,146,103,77,154,158,157,178,121,91,128,112,80,167,120,90,195,120,88,176,111,81,90,75,66,166,124,89,181,116,83,190,124,85,102,73,68,152,103,74]},{"equipId":140406,"name":"炽影破锋刃","sig":[120,66,54,195,136,95,173,117,75,199,151,107,152,159,159,140,75,52,187,112,55,174,125,80,180,111,75,126,67,54,145,99,57,165,112,54,177,125,83,122,66,58,138,94,51,157,122,84]},{"equipId":140407,"name":"拜火金锣","sig":[130,71,56,179,123,84,195,140,99,204,154,109,149,156,154,180,119,74,147,70,49,181,134,90,184,121,82,172,114,72,190,115,62,186,139,98,177,121,74,161,118,64,175,135,80,162,121,79]},{"equipId":140409,"name":"燎魂刀","sig":[129,73,59,219,162,115,191,140,91,192,143,101,154,159,158,182,135,91,166,121,79,183,133,78,151,111,73,164,97,61,125,79,64,138,85,59,212,164,114,195,147,98,179,134,79,163,114,71]},{"equipId":140501,"name":"玄黄令","sig":[123,91,62,212,163,119,191,153,117,188,141,100,187,150,114,165,135,105,122,99,75,182,145,111,132,99,70,115,88,58,147,122,98,171,140,107,200,157,113,194,158,121,198,156,112,154,134,107]},{"equipId":140502,"name":"破岩锤","sig":[122,91,61,105,84,67,145,109,85,160,119,88,131,137,135,113,96,85,106,80,68,108,81,65,192,150,108,90,88,89,76,73,73,185,156,126,203,162,116,155,133,109,152,133,112,190,151,113]},{"equipId":140503,"name":"撼地重锤","sig":[118,87,58,160,124,93,146,116,91,166,127,94,135,141,138,81,74,67,62,58,57,71,66,65,193,148,105,126,101,78,56,46,41,79,64,58,208,162,113,176,143,102,170,137,104,123,100,81]},{"equipId":140504,"name":"撼地震魄锤","sig":[121,89,60,213,159,112,117,94,75,189,143,104,138,142,138,119,100,87,109,85,70,122,87,69,203,159,115,116,101,88,81,73,69,165,128,94,171,134,97,141,116,92,71,71,71,155,137,117]},{"equipId":140505,"name":"坤元大钟","sig":[121,90,62,194,155,120,197,162,132,207,164,127,136,143,143,188,177,166,188,166,147,198,161,129,170,148,124,113,105,99,90,90,91,197,160,127,97,84,74,90,94,97,77,82,88,150,120,92]},{"equipId":140506,"name":"坤元生息铠","sig":[122,91,60,211,158,111,180,141,105,194,147,106,139,144,140,125,110,93,92,84,82,73,63,59,152,121,91,94,80,75,76,71,71,93,77,71,156,123,90,101,87,75,94,85,74,84,77,77]},{"equipId":140507,"name":"崩山短幡","sig":[120,89,60,167,132,96,165,121,92,202,151,107,133,139,136,93,74,62,145,122,101,129,92,71,160,123,94,115,88,71,135,110,92,139,101,78,161,125,89,164,132,98,155,129,104,169,126,90]},{"equipId":140508,"name":"崩山裂魂幡","sig":[122,91,62,211,159,112,214,161,114,212,159,112,130,136,134,196,151,111,206,155,110,170,129,96,127,107,91,150,118,92,181,139,103,139,108,85,169,132,96,131,108,91,139,110,84,171,131,95]},{"equipId":140509,"name":"破岩护臂","sig":[120,88,58,213,160,112,210,157,111,213,160,113,137,143,141,166,131,100,137,102,77,192,146,105,125,97,72,118,94,76,120,83,67,155,119,87,144,115,86,106,98,89,115,92,74,163,127,93]},{"equipId":140601,"name":"雷灵珠","sig":[136,100,115,189,148,133,192,164,159,193,147,110,199,168,146,131,111,164,160,134,192,190,152,116,206,168,146,120,108,167,115,99,157,164,132,90,211,162,118,191,153,140,171,134,114,151,131,106]},{"equipId":140602,"name":"雷灵幡","sig":[137,101,115,206,155,113,191,147,103,196,148,105,131,138,137,150,124,113,153,126,90,160,126,87,171,137,108,134,115,126,143,123,97,191,147,103,190,149,106,165,134,116,155,131,121,185,151,140]},{"equipId":140603,"name":"鸣雷长枪","sig":[141,104,118,218,162,117,213,160,115,201,154,128,142,149,149,194,158,156,201,164,166,181,156,168,206,157,126,202,161,159,187,144,128,127,104,99,208,161,123,202,174,184,164,129,118,112,93,101]},{"equipId":140604,"name":"鸣雷诛邪枪","sig":[142,104,115,218,163,118,209,157,113,151,125,111,138,147,148,194,149,121,170,132,106,136,118,115,212,162,129,214,173,157,152,124,126,167,133,125,206,169,154,211,173,152,127,108,119,196,151,107]},{"equipId":140606,"name":"玄阴霹雳鼓","sig":[131,95,107,213,162,134,194,148,110,207,156,110,148,154,153,171,149,143,151,130,108,185,159,109,151,112,130,118,96,140,121,109,129,105,93,117,167,145,134,117,94,134,161,135,113,115,106,140]},{"equipId":140607,"name":"雷元短幡","sig":[131,97,112,218,163,117,186,141,112,203,153,108,128,137,138,174,135,118,167,127,117,194,147,105,203,159,133,167,127,112,197,149,113,208,157,111,188,149,132,142,111,111,196,153,113,203,155,109]},{"equipId":140608,"name":"雷元乌龙旗","sig":[139,103,117,202,153,114,201,158,125,205,161,138,125,134,135,118,104,96,129,112,115,172,147,133,203,167,140,108,94,90,116,101,101,107,92,126,193,155,123,150,128,114,197,167,167,155,139,144]},{"equipId":140609,"name":"鸣雷鼓","sig":[145,108,122,153,125,113,187,165,136,177,158,139,152,156,154,142,126,115,212,198,182,216,201,185,196,152,130,172,148,145,143,128,137,131,118,144,198,154,117,187,149,119,155,125,127,165,138,134]},{"equipId":140701,"name":"邪源珠","sig":[119,48,42,181,99,85,186,125,95,206,154,109,177,106,82,113,53,61,108,54,57,158,118,88,187,110,82,83,59,68,124,52,52,141,94,72,209,159,112,193,123,92,158,108,84,154,137,110]},{"equipId":140702,"name":"玄阴枪","sig":[128,52,45,216,159,113,183,132,97,138,93,72,148,151,148,208,158,114,156,116,89,169,114,89,213,163,115,195,137,99,101,74,68,191,131,98,183,113,87,89,46,50,89,71,70,185,130,95]},{"equipId":140703,"name":"血灵短矛","sig":[122,49,43,215,158,112,209,153,112,131,91,73,146,152,150,203,151,112,172,110,96,99,67,64,215,164,115,221,167,117,185,130,99,132,95,82,217,167,115,205,124,95,147,82,78,191,147,105]},{"equipId":140704,"name":"血灵钻魂枪","sig":[127,53,45,214,157,111,214,160,113,181,133,97,155,157,152,205,156,113,192,136,104,122,71,63,211,162,115,211,152,113,168,115,93,136,94,79,199,145,106,191,120,102,142,91,83,169,121,94]},{"equipId":140705,"name":"欢愉短匕","sig":[125,52,44,213,155,112,215,142,122,209,146,117,159,159,155,166,95,87,205,124,117,204,146,113,180,112,89,124,54,65,196,109,97,206,156,111,186,138,98,110,46,56,181,99,94,202,138,110]},{"equipId":140709,"name":"玄阴旗","sig":[117,48,41,198,136,97,184,132,93,158,82,59,132,137,136,119,66,60,129,68,58,128,46,43,193,139,98,88,51,50,115,76,64,103,38,43,141,110,83,116,89,71,100,59,56,130,88,68]},{"equipId":140801,"name":"大力丸","sig":[141,129,116,181,154,117,192,171,141,196,167,134,197,181,155,207,195,166,195,181,147,191,167,135,174,153,127,165,162,150,161,152,133,137,120,97,196,159,116,182,151,120,147,130,113,151,133,106]},{"equipId":140803,"name":"罡体腰带","sig":[149,133,118,209,174,140,192,152,113,167,139,111,140,141,137,202,172,138,141,132,120,132,126,116,218,167,117,153,125,108,134,112,97,137,131,118,212,165,115,218,177,134,179,152,126,145,120,101]},{"equipId":140804,"name":"罡体不破甲","sig":[141,128,115,218,164,116,214,162,115,207,156,110,143,148,145,211,170,127,218,182,140,212,189,156,208,179,142,184,174,158,180,173,156,151,148,136,159,146,126,136,114,119,127,113,112,138,133,118]},{"equipId":140805,"name":"百炼短锤","sig":[141,127,113,216,162,116,151,130,106,200,152,109,140,146,144,201,154,111,114,83,72,181,140,102,221,168,117,170,123,99,163,123,92,160,119,89,177,143,106,135,113,94,201,152,108,151,113,86]},{"equipId":140806,"name":"百炼成金锤","sig":[142,129,115,185,151,121,166,145,126,151,133,117,134,142,142,145,143,140,145,143,140,130,129,126,163,136,110,135,137,137,148,145,138,147,145,136,204,179,142,141,140,129,136,136,135,141,146,143]},{"equipId":140807,"name":"无相念珠","sig":[143,132,118,222,185,143,205,178,149,156,121,88,139,147,146,154,148,140,128,114,102,171,138,98,184,160,129,129,133,132,135,127,119,142,127,103,187,148,103,146,128,93,182,151,118,183,177,160]},{"equipId":140809,"name":"九宫牌","sig":[143,131,119,203,169,138,157,123,101,160,131,102,140,147,146,126,94,85,132,113,101,159,138,111,186,161,135,152,119,100,157,122,94,156,130,109,212,191,161,165,151,134,134,125,118,181,141,103]},{"equipId":150105,"name":"残虹断影","sig":[143,109,66,201,107,92,188,122,102,188,103,89,135,140,141,190,130,116,156,114,85,185,104,93,198,118,98,210,170,151,178,142,118,182,118,103,201,136,113,158,118,83,168,147,93,167,124,95]},{"equipId":150107,"name":"朔气飞星","sig":[146,112,66,180,101,81,171,98,84,161,100,77,145,154,156,168,121,86,160,107,83,174,116,93,203,116,98,176,136,111,194,119,104,176,156,119,203,136,111,187,166,137,195,134,111,167,149,106]},{"equipId":150108,"name":"金锋无影","sig":[139,107,68,197,113,95,195,163,148,167,119,104,148,149,147,142,106,86,170,167,153,177,120,109,201,159,132,129,110,89,196,127,110,190,107,93,195,131,107,188,129,104,200,112,93,192,107,89]},{"equipId":150109,"name":"金翎荡云","sig":[134,103,60,202,107,93,181,105,92,158,98,80,142,147,148,193,129,112,144,110,83,155,95,81,194,113,96,151,127,109,113,79,65,96,63,53,132,96,76,182,133,110,141,137,124,151,105,87]},{"equipId":150110,"name":"亢金贯甲","sig":[143,111,66,204,137,117,157,111,86,185,103,89,138,145,146,185,149,131,140,106,81,169,102,87,172,126,105,162,120,94,141,117,84,173,109,97,169,111,92,144,119,79,164,142,91,152,117,95]},{"equipId":150203,"name":"蕴剑葫芦","sig":[109,113,63,181,109,86,191,106,94,192,115,95,144,147,148,136,96,77,126,95,70,137,94,76,198,114,96,123,83,65,116,125,70,98,94,61,113,93,64,113,136,75,136,153,86,141,158,80]},{"equipId":150205,"name":"掌天奇韵","sig":[103,111,60,201,109,94,193,106,95,194,120,96,146,150,151,189,106,96,203,164,111,201,157,108,197,114,96,200,113,98,193,111,95,179,100,87,202,155,108,192,118,93,189,137,140,127,116,77]},{"equipId":150209,"name":"唤生吴钩","sig":[105,113,62,172,109,86,150,142,94,175,119,91,142,148,150,153,153,101,187,123,101,171,106,91,198,114,97,153,126,92,173,178,112,129,117,84,194,138,102,145,164,98,122,117,77,131,140,109]},{"equipId":150210,"name":"引仙破道","sig":[107,115,64,192,106,90,174,100,88,170,102,79,148,153,154,148,124,99,160,116,88,132,102,68,126,123,101,125,121,86,142,105,66,181,109,92,194,117,92,103,126,71,144,112,89,162,108,87]},{"equipId":150304,"name":"月华清影","sig":[89,100,104,195,113,103,183,122,114,174,137,132,144,147,148,194,200,202,188,221,229,181,215,223,192,139,129,174,218,228,178,191,196,169,130,125,181,161,154,155,215,231,176,123,113,162,116,108]},{"equipId":150309,"name":"断流绝响","sig":[84,99,103,187,121,115,172,105,100,159,100,94,148,156,158,167,133,139,107,115,155,147,110,118,170,161,165,151,150,166,93,105,142,135,114,125,144,142,145,109,125,159,98,98,130,141,96,90]},{"equipId":150310,"name":"逆流河珠","sig":[83,99,103,181,111,103,164,96,88,122,121,131,140,142,143,114,119,123,116,146,161,85,104,118,144,126,125,93,132,166,67,106,153,102,121,122,96,101,102,123,162,173,89,119,141,121,105,100]},{"equipId":150403,"name":"燧火传薪","sig":[123,62,54,201,104,91,197,126,117,196,143,133,150,150,150,190,102,81,189,122,110,185,129,120,199,114,97,181,102,67,185,143,119,167,135,107,177,106,81,149,105,57,159,111,66,196,167,102]},{"equipId":150409,"name":"炎驹驰天","sig":[123,64,55,185,99,77,186,98,80,187,102,89,148,149,150,123,76,52,158,92,67,192,110,79,109,66,51,206,137,68,154,97,56,198,114,73,119,67,52,238,152,77,216,132,71,185,116,76]},{"equipId":150410,"name":"赤霄斩浪","sig":[121,61,53,201,105,92,177,97,88,159,90,76,156,159,160,160,90,77,154,85,78,148,84,73,158,81,62,140,79,66,111,72,65,165,97,84,168,95,75,125,81,72,90,76,71,118,80,71]},{"equipId":150503,"name":"灵獐啸岩","sig":[120,83,57,192,128,108,168,138,120,167,136,111,129,133,133,156,150,136,85,80,71,118,103,72,191,150,120,157,146,130,109,86,69,93,75,50,186,138,109,210,190,159,176,121,96,80,64,52]},{"equipId":150504,"name":"十方大山","sig":[125,83,59,136,105,88,121,91,78,112,73,68,142,134,132,84,78,77,70,65,58,76,71,67,201,160,131,149,127,108,77,61,46,90,70,56,186,126,99,192,171,143,120,105,79,121,87,70]},{"equipId":150507,"name":"逐日镇岳","sig":[121,81,56,178,95,82,152,90,81,192,119,100,137,137,137,131,93,77,112,83,66,145,106,84,149,101,81,104,86,67,114,92,73,172,111,89,181,117,92,162,144,108,153,130,98,184,104,85]},{"equipId":150509,"name":"萱花裂地","sig":[123,85,59,115,90,75,92,81,71,91,95,83,130,132,132,127,102,92,51,68,64,72,92,84,194,116,98,194,113,98,88,76,68,70,80,72,192,132,105,210,164,133,128,94,78,71,75,65]},{"equipId":150510,"name":"石钟灵佑","sig":[124,86,60,192,115,97,190,125,108,186,111,97,132,135,135,154,106,97,139,110,100,149,121,110,178,130,113,134,124,107,131,123,105,151,117,103,126,98,84,88,83,73,88,84,74,143,109,92]},{"equipId":150607,"name":"九霄镇魔","sig":[136,92,112,181,90,102,154,91,94,183,96,94,131,136,138,131,91,98,100,81,91,139,100,107,199,121,116,150,97,87,99,87,88,119,100,107,195,114,98,134,87,91,155,105,115,139,85,89]},{"equipId":150608,"name":"五雷号令","sig":[134,93,110,196,102,94,182,93,95,178,92,89,132,137,138,119,91,113,198,105,119,175,97,95,136,85,86,160,107,112,131,105,101,93,82,102,111,85,61,110,92,94,80,83,103,109,142,178]},{"equipId":150609,"name":"神谕裁罪","sig":[129,86,105,198,104,94,192,106,96,191,103,90,145,149,150,185,106,97,167,98,102,151,111,128,199,116,98,200,137,143,141,118,142,136,106,95,194,116,99,195,140,145,151,116,134,147,126,147]},{"equipId":150610,"name":"妙音止戈","sig":[138,91,109,190,136,146,185,126,133,164,99,89,144,139,139,106,89,123,90,73,102,114,100,109,175,104,89,144,108,100,78,68,81,84,76,107,154,95,79,122,89,64,153,102,75,116,89,57]},{"equipId":150704,"name":"凶神戮世","sig":[121,42,40,184,79,76,193,74,76,189,77,79,152,149,149,184,76,75,160,81,72,172,86,78,177,77,72,170,84,77,118,65,54,152,76,69,189,110,89,136,72,64,112,54,53,124,67,61]},{"equipId":150706,"name":"合欢极乐","sig":[120,42,41,198,102,90,181,102,92,182,101,87,158,155,155,202,115,117,200,113,110,185,105,93,193,111,100,208,112,109,219,119,122,188,107,95,197,112,96,208,115,101,226,119,113,191,108,94]},{"equipId":150709,"name":"恶鬼喋血","sig":[114,40,38,195,101,88,183,100,91,127,73,66,156,149,148,185,104,94,155,83,76,120,66,61,192,112,96,196,109,94,149,69,64,166,90,78,200,117,94,184,103,83,128,69,65,164,86,71]},{"equipId":150710,"name":"花妖魅匕","sig":[114,37,36,161,80,78,187,102,94,190,104,90,147,151,152,132,77,76,143,81,74,197,113,105,199,114,97,172,104,88,103,66,58,193,105,94,198,113,93,154,96,79,109,70,61,163,96,77]},{"equipId":150803,"name":"天骄伟冠","sig":[143,123,114,200,106,94,193,112,98,155,91,84,137,144,145,213,195,186,188,144,126,117,99,102,213,156,136,218,199,185,156,129,125,146,145,143,211,154,132,177,135,119,159,158,155,157,153,142]},{"equipId":150804,"name":"真武神镯","sig":[138,119,111,199,131,115,184,141,128,175,125,106,139,143,143,157,123,108,150,124,106,107,92,77,184,128,111,131,116,98,155,143,128,130,123,106,187,124,103,162,110,91,132,95,76,137,119,103]},{"equipId":150805,"name":"丑将破阵","sig":[138,120,112,209,157,143,159,128,123,161,142,140,131,138,139,183,153,145,152,152,152,163,164,161,209,160,143,178,151,144,139,137,137,144,144,144,192,128,108,209,150,131,145,128,111,147,141,129]},{"equipId":150806,"name":"巨灵擎天","sig":[139,119,112,198,107,94,182,111,97,179,102,89,135,138,138,178,107,96,157,152,143,160,116,105,201,135,114,190,114,98,133,122,98,151,108,93,204,149,124,187,111,91,129,121,113,187,115,94]},{"equipId":150809,"name":"叱咤玉革","sig":[145,120,112,145,108,95,105,79,67,119,90,75,134,130,130,173,145,134,127,120,104,101,95,78,192,111,94,157,109,101,160,148,134,153,147,128,194,117,96,175,109,91,118,77,70,115,88,75]},{"equipId":150810,"name":"叱咤玉锤","sig":[136,117,109,199,110,97,137,109,100,177,105,92,141,144,146,178,118,104,140,108,84,184,132,116,200,137,120,172,129,116,142,100,93,188,106,93,169,111,84,155,118,88,175,137,117,147,84,72]},{"equipId":250104,"name":"如意金箍棒","sig":[139,108,67,196,136,107,163,105,87,179,104,88,144,146,143,166,129,96,140,115,74,134,100,70,148,151,149,196,161,122,137,106,68,151,110,77,191,133,106,212,174,133,151,122,76,136,94,63]},{"equipId":250204,"name":"太昊司春","sig":[106,113,62,194,126,100,179,103,90,132,85,67,144,147,148,170,104,93,132,93,77,154,94,78,186,147,107,127,106,82,137,103,87,184,104,91,140,107,79,130,135,76,113,80,59,156,89,73]},{"equipId":250304,"name":"弱水涓扇","sig":[88,101,104,189,111,101,187,149,143,182,106,92,140,143,143,158,127,122,197,218,220,174,138,130,184,178,174,192,185,181,181,184,184,163,147,142,171,190,190,185,136,123,167,199,209,165,148,143]},{"equipId":250403,"name":"食为天鼎","sig":[123,62,54,201,105,92,191,123,114,195,143,134,152,154,155,191,103,82,190,123,112,188,132,123,198,115,98,181,101,67,182,141,117,167,134,107,175,105,80,150,106,59,160,114,69,195,165,101]},{"equipId":250404,"name":"乾坤浑天","sig":[124,62,53,195,102,79,186,101,85,189,103,89,144,149,150,207,118,69,190,103,84,185,103,85,174,98,80,195,101,68,226,128,72,188,105,88,172,100,73,207,108,72,239,162,78,188,108,81]},{"equipId":250503,"name":"九州定海","sig":[118,83,58,198,134,111,189,108,94,189,103,91,141,144,142,177,127,103,140,99,80,171,107,90,173,121,99,182,120,98,155,97,81,164,114,92,177,119,95,178,114,89,136,102,76,184,130,102]},{"equipId":250504,"name":"庚辰龙脉","sig":[117,83,59,186,130,106,195,137,116,189,120,101,142,144,141,174,138,111,202,162,130,186,116,99,118,94,77,178,123,105,202,159,130,193,132,109,131,92,76,122,89,73,165,122,102,193,116,96]}]',
  ),
  dt = ce.thresholds,
  Fa = "wydl-bag:v1:import-decisions",
  Ba = () => {
    try {
      const t = localStorage.getItem(Fa);
      if (!t) return [];
      const e = JSON.parse(t);
      return Array.isArray(e)
        ? e.filter(
            (s) =>
              s &&
              Number.isInteger(s.equipId) &&
              Array.isArray(s.sig) &&
              s.sig.length === 48,
          )
        : [];
    } catch {
      return [];
    }
  },
  $r = (t, e) => {
    try {
      const s = Ba().filter((a) => n1(a.sig, t) >= dt.signatureMaxDistance);
      (s.push({ equipId: e, sig: t.map((a) => Math.round(a)) }),
        localStorage.setItem(Fa, JSON.stringify(s)));
    } catch {}
  },
  cs = (t, e, s) => {
    const a = (c) => {
        const u = s.filter((f) => f.equipId === c);
        return u.length ? Math.min(...u.map((f) => n1(f.sig, t))) : null;
      },
      n = a(e[0].id),
      l = a(e[1].id),
      i = [
        { eq: e[0], d: n },
        { eq: e[1], d: l },
      ].filter((c) => c.d !== null);
    if (!i.length) return null;
    i.sort((c, u) => c.d - u.d);
    const o = i[0];
    return o.d > dt.signatureMaxDistance ||
      (i.length === 2 && i[1].d - o.d < dt.signatureMinMargin)
      ? null
      : o.eq;
  };
function Er(t, e) {
  const s = cs(t, e, ot);
  if (s) return { equip: s, source: "builtin" };
  const a = cs(t, e, Ba());
  return a ? { equip: a, source: "stored" } : null;
}
const xa = `(function(){"use strict";const y=JSON.parse('{"version":1,"geometry":{"patchSize":18,"shifts":[-0.012,-0.006,0,0.006,0.012],"elementBox":[0.045,0.03,0.225,0.205],"formBox":[0.05,0.29,0.22,0.46],"numberBox":[0.735,0.735,0.985,0.985],"badgeBox":[0.04,0.03,0.22,0.21],"moatBox":[0.27,0.03,0.42,0.21],"bgInset":0.07,"bgSpan":[0.34,0.72],"bgStep":0.02,"darkLevel":95,"scanStep":0.012,"sigBlocks":4,"sigSamples":10},"palette":{"q1":[151,170,149],"q2":[134,171,190],"q3":[187,156,194],"q4":[215,164,116],"q5":[196,109,96],"empty":[168,158,149],"locked":[125,114,93]},"thresholds":{"anchorCandidate":0.27,"strictBadge":0.4,"strictMoat":0.3,"strictGap":0.25,"glyphCorr":0.4,"glyphMargin":0.02,"glyphCombined":0.58,"weakGlyphCorr":0.5,"weakGlyphMoat":0.45,"formCorr":0.45,"formMargin":0.05,"numberDisk":0.7,"numberAccept":0.65,"numberMargin":0.1,"bgMaxDistance":20,"fitFalloff":60,"fitConverged":33,"signatureMaxDistance":10,"signatureMinMargin":4,"signatureRescueMaxDistance":7.1,"signatureBlindMaxDistance":4.5},"templates":{"element":{"金":"AwIEHAB4APAD4Hzg4cf/H/snBAPA/wH/B9gOYBuAbcD/D/8/AQAAAAA=","木":"AwMEHABwAMAB+P/g/4P/D+AHwB+A/wC3B884HOMgDAMwAMAAAQMAAAA=","水":"AwAGHBBwAMABAOcA3MN/B/8P+B+A/QB3B855PMdxHMNwAMABAQMAAAA=","火":"AwYGHABwAMABAAdAnIF3D/4cmAMAHgD4APgH4Hzg48MHHg84HcAMAAA=","土":"DwAcMDDAwQAHARwAcADAAfh/4P8BcADAAQAHABxA/p////7/FwAcAAA=","雷":"AwCE/wH+B8AB+P/h/4PvD/gP4B+AfwD+B/gf4H+A/wH+B/gPAAAAAAA=","邪":"BwAOABAAAP5/+P9BZgObDWwesHng/4O/GXhm8NngZoOZBWIGgRkAIAA=","体":"AxAEYhCcAfh/+P/h/4fHAxwfYP6AfQf+P/h/4F/AYxCHwRgeAxgEAAA="},"form":{"剑":"///////zx48fH348EDEMxHAQAEQEMNH5xGcTk0GMEnHCxJkbf3wM4Ak=","乐":"////P/8/+AfgB/Af4D+M/zj+4/gPwTsA4ACA//g/43+M8TAO8TjG4wk=","异":"/5//P/4B8APgz48/Av4A+APwDwA+APgB8M/xDwAEADAAwM/zn88/Hw8=","御":"///////P/yMOAwAMAPADwwcMDwAcABCcQ3AMQyC84fAG8wPABwCf/ww=","枪":"////f//8+OPjjwc/HhgwQgAcASAcAng44MDIATMHzZw8c/P8z+M9DwA=","刀":"/////////wCAAwAMADgA4A+HPzz+ePjh8cfHHx8/Pnz4+PDj4ceHHw8=","锤":"//////l/wHPAz4MfADAAwDAAwQEMAHAAwAEAAwEeB/AcwPPhz48/BwA=","幡":"///////8wHPAzwE+DzAAwAAAAwAMDDgwwAAAAwAMAXAe4PuA7wO+Dwg="},"number":{"2":"4SDij4E/BO4RmMcADwI+AHgA8EDgD8F/Rv6JAxg7MIw/XHw4AzgAAAA=","3":"8TDjh4k/JuawwMGCBwM8DOIwmEPij4kfZgDMB5g7OMZ/XhA8Bz4AAAA=","4":"wTGDjwk+BPww8MPgDoM/DP8x/EcADgE4ZgCMBxh7OIY/TDg8ARAAAAA=","5":"+DHjh40fNg6Y+GFihwEYBmAY/GHxh4UP0wDmA5x/PoM/TzgeAAAAAAA=","6":"wTCDhwkPBBwQ+EDgD8M7DOcQvEPgj4EfQhBMA5g5OMZ/XDg8AzgAAAA=","8":"8SHij4E/BO4Q+IPgD8J/CO8xvEfgD4EfQgDMAhgzOIY/XAA8BxgAAAA=","10":"Dy88/uDchTMe7vi44+KOizM+zl04f+H4wgEIAhARAAQ/TAAYAAAAAAA=","12":"Byc//vn8hTMXzhw4cOLgiMMBjkM4P+H85/GPAxARMIY/TAAYAxgAAAA=","16":"ByY8nPB4hOMQzk84f+HchTsXzl04/+H4wgFMAhgRMIY/TAAcARAAAAA=","20":"Dz58/PHxR+48vONwjuM5zuM4h3d8/PHjxwcOAwAAAAABRAAQAAAAAAA=","24":"Dzh88PHhR4cfHH9w/OH4z+E/h398wPEDwwcMAhAREAYfTAAYAAAAAAA=","32":"Dz58/PH5B+ccHnl84MHBA44HPU98/vH4x8APAhAQEAAeBAAIAAAAAAA=","40":"Dj58/PH5x+ccn/N0xvM5z+8cv3Nw/MHhAwAEAAARAAIGTAAYAAAAAAA=","56":"Hzh88DDgxMATDz98/sE5D+ccnX98/PHgwwAEAwgwEIA/AAAAAAAAAAA=","64":"Dzg88HHgx4EfD398zNH7T+4/nX98wPEAwwAMAhgQMAA/AAAAAAAAAAA="}}}'),g=y.geometry,Y=new Float64Array(512),N=new Float64Array(512),L=new Float64Array(512),I=(t,A)=>{for(let n=1;n<A;n++){const c=t[n];let e=n-1;for(;e>=0&&t[e]>c;)t[e+1]=t[e],e--;t[e+1]=c}return t[A>>1]},R=(t,A,n)=>A>=0&&n>=0&&A<t.w&&n<t.h,U=(t,A)=>Math.hypot(t[0]-A[0],t[1]-A[1],t[2]-A[2]);function W(t,A,n,c,e=g.bgStep){let r=0;const h=A.ox+c*A.pw,f=A.oy+n*A.ph,a=A.pw*g.bgInset,u=A.ph*g.bgInset,p=(s,B)=>{if(s=Math.round(s),B=Math.round(B),!R(t,s,B))return;const o=t.px(s,B);Y[r]=o[0],N[r]=o[1],L[r]=o[2],r++},[M,i]=g.bgSpan;for(let s=M;s<i;s+=e)p(h+A.pw*s,f+u),p(h+A.pw*s,f+A.ph-u),p(h+a,f+A.ph*s),p(h+A.pw-a,f+A.ph*s);return r?[I(Y,r),I(N,r),I(L,r)]:null}function $(t,A,n,c,e){let r=0,h=0;for(let f=e[1];f<e[3];f+=g.scanStep)for(let a=e[0];a<e[2];a+=g.scanStep){const u=Math.round(A.ox+c*A.pw+a*A.pw),p=Math.round(A.oy+n*A.ph+f*A.ph);if(!R(t,u,p))continue;const M=t.px(u,p);r++,(M[0]+M[1]+M[2])/3<g.darkLevel&&h++}return r?h/r:0}function X(t){let A=0;for(const e of t)A+=e;A/=t.length;let n=0;for(const e of t)n+=(e-A)**2;n=Math.sqrt(n/t.length)||1;const c=new Float64Array(t.length);for(let e=0;e<t.length;e++)c[e]=(t[e]-A)/n;return c}function K(t,A,n,c,e,r=0,h=0){const f=g.patchSize,a=new Float64Array(f*f);for(let u=0;u<f;u++)for(let p=0;p<f;p++){const M=e[0]+(p+.5)/f*(e[2]-e[0])+r,i=e[1]+(u+.5)/f*(e[3]-e[1])+h,s=Math.round(A.ox+c*A.pw+M*A.pw),B=Math.round(A.oy+n*A.ph+i*A.ph),o=R(t,s,B)?t.px(s,B):[128,128,128];a[u*f+p]=(o[0]+o[1]+o[2])/3}return X(a)}const V=(t,A)=>{let n=0;for(let c=0;c<t.length;c++)n+=t[c]*A[c];return n/t.length};function Z(t,A,n,c,e,r,h=g.shifts){let f=-2;for(const a of h)for(const u of h){const p=V(K(t,A,n,c,e,a,u),r);p>f&&(f=p)}return f}const q=y.geometry;function AA(t){const A=atob(t),n=q.patchSize*q.patchSize,c=new Float64Array(n);for(let e=0;e<n;e++)c[e]=A.charCodeAt(e>>3)>>(e&7)&1?1:-1;return X(c)}const m=t=>new Map(Object.entries(t).map(([A,n])=>[A,AA(n)])),G=m(y.templates.element);m(y.templates.form),m(y.templates.number);const H=y.thresholds,b=y.geometry,tA=Object.values(y.palette),P=6,E=7,_=(t,A,n=!1)=>{const c=[...G.keys()],e=A.pw*.12;let r=0,h=0;for(let f=0;f<P;f++)for(let a=0;a<E;a++){const u=A.ox+a*A.pw,p=A.oy+f*A.ph;if(u<-e||p<-e||u+A.pw>t.w+e||p+A.ph>t.h+e||$(t,A,f,a,b.badgeBox)<=H.anchorCandidate)continue;if(n&&++h>10)return r;let M=-2,i=-2;for(const s of c){const B=n?Z(t,A,f,a,b.elementBox,G.get(s),[0]):Z(t,A,f,a,b.elementBox,G.get(s));B>M?(i=M,M=B):B>i&&(i=B)}(n?M>=.35:M>=H.glyphCorr&&M-i>=H.glyphMargin&&M+2*(M-i)>=H.glyphCombined)&&r++}return r},oA=t=>{let A=Number.POSITIVE_INFINITY;for(const n of tA){const c=U(t,n);c<A&&(A=c)}return A},z=(t,A,n)=>{let c=0;for(let e=0;e<P;e++)for(let r=0;r<E;r++){const h=W(t,A,e,r,n);if(!h)return-1e9;c+=Math.max(0,1-oA(h)/H.fitFalloff)}return c},eA=(t,A)=>{if(A<=1)return t;const n=Math.floor(t.w/A),c=Math.floor(t.h/A),e=new Float64Array(n*c*3);for(let r=0;r<c;r++)for(let h=0;h<n;h++){let f=0,a=0,u=0;for(let i=0;i<A;i++)for(let s=0;s<A;s++){const B=t.px(h*A+s,r*A+i);f+=B[0],a+=B[1],u+=B[2]}const p=A*A,M=(r*n+h)*3;e[M]=f/p,e[M+1]=a/p,e[M+2]=u/p}return{w:n,h:c,px:(r,h)=>[e[(h*n+r)*3],e[(h*n+r)*3+1],e[(h*n+r)*3+2]]}},Q=t=>({ox:0,oy:0,pw:t.w/E,ph:t.h/P}),j=6;function nA(t){const A=t.w/7.6,n=Math.max(1,Math.round(A/36)),c=eA(t,n),e=A/n,r=[];for(let o=e*.82;o<=e*1.2;o+=1)if(!(E*o>c.w+4||P*o>c.h+4))for(let w=-3;w<=c.w-E*o+3;w+=3)for(let l=-3;l<=c.h-P*o+3;l+=3)r.push({s:z(c,{ox:w,oy:l,pw:o,ph:o},.06),ox:w,oy:l,p:o});if(!r.length)return{grid:Q(t),score:0,anchors:0,converged:!1};const h=new Map;for(const o of r){const w=Math.round(o.p),l=h.get(w);(!l||o.s>l.s)&&h.set(w,o)}const f=[...h.values()].sort((o,w)=>w.s-o.s).slice(0,10),a=(o,w,l,D=!1)=>{let x={s:-1e9,...o};x.s=z(t,{ox:x.ox,oy:x.oy,pw:x.p,ph:x.p},l);for(const v of w){const T={...x};for(let O=D?0:-3;O<=(D?0:3);O++)for(let d=-3;d<=3;d++)for(let k=-3;k<=3;k++){if(O===0&&d===0&&k===0)continue;const C=T.p+O*v;if(C<30)continue;const F={ox:T.ox+d*v,oy:T.oy+k*v,pw:C,ph:C},J=z(t,F,l);J>x.s&&(x={s:J,ox:F.ox,oy:F.oy,p:C})}}return x},p=f.map(o=>a({ox:o.ox*n,oy:o.oy*n,p:o.p*n},[n*2,n],.06,!0)).map(o=>({...o,s:z(t,{ox:o.ox,oy:o.oy,pw:o.p,ph:o.p}),quick:_(t,{ox:o.ox,oy:o.oy,pw:o.p,ph:o.p},!0)})).sort((o,w)=>w.quick-o.quick||w.s-o.s).slice(0,4).map(o=>a(o,[1,.25])),M=o=>({...o,anchors:_(t,{ox:o.ox,oy:o.oy,pw:o.p,ph:o.p})}),i=(o,w)=>!w||o.anchors>w.anchors||o.anchors===w.anchors&&o.s>w.s;let s=null;for(const o of p){const w=M(o);i(w,s)&&(s=w)}if(!s||s.anchors<j&&s.s<H.fitConverged){const o=new Map;for(let l=A*.82;l<=A*1.2;l+=2.5)if(!(E*l>t.w+8||P*l>t.h+8))for(let D=-5;D<=t.w-E*l+5;D+=10)for(let x=-5;x<=t.h-P*l+5;x+=10){const v=z(t,{ox:D,oy:x,pw:l,ph:l},.06),T=Math.round(l/5),O=o.get(T);(!O||v>O.s)&&o.set(T,{s:v,ox:D,oy:x,p:l})}const w=[...o.values()].sort((l,D)=>D.s-l.s).slice(0,3);for(const l of w){const D=M(a(l,[1.5,.5,.25]));i(D,s)&&(s=D)}}if(!s)return{grid:Q(t),score:0,anchors:0,converged:!1};for(let o=0;o<2;o++){const w=s;let l=!1;for(const D of[{...w,oy:w.oy-w.p},{...w,oy:w.oy+w.p},{...w,ox:w.ox-w.p},{...w,ox:w.ox+w.p}]){const x=M({...D,s:z(t,{ox:D.ox,oy:D.oy,pw:D.p,ph:D.p})});x.anchors>s.anchors&&(s=x,l=!0)}if(!l)break}return s.s<28&&s.anchors<j?{grid:Q(t),score:s.s,anchors:s.anchors,converged:!1}:{grid:{ox:s.ox,oy:s.oy,pw:s.p,ph:s.p},score:s.s,anchors:s.anchors,converged:s.s>=H.fitConverged||s.anchors>=j}}const S=t=>{self.postMessage(t)};self.onmessage=t=>{const A=t.data;if(A.type==="fit")try{const{w:n,h:c,pixels:e}=A,r=nA({w:n,h:c,px:(h,f)=>{const a=(f*n+h)*4;return[e[a],e[a+1],e[a+2]]}});S({type:"done",fit:r})}catch{S({type:"error"})}},S({type:"ready"})})();
`,
  ps =
    typeof self < "u" &&
    self.Blob &&
    new Blob([xa], { type: "text/javascript;charset=utf-8" });
function Nr(t) {
  let e;
  try {
    if (((e = ps && (self.URL || self.webkitURL).createObjectURL(ps)), !e))
      throw "";
    const s = new Worker(e, { name: t?.name });
    return (
      s.addEventListener("error", () => {
        (self.URL || self.webkitURL).revokeObjectURL(e);
      }),
      s
    );
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(xa),
      { name: t?.name },
    );
  } finally {
    e && (self.URL || self.webkitURL).revokeObjectURL(e);
  }
}
const hs = ce.geometry;
function Hr(t) {
  const e = atob(t),
    s = hs.patchSize * hs.patchSize,
    a = new Float64Array(s);
  for (let n = 0; n < s; n++)
    a[n] = (e.charCodeAt(n >> 3) >> (n & 7)) & 1 ? 1 : -1;
  return _a(a);
}
const Ct = (t) => new Map(Object.entries(t).map(([e, s]) => [e, Hr(s)])),
  i1 = Ct(ce.templates.element),
  ms = Ct(ce.templates.form),
  Or = Ct(ce.templates.number);
function fs(t) {
  t.sort((s, a) => a.score - s.score);
  const e = t[0];
  return {
    key: e.key,
    score: e.score,
    margin: t.length > 1 ? e.score - t[1].score : Number.POSITIVE_INFINITY,
  };
}
const je = ce.thresholds,
  H0 = ce.geometry,
  Rr = Object.values(ce.palette),
  ze = 6,
  Ue = 7,
  vs = (t, e, s = !1) => {
    const a = [...i1.keys()],
      n = e.pw * 0.12;
    let l = 0,
      i = 0;
    for (let o = 0; o < ze; o++)
      for (let c = 0; c < Ue; c++) {
        const u = e.ox + c * e.pw,
          f = e.oy + o * e.ph;
        if (
          u < -n ||
          f < -n ||
          u + e.pw > t.w + n ||
          f + e.ph > t.h + n ||
          p0(t, e, o, c, H0.badgeBox) <= je.anchorCandidate
        )
          continue;
        if (s && ++i > 10) return l;
        let v = -2,
          d = -2;
        for (const m of a) {
          const A = s
            ? M1(t, e, o, c, H0.elementBox, i1.get(m), [0])
            : M1(t, e, o, c, H0.elementBox, i1.get(m));
          A > v ? ((d = v), (v = A)) : A > d && (d = A);
        }
        (s
          ? v >= 0.35
          : v >= je.glyphCorr &&
            v - d >= je.glyphMargin &&
            v + 2 * (v - d) >= je.glyphCombined) && l++;
      }
    return l;
  },
  Lr = (t) => {
    let e = Number.POSITIVE_INFINITY;
    for (const s of Rr) {
      const a = V1(t, s);
      a < e && (e = a);
    }
    return e;
  },
  e1 = (t, e, s) => {
    let a = 0;
    for (let n = 0; n < ze; n++)
      for (let l = 0; l < Ue; l++) {
        const i = it(t, e, n, l, s);
        if (!i) return -1e9;
        a += Math.max(0, 1 - Lr(i) / je.fitFalloff);
      }
    return a;
  },
  jr = (t, e) => {
    if (e <= 1) return t;
    const s = Math.floor(t.w / e),
      a = Math.floor(t.h / e),
      n = new Float64Array(s * a * 3);
    for (let l = 0; l < a; l++)
      for (let i = 0; i < s; i++) {
        let o = 0,
          c = 0,
          u = 0;
        for (let d = 0; d < e; d++)
          for (let m = 0; m < e; m++) {
            const A = t.px(i * e + m, l * e + d);
            ((o += A[0]), (c += A[1]), (u += A[2]));
          }
        const f = e * e,
          v = (l * s + i) * 3;
        ((n[v] = o / f), (n[v + 1] = c / f), (n[v + 2] = u / f));
      }
    return {
      w: s,
      h: a,
      px: (l, i) => [
        n[(i * s + l) * 3],
        n[(i * s + l) * 3 + 1],
        n[(i * s + l) * 3 + 2],
      ],
    };
  },
  J1 = (t) => ({ ox: 0, oy: 0, pw: t.w / Ue, ph: t.h / ze }),
  O0 = 6;
function zr(t) {
  const e = t.w / 7.6,
    s = Math.max(1, Math.round(e / 36)),
    a = jr(t, s),
    n = e / s,
    l = [];
  for (let h = n * 0.82; h <= n * 1.2; h += 1)
    if (!(Ue * h > a.w + 4 || ze * h > a.h + 4))
      for (let b = -3; b <= a.w - Ue * h + 3; b += 3)
        for (let I = -3; I <= a.h - ze * h + 3; I += 3)
          l.push({
            s: e1(a, { ox: b, oy: I, pw: h, ph: h }, 0.06),
            ox: b,
            oy: I,
            p: h,
          });
  if (!l.length) return { grid: J1(t), score: 0, anchors: 0, converged: !1 };
  const i = new Map();
  for (const h of l) {
    const b = Math.round(h.p),
      I = i.get(b);
    (!I || h.s > I.s) && i.set(b, h);
  }
  const o = [...i.values()].sort((h, b) => b.s - h.s).slice(0, 10),
    c = (h, b, I, y = !1) => {
      let S = { s: -1e9, ...h };
      S.s = e1(t, { ox: S.ox, oy: S.oy, pw: S.p, ph: S.p }, I);
      for (const O of b) {
        const E = { ...S };
        for (let N = y ? 0 : -3; N <= (y ? 0 : 3); N++)
          for (let D = -3; D <= 3; D++)
            for (let _ = -3; _ <= 3; _++) {
              if (N === 0 && D === 0 && _ === 0) continue;
              const p = E.p + N * O;
              if (p < 30) continue;
              const g = { ox: E.ox + D * O, oy: E.oy + _ * O, pw: p, ph: p },
                w = e1(t, g, I);
              w > S.s && (S = { s: w, ox: g.ox, oy: g.oy, p });
            }
      }
      return S;
    },
    f = o
      .map((h) =>
        c({ ox: h.ox * s, oy: h.oy * s, p: h.p * s }, [s * 2, s], 0.06, !0),
      )
      .map((h) => ({
        ...h,
        s: e1(t, { ox: h.ox, oy: h.oy, pw: h.p, ph: h.p }),
        quick: vs(t, { ox: h.ox, oy: h.oy, pw: h.p, ph: h.p }, !0),
      }))
      .sort((h, b) => b.quick - h.quick || b.s - h.s)
      .slice(0, 4)
      .map((h) => c(h, [1, 0.25])),
    v = (h) => ({
      ...h,
      anchors: vs(t, { ox: h.ox, oy: h.oy, pw: h.p, ph: h.p }),
    }),
    d = (h, b) =>
      !b || h.anchors > b.anchors || (h.anchors === b.anchors && h.s > b.s);
  let m = null;
  for (const h of f) {
    const b = v(h);
    d(b, m) && (m = b);
  }
  if (!m || (m.anchors < O0 && m.s < je.fitConverged)) {
    const h = new Map();
    for (let I = e * 0.82; I <= e * 1.2; I += 2.5)
      if (!(Ue * I > t.w + 8 || ze * I > t.h + 8))
        for (let y = -5; y <= t.w - Ue * I + 5; y += 10)
          for (let S = -5; S <= t.h - ze * I + 5; S += 10) {
            const O = e1(t, { ox: y, oy: S, pw: I, ph: I }, 0.06),
              E = Math.round(I / 5),
              N = h.get(E);
            (!N || O > N.s) && h.set(E, { s: O, ox: y, oy: S, p: I });
          }
    const b = [...h.values()].sort((I, y) => y.s - I.s).slice(0, 3);
    for (const I of b) {
      const y = v(c(I, [1.5, 0.5, 0.25]));
      d(y, m) && (m = y);
    }
  }
  if (!m) return { grid: J1(t), score: 0, anchors: 0, converged: !1 };
  for (let h = 0; h < 2; h++) {
    const b = m;
    let I = !1;
    for (const y of [
      { ...b, oy: b.oy - b.p },
      { ...b, oy: b.oy + b.p },
      { ...b, ox: b.ox - b.p },
      { ...b, ox: b.ox + b.p },
    ]) {
      const S = v({ ...y, s: e1(t, { ox: y.ox, oy: y.oy, pw: y.p, ph: y.p }) });
      S.anchors > m.anchors && ((m = S), (I = !0));
    }
    if (!I) break;
  }
  return m.s < 28 && m.anchors < O0
    ? { grid: J1(t), score: m.s, anchors: m.anchors, converged: !1 }
    : {
        grid: { ox: m.ox, oy: m.oy, pw: m.p, ph: m.p },
        score: m.s,
        anchors: m.anchors,
        converged: m.s >= je.fitConverged || m.anchors >= O0,
      };
}
const Ur = 1500,
  Gr = (t) => {
    let e = !1,
      s = null;
    const a = () => {
      if (s) {
        try {
          s.terminate();
        } catch {}
        s = null;
      }
    };
    return {
      promise: new Promise((l) => {
        const i = () => {
          (a(), !e && l(zr(qa(t))));
        };
        if (typeof Worker > "u") {
          i();
          return;
        }
        try {
          s = new Nr();
        } catch {
          i();
          return;
        }
        const o = setTimeout(i, Ur);
        ((s.onmessage = (c) => {
          const u = c.data;
          if (u.type === "ready") {
            (clearTimeout(o),
              s?.postMessage({
                type: "fit",
                w: t.width,
                h: t.height,
                pixels: t.data,
              }));
            return;
          }
          if (u.type === "done") {
            (a(), e || l(u.fit));
            return;
          }
          (clearTimeout(o), i());
        }),
          (s.onerror = () => {
            (clearTimeout(o), i());
          }));
      }),
      cancel: () => {
        ((e = !0), a());
      },
    };
  },
  Le = ce.geometry,
  Y = ce.thresholds,
  R0 = ce.palette,
  o1 = 6,
  $1 = 7,
  Yr = 0.18,
  L0 = new Map(Object.entries(Fe).map(([t, e]) => [e, Number(t)])),
  Wr = new Map(Object.entries(yt).map(([t, e]) => [e, Number(t)])),
  S0 = z.equips.filter((t) => !(t.tier === 5 && t.quality === 1)),
  Ca = new Map(z.shapes.map((t) => [t.id, t])),
  Qr = new Map(S0.map((t) => [t.id, t.element])),
  ut = new Map();
for (const t of S0) {
  const e = `${t.element}|${t.weaponForm}`,
    s = ut.get(e) ?? [];
  (s.push(t), ut.set(e, s));
}
const S1 = (t) => `${t.element}|${t.quality}|${t.weaponForm}|${t.reson}`,
  Is = new Map();
for (const t of S0) Is.set(S1(t), (Is.get(S1(t)) ?? 0) + 1);
const ct = new Map();
for (const t of S0) {
  if (t.weaponForm === 0) continue;
  const e = ct.get(t.element) ?? [],
    s = yt[t.weaponForm];
  (e.includes(s) || e.push(s), ct.set(t.element, e));
}
function Kr(t, e, s) {
  const a = Ca.get(t);
  if (!a) return null;
  const n = a.cells,
    l = Math.min(...n.map((f) => f[0])),
    i = Math.min(...n.filter((f) => f[0] === l).map((f) => f[1])),
    o = e - l,
    c = s - i,
    u = [];
  for (const [f, v] of n) {
    const d = o + f,
      m = c + v;
    if (d < 0 || m < 0 || d >= o1 || m >= $1) return null;
    u.push(X(d, m));
  }
  return u.sort((f, v) => f - v);
}
function Xr(t, e, s) {
  const a = Ca.get(t);
  if (!a) return null;
  const n = a.cells,
    l = Math.min(...n.map((m) => m[0])),
    i = Math.min(...n.filter((m) => m[0] === l).map((m) => m[1])),
    o = e - l,
    c = s - i,
    u = Math.max(...n.map((m) => m[0])),
    f = Math.max(...n.filter((m) => m[0] === u).map((m) => m[1])),
    v = o + u,
    d = c + f;
  return v < 0 || d < 0 || v >= o1 || d >= $1 ? null : { row: v, col: d };
}
function screenshotRedLimitFeasible(domains) {
  if (domains.length > 4) return false;
  const pending = domains.map(ids => [...new Set(ids)]).sort((a, b) => a.length - b.length);
  if (pending.some(ids => !ids.length)) return false;
  const counts = new Map();
  function assign(index) {
    if (index === pending.length) return true;
    for (const id of pending[index]) {
      const count = counts.get(id) || 0;
      if (count >= 2 || !count && counts.size >= 2) continue;
      counts.set(id, count + 1);
      if (assign(index + 1)) return true;
      if (count) counts.set(id, count); else counts.delete(id);
    }
    return false;
  }
  return assign(0);
}

function redCandidateConstraints(anchors) {
  const required = anchors.filter(anchor => anchor.onlyRed).map(anchor => anchor.redIds);
  if (!screenshotRedLimitFeasible(required)) return anchors.map(() => false);
  return anchors.map(anchor => !anchor.onlyRed && anchor.hasRed
    && !screenshotRedLimitFeasible([...required, anchor.redIds]));
}

function screenshotEnforceResolvedRedLimits(result, counts, equipment, layout, suspects) {
  const reds = Object.entries(counts).filter(([id]) => equipment.get(Number(id))?.quality === 5);
  if (reds.length <= 2 && reds.every(([, count]) => count <= 2)) return;
  const ids = new Set(reds.map(([id]) => Number(id)));
  for (let index = layout.length - 1; index >= 0; index--) {
    if (!ids.has(layout[index].equipId)) continue;
    const piece = result.pieces[layout[index].importPieceIndex];
    if (piece) {
      suspects.push({row: piece.row, col: piece.col,
        reason: '红色法宝数量违反游戏规则（最多 2 种、每种 2 个），请重新核对候选'});
    }
    layout.splice(index, 1);
  }
  for (const [id] of reds) { delete counts[id]; equipment.delete(Number(id)); }
}

function Vr(t) { return redCandidateConstraints(t); }
function gs(t, e) {
  const s = [...i1.values()],
    a = [];
  for (let c = 0; c < o1; c++)
    for (let u = 0; u < $1; u++) {
      const f = p0(t, e, c, u, Le.badgeBox);
      f > Y.anchorCandidate && a.push({ r: c, c: u, badge: f });
    }
  if (a.length < 3) return e;
  a.sort((c, u) => u.badge - c.badge);
  const n = a.slice(0, 21),
    l = (c) => {
      let u = 0;
      for (const f of n) {
        const v = Ma(t, c, f.r, f.c, Le.elementBox);
        let d = -2;
        for (const m of s) {
          const A = Sa(v, m);
          A > d && (d = A);
        }
        u += d;
      }
      return u;
    },
    i = 0.02 * n.length;
  let o = { s: l(e), g: e };
  for (let c = -8; c <= 8; c += 1)
    for (let u = -8; u <= 8; u += 1) {
      if (u === 0 && c === 0) continue;
      const f = { ...e, ox: e.ox + u, oy: e.oy + c },
        v = l(f);
      v > o.s + i && (o = { s: v, g: f });
    }
  for (const [c, u, f] of [
    ["v", "ph", "oy"],
    ["h", "pw", "ox"],
  ]) {
    const v = o.g;
    let d = o;
    for (let m = -1.5; m <= 1.5; m += 0.5)
      for (let A = -4; A <= 4; A += 1) {
        if (m === 0 && A === 0) continue;
        const h = { ...v, [u]: v[u] + m, [f]: v[f] + A },
          b = l(h);
        b > d.s && (d = { s: b, g: h });
      }
    d.s > o.s + i && (o = d);
  }
  return o.g;
}
function Jr(t, e) {
  const s = gs(t, gs(t, e)),
    a = [...i1.keys()],
    n = [];
  if (typeof window !== "undefined") window.__DEBUG_JR = { t, s, i1, Le, M1, Or, Ca, z, ut, ct, L0, ms, Wr, Kr, Xr, fs, p0, Y, Fe, Qr, ot, getN: () => n };
  for (let p = 0; p < o1; p++)
    for (let g = 0; g < $1; g++) {
      if (p0(t, s, p, g, Le.badgeBox) <= Y.anchorCandidate) continue;
      const q = fs(
          a.map((P) => ({
            key: P,
            score: M1(t, s, p, g, Le.elementBox, i1.get(P)),
          })),
        ),
        k =
          q.score < Y.weakGlyphCorr &&
          p0(t, s, p, g, Le.moatBox) >= Y.weakGlyphMoat,
        M =
          q.score < Y.glyphCorr ||
          q.margin < Y.glyphMargin ||
          q.score + 2 * q.margin < Y.glyphCombined ||
          k;
      let T = q.key;
      if (M) {
        const P = us(t, s, p, g);
        let F = Number.POSITIVE_INFINITY,
          x = 0,
          H = Number.POSITIVE_INFINITY;
        for (const $ of ot) {
          const U = n1($.sig, P);
          U < F
            ? ($.equipId !== x && (H = F), (F = U), (x = $.equipId))
            : $.equipId !== x && U < H && (H = U);
        }
        const j = x ? Qr.get(x) : void 0;
        if (
          j === void 0 ||
          F > Y.signatureBlindMaxDistance ||
          H - F < Y.signatureMinMargin
        )
          continue;
        T = Fe[j];
      }
      n.push({
        row: p,
        col: g,
        elementName: T,
        elementScore: q.score,
        sig: us(t, s, p, g),
        bg: null,
        hits: [],
        band: [],
        formName: null,
        formScore: null,
        redConstrained: !1,
      });
    }
  const l = new Set(n.map((p) => X(p.row, p.col))),
    i = [-0.024, -0.016, -0.008, 0, 0.008, 0.016, 0.024],
    o = new Map(),
    c = (p, g, w) => {
      const q = Or.get(String(w));
      if (!q) return null;
      const k = `${p},${g}|${w}`;
      let M = o.get(k);
      return (
        M === void 0 && ((M = M1(t, s, p, g, Le.numberBox, q, i)), o.set(k, M)),
        M
      );
    },
    u = (p) => (ct.get(L0.get(p.elementName)) ?? []).filter((g) => ms.has(g)),
    f = (p, g) => {
      const w = L0.get(p.elementName),
        q = [],
        k = new Set();
      for (const M of g) {
        const T = Wr.get(M) ?? 0;
        for (const P of ut.get(`${w}|${T}`) ?? []) {
          if (k.has(P.id)) continue;
          k.add(P.id);
          const F = Kr(P.shapeId, p.row, p.col),
            x = Xr(P.shapeId, p.row, p.col);
          if (!F || !x) continue;
          const H = X(p.row, p.col);
          if (F.some(($) => $ !== H && l.has($))) continue;
          const j = c(x.row, x.col, P.reson);
          j !== null &&
            q.push({
              eq: P,
              formName: M,
              numberScore: j,
              cells: F,
              numberCell: x,
              bgDistance: p.bg
                ? V1(p.bg, R0[`q${P.quality}`])
                : Number.POSITIVE_INFINITY,
            });
        }
      }
      return (q.sort((M, T) => T.numberScore - M.numberScore), q);
    },
    v = (p) => {
      const g = p[0];
      let w =
        g && g.numberScore >= Y.numberAccept
          ? p.filter((q) => q.numberScore >= g.numberScore - Yr)
          : [];
      if (w.length > 1) {
        const q = w[0],
          k = w.find((M) => M.eq.id !== q.eq.id);
        k &&
          k.numberCell.row === q.numberCell.row &&
          k.numberCell.col === q.numberCell.col &&
          q.numberScore - k.numberScore >= Y.numberMargin &&
          (w = w.filter((M) => M.eq.id === q.eq.id));
      }
      return w;
    };
  for (const p of n) {
    const g = u(p);
    if (g.length) {
      const w = fs(
        g.map((q) => ({
          key: q,
          score: M1(t, s, p.row, p.col, Le.formBox, ms.get(q)),
        })),
      );
      w.score >= Y.formCorr &&
        (g.length === 1 || w.margin >= Y.formMargin) &&
        ((p.formName = w.key), (p.formScore = w.score));
    }
    if (
      ((p.bg = it(t, s, p.row, p.col)),
      (p.hits = f(p, p.formName ? [p.formName] : ["其他", ...g])),
      (p.band = v(p.hits)),
      !p.band.length && p.formName)
    ) {
      const w = f(p, ["其他", ...g]),
        q = v(w);
      q.length &&
        ((p.formName = null), (p.formScore = null), (p.hits = w), (p.band = q));
    }
  }
  const d = [],
    m = [];
  n.forEach((p, g) => {
    let w = -1;
    for (let q = 0; q < d.length; q++)
      if (n1(p.sig, d[q].sig) < Y.signatureMaxDistance) {
        w = q;
        break;
      }
    if (w < 0) (d.push({ members: [g], sig: [...p.sig] }), (w = d.length - 1));
    else {
      const q = d[w],
        k = q.members.length;
      ((q.sig = q.sig.map((M, T) => (M * k + p.sig[T]) / (k + 1))),
        q.members.push(g));
    }
    m[g] = w;
  });
  const A = Vr(
    n.map((p) => ({
      hasRed: p.band.some((w) => w.eq.quality === 5),
      onlyRed: p.band.length > 0 && p.band.every((w) => w.eq.quality === 5),
      redIds: p.band.filter((w) => w.eq.quality === 5).map((w) => w.eq.id),
    }))
  );
  n.forEach((p, g) => {
    A[g] &&
      ((p.band = p.band.filter((w) => w.eq.quality !== 5)),
      (p.redConstrained = !0));
  });
  const h = (p, g, w = Y.signatureRescueMaxDistance) => {
      const q = [...new Map(g.map((T) => [T.eq.id, T])).values()],
        k = [];
      for (const T of q) {
        const P = ot.filter((F) => F.equipId === T.eq.id);
        P.length &&
          k.push({ h: T, d: Math.min(...P.map((F) => n1(F.sig, p))) });
      }
      if (!k.length) return null;
      k.sort((T, P) => T.d - P.d);
      const M = k[0];
      return M.d > w || (k.length >= 2 && k[1].d - M.d < Y.signatureMinMargin)
        ? null
        : M.h;
    },
    b = (p, g, w) => {
      const q = L0.get(p.elementName),
        k = {
          row: p.row,
          col: p.col,
          element: q,
          elementName: p.elementName,
          formName: p.formName,
          signature: p.sig,
          candidates: [],
          redConstrained: p.redConstrained,
        },
        M = ($, U) => ({
          ...k,
          status: "suspect",
          equip: null,
          cells: null,
          numberCell: null,
          reason: $,
          scores: {
            element: p.elementScore,
            form: p.formScore,
            number: g[0]?.numberScore ?? null,
            bgDistance: null,
            band: w.length,
          },
          ...U,
        }),
        T = ($) => ({
          ...k,
          status: "ok",
          equip: $.eq,
          cells: $.cells,
          numberCell: $.numberCell,
          reason: null,
          scores: {
            element: p.elementScore,
            form: p.formScore,
            number: $.numberScore,
            bgDistance: Number.isFinite($.bgDistance) ? $.bgDistance : null,
            band: 1,
          },
        });
      if (!g.length)
        return M("查无可行候选（五行/形态组合在目录中不存在或形状越界）");
      if (!w.length) {
        const $ = h(p.sig, g, Y.signatureBlindMaxDistance);
        return $ && g.every((U) => $.numberScore >= U.numberScore - 0.02)
          ? T($)
          : M("共鸣数字读不出（或该共鸣值的模板缺失）");
      }
      let P = w;
      const F = new Set(P.map(($) => $.eq.quality));
      if (P.length > 1 && F.size > 1) {
        const U = [...P].sort((ee, Oe) => ee.bgDistance - Oe.bgDistance)[0];
        if (!Number.isFinite(U.bgDistance) || U.bgDistance > Y.bgMaxDistance) {
          const ee = h(p.sig, P);
          if (!ee) return M("同档候选品质不同，而底色被美术污染无法裁决");
          P = [ee];
        } else P = P.filter((ee) => ee.eq.quality === U.eq.quality);
      }
      const x = [...new Map(P.map(($) => [$.eq.id, $])).values()],
        H = x[0];
      if (x.length === 1) return T(H);
      if (x.length === 2 && S1(x[0].eq) === S1(x[1].eq))
        return x[0].cells.length === x[1].cells.length &&
          x[0].cells.every((U, ee) => U === x[1].cells[ee])
          ? {
              ...k,
              status: "ambiguous",
              equip: null,
              candidates: [x[0].eq, x[1].eq],
              cells: x[0].cells,
              numberCell: x[0].numberCell,
              reason: null,
              scores: {
                element: p.elementScore,
                form: p.formScore,
                number: H.numberScore,
                bgDistance: Number.isFinite(H.bgDistance) ? H.bgDistance : null,
                band: 2,
              },
            }
          : M("歧义候选的形状不一致，无法确定占用格");
      const j = h(p.sig, x);
      return j ? T(j) : M(`数字分同档的候选有 ${x.length} 个，无法唯一确定`);
    },
    I = n.map((p) => b(p, p.hits, p.band));
  {
    const p = new Map();
    I.forEach((w, q) => {
      if (w.cells)
        for (const k of w.cells) {
          const M = p.get(k) ?? [];
          (M.push(q), p.set(k, M));
        }
    });
    const g = new Set();
    for (const [, w] of p) if (w.length > 1) for (const q of w) g.add(q);
    if (
      (I.forEach((w, q) => {
        w.status === "suspect" && n[q].band.length >= 2 && g.add(q);
      }),
      g.size)
    ) {
      const w = new Set();
      I.forEach((F, x) => {
        if (!g.has(x) && F.cells) for (const H of F.cells) w.add(H);
      });
      const q = (F) => `${F.eq.id}|${F.cells.join(".")}`,
        k = new Map([...g].map((F) => [F, new Set()])),
        M = (F, x) => F.some((H) => x.includes(H)),
        T = (F) => {
          const x = n[F];
          return f(x, ["其他", ...u(x)]).filter(
            (H) =>
              H.numberScore >= Y.numberAccept &&
              H.cells.every((j) => !w.has(j)) &&
              !(A[F] && H.eq.quality === 5) &&
              !k.get(F).has(q(H)),
          );
        },
        P = g.size + 1;
      for (let F = 0; F < P && g.size; F++) {
        const x = new Map();
        for (const j of g) x.set(j, T(j));
        for (;;) {
          const j = [];
          for (const $ of g)
            for (const U of x.get($))
              for (const ee of g) {
                if (ee === $) continue;
                const Oe = x.get(ee);
                if (Oe.length && Oe.every((x0) => M(U.cells, x0.cells))) {
                  j.push([$, q(U)]);
                  break;
                }
              }
          if (!j.length) break;
          for (const [$, U] of j) k.get($).add(U);
          for (const $ of g)
            x.set(
              $,
              x.get($).filter((U) => !k.get($).has(q(U))),
            );
        }
        let H = !1;
        for (const j of [...g]) {
          const $ = n[j],
            U = x.get(j);
          let ee = $.formName
              ? U.filter((P0) => P0.formName === $.formName)
              : U,
            Oe = !1;
          !ee.length && $.formName && ((ee = U), (Oe = !0));
          const x0 = $.formName,
            Oa = $.formScore;
          Oe && (($.formName = null), ($.formScore = null));
          const C0 = b($, ee, v(ee));
          if (C0.status === "suspect") {
            (($.formName = x0), ($.formScore = Oa));
            continue;
          }
          I[j] = C0;
          for (const P0 of C0.cells ?? []) w.add(P0);
          (g.delete(j), (H = !0));
        }
        if (!H) break;
      }
      for (const F of g) {
        const x = I[F];
        x.status !== "suspect" &&
          (I[F] = {
            ...x,
            status: "suspect",
            equip: null,
            candidates: [],
            cells: null,
            reason: "与相邻件的形状重叠（识别有误）",
          });
      }
    }
  }
  const y = new Map();
  I.forEach((p, g) => {
    if (p.cells)
      for (const w of p.cells) {
        const q = y.get(w) ?? [];
        (q.push(g), y.set(w, q));
      }
  });
  for (const [, p] of y)
    if (p.length > 1)
      for (const g of p) {
        const w = I[g];
        w.status !== "suspect" &&
          (I[g] = {
            ...w,
            status: "suspect",
            equip: null,
            candidates: [],
            cells: null,
            reason: "与相邻件的形状重叠（识别有误）",
          });
      }
  let S = !1;
  {
    const p = I.map((w, q) => ({ p: w, i: q })).filter(
        ({ p: w }) =>
          (w.status === "ok" && w.equip.quality === 5) ||
          (w.status === "ambiguous" && w.candidates[0].quality === 5),
      );
    if (!screenshotRedLimitFeasible(p.map(({ p: w }) => w.status === "ok" ? [w.equip.id] : (w.candidates || []).filter(q => q.quality === 5).map(q => q.id)))) {
      S = !0;
      for (const { i: w } of p)
        I[w] = {
          ...I[w],
          status: "suspect",
          equip: null,
          candidates: [],
          cells: null,
          reason:
            "红色法宝数量违反游戏规则（最多 2 种、每种 2 个），本批红宝识别不可信",
        };
    }
  }
  const O = [];
  {
    const p = new Map();
    I.forEach((g, w) => {
      if (g.status !== "ambiguous") return;
      const q = S1(g.candidates[0]),
        k = p.get(q) ?? [];
      (k.push(w), p.set(q, k));
    });
    for (const [g, w] of p) {
      const q = I[w[0]].candidates,
        k = [];
      for (const T of w) {
        const P = I[T].signature,
          F = k.find((x) => n1(P, x.signature) < Y.signatureMaxDistance);
        if (F) {
          const x = F.pieceIndexes.length;
          ((F.signature = F.signature.map((H, j) => (H * x + P[j]) / (x + 1))),
            F.pieceIndexes.push(T));
        } else k.push({ pieceIndexes: [T], signature: [...P] });
      }
      const M = k.length > 2;
      if (M)
        for (const T of w)
          I[T] = {
            ...I[T],
            status: "suspect",
            equip: null,
            candidates: [],
            cells: null,
            reason: "歧义组聚出 3 个以上簇（只有 2 个候选），识别不可信",
          };
      O.push({ key: g, candidates: q, clusters: k, impossible: M });
    }
  }
  const E = new Array(o1 * J).fill("unknown"),
    N = new Map();
  I.forEach((p, g) => N.set(X(p.row, p.col), g));
  const D = new Map();
  for (const p of I) {
    if (!p.cells) continue;
    const g =
      p.status === "ok" ? p.equip.quality : (p.candidates[0]?.quality ?? 0);
    for (const w of p.cells) D.set(w, g);
  }
  const _ = [];
  for (let p = 0; p < o1; p++)
    for (let g = 0; g < $1; g++) {
      const w = X(p, g),
        q = D.get(w);
      if (q) {
        E[w] = `q${q}`;
        continue;
      }
      if (N.has(w)) {
        E[w] = "unknown";
        continue;
      }
      const k = it(t, s, p, g);
      if (!k) continue;
      const M = V1(k, R0.empty),
        T = V1(k, R0.locked);
      Math.min(M, T) > Y.bgMaxDistance
        ? (E[w] = "unknown")
        : T < M
          ? ((E[w] = "locked"), _.push(w))
          : (E[w] = "empty");
    }
  return {
    pieces: I,
    groups: O,
    cellStates: E,
    lockedCells: _,
    redViolation: S,
    grid: s,
  };
}
const Pa = -1,
  ws = [Pa, 0, 2, 3, 4, 5, 6, 7, 8, 9],
  Zr = new Map(z.shapes.map((t) => [t.id, t.cells.length])),
  bs = (t) => Zr.get(t.shapeId) ?? 0,
  ys = (t) => (t.quality === 5 ? Pa : t.weaponForm),
  ks = (t) => {
    const e = ws.indexOf(t);
    return e === -1 ? ws.length : e;
  },
  Da = (t, e) =>
    ks(ys(t)) - ks(ys(e)) ||
    bs(t) - bs(e) ||
    t.name.localeCompare(e.name, "zh-Hans-CN"),
  Pt = (t, e) => t.element - e.element || Da(t, e) || t.tier - e.tier;
function pt({ shape: t, tier: e, size: s = 7 }) {
  const a = new Set(t.cells.map(([n, l]) => `${n},${l}`));
  return r("span", {
    class: "shape",
    style: {
      gridTemplateColumns: `repeat(${t.width}, ${s}px)`,
      gridTemplateRows: `repeat(${t.height}, ${s}px)`,
    },
    title: `${t.cells.length} 格 · ${t.height} 高 × ${t.width} 宽`,
    children: Array.from({ length: t.height }, (n, l) =>
      Array.from({ length: t.width }, (i, o) =>
        r(
          "i",
          { class: a.has(`${l},${o}`) ? `on${e ? ` q${e}` : ""}` : "off" },
          `${l},${o}`,
        ),
      ),
    ),
  });
}
const el = new Map(z.shapes.map((t) => [t.id, t])),
  j0 = typeof window < "u" && window.matchMedia("(pointer: coarse)").matches,
  L1 = C(!1);
let V = null;
const F0 = C(0),
  re = C(null),
  B0 = C(!0),
  me = C(null),
  E1 = C(!1);
let Pe = null,
  h0 = 0;
const v1 = (typeof window !== "undefined" ? (window.v1 = C(null)) : C(null)),
  N1 = C(null),
  d1 = C({}),
  F1 = C(!0),
  Ta = () => {
    (h0++,
      Pe?.cancel(),
      (Pe = null),
      (E1.value = !1),
      (V = null),
      (re.value = null),
      (v1.value = null),
      (d1.value = {}),
      (N1.value = null),
      (me.value = null),
      (F1.value = !0),
      (recognizedTalents && (recognizedTalents.value = null)),
      F0.value++);
  },
  tl = () => {
    (Ta(), (L1.value = !0));
  },
  Z1 = () => {
    ((L1.value = !1), Ta());
  },
  sl = async (t) => {
    const e = URL.createObjectURL(t);
    try {
      const s = new Image();
      await new Promise((i, o) => {
        ((s.onload = () => i()),
          (s.onerror = () => o(new Error("decode"))),
          (s.src = e));
      });
      const a = document.createElement("canvas");
      ((a.width = s.naturalWidth), (a.height = s.naturalHeight));
      const n = a.getContext("2d");
      n.drawImage(s, 0, 0);
      const l = n.getImageData(0, 0, a.width, a.height);
      return { bitmap: qa(l), canvas: a, data: l };
    } finally {
      URL.revokeObjectURL(e);
    }
  },
  Dt = () => {
    if (!V || !re.value) return;
    me.value = "识别中…";
    const t = re.value;
    setTimeout(() => {
      if (!V) return;
      const e = Jr(V.bitmap, t);
      if (typeof awAttachScreenshot === "function") {
        try { awAttachScreenshot(V.bitmap, e); } catch(err) { console.warn("awAttachScreenshot error:", err); }
      }
      re.value = e.grid;
      const s = {};
      (e.groups.forEach((a) => {
        a.impossible ||
          a.clusters.forEach((n, l) => {
            const i = Er(n.signature, a.candidates);
            i &&
              (s[`${a.key}#${l}`] = { equipId: i.equip.id, source: i.source });
          });
      }),
        (d1.value = s),
        (v1.value = e),
        (me.value = null),
        F0.value++);
    }, 30);
  },
  ht = async (t) => {
    if (typeof window !== "undefined") {
      window.z = z;
      window.ACQUIRED_TALENTS = ACQUIRED_TALENTS;
    }
    ((N1.value = null), (me.value = "读取图片…"));
    let e;
    try {
      e = await sl(t);
    } catch {
      ((me.value = null),
        (N1.value = "无法读取该图片，请换一张 PNG / JPG 截图"));
      return;
    }
    try {
      if (typeof recognizeTalentsFromImageData === "function") {
        recognizedTalents.value = recognizeTalentsFromImageData(e.data.data, e.data.width, e.data.height, z.talents, ACQUIRED_TALENTS);
      }
    } catch (err) {
      console.warn("Talent recognition error:", err);
      recognizedTalents.value = null;
    }
    ((V = e), (typeof window !== "undefined" && (window.V = e)), (me.value = "自动定位网格…"), (E1.value = !0));
    const s = ++h0;
    (Pe?.cancel(),
      (Pe = Gr(e.data)),
      Pe.promise.then((a) => {
        s !== h0 ||
          !V ||
          ((Pe = null),
          (E1.value = !1),
          (re.value = a.grid),
          (B0.value = a.converged),
          Dt());
      }));
  },
  al = () => {
    V &&
      (h0++,
      Pe?.cancel(),
      (Pe = null),
      (E1.value = !1),
      (re.value = J1(V.bitmap)),
      (B0.value = !1),
      Dt());
  };
typeof window < "u" &&
  window.addEventListener("paste", (t) => {
    if (!L1.value) return;
    const e = t.clipboardData?.items;
    if (e) {
      for (const s of e)
        if (s.type.startsWith("image/")) {
          const a = s.getAsFile();
          a && (t.preventDefault(), ht(a));
          return;
        }
    }
  });
const Tt = (t) => {
    const e = {},
      s = new Map(),
      a = [],
      n = [];
    let l = 0;
    const i = new Map();
    for (const o of t.groups)
      o.impossible ||
        o.clusters.forEach((c, u) => {
          const f = d1.value[`${o.key}#${u}`],
            v = f ? o.candidates.find((d) => d.id === f.equipId) : void 0;
          for (const d of c.pieceIndexes) v && i.set(d, v);
          v || (l += c.pieceIndexes.length);
        });
    return (
      t.pieces.forEach((o, c) => {
        if (o.status === "suspect") {
          n.push({ row: o.row, col: o.col, reason: o.reason ?? "未知原因" });
          return;
        }
        const u = o.status === "ok" ? o.equip : i.get(c);
        u &&
          ((e[u.id] = (e[u.id] ?? 0) + 1),
          s.set(u.id, u),
          o.cells && a.push({ equipId: u.id, cells: o.cells }));
      }),
      {
        counts: e,
        countList: Object.entries(e)
          .map(([o, c]) => ({ equip: s.get(Number(o)), count: c }))
          .sort((o, c) => Pt(o.equip, c.equip)),
        layout: {
          pieces: a,
          missing: n.length + l,
          savedAt: new Date().toISOString().slice(0, 16).replace("T", " "),
        },
        suspects: n,
        unresolved: l,
        lockedCells: t.lockedCells,
        filledCells: a.reduce((o, c) => o + c.cells.length, 0),
        usableCells: 42 - t.lockedCells.length,
      }
    );
  },
  nl = () => {
    const t = v1.value;
    if (!t) return;
    const e = Tt(t);
    (pr(e.counts, e.layout),
      F1.value && e.lockedCells.length > 0 && hr(e.lockedCells),
      Z1());
  },
  As = 620,
  $a = () => {
    const t = document.querySelector(".import-dialog");
    if (!t) return As;
    const e = getComputedStyle(t),
      s =
        t.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight);
    return Math.min(As, Math.max(120, s));
  };
typeof window < "u" &&
  window.addEventListener("resize", () => {
    L1.value && V && F0.value++;
  });
let ge = null;
function rl() {
  if (!V || !re.value) return null;
  const t = V.bitmap,
    e = Math.min(1, $a() / t.w),
    s = Math.round(t.w * e),
    a = Math.round(t.h * e),
    n = re.value,
    l = n.ox * e,
    i = n.oy * e,
    o = (n.ox + 7 * n.pw) * e,
    c = (n.oy + 6 * n.ph) * e,
    u = v1.value,
    f = new Set(),
    v = new Set(),
    d = new Map();
  if (u) {
    for (const I of u.pieces)
      if (I.status === "suspect")
        (f.add(I.row * 7 + I.col), d.set(I.row * 7 + I.col, "suspect"));
      else if (I.status === "ambiguous" && I.cells) {
        for (const y of I.cells) v.add($e(y) * 7 + Ee(y));
        d.set(I.row * 7 + I.col, "pending");
      }
  }
  const m = (I) => (y) => {
      (y.preventDefault(),
        (ge = {
          kind: I,
          startX: y.clientX,
          startY: y.clientY,
          grid: { ...n },
        }));
      const S = (E) => {
          if (!ge) return;
          const N = (E.clientX - ge.startX) / e,
            D = (E.clientY - ge.startY) / e,
            _ = ge.grid;
          if (ge.kind === "move") {
            re.value = { ..._, ox: _.ox + N, oy: _.oy + D };
            return;
          }
          let p = _.ox,
            g = _.oy,
            w = _.ox + 7 * _.pw,
            q = _.oy + 6 * _.ph;
          (ge.kind === 0
            ? ((p += N), (g += D))
            : ge.kind === 1
              ? ((w += N), (g += D))
              : ge.kind === 2
                ? ((p += N), (q += D))
                : ((w += N), (q += D)),
            !(w - p < 70 || q - g < 60) &&
              (re.value = { ox: p, oy: g, pw: (w - p) / 7, ph: (q - g) / 6 }));
        },
        O = () => {
          (window.removeEventListener("pointermove", S),
            (ge = null),
            (B0.value = !0),
            Dt());
        };
      (window.addEventListener("pointermove", S),
        window.addEventListener("pointerup", O, { once: !0 }));
    },
    A = [];
  for (let I = 0; I <= 7; I++) {
    const y = (n.ox + I * n.pw) * e;
    A.push(r("line", { x1: y, y1: i, x2: y, y2: c }, `v${I}`));
  }
  for (let I = 0; I <= 6; I++) {
    const y = (n.oy + I * n.ph) * e;
    A.push(r("line", { x1: l, y1: y, x2: o, y2: y }, `h${I}`));
  }
  const h = [];
  for (let I = 0; I < 6; I++)
    for (let y = 0; y < 7; y++) {
      const S = I * 7 + y,
        O = f.has(S) ? "suspect" : v.has(S) ? "pending" : null;
      if (!O) continue;
      const E = (n.ox + y * n.pw) * e,
        N = (n.oy + I * n.ph) * e,
        D = n.pw * e,
        _ = n.ph * e,
        p = d.get(S);
      h.push(
        r(
          "g",
          {
            class: `mark ${O}`,
            children: [
              r("rect", { class: "tint", x: E, y: N, width: D, height: _ }),
              r("rect", {
                class: "casing",
                x: E + 2.5,
                y: N + 2.5,
                width: D - 5,
                height: _ - 5,
              }),
              r("rect", {
                class: "core",
                x: E + 2.5,
                y: N + 2.5,
                width: D - 5,
                height: _ - 5,
              }),
              p &&
                r(R, {
                  children: [
                    r("circle", {
                      class: "badge",
                      cx: E + 12,
                      cy: N + 12,
                      r: 8.5,
                    }),
                    r("text", {
                      x: E + 12,
                      y: N + 12.5,
                      children: p === "suspect" ? "!" : "?",
                    }),
                  ],
                }),
            ],
          },
          `t${S}`,
        ),
      );
    }
  const b = [
    [0, l, i],
    [1, o, i],
    [2, l, c],
    [3, o, c],
  ];
  return r("svg", {
    class: "import-overlay",
    width: s,
    height: a,
    viewBox: `0 0 ${s} ${a}`,
    children: [
      h,
      r("g", { class: "gridlines", children: A }),
      r("rect", {
        class: "drag-area",
        x: l,
        y: i,
        width: o - l,
        height: c - i,
        onPointerDown: m("move"),
      }),
      b.map(([I, y, S]) =>
        r(
          "g",
          {
            children: [
              r("circle", { class: "handle", cx: y, cy: S, r: 8 }),
              r("circle", {
                class: "handle-hit",
                cx: y,
                cy: S,
                r: 22,
                onPointerDown: m(I),
              }),
            ],
          },
          String(I),
        ),
      ),
    ],
  });
}
function ll() {
  if (!V) return null;
  const t = V.bitmap,
    e = Math.min(1, $a() / t.w),
    s = Math.round(t.w * e),
    a = Math.round(t.h * e);
  return r("div", {
    class: "import-stage",
    style: { width: `${s}px`, height: `${a}px` },
    children: [
      r("canvas", {
        width: s,
        height: a,
        ref: (n) => {
          n && V && n.getContext("2d").drawImage(V.canvas, 0, 0, s, a);
        },
      }),
      r(rl, {}),
    ],
  });
}
function il({ row: t, col: e }) {
  const s = re.value;
  return !V || !s
    ? null
    : r("canvas", {
        class: "import-crop",
        width: 72,
        height: 72,
        ref: (a) => {
          if (!a || !V || !re.value) return;
          const n = re.value;
          a.getContext("2d").drawImage(
            V.canvas,
            n.ox + e * n.pw,
            n.oy + t * n.ph,
            n.pw,
            n.ph,
            0,
            0,
            72,
            72,
          );
        },
      });
}
function awScreenshotEquip(result, index) {
  const piece = result.pieces[index];
  if (piece.status === 'ok' && piece.equip) return piece.equip;
  for (const group of result.groups || []) {
    if (group.impossible) continue;
    for (let cluster = 0; cluster < (group.clusters || []).length; cluster++) {
      if (!group.clusters[cluster].pieceIndexes.includes(index)) continue;
      const picked = d1.value[group.key + '#' + cluster];
      if (picked) return group.candidates.find(eq => eq.id === picked.equipId);
    }
  }
  return piece.candidates?.[0] || piece.equip || null;
}

function awScreenshotSupported(eq, level) {
  return awScreenshotLevelValid(level);
}

function awSetScreenshotLevel(index, level) {
  const result = v1.value;
  if (!result || !awScreenshotLevelValid(level) || !result.pieces[index] || !awScreenshotIsRed(result.pieces[index])) return;
  const eq = awScreenshotEquip(result, index);
  if (eq && !awScreenshotSupported(eq, level)) return;
  v1.value = {
    ...result,
    pieces: result.pieces.map((piece, i) =>
      i === index
        ? { ...piece, awakenLevel: level, awakenConfidence: 1, awakenStatus: 'recognized', awakenManual: true }
        : piece
    )
  };
}

function awScreenshotBox(box) {
  const values = Array.isArray(box) ? box : [box?.x, box?.y, box?.width ?? box?.w, box?.height ?? box?.h];
  return values.length === 4 && values.every(Number.isFinite) && values[2] > 0 && values[3] > 0 ? values : null;
}

function awScreenshotCrop({ piece }) {
  const box = awScreenshotBox(piece.awakenBox);
  if (!V || !box) return null;
  return r('canvas', {
    width: 64,
    height: 64,
    style: {
      width: '42px',
      height: '42px',
      imageRendering: 'pixelated',
      border: '1px solid #d8b4fe',
      borderRadius: '4px',
      background: '#000',
      flexShrink: 0
    },
    'aria-label': '原图觉醒角标',
    ref: (canvas) => {
      if (!canvas || !V) return;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, 64, 64);
      context.imageSmoothingEnabled = false;
      context.drawImage(V.canvas, ...box, 0, 0, 64, 64);
    }
  });
}

function awImportControls({ result }) {
  const items = result.pieces.map((piece, index) => ({ piece, index })).filter(({ piece }) => awScreenshotIsRed(piece));
  if (!items.length) return null;
  return r('div', {
    class: 'import-awaken-card',
    style: {
      padding: '10px 12px',
      marginBottom: '12px',
      background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
      border: '1px solid #d8b4fe',
      borderRadius: '8px',
      fontSize: '0.82rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    children: [
      r('div', {
        style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' },
        children: [
          r('span', { style: { fontWeight: 'bold', color: '#6b21a8', fontSize: '0.85rem' }, children: '🔥 红色法宝觉醒 · 智能识别与校正' }),
          r('span', { class: 'muted small', style: { fontSize: '0.75rem' }, children: '识别有偏差可直接手动切换' })
        ]
      }),
      r('div', {
        style: { display: 'flex', flexDirection: 'column', gap: '8px' },
        children: items.map(({ piece, index }) => {
          const eq = awScreenshotEquip(result, index);
          const valid = eq
            ? awScreenshotSupported(eq, piece.awakenLevel) && piece.awakenStatus !== 'uncertain'
            : awScreenshotLevelValid(piece.awakenLevel) && piece.awakenStatus !== 'uncertain';
          const name = eq?.name ?? (piece.candidates ? piece.candidates.map(c => c.name).join(' / ') : '红色法宝');
          const maxLevel = 5;
          return r('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              background: '#fff',
              padding: '6px 8px',
              borderRadius: '6px',
              border: '1px solid #e9d5ff'
            },
            children: [
              r('div', {
                style: { display: 'flex', alignItems: 'center', gap: '8px' },
                children: [
                  r(awScreenshotCrop, { piece }),
                  r('div', {
                    children: [
                      r('div', { style: { fontWeight: '600', color: '#3b0764' }, children: `${name} · 位置 (${piece.row + 1},${piece.col + 1})` }),
                      r('div', {
                        class: valid ? 'muted small' : 'warn small',
                        style: { fontSize: '0.75rem', marginTop: '2px' },
                        children: valid
                          ? (piece.awakenManual ? '已手动确认' : piece.awakenLevel === 0 ? '未觉醒 · 已识别' : `已识别为 觉醒 ${piece.awakenLevel} (${Math.round(piece.awakenConfidence * 100)}%)`)
                          : '觉醒角标未确定，请选择等级'
                      })
                    ]
                  })
                ]
              }),
              r('select', {
                'aria-label': `第${index + 1}件觉醒等级`,
                class: valid ? 'elder-select awaken-on inline-select' : 'elder-select inline-select',
                style: { minWidth: '76px', height: '28px', fontSize: '0.8rem' },
                value: valid ? String(piece.awakenLevel) : '',
                onChange: (event) => {
                  if (event.target.value !== '') awSetScreenshotLevel(index, Number(event.target.value));
                },
                children: [
                  r('option', { value: '', disabled: true, children: '待确认' }),
                  ...Array.from({ length: maxLevel + 1 }, (_, level) =>
                    r('option', { value: String(level), children: level ? `觉醒 ${level}` : '未觉醒' }, level)
                  )
                ]
              })
            ]
          }, index);
        })
      })
    ]
  });
}

function ol() {
  const t = v1.value;
  if (!t) return null;
  const e = Tt(t),
    s = e.countList.reduce((o, c) => o + c.count, 0),
    a = [],
    n = [];
  for (const o of t.groups) {
    if (o.impossible) continue;
    const [c, u] = o.candidates,
      f = X1(c),
      v = X1(u),
      d = f.atk === v.atk && f.def === v.def && f.hp === v.hp;
    o.clusters.forEach((m, A) => {
      const h = `${o.key}#${A}`,
        b = d1.value[h];
      if (b && b.source !== "user") {
        const y = o.candidates.find((S) => S.id === b.equipId);
        n.push(
          `${y?.name ?? "?"} ×${m.pieceIndexes.length}（${b.source === "builtin" ? "内置签名库" : "上次的选择"}）`,
        );
        return;
      }
      const I = t.pieces[m.pieceIndexes[0]];
      a.push(
        r(
          "div",
          {
            class: `import-card${b ? " resolved" : ""}`,
            children: [
              r("div", {
                class: "row",
                children: [
                  r(il, { row: I.row, col: I.col }),
                  r("div", {
                    children: [
                      r("b", {
                        children: [
                          "这",
                          m.pieceIndexes.length > 1
                            ? ` ${m.pieceIndexes.length} 件同款`
                            : "件",
                          "红宝是哪一个？",
                        ],
                      }),
                      r("div", {
                        class: "muted small",
                        children: [
                          "位置 ",
                          m.pieceIndexes
                            .map(
                              (y) =>
                                `(${t.pieces[y].row + 1},${t.pieces[y].col + 1})`,
                            )
                            .join(" "),
                        ],
                      }),
                      d &&
                        r("div", {
                          class: "ok small",
                          children: "两者属性完全相同，选哪个都不影响求解",
                        }),
                    ],
                  }),
                ],
              }),
              r("div", {
                class: "row",
                children: [c, u].map((y) => {
                  const S = X1(y);
                  return r(
                    "button",
                    {
                      type: "button",
                      class: b?.equipId === y.id ? "primary" : "",
                      onClick: () => {
                        ((d1.value = {
                          ...d1.value,
                          [h]: { equipId: y.id, source: "user" },
                        }),
                          $r(m.signature, y.id));
                      },
                      children: [
                        y.name,
                        r("span", {
                          class: "small muted",
                          children: [" 攻", S.atk, " 防", S.def, " 血", S.hp],
                        }),
                      ],
                    },
                    y.id,
                  );
                }),
              }),
            ],
          },
          h,
        ),
      );
    });
  }
  const l = qe.value,
    i =
      l.length > 0 &&
      (l.length !== e.lockedCells.length ||
        l.some((o, c) => e.lockedCells[c] !== o));
  return r("div", {
    class: "import-side",
    children: [
      r(awImportControls, { result: t }),
      recognizedTalents?.value?.hasTalents &&
        r("div", {
          class: "import-talents-card",
          style: {
            padding: "10px 12px",
            marginBottom: "12px",
            background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)",
            border: "1px solid #a7f3d0",
            borderRadius: "8px",
            fontSize: "0.82rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
          },
          children: [
            r("div", {
              style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" },
              children: [
                r("span", { style: { fontWeight: "bold", color: "#065f46", fontSize: "0.85rem" }, children: "✨ 自动识别到弟子天赋" }),
                r("label", {
                  style: { cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", color: "#047857" },
                  children: [
                    r("input", {
                      type: "checkbox",
                      checked: syncTalentsOnImport.value,
                      onChange: (o) => (syncTalentsOnImport.value = o.target.checked)
                    }),
                    "导入时同步覆盖"
                  ]
                })
              ]
            }),
            recognizedTalents.value.innateNames?.length > 0 &&
              r("div", {
                style: { margin: "4px 0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" },
                children: [
                  r("span", { style: { color: "#92400e", fontWeight: "600", minWidth: "62px" }, children: "先天特性：" }),
                  ...recognizedTalents.value.innateNames.map((name) =>
                    r("span", {
                      style: { display: "inline-block", background: "#fef3c7", color: "#92400e", border: "1px solid #fde68a", padding: "1px 6px", borderRadius: "4px", fontSize: "0.78rem" },
                      children: name
                    })
                  )
                ]
              }),
            recognizedTalents.value.acquiredNames?.length > 0 &&
              r("div", {
                style: { margin: "4px 0", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4px" },
                children: [
                  r("span", { style: { color: "#1e40af", fontWeight: "600", minWidth: "62px" }, children: "后天机缘：" }),
                  ...recognizedTalents.value.acquiredNames.map((name) =>
                    r("span", {
                      style: { display: "inline-block", background: "#dbeafe", color: "#1e40af", border: "1px solid #bfdbfe", padding: "1px 6px", borderRadius: "4px", fontSize: "0.78rem" },
                      children: name
                    })
                  )
                ]
              })
          ]
        }),
      t.redViolation &&
        r("p", {
          class: "warn small",
          children:
            "红色法宝识别结果异常（违反「最多 2 种、每种 2 个」），已全部标为存疑。",
        }),
      r("details", {
        open: !1,
        children: [
          r("summary", {
            children: [
              r("b", { children: ["已确定 ", s, " 件"] }),
              r("span", {
                class: "muted small",
                children: [
                  " ",
                  "· 占 ",
                  e.filledCells,
                  "/",
                  e.usableCells,
                  " 格（",
                  e.countList.length,
                  " 种，确认后替换已选列表）",
                ],
              }),
            ],
          }),
          r("ul", {
            class: "import-list cols",
            children: e.countList.map(({ equip: o, count: c }) =>
              r(
                "li",
                {
                  children: [
                    r("span", {
                      class: `el-tag el${o.element}`,
                      children: Fe[o.element],
                    }),
                    r("span", { children: o.name }),
                    r(pt, { shape: el.get(o.shapeId), tier: o.tier }),
                    r("span", {
                      class: `tier-tag t${o.tier}`,
                      children: T1(o.tier),
                    }),
                    r("span", { class: "count", children: ["×", c] }),
                  ],
                },
                o.id,
              ),
            ),
          }),
        ],
      }),
      n.length > 0 &&
        r("p", {
          class: "ok small",
          children: ["歧义红宝已自动认出，无需选择：", n.join("、")],
        }),
      a.length > 0 &&
        r(R, {
          children: [r("h3", { children: "待裁决（每组只问一次）" }), a],
        }),
      e.suspects.length > 0 &&
        r(R, {
          children: [
            r("h3", {
              class: "warn",
              children: ["存疑，不会导入（", e.suspects.length, " 件）"],
            }),
            r("ul", {
              class: "import-list",
              children: e.suspects.map((o, c) =>
                r(
                  "li",
                  {
                    children: [
                      r("b", {
                        children: ["(", o.row + 1, ",", o.col + 1, ")"],
                      }),
                      " ",
                      r("span", { class: "muted", children: o.reason }),
                    ],
                  },
                  c,
                ),
              ),
            }),
            r("p", {
              class: "muted small",
              children:
                "存疑件请在「已选列表」手动添加——漏一件补 30 秒，错一件会污染整个求解。",
            }),
          ],
        }),
      e.lockedCells.length > 0 &&
        r("p", {
          class: "small",
          children: [
            r("label", {
              class: "chk",
              children: [
                r("input", {
                  type: "checkbox",
                  checked: F1.value,
                  onChange: (o) => (F1.value = o.target.checked),
                }),
                "检测到 ",
                e.lockedCells.length,
                " 个未开放格，同步到背包配置",
              ],
            }),
            i &&
              F1.value &&
              r("span", {
                class: "warn small",
                children: "（将覆盖你手工配置过的不可用格）",
              }),
          ],
        }),
    ],
  });
}
function dl() {
  if (!L1.value) return null;
  F0.value;
  const t = v1.value,
    e = t ? Tt(t) : null;
  return r("div", {
    class: "import-backdrop",
    onClick: (s) => s.target === s.currentTarget && Z1(),
    children: r("div", {
      class: "import-dialog panel",
      children: [
        r("h2", {
          children: [
            "从截图导入",
            r("button", {
              type: "button",
              class: "ghost right",
              onClick: Z1,
              children: "关闭",
            }),
          ],
        }),
        V
          ? r(R, {
              children: [
                !B0.value &&
                  r("p", {
                    class: "warn small",
                    children:
                      "未能自动对齐网格（截图可能被紧裁到没有外框）。请拖动四角的圆点，让网格线对准每个格子的边界——对齐后识别会自动重算。",
                  }),
                r("div", {
                  class: "import-body",
                  children: [
                    r("div", {
                      children: [
                        r(ll, {}),
                        r("p", {
                          class: "muted small",
                          children:
                            "网格没对准时：拖圆点调四角、拖网格内部整体平移；松手即重算。 黄框 ? = 待裁决，红框 ! = 存疑。",
                        }),
                      ],
                    }),
                    me.value
                      ? r("div", {
                          children: [
                            r("p", { class: "muted", children: me.value }),
                            E1.value &&
                              r("button", {
                                type: "button",
                                class: "ghost",
                                onClick: al,
                                children: "跳过自动定位，手动校正",
                              }),
                          ],
                        })
                      : r(ol, {}),
                  ],
                }),
                r("div", {
                  class: "import-footer row wrap",
                  children: [
                    e &&
                      r("span", {
                        class: "small",
                        children: [
                          "识别 ",
                          t.pieces.length,
                          " 件： 可导入 ",
                          r("b", {
                            class: "ok",
                            children: e.countList.reduce(
                              (s, a) => s + a.count,
                              0,
                            ),
                          }),
                          recognizedTalents?.value?.hasTalents &&
                            r("span", {
                              style: { color: "#059669", fontWeight: "600", marginLeft: "6px" },
                              children: [" · 包含弟子天赋 ", r("b", { children: recognizedTalents.value.innateNames.length + recognizedTalents.value.acquiredNames.length }), " 条"]
                            }),
                          e.unresolved > 0 &&
                            r(R, {
                              children: [
                                " ",
                                "· 待裁决 ",
                                r("b", { children: e.unresolved }),
                                "（不裁决则不导入）",
                              ],
                            }),
                          e.suspects.length > 0 &&
                            r(R, {
                              children: [
                                " ",
                                "· 存疑 ",
                                r("b", {
                                  class: "warn",
                                  children: e.suspects.length,
                                }),
                              ],
                            }),
                          e.layout.missing > 0 &&
                            r("span", {
                              class: "muted",
                              children: [
                                " · 之前摆盘将标记为「不完整（缺 ",
                                e.layout.missing,
                                " 件）」",
                              ],
                            }),
                        ],
                      }),
                    r("span", { class: "right" }),
                    r("button", {
                      type: "button",
                      class: "ghost",
                      onClick: Z1,
                      children: "取消",
                    }),
                    r("button", {
                      type: "button",
                      class: "primary",
                      disabled: !e || e.countList.length === 0 || !!me.value,
                      onClick: nl,
                      children: "确认导入",
                    }),
                  ],
                }),
              ],
            })
          : r("div", {
              class: "import-drop",
              onDragOver: (s) => s.preventDefault(),
              onDrop: (s) => {
                s.preventDefault();
                const a = s.dataTransfer?.files?.[0];
                a && ht(a);
              },
              children: [
                r("p", {
                  children: [
                    !j0 &&
                      r(R, {
                        children: [
                          "把",
                          r("b", { children: "完整的背包截图" }),
                          "拖到这里，或",
                        ],
                      }),
                    r("label", {
                      class: "import-pick",
                      children: [
                        j0 ? "从相册选择背包截图" : "选择文件",
                        r("input", {
                          type: "file",
                          accept: "image/*",
                          onChange: (s) => {
                            const a = s.target.files?.[0];
                            a && ht(a);
                          },
                        }),
                      ],
                    }),
                    !j0 &&
                      r(R, {
                        children: [
                          "，或直接 ",
                          r("b", { children: "Ctrl+V" }),
                          " 粘贴",
                        ],
                      }),
                  ],
                }),
                r("p", {
                  class: "muted small",
                  children:
                    "需要一张完整的 7×6 背包界面截图；不支持拼接、滚动或局部截图。图片只在本机处理，不会上传。",
                }),
                N1.value && r("p", { class: "warn", children: N1.value }),
                me.value && r("p", { class: "muted", children: me.value }),
              ],
            }),
      ],
    }),
  });
}
const we = C(""),
  _e = C("");
function ul() {
  const t = f1.value,
    e = (s) => {
      if (((_e.value = s), !s)) return;
      const a = t.find((i) => i.name === s);
      if (!a) return;
      const n = Te.value
          .map((i) => `${i.equipId}x${i.count}`)
          .sort()
          .join(","),
        l = Object.entries(a.state.holdings ?? {})
          .map(([i, o]) => `${i}x${o}`)
          .sort()
          .join(",");
      if (
        Je.value > 0 &&
        n !== l &&
        !confirm(`载入方案「${s}」会覆盖当前的 ${Je.value} 件已选法宝，继续？`)
      ) {
        _e.value = "";
        return;
      }
      vr(s);
    };
  return r("div", {
    class: "plans",
    children: [
      r("div", {
        class: "row wrap",
        children: [
          r("select", {
            value: _e.value,
            onChange: (s) => e(s.target.value),
            children: [
              r("option", {
                value: "",
                children: t.length
                  ? "选择已存方案（选中即载入）"
                  : "暂无已存方案",
              }),
              t.map((s) =>
                r(
                  "option",
                  {
                    value: s.name,
                    children: [
                      s.name,
                      "（",
                      s.pieceCount,
                      " 件 · ",
                      s.savedAt,
                      "）",
                    ],
                  },
                  s.name,
                ),
              ),
            ],
          }),
          r("button", {
            type: "button",
            class: "ghost",
            disabled: !_e.value,
            onClick: () => {
              confirm(`删除方案「${_e.value}」？`) &&
                (fr(_e.value), (_e.value = ""));
            },
            children: "删除",
          }),
        ],
      }),
      r("div", {
        class: "row wrap",
        children: [
          r("input", {
            type: "text",
            class: "text",
            placeholder: "方案名称，同名覆盖",
            value: we.value,
            onInput: (s) => (we.value = s.target.value),
            onKeyDown: (s) => {
              s.key === "Enter" &&
                we.value.trim() &&
                (rs(we.value), (_e.value = we.value.trim()), (we.value = ""));
            },
          }),
          r("button", {
            type: "button",
            class: "primary",
            disabled: !we.value.trim(),
            onClick: () => {
              (rs(we.value), (_e.value = we.value.trim()), (we.value = ""));
            },
            children: "保存当前配置",
          }),
        ],
      }),
      r("p", {
        class: "muted small",
        children: Ve.value
          ? "方案存在浏览器本地，含持有清单、背包、权重与求解参数。可存多套，随时切换比较。"
          : "当前浏览器不允许本地存储，方案无法保存。",
      }),
    ],
  });
}
const qs = new Map(z.shapes.map((t) => [t.id, t])),
  cl = new Map(z.equips.map((t) => [t.id, t])),
  Ge = C(null);
let pl = 0;
const hl = (t) => {
    const e = { name: t, count: Je.value, seq: ++pl };
    ((Ge.value = e),
      setTimeout(() => {
        Ge.value?.seq === e.seq && (Ge.value = null);
      }, 2500));
  },
  p1 = new Map();
for (const t of z.equips) {
  if (t.tier === 5 && t.quality === 1) continue;
  const e = p1.get(t.element) ?? [];
  let s = e.find((a) => a.name === t.name && a.shapeId === t.shapeId);
  (s ||
    ((s = {
      key: `${t.element}:${t.name}:${t.shapeId}`,
      name: t.name,
      element: t.element,
      shapeId: t.shapeId,
      tiers: [],
    }),
    e.push(s)),
    s.tiers.push(t),
    p1.set(t.element, e));
}
const _s = (t) => t.tiers[t.tiers.length - 1];
for (const t of p1.values()) {
  for (const e of t) e.tiers.sort((s, a) => s.tier - a.tier);
  t.sort((e, s) => Da(_s(e), _s(s)));
}
const ml = (t) =>
    (p1.get(t.element) ?? []).find(
      (e) => e.name === t.name && e.shapeId === t.shapeId,
    )?.tiers ?? [t],
  mt = C({}),
  ft = C({}),
  z0 = C(!1),
  U0 = C(!1),
  G0 = C(!0),
  Y0 = C(!0),
  fl = (t) =>
    t.tiers.find((e) => e.id === mt.value[t.key]) ??
    t.tiers[t.tiers.length - 1],
  W0 = (t) => ft.value[t.key] ?? 1,
  Ms = te(() => {
    let list = [];
    if (P1.value === 0) {
      for (const arr of p1.values()) list.push(...arr);
    } else {
      list = [...(p1.get(P1.value) ?? [])];
    }
    if (FormFilter.value !== 0) {
      list = list.filter((g) => {
        const rep = fl(g);
        return getEquipForms(rep).includes(FormFilter.value);
      });
    }
    return list;
  }),
  Ss = te(() =>
    Object.entries(ae.value)
      .filter(([, t]) => t > 0)
      .map(([t, e]) => ({ equip: cl.get(Number(t)), count: e }))
      .filter((t) => t.equip)
      .sort((t, e) => Pt(t.equip, e.equip)),
  );
function Fs({ value: t, onChange: e }) {
  return r("span", {
    class: "stepper",
    children: [
      r("button", {
        type: "button",
        tabIndex: -1,
        onClick: () => e(Math.max(0, t - 1)),
        children: "−",
      }),
      r("input", {
        type: "number",
        min: 0,
        max: 99,
        value: t,
        onInput: (s) => {
          const a = Number(s.target.value);
          e(Number.isFinite(a) ? Math.max(0, Math.min(99, Math.floor(a))) : 0);
        },
      }),
      r("button", {
        type: "button",
        tabIndex: -1,
        onClick: () => e(Math.min(99, t + 1)),
        children: "+",
      }),
    ],
  });
}
function Bs({ equip: t, star: e, talents: s, compact: a = !1, rawOnly: ro = !1 }) {
  const n = ro
    ? {
        atk: t.base?.find((x) => x.attr === 2001)?.value ?? 0,
        def: t.base?.find((x) => x.attr === 2002)?.value ?? 0,
        hp: t.base?.find((x) => x.attr === 2003)?.value ?? 0,
      }
    : X1(t, e, s);
  return r("div", {
    class: a ? "stats inline" : "stats",
    children: [
      r("span", { class: "s-atk", children: ["攻 ", n.atk] }),
      r("span", { class: "s-def", children: ["防 ", n.def] }),
      r("span", { class: "s-hp", children: ["血 ", n.hp] }),
    ],
  });
}
const m0 = C(null),
  f0 = C(null);
typeof document < "u" &&
  document.addEventListener("click", (t) => {
    const e = t.target;
    e &&
      (m0.value !== null &&
        !e.closest(".buff") &&
        !e.closest(".buff-detail") &&
        (m0.value = null),
      f0.value !== null &&
        !e.closest(".ename") &&
        !e.closest(".equip-desc") &&
        (f0.value = null));
  });
const vl = new Map(z.tips.map((t) => [t.id, t]));
function xs({ equip: t, descKey: e }) {
  const s = t.tipIds.map((l) => vl.get(l)).filter((l) => !!l),
    a = [t.desc, ...s.map((l) => `${l.name}：${l.desc}`)].join(`
`),
    n = f0.value === e;
  return r(R, {
    children: [
      r("span", {
        class: "ename",
        title: a,
        onClick: () => (f0.value = n ? null : e),
        children: [
          t.name,
          t.elder?.name ? r("span", { class: "elder-name", children: ` (${t.elder.name})` }) : null,
        ],
      }),
      n &&
        r("div", {
          class: "equip-desc small",
          children: [
            r("div", { class: "desc-text", children: t.desc }),
            s.map((l) =>
              r(
                "div",
                { class: "muted", children: [l.name, "：", l.desc] },
                l.id,
              ),
            ),
            t.feature &&
              r("div", { class: "muted", children: ["特性：", t.feature] }),
          ],
        }),
    ],
  });
}
function Cs({ equip: t }) {
  const e = Mr(t);
  return e.length === 0
    ? r("span", { class: "muted small", children: "—" })
    : r("div", {
        class: "buffs",
        children: e.map((s, a) => {
          const n = `${t.id}#${a}`,
            l = m0.value === n;
          return r(
            "div",
            {
              children: [
                r("div", {
                  class: "buff",
                  title: s.desc,
                  onClick: () => (m0.value = l ? null : n),
                  children: [
                    r("b", {
                      class: s.scope === "self" ? "scope self" : "scope adj",
                      children: s.scopeLabel,
                    }),
                    s.text,
                  ],
                }),
                l && r("div", { class: "buff-detail small", children: s.desc }),
              ],
            },
            a,
          );
        }),
      });
}
function Ps({ base: t, buff: e }) {
  return r(R, {
    children: [
      r("span", { class: "muted", children: "显示列" }),
      r("label", {
        class: "chk",
        children: [
          r("input", {
            type: "checkbox",
            checked: t.value,
            onChange: (s) => (t.value = s.target.checked),
          }),
          "属性",
        ],
      }),
      r("label", {
        class: "chk",
        children: [
          r("input", {
            type: "checkbox",
            checked: e.value,
            onChange: (s) => (e.value = s.target.checked),
          }),
          "加成",
        ],
      }),
    ],
  });
}
function Ds({ tiers: t, current: e, onPick: s }) {
  return t.length === 1
    ? r("span", { class: `tier-tag t${e.tier}`, children: T1(e.tier) })
    : r("select", {
        class: `tier-select t${e.tier}`,
        value: String(e.id),
        onChange: (a) => s(Number(a.target.value)),
        children: t.map((a) =>
          r("option", { value: String(a.id), children: T1(a.tier) }, a.id),
        ),
      });
}
function Il() {
  const t = Bt.value;
  return r(R, {
    children: [
      r("section", {
        class: "panel list-panel",
        id: "catalog",
        children: [
          r("h2", {
            children: [
              "法宝列表",
              r("span", {
                class: "muted small",
                children: [" · ", Ms.value.length, " 个种类"],
              }),
            ],
          }),
          r("div", {
            class: "tabs row-filter",
            children: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              const s = e === 0
                ? Object.values(ae.value).reduce((a, b) => a + (b || 0), 0)
                : (p1.get(e) ?? []).reduce(
                    (a, n) => a + n.tiers.reduce((l, i) => l + (ae.value[i.id] ?? 0), 0),
                    0,
                  );
              return r(
                "button",
                {
                  type: "button",
                  class: [
                    P1.value === e ? "tab on" : "tab",
                    e === 0 ? "tab-all-btn tab-all-elem" : "",
                  ].filter(Boolean).join(" "),
                  onClick: () => { P1.value = e; },
                  children: [
                    e === 0 ? "全" : Fe[e],
                    e !== 0 && s > 0 && r("b", { class: "badge", children: s }),
                  ],
                },
                `elem-${e}`,
              );
            }),
          }),
          r("div", {
            class: "tabs row-filter",
            style: "margin-top:0.25rem;",
            children: FORM_TABS.map((f) => {
              const s = f.id === 0
                ? Object.values(ae.value).reduce((a, b) => a + (b || 0), 0)
                : Object.entries(ae.value).reduce((acc, [id, qty]) => {
                    if (!qty) return acc;
                    const eq = cl.get(Number(id));
                    return eq && getEquipForms(eq).includes(f.id) ? acc + qty : acc;
                  }, 0);
              return r(
                "button",
                {
                  type: "button",
                  class: [
                    FormFilter.value === f.id ? "tab on form-tab" : "tab form-tab",
                    f.id === 0 ? "tab-all-btn tab-all-form" : "",
                  ].filter(Boolean).join(" "),
                  onClick: () => { FormFilter.value = f.id; },
                  children: [
                    f.name,
                    f.id !== 0 && s > 0 && r("b", { class: "badge", children: s }),
                  ],
                },
                `form-${f.id}`,
              );
            }),
          }),
          r("div", {
            class: "row wrap small tools",
            children: r(Ps, { base: z0, buff: U0 }),
          }),
          r("div", {
            class: "scroll-y",
            children: r("table", {
              class: "tbl catalog",
              children: [
                r("thead", {
                  children: r("tr", {
                    children: [
                      r("th", { children: "名称" }),
                      r("th", { children: "形状" }),
                      z0.value && r("th", { children: "属性" }),
                      U0.value && r("th", { children: "加成" }),
                      r("th", { children: "品阶" }),
                      r("th", { children: "数量" }),
                      r("th", { children: "操作" }),
                    ],
                  }),
                }),
                r("tbody", {
                  children: Ms.value.map((e) => {
                    const s = fl(e),
                      a = qs.get(e.shapeId),
                      n = ae.value[s.id] ?? 0;
                    return r(
                      "tr",
                      {
                        children: [
                          r("td", {
                            class: "name",
                            children: [
                              r(xs, { equip: s, descKey: `cat:${e.key}` }),
                              r("b", {
                                class: "form-tag",
                                children: getEquipFormLabel(s),
                              }),
                              n > 0 && r("b", { class: "owned", children: n }),
                            ],
                          }),
                          r("td", {
                            class: "nowrap col-shape",
                            children: [
                              r(pt, { shape: a, tier: s.tier }),
                              r("span", {
                                class: "muted small",
                                children: [" ", a.cells.length],
                              }),
                            ],
                          }),
                          z0.value &&
                            r("td", {
                              class: "nowrap col-base",
                              children: r(Bs, { equip: s, compact: !0, rawOnly: !0 }),
                            }),
                          U0.value &&
                            r("td", {
                              class: "col-buff",
                              children: r(Cs, { equip: s }),
                            }),
                          r("td", {
                            class: "col-tier",
                            children: r(Ds, {
                              tiers: e.tiers,
                              current: s,
                              onPick: (l) =>
                                (mt.value = { ...mt.value, [e.key]: l }),
                            }),
                          }),
                          r("td", {
                            class: "col-qty",
                            children: r(Fs, {
                              value: W0(e),
                              onChange: (l) =>
                                (ft.value = { ...ft.value, [e.key]: l }),
                            }),
                          }),
                          r("td", {
                            class: "col-act",
                            children: r("button", {
                              type: "button",
                              class: "add nowrap",
                              disabled: W0(e) < 1,
                              onClick: () => {
                                (E0(s.id, n + W0(e)), hl(s.name));
                              },
                              children: "添加",
                            }),
                          }),
                        ],
                      },
                      e.key,
                    );
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      r("section", {
        class: "panel list-panel",
        id: "selected",
        children: [
          r("h2", {
            children: [
              "已选列表",
              r("span", {
                class: "muted small",
                children: [" ", "· ", q1, "/", ue, " 格 · ", Je, " 件"],
              }),
              r("button", {
                type: "button",
                class: "ghost right",
                disabled: Je.value === 0,
                onClick: () => {
                  confirm("清空已选的全部法宝？背包与权重设置会保留。") && ir();
                },
                children: "清空",
              }),
              r("button", {
                type: "button",
                class: "primary right",
                onClick: tl,
                children: "截图导入",
              }),
            ],
          }),
          r("div", {
            class: "row wrap small tools",
            children: r(Ps, { base: G0, buff: Y0 }),
          }),
          q1.value > ue.value &&
            r("p", {
              class: "muted small hint",
              children:
                "占格总数已超过可用格，求解会自动只挑其中一部分上场——多录一些没有坏处。",
            }),
          r("div", {
            class: "scroll-y",
            children: r("table", {
              class: "tbl selected",
              children: [
                r("thead", {
                  children: r("tr", {
                    children: [
                      r("th", { children: "#" }),
                      r("th", { children: "名称" }),
                      r("th", { children: "形状" }),
                      G0.value && r("th", { children: "属性" }),
                      r("th", { children: "星级" }),
                      r("th", { children: "觉醒" }),
                      Y0.value && r("th", { children: "加成" }),
                      r("th", { children: "品阶" }),
                      r("th", { children: "数量" }),
                      r("th", { children: "操作" }),
                    ],
                  }),
                }),
                r("tbody", {
                  children:
                    Ss.value.length === 0
                      ? r("tr", {
                          class: "empty-row",
                          children: r("td", {
                            colSpan: 10,
                            children: "暂无数据，请在「法宝列表」中添加",
                          }),
                        })
                      : Ss.value.map(({ equip: e, count: s }, a) => {
                          const n = qs.get(e.shapeId),
                            l = t[e.id] ?? 0;
                          return r(
                            "tr",
                            {
                              class: (e.tier === 5 && e.quality === 5) ? "is-red" : "not-red",
                              children: [
                                r("td", {
                                  class: "muted col-idx",
                                  children: a + 1,
                                }),
                                r("td", {
                                  class: "name",
                                  children: [
                                    r("span", {
                                      class: `el-tag el${e.element}`,
                                      children: Fe[e.element],
                                    }),
                                    " ",
                                    r(xs, { equip: e, descKey: `sel:${e.id}` }),
                                  ],
                                }),
                                r("td", {
                                  class: "nowrap col-shape",
                                  children: [
                                    r(pt, { shape: n, tier: e.tier }),
                                    r("span", {
                                      class: "muted small",
                                      children: [" ", n.cells.length],
                                    }),
                                  ],
                                }),
                                G0.value &&
                                  r("td", {
                                    class: "col-base",
                                    children: r(Bs, {
                                      equip: e,
                                      star: Ne.value[e.id],
                                      talents: ma.value,
                                    }),
                                  }),
                                (e.tier === 5 && e.quality === 5 && e.elder)
                                  ? r("td", {
                                      class: "col-star nowrap",
                                      children: r("select", {
                                        class: (Ne.value[e.id] ?? 0) > 0 ? "elder-select on inline-select" : "elder-select inline-select",
                                        value: String(Ne.value[e.id] ?? 0),
                                        onChange: (ev) => ur(e.id, Number(ev.target.value)),
                                        title: `${e.elder?.name || ''}星级`,
                                        children: [
                                          r("option", { value: "0", children: "未设" }),
                                          Array.from({ length: 5 }, (_, idx) =>
                                            r("option", { value: String(idx + 1), children: `${idx + 1}星` })
                                          ),
                                        ],
                                      }),
                                    })
                                  : r("td", { class: "muted col-star not-red", children: "-" }),
                                (e.tier === 5 && AWAKEN_DB[e.id])
                                  ? r("td", {
                                      class: "col-awaken nowrap",
                                      children: r("select", {
                                        class: (AwakenState.value[e.id] ?? 0) > 0 ? "elder-select awaken-on inline-select" : "elder-select inline-select",
                                        value: String(AwakenState.value[e.id] ?? 0),
                                        onChange: (ev) => {
                                          const lv = Number(ev.target.value);
                                          AwakenState.value = { ...AwakenState.value, [e.id]: lv };
                                        },
                                        title: "觉醒等级",
                                        children: [
                                          r("option", { value: "0", children: "未觉" }),
                                          Array.from({ length: AWAKEN_DB[e.id]?.maxLevel ?? 5 }, (_, idx) =>
                                            r("option", { value: String(idx + 1), children: `${idx + 1}觉` })
                                          ),
                                        ],
                                      }),
                                    })
                                  : r("td", { class: "muted col-awaken not-red", children: "-" }),
                                Y0.value &&
                                  r("td", {
                                    class: "col-buff",
                                    children: r(Cs, { equip: e }),
                                  }),
                                r("td", {
                                  class: "col-tier",
                                  children: r(Ds, {
                                    tiers: ml(e),
                                    current: e,
                                    onPick: (i) => or(e.id, i),
                                  }),
                                }),
                                r("td", {
                                  class: "col-qty",
                                  children: r(Fs, {
                                    value: s,
                                    onChange: (i) => E0(e.id, i),
                                  }),
                                }),
                                r("td", {
                                  class: "col-act",
                                  children: r("button", {
                                    type: "button",
                                    class: "add nowrap",
                                    onClick: () => E0(e.id, 0),
                                    children: "移除",
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          );
                        }),
                }),
              ],
            }),
          }),
          r("h3", { children: "方案保存与载入" }),
          r(ul, {}),
        ],
      }),
    ],
  });
}
function v0({ children: t }) {
  return r("details", {
    class: "explain",
    children: [
      r("summary", { class: "muted small", children: "详细说明" }),
      r("p", { class: "muted small", children: t }),
    ],
  });
}
const gl = new Map(z.equips.map((t) => [t.id, t])),
  wl = () => {
    const list = Object.entries(ae.value)
      .filter(([, c]) => c > 0)
      .map(([id]) => gl.get(Number(id)))
      .filter((eq) => !!eq && (eq.quality === 5 || AWAKEN_DB[eq.id] || (eq.tier === 5 && eq.elder)))
      .sort(Pt);
    const seen = new Set();
    return list.filter((eq) => {
      if (seen.has(eq.id)) return false;
      seen.add(eq.id);
      return true;
    });
  };
const awakenDescMap = {
  1: "相邻指定系加成",
  2: "自身三围 +20%",
  3: "相邻强化(+8%) / 形态全局",
  4: "三围再 +30%（累计+50%）",
  5: "同系相邻(+15%) / 同系全局"
};
function bl() {
  const t = wl();
  return r(R, {
    children: [
      r("h3", { children: "长老星级与觉醒" }),
      t.length === 0
        ? r("p", {
            class: "muted small",
            children:
              "已选列表中还没有支持长老星级或觉醒的法宝——添加后可在此设定星级与觉醒等级。",
          })
        : r(R, {
            children: [
              r("div", {
                class: "elder-rows",
                children: t.map((e) => {
                  const s = Ne.value[e.id] ?? 0;
                  const awData = AWAKEN_DB[e.id];
                  const curAw = AwakenState.value[e.id] ?? 0;
                  const isElderRed = e.quality === 5 && e.elder;
                  const isElderT5 = e.tier === 5 && e.elder;
                  return r(
                    "div",
                    {
                      class: "elder-row",
                      children: [
                        r("span", {
                          class: "name",
                          children: [
                            e.name,
                            r("span", {
                              class: "muted small",
                              children: [
                                "（",
                                e.elder ? e.elder.name : na(e.weaponForm),
                                "）",
                              ],
                            }),
                          ],
                        }),
                        // 长老星级选择器（去掉星星字符展示）
                        isElderRed &&
                          r("select", {
                            class: nt(e, s) ? "elder-select on star-select" : "elder-select star-select",
                            value: String(s),
                            onChange: (a) => ur(e.id, Number(a.target.value)),
                            title: "长老星级",
                            children: [
                              r("option", { value: "0", children: "未设星级" }),
                              Array.from({ length: k0 }, (a, n) => n + 1).map(
                                (a) =>
                                  r(
                                    "option",
                                    { value: String(a), children: Cr(e, a) },
                                    a,
                                  ),
                              ),
                            ],
                          }),
                        // 觉醒选择器（同一行，仅保留下拉框）
                        awData
                          ? r("select", {
                              class:
                                curAw > 0
                                  ? "elder-select on awaken-on awaken-select"
                                  : "elder-select awaken-select",
                              value: String(curAw),
                              onChange: (a) =>
                                setAwakenLevel(e.id, Number(a.target.value)),
                              title: "法宝觉醒等级",
                              children: [
                                r("option", {
                                  value: "0",
                                  children: "未觉醒",
                                }),
                                Array.from(
                                  { length: awData.maxLevel || 5 },
                                  (a, n) => n + 1,
                                ).map((a) =>
                                  r(
                                    "option",
                                    {
                                      value: String(a),
                                      children: `觉醒${a}`,
                                    },
                                    a,
                                  ),
                                ),
                              ],
                            })
                          : null,
                      ],
                    },
                    e.id,
                  );
                }),
              }),
              // 合并后的详细说明
              r(v0, {
                children: [
                  r("div", {
                    style: "margin-bottom:0.25rem;",
                    children: [
                      r("b", { children: "长老星级：" }),
                      "放大对应红宝基础三围并向下取整：紫·橙长老 2·3星 +60% / 4星 +100% / 5星 +150%，蓝长老 +40% / +60% / +100%。档位不叠加，同款红宝共享同一星级。",
                    ],
                  }),
                  r("div", {
                    children: [
                      r("b", { children: "法宝觉醒：" }),
                      "五阶法宝按格数划分觉醒规则：",
                      r("div", { style: "margin-top:0.15rem;", children: "• 蓝色神器（3格）：1觉三围+20%；3觉三围+30%（累计+50%）；5觉每有一件相邻同属性法宝获得高额加成（攻击+40%/生命+120%/防御+200%）。2/4觉无效果。" }),
                      r("div", { style: "margin-top:0.15rem;", children: "• 紫色神器（4格）：1觉每有一件相邻同属性法宝增加属性；2觉三围+20%；3觉相邻同属性法宝三围+8%；4觉三围+30%（累计+50%）；5觉强化为相邻同属性法宝三围+15%。" }),
                      r("div", { style: "margin-top:0.15rem;", children: "• 金色神器（5格）：1觉每有一件相邻同属性法宝增加属性；2觉三围+20%；3觉全包同类型【刀剑枪乐异御锤幡斗】法宝三围+20%；4觉三围+30%（累计+50%）；5觉全包同属性法宝三围+15%。" }),
                      r("div", { style: "margin-top:0.35rem;padding-top:0.25rem;border-top:1px dashed var(--border);color:var(--text-muted);font-size:0.8rem;", children: "💬 如有觉醒规则调整或数据纠错，欢迎联系 QQ：3265808894" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
    ],
  });
}
const yl = (() => {
  const t = new Map();
  for (const e of z.talents) {
    if (!t.has(e.form)) t.set(e.form, []);
    t.get(e.form).push(e);
  }
  return [...t.entries()].sort((e, s) => e[0] - s[0]);
})();
function kl() {
  const t = De.value,
    e = new Set(t.filter((s) => s > 0)),
    acList = AcquiredTalentState.value,
    acPicked = new Set(acList.filter((s) => s > 0)),
    eqMap = new Map(z.equips.map((eq) => [eq.id, eq])),
    activeForms = new Set(),
    activeElements = new Set();

  for (const [id, cnt] of Object.entries(ae.value || {})) {
    if (cnt > 0) {
      const eq = eqMap.get(Number(id));
      if (eq) {
        if (eq.weaponForm > 1) activeForms.add(eq.weaponForm);
        if (eq.element > 0) activeElements.add(eq.element);
      }
    }
  }

  const doFilter = filterTalentsByEquips.value && activeForms.size > 0;
  const kw = (talentSearchKeyword.value || "").trim().toLowerCase();
  const matchKw = (name, desc) => {
    if (!kw) return true;
    return (name && name.toLowerCase().includes(kw)) || (desc && desc.toLowerCase().includes(kw));
  };

  return r(R, {
    children: [
      r("div", {
        style: "display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem;flex-wrap:wrap;gap:0.4rem;",
        children: [
          r("h3", { style: "margin:0;", children: "弟子天赋" }),
          r("div", {
            style: "display:inline-flex;align-items:center;gap:0.75rem;flex-wrap:wrap;",
            children: [
              r("label", {
                style: "display:inline-flex;align-items:center;gap:0.25rem;font-size:0.8rem;cursor:pointer;color:var(--text-muted,#94a3b8);user-select:none;",
                title: "根据当前持有法宝的形态与五行属性自动过滤",
                children: [
                  r("input", {
                    type: "checkbox",
                    checked: filterTalentsByEquips.value,
                    onChange: (ev) => {
                      filterTalentsByEquips.value = ev.target.checked;
                      K();
                    },
                  }),
                  r("span", { children: "快捷筛选" }),
                ],
              }),
              r("label", {
                style: "display:inline-flex;align-items:center;gap:0.25rem;font-size:0.8rem;cursor:pointer;color:var(--text-muted,#94a3b8);user-select:none;",
                title: "仅展示影响法宝三围面板属性（攻/防/血）的后天机缘，排除不加三围的机制/抗性词条",
                children: [
                  r("input", {
                    type: "checkbox",
                    checked: onlyBaseStatTalents.value,
                    onChange: (ev) => {
                      onlyBaseStatTalents.value = ev.target.checked;
                      K();
                    },
                  }),
                  r("span", { children: "仅三维加成" }),
                ],
              }),
            ],
          }),
        ],
      }),
      r("div", {
        style: "position:relative;margin:0.2rem 0 0.35rem;display:flex;align-items:center;",
        children: [
          r("input", {
            type: "text",
            class: "text talent-search-input",
            style: "width:100%;height:30px;min-height:30px;padding:0 1.8rem 0 0.6rem;font-size:0.8rem;border-radius:4px;border:1px solid var(--line);background:var(--bg);box-sizing:border-box;",
            placeholder: "🔍 搜索天赋词条（如：锤、幡、通神、守一）…",
            value: talentSearchKeyword.value,
            onInput: (ev) => {
              talentSearchKeyword.value = ev.target.value;
            },
          }),
          talentSearchKeyword.value &&
            r("button", {
              type: "button",
              class: "ghost",
              style: "position:absolute;right:4px;width:22px;height:22px;min-height:22px;padding:0;display:flex;align-items:center;justify-content:center;font-size:0.9rem;color:var(--muted);cursor:pointer;border:none;background:transparent;",
              onClick: () => {
                talentSearchKeyword.value = "";
              },
              title: "清空搜索",
              children: "×",
            }),
        ],
      }),
      r("div", {
        style: "font-size:0.82rem;font-weight:600;color:var(--text-muted,#94a3b8);margin:0.25rem 0 0.2rem;",
        children: "【先天特性】",
      }),
      r("div", {
        class: "elder-rows",
        children: t.map((s, a) =>
          r(
            "label",
            {
              class: "elder-row",
              key: "innate-" + a,
              children: [
                r("span", { class: "name", children: ["先天特性 ", a + 1] }),
                r("select", {
                  class: s > 0 ? "elder-select on" : "elder-select",
                  value: String(s),
                  onChange: (n) => cr(a, Number(n.target.value)),
                  children: [
                    r("option", { value: "0", children: "未设" }),
                    yl.map(([n, l]) => {
                      if (doFilter && !activeForms.has(n) && !l.some((i) => i.id === s)) {
                        return null;
                      }
                      const available = l.filter((i) => {
                        if (i.id === s) return true;
                        if (e.has(i.id)) return false;
                        if (kw && !matchKw(i.name, i.desc)) return false;
                        return true;
                      });
                      if (available.length === 0) return null;
                      return r(
                        "optgroup",
                        {
                          key: n,
                          label: `${na(n)}形态`,
                          children: available.map((i) =>
                            r(
                              "option",
                              {
                                key: i.id,
                                value: String(i.id),
                                title: i.desc,
                                children: Br(i),
                              },
                              i.id,
                            ),
                          ),
                        },
                        n,
                      );
                    }),
                  ],
                }),
              ],
            },
            "innate-row-" + a,
          ),
        ),
      }),
      r("div", {
        style: "font-size:0.82rem;font-weight:600;color:var(--text-muted,#94a3b8);margin:0.5rem 0 0.2rem;",
        children: "【后天机缘】",
      }),
      r("div", {
        class: "elder-rows",
        children: acList.map((s, a) => {
          // 官方分类筛选（支持三围过滤与搜索词过滤）
          const filterItem = (i) => {
            if (i.id === s) return true;
            if (kw) {
              return matchKw(i.name, i.desc);
            }
            if (onlyBaseStatTalents.value && !i.base) return false;
            if (!doFilter) return true;
            if (i.forms && i.forms.length > 0) {
              return i.forms.some((f) => activeForms.has(f));
            }
            if (i.elem > 0) {
              return activeElements.has(i.elem);
            }
            return false;
          };

          const singleGroup = ACQUIRED_TALENTS.filter((i) => i.cat === "单兵专精" && filterItem(i));
          const combo1Group = ACQUIRED_TALENTS.filter((i) => i.cat === "双兵小成" && filterItem(i));
          const combo2Group = ACQUIRED_TALENTS.filter((i) => i.cat === "双兵双绝" && filterItem(i));
          const combo3Group = ACQUIRED_TALENTS.filter((i) => i.cat === "双兵通神" && filterItem(i));
          const specGroup = ACQUIRED_TALENTS.filter((i) => i.cat === "流派合道" && filterItem(i));
          const daotongGroup = ACQUIRED_TALENTS.filter((i) => i.cat === "八荒道统" && filterItem(i));

          return r(
            "label",
            {
              class: "elder-row",
              key: "acquired-" + a,
              children: [
                r("span", { class: "name", children: ["后天机缘 ", a + 1] }),
                r("select", {
                  class: s > 0 ? "elder-select on" : "elder-select",
                  value: String(s),
                  onChange: (n) => cr_ac(a, Number(n.target.value)),
                  children: [
                    r("option", { value: "0", children: "未设" }),
                    [
                      ["单兵专精", singleGroup],
                      ["双兵小成（19组）", combo1Group],
                      ["双兵双绝（19组）", combo2Group],
                      ["双兵通神（19组）", combo3Group],
                      ["流派合道（24种）", specGroup],
                      ["八荒道统", daotongGroup],
                    ].map(([groupLabel, items]) => {
                      const available = items.filter((i) => i.id === s || !acPicked.has(i.id));
                      if (available.length === 0) return null;
                      return r(
                        "optgroup",
                        {
                          key: groupLabel,
                          label: groupLabel,
                          children: available.map((i) =>
                            r(
                              "option",
                              {
                                key: i.id,
                                value: String(i.id),
                                title: i.desc,
                                children: Dr_ac(i),
                              },
                              i.id,
                            ),
                          ),
                        },
                        groupLabel,
                      );
                    }),
                  ],
                }),
              ],
            },
            "acquired-row-" + a,
          );
        }),
      }),
      r(v0, {
        children: [
          "后天机缘已同步官方客户端拆包全量 193 词条配置。其中",
          r("b", { children: "百兵通明、双修阶梯与专属合道等 100 种装备三围加成" }),
          "将直接计入法宝基础攻防血面板与求解器评分中。勾选右上角可根据持有法宝形态与属性快捷过滤；未勾选或持有为空时展示全部。",
        ],
      }),
    ],
  });
}

function AwakenHint() {
  const hasAwaken = Object.entries(AwakenState.value).some(([id, lv]) => lv > 0 && (ae.value[id] ?? 0) > 0);
  const show = hasAwaken && He.value < 60000;
  if (!show) return null;
  return r("div", {
    class: "awaken-hint-bar",
    children: [
      r("span", {
        children: "⚡ 检测到已启用觉醒加成（涉及相邻与全局羁绊），建议求解时间设为 60 秒以上以获得更优摆盘方案。"
      }),
      r("button", {
        type: "button",
        class: "ghost small",
        style: "white-space:nowrap;padding:0.2rem 0.6rem;border-radius:4px;border:1px solid currentColor;cursor:pointer;",
        onClick: () => {
          He.value = 60000;
          K();
        },
        children: "设为 60 秒"
      })
    ]
  });
}

function Al() {
  const t = ie.value === "weighted";
  const hasTalents = De.value.some((v) => v > 0) || AcquiredTalentState.value.some((v) => v > 0);
  const clearTalents = () => {
    De.value = Array(x1).fill(0);
    AcquiredTalentState.value = Array(x1).fill(0);
    talentSearchKeyword.value = "";
    K();
  };
  return r(R, {
    children: [
      r("h2", {
        style: "display:flex;align-items:center;justify-content:space-between;",
        children: [
          "计算设置",
          r("button", {
            type: "button",
            class: "ghost right",
            disabled: !hasTalents,
            onClick: () => {
              confirm("清空已配置的弟子天赋（先天特性与后天机缘）？") && clearTalents();
            },
            title: "清空所有先天特性与后天机缘",
            children: "清空",
          }),
        ],
      }),
      r(bl, {}),
      r(kl, {}),
      r("h3", { children: "求解参数" }),
      r(AwakenHint, {}),
      r("div", {
        class: "row",
        children: [
          r("label", {
            class: "radio",
            children: [
              r("input", {
                type: "radio",
                checked: !t,
                onChange: () => {
                  ((ie.value = "power"), K());
                },
              }),
              "战力最大化",
            ],
          }),
          r("label", {
            class: "radio",
            children: [
              r("input", {
                type: "radio",
                checked: t,
                onChange: () => {
                  ((ie.value = "weighted"), K());
                },
              }),
              "自定义权重",
            ],
          }),
        ],
      }),
      t &&
        r(R, {
          children: [
            r("table", {
              class: "tbl weights",
              children: [
                r("thead", {
                  children: r("tr", {
                    children: [
                      r("th", { children: "属性" }),
                      r("th", { children: "基础系数" }),
                      r("th", { children: "倍率" }),
                      r("th", { children: "实际权重" }),
                    ],
                  }),
                }),
                r("tbody", {
                  children: A0.map((e) => {
                    const s = ua(e),
                      a = Ye.value[e] ?? 1,
                      n = Ke.value === "product" && (e === 2025 || e === 2027);
                    return r(
                      "tr",
                      {
                        class: a === 0 || n ? "off" : "",
                        children: [
                          r("td", { children: da(e)?.name ?? e }),
                          r("td", { class: "num muted", children: as(s) }),
                          r("td", {
                            children: r("input", {
                              type: "number",
                              min: 0,
                              max: 99,
                              step: 1,
                              disabled: s === 0 || n,
                              title: n
                                ? "乘积模式下这项已并入件内乘积，随攻击力的权重计价，倍率不生效"
                                : s === 0
                                  ? "游戏给这项的系数是 0，倍率对它不起作用"
                                  : "几倍看重这项；0 = 几乎不关心（仍保留 1% 用于打破平局）",
                              value: a,
                              onInput: (l) => {
                                const i = Number(l.target.value);
                                Number.isFinite(i) &&
                                  i >= 0 &&
                                  ((Ye.value = {
                                    ...Ye.value,
                                    [e]: Math.floor(i),
                                  }),
                                  K());
                              },
                            }),
                          }),
                          r("td", {
                            class: "num muted",
                            children: n ? "—" : as(s * ca(a)),
                          }),
                        ],
                      },
                      e,
                    );
                  }),
                }),
              ],
            }),
            r(v0, {
              children: [
                "基础系数是游戏自带的定价，不可改。你只需填",
                r("b", { children: "倍率" }),
                "：1 = 按原价， 2 = 看重一倍，",
                r("b", { children: "0 = 几乎不关心" }),
                "。实际权重 = 基础系数 × 倍率。 填 0 时仍保留 ",
                r("b", { children: "1%" }),
                " 权重而非归零——「不关心防御」是相对偏好，那件装备的 防御在游戏里照样生效，权重归零会让求解器宁可空着格子也不去摆它。",
                Ke.value === "product" &&
                  r(R, {
                    children: [
                      r("br", {}),
                      "乘积模式下，增伤与暴击增伤已并入件内乘积、随攻击力的倍率一起缩放，这两行单独的倍率不生效。",
                    ],
                  }),
              ],
            }),
          ],
        }),
      r("label", {
        class: "chk",
        children: [
          r("input", {
            type: "checkbox",
            checked: u1.value,
            onChange: (e) => {
              ((u1.value = e.target.checked), K());
            },
          }),
          "强制填满背包",
        ],
      }),
      r("div", {
        class: "row wrap solver-params",
        children: [
          r("label", {
            children: [
              "时间",
              r("select", {
                value: String(He.value),
                onChange: (e) => {
                  ((He.value = Number(e.target.value)), K());
                },
                children: [
                  r("option", { value: "3000", children: "3 秒" }),
                  r("option", { value: "8000", children: "8 秒" }),
                  r("option", { value: "20000", children: "20 秒" }),
                  r("option", { value: "60000", children: "60 秒" }),
                ],
              }),
            ],
          }),
          r("label", {
            children: [
              "线程",
              r("input", {
                type: "number",
                min: 1,
                max: K1,
                value: c1.value,
                onInput: (e) => {
                  const s = Number(e.target.value);
                  Number.isInteger(s) &&
                    ((c1.value = Math.min(K1, Math.max(1, s))), K());
                },
              }),
            ],
          }),
          r("label", {
            children: [
              "种子",
              r("input", {
                type: "number",
                value: Xe.value,
                onInput: (e) => {
                  const s = Number(e.target.value);
                  Number.isInteger(s) && ((Xe.value = s), K());
                },
              }),
            ],
          }),
        ],
      }),
      r(v0, {
        children: [
          r("b", { children: "计算目标" }),
          "：战力最大化直接用游戏自带的 nPower 系数，不接受自定义权重； 自定义权重在默认权重下与它完全等价。",
          r("br", {}),
          r("b", { children: "强制填满背包" }),
          "：勾上后先比占格数、再比得分，只在能填满时才在填满的方案里挑最优。 填满与不填满的分差通常很小，想让盘面看着整齐可以放心勾。",
          r("br", {}),
          r("b", { children: "参数" }),
          "：各线程独立退火后取最优，最多 ",
          K1,
          " 线程。 时间预算下不保证两次结果逐位相同——按墙钟终止时迭代数必然不同，随机轨迹随即发散。 种子相同只保证起点与算子顺序相同。",
        ],
      }),
    ],
  });
}
function ql({ history: t, width: e = 320, height: s = 64 }) {
  if (t.length < 2) return null;
  const a = Math.max(...t.map((u) => u.ms), 1),
    n = t.map((u) => u.score),
    l = Math.min(...n),
    o = Math.max(...n) - l || 1,
    c = t
      .map((u) => {
        const f = (u.ms / a) * e,
          v = s - ((u.score - l) / o) * (s - 4) - 2;
        return `${f.toFixed(1)},${v.toFixed(1)}`;
      })
      .join(" ");
  return r("svg", {
    class: "curve",
    viewBox: `0 0 ${e} ${s}`,
    width: e,
    height: s,
    role: "img",
    children: [
      r("title", { children: "最优分随时间的变化" }),
      r("polyline", {
        points: c,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.5",
      }),
    ],
  });
}
function _l({ progress: t, usableCells: e }) {
  const s = Math.min(100, (t.elapsedMs / Math.max(1, t.budgetMs)) * 100);
  return r("div", {
    class: "progress",
    children: [
      r("div", {
        class: "bar",
        children: r("i", { style: { width: `${s.toFixed(1)}%` } }),
      }),
      r("span", {
        class: "small muted",
        children: [
          (t.elapsedMs / 1e3).toFixed(1),
          " / ",
          (t.budgetMs / 1e3).toFixed(0),
          " 秒 · 迭代 ",
          t.iterations.toLocaleString("zh-CN"),
          " · 当前最优",
          " ",
          Math.round(t.bestScore).toLocaleString("zh-CN"),
          t.best && ` · 占格 ${t.best.filledCells}/${e}`,
        ],
      }),
    ],
  });
}
const I1 = (t) => t.toLocaleString("zh-CN", { maximumFractionDigits: 1 }),
  Ml = (t) => t !== 2001 && t !== 2002 && t !== 2003;
function Sl({ result: t, explain: e, stale: s, selected: a, onSelect: n }) {
  const l = a;
  return r("section", {
    class: "panel",
    children: [
      r("h2", {
        children: [
          "结果明细",
          s &&
            r("span", { class: "stale", children: "结果已过期，请重新求解" }),
        ],
      }),
      r("p", {
        class: "muted small",
        children:
          "得分与三围汇总见上方「背包摆盘」面板的得分区；这里是逐件核对用的明细。",
      }),
      r("h3", { children: "方案属性汇总" }),
      r("table", {
        class: "tbl",
        children: r("tbody", {
          children: e.totals.map((i) =>
            r(
              "tr",
              {
                children: [
                  r("td", { children: i.attrName }),
                  r("td", {
                    class: "num",
                    children: Ml(i.attr) ? `+${_1(i.value)}` : I1(i.value),
                  }),
                ],
              },
              i.attr,
            ),
          ),
        }),
      }),
      r("h3", { children: "逐件贡献" }),
      r("table", {
        class: "tbl detail",
        children: [
          r("thead", {
            children: r("tr", {
              children: [
                r("th", { children: "法宝" }),
                r("th", { children: "位置" }),
                r("th", { children: "攻击力" }),
                r("th", { children: "防御" }),
                r("th", { children: "生命值" }),
                r("th", { children: "该件得分" }),
              ],
            }),
          }),
          r("tbody", {
            children: e.pieces.map((i, o) =>
              r(
                "tr",
                {
                  class: l === o ? "on" : "",
                  onClick: () => n(l === o ? null : o),
                  children: [
                    r("td", {
                      class: "col-name",
                      children: [
                        r("span", { class: `dot el${i.piece.element}` }),
                        " ",
                        i.piece.name,
                        " ",
                        i.piece.tier,
                        "阶",
                      ],
                    }),
                    r("td", {
                      class: "num col-pos",
                      children: [i.piece.row + 1, ",", i.piece.col + 1],
                    }),
                    r("td", { class: "num col-atk", children: I1(i.finalAtk) }),
                    r("td", { class: "num col-def", children: I1(i.finalDef) }),
                    r("td", { class: "num col-hp", children: I1(i.finalHp) }),
                    r("td", {
                      class: "num col-score",
                      children: I1(
                        ie.value === "power" ? i.powerScore : i.weightedScore,
                      ),
                    }),
                  ],
                },
                o,
              ),
            ),
          }),
        ],
      }),
      l !== null &&
        e.pieces[l] &&
        r("div", {
          class: "sources",
          children: [
            r("h3", {
              children: [
                e.pieces[l].piece.name,
                " ",
                e.pieces[l].piece.tier,
                "阶 的加成来源",
              ],
            }),
            e.pieces[l].sources.length === 0
              ? r("p", {
                  class: "muted small",
                  children:
                    "这件法宝没有收到任何加成——旁边没有能与它联动的同系法宝。",
                })
              : r("ul", {
                  children: e.pieces[l].sources.map((i, o) =>
                    r(
                      "li",
                      {
                        children: [
                          r("b", { children: [i.attrName, " +", _1(i.value)] }),
                          i.kind === "self"
                            ? r(R, {
                                children: [
                                  " ",
                                  "← 本件技能「",
                                  i.skillName,
                                  "」每件 +",
                                  _1(i.perUnit ?? 0),
                                  " ×",
                                  " ",
                                  i.matchedNames?.length ?? 0,
                                  " 件相邻（",
                                  i.matchedNames?.join("、"),
                                  "）",
                                ],
                              })
                            : r(R, {
                                children: [
                                  " ",
                                  "← 相邻的 ",
                                  i.fromName,
                                  " 的技能「",
                                  i.skillName,
                                  "」",
                                ],
                              }),
                          r("div", {
                            class: "muted small",
                            children: i.skillDesc,
                          }),
                        ],
                      },
                      o,
                    ),
                  ),
                }),
          ],
        }),
      r("h3", { children: "未上场与剩余" }),
      r("p", {
        class: "small",
        children: [
          "占用 ",
          t.filledCells,
          " / ",
          t.usableCells,
          " 格",
          t.usableCells > t.filledCells &&
            r("span", {
              class: "muted",
              children: ["，剩 ", t.usableCells - t.filledCells, " 个空格"],
            }),
        ],
      }),
      t.unusedByEquip.length > 0
        ? r("p", {
            class: "small muted",
            children: [
              "未上场：",
              t.unusedByEquip
                .map((i) => `${i.name} ${i.tier}阶 ×${i.count}`)
                .join("、"),
              t.prunedCount > 0 &&
                `；另有 ${t.prunedCount} 件因低阶被同名高阶完全支配而未参与求解`,
            ],
          })
        : r("p", { class: "small muted", children: "已录入的法宝全部上场。" }),
      t.usableCells > t.filledCells &&
        r("p", {
          class: "small muted",
          children:
            t.unusedByEquip.length === 0
              ? "空位填不上是因为已录入的法宝都用完了——再录几件 1~2 格的小件就能补上。"
              : t.unplacedThatFit === 0
                ? "剩下没上场的法宝，形状都塞不进这些空位。"
                : "剩下的法宝放得进空位，但在当前口径下会拉低总分，所以没有摆上去。",
        }),
      r("p", {
        class: "muted small",
        children: [
          "求解用时 ",
          (t.elapsedMs / 1e3).toFixed(1),
          " 秒 · 迭代 ",
          t.iterations.toLocaleString("zh-CN"),
          " 次 · 种子 ",
          t.seed,
          t.stopped && " · 已手动中断",
          t.drift > 1e-6 && ` · 增量校验偏差 ${t.drift.toExponential(2)}`,
        ],
      }),
    ],
  });
}
z.shapes.length;
sr();
mr();
Ir();
const pe = C(null),
  t1 = C(null),
  Ce = C(null),
  B1 = C(null),
  g1 = C(null),
  s1 = C(null),
  be = C(!1),
  Fl = C(null),
  I0 = C([]),
  ye = C([]),
  e0 = C(!1);
let r1 = null;
const Ea = te(() => JSON.stringify([Te.value, c0.value, We.value]));
let Na = "";
const Re = (t) => Math.round(t).toLocaleString("zh-CN"),
  Bl = [
    ["#catalog", "法宝列表"],
    ["#selected", "已选列表"],
    ["#board", "背包"],
    ["#objective", "目标与求解"],
    ["#log", "计算日志"],
  ],
  xl = [
    ["#catalog", "法宝"],
    ["#selected", "已选"],
    ["#board", "背包"],
    ["#objective", "目标"],
  ],
  Cl = (() => {
    const t = /^(\d{4})-(\d{2})-(\d{2})/.exec(z.meta.extractedAt);
    return t
      ? `${t[1]}年${Number(t[2])}月${Number(t[3])}日`
      : z.meta.extractedAt;
  })(),
  Ts = () => {
    if (be.value || at.value) return;
    ((be.value = !0),
      (Ce.value = null),
      (B1.value = null),
      (g1.value = null),
      (s1.value = null),
      (I0.value = []),
      (Be.value = "layout"));
    const t = Ea.value,
      e = (We.value.fillBonus ?? 0) > 0;
    let s = -1 / 0,
      a = 0;
    ((ye.value = [
      `开始计算：${Te.value.reduce((n, l) => n + l.count, 0)} 件候选 · 可用格 ${ue.value} · 口径 ${ie.value === "power" ? "战力" : "自定义权重"} · 预算 ${He.value / 1e3} 秒 · 种子 ${Xe.value}`,
    ]),
      (r1 = Vn(
        z,
        {
          holdings: Te.value,
          board: c0.value,
          objective: We.value,
          budgetMs: He.value,
          seed: Xe.value,
        },
        {
          threads: c1.value,
          onProgress: (n) => {
            if (
              ((Ce.value = n),
              n.best && (B1.value = n.best),
              n.best &&
                u0(
                  e,
                  n.best.filledCells,
                  Math.round(n.bestScore),
                  a,
                  Math.round(s),
                ))
            ) {
              const l = n.best.filledCells,
                i = e && l > a && Math.round(n.bestScore) <= Math.round(s);
              ((ye.value = [
                ...ye.value,
                i
                  ? `[${(n.elapsedMs / 1e3).toFixed(1)}s] 占格提升（线程 ${n.thread + 1}）：${a}/${ue.value} → ${l}/${ue.value}，总分 ${Re(n.bestScore)}（较此前最优 ${Re(n.bestScore - s)}，按「强制填满」取占格更多的方案）`
                  : `[${(n.elapsedMs / 1e3).toFixed(1)}s] 新最优（线程 ${n.thread + 1}）：总分 ${Re(n.bestScore)}（攻 ${Re(n.best.atk)} / 防 ${Re(n.best.def)} / 血 ${Re(n.best.hp)}），占格 ${l}/${ue.value}`,
              ]),
                (s = n.bestScore),
                (a = l));
            }
          },
        },
      )),
      r1.info.then((n) => {
        ((Fl.value = n),
          (ye.value = [
            ...ye.value,
            n.mode === "worker"
              ? `求解在 ${n.threads} 个 Worker 线程中并行进行，各线程种子不同、取最优`
              : "当前环境不支持 Worker，已回退主线程分片执行",
          ]));
      }),
      r1.promise.then((n) => {
        ((pe.value = n),
          (t1.value = Q1(z, n.pieces, We.value)),
          (B1.value = null),
          (I0.value = Jn(n.pieces, c0.value, Te.value)));
        const l = {};
        for (const i of n.pieces) l[i.equipId] = (l[i.equipId] ?? 0) + 1;
        ((Bt.value = l),
          (Na = t),
          (e0.value = !1),
          (be.value = !1),
          (Ce.value = null),
          (ye.value = [
            ...ye.value,
            n.stopped ? "已手动中断，返回当前最优" : "已达耗时上限，自动停止",
            `最终解：总分 ${Re(n.score)}，共 ${n.pieces.length} 件，占格 ${n.filledCells}/${n.usableCells}，累计迭代 ${n.iterations.toLocaleString("zh-CN")} 次`,
          ]),
          (r1 = null));
      }));
  };
function Pl() {
  pe.value && Ea.value !== Na && !be.value && (e0.value || (e0.value = !0));
  const t = at.value,
    e = pe.value?.milestones ?? [],
    a =
      s1.value !== null && e[s1.value]
        ? e[s1.value]
        : (B1.value ?? (pe.value && t1.value ? Dl(pe.value, t1.value) : null));
  return r("main", {
    class: "shell",
    children: [
      r("header", {
        children: [
          r("svg", {
            class: "logo",
            width: "19",
            height: "19",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true",
            children: [
              r("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
              r("line", { x1: "9.5", y1: "3", x2: "9.5", y2: "21" }),
              r("line", { x1: "16", y1: "3", x2: "16", y2: "21" }),
              r("line", { x1: "3", y1: "9.5", x2: "21", y2: "9.5" }),
              r("line", { x1: "3", y1: "16", x2: "21", y2: "16" }),
            ],
          }),
          r("h1", { children: "法宝背包摆放优化器" }),
          r("button", {
            type: "button",
            class: "ghost changelog-btn",
            onClick: () => (lt.value = !0),
            children: "更新日志",
          }),
          r("p", { class: "sub", children: ["数据版本 ", Cl] }),
          r("span", {
            class: "sub bsz-header-sub",
            title: "点击刷新访问量统计",
            onClick: () => triggerBsz(!0),
            style: "cursor:pointer;",
            children: [
              "👀 访问 ",
              r("b", { children: sitePv.value }),
              " · 访客 ",
              r("b", { children: siteUv.value }),
            ],
          }),
          !Ve.value &&
            r("p", {
              class: "warn small",
              children: "当前浏览器不允许本地存储，本次配置不会被保存。",
            }),
          r("nav", {
            class: "anchors small",
            children: Bl.map(([n, l]) => r("a", { href: n, children: l }, n)),
          }),
        ],
      }),
      r("div", { class: "row-2", children: r(Il, {}) }),
      r("div", {
        class: "row-3",
        children: [
          r(Pr, {
            best: a,
            selected: g1.value,
            onSelect: (n) => (g1.value = n),
            milestones: e,
            replayAt: s1.value,
            onReplay: (n) => (s1.value = n),
            running: be.value,
          }),
          r("section", {
            class: "panel fill",
            id: "objective",
            children: [
              r(Al, {}),
              t
                ? r("p", { class: "warn small", children: t })
                : tr.value.map((n) =>
                    r(
                      "p",
                      { class: "muted small", children: ["提示：", n] },
                      n,
                    ),
                  ),
              r("div", {
                class: "solve-cta",
                children: [
                  r("button", {
                    type: "button",
                    class: "primary solve-btn",
                    disabled: !!t || be.value,
                    onClick: Ts,
                    children: be.value ? "计算中…" : "开始计算",
                  }),
                  be.value &&
                    r("button", {
                      type: "button",
                      onClick: () => r1?.stop(),
                      children: "停止并取当前最优",
                    }),
                ],
              }),
              r("button", {
                type: "button",
                class: "ghost clear-btn",
                onClick: () => {
                  confirm("清空全部录入与配置？此操作不可撤销。") &&
                    (lr(),
                    (pe.value = null),
                    (t1.value = null),
                    (B1.value = null),
                    (ye.value = []),
                    K());
                },
                children: "清空全部输入",
              }),
              be.value &&
                Ce.value &&
                r(_l, { progress: Ce.value, usableCells: ue.value }),
              I0.value.length > 0 &&
                r("div", {
                  class: "warn small",
                  children: [
                    r("b", { children: "方案未通过合法性校验：" }),
                    r("ul", {
                      children: I0.value.map((n) =>
                        r("li", { children: n }, n),
                      ),
                    }),
                  ],
                }),
            ],
          }),
          r("section", {
            class: "panel fill",
            id: "log",
            children: [
              r("h2", { children: "计算日志" }),
              r("div", {
                class: "log",
                children:
                  ye.value.length === 0
                    ? r("p", { class: "muted small", children: "未在计算" })
                    : ye.value.map((n, l) =>
                        r(
                          "div",
                          {
                            class: n.startsWith("[") ? "log-best" : "log-info",
                            children: n,
                          },
                          l,
                        ),
                      ),
              }),
              pe.value &&
                pe.value.history.length > 2 &&
                r(R, {
                  children: [
                    r("h3", { children: "收敛曲线" }),
                    r(ql, { history: pe.value.history, width: 280 }),
                    r("p", {
                      class: "muted small",
                      children:
                        "曲线走平说明再加时间收益有限；仍在上升说明值得调大预算或线程数重跑。",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      pe.value &&
        t1.value &&
        r(Sl, {
          result: pe.value,
          explain: t1.value,
          stale: e0.value,
          selected: g1.value,
          onSelect: (n) => (g1.value = n),
        }),
      r("footer", {
        class: "muted small",
        children: [
          r("div", {
            class: "busuanzi-stat",
            children: [
              r("span", {
                id: "busuanzi_container_site_pv",
                children: [
                  "👀 本站总访问量 ",
                  r("span", {
                    id: "busuanzi_value_site_pv",
                    children: sitePv.value,
                  }),
                  " 次",
                ],
              }),
              r("span", {
                id: "busuanzi_container_site_uv",
                children: [
                  " · 访客数 ",
                  r("span", {
                    id: "busuanzi_value_site_uv",
                    children: siteUv.value,
                  }),
                  " 人",
                ],
              }),
            ],
          }),
          r("div", {
            style: "margin-top:0.35rem;",
            children:
              "机制与公式见 docs/GAME_DATA.md。本工具不修改游戏、不与服务端交互。",
          }),
        ],
      }),
      Ge.value &&
        r(
          "div",
          {
            class: "add-toast small",
            children: [
              "已添加「",
              Ge.value.name,
              "」 · 已选 ",
              Ge.value.count,
              " 件",
            ],
          },
          Ge.value.seq,
        ),
      r("nav", {
        class: "bottom-nav small",
        children: [
          xl.map(([n, l]) =>
            r(
              "a",
              {
                href: n,
                class: "bn-item",
                children: [
                  l,
                  n === "#selected" &&
                    Je.value > 0 &&
                    r("b", { class: "bn-badge", children: Je.value }),
                ],
              },
              n,
            ),
          ),
          be.value
            ? r("span", {
                class: "bn-cta bn-running",
                children: [
                  r("i", {
                    class: "bn-fill",
                    style: {
                      width: `${Math.min(100, ((Ce.value?.elapsedMs ?? 0) / Math.max(1, Ce.value?.budgetMs ?? He.value)) * 100).toFixed(1)}%`,
                    },
                  }),
                  r("span", {
                    class: "bn-label",
                    children: [
                      "求解中 ",
                      ((Ce.value?.elapsedMs ?? 0) / 1e3).toFixed(1),
                      "s",
                    ],
                  }),
                  r("button", {
                    type: "button",
                    class: "bn-stop",
                    onClick: () => r1?.stop(),
                    children: "停止",
                  }),
                ],
              })
            : r("button", {
                type: "button",
                class: "primary bn-cta",
                disabled: !!at.value,
                onClick: Ts,
                children: "开始计算",
              }),
        ],
      }),
      r(dl, {}),
      r(Tr, {}),
    ],
  });
}
const Dl = (t, e) => {
    const s = (a) => e.totals.find((n) => n.attr === a)?.value ?? 0;
    return {
      score: t.score,
      pieces: t.pieces,
      atk: s(2001),
      def: s(2002),
      hp: s(2003),
      filledCells: t.filledCells,
    };
  };
if (typeof window !== "undefined") { window.z = z; window.ACQUIRED_TALENTS = ACQUIRED_TALENTS; }
const Ha = document.getElementById("app");
if (!Ha) throw new Error("#app not found");
Ka(r(Pl, {}), Ha);
