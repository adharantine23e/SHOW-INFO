/*! For license information please see main.72eca811.js.LICENSE.txt */
(() => {
    var t = {
            110: (t, e, n) => {
                "use strict";
                var r = n(441),
                    i = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    a = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    o = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    s = {};

                function l(t) {
                    return r.isMemo(t) ? o : s[t.$$typeof] || i
                }
                s[r.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, s[r.Memo] = o;
                var u = Object.defineProperty,
                    c = Object.getOwnPropertyNames,
                    d = Object.getOwnPropertySymbols,
                    f = Object.getOwnPropertyDescriptor,
                    h = Object.getPrototypeOf,
                    p = Object.prototype;
                t.exports = function t(e, n, r) {
                    if ("string" !== typeof n) {
                        if (p) {
                            var i = h(n);
                            i && i !== p && t(e, i, r)
                        }
                        var o = c(n);
                        d && (o = o.concat(d(n)));
                        for (var s = l(e), y = l(n), m = 0; m < o.length; ++m) {
                            var b = o[m];
                            if (!a[b] && (!r || !r[b]) && (!y || !y[b]) && (!s || !s[b])) {
                                var v = f(n, b);
                                try {
                                    u(e, b, v)
                                } catch (g) {}
                            }
                        }
                    }
                    return e
                }
            },
            725: t => {
                "use strict";
                var e = Object.getOwnPropertySymbols,
                    n = Object.prototype.hasOwnProperty,
                    r = Object.prototype.propertyIsEnumerable;
                t.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var t = new String("abc");
                        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                        for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                                return e[t]
                            })).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                            r[t] = t
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (i) {
                        return !1
                    }
                }() ? Object.assign : function(t, i) {
                    for (var a, o, s = function(t) {
                            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(t)
                        }(t), l = 1; l < arguments.length; l++) {
                        for (var u in a = Object(arguments[l])) n.call(a, u) && (s[u] = a[u]);
                        if (e) {
                            o = e(a);
                            for (var c = 0; c < o.length; c++) r.call(a, o[c]) && (s[o[c]] = a[o[c]])
                        }
                    }
                    return s
                }
            },
            888: (t, e, n) => {
                "use strict";
                var r = n(47);

                function i() {}

                function a() {}
                a.resetWarningCache = i, t.exports = function() {
                    function t(t, e, n, i, a, o) {
                        if (o !== r) {
                            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw s.name = "Invariant Violation", s
                        }
                    }

                    function e() {
                        return t
                    }
                    t.isRequired = t;
                    var n = {
                        array: t,
                        bigint: t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: e,
                        element: t,
                        elementType: t,
                        instanceOf: e,
                        node: t,
                        objectOf: e,
                        oneOf: e,
                        oneOfType: e,
                        shape: e,
                        exact: e,
                        checkPropTypes: a,
                        resetWarningCache: i
                    };
                    return n.PropTypes = n, n
                }
            },
            7: (t, e, n) => {
                t.exports = n(888)()
            },
            47: t => {
                "use strict";
                t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            463: (t, e, n) => {
                "use strict";
                var r = n(791),
                    i = n(725),
                    a = n(296);

                function o(t) {
                    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!r) throw Error(o(227));

                function s(t, e, n, r, i, a, o, s, l) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        e.apply(n, u)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var l = !1,
                    u = null,
                    c = !1,
                    d = null,
                    f = {
                        onError: function(t) {
                            l = !0, u = t
                        }
                    };

                function h(t, e, n, r, i, a, o, c, d) {
                    l = !1, u = null, s.apply(f, arguments)
                }
                var p = null,
                    y = null,
                    m = null;

                function b(t, e, n) {
                    var r = t.type || "unknown-event";
                    t.currentTarget = m(n),
                        function(t, e, n, r, i, a, s, f, p) {
                            if (h.apply(this, arguments), l) {
                                if (!l) throw Error(o(198));
                                var y = u;
                                l = !1, u = null, c || (c = !0, d = y)
                            }
                        }(r, e, void 0, t), t.currentTarget = null
                }
                var v = null,
                    g = {};

                function w() {
                    if (v)
                        for (var t in g) {
                            var e = g[t],
                                n = v.indexOf(t);
                            if (!(-1 < n)) throw Error(o(96, t));
                            if (!S[n]) {
                                if (!e.extractEvents) throw Error(o(97, t));
                                for (var r in S[n] = e, n = e.eventTypes) {
                                    var i = void 0,
                                        a = n[r],
                                        s = e,
                                        l = r;
                                    if (x.hasOwnProperty(l)) throw Error(o(99, l));
                                    x[l] = a;
                                    var u = a.phasedRegistrationNames;
                                    if (u) {
                                        for (i in u) u.hasOwnProperty(i) && _(u[i], s, l);
                                        i = !0
                                    } else a.registrationName ? (_(a.registrationName, s, l), i = !0) : i = !1;
                                    if (!i) throw Error(o(98, r, t))
                                }
                            }
                        }
                }

                function _(t, e, n) {
                    if (T[t]) throw Error(o(100, t));
                    T[t] = e, k[t] = e.eventTypes[n].dependencies
                }
                var S = [],
                    x = {},
                    T = {},
                    k = {};

                function I(t) {
                    var e, n = !1;
                    for (e in t)
                        if (t.hasOwnProperty(e)) {
                            var r = t[e];
                            if (!g.hasOwnProperty(e) || g[e] !== r) {
                                if (g[e]) throw Error(o(102, e));
                                g[e] = r, n = !0
                            }
                        } n && w()
                }
                var E = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    O = null,
                    A = null,
                    C = null;

                function N(t) {
                    if (t = y(t)) {
                        if ("function" !== typeof O) throw Error(o(280));
                        var e = t.stateNode;
                        e && (e = p(e), O(t.stateNode, t.type, e))
                    }
                }

                function D(t) {
                    A ? C ? C.push(t) : C = [t] : A = t
                }

                function M() {
                    if (A) {
                        var t = A,
                            e = C;
                        if (C = A = null, N(t), e)
                            for (t = 0; t < e.length; t++) N(e[t])
                    }
                }

                function B(t, e) {
                    return t(e)
                }

                function P(t, e, n, r, i) {
                    return t(e, n, r, i)
                }

                function F() {}
                var L = B,
                    R = !1,
                    U = !1;

                function z() {
                    null === A && null === C || (F(), M())
                }

                function j(t, e, n) {
                    if (U) return t(e, n);
                    U = !0;
                    try {
                        return L(t, e, n)
                    } finally {
                        U = !1, z()
                    }
                }
                var V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    W = Object.prototype.hasOwnProperty,
                    Y = {},
                    H = {};

                function $(t, e, n, r, i, a) {
                    this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = a
                }
                var K = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(t) {
                    K[t] = new $(t, 0, !1, t, null, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(t) {
                    var e = t[0];
                    K[e] = new $(e, 1, !1, t[1], null, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(t) {
                    K[t] = new $(t, 2, !1, t.toLowerCase(), null, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(t) {
                    K[t] = new $(t, 2, !1, t, null, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(t) {
                    K[t] = new $(t, 3, !1, t.toLowerCase(), null, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(t) {
                    K[t] = new $(t, 3, !0, t, null, !1)
                })), ["capture", "download"].forEach((function(t) {
                    K[t] = new $(t, 4, !1, t, null, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(t) {
                    K[t] = new $(t, 6, !1, t, null, !1)
                })), ["rowSpan", "start"].forEach((function(t) {
                    K[t] = new $(t, 5, !1, t.toLowerCase(), null, !1)
                }));
                var Q = /[\-:]([a-z])/g;

                function q(t) {
                    return t[1].toUpperCase()
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(t) {
                    var e = t.replace(Q, q);
                    K[e] = new $(e, 1, !1, t, null, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(t) {
                    var e = t.replace(Q, q);
                    K[e] = new $(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(t) {
                    var e = t.replace(Q, q);
                    K[e] = new $(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(t) {
                    K[t] = new $(t, 1, !1, t.toLowerCase(), null, !1)
                })), K.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(t) {
                    K[t] = new $(t, 1, !1, t.toLowerCase(), null, !0)
                }));
                var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

                function X(t, e, n, r) {
                    var i = K.hasOwnProperty(e) ? K[e] : null;
                    (null !== i ? 0 === i.type : !r && (2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]))) || (function(t, e, n, r) {
                        if (null === e || "undefined" === typeof e || function(t, e, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof e) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                                    default:
                                        return !1
                                }
                            }(t, e, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !e;
                            case 4:
                                return !1 === e;
                            case 5:
                                return isNaN(e);
                            case 6:
                                return isNaN(e) || 1 > e
                        }
                        return !1
                    }(e, n, i, r) && (n = null), r || null === i ? function(t) {
                        return !!W.call(H, t) || !W.call(Y, t) && (V.test(t) ? H[t] = !0 : (Y[t] = !0, !1))
                    }(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = null === n ? 3 !== i.type && "" : n : (e = i.attributeName, r = i.attributeNamespace, null === n ? t.removeAttribute(e) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
                }
                G.hasOwnProperty("ReactCurrentDispatcher") || (G.ReactCurrentDispatcher = {
                    current: null
                }), G.hasOwnProperty("ReactCurrentBatchConfig") || (G.ReactCurrentBatchConfig = {
                    suspense: null
                });
                var J = /^(.*)[\\\/]/,
                    Z = "function" === typeof Symbol && Symbol.for,
                    tt = Z ? Symbol.for("react.element") : 60103,
                    et = Z ? Symbol.for("react.portal") : 60106,
                    nt = Z ? Symbol.for("react.fragment") : 60107,
                    rt = Z ? Symbol.for("react.strict_mode") : 60108,
                    it = Z ? Symbol.for("react.profiler") : 60114,
                    at = Z ? Symbol.for("react.provider") : 60109,
                    ot = Z ? Symbol.for("react.context") : 60110,
                    st = Z ? Symbol.for("react.concurrent_mode") : 60111,
                    lt = Z ? Symbol.for("react.forward_ref") : 60112,
                    ut = Z ? Symbol.for("react.suspense") : 60113,
                    ct = Z ? Symbol.for("react.suspense_list") : 60120,
                    dt = Z ? Symbol.for("react.memo") : 60115,
                    ft = Z ? Symbol.for("react.lazy") : 60116,
                    ht = Z ? Symbol.for("react.block") : 60121,
                    pt = "function" === typeof Symbol && Symbol.iterator;

                function yt(t) {
                    return null === t || "object" !== typeof t ? null : "function" === typeof(t = pt && t[pt] || t["@@iterator"]) ? t : null
                }

                function mt(t) {
                    if (null == t) return null;
                    if ("function" === typeof t) return t.displayName || t.name || null;
                    if ("string" === typeof t) return t;
                    switch (t) {
                        case nt:
                            return "Fragment";
                        case et:
                            return "Portal";
                        case it:
                            return "Profiler";
                        case rt:
                            return "StrictMode";
                        case ut:
                            return "Suspense";
                        case ct:
                            return "SuspenseList"
                    }
                    if ("object" === typeof t) switch (t.$$typeof) {
                        case ot:
                            return "Context.Consumer";
                        case at:
                            return "Context.Provider";
                        case lt:
                            var e = t.render;
                            return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case dt:
                            return mt(t.type);
                        case ht:
                            return mt(t.render);
                        case ft:
                            if (t = 1 === t._status ? t._result : null) return mt(t)
                    }
                    return null
                }

                function bt(t) {
                    var e = "";
                    do {
                        t: switch (t.tag) {
                            case 3:
                            case 4:
                            case 6:
                            case 7:
                            case 10:
                            case 9:
                                var n = "";
                                break t;
                            default:
                                var r = t._debugOwner,
                                    i = t._debugSource,
                                    a = mt(t.type);
                                n = null, r && (n = mt(r.type)), r = a, a = "", i ? a = " (at " + i.fileName.replace(J, "") + ":" + i.lineNumber + ")" : n && (a = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + a
                        }
                        e += n,
                        t = t.return
                    } while (t);
                    return e
                }

                function vt(t) {
                    switch (typeof t) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return t;
                        default:
                            return ""
                    }
                }

                function gt(t) {
                    var e = t.type;
                    return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
                }

                function wt(t) {
                    t._valueTracker || (t._valueTracker = function(t) {
                        var e = gt(t) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                            r = "" + t[e];
                        if (!t.hasOwnProperty(e) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var i = n.get,
                                a = n.set;
                            return Object.defineProperty(t, e, {
                                configurable: !0,
                                get: function() {
                                    return i.call(this)
                                },
                                set: function(t) {
                                    r = "" + t, a.call(this, t)
                                }
                            }), Object.defineProperty(t, e, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(t) {
                                    r = "" + t
                                },
                                stopTracking: function() {
                                    t._valueTracker = null, delete t[e]
                                }
                            }
                        }
                    }(t))
                }

                function _t(t) {
                    if (!t) return !1;
                    var e = t._valueTracker;
                    if (!e) return !0;
                    var n = e.getValue(),
                        r = "";
                    return t && (r = gt(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== n && (e.setValue(t), !0)
                }

                function St(t, e) {
                    var n = e.checked;
                    return i({}, e, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : t._wrapperState.initialChecked
                    })
                }

                function xt(t, e) {
                    var n = null == e.defaultValue ? "" : e.defaultValue,
                        r = null != e.checked ? e.checked : e.defaultChecked;
                    n = vt(null != e.value ? e.value : n), t._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
                    }
                }

                function Tt(t, e) {
                    null != (e = e.checked) && X(t, "checked", e, !1)
                }

                function kt(t, e) {
                    Tt(t, e);
                    var n = vt(e.value),
                        r = e.type;
                    if (null != n) "number" === r ? (0 === n && "" === t.value || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void t.removeAttribute("value");
                    e.hasOwnProperty("value") ? Et(t, e.type, n) : e.hasOwnProperty("defaultValue") && Et(t, e.type, vt(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
                }

                function It(t, e, n) {
                    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
                        var r = e.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== e.value && null !== e.value)) return;
                        e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
                    }
                    "" !== (n = t.name) && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, "" !== n && (t.name = n)
                }

                function Et(t, e, n) {
                    "number" === e && t.ownerDocument.activeElement === t || (null == n ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
                }

                function Ot(t, e) {
                    return t = i({
                        children: void 0
                    }, e), (e = function(t) {
                        var e = "";
                        return r.Children.forEach(t, (function(t) {
                            null != t && (e += t)
                        })), e
                    }(e.children)) && (t.children = e), t
                }

                function At(t, e, n, r) {
                    if (t = t.options, e) {
                        e = {};
                        for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
                        for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0)
                    } else {
                        for (n = "" + vt(n), e = null, i = 0; i < t.length; i++) {
                            if (t[i].value === n) return t[i].selected = !0, void(r && (t[i].defaultSelected = !0));
                            null !== e || t[i].disabled || (e = t[i])
                        }
                        null !== e && (e.selected = !0)
                    }
                }

                function Ct(t, e) {
                    if (null != e.dangerouslySetInnerHTML) throw Error(o(91));
                    return i({}, e, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + t._wrapperState.initialValue
                    })
                }

                function Nt(t, e) {
                    var n = e.value;
                    if (null == n) {
                        if (n = e.children, e = e.defaultValue, null != n) {
                            if (null != e) throw Error(o(92));
                            if (Array.isArray(n)) {
                                if (!(1 >= n.length)) throw Error(o(93));
                                n = n[0]
                            }
                            e = n
                        }
                        null == e && (e = ""), n = e
                    }
                    t._wrapperState = {
                        initialValue: vt(n)
                    }
                }

                function Dt(t, e) {
                    var n = vt(e.value),
                        r = vt(e.defaultValue);
                    null != n && ((n = "" + n) !== t.value && (t.value = n), null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)), null != r && (t.defaultValue = "" + r)
                }

                function Mt(t) {
                    var e = t.textContent;
                    e === t._wrapperState.initialValue && "" !== e && null !== e && (t.value = e)
                }
                var Bt = "http://www.w3.org/1999/xhtml",
                    Pt = "http://www.w3.org/2000/svg";

                function Ft(t) {
                    switch (t) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function Lt(t, e) {
                    return null == t || "http://www.w3.org/1999/xhtml" === t ? Ft(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
                }
                var Rt, Ut, zt = (Ut = function(t, e) {
                    if (t.namespaceURI !== Pt || "innerHTML" in t) t.innerHTML = e;
                    else {
                        for ((Rt = Rt || document.createElement("div")).innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Rt.firstChild; t.firstChild;) t.removeChild(t.firstChild);
                        for (; e.firstChild;) t.appendChild(e.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, e, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return Ut(t, e)
                    }))
                } : Ut);

                function jt(t, e) {
                    if (e) {
                        var n = t.firstChild;
                        if (n && n === t.lastChild && 3 === n.nodeType) return void(n.nodeValue = e)
                    }
                    t.textContent = e
                }

                function Vt(t, e) {
                    var n = {};
                    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
                }
                var Wt = {
                        animationend: Vt("Animation", "AnimationEnd"),
                        animationiteration: Vt("Animation", "AnimationIteration"),
                        animationstart: Vt("Animation", "AnimationStart"),
                        transitionend: Vt("Transition", "TransitionEnd")
                    },
                    Yt = {},
                    Ht = {};

                function $t(t) {
                    if (Yt[t]) return Yt[t];
                    if (!Wt[t]) return t;
                    var e, n = Wt[t];
                    for (e in n)
                        if (n.hasOwnProperty(e) && e in Ht) return Yt[t] = n[e];
                    return t
                }
                E && (Ht = document.createElement("div").style, "AnimationEvent" in window || (delete Wt.animationend.animation, delete Wt.animationiteration.animation, delete Wt.animationstart.animation), "TransitionEvent" in window || delete Wt.transitionend.transition);
                var Kt = $t("animationend"),
                    Qt = $t("animationiteration"),
                    qt = $t("animationstart"),
                    Gt = $t("transitionend"),
                    Xt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Jt = new("function" === typeof WeakMap ? WeakMap : Map);

                function Zt(t) {
                    var e = Jt.get(t);
                    return void 0 === e && (e = new Map, Jt.set(t, e)), e
                }

                function te(t) {
                    var e = t,
                        n = t;
                    if (t.alternate)
                        for (; e.return;) e = e.return;
                    else {
                        t = e;
                        do {
                            0 !== (1026 & (e = t).effectTag) && (n = e.return), t = e.return
                        } while (t)
                    }
                    return 3 === e.tag ? n : null
                }

                function ee(t) {
                    if (13 === t.tag) {
                        var e = t.memoizedState;
                        if (null === e && (null !== (t = t.alternate) && (e = t.memoizedState)), null !== e) return e.dehydrated
                    }
                    return null
                }

                function ne(t) {
                    if (te(t) !== t) throw Error(o(188))
                }

                function re(t) {
                    if (t = function(t) {
                            var e = t.alternate;
                            if (!e) {
                                if (null === (e = te(t))) throw Error(o(188));
                                return e !== t ? null : t
                            }
                            for (var n = t, r = e;;) {
                                var i = n.return;
                                if (null === i) break;
                                var a = i.alternate;
                                if (null === a) {
                                    if (null !== (r = i.return)) {
                                        n = r;
                                        continue
                                    }
                                    break
                                }
                                if (i.child === a.child) {
                                    for (a = i.child; a;) {
                                        if (a === n) return ne(i), t;
                                        if (a === r) return ne(i), e;
                                        a = a.sibling
                                    }
                                    throw Error(o(188))
                                }
                                if (n.return !== r.return) n = i, r = a;
                                else {
                                    for (var s = !1, l = i.child; l;) {
                                        if (l === n) {
                                            s = !0, n = i, r = a;
                                            break
                                        }
                                        if (l === r) {
                                            s = !0, r = i, n = a;
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!s) {
                                        for (l = a.child; l;) {
                                            if (l === n) {
                                                s = !0, n = a, r = i;
                                                break
                                            }
                                            if (l === r) {
                                                s = !0, r = a, n = i;
                                                break
                                            }
                                            l = l.sibling
                                        }
                                        if (!s) throw Error(o(189))
                                    }
                                }
                                if (n.alternate !== r) throw Error(o(190))
                            }
                            if (3 !== n.tag) throw Error(o(188));
                            return n.stateNode.current === n ? t : e
                        }(t), !t) return null;
                    for (var e = t;;) {
                        if (5 === e.tag || 6 === e.tag) return e;
                        if (e.child) e.child.return = e, e = e.child;
                        else {
                            if (e === t) break;
                            for (; !e.sibling;) {
                                if (!e.return || e.return === t) return null;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                    }
                    return null
                }

                function ie(t, e) {
                    if (null == e) throw Error(o(30));
                    return null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e), t) : (t.push(e), t) : Array.isArray(e) ? [t].concat(e) : [t, e]
                }

                function ae(t, e, n) {
                    Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
                }
                var oe = null;

                function se(t) {
                    if (t) {
                        var e = t._dispatchListeners,
                            n = t._dispatchInstances;
                        if (Array.isArray(e))
                            for (var r = 0; r < e.length && !t.isPropagationStopped(); r++) b(t, e[r], n[r]);
                        else e && b(t, e, n);
                        t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t)
                    }
                }

                function le(t) {
                    if (null !== t && (oe = ie(oe, t)), t = oe, oe = null, t) {
                        if (ae(t, se), oe) throw Error(o(95));
                        if (c) throw t = d, c = !1, d = null, t
                    }
                }

                function ue(t) {
                    return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
                }

                function ce(t) {
                    if (!E) return !1;
                    var e = (t = "on" + t) in document;
                    return e || ((e = document.createElement("div")).setAttribute(t, "return;"), e = "function" === typeof e[t]), e
                }
                var de = [];

                function fe(t) {
                    t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, 10 > de.length && de.push(t)
                }

                function he(t, e, n, r) {
                    if (de.length) {
                        var i = de.pop();
                        return i.topLevelType = t, i.eventSystemFlags = r, i.nativeEvent = e, i.targetInst = n, i
                    }
                    return {
                        topLevelType: t,
                        eventSystemFlags: r,
                        nativeEvent: e,
                        targetInst: n,
                        ancestors: []
                    }
                }

                function pe(t) {
                    var e = t.targetInst,
                        n = e;
                    do {
                        if (!n) {
                            t.ancestors.push(n);
                            break
                        }
                        var r = n;
                        if (3 === r.tag) r = r.stateNode.containerInfo;
                        else {
                            for (; r.return;) r = r.return;
                            r = 3 !== r.tag ? null : r.stateNode.containerInfo
                        }
                        if (!r) break;
                        5 !== (e = n.tag) && 6 !== e || t.ancestors.push(n), n = Mn(r)
                    } while (n);
                    for (n = 0; n < t.ancestors.length; n++) {
                        e = t.ancestors[n];
                        var i = ue(t.nativeEvent);
                        r = t.topLevelType;
                        var a = t.nativeEvent,
                            o = t.eventSystemFlags;
                        0 === n && (o |= 64);
                        for (var s = null, l = 0; l < S.length; l++) {
                            var u = S[l];
                            u && (u = u.extractEvents(r, e, a, i, o)) && (s = ie(s, u))
                        }
                        le(s)
                    }
                }

                function ye(t, e, n) {
                    if (!n.has(t)) {
                        switch (t) {
                            case "scroll":
                                qe(e, "scroll", !0);
                                break;
                            case "focus":
                            case "blur":
                                qe(e, "focus", !0), qe(e, "blur", !0), n.set("blur", null), n.set("focus", null);
                                break;
                            case "cancel":
                            case "close":
                                ce(t) && qe(e, t, !0);
                                break;
                            case "invalid":
                            case "submit":
                            case "reset":
                                break;
                            default:
                                -1 === Xt.indexOf(t) && Qe(t, e)
                        }
                        n.set(t, null)
                    }
                }
                var me, be, ve, ge = !1,
                    we = [],
                    _e = null,
                    Se = null,
                    xe = null,
                    Te = new Map,
                    ke = new Map,
                    Ie = [],
                    Ee = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
                    Oe = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

                function Ae(t, e, n, r, i) {
                    return {
                        blockedOn: t,
                        topLevelType: e,
                        eventSystemFlags: 32 | n,
                        nativeEvent: i,
                        container: r
                    }
                }

                function Ce(t, e) {
                    switch (t) {
                        case "focus":
                        case "blur":
                            _e = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Se = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            xe = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Te.delete(e.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            ke.delete(e.pointerId)
                    }
                }

                function Ne(t, e, n, r, i, a) {
                    return null === t || t.nativeEvent !== a ? (t = Ae(e, n, r, i, a), null !== e && (null !== (e = Bn(e)) && be(e)), t) : (t.eventSystemFlags |= r, t)
                }

                function De(t) {
                    var e = Mn(t.target);
                    if (null !== e) {
                        var n = te(e);
                        if (null !== n)
                            if (13 === (e = n.tag)) {
                                if (null !== (e = ee(n))) return t.blockedOn = e, void a.unstable_runWithPriority(t.priority, (function() {
                                    ve(n)
                                }))
                            } else if (3 === e && n.stateNode.hydrate) return void(t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    t.blockedOn = null
                }

                function Me(t) {
                    if (null !== t.blockedOn) return !1;
                    var e = Ze(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
                    if (null !== e) {
                        var n = Bn(e);
                        return null !== n && be(n), t.blockedOn = e, !1
                    }
                    return !0
                }

                function Be(t, e, n) {
                    Me(t) && n.delete(e)
                }

                function Pe() {
                    for (ge = !1; 0 < we.length;) {
                        var t = we[0];
                        if (null !== t.blockedOn) {
                            null !== (t = Bn(t.blockedOn)) && me(t);
                            break
                        }
                        var e = Ze(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
                        null !== e ? t.blockedOn = e : we.shift()
                    }
                    null !== _e && Me(_e) && (_e = null), null !== Se && Me(Se) && (Se = null), null !== xe && Me(xe) && (xe = null), Te.forEach(Be), ke.forEach(Be)
                }

                function Fe(t, e) {
                    t.blockedOn === e && (t.blockedOn = null, ge || (ge = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Pe)))
                }

                function Le(t) {
                    function e(e) {
                        return Fe(e, t)
                    }
                    if (0 < we.length) {
                        Fe(we[0], t);
                        for (var n = 1; n < we.length; n++) {
                            var r = we[n];
                            r.blockedOn === t && (r.blockedOn = null)
                        }
                    }
                    for (null !== _e && Fe(_e, t), null !== Se && Fe(Se, t), null !== xe && Fe(xe, t), Te.forEach(e), ke.forEach(e), n = 0; n < Ie.length; n++)(r = Ie[n]).blockedOn === t && (r.blockedOn = null);
                    for (; 0 < Ie.length && null === (n = Ie[0]).blockedOn;) De(n), null === n.blockedOn && Ie.shift()
                }
                var Re = {},
                    Ue = new Map,
                    ze = new Map,
                    je = ["abort", "abort", Kt, "animationEnd", Qt, "animationIteration", qt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Gt, "transitionEnd", "waiting", "waiting"];

                function Ve(t, e) {
                    for (var n = 0; n < t.length; n += 2) {
                        var r = t[n],
                            i = t[n + 1],
                            a = "on" + (i[0].toUpperCase() + i.slice(1));
                        a = {
                            phasedRegistrationNames: {
                                bubbled: a,
                                captured: a + "Capture"
                            },
                            dependencies: [r],
                            eventPriority: e
                        }, ze.set(r, e), Ue.set(r, a), Re[i] = a
                    }
                }
                Ve("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Ve("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Ve(je, 2);
                for (var We = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Ye = 0; Ye < We.length; Ye++) ze.set(We[Ye], 0);
                var He = a.unstable_UserBlockingPriority,
                    $e = a.unstable_runWithPriority,
                    Ke = !0;

                function Qe(t, e) {
                    qe(e, t, !1)
                }

                function qe(t, e, n) {
                    var r = ze.get(e);
                    switch (void 0 === r ? 2 : r) {
                        case 0:
                            r = Ge.bind(null, e, 1, t);
                            break;
                        case 1:
                            r = Xe.bind(null, e, 1, t);
                            break;
                        default:
                            r = Je.bind(null, e, 1, t)
                    }
                    n ? t.addEventListener(e, r, !0) : t.addEventListener(e, r, !1)
                }

                function Ge(t, e, n, r) {
                    R || F();
                    var i = Je,
                        a = R;
                    R = !0;
                    try {
                        P(i, t, e, n, r)
                    } finally {
                        (R = a) || z()
                    }
                }

                function Xe(t, e, n, r) {
                    $e(He, Je.bind(null, t, e, n, r))
                }

                function Je(t, e, n, r) {
                    if (Ke)
                        if (0 < we.length && -1 < Ee.indexOf(t)) t = Ae(null, t, e, n, r), we.push(t);
                        else {
                            var i = Ze(t, e, n, r);
                            if (null === i) Ce(t, r);
                            else if (-1 < Ee.indexOf(t)) t = Ae(i, t, e, n, r), we.push(t);
                            else if (! function(t, e, n, r, i) {
                                    switch (e) {
                                        case "focus":
                                            return _e = Ne(_e, t, e, n, r, i), !0;
                                        case "dragenter":
                                            return Se = Ne(Se, t, e, n, r, i), !0;
                                        case "mouseover":
                                            return xe = Ne(xe, t, e, n, r, i), !0;
                                        case "pointerover":
                                            var a = i.pointerId;
                                            return Te.set(a, Ne(Te.get(a) || null, t, e, n, r, i)), !0;
                                        case "gotpointercapture":
                                            return a = i.pointerId, ke.set(a, Ne(ke.get(a) || null, t, e, n, r, i)), !0
                                    }
                                    return !1
                                }(i, t, e, n, r)) {
                                Ce(t, r), t = he(t, r, null, e);
                                try {
                                    j(pe, t)
                                } finally {
                                    fe(t)
                                }
                            }
                        }
                }

                function Ze(t, e, n, r) {
                    if (null !== (n = Mn(n = ue(r)))) {
                        var i = te(n);
                        if (null === i) n = null;
                        else {
                            var a = i.tag;
                            if (13 === a) {
                                if (null !== (n = ee(i))) return n;
                                n = null
                            } else if (3 === a) {
                                if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                                n = null
                            } else i !== n && (n = null)
                        }
                    }
                    t = he(t, r, n, e);
                    try {
                        j(pe, t)
                    } finally {
                        fe(t)
                    }
                    return null
                }
                var tn = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    en = ["Webkit", "ms", "Moz", "O"];

                function nn(t, e, n) {
                    return null == e || "boolean" === typeof e || "" === e ? "" : n || "number" !== typeof e || 0 === e || tn.hasOwnProperty(t) && tn[t] ? ("" + e).trim() : e + "px"
                }

                function rn(t, e) {
                    for (var n in t = t.style, e)
                        if (e.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                i = nn(n, e[n], r);
                            "float" === n && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i
                        }
                }
                Object.keys(tn).forEach((function(t) {
                    en.forEach((function(e) {
                        e = e + t.charAt(0).toUpperCase() + t.substring(1), tn[e] = tn[t]
                    }))
                }));
                var an = i({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function on(t, e) {
                    if (e) {
                        if (an[t] && (null != e.children || null != e.dangerouslySetInnerHTML)) throw Error(o(137, t, ""));
                        if (null != e.dangerouslySetInnerHTML) {
                            if (null != e.children) throw Error(o(60));
                            if ("object" !== typeof e.dangerouslySetInnerHTML || !("__html" in e.dangerouslySetInnerHTML)) throw Error(o(61))
                        }
                        if (null != e.style && "object" !== typeof e.style) throw Error(o(62, ""))
                    }
                }

                function sn(t, e) {
                    if (-1 === t.indexOf("-")) return "string" === typeof e.is;
                    switch (t) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var ln = Bt;

                function un(t, e) {
                    var n = Zt(t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument);
                    e = k[e];
                    for (var r = 0; r < e.length; r++) ye(e[r], t, n)
                }

                function cn() {}

                function dn(t) {
                    if ("undefined" === typeof(t = t || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return t.activeElement || t.body
                    } catch (e) {
                        return t.body
                    }
                }

                function fn(t) {
                    for (; t && t.firstChild;) t = t.firstChild;
                    return t
                }

                function hn(t, e) {
                    var n, r = fn(t);
                    for (t = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = t + r.textContent.length, t <= e && n >= e) return {
                                node: r,
                                offset: e - t
                            };
                            t = n
                        }
                        t: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break t
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = fn(r)
                    }
                }

                function pn(t, e) {
                    return !(!t || !e) && (t === e || (!t || 3 !== t.nodeType) && (e && 3 === e.nodeType ? pn(t, e.parentNode) : "contains" in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
                }

                function yn() {
                    for (var t = window, e = dn(); e instanceof t.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof e.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        e = dn((t = e.contentWindow).document)
                    }
                    return e
                }

                function mn(t) {
                    var e = t && t.nodeName && t.nodeName.toLowerCase();
                    return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
                }
                var bn = "$",
                    vn = "/$",
                    gn = "$?",
                    wn = "$!",
                    _n = null,
                    Sn = null;

                function xn(t, e) {
                    switch (t) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!e.autoFocus
                    }
                    return !1
                }

                function Tn(t, e) {
                    return "textarea" === t || "option" === t || "noscript" === t || "string" === typeof e.children || "number" === typeof e.children || "object" === typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
                }
                var kn = "function" === typeof setTimeout ? setTimeout : void 0,
                    In = "function" === typeof clearTimeout ? clearTimeout : void 0;

                function En(t) {
                    for (; null != t; t = t.nextSibling) {
                        var e = t.nodeType;
                        if (1 === e || 3 === e) break
                    }
                    return t
                }

                function On(t) {
                    t = t.previousSibling;
                    for (var e = 0; t;) {
                        if (8 === t.nodeType) {
                            var n = t.data;
                            if (n === bn || n === wn || n === gn) {
                                if (0 === e) return t;
                                e--
                            } else n === vn && e++
                        }
                        t = t.previousSibling
                    }
                    return null
                }
                var An = Math.random().toString(36).slice(2),
                    Cn = "__reactInternalInstance$" + An,
                    Nn = "__reactEventHandlers$" + An,
                    Dn = "__reactContainere$" + An;

                function Mn(t) {
                    var e = t[Cn];
                    if (e) return e;
                    for (var n = t.parentNode; n;) {
                        if (e = n[Dn] || n[Cn]) {
                            if (n = e.alternate, null !== e.child || null !== n && null !== n.child)
                                for (t = On(t); null !== t;) {
                                    if (n = t[Cn]) return n;
                                    t = On(t)
                                }
                            return e
                        }
                        n = (t = n).parentNode
                    }
                    return null
                }

                function Bn(t) {
                    return !(t = t[Cn] || t[Dn]) || 5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag ? null : t
                }

                function Pn(t) {
                    if (5 === t.tag || 6 === t.tag) return t.stateNode;
                    throw Error(o(33))
                }

                function Fn(t) {
                    return t[Nn] || null
                }

                function Ln(t) {
                    do {
                        t = t.return
                    } while (t && 5 !== t.tag);
                    return t || null
                }

                function Rn(t, e) {
                    var n = t.stateNode;
                    if (!n) return null;
                    var r = p(n);
                    if (!r) return null;
                    n = r[e];
                    t: switch (e) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !r;
                            break t;
                        default:
                            t = !1
                    }
                    if (t) return null;
                    if (n && "function" !== typeof n) throw Error(o(231, e, typeof n));
                    return n
                }

                function Un(t, e, n) {
                    (e = Rn(t, n.dispatchConfig.phasedRegistrationNames[e])) && (n._dispatchListeners = ie(n._dispatchListeners, e), n._dispatchInstances = ie(n._dispatchInstances, t))
                }

                function zn(t) {
                    if (t && t.dispatchConfig.phasedRegistrationNames) {
                        for (var e = t._targetInst, n = []; e;) n.push(e), e = Ln(e);
                        for (e = n.length; 0 < e--;) Un(n[e], "captured", t);
                        for (e = 0; e < n.length; e++) Un(n[e], "bubbled", t)
                    }
                }

                function jn(t, e, n) {
                    t && n && n.dispatchConfig.registrationName && (e = Rn(t, n.dispatchConfig.registrationName)) && (n._dispatchListeners = ie(n._dispatchListeners, e), n._dispatchInstances = ie(n._dispatchInstances, t))
                }

                function Vn(t) {
                    t && t.dispatchConfig.registrationName && jn(t._targetInst, null, t)
                }

                function Wn(t) {
                    ae(t, zn)
                }
                var Yn = null,
                    Hn = null,
                    $n = null;

                function Kn() {
                    if ($n) return $n;
                    var t, e, n = Hn,
                        r = n.length,
                        i = "value" in Yn ? Yn.value : Yn.textContent,
                        a = i.length;
                    for (t = 0; t < r && n[t] === i[t]; t++);
                    var o = r - t;
                    for (e = 1; e <= o && n[r - e] === i[a - e]; e++);
                    return $n = i.slice(t, 1 < e ? 1 - e : void 0)
                }

                function Qn() {
                    return !0
                }

                function qn() {
                    return !1
                }

                function Gn(t, e, n, r) {
                    for (var i in this.dispatchConfig = t, this._targetInst = e, this.nativeEvent = n, t = this.constructor.Interface) t.hasOwnProperty(i) && ((e = t[i]) ? this[i] = e(n) : "target" === i ? this.target = r : this[i] = n[i]);
                    return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Qn : qn, this.isPropagationStopped = qn, this
                }

                function Xn(t, e, n, r) {
                    if (this.eventPool.length) {
                        var i = this.eventPool.pop();
                        return this.call(i, t, e, n, r), i
                    }
                    return new this(t, e, n, r)
                }

                function Jn(t) {
                    if (!(t instanceof this)) throw Error(o(279));
                    t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t)
                }

                function Zn(t) {
                    t.eventPool = [], t.getPooled = Xn, t.release = Jn
                }
                i(Gn.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var t = this.nativeEvent;
                        t && (t.preventDefault ? t.preventDefault() : "unknown" !== typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = Qn)
                    },
                    stopPropagation: function() {
                        var t = this.nativeEvent;
                        t && (t.stopPropagation ? t.stopPropagation() : "unknown" !== typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = Qn)
                    },
                    persist: function() {
                        this.isPersistent = Qn
                    },
                    isPersistent: qn,
                    destructor: function() {
                        var t, e = this.constructor.Interface;
                        for (t in e) this[t] = null;
                        this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = qn, this._dispatchInstances = this._dispatchListeners = null
                    }
                }), Gn.Interface = {
                    type: null,
                    target: null,
                    currentTarget: function() {
                        return null
                    },
                    eventPhase: null,
                    bubbles: null,
                    cancelable: null,
                    timeStamp: function(t) {
                        return t.timeStamp || Date.now()
                    },
                    defaultPrevented: null,
                    isTrusted: null
                }, Gn.extend = function(t) {
                    function e() {}

                    function n() {
                        return r.apply(this, arguments)
                    }
                    var r = this;
                    e.prototype = r.prototype;
                    var a = new e;
                    return i(a, n.prototype), n.prototype = a, n.prototype.constructor = n, n.Interface = i({}, r.Interface, t), n.extend = r.extend, Zn(n), n
                }, Zn(Gn);
                var tr = Gn.extend({
                        data: null
                    }),
                    er = Gn.extend({
                        data: null
                    }),
                    nr = [9, 13, 27, 32],
                    rr = E && "CompositionEvent" in window,
                    ir = null;
                E && "documentMode" in document && (ir = document.documentMode);
                var ar = E && "TextEvent" in window && !ir,
                    or = E && (!rr || ir && 8 < ir && 11 >= ir),
                    sr = String.fromCharCode(32),
                    lr = {
                        beforeInput: {
                            phasedRegistrationNames: {
                                bubbled: "onBeforeInput",
                                captured: "onBeforeInputCapture"
                            },
                            dependencies: ["compositionend", "keypress", "textInput", "paste"]
                        },
                        compositionEnd: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionEnd",
                                captured: "onCompositionEndCapture"
                            },
                            dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                        },
                        compositionStart: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionStart",
                                captured: "onCompositionStartCapture"
                            },
                            dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                        },
                        compositionUpdate: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionUpdate",
                                captured: "onCompositionUpdateCapture"
                            },
                            dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                        }
                    },
                    ur = !1;

                function cr(t, e) {
                    switch (t) {
                        case "keyup":
                            return -1 !== nr.indexOf(e.keyCode);
                        case "keydown":
                            return 229 !== e.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "blur":
                            return !0;
                        default:
                            return !1
                    }
                }

                function dr(t) {
                    return "object" === typeof(t = t.detail) && "data" in t ? t.data : null
                }
                var fr = !1;
                var hr = {
                        eventTypes: lr,
                        extractEvents: function(t, e, n, r) {
                            var i;
                            if (rr) t: {
                                switch (t) {
                                    case "compositionstart":
                                        var a = lr.compositionStart;
                                        break t;
                                    case "compositionend":
                                        a = lr.compositionEnd;
                                        break t;
                                    case "compositionupdate":
                                        a = lr.compositionUpdate;
                                        break t
                                }
                                a = void 0
                            }
                            else fr ? cr(t, n) && (a = lr.compositionEnd) : "keydown" === t && 229 === n.keyCode && (a = lr.compositionStart);
                            return a ? (or && "ko" !== n.locale && (fr || a !== lr.compositionStart ? a === lr.compositionEnd && fr && (i = Kn()) : (Hn = "value" in (Yn = r) ? Yn.value : Yn.textContent, fr = !0)), a = tr.getPooled(a, e, n, r), i ? a.data = i : null !== (i = dr(n)) && (a.data = i), Wn(a), i = a) : i = null, (t = ar ? function(t, e) {
                                switch (t) {
                                    case "compositionend":
                                        return dr(e);
                                    case "keypress":
                                        return 32 !== e.which ? null : (ur = !0, sr);
                                    case "textInput":
                                        return (t = e.data) === sr && ur ? null : t;
                                    default:
                                        return null
                                }
                            }(t, n) : function(t, e) {
                                if (fr) return "compositionend" === t || !rr && cr(t, e) ? (t = Kn(), $n = Hn = Yn = null, fr = !1, t) : null;
                                switch (t) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                                            if (e.char && 1 < e.char.length) return e.char;
                                            if (e.which) return String.fromCharCode(e.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return or && "ko" !== e.locale ? null : e.data
                                }
                            }(t, n)) ? ((e = er.getPooled(lr.beforeInput, e, n, r)).data = t, Wn(e)) : e = null, null === i ? e : null === e ? i : [i, e]
                        }
                    },
                    pr = {
                        color: !0,
                        date: !0,
                        datetime: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        password: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0
                    };

                function yr(t) {
                    var e = t && t.nodeName && t.nodeName.toLowerCase();
                    return "input" === e ? !!pr[t.type] : "textarea" === e
                }
                var mr = {
                    change: {
                        phasedRegistrationNames: {
                            bubbled: "onChange",
                            captured: "onChangeCapture"
                        },
                        dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
                    }
                };

                function br(t, e, n) {
                    return (t = Gn.getPooled(mr.change, t, e, n)).type = "change", D(n), Wn(t), t
                }
                var vr = null,
                    gr = null;

                function wr(t) {
                    le(t)
                }

                function _r(t) {
                    if (_t(Pn(t))) return t
                }

                function Sr(t, e) {
                    if ("change" === t) return e
                }
                var xr = !1;

                function Tr() {
                    vr && (vr.detachEvent("onpropertychange", kr), gr = vr = null)
                }

                function kr(t) {
                    if ("value" === t.propertyName && _r(gr))
                        if (t = br(gr, t, ue(t)), R) le(t);
                        else {
                            R = !0;
                            try {
                                B(wr, t)
                            } finally {
                                R = !1, z()
                            }
                        }
                }

                function Ir(t, e, n) {
                    "focus" === t ? (Tr(), gr = n, (vr = e).attachEvent("onpropertychange", kr)) : "blur" === t && Tr()
                }

                function Er(t) {
                    if ("selectionchange" === t || "keyup" === t || "keydown" === t) return _r(gr)
                }

                function Or(t, e) {
                    if ("click" === t) return _r(e)
                }

                function Ar(t, e) {
                    if ("input" === t || "change" === t) return _r(e)
                }
                E && (xr = ce("input") && (!document.documentMode || 9 < document.documentMode));
                var Cr = {
                        eventTypes: mr,
                        _isInputEventSupported: xr,
                        extractEvents: function(t, e, n, r) {
                            var i = e ? Pn(e) : window,
                                a = i.nodeName && i.nodeName.toLowerCase();
                            if ("select" === a || "input" === a && "file" === i.type) var o = Sr;
                            else if (yr(i))
                                if (xr) o = Ar;
                                else {
                                    o = Er;
                                    var s = Ir
                                }
                            else(a = i.nodeName) && "input" === a.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (o = Or);
                            if (o && (o = o(t, e))) return br(o, n, r);
                            s && s(t, i, e), "blur" === t && (t = i._wrapperState) && t.controlled && "number" === i.type && Et(i, "number", i.value)
                        }
                    },
                    Nr = Gn.extend({
                        view: null,
                        detail: null
                    }),
                    Dr = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Mr(t) {
                    var e = this.nativeEvent;
                    return e.getModifierState ? e.getModifierState(t) : !!(t = Dr[t]) && !!e[t]
                }

                function Br() {
                    return Mr
                }
                var Pr = 0,
                    Fr = 0,
                    Lr = !1,
                    Rr = !1,
                    Ur = Nr.extend({
                        screenX: null,
                        screenY: null,
                        clientX: null,
                        clientY: null,
                        pageX: null,
                        pageY: null,
                        ctrlKey: null,
                        shiftKey: null,
                        altKey: null,
                        metaKey: null,
                        getModifierState: Br,
                        button: null,
                        buttons: null,
                        relatedTarget: function(t) {
                            return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
                        },
                        movementX: function(t) {
                            if ("movementX" in t) return t.movementX;
                            var e = Pr;
                            return Pr = t.screenX, Lr ? "mousemove" === t.type ? t.screenX - e : 0 : (Lr = !0, 0)
                        },
                        movementY: function(t) {
                            if ("movementY" in t) return t.movementY;
                            var e = Fr;
                            return Fr = t.screenY, Rr ? "mousemove" === t.type ? t.screenY - e : 0 : (Rr = !0, 0)
                        }
                    }),
                    zr = Ur.extend({
                        pointerId: null,
                        width: null,
                        height: null,
                        pressure: null,
                        tangentialPressure: null,
                        tiltX: null,
                        tiltY: null,
                        twist: null,
                        pointerType: null,
                        isPrimary: null
                    }),
                    jr = {
                        mouseEnter: {
                            registrationName: "onMouseEnter",
                            dependencies: ["mouseout", "mouseover"]
                        },
                        mouseLeave: {
                            registrationName: "onMouseLeave",
                            dependencies: ["mouseout", "mouseover"]
                        },
                        pointerEnter: {
                            registrationName: "onPointerEnter",
                            dependencies: ["pointerout", "pointerover"]
                        },
                        pointerLeave: {
                            registrationName: "onPointerLeave",
                            dependencies: ["pointerout", "pointerover"]
                        }
                    },
                    Vr = {
                        eventTypes: jr,
                        extractEvents: function(t, e, n, r, i) {
                            var a = "mouseover" === t || "pointerover" === t,
                                o = "mouseout" === t || "pointerout" === t;
                            if (a && 0 === (32 & i) && (n.relatedTarget || n.fromElement) || !o && !a) return null;
                            (a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window, o) ? (o = e, null !== (e = (e = n.relatedTarget || n.toElement) ? Mn(e) : null) && (e !== te(e) || 5 !== e.tag && 6 !== e.tag) && (e = null)) : o = null;
                            if (o === e) return null;
                            if ("mouseout" === t || "mouseover" === t) var s = Ur,
                                l = jr.mouseLeave,
                                u = jr.mouseEnter,
                                c = "mouse";
                            else "pointerout" !== t && "pointerover" !== t || (s = zr, l = jr.pointerLeave, u = jr.pointerEnter, c = "pointer");
                            if (t = null == o ? a : Pn(o), a = null == e ? a : Pn(e), (l = s.getPooled(l, o, n, r)).type = c + "leave", l.target = t, l.relatedTarget = a, (n = s.getPooled(u, e, n, r)).type = c + "enter", n.target = a, n.relatedTarget = t, c = e, (r = o) && c) t: {
                                for (u = c, o = 0, t = s = r; t; t = Ln(t)) o++;
                                for (t = 0, e = u; e; e = Ln(e)) t++;
                                for (; 0 < o - t;) s = Ln(s),
                                o--;
                                for (; 0 < t - o;) u = Ln(u),
                                t--;
                                for (; o--;) {
                                    if (s === u || s === u.alternate) break t;
                                    s = Ln(s), u = Ln(u)
                                }
                                s = null
                            }
                            else s = null;
                            for (u = s, s = []; r && r !== u && (null === (o = r.alternate) || o !== u);) s.push(r), r = Ln(r);
                            for (r = []; c && c !== u && (null === (o = c.alternate) || o !== u);) r.push(c), c = Ln(c);
                            for (c = 0; c < s.length; c++) jn(s[c], "bubbled", l);
                            for (c = r.length; 0 < c--;) jn(r[c], "captured", n);
                            return 0 === (64 & i) ? [l] : [l, n]
                        }
                    };
                var Wr = "function" === typeof Object.is ? Object.is : function(t, e) {
                        return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                    },
                    Yr = Object.prototype.hasOwnProperty;

                function Hr(t, e) {
                    if (Wr(t, e)) return !0;
                    if ("object" !== typeof t || null === t || "object" !== typeof e || null === e) return !1;
                    var n = Object.keys(t),
                        r = Object.keys(e);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++)
                        if (!Yr.call(e, n[r]) || !Wr(t[n[r]], e[n[r]])) return !1;
                    return !0
                }
                var $r = E && "documentMode" in document && 11 >= document.documentMode,
                    Kr = {
                        select: {
                            phasedRegistrationNames: {
                                bubbled: "onSelect",
                                captured: "onSelectCapture"
                            },
                            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
                        }
                    },
                    Qr = null,
                    qr = null,
                    Gr = null,
                    Xr = !1;

                function Jr(t, e) {
                    var n = e.window === e ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
                    return Xr || null == Qr || Qr !== dn(n) ? null : ("selectionStart" in (n = Qr) && mn(n) ? n = {
                        start: n.selectionStart,
                        end: n.selectionEnd
                    } : n = {
                        anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: n.anchorOffset,
                        focusNode: n.focusNode,
                        focusOffset: n.focusOffset
                    }, Gr && Hr(Gr, n) ? null : (Gr = n, (t = Gn.getPooled(Kr.select, qr, t, e)).type = "select", t.target = Qr, Wn(t), t))
                }
                var Zr = {
                        eventTypes: Kr,
                        extractEvents: function(t, e, n, r, i, a) {
                            if (!(a = !(i = a || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                                t: {
                                    i = Zt(i),
                                    a = k.onSelect;
                                    for (var o = 0; o < a.length; o++)
                                        if (!i.has(a[o])) {
                                            i = !1;
                                            break t
                                        } i = !0
                                }
                                a = !i
                            }
                            if (a) return null;
                            switch (i = e ? Pn(e) : window, t) {
                                case "focus":
                                    (yr(i) || "true" === i.contentEditable) && (Qr = i, qr = e, Gr = null);
                                    break;
                                case "blur":
                                    Gr = qr = Qr = null;
                                    break;
                                case "mousedown":
                                    Xr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    return Xr = !1, Jr(n, r);
                                case "selectionchange":
                                    if ($r) break;
                                case "keydown":
                                case "keyup":
                                    return Jr(n, r)
                            }
                            return null
                        }
                    },
                    ti = Gn.extend({
                        animationName: null,
                        elapsedTime: null,
                        pseudoElement: null
                    }),
                    ei = Gn.extend({
                        clipboardData: function(t) {
                            return "clipboardData" in t ? t.clipboardData : window.clipboardData
                        }
                    }),
                    ni = Nr.extend({
                        relatedTarget: null
                    });

                function ri(t) {
                    var e = t.keyCode;
                    return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
                }
                var ii = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    ai = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    oi = Nr.extend({
                        key: function(t) {
                            if (t.key) {
                                var e = ii[t.key] || t.key;
                                if ("Unidentified" !== e) return e
                            }
                            return "keypress" === t.type ? 13 === (t = ri(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? ai[t.keyCode] || "Unidentified" : ""
                        },
                        location: null,
                        ctrlKey: null,
                        shiftKey: null,
                        altKey: null,
                        metaKey: null,
                        repeat: null,
                        locale: null,
                        getModifierState: Br,
                        charCode: function(t) {
                            return "keypress" === t.type ? ri(t) : 0
                        },
                        keyCode: function(t) {
                            return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                        },
                        which: function(t) {
                            return "keypress" === t.type ? ri(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                        }
                    }),
                    si = Ur.extend({
                        dataTransfer: null
                    }),
                    li = Nr.extend({
                        touches: null,
                        targetTouches: null,
                        changedTouches: null,
                        altKey: null,
                        metaKey: null,
                        ctrlKey: null,
                        shiftKey: null,
                        getModifierState: Br
                    }),
                    ui = Gn.extend({
                        propertyName: null,
                        elapsedTime: null,
                        pseudoElement: null
                    }),
                    ci = Ur.extend({
                        deltaX: function(t) {
                            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
                        },
                        deltaY: function(t) {
                            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
                        },
                        deltaZ: null,
                        deltaMode: null
                    }),
                    di = {
                        eventTypes: Re,
                        extractEvents: function(t, e, n, r) {
                            var i = Ue.get(t);
                            if (!i) return null;
                            switch (t) {
                                case "keypress":
                                    if (0 === ri(n)) return null;
                                case "keydown":
                                case "keyup":
                                    t = oi;
                                    break;
                                case "blur":
                                case "focus":
                                    t = ni;
                                    break;
                                case "click":
                                    if (2 === n.button) return null;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    t = Ur;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    t = si;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    t = li;
                                    break;
                                case Kt:
                                case Qt:
                                case qt:
                                    t = ti;
                                    break;
                                case Gt:
                                    t = ui;
                                    break;
                                case "scroll":
                                    t = Nr;
                                    break;
                                case "wheel":
                                    t = ci;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    t = ei;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    t = zr;
                                    break;
                                default:
                                    t = Gn
                            }
                            return Wn(e = t.getPooled(i, e, n, r)), e
                        }
                    };
                if (v) throw Error(o(101));
                v = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), w(), p = Fn, y = Bn, m = Pn, I({
                    SimpleEventPlugin: di,
                    EnterLeaveEventPlugin: Vr,
                    ChangeEventPlugin: Cr,
                    SelectEventPlugin: Zr,
                    BeforeInputEventPlugin: hr
                });
                var fi = [],
                    hi = -1;

                function pi(t) {
                    0 > hi || (t.current = fi[hi], fi[hi] = null, hi--)
                }

                function yi(t, e) {
                    hi++, fi[hi] = t.current, t.current = e
                }
                var mi = {},
                    bi = {
                        current: mi
                    },
                    vi = {
                        current: !1
                    },
                    gi = mi;

                function wi(t, e) {
                    var n = t.type.contextTypes;
                    if (!n) return mi;
                    var r = t.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
                    var i, a = {};
                    for (i in n) a[i] = e[i];
                    return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = a), a
                }

                function _i(t) {
                    return null !== (t = t.childContextTypes) && void 0 !== t
                }

                function Si() {
                    pi(vi), pi(bi)
                }

                function xi(t, e, n) {
                    if (bi.current !== mi) throw Error(o(168));
                    yi(bi, e), yi(vi, n)
                }

                function Ti(t, e, n) {
                    var r = t.stateNode;
                    if (t = e.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in t)) throw Error(o(108, mt(e) || "Unknown", a));
                    return i({}, n, {}, r)
                }

                function ki(t) {
                    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || mi, gi = bi.current, yi(bi, t), yi(vi, vi.current), !0
                }

                function Ii(t, e, n) {
                    var r = t.stateNode;
                    if (!r) throw Error(o(169));
                    n ? (t = Ti(t, e, gi), r.__reactInternalMemoizedMergedChildContext = t, pi(vi), pi(bi), yi(bi, t)) : pi(vi), yi(vi, n)
                }
                var Ei = a.unstable_runWithPriority,
                    Oi = a.unstable_scheduleCallback,
                    Ai = a.unstable_cancelCallback,
                    Ci = a.unstable_requestPaint,
                    Ni = a.unstable_now,
                    Di = a.unstable_getCurrentPriorityLevel,
                    Mi = a.unstable_ImmediatePriority,
                    Bi = a.unstable_UserBlockingPriority,
                    Pi = a.unstable_NormalPriority,
                    Fi = a.unstable_LowPriority,
                    Li = a.unstable_IdlePriority,
                    Ri = {},
                    Ui = a.unstable_shouldYield,
                    zi = void 0 !== Ci ? Ci : function() {},
                    ji = null,
                    Vi = null,
                    Wi = !1,
                    Yi = Ni(),
                    Hi = 1e4 > Yi ? Ni : function() {
                        return Ni() - Yi
                    };

                function $i() {
                    switch (Di()) {
                        case Mi:
                            return 99;
                        case Bi:
                            return 98;
                        case Pi:
                            return 97;
                        case Fi:
                            return 96;
                        case Li:
                            return 95;
                        default:
                            throw Error(o(332))
                    }
                }

                function Ki(t) {
                    switch (t) {
                        case 99:
                            return Mi;
                        case 98:
                            return Bi;
                        case 97:
                            return Pi;
                        case 96:
                            return Fi;
                        case 95:
                            return Li;
                        default:
                            throw Error(o(332))
                    }
                }

                function Qi(t, e) {
                    return t = Ki(t), Ei(t, e)
                }

                function qi(t, e, n) {
                    return t = Ki(t), Oi(t, e, n)
                }

                function Gi(t) {
                    return null === ji ? (ji = [t], Vi = Oi(Mi, Ji)) : ji.push(t), Ri
                }

                function Xi() {
                    if (null !== Vi) {
                        var t = Vi;
                        Vi = null, Ai(t)
                    }
                    Ji()
                }

                function Ji() {
                    if (!Wi && null !== ji) {
                        Wi = !0;
                        var t = 0;
                        try {
                            var e = ji;
                            Qi(99, (function() {
                                for (; t < e.length; t++) {
                                    var n = e[t];
                                    do {
                                        n = n(!0)
                                    } while (null !== n)
                                }
                            })), ji = null
                        } catch (n) {
                            throw null !== ji && (ji = ji.slice(t + 1)), Oi(Mi, Xi), n
                        } finally {
                            Wi = !1
                        }
                    }
                }

                function Zi(t, e, n) {
                    return 1073741821 - (1 + ((1073741821 - t + e / 10) / (n /= 10) | 0)) * n
                }

                function ta(t, e) {
                    if (t && t.defaultProps)
                        for (var n in e = i({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]);
                    return e
                }
                var ea = {
                        current: null
                    },
                    na = null,
                    ra = null,
                    ia = null;

                function aa() {
                    ia = ra = na = null
                }

                function oa(t) {
                    var e = ea.current;
                    pi(ea), t.type._context._currentValue = e
                }

                function sa(t, e) {
                    for (; null !== t;) {
                        var n = t.alternate;
                        if (t.childExpirationTime < e) t.childExpirationTime = e, null !== n && n.childExpirationTime < e && (n.childExpirationTime = e);
                        else {
                            if (!(null !== n && n.childExpirationTime < e)) break;
                            n.childExpirationTime = e
                        }
                        t = t.return
                    }
                }

                function la(t, e) {
                    na = t, ia = ra = null, null !== (t = t.dependencies) && null !== t.firstContext && (t.expirationTime >= e && (Fo = !0), t.firstContext = null)
                }

                function ua(t, e) {
                    if (ia !== t && !1 !== e && 0 !== e)
                        if ("number" === typeof e && 1073741823 !== e || (ia = t, e = 1073741823), e = {
                                context: t,
                                observedBits: e,
                                next: null
                            }, null === ra) {
                            if (null === na) throw Error(o(308));
                            ra = e, na.dependencies = {
                                expirationTime: 0,
                                firstContext: e,
                                responders: null
                            }
                        } else ra = ra.next = e;
                    return t._currentValue
                }
                var ca = !1;

                function da(t) {
                    t.updateQueue = {
                        baseState: t.memoizedState,
                        baseQueue: null,
                        shared: {
                            pending: null
                        },
                        effects: null
                    }
                }

                function fa(t, e) {
                    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
                        baseState: t.baseState,
                        baseQueue: t.baseQueue,
                        shared: t.shared,
                        effects: t.effects
                    })
                }

                function ha(t, e) {
                    return (t = {
                        expirationTime: t,
                        suspenseConfig: e,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }).next = t
                }

                function pa(t, e) {
                    if (null !== (t = t.updateQueue)) {
                        var n = (t = t.shared).pending;
                        null === n ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
                    }
                }

                function ya(t, e) {
                    var n = t.alternate;
                    null !== n && fa(n, t), null === (n = (t = t.updateQueue).baseQueue) ? (t.baseQueue = e.next = e, e.next = e) : (e.next = n.next, n.next = e)
                }

                function ma(t, e, n, r) {
                    var a = t.updateQueue;
                    ca = !1;
                    var o = a.baseQueue,
                        s = a.shared.pending;
                    if (null !== s) {
                        if (null !== o) {
                            var l = o.next;
                            o.next = s.next, s.next = l
                        }
                        o = s, a.shared.pending = null, null !== (l = t.alternate) && (null !== (l = l.updateQueue) && (l.baseQueue = s))
                    }
                    if (null !== o) {
                        l = o.next;
                        var u = a.baseState,
                            c = 0,
                            d = null,
                            f = null,
                            h = null;
                        if (null !== l)
                            for (var p = l;;) {
                                if ((s = p.expirationTime) < r) {
                                    var y = {
                                        expirationTime: p.expirationTime,
                                        suspenseConfig: p.suspenseConfig,
                                        tag: p.tag,
                                        payload: p.payload,
                                        callback: p.callback,
                                        next: null
                                    };
                                    null === h ? (f = h = y, d = u) : h = h.next = y, s > c && (c = s)
                                } else {
                                    null !== h && (h = h.next = {
                                        expirationTime: 1073741823,
                                        suspenseConfig: p.suspenseConfig,
                                        tag: p.tag,
                                        payload: p.payload,
                                        callback: p.callback,
                                        next: null
                                    }), Sl(s, p.suspenseConfig);
                                    t: {
                                        var m = t,
                                            b = p;
                                        switch (s = e, y = n, b.tag) {
                                            case 1:
                                                if ("function" === typeof(m = b.payload)) {
                                                    u = m.call(y, u, s);
                                                    break t
                                                }
                                                u = m;
                                                break t;
                                            case 3:
                                                m.effectTag = -4097 & m.effectTag | 64;
                                            case 0:
                                                if (null === (s = "function" === typeof(m = b.payload) ? m.call(y, u, s) : m) || void 0 === s) break t;
                                                u = i({}, u, s);
                                                break t;
                                            case 2:
                                                ca = !0
                                        }
                                    }
                                    null !== p.callback && (t.effectTag |= 32, null === (s = a.effects) ? a.effects = [p] : s.push(p))
                                }
                                if (null === (p = p.next) || p === l) {
                                    if (null === (s = a.shared.pending)) break;
                                    p = o.next = s.next, s.next = l, a.baseQueue = o = s, a.shared.pending = null
                                }
                            }
                        null === h ? d = u : h.next = f, a.baseState = d, a.baseQueue = h, xl(c), t.expirationTime = c, t.memoizedState = u
                    }
                }

                function ba(t, e, n) {
                    if (t = e.effects, e.effects = null, null !== t)
                        for (e = 0; e < t.length; e++) {
                            var r = t[e],
                                i = r.callback;
                            if (null !== i) {
                                if (r.callback = null, r = i, i = n, "function" !== typeof r) throw Error(o(191, r));
                                r.call(i)
                            }
                        }
                }
                var va = G.ReactCurrentBatchConfig,
                    ga = (new r.Component).refs;

                function wa(t, e, n, r) {
                    n = null === (n = n(r, e = t.memoizedState)) || void 0 === n ? e : i({}, e, n), t.memoizedState = n, 0 === t.expirationTime && (t.updateQueue.baseState = n)
                }
                var _a = {
                    isMounted: function(t) {
                        return !!(t = t._reactInternalFiber) && te(t) === t
                    },
                    enqueueSetState: function(t, e, n) {
                        t = t._reactInternalFiber;
                        var r = ul(),
                            i = va.suspense;
                        (i = ha(r = cl(r, t, i), i)).payload = e, void 0 !== n && null !== n && (i.callback = n), pa(t, i), dl(t, r)
                    },
                    enqueueReplaceState: function(t, e, n) {
                        t = t._reactInternalFiber;
                        var r = ul(),
                            i = va.suspense;
                        (i = ha(r = cl(r, t, i), i)).tag = 1, i.payload = e, void 0 !== n && null !== n && (i.callback = n), pa(t, i), dl(t, r)
                    },
                    enqueueForceUpdate: function(t, e) {
                        t = t._reactInternalFiber;
                        var n = ul(),
                            r = va.suspense;
                        (r = ha(n = cl(n, t, r), r)).tag = 2, void 0 !== e && null !== e && (r.callback = e), pa(t, r), dl(t, n)
                    }
                };

                function Sa(t, e, n, r, i, a, o) {
                    return "function" === typeof(t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, a, o) : !e.prototype || !e.prototype.isPureReactComponent || (!Hr(n, r) || !Hr(i, a))
                }

                function xa(t, e, n) {
                    var r = !1,
                        i = mi,
                        a = e.contextType;
                    return "object" === typeof a && null !== a ? a = ua(a) : (i = _i(e) ? gi : bi.current, a = (r = null !== (r = e.contextTypes) && void 0 !== r) ? wi(t, i) : mi), e = new e(n, a), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = _a, t.stateNode = e, e._reactInternalFiber = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = a), e
                }

                function Ta(t, e, n, r) {
                    t = e.state, "function" === typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, r), "function" === typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && _a.enqueueReplaceState(e, e.state, null)
                }

                function ka(t, e, n, r) {
                    var i = t.stateNode;
                    i.props = n, i.state = t.memoizedState, i.refs = ga, da(t);
                    var a = e.contextType;
                    "object" === typeof a && null !== a ? i.context = ua(a) : (a = _i(e) ? gi : bi.current, i.context = wi(t, a)), ma(t, n, i, r), i.state = t.memoizedState, "function" === typeof(a = e.getDerivedStateFromProps) && (wa(t, e, a, n), i.state = t.memoizedState), "function" === typeof e.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (e = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), e !== i.state && _a.enqueueReplaceState(i, i.state, null), ma(t, n, i, r), i.state = t.memoizedState), "function" === typeof i.componentDidMount && (t.effectTag |= 4)
                }
                var Ia = Array.isArray;

                function Ea(t, e, n) {
                    if (null !== (t = n.ref) && "function" !== typeof t && "object" !== typeof t) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(o(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(o(147, t));
                            var i = "" + t;
                            return null !== e && null !== e.ref && "function" === typeof e.ref && e.ref._stringRef === i ? e.ref : (e = function(t) {
                                var e = r.refs;
                                e === ga && (e = r.refs = {}), null === t ? delete e[i] : e[i] = t
                            }, e._stringRef = i, e)
                        }
                        if ("string" !== typeof t) throw Error(o(284));
                        if (!n._owner) throw Error(o(290, t))
                    }
                    return t
                }

                function Oa(t, e) {
                    if ("textarea" !== t.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e, ""))
                }

                function Aa(t) {
                    function e(e, n) {
                        if (t) {
                            var r = e.lastEffect;
                            null !== r ? (r.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.effectTag = 8
                        }
                    }

                    function n(n, r) {
                        if (!t) return null;
                        for (; null !== r;) e(n, r), r = r.sibling;
                        return null
                    }

                    function r(t, e) {
                        for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                        return t
                    }

                    function i(t, e) {
                        return (t = Wl(t, e)).index = 0, t.sibling = null, t
                    }

                    function a(e, n, r) {
                        return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index) < n ? (e.effectTag = 2, n) : r : (e.effectTag = 2, n) : n
                    }

                    function s(e) {
                        return t && null === e.alternate && (e.effectTag = 2), e
                    }

                    function l(t, e, n, r) {
                        return null === e || 6 !== e.tag ? ((e = $l(n, t.mode, r)).return = t, e) : ((e = i(e, n)).return = t, e)
                    }

                    function u(t, e, n, r) {
                        return null !== e && e.elementType === n.type ? ((r = i(e, n.props)).ref = Ea(t, e, n), r.return = t, r) : ((r = Yl(n.type, n.key, n.props, null, t.mode, r)).ref = Ea(t, e, n), r.return = t, r)
                    }

                    function c(t, e, n, r) {
                        return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = Kl(n, t.mode, r)).return = t, e) : ((e = i(e, n.children || [])).return = t, e)
                    }

                    function d(t, e, n, r, a) {
                        return null === e || 7 !== e.tag ? ((e = Hl(n, t.mode, r, a)).return = t, e) : ((e = i(e, n)).return = t, e)
                    }

                    function f(t, e, n) {
                        if ("string" === typeof e || "number" === typeof e) return (e = $l("" + e, t.mode, n)).return = t, e;
                        if ("object" === typeof e && null !== e) {
                            switch (e.$$typeof) {
                                case tt:
                                    return (n = Yl(e.type, e.key, e.props, null, t.mode, n)).ref = Ea(t, null, e), n.return = t, n;
                                case et:
                                    return (e = Kl(e, t.mode, n)).return = t, e
                            }
                            if (Ia(e) || yt(e)) return (e = Hl(e, t.mode, n, null)).return = t, e;
                            Oa(t, e)
                        }
                        return null
                    }

                    function h(t, e, n, r) {
                        var i = null !== e ? e.key : null;
                        if ("string" === typeof n || "number" === typeof n) return null !== i ? null : l(t, e, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case tt:
                                    return n.key === i ? n.type === nt ? d(t, e, n.props.children, r, i) : u(t, e, n, r) : null;
                                case et:
                                    return n.key === i ? c(t, e, n, r) : null
                            }
                            if (Ia(n) || yt(n)) return null !== i ? null : d(t, e, n, r, null);
                            Oa(t, n)
                        }
                        return null
                    }

                    function p(t, e, n, r, i) {
                        if ("string" === typeof r || "number" === typeof r) return l(e, t = t.get(n) || null, "" + r, i);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case tt:
                                    return t = t.get(null === r.key ? n : r.key) || null, r.type === nt ? d(e, t, r.props.children, i, r.key) : u(e, t, r, i);
                                case et:
                                    return c(e, t = t.get(null === r.key ? n : r.key) || null, r, i)
                            }
                            if (Ia(r) || yt(r)) return d(e, t = t.get(n) || null, r, i, null);
                            Oa(e, r)
                        }
                        return null
                    }

                    function y(i, o, s, l) {
                        for (var u = null, c = null, d = o, y = o = 0, m = null; null !== d && y < s.length; y++) {
                            d.index > y ? (m = d, d = null) : m = d.sibling;
                            var b = h(i, d, s[y], l);
                            if (null === b) {
                                null === d && (d = m);
                                break
                            }
                            t && d && null === b.alternate && e(i, d), o = a(b, o, y), null === c ? u = b : c.sibling = b, c = b, d = m
                        }
                        if (y === s.length) return n(i, d), u;
                        if (null === d) {
                            for (; y < s.length; y++) null !== (d = f(i, s[y], l)) && (o = a(d, o, y), null === c ? u = d : c.sibling = d, c = d);
                            return u
                        }
                        for (d = r(i, d); y < s.length; y++) null !== (m = p(d, i, y, s[y], l)) && (t && null !== m.alternate && d.delete(null === m.key ? y : m.key), o = a(m, o, y), null === c ? u = m : c.sibling = m, c = m);
                        return t && d.forEach((function(t) {
                            return e(i, t)
                        })), u
                    }

                    function m(i, s, l, u) {
                        var c = yt(l);
                        if ("function" !== typeof c) throw Error(o(150));
                        if (null == (l = c.call(l))) throw Error(o(151));
                        for (var d = c = null, y = s, m = s = 0, b = null, v = l.next(); null !== y && !v.done; m++, v = l.next()) {
                            y.index > m ? (b = y, y = null) : b = y.sibling;
                            var g = h(i, y, v.value, u);
                            if (null === g) {
                                null === y && (y = b);
                                break
                            }
                            t && y && null === g.alternate && e(i, y), s = a(g, s, m), null === d ? c = g : d.sibling = g, d = g, y = b
                        }
                        if (v.done) return n(i, y), c;
                        if (null === y) {
                            for (; !v.done; m++, v = l.next()) null !== (v = f(i, v.value, u)) && (s = a(v, s, m), null === d ? c = v : d.sibling = v, d = v);
                            return c
                        }
                        for (y = r(i, y); !v.done; m++, v = l.next()) null !== (v = p(y, i, m, v.value, u)) && (t && null !== v.alternate && y.delete(null === v.key ? m : v.key), s = a(v, s, m), null === d ? c = v : d.sibling = v, d = v);
                        return t && y.forEach((function(t) {
                            return e(i, t)
                        })), c
                    }
                    return function(t, r, a, l) {
                        var u = "object" === typeof a && null !== a && a.type === nt && null === a.key;
                        u && (a = a.props.children);
                        var c = "object" === typeof a && null !== a;
                        if (c) switch (a.$$typeof) {
                            case tt:
                                t: {
                                    for (c = a.key, u = r; null !== u;) {
                                        if (u.key === c) {
                                            if (7 === u.tag) {
                                                if (a.type === nt) {
                                                    n(t, u.sibling), (r = i(u, a.props.children)).return = t, t = r;
                                                    break t
                                                }
                                            } else if (u.elementType === a.type) {
                                                n(t, u.sibling), (r = i(u, a.props)).ref = Ea(t, u, a), r.return = t, t = r;
                                                break t
                                            }
                                            n(t, u);
                                            break
                                        }
                                        e(t, u), u = u.sibling
                                    }
                                    a.type === nt ? ((r = Hl(a.props.children, t.mode, l, a.key)).return = t, t = r) : ((l = Yl(a.type, a.key, a.props, null, t.mode, l)).ref = Ea(t, r, a), l.return = t, t = l)
                                }
                                return s(t);
                            case et:
                                t: {
                                    for (u = a.key; null !== r;) {
                                        if (r.key === u) {
                                            if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                                n(t, r.sibling), (r = i(r, a.children || [])).return = t, t = r;
                                                break t
                                            }
                                            n(t, r);
                                            break
                                        }
                                        e(t, r), r = r.sibling
                                    }(r = Kl(a, t.mode, l)).return = t,
                                    t = r
                                }
                                return s(t)
                        }
                        if ("string" === typeof a || "number" === typeof a) return a = "" + a, null !== r && 6 === r.tag ? (n(t, r.sibling), (r = i(r, a)).return = t, t = r) : (n(t, r), (r = $l(a, t.mode, l)).return = t, t = r), s(t);
                        if (Ia(a)) return y(t, r, a, l);
                        if (yt(a)) return m(t, r, a, l);
                        if (c && Oa(t, a), "undefined" === typeof a && !u) switch (t.tag) {
                            case 1:
                            case 0:
                                throw t = t.type, Error(o(152, t.displayName || t.name || "Component"))
                        }
                        return n(t, r)
                    }
                }
                var Ca = Aa(!0),
                    Na = Aa(!1),
                    Da = {},
                    Ma = {
                        current: Da
                    },
                    Ba = {
                        current: Da
                    },
                    Pa = {
                        current: Da
                    };

                function Fa(t) {
                    if (t === Da) throw Error(o(174));
                    return t
                }

                function La(t, e) {
                    switch (yi(Pa, e), yi(Ba, t), yi(Ma, Da), t = e.nodeType) {
                        case 9:
                        case 11:
                            e = (e = e.documentElement) ? e.namespaceURI : Lt(null, "");
                            break;
                        default:
                            e = Lt(e = (t = 8 === t ? e.parentNode : e).namespaceURI || null, t = t.tagName)
                    }
                    pi(Ma), yi(Ma, e)
                }

                function Ra() {
                    pi(Ma), pi(Ba), pi(Pa)
                }

                function Ua(t) {
                    Fa(Pa.current);
                    var e = Fa(Ma.current),
                        n = Lt(e, t.type);
                    e !== n && (yi(Ba, t), yi(Ma, n))
                }

                function za(t) {
                    Ba.current === t && (pi(Ma), pi(Ba))
                }
                var ja = {
                    current: 0
                };

                function Va(t) {
                    for (var e = t; null !== e;) {
                        if (13 === e.tag) {
                            var n = e.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || n.data === gn || n.data === wn)) return e
                        } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
                            if (0 !== (64 & e.effectTag)) return e
                        } else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) return null;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    return null
                }

                function Wa(t, e) {
                    return {
                        responder: t,
                        props: e
                    }
                }
                var Ya = G.ReactCurrentDispatcher,
                    Ha = G.ReactCurrentBatchConfig,
                    $a = 0,
                    Ka = null,
                    Qa = null,
                    qa = null,
                    Ga = !1;

                function Xa() {
                    throw Error(o(321))
                }

                function Ja(t, e) {
                    if (null === e) return !1;
                    for (var n = 0; n < e.length && n < t.length; n++)
                        if (!Wr(t[n], e[n])) return !1;
                    return !0
                }

                function Za(t, e, n, r, i, a) {
                    if ($a = a, Ka = e, e.memoizedState = null, e.updateQueue = null, e.expirationTime = 0, Ya.current = null === t || null === t.memoizedState ? xo : To, t = n(r, i), e.expirationTime === $a) {
                        a = 0;
                        do {
                            if (e.expirationTime = 0, !(25 > a)) throw Error(o(301));
                            a += 1, qa = Qa = null, e.updateQueue = null, Ya.current = ko, t = n(r, i)
                        } while (e.expirationTime === $a)
                    }
                    if (Ya.current = So, e = null !== Qa && null !== Qa.next, $a = 0, qa = Qa = Ka = null, Ga = !1, e) throw Error(o(300));
                    return t
                }

                function to() {
                    var t = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === qa ? Ka.memoizedState = qa = t : qa = qa.next = t, qa
                }

                function eo() {
                    if (null === Qa) {
                        var t = Ka.alternate;
                        t = null !== t ? t.memoizedState : null
                    } else t = Qa.next;
                    var e = null === qa ? Ka.memoizedState : qa.next;
                    if (null !== e) qa = e, Qa = t;
                    else {
                        if (null === t) throw Error(o(310));
                        t = {
                            memoizedState: (Qa = t).memoizedState,
                            baseState: Qa.baseState,
                            baseQueue: Qa.baseQueue,
                            queue: Qa.queue,
                            next: null
                        }, null === qa ? Ka.memoizedState = qa = t : qa = qa.next = t
                    }
                    return qa
                }

                function no(t, e) {
                    return "function" === typeof e ? e(t) : e
                }

                function ro(t) {
                    var e = eo(),
                        n = e.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = t;
                    var r = Qa,
                        i = r.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== i) {
                            var s = i.next;
                            i.next = a.next, a.next = s
                        }
                        r.baseQueue = i = a, n.pending = null
                    }
                    if (null !== i) {
                        i = i.next, r = r.baseState;
                        var l = s = a = null,
                            u = i;
                        do {
                            var c = u.expirationTime;
                            if (c < $a) {
                                var d = {
                                    expirationTime: u.expirationTime,
                                    suspenseConfig: u.suspenseConfig,
                                    action: u.action,
                                    eagerReducer: u.eagerReducer,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === l ? (s = l = d, a = r) : l = l.next = d, c > Ka.expirationTime && (Ka.expirationTime = c, xl(c))
                            } else null !== l && (l = l.next = {
                                expirationTime: 1073741823,
                                suspenseConfig: u.suspenseConfig,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            }), Sl(c, u.suspenseConfig), r = u.eagerReducer === t ? u.eagerState : t(r, u.action);
                            u = u.next
                        } while (null !== u && u !== i);
                        null === l ? a = r : l.next = s, Wr(r, e.memoizedState) || (Fo = !0), e.memoizedState = r, e.baseState = a, e.baseQueue = l, n.lastRenderedState = r
                    }
                    return [e.memoizedState, n.dispatch]
                }

                function io(t) {
                    var e = eo(),
                        n = e.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = t;
                    var r = n.dispatch,
                        i = n.pending,
                        a = e.memoizedState;
                    if (null !== i) {
                        n.pending = null;
                        var s = i = i.next;
                        do {
                            a = t(a, s.action), s = s.next
                        } while (s !== i);
                        Wr(a, e.memoizedState) || (Fo = !0), e.memoizedState = a, null === e.baseQueue && (e.baseState = a), n.lastRenderedState = a
                    }
                    return [a, r]
                }

                function ao(t) {
                    var e = to();
                    return "function" === typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: no,
                        lastRenderedState: t
                    }).dispatch = _o.bind(null, Ka, t), [e.memoizedState, t]
                }

                function oo(t, e, n, r) {
                    return t = {
                        tag: t,
                        create: e,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (e = Ka.updateQueue) ? (e = {
                        lastEffect: null
                    }, Ka.updateQueue = e, e.lastEffect = t.next = t) : null === (n = e.lastEffect) ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t), t
                }

                function so() {
                    return eo().memoizedState
                }

                function lo(t, e, n, r) {
                    var i = to();
                    Ka.effectTag |= t, i.memoizedState = oo(1 | e, n, void 0, void 0 === r ? null : r)
                }

                function uo(t, e, n, r) {
                    var i = eo();
                    r = void 0 === r ? null : r;
                    var a = void 0;
                    if (null !== Qa) {
                        var o = Qa.memoizedState;
                        if (a = o.destroy, null !== r && Ja(r, o.deps)) return void oo(e, n, a, r)
                    }
                    Ka.effectTag |= t, i.memoizedState = oo(1 | e, n, a, r)
                }

                function co(t, e) {
                    return lo(516, 4, t, e)
                }

                function fo(t, e) {
                    return uo(516, 4, t, e)
                }

                function ho(t, e) {
                    return uo(4, 2, t, e)
                }

                function po(t, e) {
                    return "function" === typeof e ? (t = t(), e(t), function() {
                        e(null)
                    }) : null !== e && void 0 !== e ? (t = t(), e.current = t, function() {
                        e.current = null
                    }) : void 0
                }

                function yo(t, e, n) {
                    return n = null !== n && void 0 !== n ? n.concat([t]) : null, uo(4, 2, po.bind(null, e, t), n)
                }

                function mo() {}

                function bo(t, e) {
                    return to().memoizedState = [t, void 0 === e ? null : e], t
                }

                function vo(t, e) {
                    var n = eo();
                    e = void 0 === e ? null : e;
                    var r = n.memoizedState;
                    return null !== r && null !== e && Ja(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
                }

                function go(t, e) {
                    var n = eo();
                    e = void 0 === e ? null : e;
                    var r = n.memoizedState;
                    return null !== r && null !== e && Ja(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
                }

                function wo(t, e, n) {
                    var r = $i();
                    Qi(98 > r ? 98 : r, (function() {
                        t(!0)
                    })), Qi(97 < r ? 97 : r, (function() {
                        var r = Ha.suspense;
                        Ha.suspense = void 0 === e ? null : e;
                        try {
                            t(!1), n()
                        } finally {
                            Ha.suspense = r
                        }
                    }))
                }

                function _o(t, e, n) {
                    var r = ul(),
                        i = va.suspense;
                    i = {
                        expirationTime: r = cl(r, t, i),
                        suspenseConfig: i,
                        action: n,
                        eagerReducer: null,
                        eagerState: null,
                        next: null
                    };
                    var a = e.pending;
                    if (null === a ? i.next = i : (i.next = a.next, a.next = i), e.pending = i, a = t.alternate, t === Ka || null !== a && a === Ka) Ga = !0, i.expirationTime = $a, Ka.expirationTime = $a;
                    else {
                        if (0 === t.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = e.lastRenderedReducer)) try {
                            var o = e.lastRenderedState,
                                s = a(o, n);
                            if (i.eagerReducer = a, i.eagerState = s, Wr(s, o)) return
                        } catch (l) {}
                        dl(t, r)
                    }
                }
                var So = {
                        readContext: ua,
                        useCallback: Xa,
                        useContext: Xa,
                        useEffect: Xa,
                        useImperativeHandle: Xa,
                        useLayoutEffect: Xa,
                        useMemo: Xa,
                        useReducer: Xa,
                        useRef: Xa,
                        useState: Xa,
                        useDebugValue: Xa,
                        useResponder: Xa,
                        useDeferredValue: Xa,
                        useTransition: Xa
                    },
                    xo = {
                        readContext: ua,
                        useCallback: bo,
                        useContext: ua,
                        useEffect: co,
                        useImperativeHandle: function(t, e, n) {
                            return n = null !== n && void 0 !== n ? n.concat([t]) : null, lo(4, 2, po.bind(null, e, t), n)
                        },
                        useLayoutEffect: function(t, e) {
                            return lo(4, 2, t, e)
                        },
                        useMemo: function(t, e) {
                            var n = to();
                            return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t
                        },
                        useReducer: function(t, e, n) {
                            var r = to();
                            return e = void 0 !== n ? n(e) : e, r.memoizedState = r.baseState = e, t = (t = r.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: t,
                                lastRenderedState: e
                            }).dispatch = _o.bind(null, Ka, t), [r.memoizedState, t]
                        },
                        useRef: function(t) {
                            return t = {
                                current: t
                            }, to().memoizedState = t
                        },
                        useState: ao,
                        useDebugValue: mo,
                        useResponder: Wa,
                        useDeferredValue: function(t, e) {
                            var n = ao(t),
                                r = n[0],
                                i = n[1];
                            return co((function() {
                                var n = Ha.suspense;
                                Ha.suspense = void 0 === e ? null : e;
                                try {
                                    i(t)
                                } finally {
                                    Ha.suspense = n
                                }
                            }), [t, e]), r
                        },
                        useTransition: function(t) {
                            var e = ao(!1),
                                n = e[0];
                            return e = e[1], [bo(wo.bind(null, e, t), [e, t]), n]
                        }
                    },
                    To = {
                        readContext: ua,
                        useCallback: vo,
                        useContext: ua,
                        useEffect: fo,
                        useImperativeHandle: yo,
                        useLayoutEffect: ho,
                        useMemo: go,
                        useReducer: ro,
                        useRef: so,
                        useState: function() {
                            return ro(no)
                        },
                        useDebugValue: mo,
                        useResponder: Wa,
                        useDeferredValue: function(t, e) {
                            var n = ro(no),
                                r = n[0],
                                i = n[1];
                            return fo((function() {
                                var n = Ha.suspense;
                                Ha.suspense = void 0 === e ? null : e;
                                try {
                                    i(t)
                                } finally {
                                    Ha.suspense = n
                                }
                            }), [t, e]), r
                        },
                        useTransition: function(t) {
                            var e = ro(no),
                                n = e[0];
                            return e = e[1], [vo(wo.bind(null, e, t), [e, t]), n]
                        }
                    },
                    ko = {
                        readContext: ua,
                        useCallback: vo,
                        useContext: ua,
                        useEffect: fo,
                        useImperativeHandle: yo,
                        useLayoutEffect: ho,
                        useMemo: go,
                        useReducer: io,
                        useRef: so,
                        useState: function() {
                            return io(no)
                        },
                        useDebugValue: mo,
                        useResponder: Wa,
                        useDeferredValue: function(t, e) {
                            var n = io(no),
                                r = n[0],
                                i = n[1];
                            return fo((function() {
                                var n = Ha.suspense;
                                Ha.suspense = void 0 === e ? null : e;
                                try {
                                    i(t)
                                } finally {
                                    Ha.suspense = n
                                }
                            }), [t, e]), r
                        },
                        useTransition: function(t) {
                            var e = io(no),
                                n = e[0];
                            return e = e[1], [vo(wo.bind(null, e, t), [e, t]), n]
                        }
                    },
                    Io = null,
                    Eo = null,
                    Oo = !1;

                function Ao(t, e) {
                    var n = jl(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = e, n.return = t, n.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
                }

                function Co(t, e) {
                    switch (t.tag) {
                        case 5:
                            var n = t.type;
                            return null !== (e = 1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, !0);
                        case 6:
                            return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, !0);
                        default:
                            return !1
                    }
                }

                function No(t) {
                    if (Oo) {
                        var e = Eo;
                        if (e) {
                            var n = e;
                            if (!Co(t, e)) {
                                if (!(e = En(n.nextSibling)) || !Co(t, e)) return t.effectTag = -1025 & t.effectTag | 2, Oo = !1, void(Io = t);
                                Ao(Io, n)
                            }
                            Io = t, Eo = En(e.firstChild)
                        } else t.effectTag = -1025 & t.effectTag | 2, Oo = !1, Io = t
                    }
                }

                function Do(t) {
                    for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
                    Io = t
                }

                function Mo(t) {
                    if (t !== Io) return !1;
                    if (!Oo) return Do(t), Oo = !0, !1;
                    var e = t.type;
                    if (5 !== t.tag || "head" !== e && "body" !== e && !Tn(e, t.memoizedProps))
                        for (e = Eo; e;) Ao(t, e), e = En(e.nextSibling);
                    if (Do(t), 13 === t.tag) {
                        if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(o(317));
                        t: {
                            for (t = t.nextSibling, e = 0; t;) {
                                if (8 === t.nodeType) {
                                    var n = t.data;
                                    if (n === vn) {
                                        if (0 === e) {
                                            Eo = En(t.nextSibling);
                                            break t
                                        }
                                        e--
                                    } else n !== bn && n !== wn && n !== gn || e++
                                }
                                t = t.nextSibling
                            }
                            Eo = null
                        }
                    } else Eo = Io ? En(t.stateNode.nextSibling) : null;
                    return !0
                }

                function Bo() {
                    Eo = Io = null, Oo = !1
                }
                var Po = G.ReactCurrentOwner,
                    Fo = !1;

                function Lo(t, e, n, r) {
                    e.child = null === t ? Na(e, null, n, r) : Ca(e, t.child, n, r)
                }

                function Ro(t, e, n, r, i) {
                    n = n.render;
                    var a = e.ref;
                    return la(e, i), r = Za(t, e, n, r, a, i), null === t || Fo ? (e.effectTag |= 1, Lo(t, e, r, i), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), es(t, e, i))
                }

                function Uo(t, e, n, r, i, a) {
                    if (null === t) {
                        var o = n.type;
                        return "function" !== typeof o || Vl(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = Yl(n.type, null, r, null, e.mode, a)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = o, zo(t, e, o, r, i, a))
                    }
                    return o = t.child, i < a && (i = o.memoizedProps, (n = null !== (n = n.compare) ? n : Hr)(i, r) && t.ref === e.ref) ? es(t, e, a) : (e.effectTag |= 1, (t = Wl(o, r)).ref = e.ref, t.return = e, e.child = t)
                }

                function zo(t, e, n, r, i, a) {
                    return null !== t && Hr(t.memoizedProps, r) && t.ref === e.ref && (Fo = !1, i < a) ? (e.expirationTime = t.expirationTime, es(t, e, a)) : Vo(t, e, n, r, a)
                }

                function jo(t, e) {
                    var n = e.ref;
                    (null === t && null !== n || null !== t && t.ref !== n) && (e.effectTag |= 128)
                }

                function Vo(t, e, n, r, i) {
                    var a = _i(n) ? gi : bi.current;
                    return a = wi(e, a), la(e, i), n = Za(t, e, n, r, a, i), null === t || Fo ? (e.effectTag |= 1, Lo(t, e, n, i), e.child) : (e.updateQueue = t.updateQueue, e.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), es(t, e, i))
                }

                function Wo(t, e, n, r, i) {
                    if (_i(n)) {
                        var a = !0;
                        ki(e)
                    } else a = !1;
                    if (la(e, i), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), xa(e, n, r), ka(e, n, r, i), r = !0;
                    else if (null === t) {
                        var o = e.stateNode,
                            s = e.memoizedProps;
                        o.props = s;
                        var l = o.context,
                            u = n.contextType;
                        "object" === typeof u && null !== u ? u = ua(u) : u = wi(e, u = _i(n) ? gi : bi.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                        d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (s !== r || l !== u) && Ta(e, o, r, u), ca = !1;
                        var f = e.memoizedState;
                        o.state = f, ma(e, r, o, i), l = e.memoizedState, s !== r || f !== l || vi.current || ca ? ("function" === typeof c && (wa(e, n, c, r), l = e.memoizedState), (s = ca || Sa(e, n, s, r, f, l, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (e.effectTag |= 4)) : ("function" === typeof o.componentDidMount && (e.effectTag |= 4), e.memoizedProps = r, e.memoizedState = l), o.props = r, o.state = l, o.context = u, r = s) : ("function" === typeof o.componentDidMount && (e.effectTag |= 4), r = !1)
                    } else o = e.stateNode, fa(t, e), s = e.memoizedProps, o.props = e.type === e.elementType ? s : ta(e.type, s), l = o.context, "object" === typeof(u = n.contextType) && null !== u ? u = ua(u) : u = wi(e, u = _i(n) ? gi : bi.current), (d = "function" === typeof(c = n.getDerivedStateFromProps) || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (s !== r || l !== u) && Ta(e, o, r, u), ca = !1, l = e.memoizedState, o.state = l, ma(e, r, o, i), f = e.memoizedState, s !== r || l !== f || vi.current || ca ? ("function" === typeof c && (wa(e, n, c, r), f = e.memoizedState), (c = ca || Sa(e, n, s, r, l, f, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, f, u), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, f, u)), "function" === typeof o.componentDidUpdate && (e.effectTag |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (e.effectTag |= 256)) : ("function" !== typeof o.componentDidUpdate || s === t.memoizedProps && l === t.memoizedState || (e.effectTag |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || s === t.memoizedProps && l === t.memoizedState || (e.effectTag |= 256), e.memoizedProps = r, e.memoizedState = f), o.props = r, o.state = f, o.context = u, r = c) : ("function" !== typeof o.componentDidUpdate || s === t.memoizedProps && l === t.memoizedState || (e.effectTag |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || s === t.memoizedProps && l === t.memoizedState || (e.effectTag |= 256), r = !1);
                    return Yo(t, e, n, r, a, i)
                }

                function Yo(t, e, n, r, i, a) {
                    jo(t, e);
                    var o = 0 !== (64 & e.effectTag);
                    if (!r && !o) return i && Ii(e, n, !1), es(t, e, a);
                    r = e.stateNode, Po.current = e;
                    var s = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return e.effectTag |= 1, null !== t && o ? (e.child = Ca(e, t.child, null, a), e.child = Ca(e, null, s, a)) : Lo(t, e, s, a), e.memoizedState = r.state, i && Ii(e, n, !0), e.child
                }

                function Ho(t) {
                    var e = t.stateNode;
                    e.pendingContext ? xi(0, e.pendingContext, e.pendingContext !== e.context) : e.context && xi(0, e.context, !1), La(t, e.containerInfo)
                }
                var $o, Ko, Qo, qo, Go = {
                    dehydrated: null,
                    retryTime: 0
                };

                function Xo(t, e, n) {
                    var r, i = e.mode,
                        a = e.pendingProps,
                        o = ja.current,
                        s = !1;
                    if ((r = 0 !== (64 & e.effectTag)) || (r = 0 !== (2 & o) && (null === t || null !== t.memoizedState)), r ? (s = !0, e.effectTag &= -65) : null !== t && null === t.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (o |= 1), yi(ja, 1 & o), null === t) {
                        if (void 0 !== a.fallback && No(e), s) {
                            if (s = a.fallback, (a = Hl(null, i, 0, null)).return = e, 0 === (2 & e.mode))
                                for (t = null !== e.memoizedState ? e.child.child : e.child, a.child = t; null !== t;) t.return = a, t = t.sibling;
                            return (n = Hl(s, i, n, null)).return = e, a.sibling = n, e.memoizedState = Go, e.child = a, n
                        }
                        return i = a.children, e.memoizedState = null, e.child = Na(e, null, i, n)
                    }
                    if (null !== t.memoizedState) {
                        if (i = (t = t.child).sibling, s) {
                            if (a = a.fallback, (n = Wl(t, t.pendingProps)).return = e, 0 === (2 & e.mode) && (s = null !== e.memoizedState ? e.child.child : e.child) !== t.child)
                                for (n.child = s; null !== s;) s.return = n, s = s.sibling;
                            return (i = Wl(i, a)).return = e, n.sibling = i, n.childExpirationTime = 0, e.memoizedState = Go, e.child = n, i
                        }
                        return n = Ca(e, t.child, a.children, n), e.memoizedState = null, e.child = n
                    }
                    if (t = t.child, s) {
                        if (s = a.fallback, (a = Hl(null, i, 0, null)).return = e, a.child = t, null !== t && (t.return = a), 0 === (2 & e.mode))
                            for (t = null !== e.memoizedState ? e.child.child : e.child, a.child = t; null !== t;) t.return = a, t = t.sibling;
                        return (n = Hl(s, i, n, null)).return = e, a.sibling = n, n.effectTag |= 2, a.childExpirationTime = 0, e.memoizedState = Go, e.child = a, n
                    }
                    return e.memoizedState = null, e.child = Ca(e, t, a.children, n)
                }

                function Jo(t, e) {
                    t.expirationTime < e && (t.expirationTime = e);
                    var n = t.alternate;
                    null !== n && n.expirationTime < e && (n.expirationTime = e), sa(t.return, e)
                }

                function Zo(t, e, n, r, i, a) {
                    var o = t.memoizedState;
                    null === o ? t.memoizedState = {
                        isBackwards: e,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailExpiration: 0,
                        tailMode: i,
                        lastEffect: a
                    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailExpiration = 0, o.tailMode = i, o.lastEffect = a)
                }

                function ts(t, e, n) {
                    var r = e.pendingProps,
                        i = r.revealOrder,
                        a = r.tail;
                    if (Lo(t, e, r.children, n), 0 !== (2 & (r = ja.current))) r = 1 & r | 2, e.effectTag |= 64;
                    else {
                        if (null !== t && 0 !== (64 & t.effectTag)) t: for (t = e.child; null !== t;) {
                            if (13 === t.tag) null !== t.memoizedState && Jo(t, n);
                            else if (19 === t.tag) Jo(t, n);
                            else if (null !== t.child) {
                                t.child.return = t, t = t.child;
                                continue
                            }
                            if (t === e) break t;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) break t;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                        r &= 1
                    }
                    if (yi(ja, r), 0 === (2 & e.mode)) e.memoizedState = null;
                    else switch (i) {
                        case "forwards":
                            for (n = e.child, i = null; null !== n;) null !== (t = n.alternate) && null === Va(t) && (i = n), n = n.sibling;
                            null === (n = i) ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), Zo(e, !1, i, n, a, e.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, i = e.child, e.child = null; null !== i;) {
                                if (null !== (t = i.alternate) && null === Va(t)) {
                                    e.child = i;
                                    break
                                }
                                t = i.sibling, i.sibling = n, n = i, i = t
                            }
                            Zo(e, !0, n, null, a, e.lastEffect);
                            break;
                        case "together":
                            Zo(e, !1, null, null, void 0, e.lastEffect);
                            break;
                        default:
                            e.memoizedState = null
                    }
                    return e.child
                }

                function es(t, e, n) {
                    null !== t && (e.dependencies = t.dependencies);
                    var r = e.expirationTime;
                    if (0 !== r && xl(r), e.childExpirationTime < n) return null;
                    if (null !== t && e.child !== t.child) throw Error(o(153));
                    if (null !== e.child) {
                        for (n = Wl(t = e.child, t.pendingProps), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = Wl(t, t.pendingProps)).return = e;
                        n.sibling = null
                    }
                    return e.child
                }

                function ns(t, e) {
                    switch (t.tailMode) {
                        case "hidden":
                            e = t.tail;
                            for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
                            null === n ? t.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = t.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null
                    }
                }

                function rs(t, e, n) {
                    var r = e.pendingProps;
                    switch (e.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return _i(e.type) && Si(), null;
                        case 3:
                            return Ra(), pi(vi), pi(bi), (n = e.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== t && null !== t.child || !Mo(e) || (e.effectTag |= 4), Ko(e), null;
                        case 5:
                            za(e), n = Fa(Pa.current);
                            var a = e.type;
                            if (null !== t && null != e.stateNode) Qo(t, e, a, r, n), t.ref !== e.ref && (e.effectTag |= 128);
                            else {
                                if (!r) {
                                    if (null === e.stateNode) throw Error(o(166));
                                    return null
                                }
                                if (t = Fa(Ma.current), Mo(e)) {
                                    r = e.stateNode, a = e.type;
                                    var s = e.memoizedProps;
                                    switch (r[Cn] = e, r[Nn] = s, a) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Qe("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (t = 0; t < Xt.length; t++) Qe(Xt[t], r);
                                            break;
                                        case "source":
                                            Qe("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Qe("error", r), Qe("load", r);
                                            break;
                                        case "form":
                                            Qe("reset", r), Qe("submit", r);
                                            break;
                                        case "details":
                                            Qe("toggle", r);
                                            break;
                                        case "input":
                                            xt(r, s), Qe("invalid", r), un(n, "onChange");
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!s.multiple
                                            }, Qe("invalid", r), un(n, "onChange");
                                            break;
                                        case "textarea":
                                            Nt(r, s), Qe("invalid", r), un(n, "onChange")
                                    }
                                    for (var l in on(a, s), t = null, s)
                                        if (s.hasOwnProperty(l)) {
                                            var u = s[l];
                                            "children" === l ? "string" === typeof u ? r.textContent !== u && (t = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (t = ["children", "" + u]) : T.hasOwnProperty(l) && null != u && un(n, l)
                                        } switch (a) {
                                        case "input":
                                            wt(r), It(r, s, !0);
                                            break;
                                        case "textarea":
                                            wt(r), Mt(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof s.onClick && (r.onclick = cn)
                                    }
                                    n = t, e.updateQueue = n, null !== n && (e.effectTag |= 4)
                                } else {
                                    switch (l = 9 === n.nodeType ? n : n.ownerDocument, t === ln && (t = Ft(a)), t === ln ? "script" === a ? ((t = l.createElement("div")).innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : "string" === typeof r.is ? t = l.createElement(a, {
                                            is: r.is
                                        }) : (t = l.createElement(a), "select" === a && (l = t, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : t = l.createElementNS(t, a), t[Cn] = e, t[Nn] = r, $o(t, e, !1, !1), e.stateNode = t, l = sn(a, r), a) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Qe("load", t), u = r;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (u = 0; u < Xt.length; u++) Qe(Xt[u], t);
                                            u = r;
                                            break;
                                        case "source":
                                            Qe("error", t), u = r;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Qe("error", t), Qe("load", t), u = r;
                                            break;
                                        case "form":
                                            Qe("reset", t), Qe("submit", t), u = r;
                                            break;
                                        case "details":
                                            Qe("toggle", t), u = r;
                                            break;
                                        case "input":
                                            xt(t, r), u = St(t, r), Qe("invalid", t), un(n, "onChange");
                                            break;
                                        case "option":
                                            u = Ot(t, r);
                                            break;
                                        case "select":
                                            t._wrapperState = {
                                                wasMultiple: !!r.multiple
                                            }, u = i({}, r, {
                                                value: void 0
                                            }), Qe("invalid", t), un(n, "onChange");
                                            break;
                                        case "textarea":
                                            Nt(t, r), u = Ct(t, r), Qe("invalid", t), un(n, "onChange");
                                            break;
                                        default:
                                            u = r
                                    }
                                    on(a, u);
                                    var c = u;
                                    for (s in c)
                                        if (c.hasOwnProperty(s)) {
                                            var d = c[s];
                                            "style" === s ? rn(t, d) : "dangerouslySetInnerHTML" === s ? null != (d = d ? d.__html : void 0) && zt(t, d) : "children" === s ? "string" === typeof d ? ("textarea" !== a || "" !== d) && jt(t, d) : "number" === typeof d && jt(t, "" + d) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (T.hasOwnProperty(s) ? null != d && un(n, s) : null != d && X(t, s, d, l))
                                        } switch (a) {
                                        case "input":
                                            wt(t), It(t, r, !1);
                                            break;
                                        case "textarea":
                                            wt(t), Mt(t);
                                            break;
                                        case "option":
                                            null != r.value && t.setAttribute("value", "" + vt(r.value));
                                            break;
                                        case "select":
                                            t.multiple = !!r.multiple, null != (n = r.value) ? At(t, !!r.multiple, n, !1) : null != r.defaultValue && At(t, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof u.onClick && (t.onclick = cn)
                                    }
                                    xn(a, r) && (e.effectTag |= 4)
                                }
                                null !== e.ref && (e.effectTag |= 128)
                            }
                            return null;
                        case 6:
                            if (t && null != e.stateNode) qo(t, e, t.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === e.stateNode) throw Error(o(166));
                                n = Fa(Pa.current), Fa(Ma.current), Mo(e) ? (n = e.stateNode, r = e.memoizedProps, n[Cn] = e, n.nodeValue !== r && (e.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Cn] = e, e.stateNode = n)
                            }
                            return null;
                        case 13:
                            return pi(ja), r = e.memoizedState, 0 !== (64 & e.effectTag) ? (e.expirationTime = n, e) : (n = null !== r, r = !1, null === t ? void 0 !== e.memoizedProps.fallback && Mo(e) : (r = null !== (a = t.memoizedState), n || null === a || null !== (a = t.child.sibling) && (null !== (s = e.firstEffect) ? (e.firstEffect = a, a.nextEffect = s) : (e.firstEffect = e.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), n && !r && 0 !== (2 & e.mode) && (null === t && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & ja.current) ? Ws === Ms && (Ws = Fs) : (Ws !== Ms && Ws !== Fs || (Ws = Ls), 0 !== Qs && null !== zs && (Gl(zs, Vs), Xl(zs, Qs)))), (n || r) && (e.effectTag |= 4), null);
                        case 4:
                            return Ra(), Ko(e), null;
                        case 10:
                            return oa(e), null;
                        case 19:
                            if (pi(ja), null === (r = e.memoizedState)) return null;
                            if (a = 0 !== (64 & e.effectTag), null === (s = r.rendering)) {
                                if (a) ns(r, !1);
                                else if (Ws !== Ms || null !== t && 0 !== (64 & t.effectTag))
                                    for (s = e.child; null !== s;) {
                                        if (null !== (t = Va(s))) {
                                            for (e.effectTag |= 64, ns(r, !1), null !== (a = t.updateQueue) && (e.updateQueue = a, e.effectTag |= 4), null === r.lastEffect && (e.firstEffect = null), e.lastEffect = r.lastEffect, r = e.child; null !== r;) s = n, (a = r).effectTag &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (t = a.alternate) ? (a.childExpirationTime = 0, a.expirationTime = s, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null) : (a.childExpirationTime = t.childExpirationTime, a.expirationTime = t.expirationTime, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, s = t.dependencies, a.dependencies = null === s ? null : {
                                                expirationTime: s.expirationTime,
                                                firstContext: s.firstContext,
                                                responders: s.responders
                                            }), r = r.sibling;
                                            return yi(ja, 1 & ja.current | 2), e.child
                                        }
                                        s = s.sibling
                                    }
                            } else {
                                if (!a)
                                    if (null !== (t = Va(s))) {
                                        if (e.effectTag |= 64, a = !0, null !== (n = t.updateQueue) && (e.updateQueue = n, e.effectTag |= 4), ns(r, !0), null === r.tail && "hidden" === r.tailMode && !s.alternate) return null !== (e = e.lastEffect = r.lastEffect) && (e.nextEffect = null), null
                                    } else 2 * Hi() - r.renderingStartTime > r.tailExpiration && 1 < n && (e.effectTag |= 64, a = !0, ns(r, !1), e.expirationTime = e.childExpirationTime = n - 1);
                                r.isBackwards ? (s.sibling = e.child, e.child = s) : (null !== (n = r.last) ? n.sibling = s : e.child = s, r.last = s)
                            }
                            return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = Hi() + 500), n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = e.lastEffect, r.renderingStartTime = Hi(), n.sibling = null, e = ja.current, yi(ja, a ? 1 & e | 2 : 1 & e), n) : null
                    }
                    throw Error(o(156, e.tag))
                }

                function is(t) {
                    switch (t.tag) {
                        case 1:
                            _i(t.type) && Si();
                            var e = t.effectTag;
                            return 4096 & e ? (t.effectTag = -4097 & e | 64, t) : null;
                        case 3:
                            if (Ra(), pi(vi), pi(bi), 0 !== (64 & (e = t.effectTag))) throw Error(o(285));
                            return t.effectTag = -4097 & e | 64, t;
                        case 5:
                            return za(t), null;
                        case 13:
                            return pi(ja), 4096 & (e = t.effectTag) ? (t.effectTag = -4097 & e | 64, t) : null;
                        case 19:
                            return pi(ja), null;
                        case 4:
                            return Ra(), null;
                        case 10:
                            return oa(t), null;
                        default:
                            return null
                    }
                }

                function as(t, e) {
                    return {
                        value: t,
                        source: e,
                        stack: bt(e)
                    }
                }
                $o = function(t, e) {
                    for (var n = e.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === e) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ko = function() {}, Qo = function(t, e, n, r, a) {
                    var o = t.memoizedProps;
                    if (o !== r) {
                        var s, l, u = e.stateNode;
                        switch (Fa(Ma.current), t = null, n) {
                            case "input":
                                o = St(u, o), r = St(u, r), t = [];
                                break;
                            case "option":
                                o = Ot(u, o), r = Ot(u, r), t = [];
                                break;
                            case "select":
                                o = i({}, o, {
                                    value: void 0
                                }), r = i({}, r, {
                                    value: void 0
                                }), t = [];
                                break;
                            case "textarea":
                                o = Ct(u, o), r = Ct(u, r), t = [];
                                break;
                            default:
                                "function" !== typeof o.onClick && "function" === typeof r.onClick && (u.onclick = cn)
                        }
                        for (s in on(n, r), n = null, o)
                            if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
                                if ("style" === s)
                                    for (l in u = o[s]) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
                                else "dangerouslySetInnerHTML" !== s && "children" !== s && "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (T.hasOwnProperty(s) ? t || (t = []) : (t = t || []).push(s, null));
                        for (s in r) {
                            var c = r[s];
                            if (u = null != o ? o[s] : void 0, r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                                if ("style" === s)
                                    if (u) {
                                        for (l in u) !u.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                                        for (l in c) c.hasOwnProperty(l) && u[l] !== c[l] && (n || (n = {}), n[l] = c[l])
                                    } else n || (t || (t = []), t.push(s, n)), n = c;
                            else "dangerouslySetInnerHTML" === s ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (t = t || []).push(s, c)) : "children" === s ? u === c || "string" !== typeof c && "number" !== typeof c || (t = t || []).push(s, "" + c) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && (T.hasOwnProperty(s) ? (null != c && un(a, s), t || u === c || (t = [])) : (t = t || []).push(s, c))
                        }
                        n && (t = t || []).push("style", n), a = t, (e.updateQueue = a) && (e.effectTag |= 4)
                    }
                }, qo = function(t, e, n, r) {
                    n !== r && (e.effectTag |= 4)
                };
                var os = "function" === typeof WeakSet ? WeakSet : Set;

                function ss(t, e) {
                    var n = e.source,
                        r = e.stack;
                    null === r && null !== n && (r = bt(n)), null !== n && mt(n.type), e = e.value, null !== t && 1 === t.tag && mt(t.type);
                    try {
                        console.error(e)
                    } catch (i) {
                        setTimeout((function() {
                            throw i
                        }))
                    }
                }

                function ls(t) {
                    var e = t.ref;
                    if (null !== e)
                        if ("function" === typeof e) try {
                            e(null)
                        } catch (n) {
                            Pl(t, n)
                        } else e.current = null
                }

                function us(t, e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 3:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & e.effectTag && null !== t) {
                                var n = t.memoizedProps,
                                    r = t.memoizedState;
                                e = (t = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? n : ta(e.type, n), r), t.__reactInternalSnapshotBeforeUpdate = e
                            }
                            return
                    }
                    throw Error(o(163))
                }

                function cs(t, e) {
                    if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) {
                        var n = e = e.next;
                        do {
                            if ((n.tag & t) === t) {
                                var r = n.destroy;
                                n.destroy = void 0, void 0 !== r && r()
                            }
                            n = n.next
                        } while (n !== e)
                    }
                }

                function ds(t, e) {
                    if (null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)) {
                        var n = e = e.next;
                        do {
                            if ((n.tag & t) === t) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== e)
                    }
                }

                function fs(t, e, n) {
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            return void ds(3, n);
                        case 1:
                            if (t = n.stateNode, 4 & n.effectTag)
                                if (null === e) t.componentDidMount();
                                else {
                                    var r = n.elementType === n.type ? e.memoizedProps : ta(n.type, e.memoizedProps);
                                    t.componentDidUpdate(r, e.memoizedState, t.__reactInternalSnapshotBeforeUpdate)
                                } return void(null !== (e = n.updateQueue) && ba(n, e, t));
                        case 3:
                            if (null !== (e = n.updateQueue)) {
                                if (t = null, null !== n.child) switch (n.child.tag) {
                                    case 5:
                                    case 1:
                                        t = n.child.stateNode
                                }
                                ba(n, e, t)
                            }
                            return;
                        case 5:
                            return t = n.stateNode, void(null === e && 4 & n.effectTag && xn(n.type, n.memoizedProps) && t.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                            return;
                        case 13:
                            return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Le(n)))))
                    }
                    throw Error(o(163))
                }

                function hs(t, e, n) {
                    switch ("function" === typeof Ul && Ul(e), e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) {
                                var r = t.next;
                                Qi(97 < n ? 97 : n, (function() {
                                    var t = r;
                                    do {
                                        var n = t.destroy;
                                        if (void 0 !== n) {
                                            var i = e;
                                            try {
                                                n()
                                            } catch (a) {
                                                Pl(i, a)
                                            }
                                        }
                                        t = t.next
                                    } while (t !== r)
                                }))
                            }
                            break;
                        case 1:
                            ls(e), "function" === typeof(n = e.stateNode).componentWillUnmount && function(t, e) {
                                try {
                                    e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                                } catch (n) {
                                    Pl(t, n)
                                }
                            }(e, n);
                            break;
                        case 5:
                            ls(e);
                            break;
                        case 4:
                            gs(t, e, n)
                    }
                }

                function ps(t) {
                    var e = t.alternate;
                    t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.alternate = null, t.firstEffect = null, t.lastEffect = null, t.pendingProps = null, t.memoizedProps = null, t.stateNode = null, null !== e && ps(e)
                }

                function ys(t) {
                    return 5 === t.tag || 3 === t.tag || 4 === t.tag
                }

                function ms(t) {
                    t: {
                        for (var e = t.return; null !== e;) {
                            if (ys(e)) {
                                var n = e;
                                break t
                            }
                            e = e.return
                        }
                        throw Error(o(160))
                    }
                    switch (e = n.stateNode, n.tag) {
                        case 5:
                            var r = !1;
                            break;
                        case 3:
                        case 4:
                            e = e.containerInfo, r = !0;
                            break;
                        default:
                            throw Error(o(161))
                    }
                    16 & n.effectTag && (jt(e, ""), n.effectTag &= -17);t: e: for (n = t;;) {
                        for (; null === n.sibling;) {
                            if (null === n.return || ys(n.return)) {
                                n = null;
                                break t
                            }
                            n = n.return
                        }
                        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                            if (2 & n.effectTag) continue e;
                            if (null === n.child || 4 === n.tag) continue e;
                            n.child.return = n, n = n.child
                        }
                        if (!(2 & n.effectTag)) {
                            n = n.stateNode;
                            break t
                        }
                    }
                    r ? bs(t, n, e) : vs(t, n, e)
                }

                function bs(t, e, n) {
                    var r = t.tag,
                        i = 5 === r || 6 === r;
                    if (i) t = i ? t.stateNode : t.stateNode.instance, e ? 8 === n.nodeType ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (8 === n.nodeType ? (e = n.parentNode).insertBefore(t, n) : (e = n).appendChild(t), null !== (n = n._reactRootContainer) && void 0 !== n || null !== e.onclick || (e.onclick = cn));
                    else if (4 !== r && null !== (t = t.child))
                        for (bs(t, e, n), t = t.sibling; null !== t;) bs(t, e, n), t = t.sibling
                }

                function vs(t, e, n) {
                    var r = t.tag,
                        i = 5 === r || 6 === r;
                    if (i) t = i ? t.stateNode : t.stateNode.instance, e ? n.insertBefore(t, e) : n.appendChild(t);
                    else if (4 !== r && null !== (t = t.child))
                        for (vs(t, e, n), t = t.sibling; null !== t;) vs(t, e, n), t = t.sibling
                }

                function gs(t, e, n) {
                    for (var r, i, a = e, s = !1;;) {
                        if (!s) {
                            s = a.return;
                            t: for (;;) {
                                if (null === s) throw Error(o(160));
                                switch (r = s.stateNode, s.tag) {
                                    case 5:
                                        i = !1;
                                        break t;
                                    case 3:
                                    case 4:
                                        r = r.containerInfo, i = !0;
                                        break t
                                }
                                s = s.return
                            }
                            s = !0
                        }
                        if (5 === a.tag || 6 === a.tag) {
                            t: for (var l = t, u = a, c = n, d = u;;)
                                if (hs(l, d, c), null !== d.child && 4 !== d.tag) d.child.return = d, d = d.child;
                                else {
                                    if (d === u) break t;
                                    for (; null === d.sibling;) {
                                        if (null === d.return || d.return === u) break t;
                                        d = d.return
                                    }
                                    d.sibling.return = d.return, d = d.sibling
                                }i ? (l = r, u = a.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(u) : l.removeChild(u)) : r.removeChild(a.stateNode)
                        }
                        else if (4 === a.tag) {
                            if (null !== a.child) {
                                r = a.stateNode.containerInfo, i = !0, a.child.return = a, a = a.child;
                                continue
                            }
                        } else if (hs(t, a, n), null !== a.child) {
                            a.child.return = a, a = a.child;
                            continue
                        }
                        if (a === e) break;
                        for (; null === a.sibling;) {
                            if (null === a.return || a.return === e) return;
                            4 === (a = a.return).tag && (s = !1)
                        }
                        a.sibling.return = a.return, a = a.sibling
                    }
                }

                function ws(t, e) {
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            return void cs(3, e);
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            var n = e.stateNode;
                            if (null != n) {
                                var r = e.memoizedProps,
                                    i = null !== t ? t.memoizedProps : r;
                                t = e.type;
                                var a = e.updateQueue;
                                if (e.updateQueue = null, null !== a) {
                                    for (n[Nn] = r, "input" === t && "radio" === r.type && null != r.name && Tt(n, r), sn(t, i), e = sn(t, r), i = 0; i < a.length; i += 2) {
                                        var s = a[i],
                                            l = a[i + 1];
                                        "style" === s ? rn(n, l) : "dangerouslySetInnerHTML" === s ? zt(n, l) : "children" === s ? jt(n, l) : X(n, s, l, e)
                                    }
                                    switch (t) {
                                        case "input":
                                            kt(n, r);
                                            break;
                                        case "textarea":
                                            Dt(n, r);
                                            break;
                                        case "select":
                                            e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (t = r.value) ? At(n, !!r.multiple, t, !1) : e !== !!r.multiple && (null != r.defaultValue ? At(n, !!r.multiple, r.defaultValue, !0) : At(n, !!r.multiple, r.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === e.stateNode) throw Error(o(162));
                            return void(e.stateNode.nodeValue = e.memoizedProps);
                        case 3:
                            return void((e = e.stateNode).hydrate && (e.hydrate = !1, Le(e.containerInfo)));
                        case 13:
                            if (n = e, null === e.memoizedState ? r = !1 : (r = !0, n = e.child, Gs = Hi()), null !== n) t: for (t = n;;) {
                                if (5 === t.tag) a = t.stateNode, r ? "function" === typeof(a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = t.stateNode, i = void 0 !== (i = t.memoizedProps.style) && null !== i && i.hasOwnProperty("display") ? i.display : null, a.style.display = nn("display", i));
                                else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
                                else {
                                    if (13 === t.tag && null !== t.memoizedState && null === t.memoizedState.dehydrated) {
                                        (a = t.child.sibling).return = t, t = a;
                                        continue
                                    }
                                    if (null !== t.child) {
                                        t.child.return = t, t = t.child;
                                        continue
                                    }
                                }
                                if (t === n) break;
                                for (; null === t.sibling;) {
                                    if (null === t.return || t.return === n) break t;
                                    t = t.return
                                }
                                t.sibling.return = t.return, t = t.sibling
                            }
                            return void _s(e);
                        case 19:
                            return void _s(e)
                    }
                    throw Error(o(163))
                }

                function _s(t) {
                    var e = t.updateQueue;
                    if (null !== e) {
                        t.updateQueue = null;
                        var n = t.stateNode;
                        null === n && (n = t.stateNode = new os), e.forEach((function(e) {
                            var r = Ll.bind(null, t, e);
                            n.has(e) || (n.add(e), e.then(r, r))
                        }))
                    }
                }
                var Ss = "function" === typeof WeakMap ? WeakMap : Map;

                function xs(t, e, n) {
                    (n = ha(n, null)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = e.value;
                    return n.callback = function() {
                        Zs || (Zs = !0, tl = r), ss(t, e)
                    }, n
                }

                function Ts(t, e, n) {
                    (n = ha(n, null)).tag = 3;
                    var r = t.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var i = e.value;
                        n.payload = function() {
                            return ss(t, e), r(i)
                        }
                    }
                    var a = t.stateNode;
                    return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function() {
                        "function" !== typeof r && (null === el ? el = new Set([this]) : el.add(this), ss(t, e));
                        var n = e.stack;
                        this.componentDidCatch(e.value, {
                            componentStack: null !== n ? n : ""
                        })
                    }), n
                }
                var ks, Is = Math.ceil,
                    Es = G.ReactCurrentDispatcher,
                    Os = G.ReactCurrentOwner,
                    As = 0,
                    Cs = 8,
                    Ns = 16,
                    Ds = 32,
                    Ms = 0,
                    Bs = 1,
                    Ps = 2,
                    Fs = 3,
                    Ls = 4,
                    Rs = 5,
                    Us = As,
                    zs = null,
                    js = null,
                    Vs = 0,
                    Ws = Ms,
                    Ys = null,
                    Hs = 1073741823,
                    $s = 1073741823,
                    Ks = null,
                    Qs = 0,
                    qs = !1,
                    Gs = 0,
                    Xs = 500,
                    Js = null,
                    Zs = !1,
                    tl = null,
                    el = null,
                    nl = !1,
                    rl = null,
                    il = 90,
                    al = null,
                    ol = 0,
                    sl = null,
                    ll = 0;

                function ul() {
                    return (Us & (Ns | Ds)) !== As ? 1073741821 - (Hi() / 10 | 0) : 0 !== ll ? ll : ll = 1073741821 - (Hi() / 10 | 0)
                }

                function cl(t, e, n) {
                    if (0 === (2 & (e = e.mode))) return 1073741823;
                    var r = $i();
                    if (0 === (4 & e)) return 99 === r ? 1073741823 : 1073741822;
                    if ((Us & Ns) !== As) return Vs;
                    if (null !== n) t = Zi(t, 0 | n.timeoutMs || 5e3, 250);
                    else switch (r) {
                        case 99:
                            t = 1073741823;
                            break;
                        case 98:
                            t = Zi(t, 150, 100);
                            break;
                        case 97:
                        case 96:
                            t = Zi(t, 5e3, 250);
                            break;
                        case 95:
                            t = 2;
                            break;
                        default:
                            throw Error(o(326))
                    }
                    return null !== zs && t === Vs && --t, t
                }

                function dl(t, e) {
                    if (50 < ol) throw ol = 0, sl = null, Error(o(185));
                    if (null !== (t = fl(t, e))) {
                        var n = $i();
                        1073741823 === e ? (Us & Cs) !== As && (Us & (Ns | Ds)) === As ? ml(t) : (pl(t), Us === As && Xi()) : pl(t), (4 & Us) === As || 98 !== n && 99 !== n || (null === al ? al = new Map([
                            [t, e]
                        ]) : (void 0 === (n = al.get(t)) || n > e) && al.set(t, e))
                    }
                }

                function fl(t, e) {
                    t.expirationTime < e && (t.expirationTime = e);
                    var n = t.alternate;
                    null !== n && n.expirationTime < e && (n.expirationTime = e);
                    var r = t.return,
                        i = null;
                    if (null === r && 3 === t.tag) i = t.stateNode;
                    else
                        for (; null !== r;) {
                            if (n = r.alternate, r.childExpirationTime < e && (r.childExpirationTime = e), null !== n && n.childExpirationTime < e && (n.childExpirationTime = e), null === r.return && 3 === r.tag) {
                                i = r.stateNode;
                                break
                            }
                            r = r.return
                        }
                    return null !== i && (zs === i && (xl(e), Ws === Ls && Gl(i, Vs)), Xl(i, e)), i
                }

                function hl(t) {
                    var e = t.lastExpiredTime;
                    if (0 !== e) return e;
                    if (!ql(t, e = t.firstPendingTime)) return e;
                    var n = t.lastPingedTime;
                    return 2 >= (t = n > (t = t.nextKnownPendingLevel) ? n : t) && e !== t ? 0 : t
                }

                function pl(t) {
                    if (0 !== t.lastExpiredTime) t.callbackExpirationTime = 1073741823, t.callbackPriority = 99, t.callbackNode = Gi(ml.bind(null, t));
                    else {
                        var e = hl(t),
                            n = t.callbackNode;
                        if (0 === e) null !== n && (t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90);
                        else {
                            var r = ul();
                            if (1073741823 === e ? r = 99 : 1 === e || 2 === e ? r = 95 : r = 0 >= (r = 10 * (1073741821 - e) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                                var i = t.callbackPriority;
                                if (t.callbackExpirationTime === e && i >= r) return;
                                n !== Ri && Ai(n)
                            }
                            t.callbackExpirationTime = e, t.callbackPriority = r, e = 1073741823 === e ? Gi(ml.bind(null, t)) : qi(r, yl.bind(null, t), {
                                timeout: 10 * (1073741821 - e) - Hi()
                            }), t.callbackNode = e
                        }
                    }
                }

                function yl(t, e) {
                    if (ll = 0, e) return Jl(t, e = ul()), pl(t), null;
                    var n = hl(t);
                    if (0 !== n) {
                        if (e = t.callbackNode, (Us & (Ns | Ds)) !== As) throw Error(o(327));
                        if (Dl(), t === zs && n === Vs || gl(t, n), null !== js) {
                            var r = Us;
                            Us |= Ns;
                            for (var i = _l();;) try {
                                kl();
                                break
                            } catch (l) {
                                wl(t, l)
                            }
                            if (aa(), Us = r, Es.current = i, Ws === Bs) throw e = Ys, gl(t, n), Gl(t, n), pl(t), e;
                            if (null === js) switch (i = t.finishedWork = t.current.alternate, t.finishedExpirationTime = n, r = Ws, zs = null, r) {
                                case Ms:
                                case Bs:
                                    throw Error(o(345));
                                case Ps:
                                    Jl(t, 2 < n ? 2 : n);
                                    break;
                                case Fs:
                                    if (Gl(t, n), n === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = Ol(i)), 1073741823 === Hs && 10 < (i = Gs + Xs - Hi())) {
                                        if (qs) {
                                            var a = t.lastPingedTime;
                                            if (0 === a || a >= n) {
                                                t.lastPingedTime = n, gl(t, n);
                                                break
                                            }
                                        }
                                        if (0 !== (a = hl(t)) && a !== n) break;
                                        if (0 !== r && r !== n) {
                                            t.lastPingedTime = r;
                                            break
                                        }
                                        t.timeoutHandle = kn(Al.bind(null, t), i);
                                        break
                                    }
                                    Al(t);
                                    break;
                                case Ls:
                                    if (Gl(t, n), n === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = Ol(i)), qs && (0 === (i = t.lastPingedTime) || i >= n)) {
                                        t.lastPingedTime = n, gl(t, n);
                                        break
                                    }
                                    if (0 !== (i = hl(t)) && i !== n) break;
                                    if (0 !== r && r !== n) {
                                        t.lastPingedTime = r;
                                        break
                                    }
                                    if (1073741823 !== $s ? r = 10 * (1073741821 - $s) - Hi() : 1073741823 === Hs ? r = 0 : (r = 10 * (1073741821 - Hs) - 5e3, 0 > (r = (i = Hi()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Is(r / 1960)) - r) && (r = n)), 10 < r) {
                                        t.timeoutHandle = kn(Al.bind(null, t), r);
                                        break
                                    }
                                    Al(t);
                                    break;
                                case Rs:
                                    if (1073741823 !== Hs && null !== Ks) {
                                        a = Hs;
                                        var s = Ks;
                                        if (0 >= (r = 0 | s.busyMinDurationMs) ? r = 0 : (i = 0 | s.busyDelayMs, r = (a = Hi() - (10 * (1073741821 - a) - (0 | s.timeoutMs || 5e3))) <= i ? 0 : i + r - a), 10 < r) {
                                            Gl(t, n), t.timeoutHandle = kn(Al.bind(null, t), r);
                                            break
                                        }
                                    }
                                    Al(t);
                                    break;
                                default:
                                    throw Error(o(329))
                            }
                            if (pl(t), t.callbackNode === e) return yl.bind(null, t)
                        }
                    }
                    return null
                }

                function ml(t) {
                    var e = t.lastExpiredTime;
                    if (e = 0 !== e ? e : 1073741823, (Us & (Ns | Ds)) !== As) throw Error(o(327));
                    if (Dl(), t === zs && e === Vs || gl(t, e), null !== js) {
                        var n = Us;
                        Us |= Ns;
                        for (var r = _l();;) try {
                            Tl();
                            break
                        } catch (i) {
                            wl(t, i)
                        }
                        if (aa(), Us = n, Es.current = r, Ws === Bs) throw n = Ys, gl(t, e), Gl(t, e), pl(t), n;
                        if (null !== js) throw Error(o(261));
                        t.finishedWork = t.current.alternate, t.finishedExpirationTime = e, zs = null, Al(t), pl(t)
                    }
                    return null
                }

                function bl(t, e) {
                    var n = Us;
                    Us |= 1;
                    try {
                        return t(e)
                    } finally {
                        (Us = n) === As && Xi()
                    }
                }

                function vl(t, e) {
                    var n = Us;
                    Us &= -2, Us |= Cs;
                    try {
                        return t(e)
                    } finally {
                        (Us = n) === As && Xi()
                    }
                }

                function gl(t, e) {
                    t.finishedWork = null, t.finishedExpirationTime = 0;
                    var n = t.timeoutHandle;
                    if (-1 !== n && (t.timeoutHandle = -1, In(n)), null !== js)
                        for (n = js.return; null !== n;) {
                            var r = n;
                            switch (r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Si();
                                    break;
                                case 3:
                                    Ra(), pi(vi), pi(bi);
                                    break;
                                case 5:
                                    za(r);
                                    break;
                                case 4:
                                    Ra();
                                    break;
                                case 13:
                                case 19:
                                    pi(ja);
                                    break;
                                case 10:
                                    oa(r)
                            }
                            n = n.return
                        }
                    zs = t, js = Wl(t.current, null), Vs = e, Ws = Ms, Ys = null, $s = Hs = 1073741823, Ks = null, Qs = 0, qs = !1
                }

                function wl(t, e) {
                    for (;;) {
                        try {
                            if (aa(), Ya.current = So, Ga)
                                for (var n = Ka.memoizedState; null !== n;) {
                                    var r = n.queue;
                                    null !== r && (r.pending = null), n = n.next
                                }
                            if ($a = 0, qa = Qa = Ka = null, Ga = !1, null === js || null === js.return) return Ws = Bs, Ys = e, js = null;
                            t: {
                                var i = t,
                                    a = js.return,
                                    o = js,
                                    s = e;
                                if (e = Vs, o.effectTag |= 2048, o.firstEffect = o.lastEffect = null, null !== s && "object" === typeof s && "function" === typeof s.then) {
                                    var l = s;
                                    if (0 === (2 & o.mode)) {
                                        var u = o.alternate;
                                        u ? (o.updateQueue = u.updateQueue, o.memoizedState = u.memoizedState, o.expirationTime = u.expirationTime) : (o.updateQueue = null, o.memoizedState = null)
                                    }
                                    var c = 0 !== (1 & ja.current),
                                        d = a;
                                    do {
                                        var f;
                                        if (f = 13 === d.tag) {
                                            var h = d.memoizedState;
                                            if (null !== h) f = null !== h.dehydrated;
                                            else {
                                                var p = d.memoizedProps;
                                                f = void 0 !== p.fallback && (!0 !== p.unstable_avoidThisFallback || !c)
                                            }
                                        }
                                        if (f) {
                                            var y = d.updateQueue;
                                            if (null === y) {
                                                var m = new Set;
                                                m.add(l), d.updateQueue = m
                                            } else y.add(l);
                                            if (0 === (2 & d.mode)) {
                                                if (d.effectTag |= 64, o.effectTag &= -2981, 1 === o.tag)
                                                    if (null === o.alternate) o.tag = 17;
                                                    else {
                                                        var b = ha(1073741823, null);
                                                        b.tag = 2, pa(o, b)
                                                    } o.expirationTime = 1073741823;
                                                break t
                                            }
                                            s = void 0, o = e;
                                            var v = i.pingCache;
                                            if (null === v ? (v = i.pingCache = new Ss, s = new Set, v.set(l, s)) : void 0 === (s = v.get(l)) && (s = new Set, v.set(l, s)), !s.has(o)) {
                                                s.add(o);
                                                var g = Fl.bind(null, i, l, o);
                                                l.then(g, g)
                                            }
                                            d.effectTag |= 4096, d.expirationTime = e;
                                            break t
                                        }
                                        d = d.return
                                    } while (null !== d);
                                    s = Error((mt(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + bt(o))
                                }
                                Ws !== Rs && (Ws = Ps),
                                s = as(s, o),
                                d = a;do {
                                    switch (d.tag) {
                                        case 3:
                                            l = s, d.effectTag |= 4096, d.expirationTime = e, ya(d, xs(d, l, e));
                                            break t;
                                        case 1:
                                            l = s;
                                            var w = d.type,
                                                _ = d.stateNode;
                                            if (0 === (64 & d.effectTag) && ("function" === typeof w.getDerivedStateFromError || null !== _ && "function" === typeof _.componentDidCatch && (null === el || !el.has(_)))) {
                                                d.effectTag |= 4096, d.expirationTime = e, ya(d, Ts(d, l, e));
                                                break t
                                            }
                                    }
                                    d = d.return
                                } while (null !== d)
                            }
                            js = El(js)
                        } catch (S) {
                            e = S;
                            continue
                        }
                        break
                    }
                }

                function _l() {
                    var t = Es.current;
                    return Es.current = So, null === t ? So : t
                }

                function Sl(t, e) {
                    t < Hs && 2 < t && (Hs = t), null !== e && t < $s && 2 < t && ($s = t, Ks = e)
                }

                function xl(t) {
                    t > Qs && (Qs = t)
                }

                function Tl() {
                    for (; null !== js;) js = Il(js)
                }

                function kl() {
                    for (; null !== js && !Ui();) js = Il(js)
                }

                function Il(t) {
                    var e = ks(t.alternate, t, Vs);
                    return t.memoizedProps = t.pendingProps, null === e && (e = El(t)), Os.current = null, e
                }

                function El(t) {
                    js = t;
                    do {
                        var e = js.alternate;
                        if (t = js.return, 0 === (2048 & js.effectTag)) {
                            if (e = rs(e, js, Vs), 1 === Vs || 1 !== js.childExpirationTime) {
                                for (var n = 0, r = js.child; null !== r;) {
                                    var i = r.expirationTime,
                                        a = r.childExpirationTime;
                                    i > n && (n = i), a > n && (n = a), r = r.sibling
                                }
                                js.childExpirationTime = n
                            }
                            if (null !== e) return e;
                            null !== t && 0 === (2048 & t.effectTag) && (null === t.firstEffect && (t.firstEffect = js.firstEffect), null !== js.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = js.firstEffect), t.lastEffect = js.lastEffect), 1 < js.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = js : t.firstEffect = js, t.lastEffect = js))
                        } else {
                            if (null !== (e = is(js))) return e.effectTag &= 2047, e;
                            null !== t && (t.firstEffect = t.lastEffect = null, t.effectTag |= 2048)
                        }
                        if (null !== (e = js.sibling)) return e;
                        js = t
                    } while (null !== js);
                    return Ws === Ms && (Ws = Rs), null
                }

                function Ol(t) {
                    var e = t.expirationTime;
                    return e > (t = t.childExpirationTime) ? e : t
                }

                function Al(t) {
                    var e = $i();
                    return Qi(99, Cl.bind(null, t, e)), null
                }

                function Cl(t, e) {
                    do {
                        Dl()
                    } while (null !== rl);
                    if ((Us & (Ns | Ds)) !== As) throw Error(o(327));
                    var n = t.finishedWork,
                        r = t.finishedExpirationTime;
                    if (null === n) return null;
                    if (t.finishedWork = null, t.finishedExpirationTime = 0, n === t.current) throw Error(o(177));
                    t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90, t.nextKnownPendingLevel = 0;
                    var i = Ol(n);
                    if (t.firstPendingTime = i, r <= t.lastSuspendedTime ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1), r <= t.lastPingedTime && (t.lastPingedTime = 0), r <= t.lastExpiredTime && (t.lastExpiredTime = 0), t === zs && (js = zs = null, Vs = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, i = n.firstEffect) : i = n : i = n.firstEffect, null !== i) {
                        var a = Us;
                        Us |= Ds, Os.current = null, _n = Ke;
                        var s = yn();
                        if (mn(s)) {
                            if ("selectionStart" in s) var l = {
                                start: s.selectionStart,
                                end: s.selectionEnd
                            };
                            else t: {
                                var u = (l = (l = s.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
                                if (u && 0 !== u.rangeCount) {
                                    l = u.anchorNode;
                                    var c = u.anchorOffset,
                                        d = u.focusNode;
                                    u = u.focusOffset;
                                    try {
                                        l.nodeType, d.nodeType
                                    } catch (I) {
                                        l = null;
                                        break t
                                    }
                                    var f = 0,
                                        h = -1,
                                        p = -1,
                                        y = 0,
                                        m = 0,
                                        b = s,
                                        v = null;
                                    e: for (;;) {
                                        for (var g; b !== l || 0 !== c && 3 !== b.nodeType || (h = f + c), b !== d || 0 !== u && 3 !== b.nodeType || (p = f + u), 3 === b.nodeType && (f += b.nodeValue.length), null !== (g = b.firstChild);) v = b, b = g;
                                        for (;;) {
                                            if (b === s) break e;
                                            if (v === l && ++y === c && (h = f), v === d && ++m === u && (p = f), null !== (g = b.nextSibling)) break;
                                            v = (b = v).parentNode
                                        }
                                        b = g
                                    }
                                    l = -1 === h || -1 === p ? null : {
                                        start: h,
                                        end: p
                                    }
                                } else l = null
                            }
                            l = l || {
                                start: 0,
                                end: 0
                            }
                        } else l = null;
                        Sn = {
                            activeElementDetached: null,
                            focusedElem: s,
                            selectionRange: l
                        }, Ke = !1, Js = i;
                        do {
                            try {
                                Nl()
                            } catch (I) {
                                if (null === Js) throw Error(o(330));
                                Pl(Js, I), Js = Js.nextEffect
                            }
                        } while (null !== Js);
                        Js = i;
                        do {
                            try {
                                for (s = t, l = e; null !== Js;) {
                                    var w = Js.effectTag;
                                    if (16 & w && jt(Js.stateNode, ""), 128 & w) {
                                        var _ = Js.alternate;
                                        if (null !== _) {
                                            var S = _.ref;
                                            null !== S && ("function" === typeof S ? S(null) : S.current = null)
                                        }
                                    }
                                    switch (1038 & w) {
                                        case 2:
                                            ms(Js), Js.effectTag &= -3;
                                            break;
                                        case 6:
                                            ms(Js), Js.effectTag &= -3, ws(Js.alternate, Js);
                                            break;
                                        case 1024:
                                            Js.effectTag &= -1025;
                                            break;
                                        case 1028:
                                            Js.effectTag &= -1025, ws(Js.alternate, Js);
                                            break;
                                        case 4:
                                            ws(Js.alternate, Js);
                                            break;
                                        case 8:
                                            gs(s, c = Js, l), ps(c)
                                    }
                                    Js = Js.nextEffect
                                }
                            } catch (I) {
                                if (null === Js) throw Error(o(330));
                                Pl(Js, I), Js = Js.nextEffect
                            }
                        } while (null !== Js);
                        if (S = Sn, _ = yn(), w = S.focusedElem, l = S.selectionRange, _ !== w && w && w.ownerDocument && pn(w.ownerDocument.documentElement, w)) {
                            null !== l && mn(w) && (_ = l.start, void 0 === (S = l.end) && (S = _), "selectionStart" in w ? (w.selectionStart = _, w.selectionEnd = Math.min(S, w.value.length)) : (S = (_ = w.ownerDocument || document) && _.defaultView || window).getSelection && (S = S.getSelection(), c = w.textContent.length, s = Math.min(l.start, c), l = void 0 === l.end ? s : Math.min(l.end, c), !S.extend && s > l && (c = l, l = s, s = c), c = hn(w, s), d = hn(w, l), c && d && (1 !== S.rangeCount || S.anchorNode !== c.node || S.anchorOffset !== c.offset || S.focusNode !== d.node || S.focusOffset !== d.offset) && ((_ = _.createRange()).setStart(c.node, c.offset), S.removeAllRanges(), s > l ? (S.addRange(_), S.extend(d.node, d.offset)) : (_.setEnd(d.node, d.offset), S.addRange(_))))), _ = [];
                            for (S = w; S = S.parentNode;) 1 === S.nodeType && _.push({
                                element: S,
                                left: S.scrollLeft,
                                top: S.scrollTop
                            });
                            for ("function" === typeof w.focus && w.focus(), w = 0; w < _.length; w++)(S = _[w]).element.scrollLeft = S.left, S.element.scrollTop = S.top
                        }
                        Ke = !!_n, Sn = _n = null, t.current = n, Js = i;
                        do {
                            try {
                                for (w = t; null !== Js;) {
                                    var x = Js.effectTag;
                                    if (36 & x && fs(w, Js.alternate, Js), 128 & x) {
                                        _ = void 0;
                                        var T = Js.ref;
                                        if (null !== T) {
                                            var k = Js.stateNode;
                                            Js.tag, _ = k, "function" === typeof T ? T(_) : T.current = _
                                        }
                                    }
                                    Js = Js.nextEffect
                                }
                            } catch (I) {
                                if (null === Js) throw Error(o(330));
                                Pl(Js, I), Js = Js.nextEffect
                            }
                        } while (null !== Js);
                        Js = null, zi(), Us = a
                    } else t.current = n;
                    if (nl) nl = !1, rl = t, il = e;
                    else
                        for (Js = i; null !== Js;) e = Js.nextEffect, Js.nextEffect = null, Js = e;
                    if (0 === (e = t.firstPendingTime) && (el = null), 1073741823 === e ? t === sl ? ol++ : (ol = 0, sl = t) : ol = 0, "function" === typeof Rl && Rl(n.stateNode, r), pl(t), Zs) throw Zs = !1, t = tl, tl = null, t;
                    return (Us & Cs) !== As || Xi(), null
                }

                function Nl() {
                    for (; null !== Js;) {
                        var t = Js.effectTag;
                        0 !== (256 & t) && us(Js.alternate, Js), 0 === (512 & t) || nl || (nl = !0, qi(97, (function() {
                            return Dl(), null
                        }))), Js = Js.nextEffect
                    }
                }

                function Dl() {
                    if (90 !== il) {
                        var t = 97 < il ? 97 : il;
                        return il = 90, Qi(t, Ml)
                    }
                }

                function Ml() {
                    if (null === rl) return !1;
                    var t = rl;
                    if (rl = null, (Us & (Ns | Ds)) !== As) throw Error(o(331));
                    var e = Us;
                    for (Us |= Ds, t = t.current.firstEffect; null !== t;) {
                        try {
                            var n = t;
                            if (0 !== (512 & n.effectTag)) switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 22:
                                    cs(5, n), ds(5, n)
                            }
                        } catch (r) {
                            if (null === t) throw Error(o(330));
                            Pl(t, r)
                        }
                        n = t.nextEffect, t.nextEffect = null, t = n
                    }
                    return Us = e, Xi(), !0
                }

                function Bl(t, e, n) {
                    pa(t, e = xs(t, e = as(n, e), 1073741823)), null !== (t = fl(t, 1073741823)) && pl(t)
                }

                function Pl(t, e) {
                    if (3 === t.tag) Bl(t, t, e);
                    else
                        for (var n = t.return; null !== n;) {
                            if (3 === n.tag) {
                                Bl(n, t, e);
                                break
                            }
                            if (1 === n.tag) {
                                var r = n.stateNode;
                                if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === el || !el.has(r))) {
                                    pa(n, t = Ts(n, t = as(e, t), 1073741823)), null !== (n = fl(n, 1073741823)) && pl(n);
                                    break
                                }
                            }
                            n = n.return
                        }
                }

                function Fl(t, e, n) {
                    var r = t.pingCache;
                    null !== r && r.delete(e), zs === t && Vs === n ? Ws === Ls || Ws === Fs && 1073741823 === Hs && Hi() - Gs < Xs ? gl(t, Vs) : qs = !0 : ql(t, n) && (0 !== (e = t.lastPingedTime) && e < n || (t.lastPingedTime = n, pl(t)))
                }

                function Ll(t, e) {
                    var n = t.stateNode;
                    null !== n && n.delete(e), 0 === (e = 0) && (e = cl(e = ul(), t, null)), null !== (t = fl(t, e)) && pl(t)
                }
                ks = function(t, e, n) {
                    var r = e.expirationTime;
                    if (null !== t) {
                        var i = e.pendingProps;
                        if (t.memoizedProps !== i || vi.current) Fo = !0;
                        else {
                            if (r < n) {
                                switch (Fo = !1, e.tag) {
                                    case 3:
                                        Ho(e), Bo();
                                        break;
                                    case 5:
                                        if (Ua(e), 4 & e.mode && 1 !== n && i.hidden) return e.expirationTime = e.childExpirationTime = 1, null;
                                        break;
                                    case 1:
                                        _i(e.type) && ki(e);
                                        break;
                                    case 4:
                                        La(e, e.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        r = e.memoizedProps.value, i = e.type._context, yi(ea, i._currentValue), i._currentValue = r;
                                        break;
                                    case 13:
                                        if (null !== e.memoizedState) return 0 !== (r = e.child.childExpirationTime) && r >= n ? Xo(t, e, n) : (yi(ja, 1 & ja.current), null !== (e = es(t, e, n)) ? e.sibling : null);
                                        yi(ja, 1 & ja.current);
                                        break;
                                    case 19:
                                        if (r = e.childExpirationTime >= n, 0 !== (64 & t.effectTag)) {
                                            if (r) return ts(t, e, n);
                                            e.effectTag |= 64
                                        }
                                        if (null !== (i = e.memoizedState) && (i.rendering = null, i.tail = null), yi(ja, ja.current), !r) return null
                                }
                                return es(t, e, n)
                            }
                            Fo = !1
                        }
                    } else Fo = !1;
                    switch (e.expirationTime = 0, e.tag) {
                        case 2:
                            if (r = e.type, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, i = wi(e, bi.current), la(e, n), i = Za(null, e, r, t, i, n), e.effectTag |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof) {
                                if (e.tag = 1, e.memoizedState = null, e.updateQueue = null, _i(r)) {
                                    var a = !0;
                                    ki(e)
                                } else a = !1;
                                e.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, da(e);
                                var s = r.getDerivedStateFromProps;
                                "function" === typeof s && wa(e, r, s, t), i.updater = _a, e.stateNode = i, i._reactInternalFiber = e, ka(e, r, t, n), e = Yo(null, e, r, !0, a, n)
                            } else e.tag = 0, Lo(null, e, i, n), e = e.child;
                            return e;
                        case 16:
                            t: {
                                if (i = e.elementType, null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), t = e.pendingProps, function(t) {
                                        if (-1 === t._status) {
                                            t._status = 0;
                                            var e = t._ctor;
                                            e = e(), t._result = e, e.then((function(e) {
                                                0 === t._status && (e = e.default, t._status = 1, t._result = e)
                                            }), (function(e) {
                                                0 === t._status && (t._status = 2, t._result = e)
                                            }))
                                        }
                                    }(i), 1 !== i._status) throw i._result;
                                switch (i = i._result, e.type = i, a = e.tag = function(t) {
                                        if ("function" === typeof t) return Vl(t) ? 1 : 0;
                                        if (void 0 !== t && null !== t) {
                                            if ((t = t.$$typeof) === lt) return 11;
                                            if (t === dt) return 14
                                        }
                                        return 2
                                    }(i), t = ta(i, t), a) {
                                    case 0:
                                        e = Vo(null, e, i, t, n);
                                        break t;
                                    case 1:
                                        e = Wo(null, e, i, t, n);
                                        break t;
                                    case 11:
                                        e = Ro(null, e, i, t, n);
                                        break t;
                                    case 14:
                                        e = Uo(null, e, i, ta(i.type, t), r, n);
                                        break t
                                }
                                throw Error(o(306, i, ""))
                            }
                            return e;
                        case 0:
                            return r = e.type, i = e.pendingProps, Vo(t, e, r, i = e.elementType === r ? i : ta(r, i), n);
                        case 1:
                            return r = e.type, i = e.pendingProps, Wo(t, e, r, i = e.elementType === r ? i : ta(r, i), n);
                        case 3:
                            if (Ho(e), r = e.updateQueue, null === t || null === r) throw Error(o(282));
                            if (r = e.pendingProps, i = null !== (i = e.memoizedState) ? i.element : null, fa(t, e), ma(e, r, null, n), (r = e.memoizedState.element) === i) Bo(), e = es(t, e, n);
                            else {
                                if ((i = e.stateNode.hydrate) && (Eo = En(e.stateNode.containerInfo.firstChild), Io = e, i = Oo = !0), i)
                                    for (n = Na(e, null, r, n), e.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
                                else Lo(t, e, r, n), Bo();
                                e = e.child
                            }
                            return e;
                        case 5:
                            return Ua(e), null === t && No(e), r = e.type, i = e.pendingProps, a = null !== t ? t.memoizedProps : null, s = i.children, Tn(r, i) ? s = null : null !== a && Tn(r, a) && (e.effectTag |= 16), jo(t, e), 4 & e.mode && 1 !== n && i.hidden ? (e.expirationTime = e.childExpirationTime = 1, e = null) : (Lo(t, e, s, n), e = e.child), e;
                        case 6:
                            return null === t && No(e), null;
                        case 13:
                            return Xo(t, e, n);
                        case 4:
                            return La(e, e.stateNode.containerInfo), r = e.pendingProps, null === t ? e.child = Ca(e, null, r, n) : Lo(t, e, r, n), e.child;
                        case 11:
                            return r = e.type, i = e.pendingProps, Ro(t, e, r, i = e.elementType === r ? i : ta(r, i), n);
                        case 7:
                            return Lo(t, e, e.pendingProps, n), e.child;
                        case 8:
                        case 12:
                            return Lo(t, e, e.pendingProps.children, n), e.child;
                        case 10:
                            t: {
                                r = e.type._context,
                                i = e.pendingProps,
                                s = e.memoizedProps,
                                a = i.value;
                                var l = e.type._context;
                                if (yi(ea, l._currentValue), l._currentValue = a, null !== s)
                                    if (l = s.value, 0 === (a = Wr(l, a) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(l, a) : 1073741823))) {
                                        if (s.children === i.children && !vi.current) {
                                            e = es(t, e, n);
                                            break t
                                        }
                                    } else
                                        for (null !== (l = e.child) && (l.return = e); null !== l;) {
                                            var u = l.dependencies;
                                            if (null !== u) {
                                                s = l.child;
                                                for (var c = u.firstContext; null !== c;) {
                                                    if (c.context === r && 0 !== (c.observedBits & a)) {
                                                        1 === l.tag && ((c = ha(n, null)).tag = 2, pa(l, c)), l.expirationTime < n && (l.expirationTime = n), null !== (c = l.alternate) && c.expirationTime < n && (c.expirationTime = n), sa(l.return, n), u.expirationTime < n && (u.expirationTime = n);
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else s = 10 === l.tag && l.type === e.type ? null : l.child;
                                            if (null !== s) s.return = l;
                                            else
                                                for (s = l; null !== s;) {
                                                    if (s === e) {
                                                        s = null;
                                                        break
                                                    }
                                                    if (null !== (l = s.sibling)) {
                                                        l.return = s.return, s = l;
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            l = s
                                        }
                                Lo(t, e, i.children, n),
                                e = e.child
                            }
                            return e;
                        case 9:
                            return i = e.type, r = (a = e.pendingProps).children, la(e, n), r = r(i = ua(i, a.unstable_observedBits)), e.effectTag |= 1, Lo(t, e, r, n), e.child;
                        case 14:
                            return a = ta(i = e.type, e.pendingProps), Uo(t, e, i, a = ta(i.type, a), r, n);
                        case 15:
                            return zo(t, e, e.type, e.pendingProps, r, n);
                        case 17:
                            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : ta(r, i), null !== t && (t.alternate = null, e.alternate = null, e.effectTag |= 2), e.tag = 1, _i(r) ? (t = !0, ki(e)) : t = !1, la(e, n), xa(e, r, i), ka(e, r, i, n), Yo(null, e, r, !0, t, n);
                        case 19:
                            return ts(t, e, n)
                    }
                    throw Error(o(156, e.tag))
                };
                var Rl = null,
                    Ul = null;

                function zl(t, e, n, r) {
                    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
                }

                function jl(t, e, n, r) {
                    return new zl(t, e, n, r)
                }

                function Vl(t) {
                    return !(!(t = t.prototype) || !t.isReactComponent)
                }

                function Wl(t, e) {
                    var n = t.alternate;
                    return null === n ? ((n = jl(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = t.childExpirationTime, n.expirationTime = t.expirationTime, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : {
                        expirationTime: e.expirationTime,
                        firstContext: e.firstContext,
                        responders: e.responders
                    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
                }

                function Yl(t, e, n, r, i, a) {
                    var s = 2;
                    if (r = t, "function" === typeof t) Vl(t) && (s = 1);
                    else if ("string" === typeof t) s = 5;
                    else t: switch (t) {
                        case nt:
                            return Hl(n.children, i, a, e);
                        case st:
                            s = 8, i |= 7;
                            break;
                        case rt:
                            s = 8, i |= 1;
                            break;
                        case it:
                            return (t = jl(12, n, e, 8 | i)).elementType = it, t.type = it, t.expirationTime = a, t;
                        case ut:
                            return (t = jl(13, n, e, i)).type = ut, t.elementType = ut, t.expirationTime = a, t;
                        case ct:
                            return (t = jl(19, n, e, i)).elementType = ct, t.expirationTime = a, t;
                        default:
                            if ("object" === typeof t && null !== t) switch (t.$$typeof) {
                                case at:
                                    s = 10;
                                    break t;
                                case ot:
                                    s = 9;
                                    break t;
                                case lt:
                                    s = 11;
                                    break t;
                                case dt:
                                    s = 14;
                                    break t;
                                case ft:
                                    s = 16, r = null;
                                    break t;
                                case ht:
                                    s = 22;
                                    break t
                            }
                            throw Error(o(130, null == t ? t : typeof t, ""))
                    }
                    return (e = jl(s, n, e, i)).elementType = t, e.type = r, e.expirationTime = a, e
                }

                function Hl(t, e, n, r) {
                    return (t = jl(7, t, r, e)).expirationTime = n, t
                }

                function $l(t, e, n) {
                    return (t = jl(6, t, null, e)).expirationTime = n, t
                }

                function Kl(t, e, n) {
                    return (e = jl(4, null !== t.children ? t.children : [], t.key, e)).expirationTime = n, e.stateNode = {
                        containerInfo: t.containerInfo,
                        pendingChildren: null,
                        implementation: t.implementation
                    }, e
                }

                function Ql(t, e, n) {
                    this.tag = e, this.current = null, this.containerInfo = t, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
                }

                function ql(t, e) {
                    var n = t.firstSuspendedTime;
                    return t = t.lastSuspendedTime, 0 !== n && n >= e && t <= e
                }

                function Gl(t, e) {
                    var n = t.firstSuspendedTime,
                        r = t.lastSuspendedTime;
                    n < e && (t.firstSuspendedTime = e), (r > e || 0 === n) && (t.lastSuspendedTime = e), e <= t.lastPingedTime && (t.lastPingedTime = 0), e <= t.lastExpiredTime && (t.lastExpiredTime = 0)
                }

                function Xl(t, e) {
                    e > t.firstPendingTime && (t.firstPendingTime = e);
                    var n = t.firstSuspendedTime;
                    0 !== n && (e >= n ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : e >= t.lastSuspendedTime && (t.lastSuspendedTime = e + 1), e > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = e))
                }

                function Jl(t, e) {
                    var n = t.lastExpiredTime;
                    (0 === n || n > e) && (t.lastExpiredTime = e)
                }

                function Zl(t, e, n, r) {
                    var i = e.current,
                        a = ul(),
                        s = va.suspense;
                    a = cl(a, i, s);
                    t: if (n) {
                        e: {
                            if (te(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(o(170));
                            var l = n;do {
                                switch (l.tag) {
                                    case 3:
                                        l = l.stateNode.context;
                                        break e;
                                    case 1:
                                        if (_i(l.type)) {
                                            l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break e
                                        }
                                }
                                l = l.return
                            } while (null !== l);
                            throw Error(o(171))
                        }
                        if (1 === n.tag) {
                            var u = n.type;
                            if (_i(u)) {
                                n = Ti(n, u, l);
                                break t
                            }
                        }
                        n = l
                    }
                    else n = mi;
                    return null === e.context ? e.context = n : e.pendingContext = n, (e = ha(a, s)).payload = {
                        element: t
                    }, null !== (r = void 0 === r ? null : r) && (e.callback = r), pa(i, e), dl(i, a), a
                }

                function tu(t) {
                    return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null
                }

                function eu(t, e) {
                    null !== (t = t.memoizedState) && null !== t.dehydrated && t.retryTime < e && (t.retryTime = e)
                }

                function nu(t, e) {
                    eu(t, e), (t = t.alternate) && eu(t, e)
                }

                function ru(t, e, n) {
                    var r = new Ql(t, e, n = null != n && !0 === n.hydrate),
                        i = jl(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0);
                    r.current = i, i.stateNode = r, da(i), t[Dn] = r.current, n && 0 !== e && function(t, e) {
                        var n = Zt(e);
                        Ee.forEach((function(t) {
                            ye(t, e, n)
                        })), Oe.forEach((function(t) {
                            ye(t, e, n)
                        }))
                    }(0, 9 === t.nodeType ? t : t.ownerDocument), this._internalRoot = r
                }

                function iu(t) {
                    return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
                }

                function au(t, e, n, r, i) {
                    var a = n._reactRootContainer;
                    if (a) {
                        var o = a._internalRoot;
                        if ("function" === typeof i) {
                            var s = i;
                            i = function() {
                                var t = tu(o);
                                s.call(t)
                            }
                        }
                        Zl(e, o, t, i)
                    } else {
                        if (a = n._reactRootContainer = function(t, e) {
                                if (e || (e = !(!(e = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e)
                                    for (var n; n = t.lastChild;) t.removeChild(n);
                                return new ru(t, 0, e ? {
                                    hydrate: !0
                                } : void 0)
                            }(n, r), o = a._internalRoot, "function" === typeof i) {
                            var l = i;
                            i = function() {
                                var t = tu(o);
                                l.call(t)
                            }
                        }
                        vl((function() {
                            Zl(e, o, t, i)
                        }))
                    }
                    return tu(o)
                }

                function ou(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!iu(e)) throw Error(o(200));
                    return function(t, e, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: et,
                            key: null == r ? null : "" + r,
                            children: t,
                            containerInfo: e,
                            implementation: n
                        }
                    }(t, e, null, n)
                }
                ru.prototype.render = function(t) {
                    Zl(t, this._internalRoot, null, null)
                }, ru.prototype.unmount = function() {
                    var t = this._internalRoot,
                        e = t.containerInfo;
                    Zl(null, t, null, (function() {
                        e[Dn] = null
                    }))
                }, me = function(t) {
                    if (13 === t.tag) {
                        var e = Zi(ul(), 150, 100);
                        dl(t, e), nu(t, e)
                    }
                }, be = function(t) {
                    13 === t.tag && (dl(t, 3), nu(t, 3))
                }, ve = function(t) {
                    if (13 === t.tag) {
                        var e = ul();
                        dl(t, e = cl(e, t, null)), nu(t, e)
                    }
                }, O = function(t, e, n) {
                    switch (e) {
                        case "input":
                            if (kt(t, n), e = n.name, "radio" === n.type && null != e) {
                                for (n = t; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                                    var r = n[e];
                                    if (r !== t && r.form === t.form) {
                                        var i = Fn(r);
                                        if (!i) throw Error(o(90));
                                        _t(r), kt(r, i)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Dt(t, n);
                            break;
                        case "select":
                            null != (e = n.value) && At(t, !!n.multiple, e, !1)
                    }
                }, B = bl, P = function(t, e, n, r, i) {
                    var a = Us;
                    Us |= 4;
                    try {
                        return Qi(98, t.bind(null, e, n, r, i))
                    } finally {
                        (Us = a) === As && Xi()
                    }
                }, F = function() {
                    (Us & (1 | Ns | Ds)) === As && (function() {
                        if (null !== al) {
                            var t = al;
                            al = null, t.forEach((function(t, e) {
                                Jl(e, t), pl(e)
                            })), Xi()
                        }
                    }(), Dl())
                }, L = function(t, e) {
                    var n = Us;
                    Us |= 2;
                    try {
                        return t(e)
                    } finally {
                        (Us = n) === As && Xi()
                    }
                };
                var su = {
                    Events: [Bn, Pn, Fn, I, x, Wn, function(t) {
                        ae(t, Vn)
                    }, D, M, Je, le, Dl, {
                        current: !1
                    }]
                };
                ! function(t) {
                    var e = t.findFiberByHostInstance;
                    (function(t) {
                        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                        var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                        if (e.isDisabled || !e.supportsFiber) return !0;
                        try {
                            var n = e.inject(t);
                            Rl = function(t) {
                                try {
                                    e.onCommitFiberRoot(n, t, void 0, 64 === (64 & t.current.effectTag))
                                } catch (r) {}
                            }, Ul = function(t) {
                                try {
                                    e.onCommitFiberUnmount(n, t)
                                } catch (r) {}
                            }
                        } catch (r) {}
                    })(i({}, t, {
                        overrideHookState: null,
                        overrideProps: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: G.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(t) {
                            return null === (t = re(t)) ? null : t.stateNode
                        },
                        findFiberByHostInstance: function(t) {
                            return e ? e(t) : null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null
                    }))
                }({
                    findFiberByHostInstance: Mn,
                    bundleType: 0,
                    version: "16.14.0",
                    rendererPackageName: "react-dom"
                }), e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = su, e.createPortal = ou, e.findDOMNode = function(t) {
                    if (null == t) return null;
                    if (1 === t.nodeType) return t;
                    var e = t._reactInternalFiber;
                    if (void 0 === e) {
                        if ("function" === typeof t.render) throw Error(o(188));
                        throw Error(o(268, Object.keys(t)))
                    }
                    return t = null === (t = re(e)) ? null : t.stateNode
                }, e.flushSync = function(t, e) {
                    if ((Us & (Ns | Ds)) !== As) throw Error(o(187));
                    var n = Us;
                    Us |= 1;
                    try {
                        return Qi(99, t.bind(null, e))
                    } finally {
                        Us = n, Xi()
                    }
                }, e.hydrate = function(t, e, n) {
                    if (!iu(e)) throw Error(o(200));
                    return au(null, t, e, !0, n)
                }, e.render = function(t, e, n) {
                    if (!iu(e)) throw Error(o(200));
                    return au(null, t, e, !1, n)
                }, e.unmountComponentAtNode = function(t) {
                    if (!iu(t)) throw Error(o(40));
                    return !!t._reactRootContainer && (vl((function() {
                        au(null, null, t, !1, (function() {
                            t._reactRootContainer = null, t[Dn] = null
                        }))
                    })), !0)
                }, e.unstable_batchedUpdates = bl, e.unstable_createPortal = function(t, e) {
                    return ou(t, e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, e.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
                    if (!iu(n)) throw Error(o(200));
                    if (null == t || void 0 === t._reactInternalFiber) throw Error(o(38));
                    return au(t, e, n, !1, r)
                }, e.version = "16.14.0"
            },
            164: (t, e, n) => {
                "use strict";
                ! function t() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
                    } catch (e) {
                        console.error(e)
                    }
                }(), t.exports = n(463)
            },
            372: (t, e) => {
                "use strict";
                var n = "function" === typeof Symbol && Symbol.for,
                    r = n ? Symbol.for("react.element") : 60103,
                    i = n ? Symbol.for("react.portal") : 60106,
                    a = n ? Symbol.for("react.fragment") : 60107,
                    o = n ? Symbol.for("react.strict_mode") : 60108,
                    s = n ? Symbol.for("react.profiler") : 60114,
                    l = n ? Symbol.for("react.provider") : 60109,
                    u = n ? Symbol.for("react.context") : 60110,
                    c = n ? Symbol.for("react.async_mode") : 60111,
                    d = n ? Symbol.for("react.concurrent_mode") : 60111,
                    f = n ? Symbol.for("react.forward_ref") : 60112,
                    h = n ? Symbol.for("react.suspense") : 60113,
                    p = n ? Symbol.for("react.suspense_list") : 60120,
                    y = n ? Symbol.for("react.memo") : 60115,
                    m = n ? Symbol.for("react.lazy") : 60116,
                    b = n ? Symbol.for("react.block") : 60121,
                    v = n ? Symbol.for("react.fundamental") : 60117,
                    g = n ? Symbol.for("react.responder") : 60118,
                    w = n ? Symbol.for("react.scope") : 60119;

                function _(t) {
                    if ("object" === typeof t && null !== t) {
                        var e = t.$$typeof;
                        switch (e) {
                            case r:
                                switch (t = t.type) {
                                    case c:
                                    case d:
                                    case a:
                                    case s:
                                    case o:
                                    case h:
                                        return t;
                                    default:
                                        switch (t = t && t.$$typeof) {
                                            case u:
                                            case f:
                                            case m:
                                            case y:
                                            case l:
                                                return t;
                                            default:
                                                return e
                                        }
                                }
                                case i:
                                    return e
                        }
                    }
                }

                function S(t) {
                    return _(t) === d
                }
                e.AsyncMode = c, e.ConcurrentMode = d, e.ContextConsumer = u, e.ContextProvider = l, e.Element = r, e.ForwardRef = f, e.Fragment = a, e.Lazy = m, e.Memo = y, e.Portal = i, e.Profiler = s, e.StrictMode = o, e.Suspense = h, e.isAsyncMode = function(t) {
                    return S(t) || _(t) === c
                }, e.isConcurrentMode = S, e.isContextConsumer = function(t) {
                    return _(t) === u
                }, e.isContextProvider = function(t) {
                    return _(t) === l
                }, e.isElement = function(t) {
                    return "object" === typeof t && null !== t && t.$$typeof === r
                }, e.isForwardRef = function(t) {
                    return _(t) === f
                }, e.isFragment = function(t) {
                    return _(t) === a
                }, e.isLazy = function(t) {
                    return _(t) === m
                }, e.isMemo = function(t) {
                    return _(t) === y
                }, e.isPortal = function(t) {
                    return _(t) === i
                }, e.isProfiler = function(t) {
                    return _(t) === s
                }, e.isStrictMode = function(t) {
                    return _(t) === o
                }, e.isSuspense = function(t) {
                    return _(t) === h
                }, e.isValidElementType = function(t) {
                    return "string" === typeof t || "function" === typeof t || t === a || t === d || t === s || t === o || t === h || t === p || "object" === typeof t && null !== t && (t.$$typeof === m || t.$$typeof === y || t.$$typeof === l || t.$$typeof === u || t.$$typeof === f || t.$$typeof === v || t.$$typeof === g || t.$$typeof === w || t.$$typeof === b)
                }, e.typeOf = _
            },
            441: (t, e, n) => {
                "use strict";
                t.exports = n(372)
            },
            374: (t, e, n) => {
                "use strict";
                var r = n(791),
                    i = 60103;
                if (60107, "function" === typeof Symbol && Symbol.for) {
                    var a = Symbol.for;
                    i = a("react.element"), a("react.fragment")
                }
                var o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    s = Object.prototype.hasOwnProperty,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(t, e, n) {
                    var r, a = {},
                        u = null,
                        c = null;
                    for (r in void 0 !== n && (u = "" + n), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (c = e.ref), e) s.call(e, r) && !l.hasOwnProperty(r) && (a[r] = e[r]);
                    if (t && t.defaultProps)
                        for (r in e = t.defaultProps) void 0 === a[r] && (a[r] = e[r]);
                    return {
                        $$typeof: i,
                        type: t,
                        key: u,
                        ref: c,
                        props: a,
                        _owner: o.current
                    }
                }
                e.jsx = u
            },
            117: (t, e, n) => {
                "use strict";
                var r = n(725),
                    i = "function" === typeof Symbol && Symbol.for,
                    a = i ? Symbol.for("react.element") : 60103,
                    o = i ? Symbol.for("react.portal") : 60106,
                    s = i ? Symbol.for("react.fragment") : 60107,
                    l = i ? Symbol.for("react.strict_mode") : 60108,
                    u = i ? Symbol.for("react.profiler") : 60114,
                    c = i ? Symbol.for("react.provider") : 60109,
                    d = i ? Symbol.for("react.context") : 60110,
                    f = i ? Symbol.for("react.forward_ref") : 60112,
                    h = i ? Symbol.for("react.suspense") : 60113,
                    p = i ? Symbol.for("react.memo") : 60115,
                    y = i ? Symbol.for("react.lazy") : 60116,
                    m = "function" === typeof Symbol && Symbol.iterator;

                function b(t) {
                    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var v = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    g = {};

                function w(t, e, n) {
                    this.props = t, this.context = e, this.refs = g, this.updater = n || v
                }

                function _() {}

                function S(t, e, n) {
                    this.props = t, this.context = e, this.refs = g, this.updater = n || v
                }
                w.prototype.isReactComponent = {}, w.prototype.setState = function(t, e) {
                    if ("object" !== typeof t && "function" !== typeof t && null != t) throw Error(b(85));
                    this.updater.enqueueSetState(this, t, e, "setState")
                }, w.prototype.forceUpdate = function(t) {
                    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
                }, _.prototype = w.prototype;
                var x = S.prototype = new _;
                x.constructor = S, r(x, w.prototype), x.isPureReactComponent = !0;
                var T = {
                        current: null
                    },
                    k = Object.prototype.hasOwnProperty,
                    I = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function E(t, e, n) {
                    var r, i = {},
                        o = null,
                        s = null;
                    if (null != e)
                        for (r in void 0 !== e.ref && (s = e.ref), void 0 !== e.key && (o = "" + e.key), e) k.call(e, r) && !I.hasOwnProperty(r) && (i[r] = e[r]);
                    var l = arguments.length - 2;
                    if (1 === l) i.children = n;
                    else if (1 < l) {
                        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                        i.children = u
                    }
                    if (t && t.defaultProps)
                        for (r in l = t.defaultProps) void 0 === i[r] && (i[r] = l[r]);
                    return {
                        $$typeof: a,
                        type: t,
                        key: o,
                        ref: s,
                        props: i,
                        _owner: T.current
                    }
                }

                function O(t) {
                    return "object" === typeof t && null !== t && t.$$typeof === a
                }
                var A = /\/+/g,
                    C = [];

                function N(t, e, n, r) {
                    if (C.length) {
                        var i = C.pop();
                        return i.result = t, i.keyPrefix = e, i.func = n, i.context = r, i.count = 0, i
                    }
                    return {
                        result: t,
                        keyPrefix: e,
                        func: n,
                        context: r,
                        count: 0
                    }
                }

                function D(t) {
                    t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > C.length && C.push(t)
                }

                function M(t, e, n, r) {
                    var i = typeof t;
                    "undefined" !== i && "boolean" !== i || (t = null);
                    var s = !1;
                    if (null === t) s = !0;
                    else switch (i) {
                        case "string":
                        case "number":
                            s = !0;
                            break;
                        case "object":
                            switch (t.$$typeof) {
                                case a:
                                case o:
                                    s = !0
                            }
                    }
                    if (s) return n(r, t, "" === e ? "." + P(t, 0) : e), 1;
                    if (s = 0, e = "" === e ? "." : e + ":", Array.isArray(t))
                        for (var l = 0; l < t.length; l++) {
                            var u = e + P(i = t[l], l);
                            s += M(i, u, n, r)
                        } else if (null === t || "object" !== typeof t ? u = null : u = "function" === typeof(u = m && t[m] || t["@@iterator"]) ? u : null, "function" === typeof u)
                            for (t = u.call(t), l = 0; !(i = t.next()).done;) s += M(i = i.value, u = e + P(i, l++), n, r);
                        else if ("object" === i) throw n = "" + t, Error(b(31, "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
                    return s
                }

                function B(t, e, n) {
                    return null == t ? 0 : M(t, "", e, n)
                }

                function P(t, e) {
                    return "object" === typeof t && null !== t && null != t.key ? function(t) {
                        var e = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + ("" + t).replace(/[=:]/g, (function(t) {
                            return e[t]
                        }))
                    }(t.key) : e.toString(36)
                }

                function F(t, e) {
                    t.func.call(t.context, e, t.count++)
                }

                function L(t, e, n) {
                    var r = t.result,
                        i = t.keyPrefix;
                    t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? R(t, r, n, (function(t) {
                        return t
                    })) : null != t && (O(t) && (t = function(t, e) {
                        return {
                            $$typeof: a,
                            type: t.type,
                            key: e,
                            ref: t.ref,
                            props: t.props,
                            _owner: t._owner
                        }
                    }(t, i + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(A, "$&/") + "/") + n)), r.push(t))
                }

                function R(t, e, n, r, i) {
                    var a = "";
                    null != n && (a = ("" + n).replace(A, "$&/") + "/"), B(t, L, e = N(e, a, r, i)), D(e)
                }
                var U = {
                    current: null
                };

                function z() {
                    var t = U.current;
                    if (null === t) throw Error(b(321));
                    return t
                }
                var j = {
                    ReactCurrentDispatcher: U,
                    ReactCurrentBatchConfig: {
                        suspense: null
                    },
                    ReactCurrentOwner: T,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: r
                };
                e.Children = {
                    map: function(t, e, n) {
                        if (null == t) return t;
                        var r = [];
                        return R(t, r, null, e, n), r
                    },
                    forEach: function(t, e, n) {
                        if (null == t) return t;
                        B(t, F, e = N(null, null, e, n)), D(e)
                    },
                    count: function(t) {
                        return B(t, (function() {
                            return null
                        }), null)
                    },
                    toArray: function(t) {
                        var e = [];
                        return R(t, e, null, (function(t) {
                            return t
                        })), e
                    },
                    only: function(t) {
                        if (!O(t)) throw Error(b(143));
                        return t
                    }
                }, e.Component = w, e.Fragment = s, e.Profiler = u, e.PureComponent = S, e.StrictMode = l, e.Suspense = h, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, e.cloneElement = function(t, e, n) {
                    if (null === t || void 0 === t) throw Error(b(267, t));
                    var i = r({}, t.props),
                        o = t.key,
                        s = t.ref,
                        l = t._owner;
                    if (null != e) {
                        if (void 0 !== e.ref && (s = e.ref, l = T.current), void 0 !== e.key && (o = "" + e.key), t.type && t.type.defaultProps) var u = t.type.defaultProps;
                        for (c in e) k.call(e, c) && !I.hasOwnProperty(c) && (i[c] = void 0 === e[c] && void 0 !== u ? u[c] : e[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) i.children = n;
                    else if (1 < c) {
                        u = Array(c);
                        for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
                        i.children = u
                    }
                    return {
                        $$typeof: a,
                        type: t.type,
                        key: o,
                        ref: s,
                        props: i,
                        _owner: l
                    }
                }, e.createContext = function(t, e) {
                    return void 0 === e && (e = null), (t = {
                        $$typeof: d,
                        _calculateChangedBits: e,
                        _currentValue: t,
                        _currentValue2: t,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: c,
                        _context: t
                    }, t.Consumer = t
                }, e.createElement = E, e.createFactory = function(t) {
                    var e = E.bind(null, t);
                    return e.type = t, e
                }, e.createRef = function() {
                    return {
                        current: null
                    }
                }, e.forwardRef = function(t) {
                    return {
                        $$typeof: f,
                        render: t
                    }
                }, e.isValidElement = O, e.lazy = function(t) {
                    return {
                        $$typeof: y,
                        _ctor: t,
                        _status: -1,
                        _result: null
                    }
                }, e.memo = function(t, e) {
                    return {
                        $$typeof: p,
                        type: t,
                        compare: void 0 === e ? null : e
                    }
                }, e.useCallback = function(t, e) {
                    return z().useCallback(t, e)
                }, e.useContext = function(t, e) {
                    return z().useContext(t, e)
                }, e.useDebugValue = function() {}, e.useEffect = function(t, e) {
                    return z().useEffect(t, e)
                }, e.useImperativeHandle = function(t, e, n) {
                    return z().useImperativeHandle(t, e, n)
                }, e.useLayoutEffect = function(t, e) {
                    return z().useLayoutEffect(t, e)
                }, e.useMemo = function(t, e) {
                    return z().useMemo(t, e)
                }, e.useReducer = function(t, e, n) {
                    return z().useReducer(t, e, n)
                }, e.useRef = function(t) {
                    return z().useRef(t)
                }, e.useState = function(t) {
                    return z().useState(t)
                }, e.version = "16.14.0"
            },
            791: (t, e, n) => {
                "use strict";
                t.exports = n(117)
            },
            184: (t, e, n) => {
                "use strict";
                t.exports = n(374)
            },
            813: (t, e) => {
                "use strict";
                var n, r, i, a, o;
                if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var s = null,
                        l = null,
                        u = function() {
                            if (null !== s) try {
                                var t = e.unstable_now();
                                s(!0, t), s = null
                            } catch (n) {
                                throw setTimeout(u, 0), n
                            }
                        },
                        c = Date.now();
                    e.unstable_now = function() {
                        return Date.now() - c
                    }, n = function(t) {
                        null !== s ? setTimeout(n, 0, t) : (s = t, setTimeout(u, 0))
                    }, r = function(t, e) {
                        l = setTimeout(t, e)
                    }, i = function() {
                        clearTimeout(l)
                    }, a = function() {
                        return !1
                    }, o = e.unstable_forceFrameRate = function() {}
                } else {
                    var d = window.performance,
                        f = window.Date,
                        h = window.setTimeout,
                        p = window.clearTimeout;
                    if ("undefined" !== typeof console) {
                        var y = window.cancelAnimationFrame;
                        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof y && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
                    }
                    if ("object" === typeof d && "function" === typeof d.now) e.unstable_now = function() {
                        return d.now()
                    };
                    else {
                        var m = f.now();
                        e.unstable_now = function() {
                            return f.now() - m
                        }
                    }
                    var b = !1,
                        v = null,
                        g = -1,
                        w = 5,
                        _ = 0;
                    a = function() {
                        return e.unstable_now() >= _
                    }, o = function() {}, e.unstable_forceFrameRate = function(t) {
                        0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : w = 0 < t ? Math.floor(1e3 / t) : 5
                    };
                    var S = new MessageChannel,
                        x = S.port2;
                    S.port1.onmessage = function() {
                        if (null !== v) {
                            var t = e.unstable_now();
                            _ = t + w;
                            try {
                                v(!0, t) ? x.postMessage(null) : (b = !1, v = null)
                            } catch (n) {
                                throw x.postMessage(null), n
                            }
                        } else b = !1
                    }, n = function(t) {
                        v = t, b || (b = !0, x.postMessage(null))
                    }, r = function(t, n) {
                        g = h((function() {
                            t(e.unstable_now())
                        }), n)
                    }, i = function() {
                        p(g), g = -1
                    }
                }

                function T(t, e) {
                    var n = t.length;
                    t.push(e);
                    t: for (;;) {
                        var r = n - 1 >>> 1,
                            i = t[r];
                        if (!(void 0 !== i && 0 < E(i, e))) break t;
                        t[r] = e, t[n] = i, n = r
                    }
                }

                function k(t) {
                    return void 0 === (t = t[0]) ? null : t
                }

                function I(t) {
                    var e = t[0];
                    if (void 0 !== e) {
                        var n = t.pop();
                        if (n !== e) {
                            t[0] = n;
                            t: for (var r = 0, i = t.length; r < i;) {
                                var a = 2 * (r + 1) - 1,
                                    o = t[a],
                                    s = a + 1,
                                    l = t[s];
                                if (void 0 !== o && 0 > E(o, n)) void 0 !== l && 0 > E(l, o) ? (t[r] = l, t[s] = n, r = s) : (t[r] = o, t[a] = n, r = a);
                                else {
                                    if (!(void 0 !== l && 0 > E(l, n))) break t;
                                    t[r] = l, t[s] = n, r = s
                                }
                            }
                        }
                        return e
                    }
                    return null
                }

                function E(t, e) {
                    var n = t.sortIndex - e.sortIndex;
                    return 0 !== n ? n : t.id - e.id
                }
                var O = [],
                    A = [],
                    C = 1,
                    N = null,
                    D = 3,
                    M = !1,
                    B = !1,
                    P = !1;

                function F(t) {
                    for (var e = k(A); null !== e;) {
                        if (null === e.callback) I(A);
                        else {
                            if (!(e.startTime <= t)) break;
                            I(A), e.sortIndex = e.expirationTime, T(O, e)
                        }
                        e = k(A)
                    }
                }

                function L(t) {
                    if (P = !1, F(t), !B)
                        if (null !== k(O)) B = !0, n(R);
                        else {
                            var e = k(A);
                            null !== e && r(L, e.startTime - t)
                        }
                }

                function R(t, n) {
                    B = !1, P && (P = !1, i()), M = !0;
                    var o = D;
                    try {
                        for (F(n), N = k(O); null !== N && (!(N.expirationTime > n) || t && !a());) {
                            var s = N.callback;
                            if (null !== s) {
                                N.callback = null, D = N.priorityLevel;
                                var l = s(N.expirationTime <= n);
                                n = e.unstable_now(), "function" === typeof l ? N.callback = l : N === k(O) && I(O), F(n)
                            } else I(O);
                            N = k(O)
                        }
                        if (null !== N) var u = !0;
                        else {
                            var c = k(A);
                            null !== c && r(L, c.startTime - n), u = !1
                        }
                        return u
                    } finally {
                        N = null, D = o, M = !1
                    }
                }

                function U(t) {
                    switch (t) {
                        case 1:
                            return -1;
                        case 2:
                            return 250;
                        case 5:
                            return 1073741823;
                        case 4:
                            return 1e4;
                        default:
                            return 5e3
                    }
                }
                var z = o;
                e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(t) {
                    t.callback = null
                }, e.unstable_continueExecution = function() {
                    B || M || (B = !0, n(R))
                }, e.unstable_getCurrentPriorityLevel = function() {
                    return D
                }, e.unstable_getFirstCallbackNode = function() {
                    return k(O)
                }, e.unstable_next = function(t) {
                    switch (D) {
                        case 1:
                        case 2:
                        case 3:
                            var e = 3;
                            break;
                        default:
                            e = D
                    }
                    var n = D;
                    D = e;
                    try {
                        return t()
                    } finally {
                        D = n
                    }
                }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = z, e.unstable_runWithPriority = function(t, e) {
                    switch (t) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            t = 3
                    }
                    var n = D;
                    D = t;
                    try {
                        return e()
                    } finally {
                        D = n
                    }
                }, e.unstable_scheduleCallback = function(t, a, o) {
                    var s = e.unstable_now();
                    if ("object" === typeof o && null !== o) {
                        var l = o.delay;
                        l = "number" === typeof l && 0 < l ? s + l : s, o = "number" === typeof o.timeout ? o.timeout : U(t)
                    } else o = U(t), l = s;
                    return t = {
                        id: C++,
                        callback: a,
                        priorityLevel: t,
                        startTime: l,
                        expirationTime: o = l + o,
                        sortIndex: -1
                    }, l > s ? (t.sortIndex = l, T(A, t), null === k(O) && t === k(A) && (P ? i() : P = !0, r(L, l - s))) : (t.sortIndex = o, T(O, t), B || M || (B = !0, n(R))), t
                }, e.unstable_shouldYield = function() {
                    var t = e.unstable_now();
                    F(t);
                    var n = k(O);
                    return n !== N && null !== N && null !== n && null !== n.callback && n.startTime <= t && n.expirationTime < N.expirationTime || a()
                }, e.unstable_wrapCallback = function(t) {
                    var e = D;
                    return function() {
                        var n = D;
                        D = e;
                        try {
                            return t.apply(this, arguments)
                        } finally {
                            D = n
                        }
                    }
                }
            },
            296: (t, e, n) => {
                "use strict";
                t.exports = n(813)
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var a = e[r] = {
            exports: {}
        };
        return t[r](a, a.exports, n), a.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";
        var t, e, r, i, a, o, s, l, u, c = n(791),
            d = n(164),
            f = n(110),
            h = n.n(f);
        ! function(t) {
            t[t.V1 = 0] = "V1", t[t.V2 = 1] = "V2", t[t.V3 = 2] = "V3", t[t.V4 = 3] = "V4", t[t.V5 = 4] = "V5"
        }(t || (t = {})),
        function(t) {
            t[t.Sparse = 0] = "Sparse", t[t.Dense = 1] = "Dense"
        }(e || (e = {})),
        function(t) {
            t[t.HALF = 0] = "HALF", t[t.SINGLE = 1] = "SINGLE", t[t.DOUBLE = 2] = "DOUBLE"
        }(r || (r = {})),
        function(t) {
            t[t.DAY = 0] = "DAY", t[t.MILLISECOND = 1] = "MILLISECOND"
        }(i || (i = {})),
        function(t) {
            t[t.SECOND = 0] = "SECOND", t[t.MILLISECOND = 1] = "MILLISECOND", t[t.MICROSECOND = 2] = "MICROSECOND", t[t.NANOSECOND = 3] = "NANOSECOND"
        }(a || (a = {})),
        function(t) {
            t[t.YEAR_MONTH = 0] = "YEAR_MONTH", t[t.DAY_TIME = 1] = "DAY_TIME", t[t.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO"
        }(o || (o = {})),
        function(t) {
            t[t.NONE = 0] = "NONE", t[t.Schema = 1] = "Schema", t[t.DictionaryBatch = 2] = "DictionaryBatch", t[t.RecordBatch = 3] = "RecordBatch", t[t.Tensor = 4] = "Tensor", t[t.SparseTensor = 5] = "SparseTensor"
        }(s || (s = {})),
        function(t) {
            t[t.NONE = 0] = "NONE", t[t.Null = 1] = "Null", t[t.Int = 2] = "Int", t[t.Float = 3] = "Float", t[t.Binary = 4] = "Binary", t[t.Utf8 = 5] = "Utf8", t[t.Bool = 6] = "Bool", t[t.Decimal = 7] = "Decimal", t[t.Date = 8] = "Date", t[t.Time = 9] = "Time", t[t.Timestamp = 10] = "Timestamp", t[t.Interval = 11] = "Interval", t[t.List = 12] = "List", t[t.Struct = 13] = "Struct", t[t.Union = 14] = "Union", t[t.FixedSizeBinary = 15] = "FixedSizeBinary", t[t.FixedSizeList = 16] = "FixedSizeList", t[t.Map = 17] = "Map", t[t.Dictionary = -1] = "Dictionary", t[t.Int8 = -2] = "Int8", t[t.Int16 = -3] = "Int16", t[t.Int32 = -4] = "Int32", t[t.Int64 = -5] = "Int64", t[t.Uint8 = -6] = "Uint8", t[t.Uint16 = -7] = "Uint16", t[t.Uint32 = -8] = "Uint32", t[t.Uint64 = -9] = "Uint64", t[t.Float16 = -10] = "Float16", t[t.Float32 = -11] = "Float32", t[t.Float64 = -12] = "Float64", t[t.DateDay = -13] = "DateDay", t[t.DateMillisecond = -14] = "DateMillisecond", t[t.TimestampSecond = -15] = "TimestampSecond", t[t.TimestampMillisecond = -16] = "TimestampMillisecond", t[t.TimestampMicrosecond = -17] = "TimestampMicrosecond", t[t.TimestampNanosecond = -18] = "TimestampNanosecond", t[t.TimeSecond = -19] = "TimeSecond", t[t.TimeMillisecond = -20] = "TimeMillisecond", t[t.TimeMicrosecond = -21] = "TimeMicrosecond", t[t.TimeNanosecond = -22] = "TimeNanosecond", t[t.DenseUnion = -23] = "DenseUnion", t[t.SparseUnion = -24] = "SparseUnion", t[t.IntervalDayTime = -25] = "IntervalDayTime", t[t.IntervalYearMonth = -26] = "IntervalYearMonth"
        }(l || (l = {})),
        function(t) {
            t[t.OFFSET = 0] = "OFFSET", t[t.DATA = 1] = "DATA", t[t.VALIDITY = 2] = "VALIDITY", t[t.TYPE = 3] = "TYPE"
        }(u || (u = {}));
        const [p, y] = (() => {
            const t = () => {
                throw new Error("BigInt is not available in this environment")
            };

            function e() {
                throw t()
            }
            return e.asIntN = () => {
                throw t()
            }, e.asUintN = () => {
                throw t()
            }, "undefined" !== typeof BigInt ? [BigInt, !0] : [e, !1]
        })(), [m, b] = (() => {
            const t = () => {
                throw new Error("BigInt64Array is not available in this environment")
            };
            return "undefined" !== typeof BigInt64Array ? [BigInt64Array, !0] : [class {
                static get BYTES_PER_ELEMENT() {
                    return 8
                }
                static of () {
                    throw t()
                }
                static from() {
                    throw t()
                }
                constructor() {
                    throw t()
                }
            }, !1]
        })(), [v, g] = (() => {
            const t = () => {
                throw new Error("BigUint64Array is not available in this environment")
            };
            return "undefined" !== typeof BigUint64Array ? [BigUint64Array, !0] : [class {
                static get BYTES_PER_ELEMENT() {
                    return 8
                }
                static of () {
                    throw t()
                }
                static from() {
                    throw t()
                }
                constructor() {
                    throw t()
                }
            }, !1]
        })(), w = t => "number" === typeof t, _ = t => "boolean" === typeof t, S = t => "function" === typeof t, x = t => null != t && Object(t) === t, T = t => x(t) && S(t.then), k = t => x(t) && S(t[Symbol.iterator]), I = t => x(t) && S(t[Symbol.asyncIterator]), E = t => x(t) && x(t.schema), O = t => x(t) && "done" in t && "value" in t, A = t => x(t) && S(t.stat) && w(t.fd), C = t => x(t) && D(t.body), N = t => "_getDOMStream" in t && "_getNodeStream" in t, D = t => x(t) && S(t.cancel) && S(t.getReader) && !N(t), M = t => x(t) && S(t.read) && S(t.pipe) && _(t.readable) && !N(t), B = t => x(t) && S(t.clear) && S(t.bytes) && S(t.position) && S(t.setPosition) && S(t.capacity) && S(t.getBufferIdentifier) && S(t.createLong);

        function P(t) {
            if (null === t) return "null";
            if (undefined === t) return "undefined";
            switch (typeof t) {
                case "number":
                case "bigint":
                    return "".concat(t);
                case "string":
                    return '"'.concat(t, '"')
            }
            return "function" === typeof t[Symbol.toPrimitive] ? t[Symbol.toPrimitive]("string") : ArrayBuffer.isView(t) ? "[".concat(t instanceof m || t instanceof v ? [...t].map((t => P(t))) : t, "]") : ArrayBuffer.isView(t) ? "[".concat(t, "]") : JSON.stringify(t, ((t, e) => "bigint" === typeof e ? "".concat(e) : e))
        }

        function F(t, e, n, r) {
            return new(n || (n = Promise))((function(i, a) {
                function o(t) {
                    try {
                        l(r.next(t))
                    } catch (e) {
                        a(e)
                    }
                }

                function s(t) {
                    try {
                        l(r.throw(t))
                    } catch (e) {
                        a(e)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(o, s)
                }
                l((r = r.apply(t, e || [])).next())
            }))
        }
        Object.create;

        function L(t) {
            var e = "function" === typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" === typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function R(t) {
            return this instanceof R ? (this.v = t, this) : new R(t)
        }

        function U(t, e, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var r, i = n.apply(t, e || []),
                a = [];
            return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
                return this
            }, r;

            function o(t) {
                i[t] && (r[t] = function(e) {
                    return new Promise((function(n, r) {
                        a.push([t, e, n, r]) > 1 || s(t, e)
                    }))
                })
            }

            function s(t, e) {
                try {
                    (n = i[t](e)).value instanceof R ? Promise.resolve(n.value.v).then(l, u) : c(a[0][2], n)
                } catch (r) {
                    c(a[0][3], r)
                }
                var n
            }

            function l(t) {
                s("next", t)
            }

            function u(t) {
                s("throw", t)
            }

            function c(t, e) {
                t(e), a.shift(), a.length && s(a[0][0], a[0][1])
            }
        }

        function z(t) {
            var e, n;
            return e = {}, r("next"), r("throw", (function(t) {
                throw t
            })), r("return"), e[Symbol.iterator] = function() {
                return this
            }, e;

            function r(r, i) {
                e[r] = t[r] ? function(e) {
                    return (n = !n) ? {
                        value: R(t[r](e)),
                        done: !1
                    } : i ? i(e) : e
                } : i
            }
        }

        function j(t) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, n = t[Symbol.asyncIterator];
            return n ? n.call(t) : (t = L(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
                return this
            }, e);

            function r(n) {
                e[n] = t[n] && function(e) {
                    return new Promise((function(r, i) {
                        (function(t, e, n, r) {
                            Promise.resolve(r).then((function(e) {
                                t({
                                    value: e,
                                    done: n
                                })
                            }), e)
                        })(r, i, (e = t[n](e)).done, e.value)
                    }))
                }
            }
        }
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        const V = new TextDecoder("utf-8"),
            W = t => V.decode(t),
            Y = new TextEncoder,
            H = t => Y.encode(t),
            $ = "undefined" !== typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;

        function K(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.byteLength;
            const i = t.byteLength,
                a = new Uint8Array(t.buffer, t.byteOffset, i),
                o = new Uint8Array(e.buffer, e.byteOffset, Math.min(r, i));
            return a.set(o, n), t
        }

        function Q(t, e) {
            const n = function(t) {
                    const e = t[0] ? [t[0]] : [];
                    let n, r, i, a;
                    for (let o, s, l = 0, u = 0, c = t.length; ++l < c;) o = e[u], s = t[l], !o || !s || o.buffer !== s.buffer || s.byteOffset < o.byteOffset ? s && (e[++u] = s) : (({
                        byteOffset: n,
                        byteLength: i
                    } = o), ({
                        byteOffset: r,
                        byteLength: a
                    } = s), n + i < r || r + a < n ? s && (e[++u] = s) : e[u] = new Uint8Array(o.buffer, n, r - n + a));
                    return e
                }(t),
                r = n.reduce(((t, e) => t + e.byteLength), 0);
            let i, a, o, s = 0,
                l = -1;
            const u = Math.min(e || Number.POSITIVE_INFINITY, r);
            for (const c = n.length; ++l < c;) {
                if (i = n[l], a = i.subarray(0, Math.min(i.length, u - s)), u <= s + a.length) {
                    a.length < i.length ? n[l] = i.subarray(a.length) : a.length === i.length && l++, o ? K(o, a, s) : o = a;
                    break
                }
                K(o || (o = new Uint8Array(u)), a, s), s += a.length
            }
            return [o || new Uint8Array(0), n.slice(l), r - (o ? o.byteLength : 0)]
        }

        function q(t, e) {
            let n = O(e) ? e.value : e;
            return n instanceof t ? t === Uint8Array ? new t(n.buffer, n.byteOffset, n.byteLength) : n : n ? ("string" === typeof n && (n = H(n)), n instanceof ArrayBuffer || n instanceof $ ? new t(n) : B(n) ? q(t, n.bytes()) : ArrayBuffer.isView(n) ? n.byteLength <= 0 ? new t(0) : new t(n.buffer, n.byteOffset, n.byteLength / t.BYTES_PER_ELEMENT) : t.from(n)) : new t(0)
        }
        const G = t => q(Int32Array, t),
            X = t => q(Uint8Array, t),
            J = t => (t.next(), t);

        function* Z(t, e) {
            const n = function*(t) {
                    yield t
                },
                r = "string" === typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || e instanceof $ ? n(e) : k(e) ? e : n(e);
            return yield* J(function*(e) {
                let n = null;
                do {
                    n = e.next(yield q(t, n))
                } while (!n.done)
            }(r[Symbol.iterator]())), new t
        }

        function tt(t, e) {
            return U(this, arguments, (function*() {
                if (T(e)) return yield R(yield R(yield* z(j(tt(t, yield R(e))))));
                const n = function(t) {
                        return U(this, arguments, (function*() {
                            yield yield R(yield R(t))
                        }))
                    },
                    r = "string" === typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || e instanceof $ ? n(e) : k(e) ? function(t) {
                        return U(this, arguments, (function*() {
                            yield R(yield* z(j(J(function*(t) {
                                let e = null;
                                do {
                                    e = t.next(yield null === e || void 0 === e ? void 0 : e.value)
                                } while (!e.done)
                            }(t[Symbol.iterator]())))))
                        }))
                    }(e) : I(e) ? e : n(e);
                return yield R(yield* z(j(J(function(e) {
                    return U(this, arguments, (function*() {
                        let n = null;
                        do {
                            n = yield R(e.next(yield yield R(q(t, n))))
                        } while (!n.done)
                    }))
                }(r[Symbol.asyncIterator]()))))), yield R(new t)
            }))
        }

        function et(t, e, n) {
            if (0 !== t) {
                n = n.slice(0, e + 1);
                for (let r = -1; ++r <= e;) n[r] += t
            }
            return n
        }
        const nt = Symbol.for("isArrowBigNum");

        function rt(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            return 0 === n.length ? Object.setPrototypeOf(q(this.TypedArray, t), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(t, ...n), this.constructor.prototype)
        }

        function it() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return rt.apply(this, e)
        }

        function at() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return rt.apply(this, e)
        }

        function ot() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return rt.apply(this, e)
        }

        function st(t) {
            const {
                buffer: e,
                byteOffset: n,
                length: r,
                signed: i
            } = t, a = new v(e, n, r), o = i && a[a.length - 1] & BigInt(1) << BigInt(63);
            let s = o ? BigInt(1) : BigInt(0),
                l = BigInt(0);
            if (o) {
                for (const t of a) s += ~t * (BigInt(1) << BigInt(32) * l++);
                s *= BigInt(-1)
            } else
                for (const u of a) s += u * (BigInt(1) << BigInt(32) * l++);
            return s
        }
        let lt, ut;

        function ct(t) {
            let e = "";
            const n = new Uint32Array(2);
            let r = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2);
            const i = new Uint32Array((r = new Uint16Array(r).reverse()).buffer);
            let a = -1;
            const o = r.length - 1;
            do {
                for (n[0] = r[a = 0]; a < o;) r[a++] = n[1] = n[0] / 10, n[0] = (n[0] - 10 * n[1] << 16) + r[a];
                r[a] = n[1] = n[0] / 10, n[0] = n[0] - 10 * n[1], e = "".concat(n[0]).concat(e)
            } while (i[0] || i[1] || i[2] || i[3]);
            return null !== e && void 0 !== e ? e : "0"
        }
        rt.prototype[nt] = !0, rt.prototype.toJSON = function() {
            return '"'.concat(lt(this), '"')
        }, rt.prototype.valueOf = function() {
            return st(this)
        }, rt.prototype.toString = function() {
            return lt(this)
        }, rt.prototype[Symbol.toPrimitive] = function() {
            switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default") {
                case "number":
                    return st(this);
                case "string":
                    return lt(this);
                case "default":
                    return ut(this)
            }
            return lt(this)
        }, Object.setPrototypeOf(it.prototype, Object.create(Int32Array.prototype)), Object.setPrototypeOf(at.prototype, Object.create(Uint32Array.prototype)), Object.setPrototypeOf(ot.prototype, Object.create(Uint32Array.prototype)), Object.assign(it.prototype, rt.prototype, {
            constructor: it,
            signed: !0,
            TypedArray: Int32Array,
            BigIntArray: m
        }), Object.assign(at.prototype, rt.prototype, {
            constructor: at,
            signed: !1,
            TypedArray: Uint32Array,
            BigIntArray: v
        }), Object.assign(ot.prototype, rt.prototype, {
            constructor: ot,
            signed: !0,
            TypedArray: Uint32Array,
            BigIntArray: v
        }), y ? (ut = t => 8 === t.byteLength ? new t.BigIntArray(t.buffer, t.byteOffset, 1)[0] : ct(t), lt = t => 8 === t.byteLength ? "".concat(new t.BigIntArray(t.buffer, t.byteOffset, 1)[0]) : ct(t)) : (lt = ct, ut = lt);
        class dt {
            static new(t, e) {
                switch (e) {
                    case !0:
                        return new it(t);
                    case !1:
                        return new at(t)
                }
                switch (t.constructor) {
                    case Int8Array:
                    case Int16Array:
                    case Int32Array:
                    case m:
                        return new it(t)
                }
                return 16 === t.byteLength ? new ot(t) : new at(t)
            }
            static signed(t) {
                return new it(t)
            }
            static unsigned(t) {
                return new at(t)
            }
            static decimal(t) {
                return new ot(t)
            }
            constructor(t, e) {
                return dt.new(t, e)
            }
        }
        var ft, ht, pt, yt, mt, bt, vt, gt, wt, _t, St, xt, Tt, kt, It, Et, Ot, At, Ct, Nt;
        class Dt {
            static isNull(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Null
            }
            static isInt(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Int
            }
            static isFloat(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Float
            }
            static isBinary(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Binary
            }
            static isUtf8(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Utf8
            }
            static isBool(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Bool
            }
            static isDecimal(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Decimal
            }
            static isDate(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Date
            }
            static isTime(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Time
            }
            static isTimestamp(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Timestamp
            }
            static isInterval(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Interval
            }
            static isList(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.List
            }
            static isStruct(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Struct
            }
            static isUnion(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Union
            }
            static isFixedSizeBinary(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.FixedSizeBinary
            }
            static isFixedSizeList(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.FixedSizeList
            }
            static isMap(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Map
            }
            static isDictionary(t) {
                return (null === t || void 0 === t ? void 0 : t.typeId) === l.Dictionary
            }
            static isDenseUnion(t) {
                return Dt.isUnion(t) && t.mode === e.Dense
            }
            static isSparseUnion(t) {
                return Dt.isUnion(t) && t.mode === e.Sparse
            }
            get typeId() {
                return l.NONE
            }
        }
        ft = Symbol.toStringTag, Dt[ft] = ((Nt = Dt.prototype).children = null, Nt.ArrayType = Array, Nt[Symbol.toStringTag] = "DataType");
        class Mt extends Dt {
            toString() {
                return "Null"
            }
            get typeId() {
                return l.Null
            }
        }
        ht = Symbol.toStringTag, Mt[ht] = (t => t[Symbol.toStringTag] = "Null")(Mt.prototype);
        class Bt extends Dt {
            constructor(t, e) {
                super(), this.isSigned = t, this.bitWidth = e
            }
            get typeId() {
                return l.Int
            }
            get ArrayType() {
                switch (this.bitWidth) {
                    case 8:
                        return this.isSigned ? Int8Array : Uint8Array;
                    case 16:
                        return this.isSigned ? Int16Array : Uint16Array;
                    case 32:
                        return this.isSigned ? Int32Array : Uint32Array;
                    case 64:
                        return this.isSigned ? m : v
                }
                throw new Error("Unrecognized ".concat(this[Symbol.toStringTag], " type"))
            }
            toString() {
                return "".concat(this.isSigned ? "I" : "Ui", "nt").concat(this.bitWidth)
            }
        }
        pt = Symbol.toStringTag, Bt[pt] = (t => (t.isSigned = null, t.bitWidth = null, t[Symbol.toStringTag] = "Int"))(Bt.prototype);
        class Pt extends Bt {
            constructor() {
                super(!0, 32)
            }
            get ArrayType() {
                return Int32Array
            }
        }
        Object.defineProperty(class extends Bt {
            constructor() {
                super(!0, 8)
            }
            get ArrayType() {
                return Int8Array
            }
        }.prototype, "ArrayType", {
            value: Int8Array
        }), Object.defineProperty(class extends Bt {
            constructor() {
                super(!0, 16)
            }
            get ArrayType() {
                return Int16Array
            }
        }.prototype, "ArrayType", {
            value: Int16Array
        }), Object.defineProperty(Pt.prototype, "ArrayType", {
            value: Int32Array
        }), Object.defineProperty(class extends Bt {
            constructor() {
                super(!0, 64)
            }
            get ArrayType() {
                return m
            }
        }.prototype, "ArrayType", {
            value: m
        }), Object.defineProperty(class extends Bt {
            constructor() {
                super(!1, 8)
            }
            get ArrayType() {
                return Uint8Array
            }
        }.prototype, "ArrayType", {
            value: Uint8Array
        }), Object.defineProperty(class extends Bt {
            constructor() {
                super(!1, 16)
            }
            get ArrayType() {
                return Uint16Array
            }
        }.prototype, "ArrayType", {
            value: Uint16Array
        }), Object.defineProperty(class extends Bt {
            constructor() {
                super(!1, 32)
            }
            get ArrayType() {
                return Uint32Array
            }
        }.prototype, "ArrayType", {
            value: Uint32Array
        }), Object.defineProperty(class extends Bt {
            constructor() {
                super(!1, 64)
            }
            get ArrayType() {
                return v
            }
        }.prototype, "ArrayType", {
            value: v
        });
        class Ft extends Dt {
            constructor(t) {
                super(), this.precision = t
            }
            get typeId() {
                return l.Float
            }
            get ArrayType() {
                switch (this.precision) {
                    case r.HALF:
                        return Uint16Array;
                    case r.SINGLE:
                        return Float32Array;
                    case r.DOUBLE:
                        return Float64Array
                }
                throw new Error("Unrecognized ".concat(this[Symbol.toStringTag], " type"))
            }
            toString() {
                return "Float".concat(this.precision << 5 || 16)
            }
        }
        yt = Symbol.toStringTag, Ft[yt] = (t => (t.precision = null, t[Symbol.toStringTag] = "Float"))(Ft.prototype);
        Object.defineProperty(class extends Ft {
            constructor() {
                super(r.HALF)
            }
        }.prototype, "ArrayType", {
            value: Uint16Array
        }), Object.defineProperty(class extends Ft {
            constructor() {
                super(r.SINGLE)
            }
        }.prototype, "ArrayType", {
            value: Float32Array
        }), Object.defineProperty(class extends Ft {
            constructor() {
                super(r.DOUBLE)
            }
        }.prototype, "ArrayType", {
            value: Float64Array
        });
        class Lt extends Dt {
            constructor() {
                super()
            }
            get typeId() {
                return l.Binary
            }
            toString() {
                return "Binary"
            }
        }
        mt = Symbol.toStringTag, Lt[mt] = (t => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Binary"))(Lt.prototype);
        class Rt extends Dt {
            constructor() {
                super()
            }
            get typeId() {
                return l.Utf8
            }
            toString() {
                return "Utf8"
            }
        }
        bt = Symbol.toStringTag, Rt[bt] = (t => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Utf8"))(Rt.prototype);
        class Ut extends Dt {
            constructor() {
                super()
            }
            get typeId() {
                return l.Bool
            }
            toString() {
                return "Bool"
            }
        }
        vt = Symbol.toStringTag, Ut[vt] = (t => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Bool"))(Ut.prototype);
        class zt extends Dt {
            constructor(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
                super(), this.scale = t, this.precision = e, this.bitWidth = n
            }
            get typeId() {
                return l.Decimal
            }
            toString() {
                return "Decimal[".concat(this.precision, "e").concat(this.scale > 0 ? "+" : "").concat(this.scale, "]")
            }
        }
        gt = Symbol.toStringTag, zt[gt] = (t => (t.scale = null, t.precision = null, t.ArrayType = Uint32Array, t[Symbol.toStringTag] = "Decimal"))(zt.prototype);
        class jt extends Dt {
            constructor(t) {
                super(), this.unit = t
            }
            get typeId() {
                return l.Date
            }
            toString() {
                return "Date".concat(32 * (this.unit + 1), "<").concat(i[this.unit], ">")
            }
        }
        wt = Symbol.toStringTag, jt[wt] = (t => (t.unit = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Date"))(jt.prototype);
        class Vt extends Dt {
            constructor(t, e) {
                super(), this.unit = t, this.bitWidth = e
            }
            get typeId() {
                return l.Time
            }
            toString() {
                return "Time".concat(this.bitWidth, "<").concat(a[this.unit], ">")
            }
            get ArrayType() {
                switch (this.bitWidth) {
                    case 32:
                        return Int32Array;
                    case 64:
                        return m
                }
                throw new Error("Unrecognized ".concat(this[Symbol.toStringTag], " type"))
            }
        }
        _t = Symbol.toStringTag, Vt[_t] = (t => (t.unit = null, t.bitWidth = null, t[Symbol.toStringTag] = "Time"))(Vt.prototype);
        class Wt extends Dt {
            constructor(t, e) {
                super(), this.unit = t, this.timezone = e
            }
            get typeId() {
                return l.Timestamp
            }
            toString() {
                return "Timestamp<".concat(a[this.unit]).concat(this.timezone ? ", ".concat(this.timezone) : "", ">")
            }
        }
        St = Symbol.toStringTag, Wt[St] = (t => (t.unit = null, t.timezone = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Timestamp"))(Wt.prototype);
        class Yt extends Dt {
            constructor(t) {
                super(), this.unit = t
            }
            get typeId() {
                return l.Interval
            }
            toString() {
                return "Interval<".concat(o[this.unit], ">")
            }
        }
        xt = Symbol.toStringTag, Yt[xt] = (t => (t.unit = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Interval"))(Yt.prototype);
        class Ht extends Dt {
            constructor(t) {
                super(), this.children = [t]
            }
            get typeId() {
                return l.List
            }
            toString() {
                return "List<".concat(this.valueType, ">")
            }
            get valueType() {
                return this.children[0].type
            }
            get valueField() {
                return this.children[0]
            }
            get ArrayType() {
                return this.valueType.ArrayType
            }
        }
        Tt = Symbol.toStringTag, Ht[Tt] = (t => (t.children = null, t[Symbol.toStringTag] = "List"))(Ht.prototype);
        class $t extends Dt {
            constructor(t) {
                super(), this.children = t
            }
            get typeId() {
                return l.Struct
            }
            toString() {
                return "Struct<{".concat(this.children.map((t => "".concat(t.name, ":").concat(t.type))).join(", "), "}>")
            }
        }
        kt = Symbol.toStringTag, $t[kt] = (t => (t.children = null, t[Symbol.toStringTag] = "Struct"))($t.prototype);
        class Kt extends Dt {
            constructor(t, e, n) {
                super(), this.mode = t, this.children = n, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce(((t, e, n) => (t[e] = n) && t || t), Object.create(null))
            }
            get typeId() {
                return l.Union
            }
            toString() {
                return "".concat(this[Symbol.toStringTag], "<").concat(this.children.map((t => "".concat(t.type))).join(" | "), ">")
            }
        }
        It = Symbol.toStringTag, Kt[It] = (t => (t.mode = null, t.typeIds = null, t.children = null, t.typeIdToChildIndex = null, t.ArrayType = Int8Array, t[Symbol.toStringTag] = "Union"))(Kt.prototype);
        class Qt extends Dt {
            constructor(t) {
                super(), this.byteWidth = t
            }
            get typeId() {
                return l.FixedSizeBinary
            }
            toString() {
                return "FixedSizeBinary[".concat(this.byteWidth, "]")
            }
        }
        Et = Symbol.toStringTag, Qt[Et] = (t => (t.byteWidth = null, t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "FixedSizeBinary"))(Qt.prototype);
        class qt extends Dt {
            constructor(t, e) {
                super(), this.listSize = t, this.children = [e]
            }
            get typeId() {
                return l.FixedSizeList
            }
            get valueType() {
                return this.children[0].type
            }
            get valueField() {
                return this.children[0]
            }
            get ArrayType() {
                return this.valueType.ArrayType
            }
            toString() {
                return "FixedSizeList[".concat(this.listSize, "]<").concat(this.valueType, ">")
            }
        }
        Ot = Symbol.toStringTag, qt[Ot] = (t => (t.children = null, t.listSize = null, t[Symbol.toStringTag] = "FixedSizeList"))(qt.prototype);
        class Gt extends Dt {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                super(), this.children = [t], this.keysSorted = e
            }
            get typeId() {
                return l.Map
            }
            get keyType() {
                return this.children[0].type.children[0].type
            }
            get valueType() {
                return this.children[0].type.children[1].type
            }
            get childType() {
                return this.children[0].type
            }
            toString() {
                return "Map<{".concat(this.children[0].type.children.map((t => "".concat(t.name, ":").concat(t.type))).join(", "), "}>")
            }
        }
        At = Symbol.toStringTag, Gt[At] = (t => (t.children = null, t.keysSorted = null, t[Symbol.toStringTag] = "Map_"))(Gt.prototype);
        const Xt = (Jt = -1, () => ++Jt);
        var Jt;
        class Zt extends Dt {
            constructor(t, e, n, r) {
                super(), this.indices = e, this.dictionary = t, this.isOrdered = r || !1, this.id = null == n ? Xt() : "number" === typeof n ? n : n.low
            }
            get typeId() {
                return l.Dictionary
            }
            get children() {
                return this.dictionary.children
            }
            get valueType() {
                return this.dictionary
            }
            get ArrayType() {
                return this.dictionary.ArrayType
            }
            toString() {
                return "Dictionary<".concat(this.indices, ", ").concat(this.dictionary, ">")
            }
        }

        function te(t) {
            const e = t;
            switch (t.typeId) {
                case l.Decimal:
                    return t.bitWidth / 32;
                case l.Timestamp:
                    return 2;
                case l.Date:
                case l.Interval:
                    return 1 + e.unit;
                case l.FixedSizeList:
                    return e.listSize;
                case l.FixedSizeBinary:
                    return e.byteWidth;
                default:
                    return 1
            }
        }
        Ct = Symbol.toStringTag, Zt[Ct] = (t => (t.id = null, t.indices = null, t.isOrdered = null, t.dictionary = null, t[Symbol.toStringTag] = "Dictionary"))(Zt.prototype);
        class ee {
            visitMany(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                return t.map(((t, e) => this.visit(t, ...n.map((t => t[e])))))
            }
            visit() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.getVisitFn(e[0], !1).apply(this, e)
            }
            getVisitFn(t) {
                return function(t, e) {
                    let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if ("number" === typeof e) return ne(t, e, n);
                    if ("string" === typeof e && e in l) return ne(t, l[e], n);
                    if (e && e instanceof Dt) return ne(t, re(e), n);
                    if ((null === e || void 0 === e ? void 0 : e.type) && e.type instanceof Dt) return ne(t, re(e.type), n);
                    return ne(t, l.NONE, n)
                }(this, t, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
            }
            getVisitFnByTypeId(t) {
                return ne(this, t, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
            }
            visitNull(t) {
                return null
            }
            visitBool(t) {
                return null
            }
            visitInt(t) {
                return null
            }
            visitFloat(t) {
                return null
            }
            visitUtf8(t) {
                return null
            }
            visitBinary(t) {
                return null
            }
            visitFixedSizeBinary(t) {
                return null
            }
            visitDate(t) {
                return null
            }
            visitTimestamp(t) {
                return null
            }
            visitTime(t) {
                return null
            }
            visitDecimal(t) {
                return null
            }
            visitList(t) {
                return null
            }
            visitStruct(t) {
                return null
            }
            visitUnion(t) {
                return null
            }
            visitDictionary(t) {
                return null
            }
            visitInterval(t) {
                return null
            }
            visitFixedSizeList(t) {
                return null
            }
            visitMap(t) {
                return null
            }
        }

        function ne(t, e) {
            let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                r = null;
            switch (e) {
                case l.Null:
                    r = t.visitNull;
                    break;
                case l.Bool:
                    r = t.visitBool;
                    break;
                case l.Int:
                    r = t.visitInt;
                    break;
                case l.Int8:
                    r = t.visitInt8 || t.visitInt;
                    break;
                case l.Int16:
                    r = t.visitInt16 || t.visitInt;
                    break;
                case l.Int32:
                    r = t.visitInt32 || t.visitInt;
                    break;
                case l.Int64:
                    r = t.visitInt64 || t.visitInt;
                    break;
                case l.Uint8:
                    r = t.visitUint8 || t.visitInt;
                    break;
                case l.Uint16:
                    r = t.visitUint16 || t.visitInt;
                    break;
                case l.Uint32:
                    r = t.visitUint32 || t.visitInt;
                    break;
                case l.Uint64:
                    r = t.visitUint64 || t.visitInt;
                    break;
                case l.Float:
                    r = t.visitFloat;
                    break;
                case l.Float16:
                    r = t.visitFloat16 || t.visitFloat;
                    break;
                case l.Float32:
                    r = t.visitFloat32 || t.visitFloat;
                    break;
                case l.Float64:
                    r = t.visitFloat64 || t.visitFloat;
                    break;
                case l.Utf8:
                    r = t.visitUtf8;
                    break;
                case l.Binary:
                    r = t.visitBinary;
                    break;
                case l.FixedSizeBinary:
                    r = t.visitFixedSizeBinary;
                    break;
                case l.Date:
                    r = t.visitDate;
                    break;
                case l.DateDay:
                    r = t.visitDateDay || t.visitDate;
                    break;
                case l.DateMillisecond:
                    r = t.visitDateMillisecond || t.visitDate;
                    break;
                case l.Timestamp:
                    r = t.visitTimestamp;
                    break;
                case l.TimestampSecond:
                    r = t.visitTimestampSecond || t.visitTimestamp;
                    break;
                case l.TimestampMillisecond:
                    r = t.visitTimestampMillisecond || t.visitTimestamp;
                    break;
                case l.TimestampMicrosecond:
                    r = t.visitTimestampMicrosecond || t.visitTimestamp;
                    break;
                case l.TimestampNanosecond:
                    r = t.visitTimestampNanosecond || t.visitTimestamp;
                    break;
                case l.Time:
                    r = t.visitTime;
                    break;
                case l.TimeSecond:
                    r = t.visitTimeSecond || t.visitTime;
                    break;
                case l.TimeMillisecond:
                    r = t.visitTimeMillisecond || t.visitTime;
                    break;
                case l.TimeMicrosecond:
                    r = t.visitTimeMicrosecond || t.visitTime;
                    break;
                case l.TimeNanosecond:
                    r = t.visitTimeNanosecond || t.visitTime;
                    break;
                case l.Decimal:
                    r = t.visitDecimal;
                    break;
                case l.List:
                    r = t.visitList;
                    break;
                case l.Struct:
                    r = t.visitStruct;
                    break;
                case l.Union:
                    r = t.visitUnion;
                    break;
                case l.DenseUnion:
                    r = t.visitDenseUnion || t.visitUnion;
                    break;
                case l.SparseUnion:
                    r = t.visitSparseUnion || t.visitUnion;
                    break;
                case l.Dictionary:
                    r = t.visitDictionary;
                    break;
                case l.Interval:
                    r = t.visitInterval;
                    break;
                case l.IntervalDayTime:
                    r = t.visitIntervalDayTime || t.visitInterval;
                    break;
                case l.IntervalYearMonth:
                    r = t.visitIntervalYearMonth || t.visitInterval;
                    break;
                case l.FixedSizeList:
                    r = t.visitFixedSizeList;
                    break;
                case l.Map:
                    r = t.visitMap
            }
            if ("function" === typeof r) return r;
            if (!n) return () => null;
            throw new Error("Unrecognized type '".concat(l[e], "'"))
        }

        function re(t) {
            switch (t.typeId) {
                case l.Null:
                    return l.Null;
                case l.Int: {
                    const {
                        bitWidth: e,
                        isSigned: n
                    } = t;
                    switch (e) {
                        case 8:
                            return n ? l.Int8 : l.Uint8;
                        case 16:
                            return n ? l.Int16 : l.Uint16;
                        case 32:
                            return n ? l.Int32 : l.Uint32;
                        case 64:
                            return n ? l.Int64 : l.Uint64
                    }
                    return l.Int
                }
                case l.Float:
                    switch (t.precision) {
                        case r.HALF:
                            return l.Float16;
                        case r.SINGLE:
                            return l.Float32;
                        case r.DOUBLE:
                            return l.Float64
                    }
                    return l.Float;
                case l.Binary:
                    return l.Binary;
                case l.Utf8:
                    return l.Utf8;
                case l.Bool:
                    return l.Bool;
                case l.Decimal:
                    return l.Decimal;
                case l.Time:
                    switch (t.unit) {
                        case a.SECOND:
                            return l.TimeSecond;
                        case a.MILLISECOND:
                            return l.TimeMillisecond;
                        case a.MICROSECOND:
                            return l.TimeMicrosecond;
                        case a.NANOSECOND:
                            return l.TimeNanosecond
                    }
                    return l.Time;
                case l.Timestamp:
                    switch (t.unit) {
                        case a.SECOND:
                            return l.TimestampSecond;
                        case a.MILLISECOND:
                            return l.TimestampMillisecond;
                        case a.MICROSECOND:
                            return l.TimestampMicrosecond;
                        case a.NANOSECOND:
                            return l.TimestampNanosecond
                    }
                    return l.Timestamp;
                case l.Date:
                    switch (t.unit) {
                        case i.DAY:
                            return l.DateDay;
                        case i.MILLISECOND:
                            return l.DateMillisecond
                    }
                    return l.Date;
                case l.Interval:
                    switch (t.unit) {
                        case o.DAY_TIME:
                            return l.IntervalDayTime;
                        case o.YEAR_MONTH:
                            return l.IntervalYearMonth
                    }
                    return l.Interval;
                case l.Map:
                    return l.Map;
                case l.List:
                    return l.List;
                case l.Struct:
                    return l.Struct;
                case l.Union:
                    switch (t.mode) {
                        case e.Dense:
                            return l.DenseUnion;
                        case e.Sparse:
                            return l.SparseUnion
                    }
                    return l.Union;
                case l.FixedSizeBinary:
                    return l.FixedSizeBinary;
                case l.FixedSizeList:
                    return l.FixedSizeList;
                case l.Dictionary:
                    return l.Dictionary
            }
            throw new Error("Unrecognized type '".concat(l[t.typeId], "'"))
        }
        ee.prototype.visitInt8 = null, ee.prototype.visitInt16 = null, ee.prototype.visitInt32 = null, ee.prototype.visitInt64 = null, ee.prototype.visitUint8 = null, ee.prototype.visitUint16 = null, ee.prototype.visitUint32 = null, ee.prototype.visitUint64 = null, ee.prototype.visitFloat16 = null, ee.prototype.visitFloat32 = null, ee.prototype.visitFloat64 = null, ee.prototype.visitDateDay = null, ee.prototype.visitDateMillisecond = null, ee.prototype.visitTimestampSecond = null, ee.prototype.visitTimestampMillisecond = null, ee.prototype.visitTimestampMicrosecond = null, ee.prototype.visitTimestampNanosecond = null, ee.prototype.visitTimeSecond = null, ee.prototype.visitTimeMillisecond = null, ee.prototype.visitTimeMicrosecond = null, ee.prototype.visitTimeNanosecond = null, ee.prototype.visitDenseUnion = null, ee.prototype.visitSparseUnion = null, ee.prototype.visitIntervalDayTime = null, ee.prototype.visitIntervalYearMonth = null;
        const ie = new Float64Array(1),
            ae = new Uint32Array(ie.buffer);

        function oe(t) {
            const e = (31744 & t) >> 10,
                n = (1023 & t) / 1024,
                r = Math.pow(-1, (32768 & t) >> 15);
            switch (e) {
                case 31:
                    return r * (n ? Number.NaN : 1 / 0);
                case 0:
                    return r * (n ? 6103515625e-14 * n : 0)
            }
            return r * Math.pow(2, e - 15) * (1 + n)
        }
        class se extends ee {}

        function le(t) {
            return (e, n, r) => {
                if (e.setValid(n, null != r)) return t(e, n, r)
            }
        }
        const ue = (t, e, n) => {
                t[e] = Math.trunc(n % 4294967296), t[e + 1] = Math.trunc(n / 4294967296)
            },
            ce = (t, e, n, r) => {
                if (n + 1 < e.length) {
                    const {
                        [n]: i, [n + 1]: a
                    } = e;
                    t.set(r.subarray(0, a - i), i)
                }
            },
            de = (t, e, n) => {
                let {
                    values: r
                } = t;
                r[e] = n
            },
            fe = (t, e, n) => {
                let {
                    values: r
                } = t;
                r[e] = n
            },
            he = (t, e, n) => {
                let {
                    values: r
                } = t;
                r[e] = function(t) {
                    if (t !== t) return 32256;
                    ie[0] = t;
                    const e = (2147483648 & ae[1]) >> 16 & 65535;
                    let n = 2146435072 & ae[1],
                        r = 0;
                    return n >= 1089470464 ? ae[0] > 0 ? n = 31744 : (n = (2080374784 & n) >> 16, r = (1048575 & ae[1]) >> 10) : n <= 1056964608 ? (r = 1048576 + (1048575 & ae[1]), r = 1048576 + (r << (n >> 20) - 998) >> 21, n = 0) : (n = n - 1056964608 >> 10, r = 512 + (1048575 & ae[1]) >> 10), e | n | 65535 & r
                }(n)
            },
            pe = (t, e, n) => {
                let {
                    values: r
                } = t;
                ((t, e, n) => {
                    t[e] = Math.trunc(n / 864e5)
                })(r, e, n.valueOf())
            },
            ye = (t, e, n) => {
                let {
                    values: r
                } = t;
                ue(r, 2 * e, n.valueOf())
            },
            me = (t, e, n) => {
                let {
                    values: r
                } = t;
                return ue(r, 2 * e, n / 1e3)
            },
            be = (t, e, n) => {
                let {
                    values: r
                } = t;
                return ue(r, 2 * e, n)
            },
            ve = (t, e, n) => {
                let {
                    values: r
                } = t;
                return ((t, e, n) => {
                    t[e] = Math.trunc(1e3 * n % 4294967296), t[e + 1] = Math.trunc(1e3 * n / 4294967296)
                })(r, 2 * e, n)
            },
            ge = (t, e, n) => {
                let {
                    values: r
                } = t;
                return ((t, e, n) => {
                    t[e] = Math.trunc(1e6 * n % 4294967296), t[e + 1] = Math.trunc(1e6 * n / 4294967296)
                })(r, 2 * e, n)
            },
            we = (t, e, n) => {
                let {
                    values: r
                } = t;
                r[e] = n
            },
            _e = (t, e, n) => {
                let {
                    values: r
                } = t;
                r[e] = n
            },
            Se = (t, e, n) => {
                let {
                    values: r
                } = t;
                r[e] = n
            },
            xe = (t, e, n) => {
                let {
                    values: r
                } = t;
                r[e] = n
            },
            Te = (t, e, n) => {
                const r = t.type.typeIdToChildIndex[t.typeIds[e]],
                    i = t.children[r];
                Oe.visit(i, t.valueOffsets[e], n)
            },
            ke = (t, e, n) => {
                const r = t.type.typeIdToChildIndex[t.typeIds[e]],
                    i = t.children[r];
                Oe.visit(i, e, n)
            },
            Ie = (t, e, n) => {
                let {
                    values: r
                } = t;
                r.set(n.subarray(0, 2), 2 * e)
            },
            Ee = (t, e, n) => {
                let {
                    values: r
                } = t;
                r[e] = 12 * n[0] + n[1] % 12
            };
        se.prototype.visitBool = le(((t, e, n) => {
            let {
                offset: r,
                values: i
            } = t;
            const a = r + e;
            n ? i[a >> 3] |= 1 << a % 8 : i[a >> 3] &= ~(1 << a % 8)
        })), se.prototype.visitInt = le(de), se.prototype.visitInt8 = le(de), se.prototype.visitInt16 = le(de), se.prototype.visitInt32 = le(de), se.prototype.visitInt64 = le(de), se.prototype.visitUint8 = le(de), se.prototype.visitUint16 = le(de), se.prototype.visitUint32 = le(de), se.prototype.visitUint64 = le(de), se.prototype.visitFloat = le(((t, e, n) => {
            switch (t.type.precision) {
                case r.HALF:
                    return he(t, e, n);
                case r.SINGLE:
                case r.DOUBLE:
                    return fe(t, e, n)
            }
        })), se.prototype.visitFloat16 = le(he), se.prototype.visitFloat32 = le(fe), se.prototype.visitFloat64 = le(fe), se.prototype.visitUtf8 = le(((t, e, n) => {
            let {
                values: r,
                valueOffsets: i
            } = t;
            ce(r, i, e, H(n))
        })), se.prototype.visitBinary = le(((t, e, n) => {
            let {
                values: r,
                valueOffsets: i
            } = t;
            return ce(r, i, e, n)
        })), se.prototype.visitFixedSizeBinary = le(((t, e, n) => {
            let {
                stride: r,
                values: i
            } = t;
            i.set(n.subarray(0, r), r * e)
        })), se.prototype.visitDate = le(((t, e, n) => {
            t.type.unit === i.DAY ? pe(t, e, n) : ye(t, e, n)
        })), se.prototype.visitDateDay = le(pe), se.prototype.visitDateMillisecond = le(ye), se.prototype.visitTimestamp = le(((t, e, n) => {
            switch (t.type.unit) {
                case a.SECOND:
                    return me(t, e, n);
                case a.MILLISECOND:
                    return be(t, e, n);
                case a.MICROSECOND:
                    return ve(t, e, n);
                case a.NANOSECOND:
                    return ge(t, e, n)
            }
        })), se.prototype.visitTimestampSecond = le(me), se.prototype.visitTimestampMillisecond = le(be), se.prototype.visitTimestampMicrosecond = le(ve), se.prototype.visitTimestampNanosecond = le(ge), se.prototype.visitTime = le(((t, e, n) => {
            switch (t.type.unit) {
                case a.SECOND:
                    return we(t, e, n);
                case a.MILLISECOND:
                    return _e(t, e, n);
                case a.MICROSECOND:
                    return Se(t, e, n);
                case a.NANOSECOND:
                    return xe(t, e, n)
            }
        })), se.prototype.visitTimeSecond = le(we), se.prototype.visitTimeMillisecond = le(_e), se.prototype.visitTimeMicrosecond = le(Se), se.prototype.visitTimeNanosecond = le(xe), se.prototype.visitDecimal = le(((t, e, n) => {
            let {
                values: r,
                stride: i
            } = t;
            r.set(n.subarray(0, i), i * e)
        })), se.prototype.visitList = le(((t, e, n) => {
            const r = t.children[0],
                i = t.valueOffsets,
                a = Oe.getVisitFn(r);
            if (Array.isArray(n))
                for (let o = -1, s = i[e], l = i[e + 1]; s < l;) a(r, s++, n[++o]);
            else
                for (let o = -1, s = i[e], l = i[e + 1]; s < l;) a(r, s++, n.get(++o))
        })), se.prototype.visitStruct = le(((t, e, n) => {
            const r = t.type.children.map((t => Oe.getVisitFn(t.type))),
                i = n instanceof Map ? (a = e, o = n, (t, e, n, r) => e && t(e, a, o.get(n.name))) : n instanceof $n ? ((t, e) => (n, r, i, a) => r && n(r, t, e.get(a)))(e, n) : Array.isArray(n) ? ((t, e) => (n, r, i, a) => r && n(r, t, e[a]))(e, n) : ((t, e) => (n, r, i, a) => r && n(r, t, e[i.name]))(e, n);
            var a, o;
            t.type.children.forEach(((e, n) => i(r[n], t.children[n], e, n)))
        })), se.prototype.visitUnion = le(((t, n, r) => {
            t.type.mode === e.Dense ? Te(t, n, r) : ke(t, n, r)
        })), se.prototype.visitDenseUnion = le(Te), se.prototype.visitSparseUnion = le(ke), se.prototype.visitDictionary = le(((t, e, n) => {
            var r;
            null === (r = t.dictionary) || void 0 === r || r.set(t.values[e], n)
        })), se.prototype.visitInterval = le(((t, e, n) => {
            t.type.unit === o.DAY_TIME ? Ie(t, e, n) : Ee(t, e, n)
        })), se.prototype.visitIntervalDayTime = le(Ie), se.prototype.visitIntervalYearMonth = le(Ee), se.prototype.visitFixedSizeList = le(((t, e, n) => {
            const {
                stride: r
            } = t, i = t.children[0], a = Oe.getVisitFn(i);
            if (Array.isArray(n))
                for (let o = -1, s = e * r; ++o < r;) a(i, s + o, n[o]);
            else
                for (let o = -1, s = e * r; ++o < r;) a(i, s + o, n.get(o))
        })), se.prototype.visitMap = le(((t, e, n) => {
            const r = t.children[0],
                {
                    valueOffsets: i
                } = t,
                a = Oe.getVisitFn(r);
            let {
                [e]: o, [e + 1]: s
            } = i;
            const l = n instanceof Map ? n.entries() : Object.entries(n);
            for (const u of l)
                if (a(r, o, u), ++o >= s) break
        }));
        const Oe = new se,
            Ae = Symbol.for("parent"),
            Ce = Symbol.for("rowIndex");
        class Ne {
            constructor(t, e) {
                return this[Ae] = t, this[Ce] = e, new Proxy(this, new Me)
            }
            toArray() {
                return Object.values(this.toJSON())
            }
            toJSON() {
                const t = this[Ce],
                    e = this[Ae],
                    n = e.type.children,
                    r = {};
                for (let i = -1, a = n.length; ++i < a;) r[n[i].name] = en.visit(e.children[i], t);
                return r
            }
            toString() {
                return "{".concat([...this].map((t => {
                    let [e, n] = t;
                    return "".concat(P(e), ": ").concat(P(n))
                })).join(", "), "}")
            } [Symbol.for("nodejs.util.inspect.custom")]() {
                return this.toString()
            } [Symbol.iterator]() {
                return new De(this[Ae], this[Ce])
            }
        }
        class De {
            constructor(t, e) {
                this.childIndex = 0, this.children = t.children, this.rowIndex = e, this.childFields = t.type.children, this.numChildren = this.childFields.length
            } [Symbol.iterator]() {
                return this
            }
            next() {
                const t = this.childIndex;
                return t < this.numChildren ? (this.childIndex = t + 1, {
                    done: !1,
                    value: [this.childFields[t].name, en.visit(this.children[t], this.rowIndex)]
                }) : {
                    done: !0,
                    value: null
                }
            }
        }
        Object.defineProperties(Ne.prototype, {
            [Symbol.toStringTag]: {
                enumerable: !1,
                configurable: !1,
                value: "Row"
            },
            [Ae]: {
                writable: !0,
                enumerable: !1,
                configurable: !1,
                value: null
            },
            [Ce]: {
                writable: !0,
                enumerable: !1,
                configurable: !1,
                value: -1
            }
        });
        class Me {
            isExtensible() {
                return !1
            }
            deleteProperty() {
                return !1
            }
            preventExtensions() {
                return !0
            }
            ownKeys(t) {
                return t[Ae].type.children.map((t => t.name))
            }
            has(t, e) {
                return -1 !== t[Ae].type.children.findIndex((t => t.name === e))
            }
            getOwnPropertyDescriptor(t, e) {
                if (-1 !== t[Ae].type.children.findIndex((t => t.name === e))) return {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }
            }
            get(t, e) {
                if (Reflect.has(t, e)) return t[e];
                const n = t[Ae].type.children.findIndex((t => t.name === e));
                if (-1 !== n) {
                    const r = en.visit(t[Ae].children[n], t[Ce]);
                    return Reflect.set(t, e, r), r
                }
            }
            set(t, e, n) {
                const r = t[Ae].type.children.findIndex((t => t.name === e));
                return -1 !== r ? (Oe.visit(t[Ae].children[r], t[Ce], n), Reflect.set(t, e, n)) : !(!Reflect.has(t, e) && "symbol" !== typeof e) && Reflect.set(t, e, n)
            }
        }
        class Be extends ee {}

        function Pe(t) {
            return (e, n) => e.getValid(n) ? t(e, n) : null
        }
        const Fe = (t, e) => 4294967296 * t[e + 1] + (t[e] >>> 0),
            Le = t => new Date(t),
            Re = (t, e, n) => {
                if (n + 1 >= e.length) return null;
                const r = e[n],
                    i = e[n + 1];
                return t.subarray(r, i)
            },
            Ue = (t, e) => {
                let {
                    values: n
                } = t;
                return ((t, e) => Le(((t, e) => 864e5 * t[e])(t, e)))(n, e)
            },
            ze = (t, e) => {
                let {
                    values: n
                } = t;
                return ((t, e) => Le(Fe(t, e)))(n, 2 * e)
            },
            je = (t, e) => {
                let {
                    stride: n,
                    values: r
                } = t;
                return r[n * e]
            },
            Ve = (t, e) => {
                let {
                    values: n
                } = t;
                return n[e]
            },
            We = (t, e) => {
                let {
                    values: n
                } = t;
                return 1e3 * Fe(n, 2 * e)
            },
            Ye = (t, e) => {
                let {
                    values: n
                } = t;
                return Fe(n, 2 * e)
            },
            He = (t, e) => {
                let {
                    values: n
                } = t;
                return ((t, e) => t[e + 1] / 1e3 * 4294967296 + (t[e] >>> 0) / 1e3)(n, 2 * e)
            },
            $e = (t, e) => {
                let {
                    values: n
                } = t;
                return ((t, e) => t[e + 1] / 1e6 * 4294967296 + (t[e] >>> 0) / 1e6)(n, 2 * e)
            },
            Ke = (t, e) => {
                let {
                    values: n
                } = t;
                return n[e]
            },
            Qe = (t, e) => {
                let {
                    values: n
                } = t;
                return n[e]
            },
            qe = (t, e) => {
                let {
                    values: n
                } = t;
                return n[e]
            },
            Ge = (t, e) => {
                let {
                    values: n
                } = t;
                return n[e]
            },
            Xe = (t, e) => {
                const n = t.type.typeIdToChildIndex[t.typeIds[e]],
                    r = t.children[n];
                return en.visit(r, t.valueOffsets[e])
            },
            Je = (t, e) => {
                const n = t.type.typeIdToChildIndex[t.typeIds[e]],
                    r = t.children[n];
                return en.visit(r, e)
            },
            Ze = (t, e) => {
                let {
                    values: n
                } = t;
                return n.subarray(2 * e, 2 * (e + 1))
            },
            tn = (t, e) => {
                let {
                    values: n
                } = t;
                const r = n[e],
                    i = new Int32Array(2);
                return i[0] = Math.trunc(r / 12), i[1] = Math.trunc(r % 12), i
            };
        Be.prototype.visitNull = Pe(((t, e) => null)), Be.prototype.visitBool = Pe(((t, e) => {
            let {
                offset: n,
                values: r
            } = t;
            const i = n + e;
            return 0 !== (r[i >> 3] & 1 << i % 8)
        })), Be.prototype.visitInt = Pe(((t, e) => {
            let {
                values: n
            } = t;
            return n[e]
        })), Be.prototype.visitInt8 = Pe(je), Be.prototype.visitInt16 = Pe(je), Be.prototype.visitInt32 = Pe(je), Be.prototype.visitInt64 = Pe(Ve), Be.prototype.visitUint8 = Pe(je), Be.prototype.visitUint16 = Pe(je), Be.prototype.visitUint32 = Pe(je), Be.prototype.visitUint64 = Pe(Ve), Be.prototype.visitFloat = Pe(((t, e) => {
            let {
                type: n,
                values: i
            } = t;
            return n.precision !== r.HALF ? i[e] : oe(i[e])
        })), Be.prototype.visitFloat16 = Pe(((t, e) => {
            let {
                stride: n,
                values: r
            } = t;
            return oe(r[n * e])
        })), Be.prototype.visitFloat32 = Pe(je), Be.prototype.visitFloat64 = Pe(je), Be.prototype.visitUtf8 = Pe(((t, e) => {
            let {
                values: n,
                valueOffsets: r
            } = t;
            const i = Re(n, r, e);
            return null !== i ? W(i) : null
        })), Be.prototype.visitBinary = Pe(((t, e) => {
            let {
                values: n,
                valueOffsets: r
            } = t;
            return Re(n, r, e)
        })), Be.prototype.visitFixedSizeBinary = Pe(((t, e) => {
            let {
                stride: n,
                values: r
            } = t;
            return r.subarray(n * e, n * (e + 1))
        })), Be.prototype.visitDate = Pe(((t, e) => t.type.unit === i.DAY ? Ue(t, e) : ze(t, e))), Be.prototype.visitDateDay = Pe(Ue), Be.prototype.visitDateMillisecond = Pe(ze), Be.prototype.visitTimestamp = Pe(((t, e) => {
            switch (t.type.unit) {
                case a.SECOND:
                    return We(t, e);
                case a.MILLISECOND:
                    return Ye(t, e);
                case a.MICROSECOND:
                    return He(t, e);
                case a.NANOSECOND:
                    return $e(t, e)
            }
        })), Be.prototype.visitTimestampSecond = Pe(We), Be.prototype.visitTimestampMillisecond = Pe(Ye), Be.prototype.visitTimestampMicrosecond = Pe(He), Be.prototype.visitTimestampNanosecond = Pe($e), Be.prototype.visitTime = Pe(((t, e) => {
            switch (t.type.unit) {
                case a.SECOND:
                    return Ke(t, e);
                case a.MILLISECOND:
                    return Qe(t, e);
                case a.MICROSECOND:
                    return qe(t, e);
                case a.NANOSECOND:
                    return Ge(t, e)
            }
        })), Be.prototype.visitTimeSecond = Pe(Ke), Be.prototype.visitTimeMillisecond = Pe(Qe), Be.prototype.visitTimeMicrosecond = Pe(qe), Be.prototype.visitTimeNanosecond = Pe(Ge), Be.prototype.visitDecimal = Pe(((t, e) => {
            let {
                values: n,
                stride: r
            } = t;
            return dt.decimal(n.subarray(r * e, r * (e + 1)))
        })), Be.prototype.visitList = Pe(((t, e) => {
            const {
                valueOffsets: n,
                stride: r,
                children: i
            } = t, {
                [e * r]: a,
                [e * r + 1]: o
            } = n, s = i[0].slice(a, o - a);
            return new $n([s])
        })), Be.prototype.visitStruct = Pe(((t, e) => new Ne(t, e))), Be.prototype.visitUnion = Pe(((t, n) => t.type.mode === e.Dense ? Xe(t, n) : Je(t, n))), Be.prototype.visitDenseUnion = Pe(Xe), Be.prototype.visitSparseUnion = Pe(Je), Be.prototype.visitDictionary = Pe(((t, e) => {
            var n;
            return null === (n = t.dictionary) || void 0 === n ? void 0 : n.get(t.values[e])
        })), Be.prototype.visitInterval = Pe(((t, e) => t.type.unit === o.DAY_TIME ? Ze(t, e) : tn(t, e))), Be.prototype.visitIntervalDayTime = Pe(Ze), Be.prototype.visitIntervalYearMonth = Pe(tn), Be.prototype.visitFixedSizeList = Pe(((t, e) => {
            const {
                stride: n,
                children: r
            } = t, i = r[0].slice(e * n, n);
            return new $n([i])
        })), Be.prototype.visitMap = Pe(((t, e) => {
            const {
                valueOffsets: n,
                children: r
            } = t, {
                [e]: i,
                [e + 1]: a
            } = n, o = r[0];
            return new an(o.slice(i, a - i))
        }));
        const en = new Be,
            nn = Symbol.for("keys"),
            rn = Symbol.for("vals");
        class an {
            constructor(t) {
                return this[nn] = new $n([t.children[0]]).memoize(), this[rn] = t.children[1], new Proxy(this, new sn)
            } [Symbol.iterator]() {
                return new on(this[nn], this[rn])
            }
            get size() {
                return this[nn].length
            }
            toArray() {
                return Object.values(this.toJSON())
            }
            toJSON() {
                const t = this[nn],
                    e = this[rn],
                    n = {};
                for (let r = -1, i = t.length; ++r < i;) n[t.get(r)] = en.visit(e, r);
                return n
            }
            toString() {
                return "{".concat([...this].map((t => {
                    let [e, n] = t;
                    return "".concat(P(e), ": ").concat(P(n))
                })).join(", "), "}")
            } [Symbol.for("nodejs.util.inspect.custom")]() {
                return this.toString()
            }
        }
        class on {
            constructor(t, e) {
                this.keys = t, this.vals = e, this.keyIndex = 0, this.numKeys = t.length
            } [Symbol.iterator]() {
                return this
            }
            next() {
                const t = this.keyIndex;
                return t === this.numKeys ? {
                    done: !0,
                    value: null
                } : (this.keyIndex++, {
                    done: !1,
                    value: [this.keys.get(t), en.visit(this.vals, t)]
                })
            }
        }
        class sn {
            isExtensible() {
                return !1
            }
            deleteProperty() {
                return !1
            }
            preventExtensions() {
                return !0
            }
            ownKeys(t) {
                return t[nn].toArray().map(String)
            }
            has(t, e) {
                return t[nn].includes(e)
            }
            getOwnPropertyDescriptor(t, e) {
                if (-1 !== t[nn].indexOf(e)) return {
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }
            }
            get(t, e) {
                if (Reflect.has(t, e)) return t[e];
                const n = t[nn].indexOf(e);
                if (-1 !== n) {
                    const r = en.visit(Reflect.get(t, rn), n);
                    return Reflect.set(t, e, r), r
                }
            }
            set(t, e, n) {
                const r = t[nn].indexOf(e);
                return -1 !== r ? (Oe.visit(Reflect.get(t, rn), r, n), Reflect.set(t, e, n)) : !!Reflect.has(t, e) && Reflect.set(t, e, n)
            }
        }
        let ln;

        function un(t, e, n, r) {
            const {
                length: i = 0
            } = t;
            let a = "number" !== typeof e ? 0 : e,
                o = "number" !== typeof n ? i : n;
            return a < 0 && (a = (a % i + i) % i), o < 0 && (o = (o % i + i) % i), o < a && (ln = a, a = o, o = ln), o > i && (o = i), r ? r(t, a, o) : [a, o]
        }
        Object.defineProperties(an.prototype, {
            [Symbol.toStringTag]: {
                enumerable: !1,
                configurable: !1,
                value: "Row"
            },
            [nn]: {
                writable: !0,
                enumerable: !1,
                configurable: !1,
                value: null
            },
            [rn]: {
                writable: !0,
                enumerable: !1,
                configurable: !1,
                value: null
            }
        });
        const cn = t => t !== t;

        function dn(t) {
            if ("object" !== typeof t || null === t) return cn(t) ? cn : e => e === t;
            if (t instanceof Date) {
                const e = t.valueOf();
                return t => t instanceof Date && t.valueOf() === e
            }
            return ArrayBuffer.isView(t) ? e => !!e && function(t, e) {
                let n = 0;
                const r = t.length;
                if (r !== e.length) return !1;
                if (r > 0)
                    do {
                        if (t[n] !== e[n]) return !1
                    } while (++n < r);
                return !0
            }(t, e) : t instanceof Map ? function(t) {
                let e = -1;
                const n = [];
                for (const r of t.values()) n[++e] = dn(r);
                return fn(n)
            }(t) : Array.isArray(t) ? function(t) {
                const e = [];
                for (let n = -1, r = t.length; ++n < r;) e[n] = dn(t[n]);
                return fn(e)
            }(t) : t instanceof $n ? function(t) {
                const e = [];
                for (let n = -1, r = t.length; ++n < r;) e[n] = dn(t.get(n));
                return fn(e)
            }(t) : function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = Object.keys(t);
                if (!e && 0 === n.length) return () => !1;
                const r = [];
                for (let i = -1, a = n.length; ++i < a;) r[i] = dn(t[n[i]]);
                return fn(r, n)
            }(t, !0)
        }

        function fn(t, e) {
            return n => {
                if (!n || "object" !== typeof n) return !1;
                switch (n.constructor) {
                    case Array:
                        return function(t, e) {
                            const n = t.length;
                            if (e.length !== n) return !1;
                            for (let r = -1; ++r < n;)
                                if (!t[r](e[r])) return !1;
                            return !0
                        }(t, n);
                    case Map:
                        return hn(t, n, n.keys());
                    case an:
                    case Ne:
                    case Object:
                    case void 0:
                        return hn(t, n, e || Object.keys(n))
                }
                return n instanceof $n && function(t, e) {
                    const n = t.length;
                    if (e.length !== n) return !1;
                    for (let r = -1; ++r < n;)
                        if (!t[r](e.get(r))) return !1;
                    return !0
                }(t, n)
            }
        }

        function hn(t, e, n) {
            const r = n[Symbol.iterator](),
                i = e instanceof Map ? e.keys() : Object.keys(e)[Symbol.iterator](),
                a = e instanceof Map ? e.values() : Object.values(e)[Symbol.iterator]();
            let o = 0;
            const s = t.length;
            let l = a.next(),
                u = r.next(),
                c = i.next();
            for (; o < s && !u.done && !c.done && !l.done && (u.value === c.value && t[o](l.value)); ++o, u = r.next(), c = i.next(), l = a.next());
            return !!(o === s && u.done && c.done && l.done) || (r.return && r.return(), i.return && i.return(), a.return && a.return(), !1)
        }
        class pn {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                this.numChunks = t, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0)
            }
            next() {
                for (; this.chunkIndex < this.numChunks;) {
                    const t = this.chunkIterator.next();
                    if (!t.done) return t;
                    ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex))
                }
                return {
                    done: !0,
                    value: null
                }
            } [Symbol.iterator]() {
                return this
            }
        }

        function yn(t) {
            return t.reduce(((t, e) => t + e.nullCount), 0)
        }

        function mn(t) {
            return t.reduce(((t, e, n) => (t[n + 1] = t[n] + e.length, t)), new Uint32Array(t.length + 1))
        }

        function bn(t, e, n, r) {
            const i = [];
            for (let a = -1, o = t.length; ++a < o;) {
                const o = t[a],
                    s = e[a],
                    {
                        length: l
                    } = o;
                if (s >= r) break;
                if (n >= s + l) continue;
                if (s >= n && s + l <= r) {
                    i.push(o);
                    continue
                }
                const u = Math.max(0, n - s),
                    c = Math.min(r - s, l);
                i.push(o.slice(u, c - u))
            }
            return 0 === i.length && i.push(t[0].slice(0, 0)), i
        }

        function vn(t, e, n, r) {
            let i = 0,
                a = 0,
                o = e.length - 1;
            do {
                if (i >= o - 1) return n < e[o] ? r(t, i, n - e[i]) : null;
                a = i + Math.trunc(.5 * (o - i)), n < e[a] ? o = a : i = a
            } while (i < o)
        }

        function gn(t, e) {
            return t.getValid(e)
        }

        function wn(t) {
            function e(e, n, r) {
                return t(e[n], r)
            }
            return function(t) {
                return vn(this.data, this._offsets, t, e)
            }
        }

        function _n(t) {
            let e;

            function n(n, r, i) {
                return t(n[r], i, e)
            }
            return function(t, r) {
                const i = this.data;
                e = r;
                const a = vn(i, this._offsets, t, n);
                return e = void 0, a
            }
        }

        function Sn(t) {
            let e;

            function n(n, r, i) {
                let a = i,
                    o = 0,
                    s = 0;
                for (let l = r - 1, u = n.length; ++l < u;) {
                    const r = n[l];
                    if (~(o = t(r, e, a))) return s + o;
                    a = 0, s += r.length
                }
                return -1
            }
            return function(t, r) {
                e = t;
                const i = this.data,
                    a = "number" !== typeof r ? n(i, 0, 0) : vn(i, this._offsets, r, n);
                return e = void 0, a
            }
        }

        function xn(t, e, n, r) {
            return 0 !== (n & 1 << r)
        }

        function Tn(t, e, n, r) {
            return (n & 1 << r) >> r
        }

        function kn(t, e, n) {
            const r = n.byteLength + 7 & -8;
            if (t > 0 || n.byteLength < r) {
                const i = new Uint8Array(r);
                return i.set(t % 8 === 0 ? n.subarray(t >> 3) : In(new En(n, t, e, null, xn)).subarray(0, r)), i
            }
            return n
        }

        function In(t) {
            const e = [];
            let n = 0,
                r = 0,
                i = 0;
            for (const o of t) o && (i |= 1 << r), 8 === ++r && (e[n++] = i, i = r = 0);
            (0 === n || r > 0) && (e[n++] = i);
            const a = new Uint8Array(e.length + 7 & -8);
            return a.set(e), a
        }
        class En {
            constructor(t, e, n, r, i) {
                this.bytes = t, this.length = n, this.context = r, this.get = i, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0
            }
            next() {
                return this.index < this.length ? (8 === this.bit && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), {
                    value: this.get(this.context, this.index++, this.byte, this.bit++)
                }) : {
                    done: !0,
                    value: null
                }
            } [Symbol.iterator]() {
                return this
            }
        }

        function On(t, e, n) {
            if (n - e <= 0) return 0;
            if (n - e < 8) {
                let r = 0;
                for (const i of new En(t, e, n - e, t, Tn)) r += i;
                return r
            }
            const r = n >> 3 << 3,
                i = e + (e % 8 === 0 ? 0 : 8 - e % 8);
            return On(t, e, i) + On(t, r, n) + function(t, e, n) {
                let r = 0,
                    i = Math.trunc(e);
                const a = new DataView(t.buffer, t.byteOffset, t.byteLength),
                    o = void 0 === n ? t.byteLength : i + n;
                for (; o - i >= 4;) r += An(a.getUint32(i)), i += 4;
                for (; o - i >= 2;) r += An(a.getUint16(i)), i += 2;
                for (; o - i >= 1;) r += An(a.getUint8(i)), i += 1;
                return r
            }(t, i >> 3, r - i >> 3)
        }

        function An(t) {
            let e = Math.trunc(t);
            return e -= e >>> 1 & 1431655765, e = (858993459 & e) + (e >>> 2 & 858993459), 16843009 * (e + (e >>> 4) & 252645135) >>> 24
        }
        class Cn extends ee {}

        function Nn(t, e, n) {
            if (void 0 === e) return -1;
            if (null === e) return function(t, e) {
                const {
                    nullBitmap: n
                } = t;
                if (!n || t.nullCount <= 0) return -1;
                let r = 0;
                for (const i of new En(n, t.offset + (e || 0), t.length, n, xn)) {
                    if (!i) return r;
                    ++r
                }
                return -1
            }(t, n);
            const r = en.getVisitFn(t),
                i = dn(e);
            for (let a = (n || 0) - 1, o = t.length; ++a < o;)
                if (i(r(t, a))) return a;
            return -1
        }

        function Dn(t, e, n) {
            const r = en.getVisitFn(t),
                i = dn(e);
            for (let a = (n || 0) - 1, o = t.length; ++a < o;)
                if (i(r(t, a))) return a;
            return -1
        }
        Cn.prototype.visitNull = function(t, e) {
            return null === e && t.length > 0 ? 0 : -1
        }, Cn.prototype.visitBool = Nn, Cn.prototype.visitInt = Nn, Cn.prototype.visitInt8 = Nn, Cn.prototype.visitInt16 = Nn, Cn.prototype.visitInt32 = Nn, Cn.prototype.visitInt64 = Nn, Cn.prototype.visitUint8 = Nn, Cn.prototype.visitUint16 = Nn, Cn.prototype.visitUint32 = Nn, Cn.prototype.visitUint64 = Nn, Cn.prototype.visitFloat = Nn, Cn.prototype.visitFloat16 = Nn, Cn.prototype.visitFloat32 = Nn, Cn.prototype.visitFloat64 = Nn, Cn.prototype.visitUtf8 = Nn, Cn.prototype.visitBinary = Nn, Cn.prototype.visitFixedSizeBinary = Nn, Cn.prototype.visitDate = Nn, Cn.prototype.visitDateDay = Nn, Cn.prototype.visitDateMillisecond = Nn, Cn.prototype.visitTimestamp = Nn, Cn.prototype.visitTimestampSecond = Nn, Cn.prototype.visitTimestampMillisecond = Nn, Cn.prototype.visitTimestampMicrosecond = Nn, Cn.prototype.visitTimestampNanosecond = Nn, Cn.prototype.visitTime = Nn, Cn.prototype.visitTimeSecond = Nn, Cn.prototype.visitTimeMillisecond = Nn, Cn.prototype.visitTimeMicrosecond = Nn, Cn.prototype.visitTimeNanosecond = Nn, Cn.prototype.visitDecimal = Nn, Cn.prototype.visitList = Nn, Cn.prototype.visitStruct = Nn, Cn.prototype.visitUnion = Nn, Cn.prototype.visitDenseUnion = Dn, Cn.prototype.visitSparseUnion = Dn, Cn.prototype.visitDictionary = Nn, Cn.prototype.visitInterval = Nn, Cn.prototype.visitIntervalDayTime = Nn, Cn.prototype.visitIntervalYearMonth = Nn, Cn.prototype.visitFixedSizeList = Nn, Cn.prototype.visitMap = Nn;
        const Mn = new Cn;
        class Bn extends ee {}

        function Pn(t) {
            const {
                type: e
            } = t;
            if (0 === t.nullCount && 1 === t.stride && (e.typeId === l.Timestamp || e instanceof Bt && 64 !== e.bitWidth || e instanceof Vt && 64 !== e.bitWidth || e instanceof Ft && e.precision !== r.HALF)) return new pn(t.data.length, (e => {
                const n = t.data[e];
                return n.values.subarray(0, n.length)[Symbol.iterator]()
            }));
            let n = 0;
            return new pn(t.data.length, (e => {
                const r = t.data[e].length,
                    i = t.slice(n, n + r);
                return n += r, new Fn(i)
            }))
        }
        class Fn {
            constructor(t) {
                this.vector = t, this.index = 0
            }
            next() {
                return this.index < this.vector.length ? {
                    value: this.vector.get(this.index++)
                } : {
                    done: !0,
                    value: null
                }
            } [Symbol.iterator]() {
                return this
            }
        }
        Bn.prototype.visitNull = Pn, Bn.prototype.visitBool = Pn, Bn.prototype.visitInt = Pn, Bn.prototype.visitInt8 = Pn, Bn.prototype.visitInt16 = Pn, Bn.prototype.visitInt32 = Pn, Bn.prototype.visitInt64 = Pn, Bn.prototype.visitUint8 = Pn, Bn.prototype.visitUint16 = Pn, Bn.prototype.visitUint32 = Pn, Bn.prototype.visitUint64 = Pn, Bn.prototype.visitFloat = Pn, Bn.prototype.visitFloat16 = Pn, Bn.prototype.visitFloat32 = Pn, Bn.prototype.visitFloat64 = Pn, Bn.prototype.visitUtf8 = Pn, Bn.prototype.visitBinary = Pn, Bn.prototype.visitFixedSizeBinary = Pn, Bn.prototype.visitDate = Pn, Bn.prototype.visitDateDay = Pn, Bn.prototype.visitDateMillisecond = Pn, Bn.prototype.visitTimestamp = Pn, Bn.prototype.visitTimestampSecond = Pn, Bn.prototype.visitTimestampMillisecond = Pn, Bn.prototype.visitTimestampMicrosecond = Pn, Bn.prototype.visitTimestampNanosecond = Pn, Bn.prototype.visitTime = Pn, Bn.prototype.visitTimeSecond = Pn, Bn.prototype.visitTimeMillisecond = Pn, Bn.prototype.visitTimeMicrosecond = Pn, Bn.prototype.visitTimeNanosecond = Pn, Bn.prototype.visitDecimal = Pn, Bn.prototype.visitList = Pn, Bn.prototype.visitStruct = Pn, Bn.prototype.visitUnion = Pn, Bn.prototype.visitDenseUnion = Pn, Bn.prototype.visitSparseUnion = Pn, Bn.prototype.visitDictionary = Pn, Bn.prototype.visitInterval = Pn, Bn.prototype.visitIntervalDayTime = Pn, Bn.prototype.visitIntervalYearMonth = Pn, Bn.prototype.visitFixedSizeList = Pn, Bn.prototype.visitMap = Pn;
        const Ln = new Bn,
            Rn = (t, e) => t + e;
        class Un extends ee {
            visitNull(t, e) {
                return 0
            }
            visitInt(t, e) {
                return t.type.bitWidth / 8
            }
            visitFloat(t, e) {
                return t.type.ArrayType.BYTES_PER_ELEMENT
            }
            visitBool(t, e) {
                return 1 / 8
            }
            visitDecimal(t, e) {
                return t.type.bitWidth / 8
            }
            visitDate(t, e) {
                return 4 * (t.type.unit + 1)
            }
            visitTime(t, e) {
                return t.type.bitWidth / 8
            }
            visitTimestamp(t, e) {
                return t.type.unit === a.SECOND ? 4 : 8
            }
            visitInterval(t, e) {
                return 4 * (t.type.unit + 1)
            }
            visitStruct(t, e) {
                return t.children.reduce(((t, n) => t + Vn.visit(n, e)), 0)
            }
            visitFixedSizeBinary(t, e) {
                return t.type.byteWidth
            }
            visitMap(t, e) {
                return 8 + t.children.reduce(((t, n) => t + Vn.visit(n, e)), 0)
            }
            visitDictionary(t, e) {
                var n;
                return t.type.indices.bitWidth / 8 + ((null === (n = t.dictionary) || void 0 === n ? void 0 : n.getByteLength(t.values[e])) || 0)
            }
        }
        const zn = (t, e) => {
                let {
                    type: n,
                    children: r,
                    typeIds: i,
                    valueOffsets: a
                } = t;
                const o = n.typeIdToChildIndex[i[e]];
                return 8 + Vn.visit(r[o], a[e])
            },
            jn = (t, e) => {
                let {
                    children: n
                } = t;
                return 4 + Vn.visitMany(n, n.map((() => e))).reduce(Rn, 0)
            };
        Un.prototype.visitUtf8 = (t, e) => {
            let {
                valueOffsets: n
            } = t;
            return n[e + 1] - n[e] + 8
        }, Un.prototype.visitBinary = (t, e) => {
            let {
                valueOffsets: n
            } = t;
            return n[e + 1] - n[e] + 8
        }, Un.prototype.visitList = (t, e) => {
            let {
                valueOffsets: n,
                stride: r,
                children: i
            } = t;
            const a = i[0],
                {
                    [e * r]: o
                } = n,
                {
                    [e * r + 1]: s
                } = n,
                l = Vn.getVisitFn(a.type),
                u = a.slice(o, s - o);
            let c = 8;
            for (let d = -1, f = s - o; ++d < f;) c += l(u, d);
            return c
        }, Un.prototype.visitFixedSizeList = (t, e) => {
            let {
                stride: n,
                children: r
            } = t;
            const i = r[0],
                a = i.slice(e * n, n),
                o = Vn.getVisitFn(i.type);
            let s = 0;
            for (let l = -1, u = a.length; ++l < u;) s += o(a, l);
            return s
        }, Un.prototype.visitUnion = (t, n) => t.type.mode === e.Dense ? zn(t, n) : jn(t, n), Un.prototype.visitDenseUnion = zn, Un.prototype.visitSparseUnion = jn;
        const Vn = new Un;
        var Wn;
        const Yn = {},
            Hn = {};
        class $n {
            constructor(t) {
                var e, n, r;
                const i = t[0] instanceof $n ? t.flatMap((t => t.data)) : t;
                if (0 === i.length || i.some((t => !(t instanceof Qn)))) throw new TypeError("Vector constructor expects an Array of Data instances.");
                const a = null === (e = i[0]) || void 0 === e ? void 0 : e.type;
                switch (i.length) {
                    case 0:
                        this._offsets = [0];
                        break;
                    case 1: {
                        const {
                            get: t,
                            set: e,
                            indexOf: n,
                            byteLength: r
                        } = Yn[a.typeId], o = i[0];
                        this.isValid = t => gn(o, t), this.get = e => t(o, e), this.set = (t, n) => e(o, t, n), this.indexOf = t => n(o, t), this.getByteLength = t => r(o, t), this._offsets = [0, o.length];
                        break
                    }
                    default:
                        Object.setPrototypeOf(this, Hn[a.typeId]), this._offsets = mn(i)
                }
                this.data = i, this.type = a, this.stride = te(a), this.numChildren = null !== (r = null === (n = a.children) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0, this.length = this._offsets[this._offsets.length - 1]
            }
            get byteLength() {
                return -1 === this._byteLength && (this._byteLength = this.data.reduce(((t, e) => t + e.byteLength), 0)), this._byteLength
            }
            get nullCount() {
                return -1 === this._nullCount && (this._nullCount = yn(this.data)), this._nullCount
            }
            get ArrayType() {
                return this.type.ArrayType
            }
            get[Symbol.toStringTag]() {
                return "".concat(this.VectorName, "<").concat(this.type[Symbol.toStringTag], ">")
            }
            get VectorName() {
                return "".concat(l[this.type.typeId], "Vector")
            }
            isValid(t) {
                return !1
            }
            get(t) {
                return null
            }
            set(t, e) {}
            indexOf(t, e) {
                return -1
            }
            includes(t, e) {
                return this.indexOf(t, e) > 0
            }
            getByteLength(t) {
                return 0
            } [Symbol.iterator]() {
                return Ln.visit(this)
            }
            concat() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return new $n(this.data.concat(e.flatMap((t => t.data)).flat(Number.POSITIVE_INFINITY)))
            }
            slice(t, e) {
                return new $n(un(this, t, e, ((t, e, n) => {
                    let {
                        data: r,
                        _offsets: i
                    } = t;
                    return bn(r, i, e, n)
                })))
            }
            toJSON() {
                return [...this]
            }
            toArray() {
                const {
                    type: t,
                    data: e,
                    length: n,
                    stride: r,
                    ArrayType: i
                } = this;
                switch (t.typeId) {
                    case l.Int:
                    case l.Float:
                    case l.Decimal:
                    case l.Time:
                    case l.Timestamp:
                        switch (e.length) {
                            case 0:
                                return new i;
                            case 1:
                                return e[0].values.subarray(0, n * r);
                            default:
                                return e.reduce(((t, e) => {
                                    let {
                                        values: n,
                                        length: i
                                    } = e;
                                    return t.array.set(n.subarray(0, i * r), t.offset), t.offset += i * r, t
                                }), {
                                    array: new i(n * r),
                                    offset: 0
                                }).array
                        }
                }
                return [...this]
            }
            toString() {
                return "[".concat([...this].join(","), "]")
            }
            getChild(t) {
                var e;
                return this.getChildAt(null === (e = this.type.children) || void 0 === e ? void 0 : e.findIndex((e => e.name === t)))
            }
            getChildAt(t) {
                return t > -1 && t < this.numChildren ? new $n(this.data.map((e => {
                    let {
                        children: n
                    } = e;
                    return n[t]
                }))) : null
            }
            get isMemoized() {
                return !!Dt.isDictionary(this.type) && this.data[0].dictionary.isMemoized
            }
            memoize() {
                if (Dt.isDictionary(this.type)) {
                    const t = new Kn(this.data[0].dictionary),
                        e = this.data.map((e => {
                            const n = e.clone();
                            return n.dictionary = t, n
                        }));
                    return new $n(e)
                }
                return new Kn(this)
            }
            unmemoize() {
                if (Dt.isDictionary(this.type) && this.isMemoized) {
                    const t = this.data[0].dictionary.unmemoize(),
                        e = this.data.map((e => {
                            const n = e.clone();
                            return n.dictionary = t, n
                        }));
                    return new $n(e)
                }
                return this
            }
        }
        Wn = Symbol.toStringTag, $n[Wn] = (t => {
            t.type = Dt.prototype, t.data = [], t.length = 0, t.stride = 1, t.numChildren = 0, t._nullCount = -1, t._byteLength = -1, t._offsets = new Uint32Array([0]), t[Symbol.isConcatSpreadable] = !0;
            const e = Object.keys(l).map((t => l[t])).filter((t => "number" === typeof t && t !== l.NONE));
            for (const n of e) {
                const e = en.getVisitFnByTypeId(n),
                    r = Oe.getVisitFnByTypeId(n),
                    i = Mn.getVisitFnByTypeId(n),
                    a = Vn.getVisitFnByTypeId(n);
                Yn[n] = {
                    get: e,
                    set: r,
                    indexOf: i,
                    byteLength: a
                }, Hn[n] = Object.create(t, {
                    isValid: {
                        value: wn(gn)
                    },
                    get: {
                        value: wn(en.getVisitFnByTypeId(n))
                    },
                    set: {
                        value: _n(Oe.getVisitFnByTypeId(n))
                    },
                    indexOf: {
                        value: Sn(Mn.getVisitFnByTypeId(n))
                    },
                    getByteLength: {
                        value: wn(Vn.getVisitFnByTypeId(n))
                    }
                })
            }
            return "Vector"
        })($n.prototype);
        class Kn extends $n {
            constructor(t) {
                super(t.data);
                const e = this.get,
                    n = this.set,
                    r = this.slice,
                    i = new Array(this.length);
                Object.defineProperty(this, "get", {
                    value(t) {
                        const n = i[t];
                        if (void 0 !== n) return n;
                        const r = e.call(this, t);
                        return i[t] = r, r
                    }
                }), Object.defineProperty(this, "set", {
                    value(t, e) {
                        n.call(this, t, e), i[t] = e
                    }
                }), Object.defineProperty(this, "slice", {
                    value: (t, e) => new Kn(r.call(this, t, e))
                }), Object.defineProperty(this, "isMemoized", {
                    value: !0
                }), Object.defineProperty(this, "unmemoize", {
                    value: () => new $n(this.data)
                }), Object.defineProperty(this, "memoize", {
                    value: () => this
                })
            }
        }
        class Qn {
            constructor(t, e, n, r, i) {
                let a, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
                    s = arguments.length > 6 ? arguments[6] : void 0;
                this.type = t, this.children = o, this.dictionary = s, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1)), i instanceof Qn ? (this.stride = i.stride, this.values = i.values, this.typeIds = i.typeIds, this.nullBitmap = i.nullBitmap, this.valueOffsets = i.valueOffsets) : (this.stride = te(t), i && ((a = i[0]) && (this.valueOffsets = a), (a = i[1]) && (this.values = a), (a = i[2]) && (this.nullBitmap = a), (a = i[3]) && (this.typeIds = a))), this.nullable = 0 !== this._nullCount && this.nullBitmap && this.nullBitmap.byteLength > 0
            }
            get typeId() {
                return this.type.typeId
            }
            get ArrayType() {
                return this.type.ArrayType
            }
            get buffers() {
                return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds]
            }
            get byteLength() {
                let t = 0;
                const {
                    valueOffsets: e,
                    values: n,
                    nullBitmap: r,
                    typeIds: i
                } = this;
                return e && (t += e.byteLength), n && (t += n.byteLength), r && (t += r.byteLength), i && (t += i.byteLength), this.children.reduce(((t, e) => t + e.byteLength), t)
            }
            get nullCount() {
                let t, e = this._nullCount;
                return e <= -1 && (t = this.nullBitmap) && (this._nullCount = e = this.length - On(t, this.offset, this.offset + this.length)), e
            }
            getValid(t) {
                if (this.nullable && this.nullCount > 0) {
                    const e = this.offset + t;
                    return 0 !== (this.nullBitmap[e >> 3] & 1 << e % 8)
                }
                return !0
            }
            setValid(t, e) {
                if (!this.nullable) return e;
                if (!this.nullBitmap || this.nullBitmap.byteLength <= t >> 3) {
                    const {
                        nullBitmap: t
                    } = this._changeLengthAndBackfillNullBitmap(this.length);
                    Object.assign(this, {
                        nullBitmap: t,
                        _nullCount: 0
                    })
                }
                const {
                    nullBitmap: n,
                    offset: r
                } = this, i = r + t >> 3, a = (r + t) % 8, o = n[i] >> a & 1;
                return e ? 0 === o && (n[i] |= 1 << a, this._nullCount = this.nullCount + 1) : 1 === o && (n[i] &= ~(1 << a), this._nullCount = this.nullCount - 1), e
            }
            clone() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.offset,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.length,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this._nullCount,
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : this.children;
                return new Qn(t, e, n, r, i, a, this.dictionary)
            }
            slice(t, e) {
                const {
                    stride: n,
                    typeId: r,
                    children: i
                } = this, a = +(0 === this._nullCount) - 1, o = 16 === r ? n : 1, s = this._sliceBuffers(t, e, n, r);
                return this.clone(this.type, this.offset + t, e, a, s, 0 === i.length || this.valueOffsets ? i : this._sliceChildren(i, o * t, o * e))
            }
            _changeLengthAndBackfillNullBitmap(t) {
                if (this.typeId === l.Null) return this.clone(this.type, 0, t, 0);
                const {
                    length: e,
                    nullCount: n
                } = this, r = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
                r[e >> 3] = (1 << e - (-8 & e)) - 1, n > 0 && r.set(kn(this.offset, e, this.nullBitmap), 0);
                const i = this.buffers;
                return i[u.VALIDITY] = r, this.clone(this.type, 0, t, n + (t - e), i)
            }
            _sliceBuffers(t, e, n, r) {
                let i;
                const {
                    buffers: a
                } = this;
                return (i = a[u.TYPE]) && (a[u.TYPE] = i.subarray(t, t + e)), (i = a[u.OFFSET]) && (a[u.OFFSET] = i.subarray(t, t + e + 1)) || (i = a[u.DATA]) && (a[u.DATA] = 6 === r ? i : i.subarray(n * t, n * (t + e))), a
            }
            _sliceChildren(t, e, n) {
                return t.map((t => t.slice(e, n)))
            }
        }
        Qn.prototype.children = Object.freeze([]);
        class qn extends ee {
            visit(t) {
                return this.getVisitFn(t.type).call(this, t)
            }
            visitNull(t) {
                const {
                    type: e,
                    offset: n = 0,
                    length: r = 0
                } = t;
                return new Qn(e, n, r, 0)
            }
            visitBool(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length >> 3,
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitInt(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length,
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitFloat(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length,
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitUtf8(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.data), i = X(t.nullBitmap), a = G(t.valueOffsets), {
                    length: o = a.length - 1,
                    nullCount: s = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, o, s, [a, r, i])
            }
            visitBinary(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.data), i = X(t.nullBitmap), a = G(t.valueOffsets), {
                    length: o = a.length - 1,
                    nullCount: s = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, o, s, [a, r, i])
            }
            visitFixedSizeBinary(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length / te(e),
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitDate(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length / te(e),
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitTimestamp(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length / te(e),
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitTime(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length / te(e),
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitDecimal(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length / te(e),
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitList(t) {
                const {
                    type: e,
                    offset: n = 0,
                    child: r
                } = t, i = X(t.nullBitmap), a = G(t.valueOffsets), {
                    length: o = a.length - 1,
                    nullCount: s = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, o, s, [a, void 0, i], [r])
            }
            visitStruct(t) {
                const {
                    type: e,
                    offset: n = 0,
                    children: r = []
                } = t, i = X(t.nullBitmap), {
                    length: a = r.reduce(((t, e) => {
                        let {
                            length: n
                        } = e;
                        return Math.max(t, n)
                    }), 0),
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, void 0, i], r)
            }
            visitUnion(t) {
                const {
                    type: e,
                    offset: n = 0,
                    children: r = []
                } = t, i = X(t.nullBitmap), a = q(e.ArrayType, t.typeIds), {
                    length: o = a.length,
                    nullCount: s = (t.nullBitmap ? -1 : 0)
                } = t;
                if (Dt.isSparseUnion(e)) return new Qn(e, n, o, s, [void 0, void 0, i, a], r);
                const l = G(t.valueOffsets);
                return new Qn(e, n, o, s, [l, void 0, i, a], r)
            }
            visitDictionary(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.indices.ArrayType, t.data), {
                    dictionary: a = new $n([(new qn).visit({
                        type: e.dictionary
                    })])
                } = t, {
                    length: o = i.length,
                    nullCount: s = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, o, s, [void 0, i, r], [], a)
            }
            visitInterval(t) {
                const {
                    type: e,
                    offset: n = 0
                } = t, r = X(t.nullBitmap), i = q(e.ArrayType, t.data), {
                    length: a = i.length / te(e),
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, i, r])
            }
            visitFixedSizeList(t) {
                const {
                    type: e,
                    offset: n = 0,
                    child: r = (new qn).visit({
                        type: e.valueType
                    })
                } = t, i = X(t.nullBitmap), {
                    length: a = r.length / te(e),
                    nullCount: o = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, a, o, [void 0, void 0, i], [r])
            }
            visitMap(t) {
                const {
                    type: e,
                    offset: n = 0,
                    child: r = (new qn).visit({
                        type: e.childType
                    })
                } = t, i = X(t.nullBitmap), a = G(t.valueOffsets), {
                    length: o = a.length - 1,
                    nullCount: s = (t.nullBitmap ? -1 : 0)
                } = t;
                return new Qn(e, n, o, s, [a, void 0, i], [r])
            }
        }

        function Gn(t) {
            return (new qn).visit(t)
        }
        class Xn {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                this.fields = t || [], this.metadata = e || new Map, n || (n = tr(t)), this.dictionaries = n
            }
            get[Symbol.toStringTag]() {
                return "Schema"
            }
            get names() {
                return this.fields.map((t => t.name))
            }
            toString() {
                return "Schema<{ ".concat(this.fields.map(((t, e) => "".concat(e, ": ").concat(t))).join(", "), " }>")
            }
            select(t) {
                const e = new Set(t),
                    n = this.fields.filter((t => e.has(t.name)));
                return new Xn(n, this.metadata)
            }
            selectAt(t) {
                const e = t.map((t => this.fields[t])).filter(Boolean);
                return new Xn(e, this.metadata)
            }
            assign() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                const r = e[0] instanceof Xn ? e[0] : Array.isArray(e[0]) ? new Xn(e[0]) : new Xn(e),
                    i = [...this.fields],
                    a = Zn(Zn(new Map, this.metadata), r.metadata),
                    o = r.fields.filter((t => {
                        const e = i.findIndex((e => e.name === t.name));
                        return !~e || (i[e] = t.clone({
                            metadata: Zn(Zn(new Map, i[e].metadata), t.metadata)
                        })) && !1
                    })),
                    s = tr(o, new Map);
                return new Xn([...i, ...o], a, new Map([...this.dictionaries, ...s]))
            }
        }
        Xn.prototype.fields = null, Xn.prototype.metadata = null, Xn.prototype.dictionaries = null;
        class Jn {
            constructor(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0;
                this.name = t, this.type = e, this.nullable = n, this.metadata = r || new Map
            }
            static new() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let [r, i, a, o] = e;
                return e[0] && "object" === typeof e[0] && (({
                    name: r
                } = e[0]), void 0 === i && (i = e[0].type), void 0 === a && (a = e[0].nullable), void 0 === o && (o = e[0].metadata)), new Jn("".concat(r), i, a, o)
            }
            get typeId() {
                return this.type.typeId
            }
            get[Symbol.toStringTag]() {
                return "Field"
            }
            toString() {
                return "".concat(this.name, ": ").concat(this.type)
            }
            clone() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                let [r, i, a, o] = e;
                return e[0] && "object" === typeof e[0] ? ({
                    name: r = this.name,
                    type: i = this.type,
                    nullable: a = this.nullable,
                    metadata: o = this.metadata
                } = e[0]) : [r = this.name, i = this.type, a = this.nullable, o = this.metadata] = e, Jn.new(r, i, a, o)
            }
        }

        function Zn(t, e) {
            return new Map([...t || new Map, ...e || new Map])
        }

        function tr(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
            for (let n = -1, r = t.length; ++n < r;) {
                const r = t[n].type;
                if (Dt.isDictionary(r))
                    if (e.has(r.id)) {
                        if (e.get(r.id) !== r.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id")
                    } else e.set(r.id, r.dictionary);
                r.children && r.children.length > 0 && tr(r.children, e)
            }
            return e
        }
        Jn.prototype.type = null, Jn.prototype.name = null, Jn.prototype.nullable = null, Jn.prototype.metadata = null;
        class er extends ee {
            compareSchemas(t, e) {
                return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields)
            }
            compareManyFields(t, e) {
                return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every(((t, n) => this.compareFields(t, e[n])))
            }
            compareFields(t, e) {
                return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type)
            }
        }

        function nr(t, e) {
            return e instanceof t.constructor
        }

        function rr(t, e) {
            return t === e || nr(t, e)
        }

        function ir(t, e) {
            return t === e || nr(t, e) && t.bitWidth === e.bitWidth && t.isSigned === e.isSigned
        }

        function ar(t, e) {
            return t === e || nr(t, e) && t.precision === e.precision
        }

        function or(t, e) {
            return t === e || nr(t, e) && t.unit === e.unit
        }

        function sr(t, e) {
            return t === e || nr(t, e) && t.unit === e.unit && t.timezone === e.timezone
        }

        function lr(t, e) {
            return t === e || nr(t, e) && t.unit === e.unit && t.bitWidth === e.bitWidth
        }

        function ur(t, e) {
            return t === e || nr(t, e) && t.mode === e.mode && t.typeIds.every(((t, n) => t === e.typeIds[n])) && dr.compareManyFields(t.children, e.children)
        }

        function cr(t, e) {
            return t === e || nr(t, e) && t.unit === e.unit
        }
        er.prototype.visitNull = rr, er.prototype.visitBool = rr, er.prototype.visitInt = ir, er.prototype.visitInt8 = ir, er.prototype.visitInt16 = ir, er.prototype.visitInt32 = ir, er.prototype.visitInt64 = ir, er.prototype.visitUint8 = ir, er.prototype.visitUint16 = ir, er.prototype.visitUint32 = ir, er.prototype.visitUint64 = ir, er.prototype.visitFloat = ar, er.prototype.visitFloat16 = ar, er.prototype.visitFloat32 = ar, er.prototype.visitFloat64 = ar, er.prototype.visitUtf8 = rr, er.prototype.visitBinary = rr, er.prototype.visitFixedSizeBinary = function(t, e) {
            return t === e || nr(t, e) && t.byteWidth === e.byteWidth
        }, er.prototype.visitDate = or, er.prototype.visitDateDay = or, er.prototype.visitDateMillisecond = or, er.prototype.visitTimestamp = sr, er.prototype.visitTimestampSecond = sr, er.prototype.visitTimestampMillisecond = sr, er.prototype.visitTimestampMicrosecond = sr, er.prototype.visitTimestampNanosecond = sr, er.prototype.visitTime = lr, er.prototype.visitTimeSecond = lr, er.prototype.visitTimeMillisecond = lr, er.prototype.visitTimeMicrosecond = lr, er.prototype.visitTimeNanosecond = lr, er.prototype.visitDecimal = rr, er.prototype.visitList = function(t, e) {
            return t === e || nr(t, e) && t.children.length === e.children.length && dr.compareManyFields(t.children, e.children)
        }, er.prototype.visitStruct = function(t, e) {
            return t === e || nr(t, e) && t.children.length === e.children.length && dr.compareManyFields(t.children, e.children)
        }, er.prototype.visitUnion = ur, er.prototype.visitDenseUnion = ur, er.prototype.visitSparseUnion = ur, er.prototype.visitDictionary = function(t, e) {
            return t === e || nr(t, e) && t.id === e.id && t.isOrdered === e.isOrdered && dr.visit(t.indices, e.indices) && dr.visit(t.dictionary, e.dictionary)
        }, er.prototype.visitInterval = cr, er.prototype.visitIntervalDayTime = cr, er.prototype.visitIntervalYearMonth = cr, er.prototype.visitFixedSizeList = function(t, e) {
            return t === e || nr(t, e) && t.listSize === e.listSize && t.children.length === e.children.length && dr.compareManyFields(t.children, e.children)
        }, er.prototype.visitMap = function(t, e) {
            return t === e || nr(t, e) && t.keysSorted === e.keysSorted && t.children.length === e.children.length && dr.compareManyFields(t.children, e.children)
        };
        const dr = new er;

        function fr(t, e) {
            return dr.compareSchemas(t, e)
        }
        var hr, pr;
        class yr {
            constructor() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                switch (e.length) {
                    case 2:
                        if ([this.schema] = e, !(this.schema instanceof Xn)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
                        if ([, this.data = Gn({
                                nullCount: 0,
                                type: new $t(this.schema.fields),
                                children: this.schema.fields.map((t => Gn({
                                    type: t.type,
                                    nullCount: 0
                                })))
                            })] = e, !(this.data instanceof Qn)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
                        [this.schema, this.data] = mr(this.schema, this.data.children);
                        break;
                    case 1: {
                        const [t] = e, {
                            fields: n,
                            children: r,
                            length: i
                        } = Object.keys(t).reduce(((e, n, r) => (e.children[r] = t[n], e.length = Math.max(e.length, t[n].length), e.fields[r] = Jn.new({
                            name: n,
                            type: t[n].type,
                            nullable: !0
                        }), e)), {
                            length: 0,
                            fields: new Array,
                            children: new Array
                        }), a = new Xn(n), o = Gn({
                            type: new $t(n),
                            length: i,
                            children: r,
                            nullCount: 0
                        });
                        [this.schema, this.data] = mr(a, o.children, i);
                        break
                    }
                    default:
                        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")
                }
            }
            get dictionaries() {
                return this._dictionaries || (this._dictionaries = br(this.schema.fields, this.data.children))
            }
            get numCols() {
                return this.schema.fields.length
            }
            get numRows() {
                return this.data.length
            }
            get nullCount() {
                return this.data.nullCount
            }
            isValid(t) {
                return this.data.getValid(t)
            }
            get(t) {
                return en.visit(this.data, t)
            }
            set(t, e) {
                return Oe.visit(this.data, t, e)
            }
            indexOf(t, e) {
                return Mn.visit(this.data, t, e)
            }
            getByteLength(t) {
                return Vn.visit(this.data, t)
            } [Symbol.iterator]() {
                return Ln.visit(new $n([this.data]))
            }
            toArray() {
                return [...this]
            }
            concat() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return new _r(this.schema, [this, ...e])
            }
            slice(t, e) {
                const [n] = new $n([this.data]).slice(t, e).data;
                return new yr(this.schema, n)
            }
            getChild(t) {
                var e;
                return this.getChildAt(null === (e = this.schema.fields) || void 0 === e ? void 0 : e.findIndex((e => e.name === t)))
            }
            getChildAt(t) {
                return t > -1 && t < this.schema.fields.length ? new $n([this.data.children[t]]) : null
            }
            setChild(t, e) {
                var n;
                return this.setChildAt(null === (n = this.schema.fields) || void 0 === n ? void 0 : n.findIndex((e => e.name === t)), e)
            }
            setChildAt(t, e) {
                let n = this.schema,
                    r = this.data;
                if (t > -1 && t < this.numCols) {
                    e || (e = new $n([Gn({
                        type: new Mt,
                        length: this.numRows
                    })]));
                    const i = n.fields.slice(),
                        a = r.children.slice(),
                        o = i[t].clone({
                            type: e.type
                        });
                    [i[t], a[t]] = [o, e.data[0]], n = new Xn(i, new Map(this.schema.metadata)), r = Gn({
                        type: new $t(i),
                        children: a
                    })
                }
                return new yr(n, r)
            }
            select(t) {
                const e = this.schema.select(t),
                    n = new $t(e.fields),
                    r = [];
                for (const i of t) {
                    const t = this.schema.fields.findIndex((t => t.name === i));
                    ~t && (r[t] = this.data.children[t])
                }
                return new yr(e, Gn({
                    type: n,
                    length: this.numRows,
                    children: r
                }))
            }
            selectAt(t) {
                const e = this.schema.selectAt(t),
                    n = t.map((t => this.data.children[t])).filter(Boolean),
                    r = Gn({
                        type: new $t(e.fields),
                        length: this.numRows,
                        children: n
                    });
                return new yr(e, r)
            }
        }

        function mr(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.reduce(((t, e) => Math.max(t, e.length)), 0);
            var r;
            const i = [...t.fields],
                a = [...e],
                o = (n + 63 & -64) >> 3;
            for (const [s, l] of t.fields.entries()) {
                const t = e[s];
                t && t.length === n || (i[s] = l.clone({
                    nullable: !0
                }), a[s] = null !== (r = null === t || void 0 === t ? void 0 : t._changeLengthAndBackfillNullBitmap(n)) && void 0 !== r ? r : Gn({
                    type: l.type,
                    length: n,
                    nullCount: n,
                    nullBitmap: new Uint8Array(o)
                }))
            }
            return [t.assign(i), Gn({
                type: new $t(i),
                length: n,
                children: a
            })]
        }

        function br(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
            for (let r = -1, i = t.length; ++r < i;) {
                const i = t[r].type,
                    a = e[r];
                if (Dt.isDictionary(i))
                    if (n.has(i.id)) {
                        if (n.get(i.id) !== a.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id")
                    } else a.dictionary && n.set(i.id, a.dictionary);
                i.children && i.children.length > 0 && br(i.children, a.children, n)
            }
            return n
        }
        hr = Symbol.toStringTag, yr[hr] = (t => (t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(yr.prototype);
        class vr extends yr {
            constructor(t) {
                const e = t.fields.map((t => Gn({
                    type: t.type
                })));
                super(t, Gn({
                    type: new $t(t.fields),
                    nullCount: 0,
                    children: e
                }))
            }
        }

        function gr(t, e) {
            return function(t, e) {
                const n = [...t.fields],
                    r = [],
                    i = {
                        numBatches: e.reduce(((t, e) => Math.max(t, e.length)), 0)
                    };
                let a = 0,
                    o = 0,
                    s = -1;
                const l = e.length;
                let u, c = [];
                for (; i.numBatches-- > 0;) {
                    for (o = Number.POSITIVE_INFINITY, s = -1; ++s < l;) c[s] = u = e[s].shift(), o = Math.min(o, u ? u.length : o);
                    Number.isFinite(o) && (c = wr(n, o, c, e, i), o > 0 && (r[a++] = Gn({
                        type: new $t(n),
                        length: o,
                        nullCount: 0,
                        children: c.slice()
                    })))
                }
                return [t = t.assign(n), r.map((e => new yr(t, e)))]
            }(t, e.map((t => t.data.concat())))
        }

        function wr(t, e, n, r, i) {
            var a;
            const o = (e + 63 & -64) >> 3;
            for (let s = -1, l = r.length; ++s < l;) {
                const l = n[s],
                    u = null === l || void 0 === l ? void 0 : l.length;
                if (u >= e) u === e ? n[s] = l : (n[s] = l.slice(0, e), i.numBatches = Math.max(i.numBatches, r[s].unshift(l.slice(e, u - e))));
                else {
                    const r = t[s];
                    t[s] = r.clone({
                        nullable: !0
                    }), n[s] = null !== (a = null === l || void 0 === l ? void 0 : l._changeLengthAndBackfillNullBitmap(e)) && void 0 !== a ? a : Gn({
                        type: r.type,
                        length: e,
                        nullCount: e,
                        nullBitmap: new Uint8Array(o)
                    })
                }
            }
            return n
        }
        class _r {
            constructor() {
                for (var t, e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                if (0 === r.length) return this.batches = [], this.schema = new Xn([]), this._offsets = [0], this;
                let a, o;
                r[0] instanceof Xn && (a = r.shift()), r[r.length - 1] instanceof Uint32Array && (o = r.pop());
                const s = t => {
                        if (t) {
                            if (t instanceof yr) return [t];
                            if (t instanceof _r) return t.batches;
                            if (t instanceof Qn) {
                                if (t.type instanceof $t) return [new yr(new Xn(t.type.children), t)]
                            } else {
                                if (Array.isArray(t)) return t.flatMap((t => s(t)));
                                if ("function" === typeof t[Symbol.iterator]) return [...t].flatMap((t => s(t)));
                                if ("object" === typeof t) {
                                    const e = Object.keys(t),
                                        n = e.map((e => new $n([t[e]]))),
                                        r = new Xn(e.map(((t, e) => new Jn(String(t), n[e].type)))),
                                        [, i] = gr(r, n);
                                    return 0 === i.length ? [new yr(t)] : i
                                }
                            }
                        }
                        return []
                    },
                    l = r.flatMap((t => s(t)));
                if (a = null !== (e = null !== a && void 0 !== a ? a : null === (t = l[0]) || void 0 === t ? void 0 : t.schema) && void 0 !== e ? e : new Xn([]), !(a instanceof Xn)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
                for (const u of l) {
                    if (!(u instanceof yr)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
                    if (!fr(a, u.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")
                }
                this.schema = a, this.batches = l, this._offsets = null !== o && void 0 !== o ? o : mn(this.data)
            }
            get data() {
                return this.batches.map((t => {
                    let {
                        data: e
                    } = t;
                    return e
                }))
            }
            get numCols() {
                return this.schema.fields.length
            }
            get numRows() {
                return this.data.reduce(((t, e) => t + e.length), 0)
            }
            get nullCount() {
                return -1 === this._nullCount && (this._nullCount = yn(this.data)), this._nullCount
            }
            isValid(t) {
                return !1
            }
            get(t) {
                return null
            }
            set(t, e) {}
            indexOf(t, e) {
                return -1
            }
            getByteLength(t) {
                return 0
            } [Symbol.iterator]() {
                return this.batches.length > 0 ? Ln.visit(new $n(this.data)) : new Array(0)[Symbol.iterator]()
            }
            toArray() {
                return [...this]
            }
            toString() {
                return "[\n  ".concat(this.toArray().join(",\n  "), "\n]")
            }
            concat() {
                const t = this.schema;
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                const i = this.data.concat(n.flatMap((t => {
                    let {
                        data: e
                    } = t;
                    return e
                })));
                return new _r(t, i.map((e => new yr(t, e))))
            }
            slice(t, e) {
                const n = this.schema;
                [t, e] = un({
                    length: this.numRows
                }, t, e);
                const r = bn(this.data, this._offsets, t, e);
                return new _r(n, r.map((t => new yr(n, t))))
            }
            getChild(t) {
                return this.getChildAt(this.schema.fields.findIndex((e => e.name === t)))
            }
            getChildAt(t) {
                if (t > -1 && t < this.schema.fields.length) {
                    const e = this.data.map((e => e.children[t]));
                    if (0 === e.length) {
                        const {
                            type: n
                        } = this.schema.fields[t], r = Gn({
                            type: n,
                            length: 0,
                            nullCount: 0
                        });
                        e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))
                    }
                    return new $n(e)
                }
                return null
            }
            setChild(t, e) {
                var n;
                return this.setChildAt(null === (n = this.schema.fields) || void 0 === n ? void 0 : n.findIndex((e => e.name === t)), e)
            }
            setChildAt(t, e) {
                let n = this.schema,
                    r = [...this.batches];
                if (t > -1 && t < this.numCols) {
                    e || (e = new $n([Gn({
                        type: new Mt,
                        length: this.numRows
                    })]));
                    const i = n.fields.slice(),
                        a = i[t].clone({
                            type: e.type
                        }),
                        o = this.schema.fields.map(((t, e) => this.getChildAt(e)));
                    [i[t], o[t]] = [a, e], [n, r] = gr(n, o)
                }
                return new _r(n, r)
            }
            select(t) {
                const e = this.schema.fields.reduce(((t, e, n) => t.set(e.name, n)), new Map);
                return this.selectAt(t.map((t => e.get(t))).filter((t => t > -1)))
            }
            selectAt(t) {
                const e = this.schema.selectAt(t),
                    n = this.batches.map((e => e.selectAt(t)));
                return new _r(e, n)
            }
            assign(t) {
                const e = this.schema.fields,
                    [n, r] = t.schema.fields.reduce(((t, n, r) => {
                        const [i, a] = t, o = e.findIndex((t => t.name === n.name));
                        return ~o ? a[o] = r : i.push(r), t
                    }), [
                        [],
                        []
                    ]),
                    i = this.schema.assign(t.schema),
                    a = [...e.map(((t, e) => [e, r[e]])).map((e => {
                        let [n, r] = e;
                        return void 0 === r ? this.getChildAt(n) : t.getChildAt(r)
                    })), ...n.map((e => t.getChildAt(e)))].filter(Boolean);
                return new _r(...gr(i, a))
            }
        }
        pr = Symbol.toStringTag, _r[pr] = (t => (t.schema = null, t.batches = [], t._offsets = new Uint32Array([0]), t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, t.isValid = wn(gn), t.get = wn(en.getVisitFn(l.Struct)), t.set = _n(Oe.getVisitFn(l.Struct)), t.indexOf = Sn(Mn.getVisitFn(l.Struct)), t.getByteLength = wn(Vn.getVisitFn(l.Struct)), "Table"))(_r.prototype);
        class Sr {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            offset() {
                return this.bb.readInt64(this.bb_pos)
            }
            metaDataLength() {
                return this.bb.readInt32(this.bb_pos + 8)
            }
            bodyLength() {
                return this.bb.readInt64(this.bb_pos + 16)
            }
            static sizeOf() {
                return 24
            }
            static createBlock(t, e, n, r) {
                return t.prep(8, 24), t.writeInt64(r), t.pad(4), t.writeInt32(n), t.writeInt64(e), t.offset()
            }
        }
        const xr = new Int32Array(2),
            Tr = new Float32Array(xr.buffer),
            kr = new Float64Array(xr.buffer),
            Ir = 1 === new Uint16Array(new Uint8Array([1, 0]).buffer)[0];
        class Er {
            constructor(t, e) {
                this.low = 0 | t, this.high = 0 | e
            }
            static create(t, e) {
                return 0 == t && 0 == e ? Er.ZERO : new Er(t, e)
            }
            toFloat64() {
                return (this.low >>> 0) + 4294967296 * this.high
            }
            equals(t) {
                return this.low == t.low && this.high == t.high
            }
        }
        var Or, Ar, Cr, Nr, Dr;
        Er.ZERO = new Er(0, 0),
            function(t) {
                t[t.UTF8_BYTES = 1] = "UTF8_BYTES", t[t.UTF16_STRING = 2] = "UTF16_STRING"
            }(Or || (Or = {}));
        class Mr {
            constructor(t) {
                this.bytes_ = t, this.position_ = 0
            }
            static allocate(t) {
                return new Mr(new Uint8Array(t))
            }
            clear() {
                this.position_ = 0
            }
            bytes() {
                return this.bytes_
            }
            position() {
                return this.position_
            }
            setPosition(t) {
                this.position_ = t
            }
            capacity() {
                return this.bytes_.length
            }
            readInt8(t) {
                return this.readUint8(t) << 24 >> 24
            }
            readUint8(t) {
                return this.bytes_[t]
            }
            readInt16(t) {
                return this.readUint16(t) << 16 >> 16
            }
            readUint16(t) {
                return this.bytes_[t] | this.bytes_[t + 1] << 8
            }
            readInt32(t) {
                return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24
            }
            readUint32(t) {
                return this.readInt32(t) >>> 0
            }
            readInt64(t) {
                return new Er(this.readInt32(t), this.readInt32(t + 4))
            }
            readUint64(t) {
                return new Er(this.readUint32(t), this.readUint32(t + 4))
            }
            readFloat32(t) {
                return xr[0] = this.readInt32(t), Tr[0]
            }
            readFloat64(t) {
                return xr[Ir ? 0 : 1] = this.readInt32(t), xr[Ir ? 1 : 0] = this.readInt32(t + 4), kr[0]
            }
            writeInt8(t, e) {
                this.bytes_[t] = e
            }
            writeUint8(t, e) {
                this.bytes_[t] = e
            }
            writeInt16(t, e) {
                this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8
            }
            writeUint16(t, e) {
                this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8
            }
            writeInt32(t, e) {
                this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24
            }
            writeUint32(t, e) {
                this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24
            }
            writeInt64(t, e) {
                this.writeInt32(t, e.low), this.writeInt32(t + 4, e.high)
            }
            writeUint64(t, e) {
                this.writeUint32(t, e.low), this.writeUint32(t + 4, e.high)
            }
            writeFloat32(t, e) {
                Tr[0] = e, this.writeInt32(t, xr[0])
            }
            writeFloat64(t, e) {
                kr[0] = e, this.writeInt32(t, xr[Ir ? 0 : 1]), this.writeInt32(t + 4, xr[Ir ? 1 : 0])
            }
            getBufferIdentifier() {
                if (this.bytes_.length < this.position_ + 4 + 4) throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
                let t = "";
                for (let e = 0; e < 4; e++) t += String.fromCharCode(this.readInt8(this.position_ + 4 + e));
                return t
            }
            __offset(t, e) {
                const n = t - this.readInt32(t);
                return e < this.readInt16(n) ? this.readInt16(n + e) : 0
            }
            __union(t, e) {
                return t.bb_pos = e + this.readInt32(e), t.bb = this, t
            }
            __string(t, e) {
                t += this.readInt32(t);
                const n = this.readInt32(t);
                let r = "",
                    i = 0;
                if (t += 4, e === Or.UTF8_BYTES) return this.bytes_.subarray(t, t + n);
                for (; i < n;) {
                    let e;
                    const n = this.readUint8(t + i++);
                    if (n < 192) e = n;
                    else {
                        const r = this.readUint8(t + i++);
                        if (n < 224) e = (31 & n) << 6 | 63 & r;
                        else {
                            const a = this.readUint8(t + i++);
                            if (n < 240) e = (15 & n) << 12 | (63 & r) << 6 | 63 & a;
                            else {
                                e = (7 & n) << 18 | (63 & r) << 12 | (63 & a) << 6 | 63 & this.readUint8(t + i++)
                            }
                        }
                    }
                    e < 65536 ? r += String.fromCharCode(e) : (e -= 65536, r += String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
                }
                return r
            }
            __union_with_string(t, e) {
                return "string" === typeof t ? this.__string(e) : this.__union(t, e)
            }
            __indirect(t) {
                return t + this.readInt32(t)
            }
            __vector(t) {
                return t + this.readInt32(t) + 4
            }
            __vector_len(t) {
                return this.readInt32(t + this.readInt32(t))
            }
            __has_identifier(t) {
                if (4 != t.length) throw new Error("FlatBuffers: file identifier must be length 4");
                for (let e = 0; e < 4; e++)
                    if (t.charCodeAt(e) != this.readInt8(this.position() + 4 + e)) return !1;
                return !0
            }
            createLong(t, e) {
                return Er.create(t, e)
            }
            createScalarList(t, e) {
                const n = [];
                for (let r = 0; r < e; ++r) null !== t(r) && n.push(t(r));
                return n
            }
            createObjList(t, e) {
                const n = [];
                for (let r = 0; r < e; ++r) {
                    const e = t(r);
                    null !== e && n.push(e.unpack())
                }
                return n
            }
        }
        class Br {
            constructor(t) {
                let e;
                this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, e = t || 1024, this.bb = Mr.allocate(e), this.space = e
            }
            clear() {
                this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null
            }
            forceDefaults(t) {
                this.force_defaults = t
            }
            dataBuffer() {
                return this.bb
            }
            asUint8Array() {
                return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset())
            }
            prep(t, e) {
                t > this.minalign && (this.minalign = t);
                const n = 1 + ~(this.bb.capacity() - this.space + e) & t - 1;
                for (; this.space < n + t + e;) {
                    const t = this.bb.capacity();
                    this.bb = Br.growByteBuffer(this.bb), this.space += this.bb.capacity() - t
                }
                this.pad(n)
            }
            pad(t) {
                for (let e = 0; e < t; e++) this.bb.writeInt8(--this.space, 0)
            }
            writeInt8(t) {
                this.bb.writeInt8(this.space -= 1, t)
            }
            writeInt16(t) {
                this.bb.writeInt16(this.space -= 2, t)
            }
            writeInt32(t) {
                this.bb.writeInt32(this.space -= 4, t)
            }
            writeInt64(t) {
                this.bb.writeInt64(this.space -= 8, t)
            }
            writeFloat32(t) {
                this.bb.writeFloat32(this.space -= 4, t)
            }
            writeFloat64(t) {
                this.bb.writeFloat64(this.space -= 8, t)
            }
            addInt8(t) {
                this.prep(1, 0), this.writeInt8(t)
            }
            addInt16(t) {
                this.prep(2, 0), this.writeInt16(t)
            }
            addInt32(t) {
                this.prep(4, 0), this.writeInt32(t)
            }
            addInt64(t) {
                this.prep(8, 0), this.writeInt64(t)
            }
            addFloat32(t) {
                this.prep(4, 0), this.writeFloat32(t)
            }
            addFloat64(t) {
                this.prep(8, 0), this.writeFloat64(t)
            }
            addFieldInt8(t, e, n) {
                (this.force_defaults || e != n) && (this.addInt8(e), this.slot(t))
            }
            addFieldInt16(t, e, n) {
                (this.force_defaults || e != n) && (this.addInt16(e), this.slot(t))
            }
            addFieldInt32(t, e, n) {
                (this.force_defaults || e != n) && (this.addInt32(e), this.slot(t))
            }
            addFieldInt64(t, e, n) {
                !this.force_defaults && e.equals(n) || (this.addInt64(e), this.slot(t))
            }
            addFieldFloat32(t, e, n) {
                (this.force_defaults || e != n) && (this.addFloat32(e), this.slot(t))
            }
            addFieldFloat64(t, e, n) {
                (this.force_defaults || e != n) && (this.addFloat64(e), this.slot(t))
            }
            addFieldOffset(t, e, n) {
                (this.force_defaults || e != n) && (this.addOffset(e), this.slot(t))
            }
            addFieldStruct(t, e, n) {
                e != n && (this.nested(e), this.slot(t))
            }
            nested(t) {
                if (t != this.offset()) throw new Error("FlatBuffers: struct must be serialized inline.")
            }
            notNested() {
                if (this.isNested) throw new Error("FlatBuffers: object serialization must not be nested.")
            }
            slot(t) {
                null !== this.vtable && (this.vtable[t] = this.offset())
            }
            offset() {
                return this.bb.capacity() - this.space
            }
            static growByteBuffer(t) {
                const e = t.capacity();
                if (3221225472 & e) throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
                const n = e << 1,
                    r = Mr.allocate(n);
                return r.setPosition(n - e), r.bytes().set(t.bytes(), n - e), r
            }
            addOffset(t) {
                this.prep(4, 0), this.writeInt32(this.offset() - t + 4)
            }
            startObject(t) {
                this.notNested(), null == this.vtable && (this.vtable = []), this.vtable_in_use = t;
                for (let e = 0; e < t; e++) this.vtable[e] = 0;
                this.isNested = !0, this.object_start = this.offset()
            }
            endObject() {
                if (null == this.vtable || !this.isNested) throw new Error("FlatBuffers: endObject called without startObject");
                this.addInt32(0);
                const t = this.offset();
                let e = this.vtable_in_use - 1;
                for (; e >= 0 && 0 == this.vtable[e]; e--);
                const n = e + 1;
                for (; e >= 0; e--) this.addInt16(0 != this.vtable[e] ? t - this.vtable[e] : 0);
                this.addInt16(t - this.object_start);
                const r = 2 * (n + 2);
                this.addInt16(r);
                let i = 0;
                const a = this.space;
                t: for (e = 0; e < this.vtables.length; e++) {
                    const t = this.bb.capacity() - this.vtables[e];
                    if (r == this.bb.readInt16(t)) {
                        for (let e = 2; e < r; e += 2)
                            if (this.bb.readInt16(a + e) != this.bb.readInt16(t + e)) continue t;
                        i = this.vtables[e];
                        break
                    }
                }
                return i ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, i - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t
            }
            finish(t, e, n) {
                const r = n ? 4 : 0;
                if (e) {
                    const t = e;
                    if (this.prep(this.minalign, 8 + r), 4 != t.length) throw new Error("FlatBuffers: file identifier must be length 4");
                    for (let e = 3; e >= 0; e--) this.writeInt8(t.charCodeAt(e))
                }
                this.prep(this.minalign, 4 + r), this.addOffset(t), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space)
            }
            finishSizePrefixed(t, e) {
                this.finish(t, e, !0)
            }
            requiredField(t, e) {
                const n = this.bb.capacity() - t,
                    r = n - this.bb.readInt32(n);
                if (!(0 != this.bb.readInt16(r + e))) throw new Error("FlatBuffers: field " + e + " must be set")
            }
            startVector(t, e, n) {
                this.notNested(), this.vector_num_elems = e, this.prep(4, t * e), this.prep(n, t * e)
            }
            endVector() {
                return this.writeInt32(this.vector_num_elems), this.offset()
            }
            createSharedString(t) {
                if (!t) return 0;
                if (this.string_maps || (this.string_maps = new Map), this.string_maps.has(t)) return this.string_maps.get(t);
                const e = this.createString(t);
                return this.string_maps.set(t, e), e
            }
            createString(t) {
                if (!t) return 0;
                let e;
                if (t instanceof Uint8Array) e = t;
                else {
                    e = [];
                    let n = 0;
                    for (; n < t.length;) {
                        let r;
                        const i = t.charCodeAt(n++);
                        if (i < 55296 || i >= 56320) r = i;
                        else {
                            r = (i << 10) + t.charCodeAt(n++) + -56613888
                        }
                        r < 128 ? e.push(r) : (r < 2048 ? e.push(r >> 6 & 31 | 192) : (r < 65536 ? e.push(r >> 12 & 15 | 224) : e.push(r >> 18 & 7 | 240, r >> 12 & 63 | 128), e.push(r >> 6 & 63 | 128)), e.push(63 & r | 128))
                    }
                }
                this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length);
                for (let n = 0, r = this.space, i = this.bb.bytes(); n < e.length; n++) i[r++] = e[n];
                return this.endVector()
            }
            createLong(t, e) {
                return Er.create(t, e)
            }
            createObjectOffset(t) {
                return null === t ? 0 : "string" === typeof t ? this.createString(t) : t.pack(this)
            }
            createObjectOffsetList(t) {
                const e = [];
                for (let n = 0; n < t.length; ++n) {
                    const r = t[n];
                    if (null === r) throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
                    e.push(this.createObjectOffset(r))
                }
                return e
            }
            createStructOffsetList(t, e) {
                return e(this, t.length), this.createObjectOffsetList(t), this.endVector()
            }
        }
        class Pr {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsKeyValue(t, e) {
                return (e || new Pr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsKeyValue(t, e) {
                return t.setPosition(t.position() + 4), (e || new Pr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            key(t) {
                const e = this.bb.__offset(this.bb_pos, 4);
                return e ? this.bb.__string(this.bb_pos + e, t) : null
            }
            value(t) {
                const e = this.bb.__offset(this.bb_pos, 6);
                return e ? this.bb.__string(this.bb_pos + e, t) : null
            }
            static startKeyValue(t) {
                t.startObject(2)
            }
            static addKey(t, e) {
                t.addFieldOffset(0, e, 0)
            }
            static addValue(t, e) {
                t.addFieldOffset(1, e, 0)
            }
            static endKeyValue(t) {
                return t.endObject()
            }
            static createKeyValue(t, e, n) {
                return Pr.startKeyValue(t), Pr.addKey(t, e), Pr.addValue(t, n), Pr.endKeyValue(t)
            }
        }! function(t) {
            t[t.V1 = 0] = "V1", t[t.V2 = 1] = "V2", t[t.V3 = 2] = "V3", t[t.V4 = 3] = "V4", t[t.V5 = 4] = "V5"
        }(Ar || (Ar = {})),
        function(t) {
            t[t.Little = 0] = "Little", t[t.Big = 1] = "Big"
        }(Cr || (Cr = {})),
        function(t) {
            t[t.DenseArray = 0] = "DenseArray"
        }(Nr || (Nr = {}));
        class Fr {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsInt(t, e) {
                return (e || new Fr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsInt(t, e) {
                return t.setPosition(t.position() + 4), (e || new Fr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            bitWidth() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt32(this.bb_pos + t) : 0
            }
            isSigned() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return !!t && !!this.bb.readInt8(this.bb_pos + t)
            }
            static startInt(t) {
                t.startObject(2)
            }
            static addBitWidth(t, e) {
                t.addFieldInt32(0, e, 0)
            }
            static addIsSigned(t, e) {
                t.addFieldInt8(1, +e, 0)
            }
            static endInt(t) {
                return t.endObject()
            }
            static createInt(t, e, n) {
                return Fr.startInt(t), Fr.addBitWidth(t, e), Fr.addIsSigned(t, n), Fr.endInt(t)
            }
        }
        class Lr {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsDictionaryEncoding(t, e) {
                return (e || new Lr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsDictionaryEncoding(t, e) {
                return t.setPosition(t.position() + 4), (e || new Lr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            id() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
            }
            indexType(t) {
                const e = this.bb.__offset(this.bb_pos, 6);
                return e ? (t || new Fr).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
            }
            isOrdered() {
                const t = this.bb.__offset(this.bb_pos, 8);
                return !!t && !!this.bb.readInt8(this.bb_pos + t)
            }
            dictionaryKind() {
                const t = this.bb.__offset(this.bb_pos, 10);
                return t ? this.bb.readInt16(this.bb_pos + t) : Nr.DenseArray
            }
            static startDictionaryEncoding(t) {
                t.startObject(4)
            }
            static addId(t, e) {
                t.addFieldInt64(0, e, t.createLong(0, 0))
            }
            static addIndexType(t, e) {
                t.addFieldOffset(1, e, 0)
            }
            static addIsOrdered(t, e) {
                t.addFieldInt8(2, +e, 0)
            }
            static addDictionaryKind(t, e) {
                t.addFieldInt16(3, e, Nr.DenseArray)
            }
            static endDictionaryEncoding(t) {
                return t.endObject()
            }
        }! function(t) {
            t[t.NONE = 0] = "NONE", t[t.Null = 1] = "Null", t[t.Int = 2] = "Int", t[t.FloatingPoint = 3] = "FloatingPoint", t[t.Binary = 4] = "Binary", t[t.Utf8 = 5] = "Utf8", t[t.Bool = 6] = "Bool", t[t.Decimal = 7] = "Decimal", t[t.Date = 8] = "Date", t[t.Time = 9] = "Time", t[t.Timestamp = 10] = "Timestamp", t[t.Interval = 11] = "Interval", t[t.List = 12] = "List", t[t.Struct_ = 13] = "Struct_", t[t.Union = 14] = "Union", t[t.FixedSizeBinary = 15] = "FixedSizeBinary", t[t.FixedSizeList = 16] = "FixedSizeList", t[t.Map = 17] = "Map", t[t.Duration = 18] = "Duration", t[t.LargeBinary = 19] = "LargeBinary", t[t.LargeUtf8 = 20] = "LargeUtf8", t[t.LargeList = 21] = "LargeList"
        }(Dr || (Dr = {}));
        class Rr {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsField(t, e) {
                return (e || new Rr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsField(t, e) {
                return t.setPosition(t.position() + 4), (e || new Rr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            name(t) {
                const e = this.bb.__offset(this.bb_pos, 4);
                return e ? this.bb.__string(this.bb_pos + e, t) : null
            }
            nullable() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return !!t && !!this.bb.readInt8(this.bb_pos + t)
            }
            typeType() {
                const t = this.bb.__offset(this.bb_pos, 8);
                return t ? this.bb.readUint8(this.bb_pos + t) : Dr.NONE
            }
            type(t) {
                const e = this.bb.__offset(this.bb_pos, 10);
                return e ? this.bb.__union(t, this.bb_pos + e) : null
            }
            dictionary(t) {
                const e = this.bb.__offset(this.bb_pos, 12);
                return e ? (t || new Lr).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
            }
            children(t, e) {
                const n = this.bb.__offset(this.bb_pos, 14);
                return n ? (e || new Rr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
            }
            childrenLength() {
                const t = this.bb.__offset(this.bb_pos, 14);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            customMetadata(t, e) {
                const n = this.bb.__offset(this.bb_pos, 16);
                return n ? (e || new Pr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
            }
            customMetadataLength() {
                const t = this.bb.__offset(this.bb_pos, 16);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            static startField(t) {
                t.startObject(7)
            }
            static addName(t, e) {
                t.addFieldOffset(0, e, 0)
            }
            static addNullable(t, e) {
                t.addFieldInt8(1, +e, 0)
            }
            static addTypeType(t, e) {
                t.addFieldInt8(2, e, Dr.NONE)
            }
            static addType(t, e) {
                t.addFieldOffset(3, e, 0)
            }
            static addDictionary(t, e) {
                t.addFieldOffset(4, e, 0)
            }
            static addChildren(t, e) {
                t.addFieldOffset(5, e, 0)
            }
            static createChildrenVector(t, e) {
                t.startVector(4, e.length, 4);
                for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
                return t.endVector()
            }
            static startChildrenVector(t, e) {
                t.startVector(4, e, 4)
            }
            static addCustomMetadata(t, e) {
                t.addFieldOffset(6, e, 0)
            }
            static createCustomMetadataVector(t, e) {
                t.startVector(4, e.length, 4);
                for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
                return t.endVector()
            }
            static startCustomMetadataVector(t, e) {
                t.startVector(4, e, 4)
            }
            static endField(t) {
                return t.endObject()
            }
        }
        class Ur {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsSchema(t, e) {
                return (e || new Ur).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsSchema(t, e) {
                return t.setPosition(t.position() + 4), (e || new Ur).__init(t.readInt32(t.position()) + t.position(), t)
            }
            endianness() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : Cr.Little
            }
            fields(t, e) {
                const n = this.bb.__offset(this.bb_pos, 6);
                return n ? (e || new Rr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
            }
            fieldsLength() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            customMetadata(t, e) {
                const n = this.bb.__offset(this.bb_pos, 8);
                return n ? (e || new Pr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
            }
            customMetadataLength() {
                const t = this.bb.__offset(this.bb_pos, 8);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            features(t) {
                const e = this.bb.__offset(this.bb_pos, 10);
                return e ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + 8 * t) : this.bb.createLong(0, 0)
            }
            featuresLength() {
                const t = this.bb.__offset(this.bb_pos, 10);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            static startSchema(t) {
                t.startObject(4)
            }
            static addEndianness(t, e) {
                t.addFieldInt16(0, e, Cr.Little)
            }
            static addFields(t, e) {
                t.addFieldOffset(1, e, 0)
            }
            static createFieldsVector(t, e) {
                t.startVector(4, e.length, 4);
                for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
                return t.endVector()
            }
            static startFieldsVector(t, e) {
                t.startVector(4, e, 4)
            }
            static addCustomMetadata(t, e) {
                t.addFieldOffset(2, e, 0)
            }
            static createCustomMetadataVector(t, e) {
                t.startVector(4, e.length, 4);
                for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
                return t.endVector()
            }
            static startCustomMetadataVector(t, e) {
                t.startVector(4, e, 4)
            }
            static addFeatures(t, e) {
                t.addFieldOffset(3, e, 0)
            }
            static createFeaturesVector(t, e) {
                t.startVector(8, e.length, 8);
                for (let n = e.length - 1; n >= 0; n--) t.addInt64(e[n]);
                return t.endVector()
            }
            static startFeaturesVector(t, e) {
                t.startVector(8, e, 8)
            }
            static endSchema(t) {
                return t.endObject()
            }
            static finishSchemaBuffer(t, e) {
                t.finish(e)
            }
            static finishSizePrefixedSchemaBuffer(t, e) {
                t.finish(e, void 0, !0)
            }
            static createSchema(t, e, n, r, i) {
                return Ur.startSchema(t), Ur.addEndianness(t, e), Ur.addFields(t, n), Ur.addCustomMetadata(t, r), Ur.addFeatures(t, i), Ur.endSchema(t)
            }
        }
        class zr {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsFooter(t, e) {
                return (e || new zr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsFooter(t, e) {
                return t.setPosition(t.position() + 4), (e || new zr).__init(t.readInt32(t.position()) + t.position(), t)
            }
            version() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : Ar.V1
            }
            schema(t) {
                const e = this.bb.__offset(this.bb_pos, 6);
                return e ? (t || new Ur).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
            }
            dictionaries(t, e) {
                const n = this.bb.__offset(this.bb_pos, 8);
                return n ? (e || new Sr).__init(this.bb.__vector(this.bb_pos + n) + 24 * t, this.bb) : null
            }
            dictionariesLength() {
                const t = this.bb.__offset(this.bb_pos, 8);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            recordBatches(t, e) {
                const n = this.bb.__offset(this.bb_pos, 10);
                return n ? (e || new Sr).__init(this.bb.__vector(this.bb_pos + n) + 24 * t, this.bb) : null
            }
            recordBatchesLength() {
                const t = this.bb.__offset(this.bb_pos, 10);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            customMetadata(t, e) {
                const n = this.bb.__offset(this.bb_pos, 12);
                return n ? (e || new Pr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
            }
            customMetadataLength() {
                const t = this.bb.__offset(this.bb_pos, 12);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            static startFooter(t) {
                t.startObject(5)
            }
            static addVersion(t, e) {
                t.addFieldInt16(0, e, Ar.V1)
            }
            static addSchema(t, e) {
                t.addFieldOffset(1, e, 0)
            }
            static addDictionaries(t, e) {
                t.addFieldOffset(2, e, 0)
            }
            static startDictionariesVector(t, e) {
                t.startVector(24, e, 8)
            }
            static addRecordBatches(t, e) {
                t.addFieldOffset(3, e, 0)
            }
            static startRecordBatchesVector(t, e) {
                t.startVector(24, e, 8)
            }
            static addCustomMetadata(t, e) {
                t.addFieldOffset(4, e, 0)
            }
            static createCustomMetadataVector(t, e) {
                t.startVector(4, e.length, 4);
                for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
                return t.endVector()
            }
            static startCustomMetadataVector(t, e) {
                t.startVector(4, e, 4)
            }
            static endFooter(t) {
                return t.endObject()
            }
            static finishFooterBuffer(t, e) {
                t.finish(e)
            }
            static finishSizePrefixedFooterBuffer(t, e) {
                t.finish(e, void 0, !0)
            }
        }
        var jr = Er,
            Vr = Br,
            Wr = Mr;
        class Yr {
            constructor(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.V4,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = arguments.length > 3 ? arguments[3] : void 0;
                this.schema = e, this.version = n, r && (this._recordBatches = r), i && (this._dictionaryBatches = i)
            }
            static decode(t) {
                t = new Wr(X(t));
                const e = zr.getRootAsFooter(t),
                    n = Xn.decode(e.schema());
                return new Hr(n, e)
            }
            static encode(e) {
                const n = new Vr,
                    r = Xn.encode(n, e.schema);
                zr.startRecordBatchesVector(n, e.numRecordBatches);
                for (const t of [...e.recordBatches()].slice().reverse()) $r.encode(n, t);
                const i = n.endVector();
                zr.startDictionariesVector(n, e.numDictionaries);
                for (const t of [...e.dictionaryBatches()].slice().reverse()) $r.encode(n, t);
                const a = n.endVector();
                return zr.startFooter(n), zr.addSchema(n, r), zr.addVersion(n, t.V4), zr.addRecordBatches(n, i), zr.addDictionaries(n, a), zr.finishFooterBuffer(n, zr.endFooter(n)), n.asUint8Array()
            }
            get numRecordBatches() {
                return this._recordBatches.length
            }
            get numDictionaries() {
                return this._dictionaryBatches.length
            }* recordBatches() {
                for (let t, e = -1, n = this.numRecordBatches; ++e < n;)(t = this.getRecordBatch(e)) && (yield t)
            }* dictionaryBatches() {
                for (let t, e = -1, n = this.numDictionaries; ++e < n;)(t = this.getDictionaryBatch(e)) && (yield t)
            }
            getRecordBatch(t) {
                return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null
            }
            getDictionaryBatch(t) {
                return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null
            }
        }
        class Hr extends Yr {
            constructor(t, e) {
                super(t, e.version()), this._footer = e
            }
            get numRecordBatches() {
                return this._footer.recordBatchesLength()
            }
            get numDictionaries() {
                return this._footer.dictionariesLength()
            }
            getRecordBatch(t) {
                if (t >= 0 && t < this.numRecordBatches) {
                    const e = this._footer.recordBatches(t);
                    if (e) return $r.decode(e)
                }
                return null
            }
            getDictionaryBatch(t) {
                if (t >= 0 && t < this.numDictionaries) {
                    const e = this._footer.dictionaries(t);
                    if (e) return $r.decode(e)
                }
                return null
            }
        }
        class $r {
            constructor(t, e, n) {
                this.metaDataLength = t, this.offset = "number" === typeof n ? n : n.low, this.bodyLength = "number" === typeof e ? e : e.low
            }
            static decode(t) {
                return new $r(t.metaDataLength(), t.bodyLength(), t.offset())
            }
            static encode(t, e) {
                const {
                    metaDataLength: n
                } = e, r = new jr(e.offset, 0), i = new jr(e.bodyLength, 0);
                return Sr.createBlock(t, r, n, i)
            }
        }
        const Kr = {
                fromIterable: t => Qr(function*(t) {
                    let e, n, r, i, a = !1,
                        o = [],
                        s = 0;

                    function l() {
                        return "peek" === r ? Q(o, i)[0] : ([n, o, s] = Q(o, i), n)
                    }({
                        cmd: r,
                        size: i
                    } = yield null);
                    const u = (c = t, Z(Uint8Array, c))[Symbol.iterator]();
                    var c;
                    try {
                        do {
                            if (({
                                    done: e,
                                    value: n
                                } = Number.isNaN(i - s) ? u.next() : u.next(i - s)), !e && n.byteLength > 0 && (o.push(n), s += n.byteLength), e || i <= s)
                                do {
                                    ({
                                        cmd: r,
                                        size: i
                                    } = yield l())
                                } while (i < s)
                        } while (!e)
                    } catch (d) {
                        (a = !0) && "function" === typeof u.throw && u.throw(d)
                    } finally {
                        !1 === a && "function" === typeof u.return && u.return(null)
                    }
                    return null
                }(t)),
                fromAsyncIterable: t => Qr(function(t) {
                    return U(this, arguments, (function*() {
                        let e, n, r, i, a = !1,
                            o = [],
                            s = 0;

                        function l() {
                            return "peek" === r ? Q(o, i)[0] : ([n, o, s] = Q(o, i), n)
                        }({
                            cmd: r,
                            size: i
                        } = yield yield R(null));
                        const u = (c = t, tt(Uint8Array, c))[Symbol.asyncIterator]();
                        var c;
                        try {
                            do {
                                if (({
                                        done: e,
                                        value: n
                                    } = Number.isNaN(i - s) ? yield R(u.next()): yield R(u.next(i - s))), !e && n.byteLength > 0 && (o.push(n), s += n.byteLength), e || i <= s)
                                    do {
                                        ({
                                            cmd: r,
                                            size: i
                                        } = yield yield R(l()))
                                    } while (i < s)
                            } while (!e)
                        } catch (d) {
                            (a = !0) && "function" === typeof u.throw && (yield R(u.throw(d)))
                        } finally {
                            !1 === a && "function" === typeof u.return && (yield R(u.return(new Uint8Array(0))))
                        }
                        return yield R(null)
                    }))
                }(t)),
                fromDOMStream: t => Qr(function(t) {
                    return U(this, arguments, (function*() {
                        let e, n, r, i = !1,
                            a = !1,
                            o = [],
                            s = 0;

                        function l() {
                            return "peek" === n ? Q(o, r)[0] : ([e, o, s] = Q(o, r), e)
                        }({
                            cmd: n,
                            size: r
                        } = yield yield R(null));
                        const u = new qr(t);
                        try {
                            do {
                                if (({
                                        done: i,
                                        value: e
                                    } = Number.isNaN(r - s) ? yield R(u.read()): yield R(u.read(r - s))), !i && e.byteLength > 0 && (o.push(X(e)), s += e.byteLength), i || r <= s)
                                    do {
                                        ({
                                            cmd: n,
                                            size: r
                                        } = yield yield R(l()))
                                    } while (r < s)
                            } while (!i)
                        } catch (c) {
                            (a = !0) && (yield R(u.cancel(c)))
                        } finally {
                            !1 === a ? yield R(u.cancel()): t.locked && u.releaseLock()
                        }
                        return yield R(null)
                    }))
                }(t)),
                fromNodeStream: t => Qr(function(t) {
                    return U(this, arguments, (function*() {
                        const e = [];
                        let n, r, i, a = "error",
                            o = !1,
                            s = null,
                            l = 0,
                            u = [];

                        function c() {
                            return "peek" === n ? Q(u, r)[0] : ([i, u, l] = Q(u, r), i)
                        }
                        if (({
                                cmd: n,
                                size: r
                            } = yield yield R(null)), t.isTTY) return yield yield R(new Uint8Array(0)), yield R(null);
                        try {
                            e[0] = Gr(t, "end"), e[1] = Gr(t, "error");
                            do {
                                if (e[2] = Gr(t, "readable"), [a, s] = yield R(Promise.race(e.map((t => t[2])))), "error" === a) break;
                                if ((o = "end" === a) || (Number.isFinite(r - l) ? (i = X(t.read(r - l)), i.byteLength < r - l && (i = X(t.read()))) : i = X(t.read()), i.byteLength > 0 && (u.push(i), l += i.byteLength)), o || r <= l)
                                    do {
                                        ({
                                            cmd: n,
                                            size: r
                                        } = yield yield R(c()))
                                    } while (r < l)
                            } while (!o)
                        } finally {
                            yield R(d(e, "error" === a ? s : null))
                        }
                        return yield R(null);

                        function d(e, n) {
                            return i = u = null, new Promise(((r, i) => {
                                for (const [n, o] of e) t.off(n, o);
                                try {
                                    const e = t.destroy;
                                    e && e.call(t, n), n = void 0
                                } catch (a) {
                                    n = a || n
                                } finally {
                                    null != n ? i(n) : r()
                                }
                            }))
                        }
                    }))
                }(t)),
                toDOMStream(t, e) {
                    throw new Error('"toDOMStream" not available in this environment')
                },
                toNodeStream(t, e) {
                    throw new Error('"toNodeStream" not available in this environment')
                }
            },
            Qr = t => (t.next(), t);
        class qr {
            constructor(t) {
                this.source = t, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch((() => {}))
            }
            get closed() {
                return this.reader ? this.reader.closed.catch((() => {})) : Promise.resolve()
            }
            releaseLock() {
                this.reader && this.reader.releaseLock(), this.reader = null
            }
            cancel(t) {
                return F(this, void 0, void 0, (function*() {
                    const {
                        reader: e,
                        source: n
                    } = this;
                    e && (yield e.cancel(t).catch((() => {}))), n && n.locked && this.releaseLock()
                }))
            }
            read(t) {
                return F(this, void 0, void 0, (function*() {
                    if (0 === t) return {
                        done: null == this.reader,
                        value: new Uint8Array(0)
                    };
                    const e = yield this.reader.read();
                    return !e.done && (e.value = X(e)), e
                }))
            }
        }
        const Gr = (t, e) => {
            const n = t => r([e, t]);
            let r;
            return [e, n, new Promise((i => (r = i) && t.once(e, n)))]
        };
        const Xr = Object.freeze({
            done: !0,
            value: void 0
        });
        class Jr {
            constructor(t) {
                this._json = t
            }
            get schema() {
                return this._json.schema
            }
            get batches() {
                return this._json.batches || []
            }
            get dictionaries() {
                return this._json.dictionaries || []
            }
        }
        class Zr {
            tee() {
                return this._getDOMStream().tee()
            }
            pipe(t, e) {
                return this._getNodeStream().pipe(t, e)
            }
            pipeTo(t, e) {
                return this._getDOMStream().pipeTo(t, e)
            }
            pipeThrough(t, e) {
                return this._getDOMStream().pipeThrough(t, e)
            }
            _getDOMStream() {
                return this._DOMStream || (this._DOMStream = this.toDOMStream())
            }
            _getNodeStream() {
                return this._nodeStream || (this._nodeStream = this.toNodeStream())
            }
        }
        class ti extends Zr {
            constructor() {
                super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t => this._closedPromiseResolve = t))
            }
            get closed() {
                return this._closedPromise
            }
            cancel(t) {
                return F(this, void 0, void 0, (function*() {
                    yield this.return(t)
                }))
            }
            write(t) {
                this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(t) : this.resolvers.shift().resolve({
                    done: !1,
                    value: t
                }))
            }
            abort(t) {
                this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = {
                    error: t
                } : this.resolvers.shift().reject({
                    done: !0,
                    value: t
                }))
            }
            close() {
                if (this._closedPromiseResolve) {
                    const {
                        resolvers: t
                    } = this;
                    for (; t.length > 0;) t.shift().resolve(Xr);
                    this._closedPromiseResolve(), this._closedPromiseResolve = void 0
                }
            } [Symbol.asyncIterator]() {
                return this
            }
            toDOMStream(t) {
                return Kr.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t)
            }
            toNodeStream(t) {
                return Kr.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t)
            }
            throw (t) {
                return F(this, void 0, void 0, (function*() {
                    return yield this.abort(t), Xr
                }))
            }
            return (t) {
                return F(this, void 0, void 0, (function*() {
                    return yield this.close(), Xr
                }))
            }
            read(t) {
                return F(this, void 0, void 0, (function*() {
                    return (yield this.next(t, "read")).value
                }))
            }
            peek(t) {
                return F(this, void 0, void 0, (function*() {
                    return (yield this.next(t, "peek")).value
                }))
            }
            next() {
                return this._values.length > 0 ? Promise.resolve({
                    done: !1,
                    value: this._values.shift()
                }) : this._error ? Promise.reject({
                    done: !0,
                    value: this._error.error
                }) : this._closedPromiseResolve ? new Promise(((t, e) => {
                    this.resolvers.push({
                        resolve: t,
                        reject: e
                    })
                })) : Promise.resolve(Xr)
            }
            _ensureOpen() {
                if (this._closedPromiseResolve) return !0;
                throw new Error("AsyncQueue is closed")
            }
        }
        class ei extends ti {
            write(t) {
                if ((t = X(t)).byteLength > 0) return super.write(t)
            }
            toString() {
                return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? W(this.toUint8Array(!0)) : this.toUint8Array(!1).then(W)
            }
            toUint8Array() {
                return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? Q(this._values)[0] : (() => F(this, void 0, void 0, (function*() {
                    var t, e;
                    const n = [];
                    let r = 0;
                    try {
                        for (var i, a = j(this); !(i = yield a.next()).done;) {
                            const t = i.value;
                            n.push(t), r += t.byteLength
                        }
                    } catch (o) {
                        t = {
                            error: o
                        }
                    } finally {
                        try {
                            i && !i.done && (e = a.return) && (yield e.call(a))
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return Q(n, r)[0]
                })))()
            }
        }
        class ni {
            constructor(t) {
                t && (this.source = new ii(Kr.fromIterable(t)))
            } [Symbol.iterator]() {
                return this
            }
            next(t) {
                return this.source.next(t)
            }
            throw (t) {
                return this.source.throw(t)
            }
            return (t) {
                return this.source.return(t)
            }
            peek(t) {
                return this.source.peek(t)
            }
            read(t) {
                return this.source.read(t)
            }
        }
        class ri {
            constructor(t) {
                t instanceof ri ? this.source = t.source : t instanceof ei ? this.source = new ai(Kr.fromAsyncIterable(t)) : M(t) ? this.source = new ai(Kr.fromNodeStream(t)) : D(t) ? this.source = new ai(Kr.fromDOMStream(t)) : C(t) ? this.source = new ai(Kr.fromDOMStream(t.body)) : k(t) ? this.source = new ai(Kr.fromIterable(t)) : (T(t) || I(t)) && (this.source = new ai(Kr.fromAsyncIterable(t)))
            } [Symbol.asyncIterator]() {
                return this
            }
            next(t) {
                return this.source.next(t)
            }
            throw (t) {
                return this.source.throw(t)
            }
            return (t) {
                return this.source.return(t)
            }
            get closed() {
                return this.source.closed
            }
            cancel(t) {
                return this.source.cancel(t)
            }
            peek(t) {
                return this.source.peek(t)
            }
            read(t) {
                return this.source.read(t)
            }
        }
        class ii {
            constructor(t) {
                this.source = t
            }
            cancel(t) {
                this.return(t)
            }
            peek(t) {
                return this.next(t, "peek").value
            }
            read(t) {
                return this.next(t, "read").value
            }
            next(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "read";
                return this.source.next({
                    cmd: e,
                    size: t
                })
            }
            throw (t) {
                return Object.create(this.source.throw && this.source.throw(t) || Xr)
            }
            return (t) {
                return Object.create(this.source.return && this.source.return(t) || Xr)
            }
        }
        class ai {
            constructor(t) {
                this.source = t, this._closedPromise = new Promise((t => this._closedPromiseResolve = t))
            }
            cancel(t) {
                return F(this, void 0, void 0, (function*() {
                    yield this.return(t)
                }))
            }
            get closed() {
                return this._closedPromise
            }
            read(t) {
                return F(this, void 0, void 0, (function*() {
                    return (yield this.next(t, "read")).value
                }))
            }
            peek(t) {
                return F(this, void 0, void 0, (function*() {
                    return (yield this.next(t, "peek")).value
                }))
            }
            next(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "read";
                return F(this, void 0, void 0, (function*() {
                    return yield this.source.next({
                        cmd: e,
                        size: t
                    })
                }))
            }
            throw (t) {
                return F(this, void 0, void 0, (function*() {
                    const e = this.source.throw && (yield this.source.throw(t)) || Xr;
                    return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e)
                }))
            }
            return (t) {
                return F(this, void 0, void 0, (function*() {
                    const e = this.source.return && (yield this.source.return(t)) || Xr;
                    return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e)
                }))
            }
        }
        class oi extends ni {
            constructor(t, e) {
                super(), this.position = 0, this.buffer = X(t), this.size = "undefined" === typeof e ? this.buffer.byteLength : e
            }
            readInt32(t) {
                const {
                    buffer: e,
                    byteOffset: n
                } = this.readAt(t, 4);
                return new DataView(e, n).getInt32(0, !0)
            }
            seek(t) {
                return this.position = Math.min(t, this.size), t < this.size
            }
            read(t) {
                const {
                    buffer: e,
                    size: n,
                    position: r
                } = this;
                return e && r < n ? ("number" !== typeof t && (t = Number.POSITIVE_INFINITY), this.position = Math.min(n, r + Math.min(n - r, t)), e.subarray(r, this.position)) : null
            }
            readAt(t, e) {
                const n = this.buffer,
                    r = Math.min(this.size, t + e);
                return n ? n.subarray(t, r) : new Uint8Array(e)
            }
            close() {
                this.buffer && (this.buffer = null)
            }
            throw (t) {
                return this.close(), {
                    done: !0,
                    value: t
                }
            }
            return (t) {
                return this.close(), {
                    done: !0,
                    value: t
                }
            }
        }
        class si extends ri {
            constructor(t, e) {
                super(), this.position = 0, this._handle = t, "number" === typeof e ? this.size = e : this._pending = (() => F(this, void 0, void 0, (function*() {
                    this.size = (yield t.stat()).size, delete this._pending
                })))()
            }
            readInt32(t) {
                return F(this, void 0, void 0, (function*() {
                    const {
                        buffer: e,
                        byteOffset: n
                    } = yield this.readAt(t, 4);
                    return new DataView(e, n).getInt32(0, !0)
                }))
            }
            seek(t) {
                return F(this, void 0, void 0, (function*() {
                    return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size
                }))
            }
            read(t) {
                return F(this, void 0, void 0, (function*() {
                    this._pending && (yield this._pending);
                    const {
                        _handle: e,
                        size: n,
                        position: r
                    } = this;
                    if (e && r < n) {
                        "number" !== typeof t && (t = Number.POSITIVE_INFINITY);
                        let i = r,
                            a = 0,
                            o = 0;
                        const s = Math.min(n, i + Math.min(n - i, t)),
                            l = new Uint8Array(Math.max(0, (this.position = s) - i));
                        for (;
                            (i += o) < s && (a += o) < l.byteLength;)({
                            bytesRead: o
                        } = yield e.read(l, a, l.byteLength - a, i));
                        return l
                    }
                    return null
                }))
            }
            readAt(t, e) {
                return F(this, void 0, void 0, (function*() {
                    this._pending && (yield this._pending);
                    const {
                        _handle: n,
                        size: r
                    } = this;
                    if (n && t + e < r) {
                        const i = Math.min(r, t + e),
                            a = new Uint8Array(i - t);
                        return (yield n.read(a, 0, e, t)).buffer
                    }
                    return new Uint8Array(e)
                }))
            }
            close() {
                return F(this, void 0, void 0, (function*() {
                    const t = this._handle;
                    this._handle = null, t && (yield t.close())
                }))
            }
            throw (t) {
                return F(this, void 0, void 0, (function*() {
                    return yield this.close(), {
                        done: !0,
                        value: t
                    }
                }))
            }
            return (t) {
                return F(this, void 0, void 0, (function*() {
                    return yield this.close(), {
                        done: !0,
                        value: t
                    }
                }))
            }
        }

        function li(t) {
            return t < 0 && (t = 4294967295 + t + 1), "0x".concat(t.toString(16))
        }
        const ui = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];
        class ci {
            constructor(t) {
                this.buffer = t
            }
            high() {
                return this.buffer[1]
            }
            low() {
                return this.buffer[0]
            }
            _times(t) {
                const e = new Uint32Array([this.buffer[1] >>> 16, 65535 & this.buffer[1], this.buffer[0] >>> 16, 65535 & this.buffer[0]]),
                    n = new Uint32Array([t.buffer[1] >>> 16, 65535 & t.buffer[1], t.buffer[0] >>> 16, 65535 & t.buffer[0]]);
                let r = e[3] * n[3];
                this.buffer[0] = 65535 & r;
                let i = r >>> 16;
                return r = e[2] * n[3], i += r, r = e[3] * n[2] >>> 0, i += r, this.buffer[0] += i << 16, this.buffer[1] = i >>> 0 < r ? 65536 : 0, this.buffer[1] += i >>> 16, this.buffer[1] += e[1] * n[3] + e[2] * n[2] + e[3] * n[1], this.buffer[1] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0] << 16, this
            }
            _plus(t) {
                const e = this.buffer[0] + t.buffer[0] >>> 0;
                this.buffer[1] += t.buffer[1], e < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = e
            }
            lessThan(t) {
                return this.buffer[1] < t.buffer[1] || this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0]
            }
            equals(t) {
                return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0]
            }
            greaterThan(t) {
                return t.lessThan(this)
            }
            hex() {
                return "".concat(li(this.buffer[1]), " ").concat(li(this.buffer[0]))
            }
        }
        class di extends ci {
            times(t) {
                return this._times(t), this
            }
            plus(t) {
                return this._plus(t), this
            }
            static from(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
                return di.fromString("string" === typeof t ? t : t.toString(), e)
            }
            static fromNumber(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
                return di.fromString(t.toString(), e)
            }
            static fromString(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
                const n = t.length,
                    r = new di(e);
                for (let i = 0; i < n;) {
                    const e = 8 < n - i ? 8 : n - i,
                        a = new di(new Uint32Array([Number.parseInt(t.slice(i, i + e), 10), 0])),
                        o = new di(new Uint32Array([ui[e], 0]));
                    r.times(o), r.plus(a), i += e
                }
                return r
            }
            static convertArray(t) {
                const e = new Uint32Array(2 * t.length);
                for (let n = -1, r = t.length; ++n < r;) di.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
                return e
            }
            static multiply(t, e) {
                return new di(new Uint32Array(t.buffer)).times(e)
            }
            static add(t, e) {
                return new di(new Uint32Array(t.buffer)).plus(e)
            }
        }
        class fi extends ci {
            negate() {
                return this.buffer[0] = 1 + ~this.buffer[0], this.buffer[1] = ~this.buffer[1], 0 == this.buffer[0] && ++this.buffer[1], this
            }
            times(t) {
                return this._times(t), this
            }
            plus(t) {
                return this._plus(t), this
            }
            lessThan(t) {
                const e = this.buffer[1] << 0,
                    n = t.buffer[1] << 0;
                return e < n || e === n && this.buffer[0] < t.buffer[0]
            }
            static from(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
                return fi.fromString("string" === typeof t ? t : t.toString(), e)
            }
            static fromNumber(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
                return fi.fromString(t.toString(), e)
            }
            static fromString(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
                const n = t.startsWith("-"),
                    r = t.length,
                    i = new fi(e);
                for (let a = n ? 1 : 0; a < r;) {
                    const e = 8 < r - a ? 8 : r - a,
                        n = new fi(new Uint32Array([Number.parseInt(t.slice(a, a + e), 10), 0])),
                        o = new fi(new Uint32Array([ui[e], 0]));
                    i.times(o), i.plus(n), a += e
                }
                return n ? i.negate() : i
            }
            static convertArray(t) {
                const e = new Uint32Array(2 * t.length);
                for (let n = -1, r = t.length; ++n < r;) fi.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
                return e
            }
            static multiply(t, e) {
                return new fi(new Uint32Array(t.buffer)).times(e)
            }
            static add(t, e) {
                return new fi(new Uint32Array(t.buffer)).plus(e)
            }
        }
        class hi {
            constructor(t) {
                this.buffer = t
            }
            high() {
                return new fi(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2))
            }
            low() {
                return new fi(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2))
            }
            negate() {
                return this.buffer[0] = 1 + ~this.buffer[0], this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], 0 == this.buffer[0] && ++this.buffer[1], 0 == this.buffer[1] && ++this.buffer[2], 0 == this.buffer[2] && ++this.buffer[3], this
            }
            times(t) {
                const e = new di(new Uint32Array([this.buffer[3], 0])),
                    n = new di(new Uint32Array([this.buffer[2], 0])),
                    r = new di(new Uint32Array([this.buffer[1], 0])),
                    i = new di(new Uint32Array([this.buffer[0], 0])),
                    a = new di(new Uint32Array([t.buffer[3], 0])),
                    o = new di(new Uint32Array([t.buffer[2], 0])),
                    s = new di(new Uint32Array([t.buffer[1], 0])),
                    l = new di(new Uint32Array([t.buffer[0], 0]));
                let u = di.multiply(i, l);
                this.buffer[0] = u.low();
                const c = new di(new Uint32Array([u.high(), 0]));
                u = di.multiply(r, l), c.plus(u), u = di.multiply(i, s), c.plus(u), this.buffer[1] = c.low(), this.buffer[3] = c.lessThan(u) ? 1 : 0, this.buffer[2] = c.high();
                return new di(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(di.multiply(n, l)).plus(di.multiply(r, s)).plus(di.multiply(i, o)), this.buffer[3] += di.multiply(e, l).plus(di.multiply(n, s)).plus(di.multiply(r, o)).plus(di.multiply(i, a)).low(), this
            }
            plus(t) {
                const e = new Uint32Array(4);
                return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this
            }
            hex() {
                return "".concat(li(this.buffer[3]), " ").concat(li(this.buffer[2]), " ").concat(li(this.buffer[1]), " ").concat(li(this.buffer[0]))
            }
            static multiply(t, e) {
                return new hi(new Uint32Array(t.buffer)).times(e)
            }
            static add(t, e) {
                return new hi(new Uint32Array(t.buffer)).plus(e)
            }
            static from(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(4);
                return hi.fromString("string" === typeof t ? t : t.toString(), e)
            }
            static fromNumber(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(4);
                return hi.fromString(t.toString(), e)
            }
            static fromString(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(4);
                const n = t.startsWith("-"),
                    r = t.length,
                    i = new hi(e);
                for (let a = n ? 1 : 0; a < r;) {
                    const e = 8 < r - a ? 8 : r - a,
                        n = new hi(new Uint32Array([Number.parseInt(t.slice(a, a + e), 10), 0, 0, 0])),
                        o = new hi(new Uint32Array([ui[e], 0, 0, 0]));
                    i.times(o), i.plus(n), a += e
                }
                return n ? i.negate() : i
            }
            static convertArray(t) {
                const e = new Uint32Array(4 * t.length);
                for (let n = -1, r = t.length; ++n < r;) hi.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 16 * n, 4));
                return e
            }
        }
        class pi extends ee {
            constructor(t, e, n, r) {
                super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = n, this.dictionaries = r
            }
            visit(t) {
                return super.visit(t instanceof Jn ? t.type : t)
            }
            visitNull(t) {
                let {
                    length: e
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e
                })
            }
            visitBool(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitInt(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitFloat(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitUtf8(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    valueOffsets: this.readOffsets(t),
                    data: this.readData(t)
                })
            }
            visitBinary(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    valueOffsets: this.readOffsets(t),
                    data: this.readData(t)
                })
            }
            visitFixedSizeBinary(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitDate(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitTimestamp(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitTime(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitDecimal(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitList(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    valueOffsets: this.readOffsets(t),
                    child: this.visit(t.children[0])
                })
            }
            visitStruct(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    children: this.visitMany(t.children)
                })
            }
            visitUnion(t) {
                return t.mode === e.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t)
            }
            visitDenseUnion(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    typeIds: this.readTypeIds(t),
                    valueOffsets: this.readOffsets(t),
                    children: this.visitMany(t.children)
                })
            }
            visitSparseUnion(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    typeIds: this.readTypeIds(t),
                    children: this.visitMany(t.children)
                })
            }
            visitDictionary(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t.indices),
                    dictionary: this.readDictionary(t)
                })
            }
            visitInterval(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    data: this.readData(t)
                })
            }
            visitFixedSizeList(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    child: this.visit(t.children[0])
                })
            }
            visitMap(t) {
                let {
                    length: e,
                    nullCount: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
                return Gn({
                    type: t,
                    length: e,
                    nullCount: n,
                    nullBitmap: this.readNullBitmap(t, n),
                    valueOffsets: this.readOffsets(t),
                    child: this.visit(t.children[0])
                })
            }
            nextFieldNode() {
                return this.nodes[++this.nodesIndex]
            }
            nextBufferRange() {
                return this.buffers[++this.buffersIndex]
            }
            readNullBitmap(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.nextBufferRange();
                return e > 0 && this.readData(t, n) || new Uint8Array(0)
            }
            readOffsets(t, e) {
                return this.readData(t, e)
            }
            readTypeIds(t, e) {
                return this.readData(t, e)
            }
            readData(t) {
                let {
                    length: e,
                    offset: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextBufferRange();
                return this.bytes.subarray(n, n + e)
            }
            readDictionary(t) {
                return this.dictionaries.get(t.id)
            }
        }
        class yi extends pi {
            constructor(t, e, n, r) {
                super(new Uint8Array(0), e, n, r), this.sources = t
            }
            readNullBitmap(t, e) {
                let {
                    offset: n
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.nextBufferRange();
                return e <= 0 ? new Uint8Array(0) : In(this.sources[n])
            }
            readOffsets(t) {
                let {
                    offset: e
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextBufferRange();
                return q(Uint8Array, q(Int32Array, this.sources[e]))
            }
            readTypeIds(t) {
                let {
                    offset: e
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextBufferRange();
                return q(Uint8Array, q(t.ArrayType, this.sources[e]))
            }
            readData(t) {
                let {
                    offset: e
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextBufferRange();
                const {
                    sources: n
                } = this;
                return Dt.isTimestamp(t) || (Dt.isInt(t) || Dt.isTime(t)) && 64 === t.bitWidth || Dt.isDate(t) && t.unit === i.MILLISECOND ? q(Uint8Array, fi.convertArray(n[e])) : Dt.isDecimal(t) ? q(Uint8Array, hi.convertArray(n[e])) : Dt.isBinary(t) || Dt.isFixedSizeBinary(t) ? function(t) {
                    const e = t.join(""),
                        n = new Uint8Array(e.length / 2);
                    for (let r = 0; r < e.length; r += 2) n[r >> 1] = Number.parseInt(e.slice(r, r + 2), 16);
                    return n
                }(n[e]) : Dt.isBool(t) ? In(n[e]) : Dt.isUtf8(t) ? H(n[e].join("")) : q(Uint8Array, q(t.ArrayType, n[e].map((t => +t))))
            }
        }
        var mi, bi, vi, gi, wi, _i, Si, xi;
        ! function(t) {
            t[t.BUFFER = 0] = "BUFFER"
        }(mi || (mi = {})),
        function(t) {
            t[t.LZ4_FRAME = 0] = "LZ4_FRAME", t[t.ZSTD = 1] = "ZSTD"
        }(bi || (bi = {}));
        class Ti {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsBodyCompression(t, e) {
                return (e || new Ti).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsBodyCompression(t, e) {
                return t.setPosition(t.position() + 4), (e || new Ti).__init(t.readInt32(t.position()) + t.position(), t)
            }
            codec() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt8(this.bb_pos + t) : bi.LZ4_FRAME
            }
            method() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return t ? this.bb.readInt8(this.bb_pos + t) : mi.BUFFER
            }
            static startBodyCompression(t) {
                t.startObject(2)
            }
            static addCodec(t, e) {
                t.addFieldInt8(0, e, bi.LZ4_FRAME)
            }
            static addMethod(t, e) {
                t.addFieldInt8(1, e, mi.BUFFER)
            }
            static endBodyCompression(t) {
                return t.endObject()
            }
            static createBodyCompression(t, e, n) {
                return Ti.startBodyCompression(t), Ti.addCodec(t, e), Ti.addMethod(t, n), Ti.endBodyCompression(t)
            }
        }
        class ki {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            offset() {
                return this.bb.readInt64(this.bb_pos)
            }
            length() {
                return this.bb.readInt64(this.bb_pos + 8)
            }
            static sizeOf() {
                return 16
            }
            static createBuffer(t, e, n) {
                return t.prep(8, 16), t.writeInt64(n), t.writeInt64(e), t.offset()
            }
        }
        class Ii {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            length() {
                return this.bb.readInt64(this.bb_pos)
            }
            nullCount() {
                return this.bb.readInt64(this.bb_pos + 8)
            }
            static sizeOf() {
                return 16
            }
            static createFieldNode(t, e, n) {
                return t.prep(8, 16), t.writeInt64(n), t.writeInt64(e), t.offset()
            }
        }
        class Ei {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsRecordBatch(t, e) {
                return (e || new Ei).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsRecordBatch(t, e) {
                return t.setPosition(t.position() + 4), (e || new Ei).__init(t.readInt32(t.position()) + t.position(), t)
            }
            length() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
            }
            nodes(t, e) {
                const n = this.bb.__offset(this.bb_pos, 6);
                return n ? (e || new Ii).__init(this.bb.__vector(this.bb_pos + n) + 16 * t, this.bb) : null
            }
            nodesLength() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            buffers(t, e) {
                const n = this.bb.__offset(this.bb_pos, 8);
                return n ? (e || new ki).__init(this.bb.__vector(this.bb_pos + n) + 16 * t, this.bb) : null
            }
            buffersLength() {
                const t = this.bb.__offset(this.bb_pos, 8);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            compression(t) {
                const e = this.bb.__offset(this.bb_pos, 10);
                return e ? (t || new Ti).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
            }
            static startRecordBatch(t) {
                t.startObject(4)
            }
            static addLength(t, e) {
                t.addFieldInt64(0, e, t.createLong(0, 0))
            }
            static addNodes(t, e) {
                t.addFieldOffset(1, e, 0)
            }
            static startNodesVector(t, e) {
                t.startVector(16, e, 8)
            }
            static addBuffers(t, e) {
                t.addFieldOffset(2, e, 0)
            }
            static startBuffersVector(t, e) {
                t.startVector(16, e, 8)
            }
            static addCompression(t, e) {
                t.addFieldOffset(3, e, 0)
            }
            static endRecordBatch(t) {
                return t.endObject()
            }
        }
        class Oi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsDictionaryBatch(t, e) {
                return (e || new Oi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsDictionaryBatch(t, e) {
                return t.setPosition(t.position() + 4), (e || new Oi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            id() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
            }
            data(t) {
                const e = this.bb.__offset(this.bb_pos, 6);
                return e ? (t || new Ei).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
            }
            isDelta() {
                const t = this.bb.__offset(this.bb_pos, 8);
                return !!t && !!this.bb.readInt8(this.bb_pos + t)
            }
            static startDictionaryBatch(t) {
                t.startObject(3)
            }
            static addId(t, e) {
                t.addFieldInt64(0, e, t.createLong(0, 0))
            }
            static addData(t, e) {
                t.addFieldOffset(1, e, 0)
            }
            static addIsDelta(t, e) {
                t.addFieldInt8(2, +e, 0)
            }
            static endDictionaryBatch(t) {
                return t.endObject()
            }
        }! function(t) {
            t[t.HALF = 0] = "HALF", t[t.SINGLE = 1] = "SINGLE", t[t.DOUBLE = 2] = "DOUBLE"
        }(vi || (vi = {}));
        class Ai {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsFloatingPoint(t, e) {
                return (e || new Ai).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsFloatingPoint(t, e) {
                return t.setPosition(t.position() + 4), (e || new Ai).__init(t.readInt32(t.position()) + t.position(), t)
            }
            precision() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : vi.HALF
            }
            static startFloatingPoint(t) {
                t.startObject(1)
            }
            static addPrecision(t, e) {
                t.addFieldInt16(0, e, vi.HALF)
            }
            static endFloatingPoint(t) {
                return t.endObject()
            }
            static createFloatingPoint(t, e) {
                return Ai.startFloatingPoint(t), Ai.addPrecision(t, e), Ai.endFloatingPoint(t)
            }
        }
        class Ci {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsDecimal(t, e) {
                return (e || new Ci).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsDecimal(t, e) {
                return t.setPosition(t.position() + 4), (e || new Ci).__init(t.readInt32(t.position()) + t.position(), t)
            }
            precision() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt32(this.bb_pos + t) : 0
            }
            scale() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return t ? this.bb.readInt32(this.bb_pos + t) : 0
            }
            bitWidth() {
                const t = this.bb.__offset(this.bb_pos, 8);
                return t ? this.bb.readInt32(this.bb_pos + t) : 128
            }
            static startDecimal(t) {
                t.startObject(3)
            }
            static addPrecision(t, e) {
                t.addFieldInt32(0, e, 0)
            }
            static addScale(t, e) {
                t.addFieldInt32(1, e, 0)
            }
            static addBitWidth(t, e) {
                t.addFieldInt32(2, e, 128)
            }
            static endDecimal(t) {
                return t.endObject()
            }
            static createDecimal(t, e, n, r) {
                return Ci.startDecimal(t), Ci.addPrecision(t, e), Ci.addScale(t, n), Ci.addBitWidth(t, r), Ci.endDecimal(t)
            }
        }! function(t) {
            t[t.DAY = 0] = "DAY", t[t.MILLISECOND = 1] = "MILLISECOND"
        }(gi || (gi = {}));
        class Ni {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsDate(t, e) {
                return (e || new Ni).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsDate(t, e) {
                return t.setPosition(t.position() + 4), (e || new Ni).__init(t.readInt32(t.position()) + t.position(), t)
            }
            unit() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : gi.MILLISECOND
            }
            static startDate(t) {
                t.startObject(1)
            }
            static addUnit(t, e) {
                t.addFieldInt16(0, e, gi.MILLISECOND)
            }
            static endDate(t) {
                return t.endObject()
            }
            static createDate(t, e) {
                return Ni.startDate(t), Ni.addUnit(t, e), Ni.endDate(t)
            }
        }! function(t) {
            t[t.SECOND = 0] = "SECOND", t[t.MILLISECOND = 1] = "MILLISECOND", t[t.MICROSECOND = 2] = "MICROSECOND", t[t.NANOSECOND = 3] = "NANOSECOND"
        }(wi || (wi = {}));
        class Di {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsTime(t, e) {
                return (e || new Di).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsTime(t, e) {
                return t.setPosition(t.position() + 4), (e || new Di).__init(t.readInt32(t.position()) + t.position(), t)
            }
            unit() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : wi.MILLISECOND
            }
            bitWidth() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return t ? this.bb.readInt32(this.bb_pos + t) : 32
            }
            static startTime(t) {
                t.startObject(2)
            }
            static addUnit(t, e) {
                t.addFieldInt16(0, e, wi.MILLISECOND)
            }
            static addBitWidth(t, e) {
                t.addFieldInt32(1, e, 32)
            }
            static endTime(t) {
                return t.endObject()
            }
            static createTime(t, e, n) {
                return Di.startTime(t), Di.addUnit(t, e), Di.addBitWidth(t, n), Di.endTime(t)
            }
        }
        class Mi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsTimestamp(t, e) {
                return (e || new Mi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsTimestamp(t, e) {
                return t.setPosition(t.position() + 4), (e || new Mi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            unit() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : wi.SECOND
            }
            timezone(t) {
                const e = this.bb.__offset(this.bb_pos, 6);
                return e ? this.bb.__string(this.bb_pos + e, t) : null
            }
            static startTimestamp(t) {
                t.startObject(2)
            }
            static addUnit(t, e) {
                t.addFieldInt16(0, e, wi.SECOND)
            }
            static addTimezone(t, e) {
                t.addFieldOffset(1, e, 0)
            }
            static endTimestamp(t) {
                return t.endObject()
            }
            static createTimestamp(t, e, n) {
                return Mi.startTimestamp(t), Mi.addUnit(t, e), Mi.addTimezone(t, n), Mi.endTimestamp(t)
            }
        }! function(t) {
            t[t.YEAR_MONTH = 0] = "YEAR_MONTH", t[t.DAY_TIME = 1] = "DAY_TIME", t[t.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO"
        }(_i || (_i = {}));
        class Bi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsInterval(t, e) {
                return (e || new Bi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsInterval(t, e) {
                return t.setPosition(t.position() + 4), (e || new Bi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            unit() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : _i.YEAR_MONTH
            }
            static startInterval(t) {
                t.startObject(1)
            }
            static addUnit(t, e) {
                t.addFieldInt16(0, e, _i.YEAR_MONTH)
            }
            static endInterval(t) {
                return t.endObject()
            }
            static createInterval(t, e) {
                return Bi.startInterval(t), Bi.addUnit(t, e), Bi.endInterval(t)
            }
        }! function(t) {
            t[t.Sparse = 0] = "Sparse", t[t.Dense = 1] = "Dense"
        }(Si || (Si = {}));
        class Pi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsUnion(t, e) {
                return (e || new Pi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsUnion(t, e) {
                return t.setPosition(t.position() + 4), (e || new Pi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            mode() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : Si.Sparse
            }
            typeIds(t) {
                const e = this.bb.__offset(this.bb_pos, 6);
                return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0
            }
            typeIdsLength() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            typeIdsArray() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null
            }
            static startUnion(t) {
                t.startObject(2)
            }
            static addMode(t, e) {
                t.addFieldInt16(0, e, Si.Sparse)
            }
            static addTypeIds(t, e) {
                t.addFieldOffset(1, e, 0)
            }
            static createTypeIdsVector(t, e) {
                t.startVector(4, e.length, 4);
                for (let n = e.length - 1; n >= 0; n--) t.addInt32(e[n]);
                return t.endVector()
            }
            static startTypeIdsVector(t, e) {
                t.startVector(4, e, 4)
            }
            static endUnion(t) {
                return t.endObject()
            }
            static createUnion(t, e, n) {
                return Pi.startUnion(t), Pi.addMode(t, e), Pi.addTypeIds(t, n), Pi.endUnion(t)
            }
        }
        class Fi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsFixedSizeBinary(t, e) {
                return (e || new Fi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsFixedSizeBinary(t, e) {
                return t.setPosition(t.position() + 4), (e || new Fi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            byteWidth() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt32(this.bb_pos + t) : 0
            }
            static startFixedSizeBinary(t) {
                t.startObject(1)
            }
            static addByteWidth(t, e) {
                t.addFieldInt32(0, e, 0)
            }
            static endFixedSizeBinary(t) {
                return t.endObject()
            }
            static createFixedSizeBinary(t, e) {
                return Fi.startFixedSizeBinary(t), Fi.addByteWidth(t, e), Fi.endFixedSizeBinary(t)
            }
        }
        class Li {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsFixedSizeList(t, e) {
                return (e || new Li).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsFixedSizeList(t, e) {
                return t.setPosition(t.position() + 4), (e || new Li).__init(t.readInt32(t.position()) + t.position(), t)
            }
            listSize() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt32(this.bb_pos + t) : 0
            }
            static startFixedSizeList(t) {
                t.startObject(1)
            }
            static addListSize(t, e) {
                t.addFieldInt32(0, e, 0)
            }
            static endFixedSizeList(t) {
                return t.endObject()
            }
            static createFixedSizeList(t, e) {
                return Li.startFixedSizeList(t), Li.addListSize(t, e), Li.endFixedSizeList(t)
            }
        }
        class Ri {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsMap(t, e) {
                return (e || new Ri).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsMap(t, e) {
                return t.setPosition(t.position() + 4), (e || new Ri).__init(t.readInt32(t.position()) + t.position(), t)
            }
            keysSorted() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return !!t && !!this.bb.readInt8(this.bb_pos + t)
            }
            static startMap(t) {
                t.startObject(1)
            }
            static addKeysSorted(t, e) {
                t.addFieldInt8(0, +e, 0)
            }
            static endMap(t) {
                return t.endObject()
            }
            static createMap(t, e) {
                return Ri.startMap(t), Ri.addKeysSorted(t, e), Ri.endMap(t)
            }
        }! function(t) {
            t[t.NONE = 0] = "NONE", t[t.Schema = 1] = "Schema", t[t.DictionaryBatch = 2] = "DictionaryBatch", t[t.RecordBatch = 3] = "RecordBatch", t[t.Tensor = 4] = "Tensor", t[t.SparseTensor = 5] = "SparseTensor"
        }(xi || (xi = {}));
        class Ui {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsMessage(t, e) {
                return (e || new Ui).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsMessage(t, e) {
                return t.setPosition(t.position() + 4), (e || new Ui).__init(t.readInt32(t.position()) + t.position(), t)
            }
            version() {
                const t = this.bb.__offset(this.bb_pos, 4);
                return t ? this.bb.readInt16(this.bb_pos + t) : Ar.V1
            }
            headerType() {
                const t = this.bb.__offset(this.bb_pos, 6);
                return t ? this.bb.readUint8(this.bb_pos + t) : xi.NONE
            }
            header(t) {
                const e = this.bb.__offset(this.bb_pos, 8);
                return e ? this.bb.__union(t, this.bb_pos + e) : null
            }
            bodyLength() {
                const t = this.bb.__offset(this.bb_pos, 10);
                return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
            }
            customMetadata(t, e) {
                const n = this.bb.__offset(this.bb_pos, 12);
                return n ? (e || new Pr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
            }
            customMetadataLength() {
                const t = this.bb.__offset(this.bb_pos, 12);
                return t ? this.bb.__vector_len(this.bb_pos + t) : 0
            }
            static startMessage(t) {
                t.startObject(5)
            }
            static addVersion(t, e) {
                t.addFieldInt16(0, e, Ar.V1)
            }
            static addHeaderType(t, e) {
                t.addFieldInt8(1, e, xi.NONE)
            }
            static addHeader(t, e) {
                t.addFieldOffset(2, e, 0)
            }
            static addBodyLength(t, e) {
                t.addFieldInt64(3, e, t.createLong(0, 0))
            }
            static addCustomMetadata(t, e) {
                t.addFieldOffset(4, e, 0)
            }
            static createCustomMetadataVector(t, e) {
                t.startVector(4, e.length, 4);
                for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
                return t.endVector()
            }
            static startCustomMetadataVector(t, e) {
                t.startVector(4, e, 4)
            }
            static endMessage(t) {
                return t.endObject()
            }
            static finishMessageBuffer(t, e) {
                t.finish(e)
            }
            static finishSizePrefixedMessageBuffer(t, e) {
                t.finish(e, void 0, !0)
            }
            static createMessage(t, e, n, r, i, a) {
                return Ui.startMessage(t), Ui.addVersion(t, e), Ui.addHeaderType(t, n), Ui.addHeader(t, r), Ui.addBodyLength(t, i), Ui.addCustomMetadata(t, a), Ui.endMessage(t)
            }
        }
        class zi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsNull(t, e) {
                return (e || new zi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsNull(t, e) {
                return t.setPosition(t.position() + 4), (e || new zi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static startNull(t) {
                t.startObject(0)
            }
            static endNull(t) {
                return t.endObject()
            }
            static createNull(t) {
                return zi.startNull(t), zi.endNull(t)
            }
        }
        class ji {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsBinary(t, e) {
                return (e || new ji).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsBinary(t, e) {
                return t.setPosition(t.position() + 4), (e || new ji).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static startBinary(t) {
                t.startObject(0)
            }
            static endBinary(t) {
                return t.endObject()
            }
            static createBinary(t) {
                return ji.startBinary(t), ji.endBinary(t)
            }
        }
        class Vi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsBool(t, e) {
                return (e || new Vi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsBool(t, e) {
                return t.setPosition(t.position() + 4), (e || new Vi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static startBool(t) {
                t.startObject(0)
            }
            static endBool(t) {
                return t.endObject()
            }
            static createBool(t) {
                return Vi.startBool(t), Vi.endBool(t)
            }
        }
        class Wi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsUtf8(t, e) {
                return (e || new Wi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsUtf8(t, e) {
                return t.setPosition(t.position() + 4), (e || new Wi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static startUtf8(t) {
                t.startObject(0)
            }
            static endUtf8(t) {
                return t.endObject()
            }
            static createUtf8(t) {
                return Wi.startUtf8(t), Wi.endUtf8(t)
            }
        }
        class Yi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsList(t, e) {
                return (e || new Yi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsList(t, e) {
                return t.setPosition(t.position() + 4), (e || new Yi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static startList(t) {
                t.startObject(0)
            }
            static endList(t) {
                return t.endObject()
            }
            static createList(t) {
                return Yi.startList(t), Yi.endList(t)
            }
        }
        class Hi {
            constructor() {
                this.bb = null, this.bb_pos = 0
            }
            __init(t, e) {
                return this.bb_pos = t, this.bb = e, this
            }
            static getRootAsStruct_(t, e) {
                return (e || new Hi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static getSizePrefixedRootAsStruct_(t, e) {
                return t.setPosition(t.position() + 4), (e || new Hi).__init(t.readInt32(t.position()) + t.position(), t)
            }
            static startStruct_(t) {
                t.startObject(0)
            }
            static endStruct_(t) {
                return t.endObject()
            }
            static createStruct_(t) {
                return Hi.startStruct_(t), Hi.endStruct_(t)
            }
        }
        var $i = Er;
        const Ki = new class extends ee {
            visit(t, e) {
                return null == t || null == e ? void 0 : super.visit(t, e)
            }
            visitNull(t, e) {
                return zi.startNull(e), zi.endNull(e)
            }
            visitInt(t, e) {
                return Fr.startInt(e), Fr.addBitWidth(e, t.bitWidth), Fr.addIsSigned(e, t.isSigned), Fr.endInt(e)
            }
            visitFloat(t, e) {
                return Ai.startFloatingPoint(e), Ai.addPrecision(e, t.precision), Ai.endFloatingPoint(e)
            }
            visitBinary(t, e) {
                return ji.startBinary(e), ji.endBinary(e)
            }
            visitBool(t, e) {
                return Vi.startBool(e), Vi.endBool(e)
            }
            visitUtf8(t, e) {
                return Wi.startUtf8(e), Wi.endUtf8(e)
            }
            visitDecimal(t, e) {
                return Ci.startDecimal(e), Ci.addScale(e, t.scale), Ci.addPrecision(e, t.precision), Ci.addBitWidth(e, t.bitWidth), Ci.endDecimal(e)
            }
            visitDate(t, e) {
                return Ni.startDate(e), Ni.addUnit(e, t.unit), Ni.endDate(e)
            }
            visitTime(t, e) {
                return Di.startTime(e), Di.addUnit(e, t.unit), Di.addBitWidth(e, t.bitWidth), Di.endTime(e)
            }
            visitTimestamp(t, e) {
                const n = t.timezone && e.createString(t.timezone) || void 0;
                return Mi.startTimestamp(e), Mi.addUnit(e, t.unit), void 0 !== n && Mi.addTimezone(e, n), Mi.endTimestamp(e)
            }
            visitInterval(t, e) {
                return Bi.startInterval(e), Bi.addUnit(e, t.unit), Bi.endInterval(e)
            }
            visitList(t, e) {
                return Yi.startList(e), Yi.endList(e)
            }
            visitStruct(t, e) {
                return Hi.startStruct_(e), Hi.endStruct_(e)
            }
            visitUnion(t, e) {
                Pi.startTypeIdsVector(e, t.typeIds.length);
                const n = Pi.createTypeIdsVector(e, t.typeIds);
                return Pi.startUnion(e), Pi.addMode(e, t.mode), Pi.addTypeIds(e, n), Pi.endUnion(e)
            }
            visitDictionary(t, e) {
                const n = this.visit(t.indices, e);
                return Lr.startDictionaryEncoding(e), Lr.addId(e, new $i(t.id, 0)), Lr.addIsOrdered(e, t.isOrdered), void 0 !== n && Lr.addIndexType(e, n), Lr.endDictionaryEncoding(e)
            }
            visitFixedSizeBinary(t, e) {
                return Fi.startFixedSizeBinary(e), Fi.addByteWidth(e, t.byteWidth), Fi.endFixedSizeBinary(e)
            }
            visitFixedSizeList(t, e) {
                return Li.startFixedSizeList(e), Li.addListSize(e, t.listSize), Li.endFixedSizeList(e)
            }
            visitMap(t, e) {
                return Ri.startMap(e), Ri.addKeysSorted(e, t.keysSorted), Ri.endMap(e)
            }
        };

        function Qi(t) {
            return new aa(t.count, Gi(t.columns), Xi(t.columns))
        }

        function qi(t, e) {
            return (t.children || []).filter(Boolean).map((t => Jn.fromJSON(t, e)))
        }

        function Gi(t) {
            return (t || []).reduce(((t, e) => {
                return [...t, new la(e.count, (n = e.VALIDITY, (n || []).reduce(((t, e) => t + +(0 === e)), 0))), ...Gi(e.children)];
                var n
            }), [])
        }

        function Xi(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            for (let n = -1, r = (t || []).length; ++n < r;) {
                const r = t[n];
                r.VALIDITY && e.push(new sa(e.length, r.VALIDITY.length)), r.TYPE && e.push(new sa(e.length, r.TYPE.length)), r.OFFSET && e.push(new sa(e.length, r.OFFSET.length)), r.DATA && e.push(new sa(e.length, r.DATA.length)), e = Xi(r.children, e)
            }
            return e
        }

        function Ji(t) {
            return new Map(Object.entries(t || {}))
        }

        function Zi(t) {
            return new Bt(t.isSigned, t.bitWidth)
        }

        function ta(t, n) {
            const s = t.type.name;
            switch (s) {
                case "NONE":
                case "null":
                    return new Mt;
                case "binary":
                    return new Lt;
                case "utf8":
                    return new Rt;
                case "bool":
                    return new Ut;
                case "list":
                    return new Ht((n || [])[0]);
                case "struct":
                case "struct_":
                    return new $t(n || [])
            }
            switch (s) {
                case "int": {
                    const e = t.type;
                    return new Bt(e.isSigned, e.bitWidth)
                }
                case "floatingpoint": {
                    const e = t.type;
                    return new Ft(r[e.precision])
                }
                case "decimal": {
                    const e = t.type;
                    return new zt(e.scale, e.precision, e.bitWidth)
                }
                case "date": {
                    const e = t.type;
                    return new jt(i[e.unit])
                }
                case "time": {
                    const e = t.type;
                    return new Vt(a[e.unit], e.bitWidth)
                }
                case "timestamp": {
                    const e = t.type;
                    return new Wt(a[e.unit], e.timezone)
                }
                case "interval": {
                    const e = t.type;
                    return new Yt(o[e.unit])
                }
                case "union": {
                    const r = t.type;
                    return new Kt(e[r.mode], r.typeIds || [], n || [])
                }
                case "fixedsizebinary": {
                    const e = t.type;
                    return new Qt(e.byteWidth)
                }
                case "fixedsizelist": {
                    const e = t.type;
                    return new qt(e.listSize, (n || [])[0])
                }
                case "map": {
                    const e = t.type;
                    return new Gt((n || [])[0], e.keysSorted)
                }
            }
            throw new Error('Unrecognized type: "'.concat(s, '"'))
        }
        var ea = Er,
            na = Br,
            ra = Mr;
        class ia {
            constructor(t, e, n, r) {
                this._version = e, this._headerType = n, this.body = new Uint8Array(0), r && (this._createHeader = () => r), this._bodyLength = "number" === typeof t ? t : t.low
            }
            static fromJSON(e, n) {
                const r = new ia(0, t.V4, n);
                return r._createHeader = function(t, e) {
                    return () => {
                        switch (e) {
                            case s.Schema:
                                return Xn.fromJSON(t);
                            case s.RecordBatch:
                                return aa.fromJSON(t);
                            case s.DictionaryBatch:
                                return oa.fromJSON(t)
                        }
                        throw new Error("Unrecognized Message type: { name: ".concat(s[e], ", type: ").concat(e, " }"))
                    }
                }(e, n), r
            }
            static decode(t) {
                t = new ra(X(t));
                const e = Ui.getRootAsMessage(t),
                    n = e.bodyLength(),
                    r = e.version(),
                    i = e.headerType(),
                    a = new ia(n, r, i);
                return a._createHeader = function(t, e) {
                    return () => {
                        switch (e) {
                            case s.Schema:
                                return Xn.decode(t.header(new Ur));
                            case s.RecordBatch:
                                return aa.decode(t.header(new Ei), t.version());
                            case s.DictionaryBatch:
                                return oa.decode(t.header(new Oi), t.version())
                        }
                        throw new Error("Unrecognized Message type: { name: ".concat(s[e], ", type: ").concat(e, " }"))
                    }
                }(e, i), a
            }
            static encode(e) {
                const n = new na;
                let r = -1;
                return e.isSchema() ? r = Xn.encode(n, e.header()) : e.isRecordBatch() ? r = aa.encode(n, e.header()) : e.isDictionaryBatch() && (r = oa.encode(n, e.header())), Ui.startMessage(n), Ui.addVersion(n, t.V4), Ui.addHeader(n, r), Ui.addHeaderType(n, e.headerType), Ui.addBodyLength(n, new ea(e.bodyLength, 0)), Ui.finishMessageBuffer(n, Ui.endMessage(n)), n.asUint8Array()
            }
            static from(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (e instanceof Xn) return new ia(0, t.V4, s.Schema, e);
                if (e instanceof aa) return new ia(n, t.V4, s.RecordBatch, e);
                if (e instanceof oa) return new ia(n, t.V4, s.DictionaryBatch, e);
                throw new Error("Unrecognized Message header: ".concat(e))
            }
            get type() {
                return this.headerType
            }
            get version() {
                return this._version
            }
            get headerType() {
                return this._headerType
            }
            get bodyLength() {
                return this._bodyLength
            }
            header() {
                return this._createHeader()
            }
            isSchema() {
                return this.headerType === s.Schema
            }
            isRecordBatch() {
                return this.headerType === s.RecordBatch
            }
            isDictionaryBatch() {
                return this.headerType === s.DictionaryBatch
            }
        }
        class aa {
            constructor(t, e, n) {
                this._nodes = e, this._buffers = n, this._length = "number" === typeof t ? t : t.low
            }
            get nodes() {
                return this._nodes
            }
            get length() {
                return this._length
            }
            get buffers() {
                return this._buffers
            }
        }
        class oa {
            constructor(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this._data = t, this._isDelta = n, this._id = "number" === typeof e ? e : e.low
            }
            get id() {
                return this._id
            }
            get data() {
                return this._data
            }
            get isDelta() {
                return this._isDelta
            }
            get length() {
                return this.data.length
            }
            get nodes() {
                return this.data.nodes
            }
            get buffers() {
                return this.data.buffers
            }
        }
        class sa {
            constructor(t, e) {
                this.offset = "number" === typeof t ? t : t.low, this.length = "number" === typeof e ? e : e.low
            }
        }
        class la {
            constructor(t, e) {
                this.length = "number" === typeof t ? t : t.low, this.nullCount = "number" === typeof e ? e : e.low
            }
        }

        function ua(t, e) {
            const n = [];
            for (let r, i = -1, a = -1, o = t.childrenLength(); ++i < o;)(r = t.children(i)) && (n[++a] = Jn.decode(r, e));
            return n
        }

        function ca(t) {
            const e = new Map;
            if (t)
                for (let n, r, i = -1, a = Math.trunc(t.customMetadataLength()); ++i < a;)(n = t.customMetadata(i)) && null != (r = n.key()) && e.set(r, n.value());
            return e
        }

        function da(t) {
            return new Bt(t.isSigned(), t.bitWidth())
        }

        function fa(t, e) {
            const n = t.typeType();
            switch (n) {
                case Dr.NONE:
                case Dr.Null:
                    return new Mt;
                case Dr.Binary:
                    return new Lt;
                case Dr.Utf8:
                    return new Rt;
                case Dr.Bool:
                    return new Ut;
                case Dr.List:
                    return new Ht((e || [])[0]);
                case Dr.Struct_:
                    return new $t(e || [])
            }
            switch (n) {
                case Dr.Int: {
                    const e = t.type(new Fr);
                    return new Bt(e.isSigned(), e.bitWidth())
                }
                case Dr.FloatingPoint: {
                    const e = t.type(new Ai);
                    return new Ft(e.precision())
                }
                case Dr.Decimal: {
                    const e = t.type(new Ci);
                    return new zt(e.scale(), e.precision(), e.bitWidth())
                }
                case Dr.Date: {
                    const e = t.type(new Ni);
                    return new jt(e.unit())
                }
                case Dr.Time: {
                    const e = t.type(new Di);
                    return new Vt(e.unit(), e.bitWidth())
                }
                case Dr.Timestamp: {
                    const e = t.type(new Mi);
                    return new Wt(e.unit(), e.timezone())
                }
                case Dr.Interval: {
                    const e = t.type(new Bi);
                    return new Yt(e.unit())
                }
                case Dr.Union: {
                    const n = t.type(new Pi);
                    return new Kt(n.mode(), n.typeIdsArray() || [], e || [])
                }
                case Dr.FixedSizeBinary: {
                    const e = t.type(new Fi);
                    return new Qt(e.byteWidth())
                }
                case Dr.FixedSizeList: {
                    const n = t.type(new Li);
                    return new qt(n.listSize(), (e || [])[0])
                }
                case Dr.Map: {
                    const n = t.type(new Ri);
                    return new Gt((e || [])[0], n.keysSorted())
                }
            }
            throw new Error('Unrecognized type: "'.concat(Dr[n], '" (').concat(n, ")"))
        }
        Jn.encode = function(t, e) {
            let n = -1,
                r = -1,
                i = -1;
            const a = e.type;
            let o = e.typeId;
            Dt.isDictionary(a) ? (o = a.dictionary.typeId, i = Ki.visit(a, t), r = Ki.visit(a.dictionary, t)) : r = Ki.visit(a, t);
            const s = (a.children || []).map((e => Jn.encode(t, e))),
                l = Rr.createChildrenVector(t, s),
                u = e.metadata && e.metadata.size > 0 ? Rr.createCustomMetadataVector(t, [...e.metadata].map((e => {
                    let [n, r] = e;
                    const i = t.createString("".concat(n)),
                        a = t.createString("".concat(r));
                    return Pr.startKeyValue(t), Pr.addKey(t, i), Pr.addValue(t, a), Pr.endKeyValue(t)
                }))) : -1;
            e.name && (n = t.createString(e.name));
            Rr.startField(t), Rr.addType(t, r), Rr.addTypeType(t, o), Rr.addChildren(t, l), Rr.addNullable(t, !!e.nullable), -1 !== n && Rr.addName(t, n); - 1 !== i && Rr.addDictionary(t, i); - 1 !== u && Rr.addCustomMetadata(t, u);
            return Rr.endField(t)
        }, Jn.decode = function(t, e) {
            let n, r, i, a, o, s;
            e && (s = t.dictionary()) ? e.has(n = s.id().low) ? (a = (a = s.indexType()) ? da(a) : new Pt, o = new Zt(e.get(n), a, n, s.isOrdered()), r = new Jn(t.name(), o, t.nullable(), ca(t))) : (a = (a = s.indexType()) ? da(a) : new Pt, e.set(n, i = fa(t, ua(t, e))), o = new Zt(i, a, n, s.isOrdered()), r = new Jn(t.name(), o, t.nullable(), ca(t))) : (i = fa(t, ua(t, e)), r = new Jn(t.name(), i, t.nullable(), ca(t)));
            return r || null
        }, Jn.fromJSON = function(t, e) {
            let n, r, i, a, o, s;
            return e && (a = t.dictionary) ? e.has(n = a.id) ? (r = (r = a.indexType) ? Zi(r) : new Pt, s = new Zt(e.get(n), r, n, a.isOrdered), i = new Jn(t.name, s, t.nullable, Ji(t.customMetadata))) : (r = (r = a.indexType) ? Zi(r) : new Pt, e.set(n, o = ta(t, qi(t, e))), s = new Zt(o, r, n, a.isOrdered), i = new Jn(t.name, s, t.nullable, Ji(t.customMetadata))) : (o = ta(t, qi(t, e)), i = new Jn(t.name, o, t.nullable, Ji(t.customMetadata))), i || null
        }, Xn.encode = function(t, e) {
            const n = e.fields.map((e => Jn.encode(t, e)));
            Ur.startFieldsVector(t, n.length);
            const r = Ur.createFieldsVector(t, n),
                i = e.metadata && e.metadata.size > 0 ? Ur.createCustomMetadataVector(t, [...e.metadata].map((e => {
                    let [n, r] = e;
                    const i = t.createString("".concat(n)),
                        a = t.createString("".concat(r));
                    return Pr.startKeyValue(t), Pr.addKey(t, i), Pr.addValue(t, a), Pr.endKeyValue(t)
                }))) : -1;
            Ur.startSchema(t), Ur.addFields(t, r), Ur.addEndianness(t, ha ? Cr.Little : Cr.Big), -1 !== i && Ur.addCustomMetadata(t, i);
            return Ur.endSchema(t)
        }, Xn.decode = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
            const n = function(t, e) {
                const n = [];
                for (let r, i = -1, a = -1, o = t.fieldsLength(); ++i < o;)(r = t.fields(i)) && (n[++a] = Jn.decode(r, e));
                return n
            }(t, e);
            return new Xn(n, ca(t), e)
        }, Xn.fromJSON = function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
            return new Xn(function(t, e) {
                return (t.fields || []).filter(Boolean).map((t => Jn.fromJSON(t, e)))
            }(t, e), Ji(t.customMetadata), e)
        }, aa.encode = function(t, e) {
            const n = e.nodes || [],
                r = e.buffers || [];
            Ei.startNodesVector(t, n.length);
            for (const o of n.slice().reverse()) la.encode(t, o);
            const i = t.endVector();
            Ei.startBuffersVector(t, r.length);
            for (const o of r.slice().reverse()) sa.encode(t, o);
            const a = t.endVector();
            return Ei.startRecordBatch(t), Ei.addLength(t, new ea(e.length, 0)), Ei.addNodes(t, i), Ei.addBuffers(t, a), Ei.endRecordBatch(t)
        }, aa.decode = function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.V4;
            if (null !== e.compression()) throw new Error("Record batch compression not implemented");
            return new aa(e.length(), function(t) {
                const e = [];
                for (let n, r = -1, i = -1, a = t.nodesLength(); ++r < a;)(n = t.nodes(r)) && (e[++i] = la.decode(n));
                return e
            }(e), function(e, n) {
                const r = [];
                for (let i, a = -1, o = -1, s = e.buffersLength(); ++a < s;)(i = e.buffers(a)) && (n < t.V4 && (i.bb_pos += 8 * (a + 1)), r[++o] = sa.decode(i));
                return r
            }(e, n))
        }, aa.fromJSON = Qi, oa.encode = function(t, e) {
            const n = aa.encode(t, e.data);
            return Oi.startDictionaryBatch(t), Oi.addId(t, new ea(e.id, 0)), Oi.addIsDelta(t, e.isDelta), Oi.addData(t, n), Oi.endDictionaryBatch(t)
        }, oa.decode = function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.V4;
            return new oa(aa.decode(e.data(), n), e.id(), e.isDelta())
        }, oa.fromJSON = function(t) {
            return new oa(Qi(t.data), t.id, t.isDelta)
        }, la.encode = function(t, e) {
            return Ii.createFieldNode(t, new ea(e.length, 0), new ea(e.nullCount, 0))
        }, la.decode = function(t) {
            return new la(t.length(), t.nullCount())
        }, sa.encode = function(t, e) {
            return ki.createBuffer(t, new ea(e.offset, 0), new ea(e.length, 0))
        }, sa.decode = function(t) {
            return new sa(t.offset(), t.length())
        };
        const ha = (() => {
                const t = new ArrayBuffer(2);
                return new DataView(t).setInt16(0, 256, !0), 256 === new Int16Array(t)[0]
            })(),
            pa = t => "Expected ".concat(s[t], " Message in stream, but was null or length 0."),
            ya = t => "Header pointer of flatbuffer-encoded ".concat(s[t], " Message is null or length 0."),
            ma = (t, e) => "Expected to read ".concat(t, " metadata bytes, but only read ").concat(e, "."),
            ba = (t, e) => "Expected to read ".concat(t, " bytes for message body, but only read ").concat(e, ".");
        class va {
            constructor(t) {
                this.source = t instanceof ni ? t : new ni(t)
            } [Symbol.iterator]() {
                return this
            }
            next() {
                let t;
                return (t = this.readMetadataLength()).done || -1 === t.value && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? Xr : t
            }
            throw (t) {
                return this.source.throw(t)
            }
            return (t) {
                return this.source.return(t)
            }
            readMessage(t) {
                let e;
                if ((e = this.next()).done) return null;
                if (null != t && e.value.headerType !== t) throw new Error(pa(t));
                return e.value
            }
            readMessageBody(t) {
                if (t <= 0) return new Uint8Array(0);
                const e = X(this.source.read(t));
                if (e.byteLength < t) throw new Error(ba(t, e.byteLength));
                return e.byteOffset % 8 === 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
            }
            readSchema() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const e = s.Schema,
                    n = this.readMessage(e),
                    r = null === n || void 0 === n ? void 0 : n.header();
                if (t && !r) throw new Error(ya(e));
                return r
            }
            readMetadataLength() {
                const t = this.source.read(_a),
                    e = t && new Mr(t),
                    n = (null === e || void 0 === e ? void 0 : e.readInt32(0)) || 0;
                return {
                    done: 0 === n,
                    value: n
                }
            }
            readMetadata(t) {
                const e = this.source.read(t);
                if (!e) return Xr;
                if (e.byteLength < t) throw new Error(ma(t, e.byteLength));
                return {
                    done: !1,
                    value: ia.decode(e)
                }
            }
        }
        class ga {
            constructor(t, e) {
                this.source = t instanceof ri ? t : A(t) ? new si(t, e) : new ri(t)
            } [Symbol.asyncIterator]() {
                return this
            }
            next() {
                return F(this, void 0, void 0, (function*() {
                    let t;
                    return (t = yield this.readMetadataLength()).done || -1 === t.value && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? Xr : t
                }))
            }
            throw (t) {
                return F(this, void 0, void 0, (function*() {
                    return yield this.source.throw(t)
                }))
            }
            return (t) {
                return F(this, void 0, void 0, (function*() {
                    return yield this.source.return(t)
                }))
            }
            readMessage(t) {
                return F(this, void 0, void 0, (function*() {
                    let e;
                    if ((e = yield this.next()).done) return null;
                    if (null != t && e.value.headerType !== t) throw new Error(pa(t));
                    return e.value
                }))
            }
            readMessageBody(t) {
                return F(this, void 0, void 0, (function*() {
                    if (t <= 0) return new Uint8Array(0);
                    const e = X(yield this.source.read(t));
                    if (e.byteLength < t) throw new Error(ba(t, e.byteLength));
                    return e.byteOffset % 8 === 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
                }))
            }
            readSchema() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return F(this, void 0, void 0, (function*() {
                    const e = s.Schema,
                        n = yield this.readMessage(e), r = null === n || void 0 === n ? void 0 : n.header();
                    if (t && !r) throw new Error(ya(e));
                    return r
                }))
            }
            readMetadataLength() {
                return F(this, void 0, void 0, (function*() {
                    const t = yield this.source.read(_a), e = t && new Mr(t), n = (null === e || void 0 === e ? void 0 : e.readInt32(0)) || 0;
                    return {
                        done: 0 === n,
                        value: n
                    }
                }))
            }
            readMetadata(t) {
                return F(this, void 0, void 0, (function*() {
                    const e = yield this.source.read(t);
                    if (!e) return Xr;
                    if (e.byteLength < t) throw new Error(ma(t, e.byteLength));
                    return {
                        done: !1,
                        value: ia.decode(e)
                    }
                }))
            }
        }
        class wa extends va {
            constructor(t) {
                super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Jr ? t : new Jr(t)
            }
            next() {
                const {
                    _json: t
                } = this;
                if (!this._schema) {
                    this._schema = !0;
                    return {
                        done: !1,
                        value: ia.fromJSON(t.schema, s.Schema)
                    }
                }
                if (this._dictionaryIndex < t.dictionaries.length) {
                    const e = t.dictionaries[this._dictionaryIndex++];
                    this._body = e.data.columns;
                    return {
                        done: !1,
                        value: ia.fromJSON(e, s.DictionaryBatch)
                    }
                }
                if (this._batchIndex < t.batches.length) {
                    const e = t.batches[this._batchIndex++];
                    this._body = e.columns;
                    return {
                        done: !1,
                        value: ia.fromJSON(e, s.RecordBatch)
                    }
                }
                return this._body = [], Xr
            }
            readMessageBody(t) {
                return function t(e) {
                    return (e || []).reduce(((e, n) => [...e, ...n.VALIDITY && [n.VALIDITY] || [], ...n.TYPE && [n.TYPE] || [], ...n.OFFSET && [n.OFFSET] || [], ...n.DATA && [n.DATA] || [], ...t(n.children)]), [])
                }(this._body)
            }
            readMessage(t) {
                let e;
                if ((e = this.next()).done) return null;
                if (null != t && e.value.headerType !== t) throw new Error(pa(t));
                return e.value
            }
            readSchema() {
                const t = s.Schema,
                    e = this.readMessage(t),
                    n = null === e || void 0 === e ? void 0 : e.header();
                if (!e || !n) throw new Error(ya(t));
                return n
            }
        }
        const _a = 4,
            Sa = "ARROW1",
            xa = new Uint8Array(6);
        for (let n = 0; n < 6; n += 1) xa[n] = Sa.codePointAt(n);

        function Ta(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            for (let n = -1, r = xa.length; ++n < r;)
                if (xa[n] !== t[e + n]) return !1;
            return !0
        }
        const ka = xa.length,
            Ia = ka + _a,
            Ea = 2 * ka + _a;
        class Oa extends Zr {
            constructor(t) {
                super(), this._impl = t
            }
            get closed() {
                return this._impl.closed
            }
            get schema() {
                return this._impl.schema
            }
            get autoDestroy() {
                return this._impl.autoDestroy
            }
            get dictionaries() {
                return this._impl.dictionaries
            }
            get numDictionaries() {
                return this._impl.numDictionaries
            }
            get numRecordBatches() {
                return this._impl.numRecordBatches
            }
            get footer() {
                return this._impl.isFile() ? this._impl.footer : null
            }
            isSync() {
                return this._impl.isSync()
            }
            isAsync() {
                return this._impl.isAsync()
            }
            isFile() {
                return this._impl.isFile()
            }
            isStream() {
                return this._impl.isStream()
            }
            next() {
                return this._impl.next()
            }
            throw (t) {
                return this._impl.throw(t)
            }
            return (t) {
                return this._impl.return(t)
            }
            cancel() {
                return this._impl.cancel()
            }
            reset(t) {
                return this._impl.reset(t), this._DOMStream = void 0, this._nodeStream = void 0, this
            }
            open(t) {
                const e = this._impl.open(t);
                return T(e) ? e.then((() => this)) : this
            }
            readRecordBatch(t) {
                return this._impl.isFile() ? this._impl.readRecordBatch(t) : null
            } [Symbol.iterator]() {
                return this._impl[Symbol.iterator]()
            } [Symbol.asyncIterator]() {
                return this._impl[Symbol.asyncIterator]()
            }
            toDOMStream() {
                return Kr.toDOMStream(this.isSync() ? {
                    [Symbol.iterator]: () => this
                } : {
                    [Symbol.asyncIterator]: () => this
                })
            }
            toNodeStream() {
                return Kr.toNodeStream(this.isSync() ? {
                    [Symbol.iterator]: () => this
                } : {
                    [Symbol.asyncIterator]: () => this
                }, {
                    objectMode: !0
                })
            }
            static throughNode(t) {
                throw new Error('"throughNode" not available in this environment')
            }
            static throughDOM(t, e) {
                throw new Error('"throughDOM" not available in this environment')
            }
            static from(t) {
                return t instanceof Oa ? t : E(t) ? function(t) {
                    return new Aa(new Ra(t))
                }(t) : A(t) ? function(t) {
                    return F(this, void 0, void 0, (function*() {
                        const {
                            size: e
                        } = yield t.stat(), n = new si(t, e);
                        return e >= Ea && Ta(yield n.readAt(0, ka + 7 & -8)) ? new Da(new La(n)) : new Ca(new Pa(n))
                    }))
                }(t) : T(t) ? (() => F(this, void 0, void 0, (function*() {
                    return yield Oa.from(yield t)
                })))() : C(t) || D(t) || M(t) || I(t) ? function(t) {
                    return F(this, void 0, void 0, (function*() {
                        const e = yield t.peek(ka + 7 & -8);
                        return e && e.byteLength >= 4 ? Ta(e) ? new Na(new Fa(yield t.read())) : new Ca(new Pa(t)) : new Ca(new Pa(function() {
                            return U(this, arguments, (function*() {}))
                        }()))
                    }))
                }(new ri(t)) : function(t) {
                    const e = t.peek(ka + 7 & -8);
                    return e && e.byteLength >= 4 ? Ta(e) ? new Na(new Fa(t.read())) : new Aa(new Ba(t)) : new Aa(new Ba(function*() {}()))
                }(new ni(t))
            }
            static readAll(t) {
                return t instanceof Oa ? t.isSync() ? za(t) : ja(t) : E(t) || ArrayBuffer.isView(t) || k(t) || O(t) ? za(t) : ja(t)
            }
        }
        class Aa extends Oa {
            constructor(t) {
                super(t), this._impl = t
            }
            readAll() {
                return [...this]
            } [Symbol.iterator]() {
                return this._impl[Symbol.iterator]()
            } [Symbol.asyncIterator]() {
                return U(this, arguments, (function*() {
                    yield R(yield* z(j(this[Symbol.iterator]())))
                }))
            }
        }
        class Ca extends Oa {
            constructor(t) {
                super(t), this._impl = t
            }
            readAll() {
                var t, e;
                return F(this, void 0, void 0, (function*() {
                    const n = new Array;
                    try {
                        for (var r, i = j(this); !(r = yield i.next()).done;) {
                            const t = r.value;
                            n.push(t)
                        }
                    } catch (a) {
                        t = {
                            error: a
                        }
                    } finally {
                        try {
                            r && !r.done && (e = i.return) && (yield e.call(i))
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return n
                }))
            } [Symbol.iterator]() {
                throw new Error("AsyncRecordBatchStreamReader is not Iterable")
            } [Symbol.asyncIterator]() {
                return this._impl[Symbol.asyncIterator]()
            }
        }
        class Na extends Aa {
            constructor(t) {
                super(t), this._impl = t
            }
        }
        class Da extends Ca {
            constructor(t) {
                super(t), this._impl = t
            }
        }
        class Ma {
            constructor() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map;
                this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t
            }
            get numDictionaries() {
                return this._dictionaryIndex
            }
            get numRecordBatches() {
                return this._recordBatchIndex
            }
            isSync() {
                return !1
            }
            isAsync() {
                return !1
            }
            isFile() {
                return !1
            }
            isStream() {
                return !1
            }
            reset(t) {
                return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = t, this.dictionaries = new Map, this
            }
            _loadRecordBatch(t, e) {
                const n = this._loadVectors(t, e, this.schema.fields),
                    r = Gn({
                        type: new $t(this.schema.fields),
                        length: t.length,
                        children: n
                    });
                return new yr(this.schema, r)
            }
            _loadDictionaryBatch(t, e) {
                const {
                    id: n,
                    isDelta: r
                } = t, {
                    dictionaries: i,
                    schema: a
                } = this, o = i.get(n);
                if (r || !o) {
                    const i = a.dictionaries.get(n),
                        s = this._loadVectors(t.data, e, [i]);
                    return (o && r ? o.concat(new $n(s)) : new $n(s)).memoize()
                }
                return o.memoize()
            }
            _loadVectors(t, e, n) {
                return new pi(e, t.nodes, t.buffers, this.dictionaries).visitMany(n)
            }
        }
        class Ba extends Ma {
            constructor(t, e) {
                super(e), this._reader = E(t) ? new wa(this._handle = t) : new va(this._handle = t)
            }
            isSync() {
                return !0
            }
            isStream() {
                return !0
            } [Symbol.iterator]() {
                return this
            }
            cancel() {
                !this.closed && (this.closed = !0) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null)
            }
            open(t) {
                return this.closed || (this.autoDestroy = Ua(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this
            }
            throw (t) {
                return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : Xr
            }
            return (t) {
                return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : Xr
            }
            next() {
                if (this.closed) return Xr;
                let t;
                const {
                    _reader: e
                } = this;
                for (; t = this._readNextMessageAndValidate();)
                    if (t.isSchema()) this.reset(t.header());
                    else {
                        if (t.isRecordBatch()) {
                            this._recordBatchIndex++;
                            const n = t.header(),
                                r = e.readMessageBody(t.bodyLength);
                            return {
                                done: !1,
                                value: this._loadRecordBatch(n, r)
                            }
                        }
                        if (t.isDictionaryBatch()) {
                            this._dictionaryIndex++;
                            const n = t.header(),
                                r = e.readMessageBody(t.bodyLength),
                                i = this._loadDictionaryBatch(n, r);
                            this.dictionaries.set(n.id, i)
                        }
                    } return this.schema && 0 === this._recordBatchIndex ? (this._recordBatchIndex++, {
                    done: !1,
                    value: new vr(this.schema)
                }) : this.return()
            }
            _readNextMessageAndValidate(t) {
                return this._reader.readMessage(t)
            }
        }
        class Pa extends Ma {
            constructor(t, e) {
                super(e), this._reader = new ga(this._handle = t)
            }
            isAsync() {
                return !0
            }
            isStream() {
                return !0
            } [Symbol.asyncIterator]() {
                return this
            }
            cancel() {
                return F(this, void 0, void 0, (function*() {
                    !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null)
                }))
            }
            open(t) {
                return F(this, void 0, void 0, (function*() {
                    return this.closed || (this.autoDestroy = Ua(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this
                }))
            }
            throw (t) {
                return F(this, void 0, void 0, (function*() {
                    return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t): Xr
                }))
            }
            return (t) {
                return F(this, void 0, void 0, (function*() {
                    return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t): Xr
                }))
            }
            next() {
                return F(this, void 0, void 0, (function*() {
                    if (this.closed) return Xr;
                    let t;
                    const {
                        _reader: e
                    } = this;
                    for (; t = yield this._readNextMessageAndValidate();)
                        if (t.isSchema()) yield this.reset(t.header());
                        else {
                            if (t.isRecordBatch()) {
                                this._recordBatchIndex++;
                                const n = t.header(),
                                    r = yield e.readMessageBody(t.bodyLength);
                                return {
                                    done: !1,
                                    value: this._loadRecordBatch(n, r)
                                }
                            }
                            if (t.isDictionaryBatch()) {
                                this._dictionaryIndex++;
                                const n = t.header(),
                                    r = yield e.readMessageBody(t.bodyLength), i = this._loadDictionaryBatch(n, r);
                                this.dictionaries.set(n.id, i)
                            }
                        } return this.schema && 0 === this._recordBatchIndex ? (this._recordBatchIndex++, {
                        done: !1,
                        value: new vr(this.schema)
                    }) : yield this.return()
                }))
            }
            _readNextMessageAndValidate(t) {
                return F(this, void 0, void 0, (function*() {
                    return yield this._reader.readMessage(t)
                }))
            }
        }
        class Fa extends Ba {
            constructor(t, e) {
                super(t instanceof oi ? t : new oi(t), e)
            }
            get footer() {
                return this._footer
            }
            get numDictionaries() {
                return this._footer ? this._footer.numDictionaries : 0
            }
            get numRecordBatches() {
                return this._footer ? this._footer.numRecordBatches : 0
            }
            isSync() {
                return !0
            }
            isFile() {
                return !0
            }
            open(t) {
                if (!this.closed && !this._footer) {
                    this.schema = (this._footer = this._readFooter()).schema;
                    for (const t of this._footer.dictionaryBatches()) t && this._readDictionaryBatch(this._dictionaryIndex++)
                }
                return super.open(t)
            }
            readRecordBatch(t) {
                var e;
                if (this.closed) return null;
                this._footer || this.open();
                const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getRecordBatch(t);
                if (n && this._handle.seek(n.offset)) {
                    const t = this._reader.readMessage(s.RecordBatch);
                    if (null === t || void 0 === t ? void 0 : t.isRecordBatch()) {
                        const e = t.header(),
                            n = this._reader.readMessageBody(t.bodyLength);
                        return this._loadRecordBatch(e, n)
                    }
                }
                return null
            }
            _readDictionaryBatch(t) {
                var e;
                const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getDictionaryBatch(t);
                if (n && this._handle.seek(n.offset)) {
                    const t = this._reader.readMessage(s.DictionaryBatch);
                    if (null === t || void 0 === t ? void 0 : t.isDictionaryBatch()) {
                        const e = t.header(),
                            n = this._reader.readMessageBody(t.bodyLength),
                            r = this._loadDictionaryBatch(e, n);
                        this.dictionaries.set(e.id, r)
                    }
                }
            }
            _readFooter() {
                const {
                    _handle: t
                } = this, e = t.size - Ia, n = t.readInt32(e), r = t.readAt(e - n, n);
                return Yr.decode(r)
            }
            _readNextMessageAndValidate(t) {
                var e;
                if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
                    const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getRecordBatch(this._recordBatchIndex);
                    if (n && this._handle.seek(n.offset)) return this._reader.readMessage(t)
                }
                return null
            }
        }
        class La extends Pa {
            constructor(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                const i = "number" !== typeof n[0] ? n.shift() : void 0,
                    a = n[0] instanceof Map ? n.shift() : void 0;
                super(t instanceof si ? t : new si(t, i), a)
            }
            get footer() {
                return this._footer
            }
            get numDictionaries() {
                return this._footer ? this._footer.numDictionaries : 0
            }
            get numRecordBatches() {
                return this._footer ? this._footer.numRecordBatches : 0
            }
            isFile() {
                return !0
            }
            isAsync() {
                return !0
            }
            open(t) {
                const e = Object.create(null, {
                    open: {
                        get: () => super.open
                    }
                });
                return F(this, void 0, void 0, (function*() {
                    if (!this.closed && !this._footer) {
                        this.schema = (this._footer = yield this._readFooter()).schema;
                        for (const t of this._footer.dictionaryBatches()) t && (yield this._readDictionaryBatch(this._dictionaryIndex++))
                    }
                    return yield e.open.call(this, t)
                }))
            }
            readRecordBatch(t) {
                var e;
                return F(this, void 0, void 0, (function*() {
                    if (this.closed) return null;
                    this._footer || (yield this.open());
                    const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getRecordBatch(t);
                    if (n && (yield this._handle.seek(n.offset))) {
                        const t = yield this._reader.readMessage(s.RecordBatch);
                        if (null === t || void 0 === t ? void 0 : t.isRecordBatch()) {
                            const e = t.header(),
                                n = yield this._reader.readMessageBody(t.bodyLength);
                            return this._loadRecordBatch(e, n)
                        }
                    }
                    return null
                }))
            }
            _readDictionaryBatch(t) {
                var e;
                return F(this, void 0, void 0, (function*() {
                    const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getDictionaryBatch(t);
                    if (n && (yield this._handle.seek(n.offset))) {
                        const t = yield this._reader.readMessage(s.DictionaryBatch);
                        if (null === t || void 0 === t ? void 0 : t.isDictionaryBatch()) {
                            const e = t.header(),
                                n = yield this._reader.readMessageBody(t.bodyLength), r = this._loadDictionaryBatch(e, n);
                            this.dictionaries.set(e.id, r)
                        }
                    }
                }))
            }
            _readFooter() {
                return F(this, void 0, void 0, (function*() {
                    const {
                        _handle: t
                    } = this;
                    t._pending && (yield t._pending);
                    const e = t.size - Ia,
                        n = yield t.readInt32(e), r = yield t.readAt(e - n, n);
                    return Yr.decode(r)
                }))
            }
            _readNextMessageAndValidate(t) {
                return F(this, void 0, void 0, (function*() {
                    if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
                        const e = this._footer.getRecordBatch(this._recordBatchIndex);
                        if (e && (yield this._handle.seek(e.offset))) return yield this._reader.readMessage(t)
                    }
                    return null
                }))
            }
        }
        class Ra extends Ba {
            constructor(t, e) {
                super(t, e)
            }
            _loadVectors(t, e, n) {
                return new yi(e, t.nodes, t.buffers, this.dictionaries).visitMany(n)
            }
        }

        function Ua(t, e) {
            return e && "boolean" === typeof e.autoDestroy ? e.autoDestroy : t.autoDestroy
        }

        function* za(t) {
            const e = Oa.from(t);
            try {
                if (!e.open({
                        autoDestroy: !1
                    }).closed)
                    do {
                        yield e
                    } while (!e.reset().open().closed)
            } finally {
                e.cancel()
            }
        }

        function ja(t) {
            return U(this, arguments, (function*() {
                const e = yield R(Oa.from(t));
                try {
                    if (!(yield R(e.open({
                            autoDestroy: !1
                        }))).closed)
                        do {
                            yield yield R(e)
                        } while (!(yield R(e.reset().open())).closed)
                } finally {
                    yield R(e.cancel())
                }
            }))
        }
        class Va extends ee {
            constructor() {
                super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = []
            }
            static assemble() {
                const t = e => e.flatMap((e => Array.isArray(e) ? t(e) : e instanceof yr ? e.data.children : e.data)),
                    e = new Va;
                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return e.visitMany(t(r)), e
            }
            visit(t) {
                if (t instanceof $n) return this.visitMany(t.data), this;
                const {
                    type: e
                } = t;
                if (!Dt.isDictionary(e)) {
                    const {
                        length: n,
                        nullCount: r
                    } = t;
                    if (n > 2147483647) throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
                    Dt.isNull(e) || Wa.call(this, r <= 0 ? new Uint8Array(0) : kn(t.offset, n, t.nullBitmap)), this.nodes.push(new la(n, r))
                }
                return super.visit(t)
            }
            visitNull(t) {
                return this
            }
            visitDictionary(t) {
                return this.visit(t.clone(t.type.indices))
            }
            get nodes() {
                return this._nodes
            }
            get buffers() {
                return this._buffers
            }
            get byteLength() {
                return this._byteLength
            }
            get bufferRegions() {
                return this._bufferRegions
            }
        }

        function Wa(t) {
            const e = t.byteLength + 7 & -8;
            return this.buffers.push(t), this.bufferRegions.push(new sa(this._byteLength, e)), this._byteLength += e, this
        }

        function Ya(t) {
            return Wa.call(this, t.values.subarray(0, t.length * t.stride))
        }

        function Ha(t) {
            const {
                length: e,
                values: n,
                valueOffsets: r
            } = t, i = r[0], a = r[e], o = Math.min(a - i, n.byteLength - i);
            return Wa.call(this, et(-r[0], e, r)), Wa.call(this, n.subarray(i, i + o)), this
        }

        function $a(t) {
            const {
                length: e,
                valueOffsets: n
            } = t;
            return n && Wa.call(this, et(n[0], e, n)), this.visit(t.children[0])
        }

        function Ka(t) {
            return this.visitMany(t.type.children.map(((e, n) => t.children[n])).filter(Boolean))[0]
        }
        Va.prototype.visitBool = function(t) {
            let e;
            return t.nullCount >= t.length ? Wa.call(this, new Uint8Array(0)) : (e = t.values) instanceof Uint8Array ? Wa.call(this, kn(t.offset, t.length, e)) : Wa.call(this, In(t.values))
        }, Va.prototype.visitInt = Ya, Va.prototype.visitFloat = Ya, Va.prototype.visitUtf8 = Ha, Va.prototype.visitBinary = Ha, Va.prototype.visitFixedSizeBinary = Ya, Va.prototype.visitDate = Ya, Va.prototype.visitTimestamp = Ya, Va.prototype.visitTime = Ya, Va.prototype.visitDecimal = Ya, Va.prototype.visitList = $a, Va.prototype.visitStruct = Ka, Va.prototype.visitUnion = function(t) {
            const {
                type: n,
                length: r,
                typeIds: i,
                valueOffsets: a
            } = t;
            if (Wa.call(this, i), n.mode === e.Sparse) return Ka.call(this, t);
            if (n.mode === e.Dense) {
                if (t.offset <= 0) return Wa.call(this, a), Ka.call(this, t); {
                    const e = i.reduce(((t, e) => Math.max(t, e)), i[0]),
                        o = new Int32Array(e + 1),
                        s = new Int32Array(e + 1).fill(-1),
                        l = new Int32Array(r),
                        u = et(-a[0], r, a);
                    for (let t, n, a = -1; ++a < r;) - 1 === (n = s[t = i[a]]) && (n = s[t] = u[t]), l[a] = u[a] - n, ++o[t];
                    Wa.call(this, l);
                    for (let i, a = -1, c = n.children.length; ++a < c;)
                        if (i = t.children[a]) {
                            const t = n.typeIds[a],
                                e = Math.min(r, o[t]);
                            this.visit(i.slice(s[t], e))
                        }
                }
            }
            return this
        }, Va.prototype.visitInterval = Ya, Va.prototype.visitFixedSizeList = $a, Va.prototype.visitMap = $a;
        class Qa extends Zr {
            constructor(t) {
                super(), this._position = 0, this._started = !1, this._sink = new ei, this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = new Map, x(t) || (t = {
                    autoDestroy: !0,
                    writeLegacyIpcFormat: !1
                }), this._autoDestroy = "boolean" !== typeof t.autoDestroy || t.autoDestroy, this._writeLegacyIpcFormat = "boolean" === typeof t.writeLegacyIpcFormat && t.writeLegacyIpcFormat
            }
            static throughNode(t) {
                throw new Error('"throughNode" not available in this environment')
            }
            static throughDOM(t, e) {
                throw new Error('"throughDOM" not available in this environment')
            }
            toString() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return this._sink.toString(t)
            }
            toUint8Array() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return this._sink.toUint8Array(t)
            }
            writeAll(t) {
                return T(t) ? t.then((t => this.writeAll(t))) : I(t) ? Ja(this, t) : Xa(this, t)
            }
            get closed() {
                return this._sink.closed
            } [Symbol.asyncIterator]() {
                return this._sink[Symbol.asyncIterator]()
            }
            toDOMStream(t) {
                return this._sink.toDOMStream(t)
            }
            toNodeStream(t) {
                return this._sink.toNodeStream(t)
            }
            close() {
                return this.reset()._sink.close()
            }
            abort(t) {
                return this.reset()._sink.abort(t)
            }
            finish() {
                return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this
            }
            reset() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._sink,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                var n;
                return t === this._sink || t instanceof ei ? this._sink = t : (this._sink = new ei, t && (x(n = t) && S(n.abort) && S(n.getWriter) && !N(n)) ? this.toDOMStream({
                    type: "bytes"
                }).pipeTo(t) : t && (t => x(t) && S(t.end) && S(t.write) && _(t.writable) && !N(t))(t) && this.toNodeStream({
                    objectMode: !1
                }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = new Map, e && fr(e, this._schema) || (null == e ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this
            }
            write(t) {
                let e = null;
                if (!this._sink) throw new Error("RecordBatchWriter is closed");
                if (null == t) return this.finish() && void 0;
                if (t instanceof _r && !(e = t.schema)) return this.finish() && void 0;
                if (t instanceof yr && !(e = t.schema)) return this.finish() && void 0;
                if (e && !fr(e, this._schema)) {
                    if (this._started && this._autoDestroy) return this.close();
                    this.reset(this._sink, e)
                }
                t instanceof yr ? t instanceof vr || this._writeRecordBatch(t) : t instanceof _r ? this.writeAll(t.batches) : k(t) && this.writeAll(t)
            }
            _writeMessage(t) {
                const e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8) - 1,
                    n = ia.encode(t),
                    r = n.byteLength,
                    i = this._writeLegacyIpcFormat ? 4 : 8,
                    a = r + i + e & ~e,
                    o = a - r - i;
                return t.headerType === s.RecordBatch ? this._recordBatchBlocks.push(new $r(a, t.bodyLength, this._position)) : t.headerType === s.DictionaryBatch && this._dictionaryBlocks.push(new $r(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - i)), r > 0 && this._write(n), this._writePadding(o)
            }
            _write(t) {
                if (this._started) {
                    const e = X(t);
                    e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength)
                }
                return this
            }
            _writeSchema(t) {
                return this._writeMessage(ia.from(t))
            }
            _writeFooter(t) {
                return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0))
            }
            _writeMagic() {
                return this._write(xa)
            }
            _writePadding(t) {
                return t > 0 ? this._write(new Uint8Array(t)) : this
            }
            _writeRecordBatch(t) {
                const {
                    byteLength: e,
                    nodes: n,
                    bufferRegions: r,
                    buffers: i
                } = Va.assemble(t), a = new aa(t.numRows, n, r), o = ia.from(a, e);
                return this._writeDictionaries(t)._writeMessage(o)._writeBodyBuffers(i)
            }
            _writeDictionaryBatch(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
                const {
                    byteLength: r,
                    nodes: i,
                    bufferRegions: a,
                    buffers: o
                } = Va.assemble(new $n([t])), s = new aa(t.length, i, a), l = new oa(s, e, n), u = ia.from(l, r);
                return this._writeMessage(u)._writeBodyBuffers(o)
            }
            _writeBodyBuffers(t) {
                let e, n, r;
                for (let i = -1, a = t.length; ++i < a;)(e = t[i]) && (n = e.byteLength) > 0 && (this._write(e), (r = (n + 7 & -8) - n) > 0 && this._writePadding(r));
                return this
            }
            _writeDictionaries(t) {
                for (let [e, n] of t.dictionaries) {
                    let t = this._dictionaryDeltaOffsets.get(e) || 0;
                    if (0 === t || (n = null === n || void 0 === n ? void 0 : n.slice(t)).length > 0)
                        for (const r of n.data) this._writeDictionaryBatch(r, e, t > 0), t += r.length
                }
                return this
            }
        }
        class qa extends Qa {
            static writeAll(t, e) {
                const n = new qa(e);
                return T(t) ? t.then((t => n.writeAll(t))) : I(t) ? Ja(n, t) : Xa(n, t)
            }
        }
        class Ga extends Qa {
            static writeAll(t) {
                const e = new Ga;
                return T(t) ? t.then((t => e.writeAll(t))) : I(t) ? Ja(e, t) : Xa(e, t)
            }
            constructor() {
                super(), this._autoDestroy = !0
            }
            _writeSchema(t) {
                return this._writeMagic()._writePadding(2)
            }
            _writeFooter(e) {
                const n = Yr.encode(new Yr(e, t.V4, this._recordBatchBlocks, this._dictionaryBlocks));
                return super._writeFooter(e)._write(n)._write(Int32Array.of(n.byteLength))._writeMagic()
            }
        }

        function Xa(t, e) {
            let n = e;
            e instanceof _r && (n = e.batches, t.reset(void 0, e.schema));
            for (const r of n) t.write(r);
            return t.finish()
        }

        function Ja(t, e) {
            var n, r, i, a;
            return F(this, void 0, void 0, (function*() {
                try {
                    for (n = j(e); !(r = yield n.next()).done;) {
                        const e = r.value;
                        t.write(e)
                    }
                } catch (o) {
                    i = {
                        error: o
                    }
                } finally {
                    try {
                        r && !r.done && (a = n.return) && (yield a.call(n))
                    } finally {
                        if (i) throw i.error
                    }
                }
                return t.finish()
            }))
        }

        function Za(t) {
            const e = Oa.from(t);
            return T(e) ? e.then((t => Za(t))) : e.isAsync() ? e.readAll().then((t => new _r(t))) : new _r(e.readAll())
        }

        function to(t) {
            return ("stream" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "stream") ? qa : Ga).writeAll(t).toUint8Array(!0)
        }
        var eo, no = function() {
                function t(t, e, n, r) {
                    var i = this;
                    this.getCell = function(t, e) {
                        var n = t < i.headerRows && e < i.headerColumns,
                            r = t >= i.headerRows && e < i.headerColumns,
                            a = t < i.headerRows && e >= i.headerColumns;
                        if (n) {
                            var o = ["blank"];
                            return e > 0 && o.push("level" + t), {
                                type: "blank",
                                classNames: o.join(" "),
                                content: ""
                            }
                        }
                        if (a) return {
                            type: "columns",
                            classNames: (o = ["col_heading", "level" + t, "col" + (l = e - i.headerColumns)]).join(" "),
                            content: i.getContent(i.columnsTable, l, t)
                        };
                        if (r) {
                            o = ["row_heading", "level" + e, "row" + (s = t - i.headerRows)];
                            return {
                                type: "index",
                                id: "T_".concat(i.uuid, "level").concat(e, "_row").concat(s),
                                classNames: o.join(" "),
                                content: i.getContent(i.indexTable, s, e)
                            }
                        }
                        o = ["data", "row" + (s = t - i.headerRows), "col" + (l = e - i.headerColumns)];
                        var s, l, u = i.styler ? i.getContent(i.styler.displayValuesTable, s, l) : i.getContent(i.dataTable, s, l);
                        return {
                            type: "data",
                            id: "T_".concat(i.uuid, "row").concat(s, "_col").concat(l),
                            classNames: o.join(" "),
                            content: u
                        }
                    }, this.getContent = function(t, e, n) {
                        var r = t.getChildAt(n);
                        return null === r ? "" : i.getColumnTypeId(t, n) === l.Timestamp ? i.nanosToDate(r.get(e)) : r.get(e)
                    }, this.dataTable = Za(t), this.indexTable = Za(e), this.columnsTable = Za(n), this.styler = r ? {
                        caption: r.caption,
                        displayValuesTable: Za(r.displayValues),
                        styles: r.styles,
                        uuid: r.uuid
                    } : void 0
                }
                return Object.defineProperty(t.prototype, "rows", {
                    get: function() {
                        return this.indexTable.numRows + this.columnsTable.numCols
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "columns", {
                    get: function() {
                        return this.indexTable.numCols + this.columnsTable.numRows
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "headerRows", {
                    get: function() {
                        return this.rows - this.dataRows
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "headerColumns", {
                    get: function() {
                        return this.columns - this.dataColumns
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "dataRows", {
                    get: function() {
                        return this.dataTable.numRows
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "dataColumns", {
                    get: function() {
                        return this.dataTable.numCols
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "uuid", {
                    get: function() {
                        return this.styler && this.styler.uuid
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "caption", {
                    get: function() {
                        return this.styler && this.styler.caption
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "styles", {
                    get: function() {
                        return this.styler && this.styler.styles
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "table", {
                    get: function() {
                        return this.dataTable
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "index", {
                    get: function() {
                        return this.indexTable
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "columnTable", {
                    get: function() {
                        return this.columnsTable
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.serialize = function() {
                    return {
                        data: to(this.dataTable),
                        index: to(this.indexTable),
                        columns: to(this.columnsTable)
                    }
                }, t.prototype.getColumnTypeId = function(t, e) {
                    return t.schema.fields[e].type.typeId
                }, t.prototype.nanosToDate = function(t) {
                    return new Date(t / 1e6)
                }, t
            }(),
            ro = function() {
                return ro = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }, ro.apply(this, arguments)
            };
        ! function(t) {
            t.COMPONENT_READY = "streamlit:componentReady", t.SET_COMPONENT_VALUE = "streamlit:setComponentValue", t.SET_FRAME_HEIGHT = "streamlit:setFrameHeight"
        }(eo || (eo = {}));
        var io = function() {
                function t() {}
                return t.API_VERSION = 1, t.RENDER_EVENT = "streamlit:render", t.events = new EventTarget, t.registeredMessageListener = !1, t.setComponentReady = function() {
                    t.registeredMessageListener || (window.addEventListener("message", t.onMessageEvent), t.registeredMessageListener = !0), t.sendBackMsg(eo.COMPONENT_READY, {
                        apiVersion: t.API_VERSION
                    })
                }, t.setFrameHeight = function(e) {
                    void 0 === e && (e = document.body.scrollHeight), e !== t.lastFrameHeight && (t.lastFrameHeight = e, t.sendBackMsg(eo.SET_FRAME_HEIGHT, {
                        height: e
                    }))
                }, t.setComponentValue = function(e) {
                    var n;
                    e instanceof no ? (n = "dataframe", e = e.serialize()) : ! function(t) {
                        var e = !1;
                        try {
                            e = t instanceof BigInt64Array || t instanceof BigUint64Array
                        } catch (n) {}
                        return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array || e
                    }(e) ? e instanceof ArrayBuffer ? (n = "bytes", e = new Uint8Array(e)) : n = "json" : (n = "bytes", e = new Uint8Array(e.buffer)), t.sendBackMsg(eo.SET_COMPONENT_VALUE, {
                        value: e,
                        dataType: n
                    })
                }, t.onMessageEvent = function(e) {
                    if (e.data.type === t.RENDER_EVENT) t.onRenderMessage(e.data)
                }, t.onRenderMessage = function(e) {
                    var n = e.args;
                    null == n && (console.error("Got null args in onRenderMessage. This should never happen"), n = {});
                    var r = e.dfs && e.dfs.length > 0 ? t.argsDataframeToObject(e.dfs) : {};
                    n = ro(ro({}, n), r);
                    var i = Boolean(e.disabled),
                        a = e.theme;
                    a && ao(a);
                    var o = {
                            disabled: i,
                            args: n,
                            theme: a
                        },
                        s = new CustomEvent(t.RENDER_EVENT, {
                            detail: o
                        });
                    t.events.dispatchEvent(s)
                }, t.argsDataframeToObject = function(e) {
                    var n = e.map((function(e) {
                        var n = e.key,
                            r = e.value;
                        return [n, t.toArrowTable(r)]
                    }));
                    return Object.fromEntries(n)
                }, t.toArrowTable = function(t) {
                    var e, n = (e = t.data).data,
                        r = e.index,
                        i = e.columns,
                        a = e.styler;
                    return new no(n, r, i, a)
                }, t.sendBackMsg = function(t, e) {
                    window.parent.postMessage(ro({
                        isStreamlitMessage: !0,
                        type: t
                    }, e), "*")
                }, t
            }(),
            ao = function(t) {
                var e = document.createElement("style");
                document.head.appendChild(e), e.innerHTML = "\n    :root {\n      --primary-color: ".concat(t.primaryColor, ";\n      --background-color: ").concat(t.backgroundColor, ";\n      --secondary-background-color: ").concat(t.secondaryBackgroundColor, ";\n      --text-color: ").concat(t.textColor, ";\n      --font: ").concat(t.font, ";\n    }\n\n    body {\n      background-color: var(--background-color);\n      color: var(--text-color);\n    }\n  ")
            };
        var oo = function() {
                var t = function(e, n) {
                    return t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    }, t(e, n)
                };
                return function(e, n) {
                    if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            so = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return oo(e, t), e.prototype.componentDidMount = function() {
                    io.setFrameHeight()
                }, e.prototype.componentDidUpdate = function() {
                    io.setFrameHeight()
                }, e
            }(c.PureComponent);

        function lo(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function uo(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? lo(Object(n), !0).forEach((function(e) {
                    ho(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lo(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function co(t) {
            return co = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, co(t)
        }

        function fo(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function ho(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function po(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null == n) return;
                var r, i, a = [],
                    o = !0,
                    s = !1;
                try {
                    for (n = n.call(t); !(o = (r = n.next()).done) && (a.push(r.value), !e || a.length !== e); o = !0);
                } catch (l) {
                    s = !0, i = l
                } finally {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (s) throw i
                    }
                }
                return a
            }(t, e) || mo(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function yo(t) {
            return function(t) {
                if (Array.isArray(t)) return bo(t)
            }(t) || function(t) {
                if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || mo(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function mo(t, e) {
            if (t) {
                if ("string" === typeof t) return bo(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bo(t, e) : void 0
            }
        }

        function bo(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }
        var vo = function() {},
            go = {},
            wo = {},
            _o = null,
            So = {
                mark: vo,
                measure: vo
            };
        try {
            "undefined" !== typeof window && (go = window), "undefined" !== typeof document && (wo = document), "undefined" !== typeof MutationObserver && (_o = MutationObserver), "undefined" !== typeof performance && (So = performance)
        } catch (Wu) {}
        var xo, To, ko, Io, Eo, Oo = (go.navigator || {}).userAgent,
            Ao = void 0 === Oo ? "" : Oo,
            Co = go,
            No = wo,
            Do = _o,
            Mo = So,
            Bo = (Co.document, !!No.documentElement && !!No.head && "function" === typeof No.addEventListener && "function" === typeof No.createElement),
            Po = ~Ao.indexOf("MSIE") || ~Ao.indexOf("Trident/"),
            Fo = "___FONT_AWESOME___",
            Lo = 16,
            Ro = "fa",
            Uo = "svg-inline--fa",
            zo = "data-fa-i2svg",
            jo = "data-fa-pseudo-element",
            Vo = "data-fa-pseudo-element-pending",
            Wo = "data-prefix",
            Yo = "data-icon",
            Ho = "fontawesome-i2svg",
            $o = "async",
            Ko = ["HTML", "HEAD", "STYLE", "SCRIPT"],
            Qo = function() {
                try {
                    return !0
                } catch (Wu) {
                    return !1
                }
            }(),
            qo = "classic",
            Go = "sharp",
            Xo = [qo, Go];

        function Jo(t) {
            return new Proxy(t, {
                get: function(t, e) {
                    return e in t ? t[e] : t[qo]
                }
            })
        }
        var Zo = Jo((ho(xo = {}, qo, {
                fa: "solid",
                fas: "solid",
                "fa-solid": "solid",
                far: "regular",
                "fa-regular": "regular",
                fal: "light",
                "fa-light": "light",
                fat: "thin",
                "fa-thin": "thin",
                fad: "duotone",
                "fa-duotone": "duotone",
                fab: "brands",
                "fa-brands": "brands",
                fak: "kit",
                "fa-kit": "kit"
            }), ho(xo, Go, {
                fa: "solid",
                fass: "solid",
                "fa-solid": "solid",
                fasr: "regular",
                "fa-regular": "regular",
                fasl: "light",
                "fa-light": "light"
            }), xo)),
            ts = Jo((ho(To = {}, qo, {
                solid: "fas",
                regular: "far",
                light: "fal",
                thin: "fat",
                duotone: "fad",
                brands: "fab",
                kit: "fak"
            }), ho(To, Go, {
                solid: "fass",
                regular: "fasr",
                light: "fasl"
            }), To)),
            es = Jo((ho(ko = {}, qo, {
                fab: "fa-brands",
                fad: "fa-duotone",
                fak: "fa-kit",
                fal: "fa-light",
                far: "fa-regular",
                fas: "fa-solid",
                fat: "fa-thin"
            }), ho(ko, Go, {
                fass: "fa-solid",
                fasr: "fa-regular",
                fasl: "fa-light"
            }), ko)),
            ns = Jo((ho(Io = {}, qo, {
                "fa-brands": "fab",
                "fa-duotone": "fad",
                "fa-kit": "fak",
                "fa-light": "fal",
                "fa-regular": "far",
                "fa-solid": "fas",
                "fa-thin": "fat"
            }), ho(Io, Go, {
                "fa-solid": "fass",
                "fa-regular": "fasr",
                "fa-light": "fasl"
            }), Io)),
            rs = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
            is = "fa-layers-text",
            as = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
            os = Jo((ho(Eo = {}, qo, {
                900: "fas",
                400: "far",
                normal: "far",
                300: "fal",
                100: "fat"
            }), ho(Eo, Go, {
                900: "fass",
                400: "fasr",
                300: "fasl"
            }), Eo)),
            ss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            ls = ss.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            us = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
            cs = {
                GROUP: "duotone-group",
                SWAP_OPACITY: "swap-opacity",
                PRIMARY: "primary",
                SECONDARY: "secondary"
            },
            ds = new Set;
        Object.keys(ts[qo]).map(ds.add.bind(ds)), Object.keys(ts[Go]).map(ds.add.bind(ds));
        var fs = [].concat(Xo, yo(ds), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", cs.GROUP, cs.SWAP_OPACITY, cs.PRIMARY, cs.SECONDARY]).concat(ss.map((function(t) {
                return "".concat(t, "x")
            }))).concat(ls.map((function(t) {
                return "w-".concat(t)
            }))),
            hs = Co.FontAwesomeConfig || {};
        if (No && "function" === typeof No.querySelector) {
            [
                ["data-family-prefix", "familyPrefix"],
                ["data-css-prefix", "cssPrefix"],
                ["data-family-default", "familyDefault"],
                ["data-style-default", "styleDefault"],
                ["data-replacement-class", "replacementClass"],
                ["data-auto-replace-svg", "autoReplaceSvg"],
                ["data-auto-add-css", "autoAddCss"],
                ["data-auto-a11y", "autoA11y"],
                ["data-search-pseudo-elements", "searchPseudoElements"],
                ["data-observe-mutations", "observeMutations"],
                ["data-mutate-approach", "mutateApproach"],
                ["data-keep-original-source", "keepOriginalSource"],
                ["data-measure-performance", "measurePerformance"],
                ["data-show-missing-icons", "showMissingIcons"]
            ].forEach((function(t) {
                var e = po(t, 2),
                    n = e[0],
                    r = e[1],
                    i = function(t) {
                        return "" === t || "false" !== t && ("true" === t || t)
                    }(function(t) {
                        var e = No.querySelector("script[" + t + "]");
                        if (e) return e.getAttribute(t)
                    }(n));
                void 0 !== i && null !== i && (hs[r] = i)
            }))
        }
        var ps = {
            styleDefault: "solid",
            familyDefault: "classic",
            cssPrefix: Ro,
            replacementClass: Uo,
            autoReplaceSvg: !0,
            autoAddCss: !0,
            autoA11y: !0,
            searchPseudoElements: !1,
            observeMutations: !0,
            mutateApproach: "async",
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0
        };
        hs.familyPrefix && (hs.cssPrefix = hs.familyPrefix);
        var ys = uo(uo({}, ps), hs);
        ys.autoReplaceSvg || (ys.observeMutations = !1);
        var ms = {};
        Object.keys(ps).forEach((function(t) {
            Object.defineProperty(ms, t, {
                enumerable: !0,
                set: function(e) {
                    ys[t] = e, bs.forEach((function(t) {
                        return t(ms)
                    }))
                },
                get: function() {
                    return ys[t]
                }
            })
        })), Object.defineProperty(ms, "familyPrefix", {
            enumerable: !0,
            set: function(t) {
                ys.cssPrefix = t, bs.forEach((function(t) {
                    return t(ms)
                }))
            },
            get: function() {
                return ys.cssPrefix
            }
        }), Co.FontAwesomeConfig = ms;
        var bs = [];
        var vs = Lo,
            gs = {
                size: 16,
                x: 0,
                y: 0,
                rotate: 0,
                flipX: !1,
                flipY: !1
            };
        var ws = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        function _s() {
            for (var t = 12, e = ""; t-- > 0;) e += ws[62 * Math.random() | 0];
            return e
        }

        function Ss(t) {
            for (var e = [], n = (t || []).length >>> 0; n--;) e[n] = t[n];
            return e
        }

        function xs(t) {
            return t.classList ? Ss(t.classList) : (t.getAttribute("class") || "").split(" ").filter((function(t) {
                return t
            }))
        }

        function Ts(t) {
            return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function ks(t) {
            return Object.keys(t || {}).reduce((function(e, n) {
                return e + "".concat(n, ": ").concat(t[n].trim(), ";")
            }), "")
        }

        function Is(t) {
            return t.size !== gs.size || t.x !== gs.x || t.y !== gs.y || t.rotate !== gs.rotate || t.flipX || t.flipY
        }
        var Es = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';

        function Os() {
            var t = Ro,
                e = Uo,
                n = ms.cssPrefix,
                r = ms.replacementClass,
                i = Es;
            if (n !== t || r !== e) {
                var a = new RegExp("\\.".concat(t, "\\-"), "g"),
                    o = new RegExp("\\--".concat(t, "\\-"), "g"),
                    s = new RegExp("\\.".concat(e), "g");
                i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r))
            }
            return i
        }
        var As = !1;

        function Cs() {
            ms.autoAddCss && !As && (! function(t) {
                if (t && Bo) {
                    var e = No.createElement("style");
                    e.setAttribute("type", "text/css"), e.innerHTML = t;
                    for (var n = No.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
                        var a = n[i],
                            o = (a.tagName || "").toUpperCase();
                        ["STYLE", "LINK"].indexOf(o) > -1 && (r = a)
                    }
                    No.head.insertBefore(e, r)
                }
            }(Os()), As = !0)
        }
        var Ns = {
                mixout: function() {
                    return {
                        dom: {
                            css: Os,
                            insertCss: Cs
                        }
                    }
                },
                hooks: function() {
                    return {
                        beforeDOMElementCreation: function() {
                            Cs()
                        },
                        beforeI2svg: function() {
                            Cs()
                        }
                    }
                }
            },
            Ds = Co || {};
        Ds[Fo] || (Ds[Fo] = {}), Ds[Fo].styles || (Ds[Fo].styles = {}), Ds[Fo].hooks || (Ds[Fo].hooks = {}), Ds[Fo].shims || (Ds[Fo].shims = []);
        var Ms = Ds[Fo],
            Bs = [],
            Ps = !1;

        function Fs(t) {
            var e = t.tag,
                n = t.attributes,
                r = void 0 === n ? {} : n,
                i = t.children,
                a = void 0 === i ? [] : i;
            return "string" === typeof t ? Ts(t) : "<".concat(e, " ").concat(function(t) {
                return Object.keys(t || {}).reduce((function(e, n) {
                    return e + "".concat(n, '="').concat(Ts(t[n]), '" ')
                }), "").trim()
            }(r), ">").concat(a.map(Fs).join(""), "</").concat(e, ">")
        }

        function Ls(t, e, n) {
            if (t && t[e] && t[e][n]) return {
                prefix: e,
                iconName: n,
                icon: t[e][n]
            }
        }
        Bo && ((Ps = (No.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(No.readyState)) || No.addEventListener("DOMContentLoaded", (function t() {
            No.removeEventListener("DOMContentLoaded", t), Ps = 1, Bs.map((function(t) {
                return t()
            }))
        })));
        var Rs = function(t, e, n, r) {
            var i, a, o, s = Object.keys(t),
                l = s.length,
                u = void 0 !== r ? function(t, e) {
                    return function(n, r, i, a) {
                        return t.call(e, n, r, i, a)
                    }
                }(e, r) : e;
            for (void 0 === n ? (i = 1, o = t[s[0]]) : (i = 0, o = n); i < l; i++) o = u(o, t[a = s[i]], a, t);
            return o
        };

        function Us(t) {
            var e = function(t) {
                for (var e = [], n = 0, r = t.length; n < r;) {
                    var i = t.charCodeAt(n++);
                    if (i >= 55296 && i <= 56319 && n < r) {
                        var a = t.charCodeAt(n++);
                        56320 == (64512 & a) ? e.push(((1023 & i) << 10) + (1023 & a) + 65536) : (e.push(i), n--)
                    } else e.push(i)
                }
                return e
            }(t);
            return 1 === e.length ? e[0].toString(16) : null
        }

        function zs(t) {
            return Object.keys(t).reduce((function(e, n) {
                var r = t[n];
                return !!r.icon ? e[r.iconName] = r.icon : e[n] = r, e
            }), {})
        }

        function js(t, e) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                r = void 0 !== n && n,
                i = zs(e);
            "function" !== typeof Ms.hooks.addPack || r ? Ms.styles[t] = uo(uo({}, Ms.styles[t] || {}), i) : Ms.hooks.addPack(t, zs(e)), "fas" === t && js("fa", e)
        }
        var Vs, Ws, Ys, Hs = Ms.styles,
            $s = Ms.shims,
            Ks = (ho(Vs = {}, qo, Object.values(es[qo])), ho(Vs, Go, Object.values(es[Go])), Vs),
            Qs = null,
            qs = {},
            Gs = {},
            Xs = {},
            Js = {},
            Zs = {},
            tl = (ho(Ws = {}, qo, Object.keys(Zo[qo])), ho(Ws, Go, Object.keys(Zo[Go])), Ws);

        function el(t, e) {
            var n, r = e.split("-"),
                i = r[0],
                a = r.slice(1).join("-");
            return i !== t || "" === a || (n = a, ~fs.indexOf(n)) ? null : a
        }
        var nl, rl = function() {
            var t = function(t) {
                return Rs(Hs, (function(e, n, r) {
                    return e[r] = Rs(n, t, {}), e
                }), {})
            };
            qs = t((function(t, e, n) {
                (e[3] && (t[e[3]] = n), e[2]) && e[2].filter((function(t) {
                    return "number" === typeof t
                })).forEach((function(e) {
                    t[e.toString(16)] = n
                }));
                return t
            })), Gs = t((function(t, e, n) {
                (t[n] = n, e[2]) && e[2].filter((function(t) {
                    return "string" === typeof t
                })).forEach((function(e) {
                    t[e] = n
                }));
                return t
            })), Zs = t((function(t, e, n) {
                var r = e[2];
                return t[n] = n, r.forEach((function(e) {
                    t[e] = n
                })), t
            }));
            var e = "far" in Hs || ms.autoFetchSvg,
                n = Rs($s, (function(t, n) {
                    var r = n[0],
                        i = n[1],
                        a = n[2];
                    return "far" !== i || e || (i = "fas"), "string" === typeof r && (t.names[r] = {
                        prefix: i,
                        iconName: a
                    }), "number" === typeof r && (t.unicodes[r.toString(16)] = {
                        prefix: i,
                        iconName: a
                    }), t
                }), {
                    names: {},
                    unicodes: {}
                });
            Xs = n.names, Js = n.unicodes, Qs = ul(ms.styleDefault, {
                family: ms.familyDefault
            })
        };

        function il(t, e) {
            return (qs[t] || {})[e]
        }

        function al(t, e) {
            return (Zs[t] || {})[e]
        }

        function ol(t) {
            return Xs[t] || {
                prefix: null,
                iconName: null
            }
        }

        function sl() {
            return Qs
        }
        nl = function(t) {
            Qs = ul(t.styleDefault, {
                family: ms.familyDefault
            })
        }, bs.push(nl), rl();
        var ll = function() {
            return {
                prefix: null,
                iconName: null,
                rest: []
            }
        };

        function ul(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
                n = void 0 === e ? qo : e,
                r = Zo[n][t],
                i = ts[n][t] || ts[n][r],
                a = t in Ms.styles ? t : null;
            return i || a || null
        }
        var cl = (ho(Ys = {}, qo, Object.keys(es[qo])), ho(Ys, Go, Object.keys(es[Go])), Ys);

        function dl(t) {
            var e, n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
                r = void 0 !== n && n,
                i = (ho(e = {}, qo, "".concat(ms.cssPrefix, "-").concat(qo)), ho(e, Go, "".concat(ms.cssPrefix, "-").concat(Go)), e),
                a = null,
                o = qo;
            (t.includes(i[qo]) || t.some((function(t) {
                return cl[qo].includes(t)
            }))) && (o = qo), (t.includes(i[Go]) || t.some((function(t) {
                return cl[Go].includes(t)
            }))) && (o = Go);
            var s = t.reduce((function(t, e) {
                var n = el(ms.cssPrefix, e);
                if (Hs[e] ? (e = Ks[o].includes(e) ? ns[o][e] : e, a = e, t.prefix = e) : tl[o].indexOf(e) > -1 ? (a = e, t.prefix = ul(e, {
                        family: o
                    })) : n ? t.iconName = n : e !== ms.replacementClass && e !== i[qo] && e !== i[Go] && t.rest.push(e), !r && t.prefix && t.iconName) {
                    var s = "fa" === a ? ol(t.iconName) : {},
                        l = al(t.prefix, t.iconName);
                    s.prefix && (a = null), t.iconName = s.iconName || l || t.iconName, t.prefix = s.prefix || t.prefix, "far" !== t.prefix || Hs.far || !Hs.fas || ms.autoFetchSvg || (t.prefix = "fas")
                }
                return t
            }), ll());
            return (t.includes("fa-brands") || t.includes("fab")) && (s.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (s.prefix = "fad"), s.prefix || o !== Go || !Hs.fass && !ms.autoFetchSvg || (s.prefix = "fass", s.iconName = al(s.prefix, s.iconName) || s.iconName), "fa" !== s.prefix && "fa" !== a || (s.prefix = sl() || "fas"), s
        }
        var fl = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.definitions = {}
                }
                var e, n, r;
                return e = t, n = [{
                    key: "add",
                    value: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        var i = n.reduce(this._pullDefinitions, {});
                        Object.keys(i).forEach((function(e) {
                            t.definitions[e] = uo(uo({}, t.definitions[e] || {}), i[e]), js(e, i[e]);
                            var n = es[qo][e];
                            n && js(n, i[e]), rl()
                        }))
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.definitions = {}
                    }
                }, {
                    key: "_pullDefinitions",
                    value: function(t, e) {
                        var n = e.prefix && e.iconName && e.icon ? {
                            0: e
                        } : e;
                        return Object.keys(n).map((function(e) {
                            var r = n[e],
                                i = r.prefix,
                                a = r.iconName,
                                o = r.icon,
                                s = o[2];
                            t[i] || (t[i] = {}), s.length > 0 && s.forEach((function(e) {
                                "string" === typeof e && (t[i][e] = o)
                            })), t[i][a] = o
                        })), t
                    }
                }], n && fo(e.prototype, n), r && fo(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }(),
            hl = [],
            pl = {},
            yl = {},
            ml = Object.keys(yl);

        function bl(t, e) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
            return (pl[t] || []).forEach((function(t) {
                e = t.apply(null, [e].concat(r))
            })), e
        }

        function vl(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            (pl[t] || []).forEach((function(t) {
                t.apply(null, n)
            }))
        }

        function gl() {
            var t = arguments[0],
                e = Array.prototype.slice.call(arguments, 1);
            return yl[t] ? yl[t].apply(null, e) : void 0
        }

        function wl(t) {
            "fa" === t.prefix && (t.prefix = "fas");
            var e = t.iconName,
                n = t.prefix || sl();
            if (e) return e = al(n, e) || e, Ls(_l.definitions, n, e) || Ls(Ms.styles, n, e)
        }
        var _l = new fl,
            Sl = {
                i2svg: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Bo ? (vl("beforeI2svg", t), gl("pseudoElements2svg", t), gl("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.")
                },
                watch: function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.autoReplaceSvgRoot;
                    !1 === ms.autoReplaceSvg && (ms.autoReplaceSvg = !0), ms.observeMutations = !0, t = function() {
                        kl({
                            autoReplaceSvgRoot: n
                        }), vl("watch", e)
                    }, Bo && (Ps ? setTimeout(t, 0) : Bs.push(t))
                }
            },
            xl = {
                icon: function(t) {
                    if (null === t) return null;
                    if ("object" === co(t) && t.prefix && t.iconName) return {
                        prefix: t.prefix,
                        iconName: al(t.prefix, t.iconName) || t.iconName
                    };
                    if (Array.isArray(t) && 2 === t.length) {
                        var e = 0 === t[1].indexOf("fa-") ? t[1].slice(3) : t[1],
                            n = ul(t[0]);
                        return {
                            prefix: n,
                            iconName: al(n, e) || e
                        }
                    }
                    if ("string" === typeof t && (t.indexOf("".concat(ms.cssPrefix, "-")) > -1 || t.match(rs))) {
                        var r = dl(t.split(" "), {
                            skipLookups: !0
                        });
                        return {
                            prefix: r.prefix || sl(),
                            iconName: al(r.prefix, r.iconName) || r.iconName
                        }
                    }
                    if ("string" === typeof t) {
                        var i = sl();
                        return {
                            prefix: i,
                            iconName: al(i, t) || t
                        }
                    }
                }
            },
            Tl = {
                noAuto: function() {
                    ms.autoReplaceSvg = !1, ms.observeMutations = !1, vl("noAuto")
                },
                config: ms,
                dom: Sl,
                parse: xl,
                library: _l,
                findIconDefinition: wl,
                toHtml: Fs
            },
            kl = function() {
                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                    e = void 0 === t ? No : t;
                (Object.keys(Ms.styles).length > 0 || ms.autoFetchSvg) && Bo && ms.autoReplaceSvg && Tl.dom.i2svg({
                    node: e
                })
            };

        function Il(t, e) {
            return Object.defineProperty(t, "abstract", {
                get: e
            }), Object.defineProperty(t, "html", {
                get: function() {
                    return t.abstract.map((function(t) {
                        return Fs(t)
                    }))
                }
            }), Object.defineProperty(t, "node", {
                get: function() {
                    if (Bo) {
                        var e = No.createElement("div");
                        return e.innerHTML = t.html, e.children
                    }
                }
            }), t
        }

        function El(t) {
            var e = t.icons,
                n = e.main,
                r = e.mask,
                i = t.prefix,
                a = t.iconName,
                o = t.transform,
                s = t.symbol,
                l = t.title,
                u = t.maskId,
                c = t.titleId,
                d = t.extra,
                f = t.watchable,
                h = void 0 !== f && f,
                p = r.found ? r : n,
                y = p.width,
                m = p.height,
                b = "fak" === i,
                v = [ms.replacementClass, a ? "".concat(ms.cssPrefix, "-").concat(a) : ""].filter((function(t) {
                    return -1 === d.classes.indexOf(t)
                })).filter((function(t) {
                    return "" !== t || !!t
                })).concat(d.classes).join(" "),
                g = {
                    children: [],
                    attributes: uo(uo({}, d.attributes), {}, {
                        "data-prefix": i,
                        "data-icon": a,
                        class: v,
                        role: d.attributes.role || "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 ".concat(y, " ").concat(m)
                    })
                },
                w = b && !~d.classes.indexOf("fa-fw") ? {
                    width: "".concat(y / m * 16 * .0625, "em")
                } : {};
            h && (g.attributes[zo] = ""), l && (g.children.push({
                tag: "title",
                attributes: {
                    id: g.attributes["aria-labelledby"] || "title-".concat(c || _s())
                },
                children: [l]
            }), delete g.attributes.title);
            var _ = uo(uo({}, g), {}, {
                    prefix: i,
                    iconName: a,
                    main: n,
                    mask: r,
                    maskId: u,
                    transform: o,
                    symbol: s,
                    styles: uo(uo({}, w), d.styles)
                }),
                S = r.found && n.found ? gl("generateAbstractMask", _) || {
                    children: [],
                    attributes: {}
                } : gl("generateAbstractIcon", _) || {
                    children: [],
                    attributes: {}
                },
                x = S.children,
                T = S.attributes;
            return _.children = x, _.attributes = T, s ? function(t) {
                var e = t.prefix,
                    n = t.iconName,
                    r = t.children,
                    i = t.attributes,
                    a = t.symbol,
                    o = !0 === a ? "".concat(e, "-").concat(ms.cssPrefix, "-").concat(n) : a;
                return [{
                    tag: "svg",
                    attributes: {
                        style: "display: none;"
                    },
                    children: [{
                        tag: "symbol",
                        attributes: uo(uo({}, i), {}, {
                            id: o
                        }),
                        children: r
                    }]
                }]
            }(_) : function(t) {
                var e = t.children,
                    n = t.main,
                    r = t.mask,
                    i = t.attributes,
                    a = t.styles,
                    o = t.transform;
                if (Is(o) && n.found && !r.found) {
                    var s = {
                        x: n.width / n.height / 2,
                        y: .5
                    };
                    i.style = ks(uo(uo({}, a), {}, {
                        "transform-origin": "".concat(s.x + o.x / 16, "em ").concat(s.y + o.y / 16, "em")
                    }))
                }
                return [{
                    tag: "svg",
                    attributes: i,
                    children: e
                }]
            }(_)
        }

        function Ol(t) {
            var e = t.content,
                n = t.width,
                r = t.height,
                i = t.transform,
                a = t.title,
                o = t.extra,
                s = t.watchable,
                l = void 0 !== s && s,
                u = uo(uo(uo({}, o.attributes), a ? {
                    title: a
                } : {}), {}, {
                    class: o.classes.join(" ")
                });
            l && (u[zo] = "");
            var c = uo({}, o.styles);
            Is(i) && (c.transform = function(t) {
                var e = t.transform,
                    n = t.width,
                    r = void 0 === n ? Lo : n,
                    i = t.height,
                    a = void 0 === i ? Lo : i,
                    o = t.startCentered,
                    s = void 0 !== o && o,
                    l = "";
                return l += s && Po ? "translate(".concat(e.x / vs - r / 2, "em, ").concat(e.y / vs - a / 2, "em) ") : s ? "translate(calc(-50% + ".concat(e.x / vs, "em), calc(-50% + ").concat(e.y / vs, "em)) ") : "translate(".concat(e.x / vs, "em, ").concat(e.y / vs, "em) "), l += "scale(".concat(e.size / vs * (e.flipX ? -1 : 1), ", ").concat(e.size / vs * (e.flipY ? -1 : 1), ") "), l + "rotate(".concat(e.rotate, "deg) ")
            }({
                transform: i,
                startCentered: !0,
                width: n,
                height: r
            }), c["-webkit-transform"] = c.transform);
            var d = ks(c);
            d.length > 0 && (u.style = d);
            var f = [];
            return f.push({
                tag: "span",
                attributes: u,
                children: [e]
            }), a && f.push({
                tag: "span",
                attributes: {
                    class: "sr-only"
                },
                children: [a]
            }), f
        }
        var Al = Ms.styles;

        function Cl(t) {
            var e = t[0],
                n = t[1],
                r = po(t.slice(4), 1)[0];
            return {
                found: !0,
                width: e,
                height: n,
                icon: Array.isArray(r) ? {
                    tag: "g",
                    attributes: {
                        class: "".concat(ms.cssPrefix, "-").concat(cs.GROUP)
                    },
                    children: [{
                        tag: "path",
                        attributes: {
                            class: "".concat(ms.cssPrefix, "-").concat(cs.SECONDARY),
                            fill: "currentColor",
                            d: r[0]
                        }
                    }, {
                        tag: "path",
                        attributes: {
                            class: "".concat(ms.cssPrefix, "-").concat(cs.PRIMARY),
                            fill: "currentColor",
                            d: r[1]
                        }
                    }]
                } : {
                    tag: "path",
                    attributes: {
                        fill: "currentColor",
                        d: r
                    }
                }
            }
        }
        var Nl = {
            found: !1,
            width: 512,
            height: 512
        };

        function Dl(t, e) {
            var n = e;
            return "fa" === e && null !== ms.styleDefault && (e = sl()), new Promise((function(r, i) {
                gl("missingIconAbstract");
                if ("fa" === n) {
                    var a = ol(t) || {};
                    t = a.iconName || t, e = a.prefix || e
                }
                if (t && e && Al[e] && Al[e][t]) return r(Cl(Al[e][t]));
                ! function(t, e) {
                    Qo || ms.showMissingIcons || !t || console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'))
                }(t, e), r(uo(uo({}, Nl), {}, {
                    icon: ms.showMissingIcons && t && gl("missingIconAbstract") || {}
                }))
            }))
        }
        var Ml = function() {},
            Bl = ms.measurePerformance && Mo && Mo.mark && Mo.measure ? Mo : {
                mark: Ml,
                measure: Ml
            },
            Pl = 'FA "6.4.2"',
            Fl = function(t) {
                Bl.mark("".concat(Pl, " ").concat(t, " ends")), Bl.measure("".concat(Pl, " ").concat(t), "".concat(Pl, " ").concat(t, " begins"), "".concat(Pl, " ").concat(t, " ends"))
            },
            Ll = {
                begin: function(t) {
                    return Bl.mark("".concat(Pl, " ").concat(t, " begins")),
                        function() {
                            return Fl(t)
                        }
                },
                end: Fl
            },
            Rl = function() {};

        function Ul(t) {
            return "string" === typeof(t.getAttribute ? t.getAttribute(zo) : null)
        }

        function zl(t) {
            return No.createElementNS("http://www.w3.org/2000/svg", t)
        }

        function jl(t) {
            return No.createElement(t)
        }

        function Vl(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
                n = void 0 === e ? "svg" === t.tag ? zl : jl : e;
            if ("string" === typeof t) return No.createTextNode(t);
            var r = n(t.tag);
            return Object.keys(t.attributes || []).forEach((function(e) {
                r.setAttribute(e, t.attributes[e])
            })), (t.children || []).forEach((function(t) {
                r.appendChild(Vl(t, {
                    ceFn: n
                }))
            })), r
        }
        var Wl = {
            replace: function(t) {
                var e = t[0];
                if (e.parentNode)
                    if (t[1].forEach((function(t) {
                            e.parentNode.insertBefore(Vl(t), e)
                        })), null === e.getAttribute(zo) && ms.keepOriginalSource) {
                        var n = No.createComment(function(t) {
                            var e = " ".concat(t.outerHTML, " ");
                            return "".concat(e, "Font Awesome fontawesome.com ")
                        }(e));
                        e.parentNode.replaceChild(n, e)
                    } else e.remove()
            },
            nest: function(t) {
                var e = t[0],
                    n = t[1];
                if (~xs(e).indexOf(ms.replacementClass)) return Wl.replace(t);
                var r = new RegExp("".concat(ms.cssPrefix, "-.*"));
                if (delete n[0].attributes.id, n[0].attributes.class) {
                    var i = n[0].attributes.class.split(" ").reduce((function(t, e) {
                        return e === ms.replacementClass || e.match(r) ? t.toSvg.push(e) : t.toNode.push(e), t
                    }), {
                        toNode: [],
                        toSvg: []
                    });
                    n[0].attributes.class = i.toSvg.join(" "), 0 === i.toNode.length ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "))
                }
                var a = n.map((function(t) {
                    return Fs(t)
                })).join("\n");
                e.setAttribute(zo, ""), e.innerHTML = a
            }
        };

        function Yl(t) {
            t()
        }

        function Hl(t, e) {
            var n = "function" === typeof e ? e : Rl;
            if (0 === t.length) n();
            else {
                var r = Yl;
                ms.mutateApproach === $o && (r = Co.requestAnimationFrame || Yl), r((function() {
                    var e = !0 === ms.autoReplaceSvg ? Wl.replace : Wl[ms.autoReplaceSvg] || Wl.replace,
                        r = Ll.begin("mutate");
                    t.map(e), r(), n()
                }))
            }
        }
        var $l = !1;

        function Kl() {
            $l = !0
        }

        function Ql() {
            $l = !1
        }
        var ql = null;

        function Gl(t) {
            if (Do && ms.observeMutations) {
                var e = t.treeCallback,
                    n = void 0 === e ? Rl : e,
                    r = t.nodeCallback,
                    i = void 0 === r ? Rl : r,
                    a = t.pseudoElementsCallback,
                    o = void 0 === a ? Rl : a,
                    s = t.observeMutationsRoot,
                    l = void 0 === s ? No : s;
                ql = new Do((function(t) {
                    if (!$l) {
                        var e = sl();
                        Ss(t).forEach((function(t) {
                            if ("childList" === t.type && t.addedNodes.length > 0 && !Ul(t.addedNodes[0]) && (ms.searchPseudoElements && o(t.target), n(t.target)), "attributes" === t.type && t.target.parentNode && ms.searchPseudoElements && o(t.target.parentNode), "attributes" === t.type && Ul(t.target) && ~us.indexOf(t.attributeName))
                                if ("class" === t.attributeName && function(t) {
                                        var e = t.getAttribute ? t.getAttribute(Wo) : null,
                                            n = t.getAttribute ? t.getAttribute(Yo) : null;
                                        return e && n
                                    }(t.target)) {
                                    var r = dl(xs(t.target)),
                                        a = r.prefix,
                                        s = r.iconName;
                                    t.target.setAttribute(Wo, a || e), s && t.target.setAttribute(Yo, s)
                                } else(l = t.target) && l.classList && l.classList.contains && l.classList.contains(ms.replacementClass) && i(t.target);
                            var l
                        }))
                    }
                })), Bo && ql.observe(l, {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0
                })
            }
        }

        function Xl(t) {
            var e = t.getAttribute("data-prefix"),
                n = t.getAttribute("data-icon"),
                r = void 0 !== t.innerText ? t.innerText.trim() : "",
                i = dl(xs(t));
            return i.prefix || (i.prefix = sl()), e && n && (i.prefix = e, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = function(t, e) {
                return (Gs[t] || {})[e]
            }(i.prefix, t.innerText) || il(i.prefix, Us(t.innerText))), !i.iconName && ms.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i
        }

        function Jl(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    styleParser: !0
                },
                n = Xl(t),
                r = n.iconName,
                i = n.prefix,
                a = n.rest,
                o = function(t) {
                    var e = Ss(t.attributes).reduce((function(t, e) {
                            return "class" !== t.name && "style" !== t.name && (t[e.name] = e.value), t
                        }), {}),
                        n = t.getAttribute("title"),
                        r = t.getAttribute("data-fa-title-id");
                    return ms.autoA11y && (n ? e["aria-labelledby"] = "".concat(ms.replacementClass, "-title-").concat(r || _s()) : (e["aria-hidden"] = "true", e.focusable = "false")), e
                }(t),
                s = bl("parseNodeAttributes", {}, t),
                l = e.styleParser ? function(t) {
                    var e = t.getAttribute("style"),
                        n = [];
                    return e && (n = e.split(";").reduce((function(t, e) {
                        var n = e.split(":"),
                            r = n[0],
                            i = n.slice(1);
                        return r && i.length > 0 && (t[r] = i.join(":").trim()), t
                    }), {})), n
                }(t) : [];
            return uo({
                iconName: r,
                title: t.getAttribute("title"),
                titleId: t.getAttribute("data-fa-title-id"),
                prefix: i,
                transform: gs,
                mask: {
                    iconName: null,
                    prefix: null,
                    rest: []
                },
                maskId: null,
                symbol: !1,
                extra: {
                    classes: a,
                    styles: l,
                    attributes: o
                }
            }, s)
        }
        var Zl = Ms.styles;

        function tu(t) {
            var e = "nest" === ms.autoReplaceSvg ? Jl(t, {
                styleParser: !1
            }) : Jl(t);
            return ~e.extra.classes.indexOf(is) ? gl("generateLayersText", t, e) : gl("generateSvgReplacementMutation", t, e)
        }
        var eu = new Set;

        function nu(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!Bo) return Promise.resolve();
            var n = No.documentElement.classList,
                r = function(t) {
                    return n.add("".concat(Ho, "-").concat(t))
                },
                i = function(t) {
                    return n.remove("".concat(Ho, "-").concat(t))
                },
                a = ms.autoFetchSvg ? eu : Xo.map((function(t) {
                    return "fa-".concat(t)
                })).concat(Object.keys(Zl));
            a.includes("fa") || a.push("fa");
            var o = [".".concat(is, ":not([").concat(zo, "])")].concat(a.map((function(t) {
                return ".".concat(t, ":not([").concat(zo, "])")
            }))).join(", ");
            if (0 === o.length) return Promise.resolve();
            var s = [];
            try {
                s = Ss(t.querySelectorAll(o))
            } catch (Wu) {}
            if (!(s.length > 0)) return Promise.resolve();
            r("pending"), i("complete");
            var l = Ll.begin("onTree"),
                u = s.reduce((function(t, e) {
                    try {
                        var n = tu(e);
                        n && t.push(n)
                    } catch (Wu) {
                        Qo || "MissingIcon" === Wu.name && console.error(Wu)
                    }
                    return t
                }), []);
            return new Promise((function(t, n) {
                Promise.all(u).then((function(n) {
                    Hl(n, (function() {
                        r("active"), r("complete"), i("pending"), "function" === typeof e && e(), l(), t()
                    }))
                })).catch((function(t) {
                    l(), n(t)
                }))
            }))
        }

        function ru(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            tu(t).then((function(t) {
                t && Hl([t], e)
            }))
        }
        Xo.map((function(t) {
            eu.add("fa-".concat(t))
        })), Object.keys(Zo[qo]).map(eu.add.bind(eu)), Object.keys(Zo[Go]).map(eu.add.bind(eu)), eu = yo(eu);
        var iu = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.transform,
                    r = void 0 === n ? gs : n,
                    i = e.symbol,
                    a = void 0 !== i && i,
                    o = e.mask,
                    s = void 0 === o ? null : o,
                    l = e.maskId,
                    u = void 0 === l ? null : l,
                    c = e.title,
                    d = void 0 === c ? null : c,
                    f = e.titleId,
                    h = void 0 === f ? null : f,
                    p = e.classes,
                    y = void 0 === p ? [] : p,
                    m = e.attributes,
                    b = void 0 === m ? {} : m,
                    v = e.styles,
                    g = void 0 === v ? {} : v;
                if (t) {
                    var w = t.prefix,
                        _ = t.iconName,
                        S = t.icon;
                    return Il(uo({
                        type: "icon"
                    }, t), (function() {
                        return vl("beforeDOMElementCreation", {
                            iconDefinition: t,
                            params: e
                        }), ms.autoA11y && (d ? b["aria-labelledby"] = "".concat(ms.replacementClass, "-title-").concat(h || _s()) : (b["aria-hidden"] = "true", b.focusable = "false")), El({
                            icons: {
                                main: Cl(S),
                                mask: s ? Cl(s.icon) : {
                                    found: !1,
                                    width: null,
                                    height: null,
                                    icon: {}
                                }
                            },
                            prefix: w,
                            iconName: _,
                            transform: uo(uo({}, gs), r),
                            symbol: a,
                            title: d,
                            maskId: u,
                            titleId: h,
                            extra: {
                                attributes: b,
                                styles: g,
                                classes: y
                            }
                        })
                    }))
                }
            },
            au = {
                mixout: function() {
                    return {
                        icon: (t = iu, function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = (e || {}).icon ? e : wl(e || {}),
                                i = n.mask;
                            return i && (i = (i || {}).icon ? i : wl(i || {})), t(r, uo(uo({}, n), {}, {
                                mask: i
                            }))
                        })
                    };
                    var t
                },
                hooks: function() {
                    return {
                        mutationObserverCallbacks: function(t) {
                            return t.treeCallback = nu, t.nodeCallback = ru, t
                        }
                    }
                },
                provides: function(t) {
                    t.i2svg = function(t) {
                        var e = t.node,
                            n = void 0 === e ? No : e,
                            r = t.callback;
                        return nu(n, void 0 === r ? function() {} : r)
                    }, t.generateSvgReplacementMutation = function(t, e) {
                        var n = e.iconName,
                            r = e.title,
                            i = e.titleId,
                            a = e.prefix,
                            o = e.transform,
                            s = e.symbol,
                            l = e.mask,
                            u = e.maskId,
                            c = e.extra;
                        return new Promise((function(e, d) {
                            Promise.all([Dl(n, a), l.iconName ? Dl(l.iconName, l.prefix) : Promise.resolve({
                                found: !1,
                                width: 512,
                                height: 512,
                                icon: {}
                            })]).then((function(l) {
                                var d = po(l, 2),
                                    f = d[0],
                                    h = d[1];
                                e([t, El({
                                    icons: {
                                        main: f,
                                        mask: h
                                    },
                                    prefix: a,
                                    iconName: n,
                                    transform: o,
                                    symbol: s,
                                    maskId: u,
                                    title: r,
                                    titleId: i,
                                    extra: c,
                                    watchable: !0
                                })])
                            })).catch(d)
                        }))
                    }, t.generateAbstractIcon = function(t) {
                        var e, n = t.children,
                            r = t.attributes,
                            i = t.main,
                            a = t.transform,
                            o = ks(t.styles);
                        return o.length > 0 && (r.style = o), Is(a) && (e = gl("generateAbstractTransformGrouping", {
                            main: i,
                            transform: a,
                            containerWidth: i.width,
                            iconWidth: i.width
                        })), n.push(e || i.icon), {
                            children: n,
                            attributes: r
                        }
                    }
                }
            },
            ou = {
                mixout: function() {
                    return {
                        layer: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e.classes,
                                r = void 0 === n ? [] : n;
                            return Il({
                                type: "layer"
                            }, (function() {
                                vl("beforeDOMElementCreation", {
                                    assembler: t,
                                    params: e
                                });
                                var n = [];
                                return t((function(t) {
                                    Array.isArray(t) ? t.map((function(t) {
                                        n = n.concat(t.abstract)
                                    })) : n = n.concat(t.abstract)
                                })), [{
                                    tag: "span",
                                    attributes: {
                                        class: ["".concat(ms.cssPrefix, "-layers")].concat(yo(r)).join(" ")
                                    },
                                    children: n
                                }]
                            }))
                        }
                    }
                }
            },
            su = {
                mixout: function() {
                    return {
                        counter: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e.title,
                                r = void 0 === n ? null : n,
                                i = e.classes,
                                a = void 0 === i ? [] : i,
                                o = e.attributes,
                                s = void 0 === o ? {} : o,
                                l = e.styles,
                                u = void 0 === l ? {} : l;
                            return Il({
                                type: "counter",
                                content: t
                            }, (function() {
                                return vl("beforeDOMElementCreation", {
                                        content: t,
                                        params: e
                                    }),
                                    function(t) {
                                        var e = t.content,
                                            n = t.title,
                                            r = t.extra,
                                            i = uo(uo(uo({}, r.attributes), n ? {
                                                title: n
                                            } : {}), {}, {
                                                class: r.classes.join(" ")
                                            }),
                                            a = ks(r.styles);
                                        a.length > 0 && (i.style = a);
                                        var o = [];
                                        return o.push({
                                            tag: "span",
                                            attributes: i,
                                            children: [e]
                                        }), n && o.push({
                                            tag: "span",
                                            attributes: {
                                                class: "sr-only"
                                            },
                                            children: [n]
                                        }), o
                                    }({
                                        content: t.toString(),
                                        title: r,
                                        extra: {
                                            attributes: s,
                                            styles: u,
                                            classes: ["".concat(ms.cssPrefix, "-layers-counter")].concat(yo(a))
                                        }
                                    })
                            }))
                        }
                    }
                }
            },
            lu = {
                mixout: function() {
                    return {
                        text: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e.transform,
                                r = void 0 === n ? gs : n,
                                i = e.title,
                                a = void 0 === i ? null : i,
                                o = e.classes,
                                s = void 0 === o ? [] : o,
                                l = e.attributes,
                                u = void 0 === l ? {} : l,
                                c = e.styles,
                                d = void 0 === c ? {} : c;
                            return Il({
                                type: "text",
                                content: t
                            }, (function() {
                                return vl("beforeDOMElementCreation", {
                                    content: t,
                                    params: e
                                }), Ol({
                                    content: t,
                                    transform: uo(uo({}, gs), r),
                                    title: a,
                                    extra: {
                                        attributes: u,
                                        styles: d,
                                        classes: ["".concat(ms.cssPrefix, "-layers-text")].concat(yo(s))
                                    }
                                })
                            }))
                        }
                    }
                },
                provides: function(t) {
                    t.generateLayersText = function(t, e) {
                        var n = e.title,
                            r = e.transform,
                            i = e.extra,
                            a = null,
                            o = null;
                        if (Po) {
                            var s = parseInt(getComputedStyle(t).fontSize, 10),
                                l = t.getBoundingClientRect();
                            a = l.width / s, o = l.height / s
                        }
                        return ms.autoA11y && !n && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, Ol({
                            content: t.innerHTML,
                            width: a,
                            height: o,
                            transform: r,
                            title: n,
                            extra: i,
                            watchable: !0
                        })])
                    }
                }
            },
            uu = new RegExp('"', "ug"),
            cu = [1105920, 1112319];

        function du(t, e) {
            var n = "".concat(Vo).concat(e.replace(":", "-"));
            return new Promise((function(r, i) {
                if (null !== t.getAttribute(n)) return r();
                var a = Ss(t.children).filter((function(t) {
                        return t.getAttribute(jo) === e
                    }))[0],
                    o = Co.getComputedStyle(t, e),
                    s = o.getPropertyValue("font-family").match(as),
                    l = o.getPropertyValue("font-weight"),
                    u = o.getPropertyValue("content");
                if (a && !s) return t.removeChild(a), r();
                if (s && "none" !== u && "" !== u) {
                    var c = o.getPropertyValue("content"),
                        d = ~["Sharp"].indexOf(s[2]) ? Go : qo,
                        f = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? ts[d][s[2].toLowerCase()] : os[d][l],
                        h = function(t) {
                            var e = t.replace(uu, ""),
                                n = function(t, e) {
                                    var n, r = t.length,
                                        i = t.charCodeAt(e);
                                    return i >= 55296 && i <= 56319 && r > e + 1 && (n = t.charCodeAt(e + 1)) >= 56320 && n <= 57343 ? 1024 * (i - 55296) + n - 56320 + 65536 : i
                                }(e, 0),
                                r = n >= cu[0] && n <= cu[1],
                                i = 2 === e.length && e[0] === e[1];
                            return {
                                value: Us(i ? e[0] : e),
                                isSecondary: r || i
                            }
                        }(c),
                        p = h.value,
                        y = h.isSecondary,
                        m = s[0].startsWith("FontAwesome"),
                        b = il(f, p),
                        v = b;
                    if (m) {
                        var g = function(t) {
                            var e = Js[t],
                                n = il("fas", t);
                            return e || (n ? {
                                prefix: "fas",
                                iconName: n
                            } : null) || {
                                prefix: null,
                                iconName: null
                            }
                        }(p);
                        g.iconName && g.prefix && (b = g.iconName, f = g.prefix)
                    }
                    if (!b || y || a && a.getAttribute(Wo) === f && a.getAttribute(Yo) === v) r();
                    else {
                        t.setAttribute(n, v), a && t.removeChild(a);
                        var w = {
                                iconName: null,
                                title: null,
                                titleId: null,
                                prefix: null,
                                transform: gs,
                                symbol: !1,
                                mask: {
                                    iconName: null,
                                    prefix: null,
                                    rest: []
                                },
                                maskId: null,
                                extra: {
                                    classes: [],
                                    styles: {},
                                    attributes: {}
                                }
                            },
                            _ = w.extra;
                        _.attributes[jo] = e, Dl(b, f).then((function(i) {
                            var a = El(uo(uo({}, w), {}, {
                                    icons: {
                                        main: i,
                                        mask: ll()
                                    },
                                    prefix: f,
                                    iconName: v,
                                    extra: _,
                                    watchable: !0
                                })),
                                o = No.createElementNS("http://www.w3.org/2000/svg", "svg");
                            "::before" === e ? t.insertBefore(o, t.firstChild) : t.appendChild(o), o.outerHTML = a.map((function(t) {
                                return Fs(t)
                            })).join("\n"), t.removeAttribute(n), r()
                        })).catch(i)
                    }
                } else r()
            }))
        }

        function fu(t) {
            return Promise.all([du(t, "::before"), du(t, "::after")])
        }

        function hu(t) {
            return t.parentNode !== document.head && !~Ko.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(jo) && (!t.parentNode || "svg" !== t.parentNode.tagName)
        }

        function pu(t) {
            if (Bo) return new Promise((function(e, n) {
                var r = Ss(t.querySelectorAll("*")).filter(hu).map(fu),
                    i = Ll.begin("searchPseudoElements");
                Kl(), Promise.all(r).then((function() {
                    i(), Ql(), e()
                })).catch((function() {
                    i(), Ql(), n()
                }))
            }))
        }
        var yu = !1,
            mu = function(t) {
                return t.toLowerCase().split(" ").reduce((function(t, e) {
                    var n = e.toLowerCase().split("-"),
                        r = n[0],
                        i = n.slice(1).join("-");
                    if (r && "h" === i) return t.flipX = !0, t;
                    if (r && "v" === i) return t.flipY = !0, t;
                    if (i = parseFloat(i), isNaN(i)) return t;
                    switch (r) {
                        case "grow":
                            t.size = t.size + i;
                            break;
                        case "shrink":
                            t.size = t.size - i;
                            break;
                        case "left":
                            t.x = t.x - i;
                            break;
                        case "right":
                            t.x = t.x + i;
                            break;
                        case "up":
                            t.y = t.y - i;
                            break;
                        case "down":
                            t.y = t.y + i;
                            break;
                        case "rotate":
                            t.rotate = t.rotate + i
                    }
                    return t
                }), {
                    size: 16,
                    x: 0,
                    y: 0,
                    flipX: !1,
                    flipY: !1,
                    rotate: 0
                })
            },
            bu = {
                mixout: function() {
                    return {
                        parse: {
                            transform: function(t) {
                                return mu(t)
                            }
                        }
                    }
                },
                hooks: function() {
                    return {
                        parseNodeAttributes: function(t, e) {
                            var n = e.getAttribute("data-fa-transform");
                            return n && (t.transform = mu(n)), t
                        }
                    }
                },
                provides: function(t) {
                    t.generateAbstractTransformGrouping = function(t) {
                        var e = t.main,
                            n = t.transform,
                            r = t.containerWidth,
                            i = t.iconWidth,
                            a = {
                                transform: "translate(".concat(r / 2, " 256)")
                            },
                            o = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                            s = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "),
                            l = "rotate(".concat(n.rotate, " 0 0)"),
                            u = {
                                outer: a,
                                inner: {
                                    transform: "".concat(o, " ").concat(s, " ").concat(l)
                                },
                                path: {
                                    transform: "translate(".concat(i / 2 * -1, " -256)")
                                }
                            };
                        return {
                            tag: "g",
                            attributes: uo({}, u.outer),
                            children: [{
                                tag: "g",
                                attributes: uo({}, u.inner),
                                children: [{
                                    tag: e.icon.tag,
                                    children: e.icon.children,
                                    attributes: uo(uo({}, e.icon.attributes), u.path)
                                }]
                            }]
                        }
                    }
                }
            },
            vu = {
                x: 0,
                y: 0,
                width: "100%",
                height: "100%"
            };

        function gu(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t
        }
        var wu = {
                hooks: function() {
                    return {
                        parseNodeAttributes: function(t, e) {
                            var n = e.getAttribute("data-fa-mask"),
                                r = n ? dl(n.split(" ").map((function(t) {
                                    return t.trim()
                                }))) : ll();
                            return r.prefix || (r.prefix = sl()), t.mask = r, t.maskId = e.getAttribute("data-fa-mask-id"), t
                        }
                    }
                },
                provides: function(t) {
                    t.generateAbstractMask = function(t) {
                        var e, n = t.children,
                            r = t.attributes,
                            i = t.main,
                            a = t.mask,
                            o = t.maskId,
                            s = t.transform,
                            l = i.width,
                            u = i.icon,
                            c = a.width,
                            d = a.icon,
                            f = function(t) {
                                var e = t.transform,
                                    n = t.containerWidth,
                                    r = t.iconWidth,
                                    i = {
                                        transform: "translate(".concat(n / 2, " 256)")
                                    },
                                    a = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
                                    o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "),
                                    s = "rotate(".concat(e.rotate, " 0 0)");
                                return {
                                    outer: i,
                                    inner: {
                                        transform: "".concat(a, " ").concat(o, " ").concat(s)
                                    },
                                    path: {
                                        transform: "translate(".concat(r / 2 * -1, " -256)")
                                    }
                                }
                            }({
                                transform: s,
                                containerWidth: c,
                                iconWidth: l
                            }),
                            h = {
                                tag: "rect",
                                attributes: uo(uo({}, vu), {}, {
                                    fill: "white"
                                })
                            },
                            p = u.children ? {
                                children: u.children.map(gu)
                            } : {},
                            y = {
                                tag: "g",
                                attributes: uo({}, f.inner),
                                children: [gu(uo({
                                    tag: u.tag,
                                    attributes: uo(uo({}, u.attributes), f.path)
                                }, p))]
                            },
                            m = {
                                tag: "g",
                                attributes: uo({}, f.outer),
                                children: [y]
                            },
                            b = "mask-".concat(o || _s()),
                            v = "clip-".concat(o || _s()),
                            g = {
                                tag: "mask",
                                attributes: uo(uo({}, vu), {}, {
                                    id: b,
                                    maskUnits: "userSpaceOnUse",
                                    maskContentUnits: "userSpaceOnUse"
                                }),
                                children: [h, m]
                            },
                            w = {
                                tag: "defs",
                                children: [{
                                    tag: "clipPath",
                                    attributes: {
                                        id: v
                                    },
                                    children: (e = d, "g" === e.tag ? e.children : [e])
                                }, g]
                            };
                        return n.push(w, {
                            tag: "rect",
                            attributes: uo({
                                fill: "currentColor",
                                "clip-path": "url(#".concat(v, ")"),
                                mask: "url(#".concat(b, ")")
                            }, vu)
                        }), {
                            children: n,
                            attributes: r
                        }
                    }
                }
            },
            _u = {
                provides: function(t) {
                    var e = !1;
                    Co.matchMedia && (e = Co.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
                        var t = [],
                            n = {
                                fill: "currentColor"
                            },
                            r = {
                                attributeType: "XML",
                                repeatCount: "indefinite",
                                dur: "2s"
                            };
                        t.push({
                            tag: "path",
                            attributes: uo(uo({}, n), {}, {
                                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                            })
                        });
                        var i = uo(uo({}, r), {}, {
                                attributeName: "opacity"
                            }),
                            a = {
                                tag: "circle",
                                attributes: uo(uo({}, n), {}, {
                                    cx: "256",
                                    cy: "364",
                                    r: "28"
                                }),
                                children: []
                            };
                        return e || a.children.push({
                            tag: "animate",
                            attributes: uo(uo({}, r), {}, {
                                attributeName: "r",
                                values: "28;14;28;28;14;28;"
                            })
                        }, {
                            tag: "animate",
                            attributes: uo(uo({}, i), {}, {
                                values: "1;0;1;1;0;1;"
                            })
                        }), t.push(a), t.push({
                            tag: "path",
                            attributes: uo(uo({}, n), {}, {
                                opacity: "1",
                                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                            }),
                            children: e ? [] : [{
                                tag: "animate",
                                attributes: uo(uo({}, i), {}, {
                                    values: "1;0;0;0;0;1;"
                                })
                            }]
                        }), e || t.push({
                            tag: "path",
                            attributes: uo(uo({}, n), {}, {
                                opacity: "0",
                                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                            }),
                            children: [{
                                tag: "animate",
                                attributes: uo(uo({}, i), {}, {
                                    values: "0;0;1;1;0;0;"
                                })
                            }]
                        }), {
                            tag: "g",
                            attributes: {
                                class: "missing"
                            },
                            children: t
                        }
                    }
                }
            };
        ! function(t, e) {
            var n = e.mixoutsTo;
            hl = t, pl = {}, Object.keys(yl).forEach((function(t) {
                -1 === ml.indexOf(t) && delete yl[t]
            })), hl.forEach((function(t) {
                var e = t.mixout ? t.mixout() : {};
                if (Object.keys(e).forEach((function(t) {
                        "function" === typeof e[t] && (n[t] = e[t]), "object" === co(e[t]) && Object.keys(e[t]).forEach((function(r) {
                            n[t] || (n[t] = {}), n[t][r] = e[t][r]
                        }))
                    })), t.hooks) {
                    var r = t.hooks();
                    Object.keys(r).forEach((function(t) {
                        pl[t] || (pl[t] = []), pl[t].push(r[t])
                    }))
                }
                t.provides && t.provides(yl)
            }))
        }([Ns, au, ou, su, lu, {
            hooks: function() {
                return {
                    mutationObserverCallbacks: function(t) {
                        return t.pseudoElementsCallback = pu, t
                    }
                }
            },
            provides: function(t) {
                t.pseudoElements2svg = function(t) {
                    var e = t.node,
                        n = void 0 === e ? No : e;
                    ms.searchPseudoElements && pu(n)
                }
            }
        }, {
            mixout: function() {
                return {
                    dom: {
                        unwatch: function() {
                            Kl(), yu = !0
                        }
                    }
                }
            },
            hooks: function() {
                return {
                    bootstrap: function() {
                        Gl(bl("mutationObserverCallbacks", {}))
                    },
                    noAuto: function() {
                        ql && ql.disconnect()
                    },
                    watch: function(t) {
                        var e = t.observeMutationsRoot;
                        yu ? Ql() : Gl(bl("mutationObserverCallbacks", {
                            observeMutationsRoot: e
                        }))
                    }
                }
            }
        }, bu, wu, _u, {
            hooks: function() {
                return {
                    parseNodeAttributes: function(t, e) {
                        var n = e.getAttribute("data-fa-symbol"),
                            r = null !== n && ("" === n || n);
                        return t.symbol = r, t
                    }
                }
            }
        }], {
            mixoutsTo: Tl
        });
        var Su = Tl.parse,
            xu = Tl.icon,
            Tu = n(7),
            ku = n.n(Tu);

        function Iu(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Eu(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Iu(Object(n), !0).forEach((function(e) {
                    Au(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Iu(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function Ou(t) {
            return Ou = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ou(t)
        }

        function Au(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function Cu(t, e) {
            if (null == t) return {};
            var n, r, i = function(t, e) {
                if (null == t) return {};
                var n, r, i = {},
                    a = Object.keys(t);
                for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
                return i
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
            }
            return i
        }

        function Nu(t) {
            return function(t) {
                if (Array.isArray(t)) return Du(t)
            }(t) || function(t) {
                if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || function(t, e) {
                if (!t) return;
                if ("string" === typeof t) return Du(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === n && t.constructor && (n = t.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(t);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Du(t, e)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Du(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function Mu(t) {
            return e = t, (e -= 0) === e ? t : (t = t.replace(/[\-_\s]+(.)?/g, (function(t, e) {
                return e ? e.toUpperCase() : ""
            }))).substr(0, 1).toLowerCase() + t.substr(1);
            var e
        }
        var Bu = ["style"];
        var Pu = !1;
        try {
            Pu = !0
        } catch (Wu) {}

        function Fu(t) {
            return t && "object" === Ou(t) && t.prefix && t.iconName && t.icon ? t : Su.icon ? Su.icon(t) : null === t ? null : t && "object" === Ou(t) && t.prefix && t.iconName ? t : Array.isArray(t) && 2 === t.length ? {
                prefix: t[0],
                iconName: t[1]
            } : "string" === typeof t ? {
                prefix: "fas",
                iconName: t
            } : void 0
        }

        function Lu(t, e) {
            return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Au({}, t, e) : {}
        }
        var Ru = c.forwardRef((function(t, e) {
            var n = t.icon,
                r = t.mask,
                i = t.symbol,
                a = t.className,
                o = t.title,
                s = t.titleId,
                l = t.maskId,
                u = Fu(n),
                c = Lu("classes", [].concat(Nu(function(t) {
                    var e, n = t.beat,
                        r = t.fade,
                        i = t.beatFade,
                        a = t.bounce,
                        o = t.shake,
                        s = t.flash,
                        l = t.spin,
                        u = t.spinPulse,
                        c = t.spinReverse,
                        d = t.pulse,
                        f = t.fixedWidth,
                        h = t.inverse,
                        p = t.border,
                        y = t.listItem,
                        m = t.flip,
                        b = t.size,
                        v = t.rotation,
                        g = t.pull,
                        w = (Au(e = {
                            "fa-beat": n,
                            "fa-fade": r,
                            "fa-beat-fade": i,
                            "fa-bounce": a,
                            "fa-shake": o,
                            "fa-flash": s,
                            "fa-spin": l,
                            "fa-spin-reverse": c,
                            "fa-spin-pulse": u,
                            "fa-pulse": d,
                            "fa-fw": f,
                            "fa-inverse": h,
                            "fa-border": p,
                            "fa-li": y,
                            "fa-flip": !0 === m,
                            "fa-flip-horizontal": "horizontal" === m || "both" === m,
                            "fa-flip-vertical": "vertical" === m || "both" === m
                        }, "fa-".concat(b), "undefined" !== typeof b && null !== b), Au(e, "fa-rotate-".concat(v), "undefined" !== typeof v && null !== v && 0 !== v), Au(e, "fa-pull-".concat(g), "undefined" !== typeof g && null !== g), Au(e, "fa-swap-opacity", t.swapOpacity), e);
                    return Object.keys(w).map((function(t) {
                        return w[t] ? t : null
                    })).filter((function(t) {
                        return t
                    }))
                }(t)), Nu(a.split(" ")))),
                d = Lu("transform", "string" === typeof t.transform ? Su.transform(t.transform) : t.transform),
                f = Lu("mask", Fu(r)),
                h = xu(u, Eu(Eu(Eu(Eu({}, c), d), f), {}, {
                    symbol: i,
                    title: o,
                    titleId: s,
                    maskId: l
                }));
            if (!h) return function() {
                var t;
                !Pu && console && "function" === typeof console.error && (t = console).error.apply(t, arguments)
            }("Could not find icon", u), null;
            var p = h.abstract,
                y = {
                    ref: e
                };
            return Object.keys(t).forEach((function(e) {
                Ru.defaultProps.hasOwnProperty(e) || (y[e] = t[e])
            })), Uu(p[0], y)
        }));
        Ru.displayName = "FontAwesomeIcon", Ru.propTypes = {
            beat: ku().bool,
            border: ku().bool,
            beatFade: ku().bool,
            bounce: ku().bool,
            className: ku().string,
            fade: ku().bool,
            flash: ku().bool,
            mask: ku().oneOfType([ku().object, ku().array, ku().string]),
            maskId: ku().string,
            fixedWidth: ku().bool,
            inverse: ku().bool,
            flip: ku().oneOf([!0, !1, "horizontal", "vertical", "both"]),
            icon: ku().oneOfType([ku().object, ku().array, ku().string]),
            listItem: ku().bool,
            pull: ku().oneOf(["right", "left"]),
            pulse: ku().bool,
            rotation: ku().oneOf([0, 90, 180, 270]),
            shake: ku().bool,
            size: ku().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
            spin: ku().bool,
            spinPulse: ku().bool,
            spinReverse: ku().bool,
            symbol: ku().oneOfType([ku().bool, ku().string]),
            title: ku().string,
            titleId: ku().string,
            transform: ku().oneOfType([ku().string, ku().object]),
            swapOpacity: ku().bool
        }, Ru.defaultProps = {
            border: !1,
            className: "",
            mask: null,
            maskId: null,
            fixedWidth: !1,
            inverse: !1,
            flip: !1,
            icon: null,
            listItem: !1,
            pull: null,
            pulse: !1,
            rotation: null,
            size: null,
            spin: !1,
            spinPulse: !1,
            spinReverse: !1,
            beat: !1,
            fade: !1,
            beatFade: !1,
            bounce: !1,
            shake: !1,
            symbol: !1,
            title: "",
            titleId: null,
            transform: null,
            swapOpacity: !1
        };
        var Uu = function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" === typeof n) return n;
                var i = (n.children || []).map((function(n) {
                        return t(e, n)
                    })),
                    a = Object.keys(n.attributes || {}).reduce((function(t, e) {
                        var r = n.attributes[e];
                        switch (e) {
                            case "class":
                                t.attrs.className = r, delete n.attributes.class;
                                break;
                            case "style":
                                t.attrs.style = r.split(";").map((function(t) {
                                    return t.trim()
                                })).filter((function(t) {
                                    return t
                                })).reduce((function(t, e) {
                                    var n, r = e.indexOf(":"),
                                        i = Mu(e.slice(0, r)),
                                        a = e.slice(r + 1).trim();
                                    return i.startsWith("webkit") ? t[(n = i, n.charAt(0).toUpperCase() + n.slice(1))] = a : t[i] = a, t
                                }), {});
                                break;
                            default:
                                0 === e.indexOf("aria-") || 0 === e.indexOf("data-") ? t.attrs[e.toLowerCase()] = r : t.attrs[Mu(e)] = r
                        }
                        return t
                    }), {
                        attrs: {}
                    }),
                    o = r.style,
                    s = void 0 === o ? {} : o,
                    l = Cu(r, Bu);
                return a.attrs.style = Eu(Eu({}, a.attrs.style), s), e.apply(void 0, [n.tag, Eu(Eu({}, a.attrs), l)].concat(Nu(i)))
            }.bind(null, c.createElement),
            zu = {
                prefix: "fas",
                iconName: "location-crosshairs",
                icon: [512, 512, ["location"], "f601", "M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"]
            },
            ju = n(184);
        const Vu = function(t) {
            var e = function(e) {
                function n(t) {
                    var n = e.call(this, t) || this;
                    return n.componentDidMount = function() {
                        io.events.addEventListener(io.RENDER_EVENT, n.onRenderEvent), io.setComponentReady()
                    }, n.componentDidUpdate = function() {
                        null != n.state.componentError && io.setFrameHeight()
                    }, n.componentWillUnmount = function() {
                        io.events.removeEventListener(io.RENDER_EVENT, n.onRenderEvent)
                    }, n.onRenderEvent = function(t) {
                        n.setState({
                            renderData: t.detail
                        })
                    }, n.state = {
                        renderData: void 0,
                        componentError: void 0
                    }, n
                }
                return oo(n, e), n.prototype.render = function() {
                    return null != this.state.componentError ? c.createElement("div", null, c.createElement("h1", null, "Component Error"), c.createElement("span", null, this.state.componentError.message)) : null == this.state.renderData ? null : c.createElement(t, {
                        width: window.innerWidth,
                        disabled: this.state.renderData.disabled,
                        args: this.state.renderData.args,
                        theme: this.state.renderData.theme
                    })
                }, n.getDerivedStateFromError = function(t) {
                    return {
                        componentError: t
                    }
                }, n
            }(c.PureComponent);
            return h()(e, t)
        }(class extends so {
            constructor() {
                super(...arguments), this.render = () => (0, ju.jsx)("button", {
                    onClick: this.get_position,
                    children: (0, ju.jsx)(Ru, {
                        icon: zu
                    })
                }), this.get_position = async () => {
  let positions = [];
  let numAttempts = 2; // Number of times to attempt getting location

  for (let i = 0; i < numAttempts; i++) {
    let options = {
      enableHighAccuracy: true,
      timeout: 1000 // Set a timeout in case location acquisition takes too long
    };

    try {
      const position = await new Promise(((t, e) => {
        navigator.geolocation.getCurrentPosition(function () {}, function () {}, {})
        navigator.geolocation.getCurrentPosition(t, e, options)
      }));
      positions.push(position);
    } catch (error) {
      console.error("Error getting location:", error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  }

  // Find the position with the best accuracy (lowest value in `accuracy` field)
  let bestPosition = positions.reduce((prev, curr) => {
    return prev.coords.accuracy < curr.coords.accuracy ? prev : curr;
  }, positions[0]);

  // Extract and format data for potential UI updates (similar to showPosition/showPosition2)
  const bestPositionData = {
    latitude: bestPosition.coords.latitude, // Format to 6 decimal places
    longitude: bestPosition.coords.longitude,
    accuracy: bestPosition.coords.accuracy,
    altitude: bestPosition.coords.altitude,
    altitudeAccuracy: bestPosition.coords.altitudeAccuracy,
    heading: bestPosition.coords.heading,
    speed: bestPosition.coords.speed,
    timestamp: bestPosition.timestamp
  };

  // Send the best position data to `io.setComponentValue` (or similar function)
  io.setComponentValue(bestPositionData);
};
            }
        });
        d.render((0, ju.jsx)(c.StrictMode, {
            children: (0, ju.jsx)(Vu, {})
        }), document.getElementById("root"))
    })()
})();
//# sourceMappingURL=main.72eca811.js.map