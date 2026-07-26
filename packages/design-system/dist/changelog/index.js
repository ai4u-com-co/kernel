import { jsxs as i, jsx as s } from "react/jsx-runtime";
import { useState as k, useRef as B, useEffect as w } from "react";
import { A as e } from "../palette-Cg2N1Fyc.js";
const E = "https://changelog-service-silk.vercel.app", A = {
  feat: e.moderateBlue,
  // funcionalidad nueva → success/info
  fix: e.hotOrange,
  // corrección → atención
  refactor: e.cadetGray,
  chore: e.cadetGray,
  docs: e.cadetGray
};
function F(o) {
  if (!o.committed_at) return o.date;
  const n = new Date(o.committed_at);
  if (isNaN(n.getTime())) return o.date;
  const r = n.toLocaleTimeString("es-CO", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
  });
  return `${o.date} · ${r}`;
}
function T(o) {
  const n = o.replace(/\s*Co-Authored-By:[^\n]*/gi, "").trim(), r = n.match(/^([a-z]+)(?:\([^)]*\))?!?:\s*(.+)$/i);
  return r ? { prefix: r[1].toLowerCase(), text: r[2] } : { prefix: "chore", text: n };
}
const j = ({
  client: o,
  app: n,
  serviceUrl: r = E,
  limit: p = 8,
  mode: C = "light",
  align: R = "right"
}) => {
  var S, v;
  const c = C === "light", [a, x] = k(null), [f, y] = k(!1), u = B(null);
  w(() => {
    const t = r.replace(/\/$/, "");
    let l = !0;
    return fetch(`${t}/api/changelog/${o}/${n}?limit=${p}`).then((h) => h.json()).then((h) => {
      l && x(h);
    }).catch(() => {
      l && x(null);
    }), () => {
      l = !1;
    };
  }, [r, o, n, p]), w(() => {
    if (!f) return;
    function t(l) {
      u.current && !u.current.contains(l.target) && y(!1);
    }
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [f]);
  const m = ((v = (S = a == null ? void 0 : a.entries) == null ? void 0 : S[0]) == null ? void 0 : v.version) ?? null;
  if (!m) return null;
  const d = c ? e.black : e.white, b = c ? e.white : e.black, z = `6px 6px 0px ${d}`, g = 'ui-monospace, "SFMono-Regular", Menlo, monospace';
  return /* @__PURE__ */ i("div", { ref: u, style: { position: "relative", display: "inline-block" }, children: [
    /* @__PURE__ */ i(
      "button",
      {
        onClick: () => y((t) => !t),
        "aria-label": `Versión ${m} — ver changelog`,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "3px 10px",
          border: `1px solid ${d}`,
          borderRadius: 0,
          background: b,
          color: d,
          fontSize: 12,
          fontFamily: g,
          fontWeight: 600,
          lineHeight: 1.6,
          cursor: "pointer",
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ s(
            "span",
            {
              style: {
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: e.moderateBlue,
                flexShrink: 0
              }
            }
          ),
          "v",
          m
        ]
      }
    ),
    f && a && /* @__PURE__ */ i(
      "div",
      {
        role: "dialog",
        "aria-label": "Changelog",
        style: {
          position: "absolute",
          bottom: "calc(100% + 8px)",
          ...R === "left" ? { left: 0, right: "auto" } : { right: 0, left: "auto" },
          zIndex: 9999,
          width: 340,
          maxHeight: 420,
          overflowY: "auto",
          background: b,
          color: d,
          border: `1px solid ${d}`,
          borderRadius: 0,
          boxShadow: z
        },
        children: [
          /* @__PURE__ */ i(
            "div",
            {
              style: {
                padding: "10px 16px",
                borderBottom: `1px solid ${c ? e.tints.erieBlack10 : "rgba(255,255,255,0.15)"}`,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: e.cadetGray,
                fontFamily: g
              },
              children: [
                "Changelog · ",
                n
              ]
            }
          ),
          /* @__PURE__ */ s("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: a.entries.map((t) => /* @__PURE__ */ i(
            "li",
            {
              style: {
                padding: "10px 16px",
                borderBottom: `1px solid ${c ? e.gray[100] : "rgba(255,255,255,0.06)"}`
              },
              children: [
                /* @__PURE__ */ i(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 4
                    },
                    children: [
                      /* @__PURE__ */ i("span", { style: { fontSize: 13, fontWeight: 700, fontFamily: g }, children: [
                        "v",
                        t.version
                      ] }),
                      /* @__PURE__ */ s("span", { style: { fontSize: 11, color: e.cadetGray, fontFamily: g }, children: F(t) })
                    ]
                  }
                ),
                /* @__PURE__ */ s("ul", { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 3 }, children: t.changes.map((l, h) => {
                  const { prefix: $, text: G } = T(l), L = A[$] ?? e.cadetGray;
                  return /* @__PURE__ */ i("li", { style: { fontSize: 12, lineHeight: 1.5 }, children: [
                    /* @__PURE__ */ s(
                      "span",
                      {
                        style: {
                          display: "inline-block",
                          padding: "1px 5px",
                          marginRight: 5,
                          borderRadius: 0,
                          background: L,
                          color: e.white,
                          fontSize: 10,
                          fontWeight: 700,
                          fontFamily: g
                        },
                        children: $
                      }
                    ),
                    /* @__PURE__ */ s("span", { style: { color: c ? e.gray[600] : e.gray[300] }, children: G })
                  ] }, h);
                }) })
              ]
            },
            t.id
          )) }),
          a.total > p && /* @__PURE__ */ i("div", { style: { padding: "8px 16px", fontSize: 11, color: e.cadetGray, fontStyle: "italic" }, children: [
            "+",
            a.total - p,
            " entradas más"
          ] })
        ]
      }
    )
  ] });
};
export {
  j as ChangelogPill
};
//# sourceMappingURL=index.js.map
