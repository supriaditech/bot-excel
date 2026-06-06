(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  8374,
  (e) => {
    "use strict";
    e.i(47167);
    var t = e.i(43476),
      n = e.i(77952),
      r = e.i(71645),
      l = e.i(72226),
      a = Object.defineProperty,
      o = Object.defineProperties,
      i = Object.getOwnPropertyDescriptors,
      s = Object.getOwnPropertySymbols,
      u = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable,
      d = (e, t, n) =>
        t in e
          ? a(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      p = r.createContext({}),
      m = r.forwardRef((e, t) => {
        let n;
        var l,
          a,
          m,
          h,
          v,
          {
            value: x,
            onChange: b,
            maxLength: w,
            textAlign: y = "left",
            pattern: S = "^\\d+$",
            inputMode: E = "numeric",
            onComplete: j,
            pushPasswordManagerStrategy: P = "increase-width",
            containerClassName: C,
            noScriptCSSFallback: N = g,
            render: k,
            children: M,
          } = e,
          R = ((e, t) => {
            var n = {};
            for (var r in e) u.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && s)
              for (var r of s(e))
                0 > t.indexOf(r) && c.call(e, r) && (n[r] = e[r]);
            return n;
          })(e, [
            "value",
            "onChange",
            "maxLength",
            "textAlign",
            "pattern",
            "inputMode",
            "onComplete",
            "pushPasswordManagerStrategy",
            "containerClassName",
            "noScriptCSSFallback",
            "render",
            "children",
          ]);
        let [T, O] = r.useState(
            "string" == typeof R.defaultValue ? R.defaultValue : "",
          ),
          I = null != x ? x : T,
          D =
            ((n = r.useRef()),
            r.useEffect(() => {
              n.current = I;
            }),
            n.current),
          A = r.useCallback(
            (e) => {
              (null == b || b(e), O(e));
            },
            [b],
          ),
          B = r.useMemo(
            () => (S ? ("string" == typeof S ? new RegExp(S) : S) : null),
            [S],
          ),
          W = r.useRef(null),
          _ = r.useRef(null),
          F = r.useRef({
            value: I,
            onChange: A,
            isIOS:
              "u" > typeof window &&
              (null ==
              (a =
                null == (l = null == window ? void 0 : window.CSS)
                  ? void 0
                  : l.supports)
                ? void 0
                : a.call(l, "-webkit-touch-callout", "none")),
          }),
          H = r.useRef({
            prev: [
              null == (m = W.current) ? void 0 : m.selectionStart,
              null == (h = W.current) ? void 0 : h.selectionEnd,
              null == (v = W.current) ? void 0 : v.selectionDirection,
            ],
          });
        (r.useImperativeHandle(t, () => W.current, []),
          r.useEffect(() => {
            let e = W.current,
              t = _.current;
            if (!e || !t) return;
            function n() {
              if (document.activeElement !== e) {
                (U(null), K(null));
                return;
              }
              let t = e.selectionStart,
                n = e.selectionEnd,
                r = e.selectionDirection,
                l = e.maxLength,
                a = e.value,
                o = H.current.prev,
                i = -1,
                s = -1,
                u;
              if (0 !== a.length && null !== t && null !== n) {
                let e = t === n,
                  r = t === a.length && a.length < l;
                if (e && !r) {
                  if (0 === t) ((i = 0), (s = 1), (u = "forward"));
                  else if (t === l) ((i = t - 1), (s = t), (u = "backward"));
                  else if (l > 1 && a.length > 1) {
                    let e = 0;
                    if (null !== o[0] && null !== o[1]) {
                      u = t < o[1] ? "backward" : "forward";
                      let n = o[0] === o[1] && o[0] < l;
                      "backward" !== u || n || (e = -1);
                    }
                    ((i = e + t), (s = e + t + 1));
                  }
                }
                -1 !== i &&
                  -1 !== s &&
                  i !== s &&
                  W.current.setSelectionRange(i, s, u);
              }
              let c = -1 !== i ? i : t,
                d = -1 !== s ? s : n,
                p = null != u ? u : r;
              (U(c), K(d), (H.current.prev = [c, d, p]));
            }
            if (
              (F.current.value !== e.value && F.current.onChange(e.value),
              (H.current.prev = [
                e.selectionStart,
                e.selectionEnd,
                e.selectionDirection,
              ]),
              document.addEventListener("selectionchange", n, {
                capture: !0,
              }),
              n(),
              document.activeElement === e && G(!0),
              !document.getElementById("input-otp-style"))
            ) {
              let e = document.createElement("style");
              if (
                ((e.id = "input-otp-style"),
                document.head.appendChild(e),
                e.sheet)
              ) {
                let t =
                  "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
                (f(
                  e.sheet,
                  "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }",
                ),
                  f(e.sheet, `[data-input-otp]:autofill { ${t} }`),
                  f(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`),
                  f(
                    e.sheet,
                    "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }",
                  ),
                  f(
                    e.sheet,
                    "[data-input-otp] + * { pointer-events: all !important; }",
                  ));
              }
            }
            let r = () => {
              t && t.style.setProperty("--root-height", `${e.clientHeight}px`);
            };
            r();
            let l = new ResizeObserver(r);
            return (
              l.observe(e),
              () => {
                (document.removeEventListener("selectionchange", n, {
                  capture: !0,
                }),
                  l.disconnect());
              }
            );
          }, []));
        let [L, $] = r.useState(!1),
          [z, G] = r.useState(!1),
          [V, U] = r.useState(null),
          [q, K] = r.useState(null);
        (r.useEffect(() => {
          var e;
          (setTimeout(
            (e = () => {
              var e, t, n, r;
              null == (e = W.current) || e.dispatchEvent(new Event("input"));
              let l = null == (t = W.current) ? void 0 : t.selectionStart,
                a = null == (n = W.current) ? void 0 : n.selectionEnd,
                o = null == (r = W.current) ? void 0 : r.selectionDirection;
              null !== l &&
                null !== a &&
                (U(l), K(a), (H.current.prev = [l, a, o]));
            }),
            0,
          ),
            setTimeout(e, 10),
            setTimeout(e, 50));
        }, [I, z]),
          r.useEffect(() => {
            void 0 !== D &&
              I !== D &&
              D.length < w &&
              I.length === w &&
              (null == j || j(I));
          }, [w, j, D, I]));
        let Q = (function ({
            containerRef: e,
            inputRef: t,
            pushPasswordManagerStrategy: n,
            isFocused: l,
          }) {
            let a = r.useRef({
                done: !1,
                refocused: !1,
              }),
              [o, i] = r.useState(!1),
              [s, u] = r.useState(!1),
              [c, d] = r.useState(!1),
              p = r.useMemo(
                () =>
                  "none" !== n &&
                  ("increase-width" === n ||
                    "experimental-no-flickering" === n) &&
                  o &&
                  s,
                [o, s, n],
              ),
              m = r.useCallback(() => {
                let r = e.current,
                  l = t.current;
                if (!r || !l || c || "none" === n) return;
                let o = r.getBoundingClientRect().left + r.offsetWidth,
                  s = r.getBoundingClientRect().top + r.offsetHeight / 2;
                if (
                  (0 !==
                    document.querySelectorAll(
                      '[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]',
                    ).length ||
                    document.elementFromPoint(o - 18, s) !== r) &&
                  (i(!0),
                  d(!0),
                  !a.current.refocused && document.activeElement === l)
                ) {
                  let e = [l.selectionStart, l.selectionEnd];
                  (l.blur(),
                    l.focus(),
                    l.setSelectionRange(e[0], e[1]),
                    (a.current.refocused = !0));
                }
              }, [e, t, c, n]);
            return (
              r.useEffect(() => {
                let t = e.current;
                if (!t || "none" === n) return;
                function r() {
                  u(window.innerWidth - t.getBoundingClientRect().right >= 40);
                }
                r();
                let l = setInterval(r, 1e3);
                return () => {
                  clearInterval(l);
                };
              }, [e, n]),
              r.useEffect(() => {
                let e = l || document.activeElement === t.current;
                if ("none" === n || !e) return;
                let r = setTimeout(m, 0),
                  a = setTimeout(m, 2e3),
                  o = setTimeout(m, 5e3),
                  i = setTimeout(() => {
                    d(!0);
                  }, 6e3);
                return () => {
                  (clearTimeout(r),
                    clearTimeout(a),
                    clearTimeout(o),
                    clearTimeout(i));
                };
              }, [t, l, n, m]),
              {
                hasPWMBadge: o,
                willPushPWMBadge: p,
                PWM_BADGE_SPACE_WIDTH: "40px",
              }
            );
          })({
            containerRef: _,
            inputRef: W,
            pushPasswordManagerStrategy: P,
            isFocused: z,
          }),
          J = r.useCallback(
            (e) => {
              let t = e.currentTarget.value.slice(0, w);
              t.length > 0 && B && !B.test(t)
                ? e.preventDefault()
                : ("string" == typeof D &&
                    t.length < D.length &&
                    document.dispatchEvent(new Event("selectionchange")),
                  A(t));
            },
            [w, A, D, B],
          ),
          X = r.useCallback(() => {
            var e;
            if (W.current) {
              let t = Math.min(W.current.value.length, w - 1),
                n = W.current.value.length;
              (null == (e = W.current) || e.setSelectionRange(t, n),
                U(t),
                K(n));
            }
            G(!0);
          }, [w]),
          Y = r.useCallback(
            (e) => {
              var t, n;
              let r = W.current;
              if (!F.current.isIOS || !e.clipboardData || !r) return;
              let l = e.clipboardData.getData("text/plain");
              e.preventDefault();
              let a = null == (t = W.current) ? void 0 : t.selectionStart,
                o = null == (n = W.current) ? void 0 : n.selectionEnd,
                i = (
                  a !== o
                    ? I.slice(0, a) + l + I.slice(o)
                    : I.slice(0, a) + l + I.slice(a)
                ).slice(0, w);
              if (i.length > 0 && B && !B.test(i)) return;
              ((r.value = i), A(i));
              let s = Math.min(i.length, w - 1),
                u = i.length;
              (r.setSelectionRange(s, u), U(s), K(u));
            },
            [w, A, B, I],
          ),
          Z = r.useMemo(
            () => ({
              position: "relative",
              cursor: R.disabled ? "default" : "text",
              userSelect: "none",
              WebkitUserSelect: "none",
              pointerEvents: "none",
            }),
            [R.disabled],
          ),
          ee = r.useMemo(
            () => ({
              position: "absolute",
              inset: 0,
              width: Q.willPushPWMBadge
                ? `calc(100% + ${Q.PWM_BADGE_SPACE_WIDTH})`
                : "100%",
              clipPath: Q.willPushPWMBadge
                ? `inset(0 ${Q.PWM_BADGE_SPACE_WIDTH} 0 0)`
                : void 0,
              height: "100%",
              display: "flex",
              textAlign: y,
              opacity: "1",
              color: "transparent",
              pointerEvents: "all",
              background: "transparent",
              caretColor: "transparent",
              border: "0 solid transparent",
              outline: "0 solid transparent",
              boxShadow: "none",
              lineHeight: "1",
              letterSpacing: "-.5em",
              fontSize: "var(--root-height)",
              fontFamily: "monospace",
              fontVariantNumeric: "tabular-nums",
            }),
            [Q.PWM_BADGE_SPACE_WIDTH, Q.willPushPWMBadge, y],
          ),
          et = r.useMemo(
            () =>
              r.createElement(
                "input",
                o(
                  ((e, t) => {
                    for (var n in t || (t = {})) u.call(t, n) && d(e, n, t[n]);
                    if (s) for (var n of s(t)) c.call(t, n) && d(e, n, t[n]);
                    return e;
                  })(
                    {
                      autoComplete: R.autoComplete || "one-time-code",
                    },
                    R,
                  ),
                  i({
                    "data-input-otp": !0,
                    "data-input-otp-mss": V,
                    "data-input-otp-mse": q,
                    inputMode: E,
                    pattern: null == B ? void 0 : B.source,
                    style: ee,
                    maxLength: w,
                    value: I,
                    ref: W,
                    onPaste: (e) => {
                      var t;
                      (Y(e), null == (t = R.onPaste) || t.call(R, e));
                    },
                    onChange: J,
                    onMouseOver: (e) => {
                      var t;
                      ($(!0), null == (t = R.onMouseOver) || t.call(R, e));
                    },
                    onMouseLeave: (e) => {
                      var t;
                      ($(!1), null == (t = R.onMouseLeave) || t.call(R, e));
                    },
                    onFocus: (e) => {
                      var t;
                      (X(), null == (t = R.onFocus) || t.call(R, e));
                    },
                    onBlur: (e) => {
                      var t;
                      (G(!1), null == (t = R.onBlur) || t.call(R, e));
                    },
                  }),
                ),
              ),
            [J, X, Y, E, ee, w, q, V, R, null == B ? void 0 : B.source, I],
          ),
          en = r.useMemo(
            () => ({
              slots: Array.from({
                length: w,
              }).map((e, t) => {
                let n =
                    z &&
                    null !== V &&
                    null !== q &&
                    ((V === q && t === V) || (t >= V && t < q)),
                  r = void 0 !== I[t] ? I[t] : null;
                return {
                  char: r,
                  isActive: n,
                  hasFakeCaret: n && null === r,
                };
              }),
              isFocused: z,
              isHovering: !R.disabled && L,
            }),
            [z, L, w, q, V, R.disabled, I],
          ),
          er = r.useMemo(
            () =>
              k
                ? k(en)
                : r.createElement(
                    p.Provider,
                    {
                      value: en,
                    },
                    M,
                  ),
            [M, en, k],
          );
        return r.createElement(
          r.Fragment,
          null,
          null !== N &&
            r.createElement(
              "noscript",
              null,
              r.createElement("style", null, N),
            ),
          r.createElement(
            "div",
            {
              ref: _,
              "data-input-otp-container": !0,
              style: Z,
              className: C,
            },
            er,
            r.createElement(
              "div",
              {
                style: {
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                },
              },
              et,
            ),
          ),
        );
      });
    function f(e, t) {
      try {
        e.insertRule(t);
      } catch (e) {
        console.error("input-otp could not insert CSS rule:", t);
      }
    }
    m.displayName = "Input";
    var g = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`,
      h = e.i(47163);
    let v = r.forwardRef(({ className: e, containerClassName: n, ...r }, l) =>
      (0, t.jsx)(m, {
        ref: l,
        containerClassName: (0, h.cn)(
          "flex items-center gap-2 has-[:disabled]:opacity-50",
          n,
        ),
        className: (0, h.cn)("disabled:cursor-not-allowed", e),
        ...r,
      }),
    );
    v.displayName = "InputOTP";
    let x = r.forwardRef(({ className: e, ...n }, r) =>
      (0, t.jsx)("div", {
        ref: r,
        className: (0, h.cn)("flex items-center", e),
        ...n,
      }),
    );
    x.displayName = "InputOTPGroup";
    let b = r.forwardRef(({ index: e, className: n, ...l }, a) => {
      let { char: o, hasFakeCaret: i, isActive: s } = r.useContext(p).slots[e];
      return (0, t.jsxs)("div", {
        ref: a,
        className: (0, h.cn)(
          "relative flex h-20 w-20 items-center justify-center border-y border-r border-input text-xl shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
          s && "z-10 ring-1 ring-ring",
          n,
        ),
        ...l,
        children: [
          o,
          i &&
            (0, t.jsx)("div", {
              className:
                "pointer-events-none absolute inset-0 flex items-center justify-center",
              children: (0, t.jsx)("div", {
                className:
                  "h-10 w-px animate-caret-blink bg-foreground duration-1000",
              }),
            }),
        ],
      });
    });
    ((b.displayName = "InputOTPSlot"),
      (r.forwardRef(({ ...e }, n) =>
        (0, t.jsx)("div", {
          ref: n,
          role: "separator",
          ...e,
          children: (0, t.jsx)(l.DashIcon, {}),
        }),
      ).displayName = "InputOTPSeparator"));
    var w = e.i(67290),
      y = e.i(47283);
    let S =
        "w-full max-w-sm rounded-xl border border-gray-300 bg-white p-4 shadow-md",
      E = "h-12 w-12 text-lg sm:h-14 sm:w-14";
    e.s(
      [
        "default",
        0,
        function ({ children: e }) {
          let l = (0, w.useMediaQuery)({
              query: "(max-width: 767px)",
            }),
            [a, o] = (0, r.useState)(""),
            [i, s] = (0, r.useState)(null),
            [u, c] = (0, r.useState)(!1),
            d = (0, r.useCallback)((e) => {
              "170922" === e
                ? (window.sessionStorage.setItem("verified", "true"),
                  s(!0),
                  c(!1))
                : (c(!0), o(""));
            }, []);
          return ((0, r.useEffect)(() => {
            s("true" === window.sessionStorage.getItem("verified"));
          }, []),
          null === i)
            ? (0, t.jsx)("div", {
                className: "flex flex-1 items-center justify-center px-4 py-8",
                children: (0, t.jsxs)("div", {
                  className: S,
                  children: [
                    (0, t.jsx)(y.Skeleton, {
                      className: "mb-2 h-6 w-40",
                    }),
                    (0, t.jsx)(y.Skeleton, {
                      className: "mb-6 h-4 w-full max-w-xs",
                    }),
                    (0, t.jsx)(y.Skeleton, {
                      className: "mb-4 h-12 w-full",
                    }),
                    (0, t.jsx)(y.Skeleton, {
                      className: "h-10 w-full",
                    }),
                  ],
                }),
              })
            : i
              ? (0, t.jsx)("div", {
                  className: "mx-auto flex w-full flex-col",
                  children: e,
                })
              : (0, t.jsx)("div", {
                  className:
                    "flex flex-1 items-center justify-center px-4 py-8",
                  children: (0, t.jsxs)("div", {
                    className: S,
                    children: [
                      (0, t.jsxs)("div", {
                        className: "border-b border-gray-200 pb-3",
                        children: [
                          (0, t.jsx)("h1", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Admin access",
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-0.5 text-sm text-gray-500",
                            children: "Enter your 6-digit PIN to continue",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-col gap-4 py-4",
                        children: [
                          (0, t.jsx)(v, {
                            maxLength: 6,
                            value: a,
                            type: "password",
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            onChange: (e) => {
                              (o(e), u && c(!1));
                            },
                            onComplete: d,
                            children: (0, t.jsx)(x, {
                              className: "w-full justify-center gap-0",
                              children: Array.from({
                                length: 6,
                              }).map((e, n) =>
                                (0, t.jsx)(
                                  b,
                                  {
                                    index: n,
                                    className: l ? `${E} !h-11 !w-11` : E,
                                  },
                                  n,
                                ),
                              ),
                            }),
                          }),
                          (0, t.jsx)("p", {
                            className: `text-center text-sm ${u ? "text-destructive" : "text-gray-500"}`,
                            children: u
                              ? "Wrong PIN, please try again"
                              : "Enter all 6 digits to continue",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "border-t border-gray-200 pt-3",
                        children: (0, t.jsx)(n.Button, {
                          size: "lg",
                          className: "w-full",
                          onClick: () => d(a),
                          disabled: a.length < 6,
                          children: "Verify",
                        }),
                      }),
                    ],
                  }),
                });
        },
      ],
      8374,
    );
  },
]);
