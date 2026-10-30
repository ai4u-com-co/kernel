var ft = Object.defineProperty;
var bt = (t, r, a) => r in t ? ft(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var G = (t, r, a) => bt(t, typeof r != "symbol" ? r + "" : r, a);
import { A as g, S as ee, C as yt, u as wt } from "./palette-n0sYhpzg.js";
import { a as Wa, b as Ma } from "./palette-n0sYhpzg.js";
import { BREAKPOINT_TOKENS as be, TYPOGRAPHY_TOKENS as k, SPACING_TOKENS as Z, BORDER_TOKENS as X, TEXT_VARIANTS as z, SHADOW_TOKENS as pe, Z_INDEX_TOKENS as kt } from "./tokens/index.js";
import { AI4U_DESIGN_TOKENS as _a, COMPONENT_SPACING as Oa, MUI_BREAKPOINTS as La, TRANSITION_TOKENS as Ba, TYPOGRAPHY_UTILITIES as Pa, createAI4UTokens as Na } from "./tokens/index.js";
import { jsx as e, jsxs as l, Fragment as D } from "react/jsx-runtime";
import { styled as O, Button as Q, Box as n, Typography as y, useTheme as M, Container as K, Stack as W, Skeleton as E, useMediaQuery as ge, Menu as nt, MenuItem as ye, Link as at, keyframes as St, Fab as vt, Dialog as It, DialogTitle as Ct, IconButton as U, alpha as _, DialogContent as zt, Paper as me, CircularProgress as Tt, TextField as it, Card as _e, CardContent as ue, Avatar as Ge, Chip as oe, Divider as ve, Alert as Et, AlertTitle as At, Collapse as Rt, Grid as P, Tabs as Ft, Tab as $t, TableContainer as Wt, Table as Mt, TableHead as Dt, TableRow as Ve, TableCell as V, TableBody as _t, AppBar as Ot, Toolbar as Lt } from "@mui/material";
import Bt, { useState as v, useRef as xe, useEffect as $, useCallback as q, useSyncExternalStore as Pt, createContext as Oe, useMemo as H, useContext as Ie, Component as Nt, Suspense as Ht } from "react";
import { ThemeProvider as st, createTheme as lt, useTheme as jt } from "@mui/material/styles";
import Ut from "@mui/material/CssBaseline";
import ct from "@mui/icons-material/Close";
import Gt from "@mui/icons-material/Send";
import { useNavigate as Le, Link as ce, useLocation as Vt } from "react-router-dom";
import qt from "@mui/icons-material/Work";
import { Receipt as Yt, MoreVert as qe, AttachMoney as Xt, Favorite as Kt, TrendingUp as Zt, School as Qt, FitnessCenter as Jt, ShoppingCart as er, AccountBalance as tr, Add as rr, RefreshOutlined as or, ExpandMore as nr, Bed as ar, Refresh as dt, Wifi as ir, Bluetooth as sr, LocationOn as lr, WbSunny as Ye, Cloud as cr, Opacity as dr, ContentCopy as pr } from "@mui/icons-material";
import hr from "@mui/icons-material/CalendarMonth";
import gr from "@mui/icons-material/Instagram";
import mr from "@mui/icons-material/Facebook";
import ur from "@mui/icons-material/LinkedIn";
import xr from "@mui/icons-material/Email";
import fr from "@mui/icons-material/LocationOn";
import br from "@mui/icons-material/X";
import yr from "@mui/icons-material/WhatsApp";
import wr from "@mui/icons-material/Menu";
import Xe from "@mui/icons-material/LightMode";
import Ke from "@mui/icons-material/DarkMode";
const kr = (t, r = {}) => {
  const [a, o] = v(!1), [i, s] = v(!1), [p, c] = v(!1), [d, h] = v(""), m = xe(null), { threshold: u = 0.1, rootMargin: x = "50px", priority: f = !1 } = r;
  return $(() => {
    if (h(t), f) {
      s(!0);
      return;
    }
    const b = new IntersectionObserver(
      ([S]) => {
        S.isIntersecting && (s(!0), b.disconnect());
      },
      {
        threshold: u,
        rootMargin: x
      }
    );
    return m.current && b.observe(m.current), () => {
      b.disconnect();
    };
  }, [u, x, f, t]), $(() => {
    if (!i) return;
    const b = new Image();
    b.onload = () => {
      o(!0), c(!1);
    }, b.onerror = () => {
      c(!0), o(!1);
    }, b.src = d;
  }, [d, i]), {
    imgRef: m,
    isLoaded: a,
    isInView: i,
    error: p,
    imageSrc: d
  };
}, Fe = (t = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior: t
  });
};
function re(t) {
  const r = `(min-width: ${be[t]}px)`, a = q(
    (i) => {
      if (typeof window > "u" || !window.matchMedia) return () => {
      };
      const s = window.matchMedia(r);
      return s.addEventListener("change", i), () => s.removeEventListener("change", i);
    },
    [r]
  ), o = q(() => typeof window > "u" || !window.matchMedia ? !1 : window.matchMedia(r).matches, [r]);
  return Pt(a, o, () => !1);
}
function nn() {
  const t = re("sm"), r = re("md"), a = re("lg"), o = re("xl");
  return re("2xl") ? "2xl" : o ? "xl" : a ? "lg" : r ? "md" : t ? "sm" : "xs";
}
function an() {
  return !re("md");
}
const Sr = k.fontFamily.code, vr = {
  fontFamily: k.fontFamily.primary,
  h1: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.medium,
    fontSize: k.fontSize["2xl"]
  },
  h2: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.medium,
    fontSize: k.fontSize.xl
  },
  h3: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.medium,
    fontSize: k.fontSize.lg
  },
  h4: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.medium,
    fontSize: k.fontSize.base
  },
  h5: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.regular,
    fontSize: k.fontSize.sm
  },
  h6: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.regular,
    fontSize: k.fontSize.xs
  },
  body1: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.regular,
    fontSize: k.fontSize.sm
  },
  body2: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.regular,
    fontSize: k.fontSize.xs
  },
  button: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.regular,
    textTransform: "none"
  },
  caption: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.regular,
    fontSize: k.fontSize.xs
  },
  overline: {
    fontFamily: k.fontFamily.primary,
    fontWeight: k.fontWeight.regular,
    fontSize: k.fontSize.xs,
    textTransform: "none",
    letterSpacing: "0.08em"
  }
}, Ir = (t) => {
  const r = t === "light";
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme: a }) => ({
          borderRadius: 0,
          // Brutalist Zero Radius
          fontWeight: 700,
          textTransform: "none",
          boxShadow: "none",
          padding: a.spacing(1.5, 3),
          transition: "all 0.2s steps(4, end)",
          // Snappy Industrial Transition
          border: "none"
        }),
        outlined: {
          borderWidth: "2px",
          borderColor: r ? g.black : g.white,
          color: r ? g.black : g.white,
          "&:hover": {
            backgroundColor: r ? g.black : g.white,
            borderColor: r ? g.black : g.white,
            color: r ? g.white : g.black,
            borderWidth: "2px"
          }
        },
        text: {
          color: r ? g.black : g.white,
          fontWeight: 700,
          textDecoration: "none",
          "&:hover": {
            backgroundColor: r ? g.tints.erieBlack8 : "rgba(255,255,255,0.08)"
          }
        }
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: r ? g.erieBlack : g.white,
            color: r ? g.white : g.erieBlack,
            "&:hover": {
              backgroundColor: r ? "#2A2A2A" : g.gray[200],
              transform: "translate(-2px, -2px)",
              boxShadow: r ? "4px 4px 0px 0px rgba(0,0,0,0.3)" : "4px 4px 0px 0px rgba(255,255,255,0.3)"
            }
          }
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderWidth: "2px",
            borderColor: r ? g.erieBlack : g.white,
            color: r ? g.erieBlack : g.white,
            "&:hover": {
              backgroundColor: r ? g.erieBlack : g.white,
              color: r ? g.white : g.erieBlack
            }
          }
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          // Brutalist Zero Radius
          backgroundColor: r ? g.white : g.black,
          border: `1px solid ${r ? g.black : g.white}`,
          boxShadow: "none",
          transition: "all 0.2s steps(4, end)",
          "&:hover": {
            transform: "translate(-4px, -4px)",
            boxShadow: r ? `8px 8px 0px ${g.black}` : `8px 8px 0px ${g.white}`
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 200ms",
          color: r ? g.erieBlack : g.white,
          "&:hover": {
            backgroundColor: r ? g.tints.erieBlack8 : "rgba(255,255,255,0.08)"
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: r ? g.tints.erieBlack10 : "rgba(255,255,255,0.08)",
          borderBottomWidth: "1px"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // Usa background.paper de la paleta (white light / gray[800] dark)
          backgroundImage: "none"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Header sticky: mint-cream/80 + backdrop-blur — Brand Book §layout
          backgroundColor: r ? g.tints.mintCream60 : "rgba(23,23,23,0.85)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
          borderBottom: `1px solid ${r ? g.tints.erieBlack10 : "rgba(255,255,255,0.08)"}`,
          color: r ? g.erieBlack : g.white
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          // pill — Brand Book §badges
          backgroundColor: r ? g.tints.erieBlack8 : "rgba(255,255,255,0.08)",
          border: "none",
          color: r ? g.erieBlack : g.white,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          fontSize: "0.75rem"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: r ? g.erieBlack : g.white,
          "& code": {
            fontFamily: Sr,
            backgroundColor: r ? g.tints.erieBlack8 : "rgba(255,255,255,0.10)",
            padding: "2px 6px",
            borderRadius: 4
          }
        }
      }
    }
  };
}, Cr = (t) => {
  const r = t === "light";
  return {
    mode: t,
    primary: {
      main: r ? g.erieBlack : g.white,
      light: g.gray[700],
      dark: g.gray[900],
      contrastText: r ? g.white : g.erieBlack
    },
    secondary: {
      main: g.cadetGray,
      light: g.gray[400],
      dark: g.gray[700],
      contrastText: r ? g.erieBlack : g.white
    },
    background: {
      // bg-1: Mint Cream como fondo de página (claro) / Erie Black (oscuro)
      default: r ? g.mintCream : g.erieBlack,
      // bg-2: White como superficie elevada (cards, dialogs)
      paper: r ? g.white : g.gray[800]
    },
    text: {
      primary: r ? g.erieBlack : g.white,
      secondary: r ? g.cadetGray : g.cadetGray,
      disabled: g.gray[400]
    },
    action: {
      active: r ? g.erieBlack : g.white,
      hover: r ? g.tints.erieBlack8 : "rgba(255,255,255,0.08)",
      selected: r ? g.tints.erieBlack10 : "rgba(255,255,255,0.12)",
      disabled: g.cadetGray,
      disabledBackground: r ? "rgba(23,23,23,0.06)" : "rgba(255,255,255,0.06)"
    },
    // Inversión semántica crítica: orange = error, blue = success
    error: { main: g.hotOrange, light: g.tints.hotOrange30, contrastText: g.white },
    success: { main: g.moderateBlue, light: g.tints.moderateBlue15, contrastText: g.white },
    warning: { main: g.hotOrange, contrastText: g.white },
    info: { main: g.moderateBlue, contrastText: g.white },
    divider: r ? g.tints.erieBlack10 : "rgba(255,255,255,0.08)"
  };
}, zr = () => [
  "none",
  "0px 2px 4px rgba(0,0,0,0.05)",
  "0px 4px 8px rgba(0,0,0,0.05)",
  "0px 6px 12px rgba(0,0,0,0.08)",
  "0px 8px 16px rgba(0,0,0,0.08)",
  "0px 10px 20px rgba(0,0,0,0.1)",
  "0px 12px 24px rgba(0,0,0,0.1)",
  "0px 14px 28px rgba(0,0,0,0.12)",
  "0px 16px 32px rgba(0,0,0,0.12)",
  "0px 18px 36px rgba(0,0,0,0.14)",
  "0px 20px 40px rgba(0,0,0,0.14)",
  "0px 22px 44px rgba(0,0,0,0.16)",
  "0px 24px 48px rgba(0,0,0,0.16)",
  "0px 26px 52px rgba(0,0,0,0.18)",
  "0px 28px 56px rgba(0,0,0,0.18)",
  "0px 30px 60px rgba(0,0,0,0.2)",
  "0px 32px 64px rgba(0,0,0,0.2)",
  "0px 34px 68px rgba(0,0,0,0.22)",
  "0px 36px 72px rgba(0,0,0,0.22)",
  "0px 38px 76px rgba(0,0,0,0.24)",
  "0px 40px 80px rgba(0,0,0,0.24)",
  "0px 42px 84px rgba(0,0,0,0.25)",
  "0px 44px 88px rgba(0,0,0,0.25)",
  "0px 46px 92px rgba(0,0,0,0.26)",
  "0px 48px 96px rgba(0,0,0,0.26)"
], Tr = (t) => lt({
  palette: Cr(t),
  typography: vr,
  components: Ir(t),
  shape: {
    borderRadius: 0
    // Brutalist zero radius — aligned with components
  },
  shadows: zr()
}), pt = Oe({
  mode: "light",
  toggleColorMode: () => {
  }
}), Be = () => Ie(pt), sn = ({ children: t }) => {
  const [r, a] = v(() => {
    if (typeof window > "u") return "light";
    const p = localStorage.getItem("ai4u-theme-mode");
    return p === "dark" || p === "light" ? p : "light";
  }), o = q(() => {
    a((p) => {
      const c = p === "light" ? "dark" : "light";
      return typeof window < "u" && (localStorage.setItem("ai4u-theme-mode", c), document.documentElement.setAttribute("data-theme", c)), c;
    });
  }, []);
  $(() => {
    document.documentElement.setAttribute("data-theme", r);
  }, [r]);
  const i = H(() => ({ mode: r, toggleColorMode: o }), [r, o]), s = H(() => Tr(r), [r]);
  return /* @__PURE__ */ e(pt.Provider, { value: i, children: /* @__PURE__ */ l(st, { theme: s, children: [
    /* @__PURE__ */ e(Ut, {}),
    t
  ] }) });
}, $e = Oe({
  surface: "theme"
}), ln = ({ children: t, surface: r }) => {
  const a = Ie($e), { mode: o } = Be(), i = r || a.surface, s = H(() => i === "theme" ? o : ee[i].effectiveMode, [i, o]), p = H(() => {
    const c = s === "light";
    return lt({
      palette: {
        mode: s,
        primary: {
          main: c ? g.black : g.white,
          contrastText: c ? g.white : g.black
        },
        background: {
          default: c ? g.accentColors.mint : g.black,
          paper: c ? g.accentColors.mint : g.gray[900]
        },
        text: {
          primary: c ? g.black : g.white,
          secondary: c ? g.gray[600] : g.gray[300]
        }
      },
      // Heredar tipografía y otros ajustes si es necesario, 
      // pero lo más importante es la paleta para el contraste.
      typography: {
        fontFamily: k.fontFamily.primary
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "9999px",
              textTransform: "none"
            },
            outlined: {
              borderColor: c ? "rgba(0,0,0,0.23)" : "rgba(255,255,255,0.23)",
              color: c ? g.black : g.white
            }
          },
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                backgroundColor: c ? g.black : g.white,
                color: c ? g.white : g.black
              }
            }
          ]
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: c ? g.black : g.white
            }
          }
        }
      }
    });
  }, [s]);
  return /* @__PURE__ */ e($e.Provider, { value: { surface: i }, children: /* @__PURE__ */ e(st, { theme: p, children: t }) });
}, Er = () => Ie($e), I = () => {
  const t = jt(), { mode: r } = Be(), { surface: a } = Er(), o = H(() => a === "theme" ? yt[r] : ee[a], [r, a]), i = H(() => a === "theme" ? r : ee[a].effectiveMode, [r, a]), s = wt(i);
  return H(() => ({
    // Modo actual (global)
    mode: r,
    // Modo efectivo para la superficie actual
    effectiveMode: i,
    // Superficie actual
    surface: a,
    // Colores base - use static reference
    palette: g,
    // Colores con contraste automático según superficie
    contrast: o,
    // Variantes de componentes adaptadas a la superficie
    components: s.components,
    // Helpers para uso común - memoized
    helpers: {
      // Para fondos
      background: {
        primary: o.background,
        secondary: o.surface,
        accent: i === "light" ? "#FFF5F0" : "#2A1A0F"
      },
      // Para textos - Minimalista (sin naranja como primario)
      text: {
        primary: o.text.primary,
        secondary: o.text.secondary,
        disabled: o.text.disabled,
        // Acentos mínimos (solo para casos excepcionales)
        accent: i === "light" ? g.black : g.white,
        // Garantizar contraste mínimo
        highContrast: i === "light" ? "#171717" : "#FFFFFF",
        mediumContrast: i === "light" ? "#333333" : "#F0F0F0",
        // Contraste máximo para modo dark
        darkHighContrast: i === "dark" ? "#FFFFFF" : "#171717",
        darkMediumContrast: i === "dark" ? "#E8E8E8" : "#333333"
      },
      // Para bordes - Minimalista (sin naranja)
      border: {
        primary: o.border,
        secondary: o.divider,
        accent: i === "light" ? g.gray[400] : g.gray[600]
      },
      // Para estados
      state: {
        hover: i === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.25)",
        selected: i === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.35)",
        disabled: i === "light" ? "rgba(0, 0, 0, 0.26)" : "rgba(255, 255, 255, 0.3)"
      }
    },
    // Acceso directo al tema MUI
    theme: t
  }), [r, i, a, o, s.components, t]);
}, cn = (t, r) => {
  const { components: a } = I();
  return H(() => {
    switch (t) {
      case "button":
        return a.button[r];
      case "card":
        return a.card[r];
      default:
        return null;
    }
  }, [a, t, r]);
}, dn = () => {
  const { mode: t, contrast: r } = I();
  return H(() => ({
    mode: t,
    // Fondo claro → Texto oscuro
    light: {
      background: r.background,
      text: r.text.primary
    },
    // Fondo oscuro → Texto claro
    dark: {
      background: t === "dark" ? r.background : "#171717",
      text: t === "dark" ? r.text.primary : "#FFFFFF"
    }
  }), [t, r]);
}, Ar = () => {
  const [t, r] = v(!1), [a, o] = v(!1);
  return $(() => {
    const i = () => {
      const p = window.matchMedia("(display-mode: standalone)").matches, c = window.navigator.standalone;
      o(p || c), r(p || c);
    };
    i();
    const s = window.matchMedia("(display-mode: standalone)");
    return s.addListener(i), () => {
      s.removeListener(i);
    };
  }, []), { isPWA: t, isStandalone: a };
};
class Rr {
  constructor() {
    G(this, "isDev", !1);
    G(this, "log", (...r) => {
      this.isDev && console.log(...r);
    });
    G(this, "error", (...r) => {
      this.isDev && console.error(...r);
    });
    G(this, "warn", (...r) => {
      this.isDev && console.warn(...r);
    });
    G(this, "info", (...r) => {
      this.isDev && console.info(...r);
    });
    G(this, "debug", (...r) => {
      this.isDev && console.debug(...r);
    });
  }
}
const F = new Rr(), te = {
  // Eventos de negocio
  SERVICE_INTEREST: "service_interest",
  CONSULTATION_REQUEST: "consultation_request",
  DIAGNOSTIC_START: "diagnostic_start",
  // Eventos de engagement
  PHILOSOPHY_ENGAGEMENT: "philosophy_engagement",
  // Eventos técnicos
  PERFORMANCE_ISSUE: "performance_issue",
  ERROR_BOUNDARY_HIT: "error_boundary_hit"
};
class Fr {
  constructor() {
    G(this, "isGALoaded", !1);
    this.checkGAAvailability();
  }
  checkGAAvailability() {
    typeof window < "u" && window.gtag ? (this.isGALoaded = !0, F.log("📊 Google Analytics disponible")) : F.warn("⚠️ Google Analytics no disponible");
  }
  // Tracking de eventos específicos AI4U
  trackServiceInterest(r, a = "unknown") {
    this.trackEvent({
      action: te.SERVICE_INTEREST,
      category: "business",
      label: r,
      custom_parameters: {
        source: a,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        user_journey_point: "service_exploration"
      }
    });
  }
  trackConsultationRequest(r = "chat", a) {
    this.trackEvent({
      action: te.CONSULTATION_REQUEST,
      category: "conversion",
      label: r,
      value: 1,
      // Alto valor para conversiones
      custom_parameters: {
        service_type: a,
        contact_method: r,
        conversion_funnel: "consultation_request"
      }
    });
  }
  trackDiagnosticStart(r = "homepage") {
    this.trackEvent({
      action: te.DIAGNOSTIC_START,
      category: "engagement",
      label: r,
      custom_parameters: {
        diagnostic_type: "ai_readiness",
        entry_point: r
      }
    });
  }
  trackPhilosophyEngagement(r, a) {
    this.trackEvent({
      action: te.PHILOSOPHY_ENGAGEMENT,
      category: "content",
      label: r,
      value: a,
      custom_parameters: {
        philosophy_section: r,
        engagement_type: "humanistic_ai",
        time_spent_seconds: a
      }
    });
  }
  trackPerformanceIssue(r, a, o) {
    this.trackEvent({
      action: te.PERFORMANCE_ISSUE,
      category: "technical",
      label: r,
      value: Math.round(a),
      custom_parameters: {
        metric_name: r,
        actual_value: a,
        threshold_exceeded: o,
        user_agent: navigator.userAgent.substring(0, 100)
      }
    });
  }
  trackErrorBoundary(r, a) {
    var o;
    this.trackEvent({
      action: te.ERROR_BOUNDARY_HIT,
      category: "error",
      label: r.message || "unknown_error",
      custom_parameters: {
        error_message: r.message,
        error_stack: (o = r.stack) == null ? void 0 : o.substring(0, 500),
        component_stack: a == null ? void 0 : a.substring(0, 300),
        page_url: window.location.href
      }
    });
  }
  // Método genérico para eventos customizados
  trackEvent(r) {
    var a;
    if (!this.isGALoaded) {
      F.warn("Analytics event skipped - GA not loaded:", r.action);
      return;
    }
    try {
      const o = {
        event_category: r.category || "general",
        event_label: r.label || ""
      };
      r.value !== void 0 && (o.value = r.value), r.custom_parameters && Object.assign(o, r.custom_parameters), (a = window.gtag) == null || a.call(window, "event", r.action, o), F.log(`📊 Event tracked: ${r.action}`, r.category);
    } catch (o) {
      F.error("Error tracking analytics event:", o);
    }
  }
  // Tracking de pageviews mejorado
  trackPageView(r, a) {
    var i;
    if (!this.isGALoaded) return;
    const o = window.__AI4U_GA_ID__;
    if (o)
      try {
        (i = window.gtag) == null || i.call(window, "config", o, {
          page_title: `${r} | AI4U`,
          page_location: window.location.href,
          ...a
        }), F.log(`📊 Page view tracked: ${r}`);
      } catch (s) {
        F.error("Error tracking page view:", s);
      }
  }
  // Métricas de tiempo de permanencia
  trackTimeOnPage(r, a) {
    this.trackEvent({
      action: "time_on_page",
      category: "engagement",
      label: r,
      value: Math.round(a / 1e3),
      // Convertir a segundos
      custom_parameters: {
        time_spent_ms: a,
        page_name: r,
        engagement_quality: a > 3e4 ? "high" : a > 1e4 ? "medium" : "low"
      }
    });
  }
}
const ht = new Fr();
function pn(t) {
  typeof window > "u" || !t || (window.__AI4U_GA_ID__ = t);
}
class $r {
  constructor() {
    G(this, "sessionId");
    this.sessionId = this.generateSessionId(), this.setupGlobalErrorHandlers();
  }
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  setupGlobalErrorHandlers() {
    window.addEventListener("error", (r) => {
      var a;
      this.captureError({
        message: r.message,
        stack: (a = r.error) == null ? void 0 : a.stack,
        url: r.filename,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        errorBoundary: !1
      });
    }), window.addEventListener("unhandledrejection", (r) => {
      var a;
      this.captureError({
        message: `Unhandled Promise Rejection: ${r.reason}`,
        stack: (a = r.reason) == null ? void 0 : a.stack,
        url: window.location.href,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        errorBoundary: !1
      });
    }), F.log("🛡️ Error tracking initialized");
  }
  captureError(r) {
    const a = {
      message: r.message || "Unknown error",
      stack: r.stack,
      componentStack: r.componentStack,
      errorBoundary: r.errorBoundary || !1,
      url: r.url || window.location.href,
      userAgent: navigator.userAgent.substring(0, 200),
      timestamp: r.timestamp || (/* @__PURE__ */ new Date()).toISOString(),
      sessionId: this.sessionId,
      ...r
    };
    F.error("🚨 Error captured:", a), ht.trackErrorBoundary(a, a.componentStack), this.sendToRemoteService(a);
  }
  captureException(r, a) {
    this.captureError({
      message: r.message,
      stack: r.stack,
      url: window.location.href,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      errorBoundary: !1,
      // Agregar contexto adicional
      ...a && { context: a }
    });
  }
  captureMessage(r, a = "info") {
    const o = {
      message: r,
      url: window.location.href,
      userAgent: navigator.userAgent.substring(0, 200),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      sessionId: this.sessionId
    };
    a === "error" ? this.captureError(o) : F.log(`📢 Message captured (${a}):`, r);
  }
  async sendToRemoteService(r) {
    try {
      if (this.shouldSendError(r)) {
        const a = {
          error: r,
          meta: {
            project: "ai4u-website",
            environment: "production",
            version: "1.0.0",
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        };
        F.log("📤 Error would be sent to remote service:", a);
      }
    } catch (a) {
      F.error("Failed to send error to remote service:", a);
    }
  }
  shouldSendError(r) {
    return ![
      "Script error",
      "Network request failed",
      "Loading chunk",
      "ChunkLoadError"
    ].some(
      (o) => r.message.toLowerCase().includes(o.toLowerCase())
    );
  }
  // Método para agregar contexto a los errores
  addContext(r, a) {
    F.log(`🏷️ Error context added: ${r}=`, a);
  }
  // Método para identificar al usuario (GDPR compliant)
  setUser(r) {
    F.log(`👤 User identified: ${r.substring(0, 8)}...`);
  }
}
const Wr = new $r(), Mr = (t, r = {}) => {
  const {
    priority: a = !1,
    size: o = "original",
    format: i = "webp",
    fallback: s,
    preload: p = !1
  } = r, [c, d] = v({
    src: "",
    isLoaded: !1,
    error: !1,
    format: "original",
    size: "original"
  }), [h, m] = v(null);
  $(() => {
    (async () => {
      try {
        const S = await fetch("/assets/images/optimized/image-mapping.json");
        if (S.ok) {
          const R = await S.json();
          m(R);
        }
      } catch {
      }
    })();
  }, []);
  const u = H(() => {
    var T, C;
    if (!h || !h[t])
      return {
        src: `/assets/images/${t}.jpg`,
        format: "original",
        size: "original"
      };
    const b = h[t];
    let S = "", R = "original", w = "original";
    return i === "webp" && ((T = b.formats) != null && T.webp) ? (S = `/assets/images/optimized/${b.formats.webp.file}`, R = "webp") : (S = `/assets/images/${b.original}`, R = "original"), o !== "original" && ((C = b.sizes) != null && C[o]) && (S = `/assets/images/optimized/${b.sizes[o].file}`, w = o), {
      src: S,
      format: R,
      size: w
    };
  }, [t, h, i, o]);
  $(() => {
    if (!u.src) return;
    d((S) => ({
      ...S,
      src: u.src,
      format: u.format,
      size: u.size,
      isLoaded: !1,
      error: !1
    }));
    const b = new Image();
    return b.onload = () => {
      d((S) => ({
        ...S,
        isLoaded: !0,
        error: !1
      }));
    }, b.onerror = () => {
      u.format === "webp" && !c.error ? d((S) => {
        var R;
        return {
          ...S,
          src: `/assets/images/${((R = h == null ? void 0 : h[t]) == null ? void 0 : R.original) || `${t}.jpg`}`,
          format: "original",
          error: !0
        };
      }) : d(s ? (S) => ({
        ...S,
        src: s,
        format: "fallback",
        error: !0
      }) : (S) => ({
        ...S,
        error: !0
      }));
    }, (a || p) && (b.loading = "eager"), b.src = u.src, () => {
      b.onload = null, b.onerror = null;
    };
  }, [u.src, u.format, s, a, p, c.error, h, t]);
  const x = H(() => {
    if (typeof window > "u") return !1;
    const b = document.createElement("canvas");
    return b.width = 1, b.height = 1, b.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, []);
  return {
    src: H(() => {
      var b;
      return c.format === "webp" && !x ? `/assets/images/${((b = h == null ? void 0 : h[t]) == null ? void 0 : b.original) || `${t}.jpg`}` : c.src;
    }, [c.src, c.format, x, h, t]),
    isLoaded: c.isLoaded,
    error: c.error,
    format: c.format,
    size: c.size,
    supportsWebP: x,
    isLoading: !c.isLoaded && !c.error
  };
}, Re = (t) => {
  const [r, a] = v(/* @__PURE__ */ new Set()), [o, i] = v(0);
  return $(() => {
    i(t.length);
    const s = (c) => new Promise((d) => {
      const h = new Image();
      h.onload = () => {
        a((m) => new Set(Array.from(m).concat(c))), d();
      }, h.onerror = () => {
        a((m) => new Set(Array.from(m).concat(c))), d();
      }, h.src = `/assets/images/${c}.jpg`;
    });
    (async () => {
      await Promise.all(t.map(s));
    })();
  }, [t]), {
    loadedImages: Array.from(r),
    totalImages: o,
    progress: o > 0 ? r.size / o * 100 : 0,
    isComplete: r.size === o
  };
}, Dr = {
  small: Z.sizes.buttonSm,
  medium: Z.sizes.buttonMd,
  large: Z.sizes.buttonLg
}, _r = O(Q, {
  shouldForwardProp: (t) => t !== "customVariant" && t !== "customSize" && t !== "iconOnly" && t !== "dashboardColors"
})(({ theme: t, customVariant: r, customSize: a, iconOnly: o, dashboardColors: i }) => {
  const s = t.palette.mode === "light", p = Dr[a ?? "medium"], c = {
    borderRadius: 0,
    // Heavy Industrial Sharp Edges
    fontWeight: 700,
    letterSpacing: "0.15em",
    fontSize: "0.875rem",
    fontFamily: '"Red Hat Display", sans-serif',
    transition: "all 0.2s steps(4, end)",
    // Industrial "Snap" transition
    border: "none",
    padding: "12px 24px",
    boxShadow: "none",
    position: "relative",
    overflow: "hidden"
  };
  let d = {};
  switch (r) {
    case "primary":
      d = {
        backgroundColor: s ? g.black : g.white,
        color: s ? g.white : g.black,
        "&:hover": {
          backgroundColor: s ? g.gray[800] : g.gray[200],
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px 0px ${s ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"}`
        }
      };
      break;
    case "industrial":
      d = {
        backgroundColor: g.accentColors.mint,
        // Safety Green
        color: g.black,
        border: `2px solid ${g.black}`,
        "&:hover": {
          backgroundColor: g.accentColors.orange,
          // Warning Orange
          transform: "translate(-4px, -4px)",
          boxShadow: `8px 8px 0px 0px ${g.black}`
        }
      };
      break;
    case "outline":
      d = {
        backgroundColor: "transparent",
        color: s ? g.black : g.white,
        border: `2px solid ${s ? g.black : g.white}`,
        "&:hover": {
          backgroundColor: s ? g.black : g.white,
          color: s ? g.white : g.black
        }
      };
      break;
    case "minimal":
      d = {
        backgroundColor: s ? g.gray[100] : g.gray[900],
        color: s ? g.black : g.white,
        "&:hover": {
          backgroundColor: s ? g.gray[200] : g.gray[800]
        }
      };
      break;
    case "dashboard":
      d = {
        borderRadius: X.radius.sm,
        // 8px — mismo radio que ya usa Mission Control a mano
        fontWeight: k.fontWeight.semiBold,
        letterSpacing: k.letterSpacing.normal,
        fontFamily: k.fontFamily.primary,
        textTransform: "none",
        backgroundColor: (i == null ? void 0 : i.background) ?? "transparent",
        color: (i == null ? void 0 : i.text) ?? "inherit",
        border: i ? `1px solid ${i.border}` : "none",
        minHeight: p,
        "&:hover": {
          backgroundColor: (i == null ? void 0 : i.hoverBg) ?? "rgba(128,128,128,0.12)",
          transform: "none",
          boxShadow: "none"
        }
      };
      break;
    default:
      d = {};
  }
  return { ...c, ...d, ...o ? { minWidth: p, width: p, minHeight: p, padding: 0 } : {} };
}), Or = O(n)(({ theme: t }) => ({
  position: "absolute",
  top: 2,
  right: 6,
  ...z.label.secondary,
  fontSize: "0.65rem",
  pointerEvents: "none"
})), Ce = ({
  children: t,
  variant: r = "primary",
  size: a = "medium",
  iconOnly: o = !1,
  label: i,
  className: s,
  sx: p,
  ...c
}) => {
  const { contrast: d, helpers: h } = I(), m = r === "dashboard" ? {
    background: d.surface,
    text: d.text.primary,
    border: d.border,
    hoverBg: h.state.hover
  } : void 0;
  return /* @__PURE__ */ l(
    _r,
    {
      customVariant: r,
      customSize: a,
      size: a,
      iconOnly: o,
      dashboardColors: m,
      className: s,
      sx: p,
      ...c,
      children: [
        i && /* @__PURE__ */ e(Or, { children: i }),
        t
      ]
    }
  );
}, Lr = {
  small: Z.sizes.inputSm,
  medium: Z.sizes.inputMd,
  large: Z.sizes.inputLg
}, Br = O(n, {
  shouldForwardProp: (t) => t !== "fieldColors" && t !== "resolvedHeight" && t !== "error"
})(({ fieldColors: t, resolvedHeight: r, error: a }) => ({
  width: "100%",
  boxSizing: "border-box",
  height: r,
  padding: "0 14px",
  borderRadius: X.radius.sm,
  border: `1px solid ${a ? "#ef4444" : t.border}`,
  backgroundColor: t.background,
  color: t.text,
  fontFamily: k.fontFamily.primary,
  fontSize: k.fontSize.sm,
  outline: "none",
  transition: "border-color 150ms ease",
  "&:focus": {
    borderColor: a ? "#ef4444" : t.borderFocus
  },
  "&::placeholder": {
    color: t.placeholder
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
})), Ze = ({ size: t = "medium", error: r = !1, sx: a, ...o }) => {
  const { contrast: i } = I(), s = {
    background: i.surface,
    text: i.text.primary,
    border: i.border,
    borderFocus: i.text.secondary,
    placeholder: i.text.disabled
  };
  return /* @__PURE__ */ e(
    Br,
    {
      component: "input",
      fieldColors: s,
      resolvedHeight: Lr[t],
      error: r,
      sx: a,
      ...o
    }
  );
}, Pr = O(n, {
  shouldForwardProp: (t) => t !== "fieldColors" && t !== "error"
})(({ fieldColors: t, error: r }) => ({
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 14px",
  borderRadius: X.radius.sm,
  border: `1px solid ${r ? "#ef4444" : t.border}`,
  backgroundColor: t.background,
  color: t.text,
  fontFamily: k.fontFamily.primary,
  fontSize: k.fontSize.sm,
  lineHeight: k.lineHeight.normal,
  outline: "none",
  resize: "vertical",
  transition: "border-color 150ms ease",
  "&:focus": {
    borderColor: r ? "#ef4444" : t.borderFocus
  },
  "&::placeholder": {
    color: t.placeholder
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
})), hn = ({
  error: t = !1,
  scrollIntoViewOnFocus: r = !0,
  sx: a,
  onFocus: o,
  rows: i = 4,
  ...s
}) => {
  const { contrast: p } = I(), c = {
    background: p.surface,
    text: p.text.primary,
    border: p.border,
    borderFocus: p.text.secondary,
    placeholder: p.text.disabled
  }, d = q(
    (h) => {
      r && h.currentTarget.scrollIntoView({ block: "nearest", behavior: "smooth" }), o == null || o(h);
    },
    [r, o]
  );
  return /* @__PURE__ */ e(
    Pr,
    {
      component: "textarea",
      rows: i,
      fieldColors: c,
      error: t,
      onFocus: d,
      sx: a,
      ...s
    }
  );
}, Nr = {
  small: Z.sizes.inputSm,
  medium: Z.sizes.inputMd,
  large: Z.sizes.inputLg
}, Hr = O(n, {
  shouldForwardProp: (t) => t !== "fieldColors" && t !== "resolvedHeight" && t !== "error"
})(({ fieldColors: t, resolvedHeight: r, error: a }) => ({
  width: "100%",
  boxSizing: "border-box",
  height: r,
  padding: "0 14px",
  borderRadius: X.radius.sm,
  border: `1px solid ${a ? "#ef4444" : t.border}`,
  backgroundColor: t.background,
  color: t.text,
  fontFamily: k.fontFamily.primary,
  fontSize: k.fontSize.sm,
  outline: "none",
  cursor: "pointer",
  appearance: "auto",
  // picker nativo del SO — mejor UX mobile que un dropdown custom
  transition: "border-color 150ms ease",
  "&:focus": {
    borderColor: a ? "#ef4444" : t.borderFocus
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
})), gn = ({ size: t = "medium", error: r = !1, sx: a, children: o, ...i }) => {
  const { contrast: s } = I(), p = {
    background: s.surface,
    text: s.text.primary,
    border: s.border,
    borderFocus: s.text.secondary
  };
  return /* @__PURE__ */ e(
    Hr,
    {
      component: "select",
      fieldColors: p,
      resolvedHeight: Nr[t],
      error: r,
      sx: a,
      ...i,
      children: o
    }
  );
}, jr = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "h1",
    sx: {
      ...z.display.giant,
      ...t.sx
    },
    ...t
  }
), Pe = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "h1",
    sx: {
      ...z.display.large,
      ...t.sx
    },
    ...t
  }
), gt = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "h2",
    sx: {
      ...z.display.medium,
      ...t.sx
    },
    ...t
  }
), fe = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "h3",
    sx: {
      ...z.display.small,
      ...t.sx
    },
    ...t
  }
), N = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "h4",
    sx: {
      fontSize: z.display.small.fontSize,
      fontWeight: 400,
      lineHeight: 1.2,
      textTransform: "none",
      ...t.sx
    },
    ...t
  }
), mn = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "h5",
    sx: {
      fontSize: z.body.large.fontSize,
      fontWeight: 400,
      lineHeight: 1.3,
      ...t.sx
    },
    ...t
  }
), un = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "h6",
    sx: {
      fontSize: z.body.regular.fontSize,
      fontWeight: 400,
      lineHeight: 1.4,
      ...t.sx
    },
    ...t
  }
), L = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "body1",
    sx: {
      ...z.body.regular,
      ...t.sx
    },
    ...t
  }
), A = (t) => /* @__PURE__ */ e(
  y,
  {
    variant: "body2",
    sx: {
      ...z.body.small,
      ...t.sx
    },
    ...t
  }
), Y = (t) => {
  const r = M();
  return /* @__PURE__ */ e(
    y,
    {
      component: "code",
      fontFamily: z.ui.code.fontFamily,
      sx: {
        display: "inline-block",
        backgroundColor: r.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)",
        color: r.palette.mode === "dark" ? "primary.light" : "text.primary",
        borderRadius: 1,
        px: 0.5,
        ...z.ui.code,
        ...t.sx
      },
      ...t
    }
  );
}, xn = ({ variant: t = "body1", ...r }) => /* @__PURE__ */ e(y, { variant: t, ...r }), Ur = (t, r, a, o) => {
  let i = r;
  i === "auto" && (i = o || a ? "crema" : "negro");
  const p = {
    azul: "Azul",
    crema: "Crema",
    gris: "Gris",
    naranja: "Naranja",
    negro: "Negro"
  }[i] || "Negro";
  if (t === "isotipo")
    return `/assets/images/Isotipo ${p}.png`;
  const d = {
    v1: "Logo V1",
    v2: "Logo V2",
    v3: "Logo V3"
  }[t] || "Logo V2";
  return d === "Logo V2" && p === "Crema" ? "/assets/images/Logo V2 - Crema .png" : `/assets/images/${d} - ${p}.png`;
}, ne = ({
  variant: t,
  version: r = "v2",
  colorVariant: a = "auto",
  size: o,
  light: i = !1,
  onClick: s,
  sx: p,
  ...c
}) => {
  const h = M().palette.mode === "dark", m = Ur(r, a, h, i), u = () => {
    s ? s() : window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  let x = 40;
  const f = o || (t === "mobile" ? "small" : "medium");
  return r === "isotipo" ? f === "small" ? x = 24 : f === "large" ? x = 48 : x = 32 : f === "small" ? x = 30 : f === "large" ? x = 60 : x = 40, /* @__PURE__ */ e(
    n,
    {
      component: "img",
      src: m,
      alt: `AI4U ${r}`,
      onClick: u,
      sx: {
        height: x,
        width: "auto",
        cursor: "pointer",
        transition: "transform 0.2s steps(4, end)",
        "&:hover": {
          transform: "scale(1.03)"
        },
        ...p
      },
      ...c
    }
  );
}, Gr = O(n, {
  shouldForwardProp: (t) => t !== "iconSize" && t !== "isClickable"
})(({ theme: t, iconSize: r, isClickable: a }) => ({
  ...{
    small: {
      width: 24,
      height: 24,
      borderRadius: 4
    },
    medium: {
      width: 32,
      height: 32,
      borderRadius: 6
    },
    large: {
      width: 48,
      height: 48,
      borderRadius: 8
    }
  }[r],
  cursor: a ? "pointer" : "default",
  transition: "all 0.2s ease",
  userSelect: "none",
  "&:hover": a ? {
    transform: "scale(1.1)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
  } : {},
  "&:active": {
    transform: "scale(0.95)"
  }
})), we = (t) => {
  const {
    type: r,
    size: a = "medium",
    color: o,
    variant: i = "filled",
    onClick: s,
    sx: p
  } = t, c = I(), d = o || c.contrast.text.primary, h = () => {
    const u = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: a === "small" ? "14px" : a === "large" ? "24px" : "18px",
      fontWeight: 400,
      fontFamily: '"Red Hat Display", sans-serif'
    };
    switch (i) {
      case "outline":
        return {
          ...u,
          backgroundColor: "transparent",
          border: `2px solid ${d}`,
          color: d
        };
      case "minimal":
        return {
          ...u,
          backgroundColor: "transparent",
          color: d
        };
      default:
        return {
          ...u,
          backgroundColor: d,
          color: d === c.palette.white ? c.palette.black : c.palette.white,
          border: "none"
        };
    }
  }, m = () => {
    const u = {
      style: {
        fontSize: "inherit"
      }
    };
    switch (r) {
      case "arrow-up":
        return /* @__PURE__ */ e("span", { ...u, children: "↑" });
      case "arrow-down":
        return /* @__PURE__ */ e("span", { ...u, children: "↓" });
      case "arrow-right":
        return /* @__PURE__ */ e("span", { ...u, children: "→" });
      case "arrow-left":
        return /* @__PURE__ */ e("span", { ...u, children: "←" });
      case "plus":
        return /* @__PURE__ */ e("span", { ...u, children: "+" });
      case "minus":
        return /* @__PURE__ */ e("span", { ...u, children: "−" });
      case "circle":
        return /* @__PURE__ */ e("span", { ...u, children: "●" });
      case "square":
        return /* @__PURE__ */ e("span", { ...u, children: "■" });
      case "triangle":
        return /* @__PURE__ */ e("span", { ...u, children: "▲" });
      case "cross":
        return /* @__PURE__ */ e("span", { ...u, children: "✕" });
      case "line":
        return /* @__PURE__ */ e("span", { ...u, children: "—" });
      case "dot":
        return /* @__PURE__ */ e("span", { ...u, children: "•" });
      case "search":
        return /* @__PURE__ */ e("span", { ...u, children: "[?]" });
      case "clear":
        return /* @__PURE__ */ e("span", { ...u, children: "✕" });
      case "check":
        return /* @__PURE__ */ e("span", { ...u, children: "✓" });
      default:
        return /* @__PURE__ */ e("span", { ...u, children: "○" });
    }
  };
  return /* @__PURE__ */ e(
    Gr,
    {
      iconSize: a,
      isClickable: !!s,
      onClick: s,
      sx: { ...h(), ...p },
      children: m()
    }
  );
}, Vr = Oe(void 0), mt = () => {
  const t = Ie(Vr);
  if (t === void 0)
    throw new Error("useLoading must be used within a LoadingProvider");
  return t;
}, fn = ({ images: t, onAllLoaded: r }) => {
  const { setCriticalImagesLoaded: a } = mt();
  return $(() => {
    let o = 0;
    const i = t.length, s = () => {
      o++, o === i && (a(!0), r == null || r());
    }, p = () => {
      o++, o === i && (a(!0), r == null || r());
    };
    t.forEach((c) => {
      const d = new Image();
      d.onload = s, d.onerror = p, d.src = c;
    }), i === 0 && (a(!0), r == null || r());
  }, [t, a, r]), null;
}, bn = () => {
  const t = M();
  return /* @__PURE__ */ e(
    n,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ e(K, { maxWidth: "lg", children: /* @__PURE__ */ l(W, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ e(n, { sx: { mb: 4 }, children: /* @__PURE__ */ e(ne, {}) }),
        /* @__PURE__ */ e(n, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ e(
          E,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ l(W, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ l(W, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ e(
            E,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  );
}, Ne = ({
  src: t,
  alt: r,
  width: a = "100%",
  height: o = "auto",
  sx: i = {},
  skeletonHeight: s,
  skeletonWidth: p,
  priority: c = !1
}) => {
  const d = M(), { isPWA: h } = Ar(), { imgRef: m, isLoaded: u, isInView: x, error: f } = kr(t, { priority: c }), b = {
    bgcolor: d.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ l(
    n,
    {
      ref: m,
      sx: {
        position: "relative",
        width: a,
        height: o,
        overflow: "hidden",
        ...i
      },
      children: [
        !u && /* @__PURE__ */ e(
          E,
          {
            variant: "rectangular",
            width: p || a,
            height: s || o,
            sx: b
          }
        ),
        x && /* @__PURE__ */ e(
          n,
          {
            component: "img",
            src: t,
            alt: r,
            loading: c ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: u ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: u ? "block" : "none",
              // Optimizaciones específicas para PWA
              ...h && {
                imageRendering: "auto",
                touchAction: "manipulation"
              }
            },
            onLoad: () => {
            }
          }
        ),
        f && /* @__PURE__ */ e(
          n,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: d.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: d.palette.text.secondary,
              fontSize: "0.875rem"
            },
            children: "Error al cargar imagen"
          }
        )
      ]
    }
  );
}, yn = ({
  src: t,
  pixelArtSrc: r,
  alt: a,
  width: o = "100%",
  height: i = "auto",
  transitionDuration: s = 0.3,
  sx: p,
  ...c
}) => {
  const [d, h] = v(!1);
  return /* @__PURE__ */ e(
    n,
    {
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      sx: {
        position: "relative",
        width: o,
        height: i,
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${t})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: `opacity ${s}s ease-in-out`,
          opacity: d ? 0 : 1,
          zIndex: 1
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${r})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: `opacity ${s}s ease-in-out`,
          opacity: d ? 1 : 0,
          zIndex: 2
        },
        ...p
      },
      ...c,
      children: /* @__PURE__ */ e(
        n,
        {
          component: "img",
          src: t,
          alt: a,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            pointerEvents: "none"
          }
        }
      )
    }
  );
}, wn = ({
  src: t,
  alt: r,
  width: a = "100%",
  height: o = "auto",
  transitionDuration: i = 0.3,
  pixelSize: s = 8,
  sx: p,
  ...c
}) => {
  const [d, h] = v(!1);
  return /* @__PURE__ */ l(
    n,
    {
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      sx: {
        position: "relative",
        width: a,
        height: o,
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        ...p
      },
      ...c,
      children: [
        /* @__PURE__ */ e(
          n,
          {
            component: "img",
            src: t,
            alt: r,
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: `all ${i}s ease-in-out`,
              filter: d ? "contrast(1.4) brightness(1.2) saturate(1.5) blur(0.3px)" : "none",
              imageRendering: d ? "pixelated" : "auto",
              transform: d ? "scale(1.05)" : "scale(1)",
              "&::before": d ? {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `repeating-conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(0,0,0,0.1) 1deg,
                transparent 2deg
              )`,
                backgroundSize: `${s}px ${s}px`,
                pointerEvents: "none",
                zIndex: 2
              } : {}
            }
          }
        ),
        d && /* @__PURE__ */ e(
          n,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `repeating-conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(0,0,0,0.03) 1deg,
              transparent 2deg
            )`,
              backgroundSize: `${s}px ${s}px`,
              pointerEvents: "none",
              zIndex: 3,
              transition: `opacity ${i}s ease-in-out`
            }
          }
        ),
        d && /* @__PURE__ */ e(
          n,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 4,
              transition: `opacity ${i}s ease-in-out`
            }
          }
        ),
        d && /* @__PURE__ */ e(
          n,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,0.02) 50%,
              transparent 100%
            )`,
              animation: "glitch 2s infinite",
              pointerEvents: "none",
              zIndex: 5,
              "@keyframes glitch": {
                "0%, 100%": {
                  transform: "translateX(0)"
                },
                "10%": {
                  transform: "translateX(-2px)"
                },
                "20%": {
                  transform: "translateX(2px)"
                },
                "30%": {
                  transform: "translateX(0)"
                },
                "40%": {
                  transform: "translateX(-1px)"
                },
                "50%": {
                  transform: "translateX(1px)"
                },
                "60%": {
                  transform: "translateX(0)"
                }
              }
            }
          }
        )
      ]
    }
  );
}, qr = "es,en,zh-CN,hi,ar,pt,ru,ja,de,fr", Yr = `
  .goog-te-banner-frame {
    display: none !important;
  }
  body {
    top: 0 !important;
  }
  #google_translate_element {
    display: none !important;
  }
  .goog-te-gadget {
    display: none !important;
  }
  .skiptranslate {
    display: none !important;
  }
  .goog-te-menu-frame {
    display: none !important;
  }
`, Xr = () => ($(() => {
  if (document.getElementById("google-translate-script")) return;
  window.googleTranslateElementInit = () => {
    var r;
    try {
      (r = window.google) != null && r.translate && document.getElementById("google_translate_element") && (new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: !1,
          includedLanguages: qr,
          multilanguagePage: !1
        },
        "google_translate_element"
      ), setTimeout(() => {
        const a = document.getElementById("google_translate_element");
        a && (a.style.display = "none");
      }, 100));
    } catch (a) {
      console.error("Error inicializando Google Translate:", a);
    }
  };
  const t = document.createElement("script");
  t.id = "google-translate-script", t.type = "text/javascript", t.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", t.async = !0, document.body.appendChild(t);
}, []), /* @__PURE__ */ l(D, { children: [
  /* @__PURE__ */ e(
    n,
    {
      id: "google_translate_element",
      sx: {
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: 0,
        height: 0,
        overflow: "hidden",
        zIndex: -1
      }
    }
  ),
  /* @__PURE__ */ e("style", { children: Yr })
] })), We = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh-CN", label: "中文", short: "ZH" },
  { code: "hi", label: "हिन्दी", short: "HI" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "ja", label: "日本語", short: "JA" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "fr", label: "Français", short: "FR" }
], ke = "es";
function Kr() {
  const t = document.cookie.match(/googtrans=([^;]+)/);
  if (t && t[1]) {
    const i = t[1].trim();
    if (i) {
      const s = i.split("/").filter(Boolean), p = s[s.length - 1];
      if (p && p !== ke) {
        const c = We.find((d) => d.code === p || d.code.startsWith(p));
        if (c) return c.short;
      }
    }
  }
  const a = (document.documentElement.lang || ke).split("-")[0].toLowerCase(), o = We.find((i) => i.code.toLowerCase().startsWith(a));
  return (o == null ? void 0 : o.short) ?? "ES";
}
const Qe = ({ light: t = !1 }) => {
  const r = I(), a = M(), o = ge(a.breakpoints.down("sm")), i = ge(a.breakpoints.between("sm", "md")), [s, p] = v(Kr), [c, d] = v(null), [h, m] = v(() => !!document.getElementById("google-translate-script")), u = xe(null), x = !!c;
  $(() => {
    if (document.getElementById("google-translate-script")) {
      m(!0);
      return;
    }
    const w = setInterval(() => {
      document.getElementById("google-translate-script") && (m(!0), clearInterval(w));
    }, 200), T = setTimeout(() => {
      clearInterval(w), m(!0);
    }, 5e3);
    return () => {
      clearInterval(w), clearTimeout(T);
    };
  }, []);
  const f = (w) => {
    d(w.currentTarget);
  }, b = () => {
    d(null);
  }, S = (w, T) => {
    if (b(), w === ke) {
      document.cookie = "googtrans=; path=/; max-age=0", document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; max-age=0", window.location.reload();
      return;
    }
    const C = `/${ke}/${w}`;
    document.cookie = `googtrans=${C}; path=/`, window.location.reload();
  }, R = (w) => o ? {
    width: w.spacing(4),
    height: w.spacing(3.5),
    fontSize: w.typography.caption.fontSize
  } : i ? {
    width: w.spacing(4.5),
    height: w.spacing(3.75),
    fontSize: w.typography.body2.fontSize
  } : {
    width: w.spacing(5),
    height: w.spacing(4),
    fontSize: w.typography.body2.fontSize
  };
  return /* @__PURE__ */ l(
    n,
    {
      sx: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ e(
          n,
          {
            ref: u,
            component: "button",
            onClick: f,
            "aria-label": `Cambiar idioma (actual: ${s})`,
            "aria-controls": x ? "language-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": x ? "true" : void 0,
            disabled: !h,
            sx: (w) => {
              const T = R(w);
              return {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: T.width,
                height: T.height,
                minWidth: T.width,
                padding: 0,
                color: t ? "#FFFFFF" : r.contrast.text.primary,
                border: "none",
                borderRadius: w.spacing(0.75),
                transition: "all 0.3s ease-in-out",
                backgroundColor: t ? "transparent" : r.contrast.surface,
                fontFamily: w.typography.fontFamily,
                fontSize: T.fontSize,
                fontWeight: 400,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: t ? "rgba(255, 255, 255, 0.1)" : r.helpers.state.hover,
                  transform: "scale(1.05)"
                },
                "&:focus": {
                  outline: `${w.spacing(0.25)} solid ${r.palette.black}`,
                  outlineOffset: w.spacing(0.25)
                },
                "&:active": {
                  transform: "scale(0.95)"
                }
              };
            },
            children: h ? s : "…"
          }
        ),
        /* @__PURE__ */ e(
          nt,
          {
            id: "language-menu",
            anchorEl: c,
            open: x,
            onClose: b,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            slotProps: {
              paper: {
                sx: (w) => ({
                  mt: 0.5,
                  minWidth: w.spacing(20),
                  maxWidth: w.spacing(25),
                  backgroundColor: r.contrast.surface,
                  border: `1px solid ${r.contrast.border}`,
                  borderRadius: w.spacing(1),
                  boxShadow: pe.md
                })
              }
            },
            children: We.map((w) => /* @__PURE__ */ e(
              ye,
              {
                onClick: () => S(w.code, w.short),
                selected: s === w.short,
                sx: (T) => ({
                  fontFamily: T.typography.fontFamily,
                  fontSize: T.typography.body2.fontSize,
                  fontWeight: s === w.short ? 600 : 400,
                  color: s === w.short ? r.palette.black : r.contrast.text.primary,
                  py: 1,
                  px: 2,
                  "&:hover": {
                    backgroundColor: r.helpers.state.hover
                  },
                  "&.Mui-selected": {
                    backgroundColor: r.helpers.state.selected,
                    "&:hover": {
                      backgroundColor: r.helpers.state.hover
                    }
                  }
                }),
                children: /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
                  /* @__PURE__ */ e(
                    n,
                    {
                      component: "span",
                      sx: (T) => ({
                        fontWeight: 400,
                        minWidth: T.spacing(3),
                        color: s === w.short ? r.palette.black : r.contrast.text.secondary
                      }),
                      children: w.short
                    }
                  ),
                  /* @__PURE__ */ e(n, { component: "span", children: w.label })
                ] })
              },
              w.code
            ))
          }
        )
      ]
    }
  );
};
let Me = null;
try {
  Me = require("react-helmet-async").Helmet;
} catch {
}
const ut = (t) => {
  if (typeof window > "u" || !Me) return null;
  const r = Me, {
    title: a = "AI4U - Inteligencia Artificial para tu Negocio",
    description: o = "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.",
    keywords: i = "inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia",
    canonical: s,
    ogImage: p = "/assets/images/ai4u-logo.png",
    ogType: c = "website",
    structuredData: d,
    noIndex: h = !1,
    noFollow: m = !1
  } = t, u = a.includes("AI4U") ? a : `${a} | AI4U`, x = s ?? window.location.href;
  return /* @__PURE__ */ l(r, { children: [
    /* @__PURE__ */ e("title", { children: u }),
    /* @__PURE__ */ e("meta", { name: "description", content: o }),
    /* @__PURE__ */ e("meta", { name: "keywords", content: i }),
    /* @__PURE__ */ e("meta", { name: "robots", content: h || m ? `${h ? "noindex" : "index"},${m ? "nofollow" : "follow"}` : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }),
    x && /* @__PURE__ */ e("link", { rel: "canonical", href: x }),
    /* @__PURE__ */ e("meta", { property: "og:title", content: u }),
    /* @__PURE__ */ e("meta", { property: "og:description", content: o }),
    /* @__PURE__ */ e("meta", { property: "og:type", content: c }),
    x && /* @__PURE__ */ e("meta", { property: "og:url", content: x }),
    /* @__PURE__ */ e("meta", { property: "og:image", content: p }),
    /* @__PURE__ */ e("meta", { property: "og:site_name", content: "AI4U" }),
    /* @__PURE__ */ e("meta", { property: "og:locale", content: "es_CO" }),
    /* @__PURE__ */ e("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ e("meta", { property: "twitter:title", content: u }),
    /* @__PURE__ */ e("meta", { property: "twitter:description", content: o }),
    /* @__PURE__ */ e("meta", { property: "twitter:image", content: p }),
    /* @__PURE__ */ e("meta", { property: "twitter:site", content: "@ai4u_co" }),
    d && /* @__PURE__ */ e("script", { type: "application/ld+json", children: JSON.stringify(d) })
  ] });
}, kn = (t = {}) => {
  const {
    title: r = "AI4U - Inteligencia Artificial para tu Negocio",
    description: a = "Soluciones de Inteligencia Artificial personalizadas para tu negocio.",
    keywords: o,
    canonical: i,
    ogImage: s = "/assets/images/ai4u-logo.png",
    ogType: p = "website",
    noIndex: c = !1,
    noFollow: d = !1
  } = t, h = r.includes("AI4U") ? r : `${r} | AI4U`;
  return {
    title: h,
    description: a,
    ...o && { keywords: o },
    robots: {
      index: !c,
      follow: !d,
      googleBot: { index: !c, follow: !d }
    },
    ...i && { alternates: { canonical: i } },
    openGraph: {
      title: h,
      description: a,
      type: p,
      ...i && { url: i },
      images: [{ url: s }],
      siteName: "AI4U",
      locale: "es_CO"
    },
    twitter: {
      card: "summary_large_image",
      title: h,
      description: a,
      images: [s],
      site: "@ai4u_co"
    }
  };
}, Sn = ({
  src: t,
  alt: r,
  width: a,
  height: o,
  sx: i,
  priority: s = !1,
  fallback: p
}) => {
  const [c, d] = v(!1), [h, m] = v(!1), [u, x] = v(t), f = I(), b = () => {
    const T = document.createElement("canvas");
    return T.width = 1, T.height = 1, T.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, S = (T) => T.includes("/assets/images/") ? T.replace(/\.(jpg|jpeg|png)$/i, ".webp") : T;
  $(() => {
    b() && t.includes("/assets/images/") ? x(S(t)) : x(t);
  }, [t]);
  const R = () => {
    d(!0), m(!1);
  }, w = () => {
    u !== t && !h ? (x(t), m(!0)) : p && (x(p), m(!0));
  };
  return /* @__PURE__ */ l(n, { sx: { position: "relative", width: a, height: o }, children: [
    !c && /* @__PURE__ */ e(
      E,
      {
        variant: "rectangular",
        width: a,
        height: o,
        sx: {
          borderRadius: 1,
          bgcolor: f.contrast.surface,
          ...i
        }
      }
    ),
    /* @__PURE__ */ e(
      "img",
      {
        src: u,
        alt: r,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: c ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          ...i
        },
        onLoad: R,
        onError: w,
        loading: s ? "eager" : "lazy"
      }
    )
  ] });
}, vn = ({
  imageName: t,
  alt: r,
  width: a = "100%",
  height: o = "auto",
  sx: i = {},
  skeletonHeight: s,
  skeletonWidth: p,
  priority: c = !1,
  size: d = "original",
  format: h = "webp",
  fallback: m,
  preload: u = !1,
  showOptimizationInfo: x = !1,
  className: f
}) => {
  const b = M(), {
    src: S,
    isLoaded: R,
    error: w,
    isLoading: T
  } = Mr(t, {
    priority: c,
    size: d,
    format: h,
    fallback: m,
    preload: u
  }), C = {
    bgcolor: b.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ l(
    n,
    {
      className: f,
      sx: {
        position: "relative",
        width: a,
        height: o,
        overflow: "hidden",
        ...i
      },
      children: [
        T && /* @__PURE__ */ e(
          E,
          {
            variant: "rectangular",
            width: p || a,
            height: s || o,
            sx: C
          }
        ),
        !w && /* @__PURE__ */ e(
          n,
          {
            component: "img",
            src: S,
            alt: r,
            loading: c ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: R ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: R ? "block" : "none",
              // Optimizaciones específicas para PWA
              imageRendering: "auto",
              touchAction: "manipulation"
            }
          }
        ),
        w && /* @__PURE__ */ l(
          n,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: b.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: b.palette.text.secondary,
              fontSize: "0.875rem",
              flexDirection: "column",
              gap: 1
            },
            children: [
              /* @__PURE__ */ e(n, { component: "span", sx: { fontSize: "2rem" }, children: "IMG" }),
              /* @__PURE__ */ e(n, { component: "span", children: "Error al cargar imagen" }),
              x && /* @__PURE__ */ e(n, { component: "span", sx: { fontSize: "0.75rem", opacity: 0.7 }, children: t })
            ]
          }
        ),
        x && !1
      ]
    }
  );
}, In = ({
  criticalImages: t,
  importantImages: r,
  backgroundImages: a,
  onCriticalLoaded: o,
  onImportantLoaded: i,
  onAllLoaded: s,
  showProgress: p = !1
}) => {
  const { setCriticalImagesLoaded: c } = mt(), [d, h] = v("critical"), m = Re(t), u = Re(r), x = Re(a);
  $(() => {
    m.isComplete && (c(!0), o == null || o(), h("important"));
  }, [m.isComplete, c, o]), $(() => {
    d === "important" && u.isComplete && (i == null || i(), h("background"));
  }, [d, u.isComplete, i]), $(() => {
    d === "background" && x.isComplete && (s == null || s(), h("complete"));
  }, [d, x.isComplete, s]);
  const f = t.length + r.length + a.length, b = m.loadedImages.length + u.loadedImages.length + x.loadedImages.length, S = f > 0 ? b / f * 100 : 0;
  return p ? /* @__PURE__ */ l("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    color: "white",
    fontFamily: "monospace"
  }, children: [
    /* @__PURE__ */ e("div", { style: { fontSize: "1.5rem", marginBottom: "2rem" }, children: "Cargando imágenes..." }),
    /* @__PURE__ */ e("div", { style: { width: "300px", marginBottom: "1rem" }, children: /* @__PURE__ */ e("div", { style: {
      width: "100%",
      height: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
      overflow: "hidden"
    }, children: /* @__PURE__ */ e("div", { style: {
      width: `${S}%`,
      height: "100%",
      backgroundColor: "#4CAF50",
      transition: "width 0.3s ease"
    } }) }) }),
    /* @__PURE__ */ l("div", { style: { fontSize: "1rem", marginBottom: "0.5rem" }, children: [
      "Fase: ",
      d === "critical" ? "Críticas" : d === "important" ? "Importantes" : d === "background" ? "Fondo" : "Completado"
    ] }),
    /* @__PURE__ */ l("div", { style: { fontSize: "0.875rem", opacity: 0.8 }, children: [
      b,
      " / ",
      f,
      " imágenes cargadas"
    ] }),
    /* @__PURE__ */ l("div", { style: { fontSize: "0.75rem", opacity: 0.6, marginTop: "1rem" }, children: [
      /* @__PURE__ */ l("div", { children: [
        "Críticas: ",
        m.loadedImages.length,
        "/",
        t.length
      ] }),
      /* @__PURE__ */ l("div", { children: [
        "Importantes: ",
        u.loadedImages.length,
        "/",
        r.length
      ] }),
      /* @__PURE__ */ l("div", { children: [
        "Fondo: ",
        x.loadedImages.length,
        "/",
        a.length
      ] })
    ] })
  ] }) : null;
}, he = ({
  href: t,
  variant: r = "subtle",
  children: a,
  className: o,
  ariaLabel: i,
  LinkComponent: s,
  onClick: p
}) => {
  const c = I();
  return /* @__PURE__ */ e(
    at,
    {
      component: s ?? "a",
      href: t,
      onClick: p,
      className: o,
      "aria-label": i,
      sx: (() => {
        switch (r) {
          case "accent":
            return {
              color: c.palette.accent,
              fontWeight: 400,
              textDecoration: "none",
              borderBottom: `1px solid ${c.palette.accent}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                color: c.palette.success,
                borderBottomColor: c.palette.success,
                transform: "translateY(-1px)"
              }
            };
          case "inline":
            return {
              color: "inherit",
              textDecoration: "underline",
              textDecorationColor: c.contrast.text.secondary,
              transition: "all 0.3s ease",
              "&:hover": {
                color: c.palette.accent,
                textDecorationColor: c.palette.accent
              }
            };
          case "subtle":
          default:
            return {
              color: c.contrast.text.secondary,
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                color: c.palette.accent,
                borderBottomColor: c.palette.accent
              }
            };
        }
      })(),
      children: a
    }
  );
}, Zr = (t) => {
  const {
    variant: r = "separator",
    size: a = "small",
    className: o
  } = t, i = I(), s = () => {
    switch (a) {
      case "medium":
        return { width: 8, height: 8 };
      case "small":
      default:
        return { width: 4, height: 4 };
    }
  }, p = () => {
    switch (r) {
      case "active":
        return {
          backgroundColor: i.palette.success,
          opacity: 1
        };
      case "inactive":
        return {
          backgroundColor: i.contrast.text.secondary,
          opacity: 0.4
        };
      case "separator":
      default:
        return {
          backgroundColor: i.contrast.text.secondary,
          opacity: 0.3
        };
    }
  };
  return /* @__PURE__ */ e(
    n,
    {
      className: o,
      sx: {
        ...s(),
        borderRadius: "50%",
        ...p(),
        flexShrink: 0,
        transition: "all 0.3s ease"
      }
    }
  );
}, Cn = ({
  serviceId: t,
  serviceColor: r,
  size: a = "medium",
  className: o,
  customThumbnail: i
}) => {
  const s = I(), c = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 160, height: 160 },
    "full-width": { width: "100%", height: "auto", aspectRatio: "1/1" }
  }[a], d = r || s.palette.accent, m = ((u) => {
    const x = u.split("").reduce((b, S) => b + S.charCodeAt(0), 0), f = [
      // Patrón de círculos
      `<circle cx="30%" cy="30%" r="8" fill="${d}40"/>
       <circle cx="70%" cy="70%" r="12" fill="${d}60"/>
       <circle cx="20%" cy="80%" r="6" fill="${d}80"/>`,
      // Patrón de cuadrados
      `<rect x="20%" y="20%" width="25%" height="25%" fill="${d}40" rx="2"/>
       <rect x="60%" y="60%" width="30%" height="30%" fill="${d}60" rx="2"/>
       <rect x="10%" y="70%" width="20%" height="20%" fill="${d}80" rx="2"/>`,
      // Patrón de triángulos
      `<polygon points="30,20 50,40 10,40" fill="${d}40"/>
       <polygon points="70,60 90,80 50,80" fill="${d}60"/>
       <polygon points="20,70 30,90 10,90" fill="${d}80"/>`,
      // Patrón de líneas
      `<line x1="20%" y1="30%" x2="80%" y2="30%" stroke="${d}60" stroke-width="3"/>
       <line x1="30%" y1="60%" x2="90%" y2="60%" stroke="${d}40" stroke-width="2"/>
       <line x1="10%" y1="80%" x2="70%" y2="80%" stroke="${d}80" stroke-width="4"/>`
    ];
    return f[x % f.length];
  })(t);
  return i ? /* @__PURE__ */ l(
    n,
    {
      className: o,
      sx: {
        width: c.width,
        height: c.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${d}20`,
        transition: "all 0.3s ease",
        ...a !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${d}30`,
            borderColor: `${d}40`
          }
        }
      },
      children: [
        /* @__PURE__ */ e(
          "img",
          {
            src: i,
            alt: `Thumbnail para ${t}`,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px"
            }
          }
        ),
        /* @__PURE__ */ e(
          n,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${d}10 0%, transparent 100%)`,
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  ) : /* @__PURE__ */ l(
    n,
    {
      className: o,
      sx: {
        width: c.width,
        height: c.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        background: `linear-gradient(135deg, ${d}10 0%, ${d}05 100%)`,
        border: `1px solid ${d}20`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        ...a !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${d}30`,
            borderColor: `${d}40`
          }
        }
      },
      children: [
        /* @__PURE__ */ l(
          "svg",
          {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              position: "absolute",
              top: 0,
              left: 0
            },
            children: [
              /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ l("linearGradient", { id: `gradient-${t}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ e("stop", { offset: "0%", stopColor: `${d}20` }),
                /* @__PURE__ */ e("stop", { offset: "100%", stopColor: `${d}10` })
              ] }) }),
              /* @__PURE__ */ e("rect", { width: "100%", height: "100%", fill: `url(#gradient-${t})` }),
              /* @__PURE__ */ e("g", { dangerouslySetInnerHTML: { __html: m } }),
              /* @__PURE__ */ e(
                "rect",
                {
                  width: "100%",
                  height: "100%",
                  fill: "none",
                  stroke: `${d}30`,
                  strokeWidth: "0.5",
                  strokeDasharray: "2,2"
                }
              )
            ]
          }
        ),
        a === "large" && /* @__PURE__ */ e(
          n,
          {
            sx: {
              position: "absolute",
              bottom: 8,
              left: 8,
              right: 8,
              textAlign: "center",
              zIndex: 2
            },
            children: /* @__PURE__ */ e(
              n,
              {
                sx: {
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  color: d,
                  textTransform: "none",
                  letterSpacing: "0.5px",
                  background: "rgba(255,255,255,0.9)",
                  padding: "2px 6px",
                  borderRadius: 1,
                  backdropFilter: "blur(4px)"
                },
                children: t.split("-").slice(0, 2).join(" ")
              }
            )
          }
        )
      ]
    }
  );
}, zn = ({
  children: t,
  numberVariant: r = "primary",
  sx: a,
  ...o
}) => /* @__PURE__ */ e(
  n,
  {
    ...o,
    sx: {
      ...z.display.number,
      display: "inline-block",
      ...r === "outline" && {
        color: "transparent",
        WebkitTextStroke: (i) => `2px ${i.palette.mode === "light" ? "#000" : "#fff"}`
      },
      ...a
    },
    children: t
  }
), Qr = St`
  0%   { box-shadow: 0 0 0 0 currentColor;  opacity: 1; }
  70%  { box-shadow: 0 0 0 6px transparent; opacity: 0.85; }
  100% { box-shadow: 0 0 0 0 transparent;   opacity: 1; }
`, De = ({
  status: t,
  size: r = 8,
  pulse: a,
  label: o,
  className: i
}) => {
  const s = g.telemetry[t], c = /* @__PURE__ */ e(
    n,
    {
      className: i,
      sx: {
        width: r,
        height: r,
        borderRadius: "50%",
        backgroundColor: s,
        color: s,
        // currentColor para el pulso
        flexShrink: 0,
        display: "inline-block",
        animation: a ?? (t === "online" || t === "starting") ? `${Qr} 2s ease-out infinite` : "none"
      }
    }
  );
  return o ? /* @__PURE__ */ l(
    n,
    {
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75
      },
      children: [
        c,
        /* @__PURE__ */ e(
          n,
          {
            component: "span",
            sx: {
              fontFamily: '"Necto Mono", monospace',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: s
            },
            children: o
          }
        )
      ]
    }
  ) : c;
}, Jr = {
  "file-scan": /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("circle", { cx: "11", cy: "15", r: "2" }),
    /* @__PURE__ */ e("path", { d: "m13.5 17.5 1.5 1.5" })
  ] }),
  package: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "m7.5 4.27 9 5.15" }),
    /* @__PURE__ */ e("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
    /* @__PURE__ */ e("path", { d: "m3.3 7 8.7 5 8.7-5" }),
    /* @__PURE__ */ e("path", { d: "M12 22V12" })
  ] }),
  grid: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ e("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ e("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] }),
  tag: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }),
    /* @__PURE__ */ e("circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" })
  ] }),
  "clipboard-list": /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }),
    /* @__PURE__ */ e("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
    /* @__PURE__ */ e("path", { d: "M12 11h4" }),
    /* @__PURE__ */ e("path", { d: "M12 16h4" }),
    /* @__PURE__ */ e("path", { d: "M8 11h.01" }),
    /* @__PURE__ */ e("path", { d: "M8 16h.01" })
  ] }),
  landmark: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("line", { x1: "3", y1: "22", x2: "21", y2: "22" }),
    /* @__PURE__ */ e("line", { x1: "6", y1: "18", x2: "6", y2: "11" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "18", x2: "10", y2: "11" }),
    /* @__PURE__ */ e("line", { x1: "14", y1: "18", x2: "14", y2: "11" }),
    /* @__PURE__ */ e("line", { x1: "18", y1: "18", x2: "18", y2: "11" }),
    /* @__PURE__ */ e("polygon", { points: "12 2 20 7 4 7" })
  ] }),
  "refresh-cw": /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    /* @__PURE__ */ e("path", { d: "M21 3v5h-5" }),
    /* @__PURE__ */ e("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    /* @__PURE__ */ e("path", { d: "M8 16H3v5" })
  ] }),
  diamond: /* @__PURE__ */ e("path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }),
  "trending-up": /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    /* @__PURE__ */ e("polyline", { points: "16 7 22 7 22 13" })
  ] }),
  users: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    /* @__PURE__ */ e("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ] }),
  "rotate-cw": /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M21 2v6h-6" }),
    /* @__PURE__ */ e("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" })
  ] }),
  power: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M12 2v6" }),
    /* @__PURE__ */ e("path", { d: "M18.4 5.6a9 9 0 1 1-12.77.04" })
  ] }),
  terminal: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
  ] }),
  "external-link": /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ e("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ e("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] }),
  "file-plus": /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
    /* @__PURE__ */ e("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
  ] }),
  calendar: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ e("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ e("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ e("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }),
  logout: /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    /* @__PURE__ */ e("polyline", { points: "16 17 21 12 16 7" }),
    /* @__PURE__ */ e("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
  ] })
}, eo = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
}, Se = ({
  id: t,
  size: r = "sm",
  color: a = "currentColor",
  strokeWidth: o = 1.6
}) => {
  const i = typeof r == "number" ? r : eo[r];
  return /* @__PURE__ */ e(
    "svg",
    {
      width: i,
      height: i,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: a,
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { flexShrink: 0, display: "block" },
      children: Jr[t] ?? null
    }
  );
}, Tn = ({
  logo: t,
  title: r,
  subtitle: a,
  align: o = "left",
  variant: i = "dark",
  titleColor: s,
  subtitleColor: p
}) => /* @__PURE__ */ l(n, { sx: { textAlign: o, display: "flex", flexDirection: "column", alignItems: o === "center" ? "center" : "flex-start", gap: 0 }, children: [
  t && /* @__PURE__ */ e(n, { sx: { mb: 1.75, display: "inline-flex" }, children: t }),
  /* @__PURE__ */ e(
    n,
    {
      sx: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: "0.22em",
        color: s ?? (i === "dark" ? "#F1F5F9" : "#0F172A"),
        textTransform: "uppercase",
        lineHeight: 1
      },
      children: r
    }
  ),
  a && /* @__PURE__ */ e(
    n,
    {
      sx: {
        fontFamily: '"Necto Mono", monospace',
        fontSize: 9,
        color: p ?? (i === "dark" ? "#64748B" : "#94A3B8"),
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        mt: 0.5
      },
      children: a
    }
  )
] }), de = {
  // URL del webhook de Make.com
  webhookUrl: "",
  // Token de autenticación (si es necesario)
  apiToken: ""
};
F.log("VITE_MAKE_WEBHOOK_URL:", void 0);
F.log("MAKE_API_CONFIG.webhookUrl:", de.webhookUrl);
const to = async (t, r) => {
  const a = r || `session_${Date.now()}`;
  F.log("Enviando request a Make.com:", {
    message: t,
    sessionId: a,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    url: de.webhookUrl
  });
  try {
    const o = await fetch(de.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...de.apiToken && {
          Authorization: `Bearer ${de.apiToken}`
        }
      },
      body: JSON.stringify({
        message: t,
        sessionId: a,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    });
    if (F.log("📥 Respuesta de Make.com:", {
      status: o.status,
      statusText: o.statusText,
      headers: Object.fromEntries(o.headers.entries())
    }), o.status === 429)
      return F.error("Rate limit detectado, usando respuesta fallback"), {
        success: !1,
        error: "rate_limit"
      };
    if (!o.ok)
      throw new Error(`Error: ${o.status}`);
    let i;
    try {
      const s = await o.text();
      F.log("Respuesta como texto:", s);
      try {
        i = JSON.parse(s), F.log("Datos parseados:", i);
      } catch (p) {
        F.error("Error parsing JSON, intentando limpiar:", p);
        const c = s.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        try {
          i = JSON.parse(c), F.log("Respuesta limpiada y parseada:", i);
        } catch (d) {
          F.error("Error final parseando JSON:", d), i = { message: s };
        }
      }
    } catch (s) {
      throw F.error("Error obteniendo texto de respuesta:", s), new Error("Error al procesar la respuesta del servidor");
    }
    return {
      success: !0,
      message: (i == null ? void 0 : i.message) || i,
      data: i
    };
  } catch (o) {
    return F.error("Error completo:", o), {
      success: !1,
      error: o instanceof Error ? o.message : "Error desconocido"
    };
  }
}, ro = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, Je = (t) => {
  const r = t.toLowerCase();
  return r.includes("hola") || r.includes("buenos días") || r.includes("buenas") ? "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?" : r.includes("servicios") || r.includes("qué hacen") || r.includes("qué ofrecen") ? "En AI4U ofrecemos servicios de inteligencia artificial personalizada, automatización de procesos, análisis de datos y consultoría en IA. ¿Te gustaría conocer más sobre alguno de nuestros servicios?" : r.includes("precio") || r.includes("costo") || r.includes("tarifa") ? "Nuestros precios varían según el proyecto y las necesidades específicas. Te recomiendo solicitar un diagnóstico gratuito para que podamos evaluar tu caso y darte una propuesta personalizada." : r.includes("contacto") || r.includes("teléfono") || r.includes("email") ? "Puedes contactarnos a través de nuestro formulario de diagnóstico gratuito o escribirnos directamente. Nuestro equipo te responderá en menos de 24 horas." : r.includes("diagnóstico") || r.includes("gratuito") ? "¡Excelente! Nuestro diagnóstico gratuito te ayudará a identificar oportunidades de mejora en tu empresa usando IA. Solo toma 30 minutos y no hay compromiso. ¿Te gustaría agendar una cita?" : "Gracias por tu mensaje. Nuestro equipo de AI4U se pondrá en contacto contigo pronto para ayudarte con tu consulta. Mientras tanto, puedes explorar nuestros servicios o solicitar un diagnóstico gratuito.";
}, En = () => {
  const t = M(), r = ge(t.breakpoints.down("sm")), [a, o] = v(!1), [i] = v(() => ro()), [s, p] = v([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?",
      isUser: !1,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: i
    }
  ]), [c, d] = v(""), [h, m] = v(!1), [u, x] = v(""), f = xe(null), b = q(() => o(!0), []), S = q(() => o(!1), []), R = q(() => {
    var C;
    (C = f.current) == null || C.scrollIntoView({ behavior: "smooth" });
  }, []);
  $(() => {
    R();
  }, [s, R]);
  const w = q(async () => {
    var se;
    const C = c.trim();
    if (!C || h || C === u) return;
    if (C.length > 500) {
      const B = {
        id: Date.now().toString(),
        text: "El mensaje es demasiado largo. Por favor, mantén tu mensaje bajo 500 caracteres.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: i
      };
      p((J) => [...J, B]);
      return;
    }
    const ie = {
      id: Date.now().toString(),
      text: c.trim(),
      isUser: !0,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: i
    };
    p((B) => [...B, ie]), x(C), d(""), m(!0);
    try {
      const B = await to(C, i);
      let J;
      B.success && ((se = B.data) != null && se.message) ? J = B.data.message : B.success && B.data && typeof B.data == "string" ? J = B.data : (B.error, J = Je(C));
      const Ee = {
        id: (Date.now() + 1).toString(),
        text: J,
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: i
      };
      p((Ae) => [...Ae, Ee]);
    } catch (B) {
      console.error("Error sending message:", B);
      const Ee = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, estoy teniendo problemas técnicos. Por favor, intenta de nuevo en unos momentos.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: i
      };
      p((Ae) => [...Ae, Ee]);
    } finally {
      m(!1);
    }
  }, [c, h, i, u]), T = q((C) => {
    C.key === "Enter" && !C.shiftKey && !h && (C.preventDefault(), w());
  }, [w, h]);
  return /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e(
      vt,
      {
        color: "primary",
        "aria-label": "chat",
        onClick: b,
        sx: {
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1e3,
          width: 60,
          height: 60,
          backgroundColor: t.palette.primary.main,
          color: t.palette.primary.contrastText,
          boxShadow: "0 4px 20px rgba(255, 69, 0, 0.3)",
          "&:hover": {
            backgroundColor: "rgba(255, 69, 0, 0.9)",
            boxShadow: "0 6px 25px rgba(255, 69, 0, 0.4)",
            transform: "scale(1.05)"
          },
          transition: "all 0.3s ease",
          p: 0,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ e(
          n,
          {
            component: "img",
            src: "/assets/images/robot-assistant.png",
            alt: "AI4U Assistant",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "brightness(0) invert(1)"
              // Hace el logo blanco
            }
          }
        )
      }
    ),
    /* @__PURE__ */ l(
      It,
      {
        open: a,
        onClose: S,
        maxWidth: "sm",
        fullWidth: !0,
        fullScreen: r,
        slotProps: {
          paper: {
            sx: {
              borderRadius: { xs: 0, sm: 2 },
              height: { xs: "100%", sm: "70vh" },
              maxHeight: { xs: "100%", sm: "600px" }
            }
          }
        },
        children: [
          /* @__PURE__ */ l(
            Ct,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: `1px solid ${_(t.palette.divider, 0.1)}`,
                pb: 2,
                mb: 0
              },
              children: [
                /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                  /* @__PURE__ */ e(
                    n,
                    {
                      component: "img",
                      src: "/assets/images/robot-assistant.png",
                      alt: "AI4U Assistant",
                      sx: {
                        width: 40,
                        height: 40,
                        objectFit: "contain"
                      }
                    }
                  ),
                  /* @__PURE__ */ l(n, { children: [
                    /* @__PURE__ */ e(y, { variant: "h6", sx: { fontWeight: 400 }, children: "Asistente AI4U" }),
                    /* @__PURE__ */ e(y, { variant: "caption", color: "text.secondary", children: "En línea" })
                  ] })
                ] }),
                /* @__PURE__ */ e(U, { onClick: S, size: "small", children: /* @__PURE__ */ e(ct, {}) })
              ]
            }
          ),
          /* @__PURE__ */ l(
            zt,
            {
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                height: "100%"
              },
              children: [
                /* @__PURE__ */ l(
                  n,
                  {
                    sx: {
                      flex: 1,
                      overflowY: "auto",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2
                    },
                    children: [
                      s.map((C) => /* @__PURE__ */ e(
                        n,
                        {
                          sx: {
                            display: "flex",
                            justifyContent: C.isUser ? "flex-end" : "flex-start"
                          },
                          children: /* @__PURE__ */ l(
                            me,
                            {
                              sx: {
                                p: 2,
                                maxWidth: "80%",
                                backgroundColor: C.isUser ? t.palette.primary.main : _(t.palette.background.paper, 0.8),
                                color: C.isUser ? t.palette.primary.contrastText : t.palette.text.primary,
                                borderRadius: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                              },
                              children: [
                                /* @__PURE__ */ e(y, { variant: "body2", children: C.text }),
                                /* @__PURE__ */ e(
                                  y,
                                  {
                                    variant: "caption",
                                    sx: {
                                      opacity: 0.7,
                                      display: "block",
                                      mt: 0.5
                                    },
                                    children: C.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit"
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        },
                        C.id
                      )),
                      h && /* @__PURE__ */ e(n, { sx: { display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ e(
                        me,
                        {
                          sx: {
                            p: 2,
                            backgroundColor: _(t.palette.background.paper, 0.8),
                            borderRadius: 2,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          },
                          children: /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                            /* @__PURE__ */ e(Tt, { size: 16 }),
                            /* @__PURE__ */ e(y, { variant: "body2", color: "text.secondary", children: "Escribiendo..." })
                          ] })
                        }
                      ) }),
                      /* @__PURE__ */ e("div", { ref: f })
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  n,
                  {
                    sx: {
                      p: 2,
                      borderTop: `1px solid ${_(t.palette.divider, 0.1)}`
                    },
                    children: [
                      c.length > 400 && /* @__PURE__ */ l(
                        y,
                        {
                          variant: "caption",
                          color: c.length > 500 ? "error" : "warning.main",
                          sx: { mb: 1, display: "block", textAlign: "right" },
                          children: [
                            c.length,
                            "/500"
                          ]
                        }
                      ),
                      /* @__PURE__ */ l(
                        n,
                        {
                          sx: {
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-end"
                          },
                          children: [
                            /* @__PURE__ */ e(
                              it,
                              {
                                fullWidth: !0,
                                multiline: !0,
                                maxRows: 4,
                                placeholder: h ? "Esperando respuesta..." : "Escribe tu mensaje...",
                                value: c,
                                onChange: (C) => d(C.target.value),
                                onKeyPress: T,
                                disabled: h,
                                variant: "outlined",
                                size: "small",
                                sx: {
                                  "& .MuiOutlinedInput-root": {
                                    borderRadius: 2
                                  }
                                }
                              }
                            ),
                            /* @__PURE__ */ e(
                              U,
                              {
                                onClick: w,
                                disabled: !c.trim() || h,
                                color: "primary",
                                sx: {
                                  backgroundColor: t.palette.primary.main,
                                  color: t.palette.primary.contrastText,
                                  "&:hover": {
                                    backgroundColor: "rgba(255, 69, 0, 0.9)"
                                  },
                                  "&:disabled": {
                                    backgroundColor: _(t.palette.action.disabled, 0.12),
                                    color: t.palette.action.disabled
                                  }
                                },
                                children: /* @__PURE__ */ e(Gt, {})
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}, An = ({
  variant: t = "primary",
  size: r = "medium",
  showIcon: a = !1,
  text: o = "Nuestros Servicios",
  className: i,
  sx: s
}) => {
  const p = Le();
  return /* @__PURE__ */ e(
    Ce,
    {
      variant: t,
      size: r,
      onClick: () => {
        p("/servicios"), window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      startIcon: a ? /* @__PURE__ */ e(qt, {}) : void 0,
      className: i,
      sx: s,
      children: o
    }
  );
}, oo = O(_e, {
  shouldForwardProp: (t) => t !== "cardVariant" && t !== "forceMode" && t !== "dashboardColors"
})(({ theme: t, cardVariant: r, forceMode: a, dashboardColors: o }) => {
  const i = a ? a === "light" : t.palette.mode === "light", s = {
    borderRadius: 0,
    // Brutalist zero radius
    transition: "all 0.2s steps(4, end)",
    position: "relative",
    overflow: "hidden",
    backgroundColor: i ? g.white : g.black,
    color: i ? g.black : g.white,
    border: `1px solid ${i ? g.black : g.white}`,
    boxShadow: "none"
  };
  switch (r) {
    case "dashboard":
      return {
        ...s,
        borderRadius: X.radius.sm,
        backgroundColor: (o == null ? void 0 : o.background) ?? s.backgroundColor,
        color: (o == null ? void 0 : o.text) ?? s.color,
        border: `1px solid ${(o == null ? void 0 : o.border) ?? s.border}`
      };
    case "elevated":
      return {
        ...s,
        border: `2px solid ${i ? g.black : g.white}`,
        "&:hover": {
          transform: "translate(-4px, -4px)",
          boxShadow: i ? `8px 8px 0px ${g.black}` : `8px 8px 0px ${g.white}`
        }
      };
    case "outlined":
      return {
        ...s,
        backgroundColor: "transparent",
        border: `1px solid ${i ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"}`,
        "&:hover": {
          borderColor: i ? g.black : g.white,
          bgcolor: i ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"
        }
      };
    case "industrial":
      return {
        ...s,
        border: `4px solid ${i ? g.black : g.white}`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40px",
          borderBottom: `1px solid ${i ? g.black : g.white}`,
          zIndex: 0
        }
      };
    default:
      return s;
  }
}), no = O(n)(({ theme: t }) => ({
  position: "absolute",
  top: 4,
  left: 8,
  ...z.label.secondary,
  fontSize: "0.65rem",
  zIndex: 1,
  pointerEvents: "none"
})), ze = ({
  children: t,
  variant: r = "default",
  elevation: a = 0,
  showContent: o = !0,
  label: i,
  sx: s,
  ...p
}) => {
  const c = I(), d = r === "dashboard" ? { background: c.contrast.surface, text: c.contrast.text.primary, border: c.contrast.border } : void 0;
  return /* @__PURE__ */ l(
    oo,
    {
      cardVariant: r,
      elevation: a,
      forceMode: c.effectiveMode,
      dashboardColors: d,
      sx: s,
      ...p,
      children: [
        i && /* @__PURE__ */ l(no, { children: [
          '"',
          i,
          '"'
        ] }),
        o && /* @__PURE__ */ e(ue, { sx: {
          padding: { xs: 3, md: 4 },
          pt: i ? 6 : { xs: 3, md: 4 },
          // Add padding if label exists
          "&:last-child": { paddingBottom: { xs: 3, md: 4 } },
          position: "relative",
          zIndex: 1
        }, children: t })
      ]
    }
  );
}, Rn = ({
  title: t,
  subtitle: r = "",
  transactions: a,
  onShowMore: o = () => {
  },
  variant: i = "elevated"
}) => {
  const s = I(), p = () => {
    switch (i) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${s.contrast.divider}`,
            color: s.contrast.text.primary
          },
          surface: {
            background: s.contrast.surface,
            border: "none"
          }
        };
      case "elevated":
        return {
          card: {
            background: s.contrast.surface,
            border: "none",
            color: s.contrast.text.primary,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          },
          surface: {
            background: s.contrast.background,
            border: "none"
          }
        };
      default:
        return {
          card: {
            background: s.contrast.surface,
            border: "none",
            color: s.contrast.text.primary
          },
          surface: {
            background: s.contrast.background,
            border: "none"
          }
        };
    }
  }, c = (m) => ({
    Shopping: {
      bg: s.palette.accent + "20",
      text: s.palette.accent,
      icon: /* @__PURE__ */ e(er, {})
    },
    Fitness: {
      bg: s.palette.success + "20",
      text: s.palette.success,
      icon: /* @__PURE__ */ e(Jt, {})
    },
    Education: {
      bg: s.palette.accent + "20",
      text: s.palette.accent,
      icon: /* @__PURE__ */ e(Qt, {})
    },
    Investments: {
      bg: s.palette.success + "20",
      text: s.palette.success,
      icon: /* @__PURE__ */ e(Zt, {})
    },
    Health: {
      bg: s.palette.accent + "20",
      text: s.palette.accent,
      icon: /* @__PURE__ */ e(Kt, {})
    }
  })[m] || {
    bg: s.helpers.background.secondary,
    text: s.helpers.text.secondary,
    icon: /* @__PURE__ */ e(Xt, {})
  }, d = (m) => {
    switch (m) {
      case "completed":
        return s.palette.success;
      case "pending":
        return s.palette.accent;
      case "failed":
        return "#DC2626";
      default:
        return s.palette.success;
    }
  }, h = p();
  return /* @__PURE__ */ e(
    ze,
    {
      variant: i,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...h.card
      },
      children: /* @__PURE__ */ l(ue, { sx: { p: 3 }, children: [
        /* @__PURE__ */ l(n, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ e(Ge, { sx: {
              width: 48,
              height: 48,
              background: h.surface.background,
              border: h.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ e(Yt, { sx: {
              color: s.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ l(n, { children: [
              /* @__PURE__ */ e(N, { sx: {
                color: s.helpers.text.primary,
                mb: 0.5
              }, children: t }),
              r && /* @__PURE__ */ e(A, { sx: {
                color: s.helpers.text.secondary
              }, children: r })
            ] })
          ] }),
          /* @__PURE__ */ e(
            U,
            {
              size: "small",
              sx: {
                color: s.helpers.text.secondary,
                "&:hover": {
                  background: s.helpers.state.hover
                }
              },
              children: /* @__PURE__ */ e(qe, {})
            }
          )
        ] }),
        /* @__PURE__ */ e(n, { sx: { mb: 3 }, children: a.map((m) => {
          const u = c(m.category);
          return /* @__PURE__ */ l(
            n,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 2.5,
                mb: 2,
                borderRadius: 3,
                background: h.surface.background,
                border: h.surface.border,
                backdropFilter: "blur(10px)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: s.helpers.state.hover,
                  transform: "translateX(4px)"
                }
              },
              children: [
                /* @__PURE__ */ e(Ge, { sx: {
                  width: 48,
                  height: 48,
                  background: u.bg,
                  color: u.text,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }, children: m.icon || u.icon }),
                /* @__PURE__ */ l(n, { sx: { flex: 1 }, children: [
                  /* @__PURE__ */ l(n, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1
                  }, children: [
                    /* @__PURE__ */ e(N, { sx: {
                      fontWeight: 400,
                      color: s.helpers.text.primary
                    }, children: m.merchant }),
                    /* @__PURE__ */ l(fe, { sx: {
                      fontWeight: 400,
                      color: s.helpers.text.primary
                    }, children: [
                      "$",
                      m.amount.toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ l(n, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }, children: [
                    /* @__PURE__ */ e(
                      oe,
                      {
                        label: m.category,
                        size: "small",
                        sx: {
                          backgroundColor: u.bg,
                          color: u.text,
                          fontSize: "0.75rem",
                          height: 24,
                          fontWeight: 400,
                          "& .MuiChip-label": {
                            px: 1.5
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                      /* @__PURE__ */ e(A, { sx: {
                        color: s.helpers.text.secondary
                      }, children: m.time }),
                      m.status && /* @__PURE__ */ e(n, { sx: {
                        width: 8,
                        height: 8,
                        backgroundColor: d(m.status),
                        borderRadius: "50%"
                      } })
                    ] })
                  ] })
                ] })
              ]
            },
            m.id
          );
        }) }),
        o && /* @__PURE__ */ l(D, { children: [
          /* @__PURE__ */ e(ve, { sx: {
            mb: 3,
            borderColor: s.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ l(n, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ e(
              U,
              {
                onClick: o,
                sx: {
                  width: 48,
                  height: 48,
                  background: s.palette.accent,
                  color: s.palette.white,
                  "&:hover": {
                    background: "#E54A00",
                    transform: "scale(1.05)"
                  },
                  transition: "all 0.2s ease"
                },
                children: /* @__PURE__ */ e(qe, {})
              }
            ),
            /* @__PURE__ */ e(A, { sx: {
              mt: 1,
              color: s.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Explorar más" })
          ] })
        ] })
      ] })
    }
  );
}, ao = O(y)(({ stepSize: t, theme: r }) => ({
  fontSize: t === "small" ? "2rem" : t === "large" ? "4rem" : "3rem",
  fontWeight: 400,
  lineHeight: 0.9,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: "-0.02em",
  color: r.palette.text.primary,
  [r.breakpoints.down("md")]: {
    fontSize: t === "small" ? "1.8rem" : t === "large" ? "3.5rem" : "2.5rem"
  },
  [r.breakpoints.down("sm")]: {
    fontSize: t === "small" ? "1.5rem" : t === "large" ? "3rem" : "2.2rem"
  },
  [r.breakpoints.down("xs")]: {
    fontSize: t === "small" ? "1.3rem" : t === "large" ? "2.5rem" : "2rem"
  }
})), Fn = ({
  number: t,
  title: r,
  description: a,
  color: o = "primary.main",
  size: i = "medium",
  sx: s,
  ...p
}) => {
  const c = I(), d = () => {
    switch (i) {
      case "small":
        return {
          numberSize: 60,
          fontSize: "2rem",
          titleSize: "1rem",
          descriptionSize: "0.85rem"
        };
      case "large":
        return {
          numberSize: 100,
          fontSize: "4rem",
          titleSize: "1.3rem",
          descriptionSize: "1rem"
        };
      default:
        return {
          numberSize: 80,
          fontSize: "3rem",
          titleSize: "1.1rem",
          descriptionSize: "0.9rem"
        };
    }
  }, { numberSize: h, titleSize: m, descriptionSize: u } = d();
  return /* @__PURE__ */ l(
    n,
    {
      sx: {
        display: "flex",
        mb: 2,
        alignItems: "flex-start",
        p: 2,
        borderRadius: 2,
        background: c.contrast.surface,
        border: `1px solid ${c.contrast.border}`,
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: c.contrast.text.secondary,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        },
        ...s
      },
      ...p,
      children: [
        /* @__PURE__ */ e(
          n,
          {
            sx: {
              width: h,
              height: h,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              mr: 3,
              position: "relative",
              borderRadius: "50%",
              background: c.contrast.background,
              border: `2px solid ${c.contrast.text.secondary}`
            },
            children: /* @__PURE__ */ e(
              ao,
              {
                stepSize: i,
                sx: {
                  textAlign: "center",
                  fontWeight: 400,
                  color: c.contrast.text.secondary
                },
                children: t
              }
            )
          }
        ),
        /* @__PURE__ */ l(n, { sx: { flex: 1, pt: i === "large" ? 1.5 : i === "medium" ? 1 : 0.5 }, children: [
          /* @__PURE__ */ e(
            L,
            {
              sx: {
                fontWeight: 400,
                fontSize: m,
                mb: 1,
                color: c.contrast.text.primary,
                lineHeight: 1.3,
                letterSpacing: "-0.01em"
              },
              children: r
            }
          ),
          /* @__PURE__ */ e(
            L,
            {
              sx: {
                fontSize: u,
                lineHeight: 1.5,
                color: c.contrast.text.secondary,
                fontWeight: 400
              },
              children: a
            }
          )
        ] })
      ]
    }
  );
}, io = O(n)(({ theme: t }) => {
  const r = t.palette.mode === "light";
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    marginBottom: "8px",
    border: `1px solid ${r ? "#000" : "#fff"}`,
    transition: "all 0.1s steps(2)",
    "&:hover": {
      backgroundColor: r ? "#000" : "#fff",
      color: r ? "#fff" : "#000",
      transform: "translateX(4px)"
    }
  };
}), $n = ({
  title: t,
  subtitle: r = "",
  categories: a,
  totalAmount: o = 0,
  onAddCategory: i = () => {
  },
  variant: s = "industrial"
}) => {
  const p = I(), c = p.effectiveMode === "light";
  return /* @__PURE__ */ l(
    ze,
    {
      variant: s,
      label: "FINANCE_CORE_V1",
      sx: {
        maxWidth: 450,
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ e(n, { sx: { mb: 4 }, children: /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
          /* @__PURE__ */ e(n, { sx: {
            width: 48,
            height: 48,
            border: `2px solid ${c ? "#000" : "#fff"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: c ? "#000" : "#fff",
            color: c ? "#fff" : "#000"
          }, children: /* @__PURE__ */ e(tr, {}) }),
          /* @__PURE__ */ l(n, { children: [
            /* @__PURE__ */ e(y, { sx: { ...z.display.medium, fontSize: "1.5rem", mb: 0 }, children: t }),
            r && /* @__PURE__ */ l(y, { sx: { ...z.label.secondary }, children: [
              "// ",
              r
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ l(n, { sx: {
          p: 3,
          border: `4px solid ${c ? "#000" : "#fff"}`,
          mb: 4,
          position: "relative"
        }, children: [
          /* @__PURE__ */ e(y, { sx: { ...z.label.main, mb: 1 }, children: '"TOTAL_BUDGET"' }),
          /* @__PURE__ */ l(n, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" }, children: [
            /* @__PURE__ */ l(fe, { sx: { fontSize: "3rem", fontWeight: 900, mb: 0 }, children: [
              "$",
              o == null ? void 0 : o.toLocaleString()
            ] }),
            /* @__PURE__ */ e(
              U,
              {
                onClick: i,
                sx: {
                  borderRadius: 0,
                  border: `2px solid ${c ? "#000" : "#fff"}`,
                  bgcolor: p.palette.accentColors.mint,
                  color: "#000",
                  "&:hover": {
                    bgcolor: p.palette.accentColors.orange
                  }
                },
                children: /* @__PURE__ */ e(rr, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e(y, { sx: { ...z.label.main, mb: 2 }, children: '"DISTRIBUTION_LOG"' }),
        /* @__PURE__ */ e(n, { sx: { mb: 4 }, children: a.map((d, h) => /* @__PURE__ */ l(io, { children: [
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ e(y, { sx: { ...z.label.secondary, opacity: 0.5 }, children: String(h + 1).padStart(2, "0") }),
            /* @__PURE__ */ e(y, { sx: { fontWeight: 700, textTransform: "uppercase" }, children: d.name })
          ] }),
          /* @__PURE__ */ l(y, { sx: { fontWeight: 900, fontFamily: "monospace" }, children: [
            "$",
            d.amount.toLocaleString()
          ] })
        ] }, h)) }),
        /* @__PURE__ */ l(n, { sx: {
          pt: 2,
          borderTop: `1px dashed ${c ? "#000" : "#fff"}`,
          opacity: 0.5,
          display: "flex",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ e(y, { sx: { ...z.label.secondary }, children: "SYSTEM_VERSION_2.0.4" }),
          /* @__PURE__ */ e(y, { sx: { ...z.label.secondary }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
        ] })
      ]
    }
  );
}, so = O(y, {
  shouldForwardProp: (t) => t !== "metricSize"
})(({ metricSize: t, theme: r }) => ({
  fontSize: t === "compact" ? "3rem" : t === "large" ? "7rem" : "5rem",
  fontWeight: 900,
  // Brutalist impact
  lineHeight: 0.85,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: "-0.05em",
  margin: 0,
  padding: 0,
  color: "inherit",
  textTransform: "uppercase",
  [r.breakpoints.down("sm")]: {
    fontSize: t === "compact" ? "2.5rem" : t === "large" ? "4rem" : "3.5rem"
  }
})), lo = O(n)(({ theme: t }) => ({
  ...z.label.secondary,
  fontSize: "0.65rem",
  position: "absolute",
  top: 10,
  left: 10,
  opacity: 0.5
})), Wn = (t) => {
  const {
    title: r,
    value: a,
    subtitle: o,
    iconType: i = "dot",
    trend: s = "neutral",
    size: p = "normal",
    onClick: c,
    label: d = "METRIC_SYSTEM"
  } = t, h = I();
  h.effectiveMode;
  const m = () => {
    switch (s) {
      case "up":
        return h.palette.accentColors.mint;
      case "down":
        return h.palette.accentColors.orange;
      default:
        return "inherit";
    }
  };
  return /* @__PURE__ */ l(
    _e,
    {
      onClick: c,
      sx: {
        cursor: c ? "pointer" : "default",
        minHeight: (u) => p === "compact" ? u.spacing(20) : p === "large" ? u.spacing(40) : u.spacing(25),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // Functional left alignment
        p: 4,
        position: "relative",
        overflow: "hidden",
        bgcolor: h.helpers.background.primary,
        color: h.helpers.text.primary,
        borderRadius: 0,
        border: `2px solid ${h.helpers.text.primary}`,
        // Radical Industrial Border
        transition: "all 0.15s steps(4, end)",
        "&:hover": {
          transform: c ? "translate(-4px, -4px)" : "none",
          boxShadow: c ? `8px 8px 0px 0px ${h.helpers.text.primary}` : "none",
          "& .metric-bg": { opacity: 0.1 }
        }
      },
      children: [
        /* @__PURE__ */ l(lo, { children: [
          '"',
          d,
          '"'
        ] }),
        /* @__PURE__ */ e(
          n,
          {
            className: "metric-bg",
            sx: {
              position: "absolute",
              bottom: -20,
              right: -10,
              opacity: 0.05,
              fontSize: "10rem",
              fontWeight: 900,
              pointerEvents: "none",
              transition: "all 0.3s"
            },
            children: i === "dot" ? "•" : "#"
          }
        ),
        /* @__PURE__ */ e(n, { sx: { mt: 2, mb: 1, width: "100%", position: "relative", zIndex: 1 }, children: /* @__PURE__ */ e(so, { metricSize: p, children: typeof a == "number" ? a.toLocaleString() : a }) }),
        /* @__PURE__ */ l(n, { sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 1,
          width: "100%",
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ e(
            y,
            {
              sx: {
                ...z.label.main,
                color: "inherit"
              },
              children: r
            }
          ),
          s !== "neutral" && /* @__PURE__ */ e(n, { sx: { color: m(), display: "flex" }, children: /* @__PURE__ */ e(
            we,
            {
              type: "triangle",
              size: "small",
              color: "inherit",
              variant: "filled",
              sx: { transform: s === "down" ? "rotate(180deg)" : "none" }
            }
          ) })
        ] }),
        o && /* @__PURE__ */ e(
          y,
          {
            sx: {
              ...z.body.small,
              color: "inherit",
              opacity: 0.6,
              maxWidth: "90%",
              position: "relative",
              zIndex: 1
            },
            children: o
          }
        ),
        /* @__PURE__ */ e(
          n,
          {
            sx: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 4,
              bgcolor: s !== "neutral" ? m() : "transparent",
              opacity: 0.8
            }
          }
        )
      ]
    }
  );
}, co = ({ open: t, onClose: r, children: a, maxWidth: o = 560, sx: i }) => {
  const s = M(), p = ge(s.breakpoints.down("sm")), { contrast: c } = I();
  return $(() => {
    if (!t) return;
    const d = (h) => {
      h.key === "Escape" && r();
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [t, r]), t ? /* @__PURE__ */ e(
    n,
    {
      onClick: r,
      "data-testid": "modal-overlay",
      sx: {
        position: "fixed",
        inset: 0,
        zIndex: kt.modal,
        backgroundColor: "rgba(0,0,0,0.72)",
        display: "flex",
        alignItems: p ? "flex-end" : "center",
        justifyContent: "center",
        padding: p ? 0 : "24px"
      },
      children: /* @__PURE__ */ l(
        n,
        {
          onClick: (d) => d.stopPropagation(),
          sx: {
            position: "relative",
            width: p ? "100%" : "auto",
            maxWidth: p ? "100%" : o,
            maxHeight: "90vh",
            backgroundColor: c.surface,
            color: c.text.primary,
            borderRadius: p ? `${X.radius.md} ${X.radius.md} 0 0` : X.radius.md,
            overflow: "auto",
            ...i
          },
          children: [
            /* @__PURE__ */ e(
              Ce,
              {
                variant: "dashboard",
                iconOnly: !0,
                onClick: r,
                "aria-label": "Cerrar",
                sx: {
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 1,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  border: "none",
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" }
                },
                children: "✕"
              }
            ),
            a
          ]
        }
      )
    }
  ) : null;
}, Mn = ({ src: t, alt: r = "", open: a, onClose: o }) => /* @__PURE__ */ e(co, { open: a, onClose: o, maxWidth: "90vw", sx: { backgroundColor: "transparent", overflow: "visible" }, children: /* @__PURE__ */ e(
  n,
  {
    component: "img",
    src: t,
    alt: r,
    sx: {
      display: "block",
      maxWidth: "100%",
      maxHeight: "85vh",
      width: "auto",
      height: "auto",
      objectFit: "contain",
      borderRadius: "8px"
    }
  }
) }), j = {
  HOME: "/",
  SERVICES: "/servicios",
  WHY_AI4U: "/por-que-ai4u",
  PORTFOLIO: "/portafolio",
  SUPER_AI: "/super-ai",
  DESIGN_SYSTEM: "/design-system"
}, po = {
  CONTACT: {
    CALENDLY: "calendly.com/mgarciap333/ai4u"
  }
};
g.accent, g.gray[600], g.success, g.warning, g.error, g.info;
be.sm, be.md, be.lg;
const ho = `https://${po.CONTACT.CALENDLY}`, He = ({
  variant: t = "primary",
  size: r = "medium",
  showIcon: a = !1,
  text: o,
  className: i,
  sx: s
}) => /* @__PURE__ */ e(
  Ce,
  {
    variant: t,
    size: r,
    onClick: () => {
      ht.trackConsultationRequest("calendly", "diagnostic"), window.open(ho, "_blank", "noopener,noreferrer");
    },
    startIcon: a ? /* @__PURE__ */ e(hr, {}) : void 0,
    className: i,
    sx: s,
    children: o || "Diagnóstico gratis"
  }
), Dn = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI4U",
  url: "https://www.ai4u.com.co",
  description: "Soluciones de Inteligencia Artificial personalizadas para tu negocio",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.ai4u.com.co/servicios?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}), _n = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de Inteligencia Artificial",
  description: "Catálogo completo de servicios de IA personalizados",
  url: "https://www.ai4u.com.co/servicios",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Operación",
      description: "Eficiencia continua. Optimiza tiempo y recursos.",
      url: "https://www.ai4u.com.co/servicios#OPERATION"
    },
    {
      "@type": "Service",
      position: 2,
      name: "Estrategia",
      description: "Data real. Decisiones con ventaja competitiva.",
      url: "https://www.ai4u.com.co/servicios#STRATEGY"
    },
    {
      "@type": "Service",
      position: 3,
      name: "Educación",
      description: "Evolución humana. Tu equipo dominando la IA.",
      url: "https://www.ai4u.com.co/servicios#EDUCATION"
    },
    {
      "@type": "Service",
      position: 4,
      name: "Transformación",
      description: "Infraestructura IA. Diseñada para escalar.",
      url: "https://www.ai4u.com.co/servicios#TRANSFORMATION"
    }
  ]
}), go = (t) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: t.title,
  description: t.description,
  provider: {
    "@type": "Organization",
    name: "AI4U",
    url: "https://www.ai4u.com.co"
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia"
  },
  serviceType: t.category,
  offers: {
    "@type": "Offer",
    price: t.price || "Consultar",
    priceCurrency: "COP",
    availability: "https://schema.org/InStock"
  }
}), On = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de Uso de IA",
  description: "Casos de éxito y aplicaciones de inteligencia artificial",
  url: "https://www.ai4u.com.co/casos-de-uso",
  itemListElement: [
    {
      "@type": "CreativeWork",
      position: 1,
      name: "Automatización de Atención al Cliente",
      description: "Chatbots inteligentes para atención 24/7"
    },
    {
      "@type": "CreativeWork",
      position: 2,
      name: "Análisis de Datos Empresariales",
      description: "Machine Learning para insights de negocio"
    },
    {
      "@type": "CreativeWork",
      position: 3,
      name: "Optimización de Procesos",
      description: "IA para mejorar eficiencia operacional"
    }
  ]
}), Ln = (t) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: t.map((r) => ({
    "@type": "Question",
    name: r.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: r.answer
    }
  }))
}), mo = (t) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: t.map((r, a) => ({
    "@type": "ListItem",
    position: a + 1,
    name: r.name,
    item: r.url
  }))
}), Bn = (t) => {
  const r = {
    home: {
      title: "AI4U - Recupera tu Tiempo con Equipos de Agentes de IA",
      description: "El tiempo es oro. Te ayudamos a crear y administrar tu equipo de agentes de IA para orquestar tu libertad operativa. Infraestructura privada y segura.",
      keywords: "infraestructura IA, agentes de IA, orquestación IA, digital workforce, AI4U, SuperAI, automatización empresarial, Colombia"
    },
    services: {
      title: "Servicios de Inteligencia Artificial | AI4U",
      description: "Soluciones de IA organizadas en 4 ejes: Operación, Estrategia, Educación y Transformación. IA diseñada para resolver problemas reales.",
      keywords: "servicios IA, operación IA, estrategia IA, educación IA, transformación digital IA, SuperAI"
    },
    why: {
      title: "¿Por qué AI4U? | Casos de Éxito e Infraestructura de IA",
      description: "Descubre por qué somos tu mejor aliado en IA. Explora nuestros casos de éxito y la metodología que genera resultados reales.",
      keywords: "por qué AI4U, casos de éxito IA, ventajas IA, experiencia inteligencia artificial, resultados IA, Colombia"
    },
    portfolio: {
      title: "Portafolio de Innovación | Proyectos de IA | AI4U",
      description: "Explora nuestro portafolio de innovación. Proyectos reales de IA aplicados a diferentes industrias: desde Fashion Tech hasta E-Mobility.",
      keywords: "portafolio innovación, proyectos IA, casos éxito IA, IA aplicada, Fashion Tech IA, E-Mobility IA"
    }
  };
  return r[t] || r.home;
}, Pn = (t = "") => `https://www.ai4u.com.co${t}`, Nn = (t, r = 160) => t.length <= r ? t : t.substring(0, r - 3) + "...", Hn = (t, r = []) => [...t, ...r].join(", "), jn = ({
  service: t,
  showPrice: r = !0,
  compact: a = !1,
  onClick: o
}) => {
  const i = I(), s = go(t), c = ((d) => {
    const h = {
      "eje:operation": "Operación",
      "eje:strategy": "Estrategia",
      "eje:education": "Educación",
      "eje:transformation": "Transformación"
    };
    return d.filter((m) => m.startsWith("eje:")).map((m) => h[m] || m.replace("eje:", ""));
  })(t.tags);
  return /* @__PURE__ */ l(D, { children: [
    /* @__PURE__ */ e(
      ut,
      {
        structuredData: s,
        noIndex: !0
      }
    ),
    /* @__PURE__ */ e(n, { sx: {
      height: "100%",
      position: "relative",
      transition: "all 0.2s ease",
      "&:hover": {
        "& .service-card-content": {
          borderColor: t.color || i.contrast.text.primary
        }
      }
    }, children: /* @__PURE__ */ l(
      n,
      {
        className: "service-card-content",
        onClick: o,
        sx: {
          p: a ? 2.5 : 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: g.white,
          // Siempre blanco para máximo contraste "sticker"
          border: `3px solid ${g.black}`,
          // Siempre borde negro
          borderRadius: 0,
          transition: "all 0.1s ease",
          overflow: "hidden",
          boxShadow: `4px 4px 0px ${t.color || g.black}`,
          cursor: o ? "pointer" : "default",
          "&:hover": {
            transform: o ? "translate(-2px, -2px)" : "none",
            boxShadow: o ? `8px 8px 0px ${t.color || g.black}` : `4px 4px 0px ${t.color || g.black}`
          }
        },
        children: [
          /* @__PURE__ */ e(n, { sx: {
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 0.5
          }, children: c.map((d, h) => /* @__PURE__ */ e(
            oe,
            {
              label: d,
              size: "small",
              sx: {
                background: g.black,
                color: g.white,
                fontWeight: 400,
                fontSize: "0.6rem",
                height: 20,
                borderRadius: 0,
                textTransform: "none",
                letterSpacing: "0.1em",
                "& .MuiChip-label": {
                  px: 1
                }
              }
            },
            h
          )) }),
          /* @__PURE__ */ l(n, { sx: {
            mb: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column"
          }, children: [
            /* @__PURE__ */ e(
              y,
              {
                sx: {
                  color: g.black,
                  // Forzar negro para el título
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  fontWeight: 400,
                  lineHeight: 1.1,
                  textAlign: "left",
                  textTransform: "none",
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  "&::before": {
                    content: '"■"',
                    color: t.color || g.black,
                    mr: 1.5,
                    fontSize: "1.2rem"
                  }
                },
                children: t.title
              }
            ),
            /* @__PURE__ */ e(L, { sx: {
              lineHeight: 1.4,
              color: g.black,
              // Forzar negro para el cuerpo
              fontSize: "1rem",
              textAlign: "left",
              mb: 0,
              fontWeight: 400,
              opacity: 0.9,
              pl: 4
            }, children: t.description })
          ] }),
          /* @__PURE__ */ e(n, { sx: {
            mt: "auto",
            pt: 2,
            borderTop: `1px solid ${i.contrast.divider}`
          }, children: r && /* @__PURE__ */ l(n, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }, children: [
            /* @__PURE__ */ e(L, { sx: {
              fontWeight: 400,
              color: i.contrast.text.secondary,
              fontSize: "0.85rem"
            }, children: "Precio:" }),
            /* @__PURE__ */ e(y, { sx: {
              fontWeight: 400,
              color: i.contrast.text.primary,
              fontSize: "1.1rem"
            }, children: t.price })
          ] }) })
        ]
      }
    ) })
  ] });
}, Un = ({
  items: t,
  showHome: r = !0
}) => {
  const a = Le(), o = r ? [{ name: "Inicio", path: "/" }, ...t] : t, i = mo(
    o.map((p) => ({
      name: p.name,
      url: `https://ai4u.com.co${p.path}`
    }))
  ), s = (p) => {
    a(p);
  };
  return /* @__PURE__ */ l(n, { children: [
    /* @__PURE__ */ e(ut, { structuredData: i }),
    /* @__PURE__ */ e(
      n,
      {
        component: "nav",
        "aria-label": "Breadcrumb",
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          py: 2,
          px: { xs: 2, md: 0 },
          fontSize: "0.875rem",
          color: "text.secondary"
        },
        children: o.map((p, c) => [
          c > 0 && /* @__PURE__ */ e(
            y,
            {
              component: "span",
              sx: {
                mx: 1,
                color: "text.disabled",
                fontSize: "0.75rem"
              },
              children: "/"
            },
            `separator-${c}`
          ),
          p.current ? /* @__PURE__ */ e(
            y,
            {
              component: "span",
              sx: {
                color: "text.primary",
                fontWeight: 400,
                fontSize: "inherit"
              },
              children: p.name
            },
            p.path
          ) : /* @__PURE__ */ e(
            at,
            {
              component: "button",
              onClick: () => s(p.path),
              sx: {
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "inherit",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "underline"
                }
              },
              children: p.name
            },
            p.path
          )
        ].filter(Boolean))
      }
    )
  ] });
};
class Gn extends Nt {
  constructor(a) {
    super(a);
    G(this, "handleRetry", () => {
      this.setState({ hasError: !1, error: void 0, errorInfo: void 0 });
    });
    this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(a) {
    return {
      hasError: !0,
      error: a
    };
  }
  componentDidCatch(a, o) {
    this.setState({ errorInfo: o }), Wr.captureError({
      message: a.message,
      stack: a.stack,
      componentStack: o.componentStack ?? void 0,
      errorBoundary: !0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), this.props.onError && this.props.onError(a, o);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ e(K, { maxWidth: "md", sx: { py: 8 }, children: /* @__PURE__ */ l(
      n,
      {
        sx: {
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        },
        children: [
          /* @__PURE__ */ l(
            Et,
            {
              severity: "error",
              sx: {
                width: "100%",
                borderRadius: 2,
                "& .MuiAlert-message": {
                  width: "100%"
                }
              },
              children: [
                /* @__PURE__ */ e(At, { children: /* @__PURE__ */ e(gt, { component: "span", children: "Oops! Algo salió mal" }) }),
                /* @__PURE__ */ e(L, { sx: { mt: 1, mb: 2 }, children: "Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo." }),
                !1
              ]
            }
          ),
          /* @__PURE__ */ l(n, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ e(
              Q,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ e(or, {}),
                onClick: this.handleRetry,
                sx: { minWidth: 120 },
                children: "Reintentar"
              }
            ),
            /* @__PURE__ */ e(
              Q,
              {
                variant: "outlined",
                onClick: () => window.location.reload(),
                sx: { minWidth: 120 },
                children: "Recargar Página"
              }
            ),
            /* @__PURE__ */ e(
              Q,
              {
                variant: "text",
                onClick: () => window.location.href = "/",
                sx: { minWidth: 120 },
                children: "Ir al Inicio"
              }
            )
          ] }),
          /* @__PURE__ */ e(L, { sx: { color: "text.secondary", fontSize: "0.875rem" }, children: "Si el problema persiste, por favor contacta nuestro soporte técnico." })
        ]
      }
    ) }) : this.props.children;
  }
}
const Vn = (t) => {
  const {
    pages: r,
    title: a,
    variant: o = "vertical",
    className: i
  } = t, s = I(), p = "También podrías estar interesado en:", c = r.slice(0, 3);
  if (c.length === 0) return null;
  const d = () => o === "horizontal" ? /* @__PURE__ */ e(
    W,
    {
      direction: "row",
      spacing: 3,
      sx: { gap: 2, alignItems: "center", flexWrap: "wrap" },
      children: c.map((h, m) => /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
        /* @__PURE__ */ l(n, { children: [
          /* @__PURE__ */ e(
            he,
            {
              href: h.href,
              variant: "subtle",
              ariaLabel: h.context || h.label,
              children: /* @__PURE__ */ e(A, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: h.label })
            }
          ),
          h.context && /* @__PURE__ */ e(
            A,
            {
              sx: {
                color: s.contrast.text.secondary,
                fontSize: "0.75rem",
                mt: 0.5,
                display: "block"
              },
              children: h.context
            }
          )
        ] }),
        m < c.length - 1 && /* @__PURE__ */ e(Zr, { variant: "separator", size: "small" })
      ] }, h.href))
    }
  ) : /* @__PURE__ */ e(W, { spacing: 3, children: c.map((h) => /* @__PURE__ */ l(n, { children: [
    /* @__PURE__ */ e(
      he,
      {
        href: h.href,
        variant: "subtle",
        ariaLabel: h.context || h.label,
        children: /* @__PURE__ */ e(A, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: h.label })
      }
    ),
    h.context && /* @__PURE__ */ e(
      A,
      {
        sx: {
          color: s.contrast.text.secondary,
          fontSize: "0.75rem",
          mt: 0.5,
          display: "block"
        },
        children: h.context
      }
    )
  ] }, h.href)) });
  return /* @__PURE__ */ l(
    n,
    {
      className: i,
      sx: {
        py: 4,
        borderTop: `1px solid ${s.contrast.divider}`,
        borderBottom: `1px solid ${s.contrast.divider}`,
        backgroundColor: s.contrast.surface
      },
      children: [
        /* @__PURE__ */ e(
          A,
          {
            sx: {
              color: s.contrast.text.secondary,
              fontWeight: 400,
              mb: 3,
              fontSize: "0.8rem",
              textTransform: "none",
              letterSpacing: "0.5px"
            },
            children: a || p
          }
        ),
        d()
      ]
    }
  );
}, qn = (t) => {
  const {
    serviceName: r,
    serviceSlug: a,
    description: o,
    caseStudy: i,
    variant: s = "minimal",
    className: p
  } = t, c = I();
  return s === "minimal" ? /* @__PURE__ */ l(n, { className: p, sx: { display: "inline-flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ e(
      he,
      {
        href: `/servicios#${a}`,
        variant: "inline",
        ariaLabel: `Conoce más sobre ${r}`,
        children: /* @__PURE__ */ e(A, { sx: { fontWeight: 400 }, children: r })
      }
    ),
    /* @__PURE__ */ e(
      we,
      {
        type: "circle",
        size: "small",
        color: c.contrast.text.disabled,
        variant: "minimal"
      }
    )
  ] }) : /* @__PURE__ */ e(
    n,
    {
      className: p,
      sx: {
        p: 3,
        borderRadius: 2,
        backgroundColor: c.contrast.surface,
        border: `1px solid ${c.contrast.divider}`,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: c.palette.accent,
          backgroundColor: c.palette.white
        }
      },
      children: /* @__PURE__ */ l(W, { spacing: 2, children: [
        /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ e(
            we,
            {
              type: "square",
              size: "small",
              color: c.palette.accent,
              variant: "filled"
            }
          ),
          /* @__PURE__ */ e(
            he,
            {
              href: `/servicios#${a}`,
              variant: "accent",
              ariaLabel: `Conoce el servicio ${r}`,
              children: /* @__PURE__ */ e(A, { sx: { fontWeight: 400, fontSize: "0.9rem" }, children: r })
            }
          )
        ] }),
        o && /* @__PURE__ */ e(
          A,
          {
            sx: {
              color: c.contrast.text.secondary,
              fontSize: "0.8rem",
              lineHeight: 1.5
            },
            children: o
          }
        ),
        i && /* @__PURE__ */ l(n, { sx: { pt: 1, borderTop: `1px solid ${c.contrast.divider}` }, children: [
          /* @__PURE__ */ e(
            A,
            {
              sx: {
                color: c.contrast.text.secondary,
                fontSize: "0.75rem",
                mb: 1
              },
              children: "Caso real:"
            }
          ),
          /* @__PURE__ */ e(
            he,
            {
              href: `/casos-de-uso#${i.slug}`,
              variant: "subtle",
              ariaLabel: `Ver caso de uso en ${i.sector} con ${i.client}`,
              children: /* @__PURE__ */ l(A, { sx: { fontWeight: 400, fontSize: "0.8rem" }, children: [
                i.client,
                " - ",
                i.sector
              ] })
            }
          )
        ] })
      ] })
    }
  );
}, Yn = ({
  selectedValue: t,
  onValueChange: r,
  options: a
}) => {
  const o = I();
  return /* @__PURE__ */ l(n, { sx: { mb: 4 }, children: [
    /* @__PURE__ */ e(n, { sx: {
      mb: 2,
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: "0.1em",
      color: o.contrast.text.primary
    }, children: "// Tipo de servicio" }),
    /* @__PURE__ */ e(W, { direction: "row", spacing: 2, useFlexGap: !0, sx: { flexWrap: "wrap" }, children: a.map((i, s) => /* @__PURE__ */ e(
      oe,
      {
        label: i.label,
        size: "medium",
        onClick: () => r(i.value),
        sx: {
          borderRadius: "9999px",
          background: t === i.value ? o.contrast.text.primary : "transparent",
          color: t === i.value ? o.contrast.background : o.contrast.text.primary,
          border: `3px solid ${o.contrast.text.primary}`,
          fontSize: "0.9rem",
          fontWeight: 400,
          textTransform: "none",
          px: 2,
          height: "40px",
          cursor: "pointer",
          transition: "all 0.1s ease",
          "&:hover": {
            background: t === i.value ? o.contrast.text.primary : "rgba(0,0,0,0.05)",
            transform: "translate(-2px, -2px)",
            boxShadow: `4px 4px 0px ${o.contrast.text.primary}`
          }
        }
      },
      s
    )) })
  ] });
}, Xn = ({
  totalCount: t,
  filteredCount: r,
  activeFilters: a
}) => {
  const o = I(), i = a.length > 0, s = r !== t;
  return /* @__PURE__ */ e(n, { sx: {
    py: 1,
    mb: 2
  }, children: /* @__PURE__ */ l(W, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ e(
      we,
      {
        type: "dot",
        size: "small",
        color: o.contrast.text.secondary,
        variant: "minimal"
      }
    ),
    /* @__PURE__ */ l(y, { variant: "body2", sx: {
      color: o.contrast.text.secondary,
      fontSize: "0.875rem"
    }, children: [
      s ? `${r} de ${t}` : `${t}`,
      " servicios",
      i && /* @__PURE__ */ l("span", { style: { color: o.contrast.text.primary }, children: [
        " • ",
        a.join(", ")
      ] })
    ] })
  ] }) });
}, Kn = ({
  title: t,
  subtitle: r,
  children: a,
  defaultExpanded: o = !1,
  variant: i = "minimal",
  showIcon: s = !0,
  sx: p = {}
}) => {
  const [c, d] = v(o), h = I(), m = h.effectiveMode === "dark", u = () => {
    d(!c);
  }, f = (() => {
    switch (i) {
      case "card":
        return {
          container: {
            background: m ? h.palette.black : h.palette.white,
            border: `3px solid ${m ? h.palette.white : h.palette.black}`,
            color: m ? h.palette.white : h.palette.black,
            borderRadius: 0,
            p: 4,
            transition: "all 0.1s ease",
            "&:hover": {
              transform: "translate(-4px, -4px)",
              boxShadow: m ? "6px 6px 0px #FFFFFF" : "6px 6px 0px #171717"
            }
          }
        };
      case "bordered":
        return {
          container: {
            borderBottom: `3px solid ${m ? h.palette.white : h.palette.black}`,
            color: m ? h.palette.white : h.palette.black,
            pb: 3,
            mb: 3
          }
        };
      default:
        return {
          container: {
            color: "inherit",
            mb: 4
          }
        };
    }
  })();
  return /* @__PURE__ */ l(n, { sx: { ...f.container, ...p }, children: [
    /* @__PURE__ */ l(
      n,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          userSelect: "none",
          py: 2
        },
        onClick: u,
        children: [
          /* @__PURE__ */ l(n, { sx: { flex: 1 }, children: [
            /* @__PURE__ */ e(N, { sx: {
              color: "inherit",
              fontWeight: 400,
              fontSize: "1.2rem",
              textTransform: "none",
              letterSpacing: "0em"
            }, children: t }),
            r && /* @__PURE__ */ e(L, { sx: {
              color: "inherit",
              opacity: 0.8,
              fontSize: "1rem",
              mt: 1
            }, children: r })
          ] }),
          s && /* @__PURE__ */ e(
            U,
            {
              size: "medium",
              sx: {
                color: "inherit",
                transform: c ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
                opacity: 0.5,
                "&:hover": {
                  opacity: 1,
                  background: "transparent"
                }
              },
              children: /* @__PURE__ */ e(nr, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(Rt, { in: c, timeout: 100, children: /* @__PURE__ */ e(n, { sx: {
      pt: 3,
      borderTop: c ? `1px solid ${m ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : "none"
    }, children: a }) })
  ] });
}, Zn = ({
  summary: t,
  details: r,
  showDetails: a = !1,
  onToggle: o,
  variant: i = "inline",
  maxHeight: s = 200
}) => {
  const [p, c] = v(a), d = I(), h = () => {
    const x = !p;
    c(x), o == null || o(x);
  }, u = (() => {
    switch (i) {
      case "separated":
        return {
          container: {
            borderTop: `1px solid ${d.contrast.divider}`,
            pt: 2,
            mt: 2
          }
        };
      case "card":
        return {
          container: {
            background: d.contrast.surface,
            border: `1px solid ${d.contrast.divider}`,
            borderRadius: 2,
            p: 2,
            mt: 2
          }
        };
      default:
        return {
          container: {
            mt: 1
          }
        };
    }
  })();
  return /* @__PURE__ */ l(n, { children: [
    /* @__PURE__ */ e(
      n,
      {
        sx: {
          mb: p ? 2 : 0,
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            transition: "opacity 0.2s ease"
          }
        },
        onClick: h,
        children: t
      }
    ),
    p && /* @__PURE__ */ e(n, { sx: u.container, children: /* @__PURE__ */ e(
      n,
      {
        sx: {
          maxHeight: s,
          overflow: "auto",
          transition: "all 0.3s ease",
          "&::-webkit-scrollbar": {
            width: "6px"
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent"
          },
          "&::-webkit-scrollbar-thumb": {
            background: d.contrast.divider,
            borderRadius: "3px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: d.contrast.text.secondary
          }
        },
        children: r
      }
    ) })
  ] });
}, uo = {
  online: "Disponible",
  offline: "No disponible",
  starting: "Iniciando…",
  checking: "Verificando…",
  idle: "Inactivo"
};
function le(t, r) {
  const a = parseInt(t.slice(1, 3), 16), o = parseInt(t.slice(3, 5), 16), i = parseInt(t.slice(5, 7), 16);
  return `rgba(${a},${o},${i},${r})`;
}
const Qn = ({
  name: t,
  description: r,
  icon: a,
  accentColor: o,
  status: i,
  openUrl: s,
  isCli: p = !1,
  ctaLabel: c = "Abrir"
}) => {
  const d = I(), h = i === "online", m = i === "checking", u = d.contrast.surface, x = d.contrast.text.primary, f = d.contrast.text.secondary, b = d.contrast.text.disabled, S = d.contrast.border;
  return /* @__PURE__ */ l(
    n,
    {
      sx: {
        backgroundColor: u,
        border: `1px solid ${le(o, 0.2)}`,
        borderRadius: 0,
        // Brutalist DS
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s steps(4, end)",
        "&:hover": {
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px ${le(o, 0.6)}`,
          borderColor: le(o, 0.5)
        }
      },
      children: [
        /* @__PURE__ */ e(n, { sx: { height: 3, backgroundColor: o, flexShrink: 0 } }),
        /* @__PURE__ */ l(n, { sx: { flex: 1, display: "flex", flexDirection: "column", p: 2.5, gap: 1.5 }, children: [
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ e(
              n,
              {
                sx: {
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: le(o, 0.1),
                  border: `1px solid ${le(o, 0.2)}`
                },
                children: /* @__PURE__ */ e(Se, { id: a, size: "md", color: o, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ l(n, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ e(
                n,
                {
                  component: "div",
                  sx: {
                    fontFamily: '"Red Hat Display", sans-serif',
                    fontWeight: 800,
                    fontSize: 15,
                    color: x,
                    lineHeight: 1.2
                  },
                  children: t
                }
              ),
              /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }, children: [
                /* @__PURE__ */ e(De, { status: i, size: 6 }),
                /* @__PURE__ */ e(
                  n,
                  {
                    component: "span",
                    sx: {
                      fontSize: 11,
                      color: g.telemetry[i]
                    },
                    children: uo[i]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e(
            n,
            {
              component: "p",
              sx: {
                fontSize: 13,
                lineHeight: 1.6,
                color: f,
                m: 0,
                flex: 1
              },
              children: r
            }
          ),
          /* @__PURE__ */ e(n, { sx: { mt: 0.5 }, children: p ? /* @__PURE__ */ e(
            n,
            {
              component: "div",
              sx: { fontSize: 12, color: b, fontStyle: "italic" },
              children: "Herramienta de línea de comandos — se ejecuta desde el servidor"
            }
          ) : s ? /* @__PURE__ */ l(
            n,
            {
              component: "a",
              href: h ? s : void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (R) => {
                h || R.preventDefault();
              },
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                py: 1.25,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13,
                fontFamily: '"Red Hat Display", sans-serif',
                transition: "all 0.15s",
                backgroundColor: h ? o : "transparent",
                color: h ? g.white : b,
                border: h ? "none" : `1px solid ${S}`,
                cursor: h ? "pointer" : m ? "default" : "not-allowed",
                opacity: m ? 0.6 : 1
              },
              children: [
                /* @__PURE__ */ e(
                  Se,
                  {
                    id: "external-link",
                    size: 14,
                    color: h ? g.white : b,
                    strokeWidth: 2.2
                  }
                ),
                h ? c : m ? "Verificando…" : "No disponible"
              ]
            }
          ) : null })
        ] })
      ]
    }
  );
}, Jn = ({
  branding: t,
  label: r = "Acceso restringido",
  placeholder: a = "Contraseña",
  inputType: o = "password",
  submitLabel: i = "Entrar",
  loadingLabel: s = "Verificando…",
  accentColor: p = g.tamaprint.primary,
  footer: c,
  onSubmit: d
}) => {
  const h = xe(null), [m, u] = v(!1), [x, f] = v(""), [b, S] = v(!1);
  async function R(T) {
    var se;
    T.preventDefault();
    const C = ((se = h.current) == null ? void 0 : se.value) ?? "";
    if (!C) return;
    u(!0), f("");
    const ie = await d(C);
    ie.ok || (f(ie.error ?? "Error de autenticación"), S(!0), setTimeout(() => S(!1), 500), h.current && (h.current.value = "", h.current.focus())), u(!1);
  }
  const w = g.telemetry.offline;
  return /* @__PURE__ */ l(n, { component: "form", onSubmit: R, sx: { width: "100%", maxWidth: 360 }, children: [
    t && /* @__PURE__ */ e(n, { sx: { textAlign: "center", mb: 4 }, children: t }),
    /* @__PURE__ */ l(
      n,
      {
        sx: {
          backgroundColor: ee.dashboardDark.surface,
          border: `1px solid ${ee.dashboardDark.border}`,
          borderRadius: 0,
          p: "28px 28px 24px",
          animation: b ? "auth-shake 0.4s ease" : void 0,
          "@keyframes auth-shake": {
            "0%,100%": { transform: "translateX(0)" },
            "20%": { transform: "translateX(-8px)" },
            "40%": { transform: "translateX(8px)" },
            "60%": { transform: "translateX(-5px)" },
            "80%": { transform: "translateX(5px)" }
          }
        },
        children: [
          /* @__PURE__ */ l(
            n,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9.5,
                fontWeight: 700,
                color: ee.dashboardDark.text.secondary,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                mb: 2
              },
              children: [
                "◈ ",
                r
              ]
            }
          ),
          /* @__PURE__ */ e(
            n,
            {
              component: "input",
              ref: h,
              type: o,
              placeholder: a,
              autoFocus: !0,
              disabled: m,
              sx: {
                width: "100%",
                boxSizing: "border-box",
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${x ? w : "rgba(255,255,255,0.1)"}`,
                borderRadius: 0,
                p: "12px 14px",
                color: ee.dashboardDark.text.primary,
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
                mb: x ? 1 : 2,
                transition: "border-color 0.15s",
                "&:focus": {
                  borderColor: x ? w : p
                }
              }
            }
          ),
          x && /* @__PURE__ */ e(
            n,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 10,
                color: w,
                letterSpacing: "0.08em",
                mb: 1.75
              },
              children: x
            }
          ),
          /* @__PURE__ */ e(
            n,
            {
              component: "button",
              type: "submit",
              disabled: m,
              sx: {
                width: "100%",
                p: "12px 0",
                borderRadius: 0,
                border: "none",
                backgroundColor: m ? `${p}66` : p,
                color: g.white,
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.08em",
                cursor: m ? "default" : "pointer",
                transition: "background-color 0.15s"
              },
              children: m ? s : i
            }
          )
        ]
      }
    ),
    c && /* @__PURE__ */ e(n, { sx: { textAlign: "center", mt: 2.5 }, children: c })
  ] });
}, ea = ({
  presets: t,
  activePresetId: r,
  onPresetChange: a,
  fromDate: o,
  toDate: i,
  onFromChange: s,
  onToChange: p,
  minDate: c,
  maxDate: d,
  showCustomRange: h = !0,
  disabled: m = !1
}) => {
  const { contrast: u } = I(), x = (f) => {
    if (m) return;
    const b = typeof f.range == "function" ? f.range() : f.range;
    s(b.from), p(b.to), a(f.id);
  };
  return /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }, children: [
    /* @__PURE__ */ e(
      n,
      {
        sx: {
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          background: u.surface,
          borderRadius: X.radius.full,
          p: "4px",
          border: `1px solid ${u.border}`
        },
        children: t.map((f) => {
          const b = f.id === r;
          return /* @__PURE__ */ e(
            n,
            {
              component: "button",
              type: "button",
              disabled: m,
              onClick: () => x(f),
              sx: {
                background: b ? u.text.primary : "transparent",
                border: "none",
                borderRadius: X.radius.full,
                color: b ? u.background : u.text.secondary,
                cursor: m ? "not-allowed" : "pointer",
                opacity: m ? 0.5 : 1,
                fontFamily: "inherit",
                fontSize: 12,
                fontWeight: b ? 700 : 500,
                letterSpacing: "0.04em",
                px: { xs: "14px", sm: "16px" },
                py: { xs: "11px", sm: "7px" },
                // >=44px de alto en xs para cumplir el mínimo de área táctil.
                minHeight: { xs: 44, sm: "auto" },
                transition: "all 0.15s",
                "&:hover": m || b ? {} : { color: u.text.primary }
              },
              children: f.label
            },
            f.id
          );
        })
      }
    ),
    h && // flexWrap + flex en los inputs: en móviles muy angostos los dos date
    // pickers se apilan en vez de desbordar (el date input nativo de iOS
    // no baja de ~155px de ancho).
    /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ e(
        Ze,
        {
          type: "date",
          value: o,
          min: c,
          max: d,
          disabled: m,
          onChange: (f) => s(f.target.value),
          sx: { flex: "1 1 130px", minWidth: 0 }
        }
      ),
      /* @__PURE__ */ e(n, { component: "span", sx: { fontSize: 12, color: u.text.secondary }, children: "a" }),
      /* @__PURE__ */ e(
        Ze,
        {
          type: "date",
          value: i,
          min: c,
          max: d,
          disabled: m,
          onChange: (f) => p(f.target.value),
          sx: { flex: "1 1 130px", minWidth: 0 }
        }
      )
    ] })
  ] });
}, ta = ({
  items: t,
  activeItem: r,
  onItemClick: a,
  variant: o = "horizontal",
  className: i = ""
}) => {
  const s = I();
  M();
  const p = (h) => {
    a && a(h), h.onClick && h.onClick();
  }, c = (h) => {
    const m = r === h.id, u = {
      fontWeight: 400,
      textTransform: "none",
      transition: "all 0.3s ease"
    };
    switch (o) {
      case "tabs":
        return {
          ...u,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...m ? {
            background: s.palette.black,
            color: s.palette.white,
            boxShadow: pe.ai4u.button
          } : {
            color: s.contrast.text.secondary,
            "&:hover": {
              color: s.contrast.text.primary,
              background: _(s.palette.white, 0.1)
            }
          }
        };
      case "vertical":
        return {
          ...u,
          width: "100%",
          justifyContent: "flex-start",
          py: 1.5,
          px: 2,
          borderRadius: 1,
          fontSize: "0.875rem",
          ...m ? {
            background: s.palette.black,
            color: s.palette.white,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: s.palette.black,
            boxShadow: pe.ai4u.button
          } : {
            color: s.contrast.text.secondary,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: "transparent",
            "&:hover": {
              color: s.contrast.text.primary,
              background: s.helpers.state.hover,
              borderLeftColor: s.palette.black
            }
          }
        };
      default:
        return {
          ...u,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...m ? {
            background: s.palette.black,
            color: s.palette.white,
            boxShadow: pe.ai4u.button
          } : {
            color: s.contrast.text.secondary,
            "&:hover": {
              color: s.contrast.text.primary,
              background: s.helpers.state.hover
            }
          }
        };
    }
  }, d = () => {
    switch (o) {
      case "tabs":
        return {
          display: "flex",
          gap: 1,
          p: 1,
          borderRadius: 3,
          background: _(s.palette.white, 0.05),
          backdropFilter: "blur(20px)",
          border: `1px solid ${s.contrast.border}`
        };
      case "vertical":
        return {
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: "100%"
        };
      default:
        return {
          display: "flex",
          gap: 1,
          alignItems: "center",
          flexWrap: "wrap"
        };
    }
  };
  return o === "tabs" ? /* @__PURE__ */ e(n, { sx: d(), className: i, children: t.map((h) => /* @__PURE__ */ e(
    Q,
    {
      onClick: () => p(h),
      sx: c(h),
      children: h.label
    },
    h.id
  )) }) : /* @__PURE__ */ e(n, { sx: d(), className: i, children: t.map((h) => /* @__PURE__ */ e(
    Q,
    {
      onClick: () => p(h),
      sx: c(h),
      children: h.label
    },
    h.id
  )) });
}, xo = () => {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  M();
  const r = I(), a = [
    { icon: /* @__PURE__ */ e(gr, {}), url: "https://www.instagram.com/ai.4.u_/" },
    { icon: /* @__PURE__ */ e(mr, {}), url: "https://www.facebook.com/artificial.intelligence.4.you/" },
    { icon: /* @__PURE__ */ e(ur, {}), url: "https://www.linkedin.com/company/ai4u-com-co" },
    { icon: /* @__PURE__ */ e(br, {}), url: "https://x.com/_ai4u_" }
  ], o = [
    { name: "inicio", path: j.HOME },
    { name: "servicios", path: j.SERVICES },
    { name: "portafolio", path: j.PORTFOLIO },
    { name: "porqueAi4u", path: j.WHY_AI4U },
    { name: "designSystem", path: j.DESIGN_SYSTEM }
  ];
  return /* @__PURE__ */ e(
    n,
    {
      sx: {
        bgcolor: r.contrast.background,
        color: r.contrast.text.primary,
        borderTop: 1,
        borderColor: r.contrast.divider,
        py: 8
      },
      children: /* @__PURE__ */ l(K, { maxWidth: "lg", children: [
        /* @__PURE__ */ l(P, { container: !0, spacing: 8, children: [
          /* @__PURE__ */ l(P, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ e(
              n,
              {
                component: "img",
                src: r.mode === "light" ? "/assets/images/isotipo-negro.png" : "/assets/images/isotipo-crema.png",
                alt: "AI4U Logo",
                sx: {
                  height: 50,
                  width: "auto",
                  mb: 4
                }
              }
            ),
            /* @__PURE__ */ e(y, { variant: "body2", sx: { color: "inherit", opacity: 0.8 }, children: "Inteligencia para tu negocio." })
          ] }),
          /* @__PURE__ */ l(P, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ e(y, { sx: { ...z.label.main, mb: 3 }, children: "enlacesRapidos" }),
            /* @__PURE__ */ e(n, { component: "nav", "aria-label": "Enlaces rápidos", children: /* @__PURE__ */ e(n, { component: "ul", sx: { p: 0, m: 0, listStyle: "none" }, children: o.map((i) => /* @__PURE__ */ e(n, { component: "li", sx: { mb: 2 }, children: /* @__PURE__ */ e(
              n,
              {
                component: ce,
                to: i.path,
                onClick: () => Fe(),
                sx: {
                  color: "inherit",
                  opacity: 0.7,
                  textDecoration: "none",
                  cursor: "pointer",
                  display: "block",
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1 }
                },
                children: i.name
              }
            ) }, i.name)) }) })
          ] }),
          /* @__PURE__ */ l(P, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ e(y, { sx: { ...z.label.main, mb: 3 }, children: "contactoDirecto" }),
            /* @__PURE__ */ l(W, { spacing: 2.5, children: [
              /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ e(xr, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ e(y, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "hola@ai4u.com.co" })
              ] }),
              /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ e(yr, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ e(y, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "+57 321 817 5744" })
              ] }),
              /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ e(fr, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ e(y, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "Medellín, Colombia" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e(ve, { sx: { my: 6, borderColor: r.contrast.divider, opacity: 0.1 } }),
        /* @__PURE__ */ l(n, { sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          gap: 4
        }, children: [
          /* @__PURE__ */ l(W, { spacing: 1, sx: { alignItems: { xs: "center", md: "flex-start" } }, children: [
            /* @__PURE__ */ e(A, { sx: { color: "inherit", opacity: 0.6 }, children: `© ${t} AI4U. todosLosDerechosReservados.` }),
            /* @__PURE__ */ l(n, { sx: { display: "flex", gap: 2, alignItems: "center" }, children: [
              /* @__PURE__ */ l(
                y,
                {
                  sx: {
                    ...z.ui.code,
                    color: "inherit",
                    opacity: 0.5,
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em"
                  },
                  children: [
                    "REV_2.1 // ",
                    (/* @__PURE__ */ new Date()).getTime().toString(2).slice(-16)
                  ]
                }
              ),
              /* @__PURE__ */ l(
                y,
                {
                  sx: {
                    ...z.ui.code,
                    color: "inherit",
                    opacity: 0.5,
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    fontWeight: 400
                  },
                  children: [
                    "architectureBy ",
                    /* @__PURE__ */ e(n, { component: "span", sx: { fontWeight: 400 }, children: "mariano | 마리아노" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e(W, { direction: "row", spacing: 2, children: a.map((i, s) => /* @__PURE__ */ e(
            U,
            {
              component: "a",
              href: i.url,
              target: "_blank",
              rel: "noopener noreferrer",
              sx: {
                color: "inherit",
                opacity: 0.6,
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-2px)"
                },
                transition: "all 0.2s ease-in-out"
              },
              children: i.icon
            },
            s
          )) })
        ] })
      ] })
    }
  );
}, ra = ({
  customTitle: t = "Tu tiempo es oro",
  customSubtitle: r = "IA que potencia tu productividad.",
  primaryButtonText: a = "Recupera tu tiempo",
  secondaryButtonText: o = "Calcula tu ROI",
  sx: i
}) => {
  const s = M(), p = I();
  ge(s.breakpoints.down("md"));
  const [c, d] = v(0), h = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ], m = "IA con enfoque humano";
  return $(() => {
    const u = setInterval(() => {
      d((x) => x === 2 ? 0 : x + 1);
    }, 5e3);
    return () => clearInterval(u);
  }, []), /* @__PURE__ */ l(
    n,
    {
      sx: {
        position: "relative",
        minHeight: { xs: "auto", md: "100vh" },
        maxHeight: { xs: "100vh", md: "none" },
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: p.contrast.background,
        py: { xs: 4, sm: 6, md: 12 },
        ...i
      },
      children: [
        /* @__PURE__ */ e(
          n,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundColor: _(p.contrast.background, 0.6),
                zIndex: 1
              }
            },
            children: h.map((u, x) => /* @__PURE__ */ e(n, { sx: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ e(
              Ne,
              {
                src: u,
                alt: `Background ${x + 1}`,
                priority: x === 0,
                sx: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: x === c ? 0.5 : 0,
                  transition: "opacity 1.5s ease-in-out, transform 10s ease-out",
                  filter: "grayscale(100%) contrast(1.2)",
                  transform: x === c ? "scale(1.1)" : "scale(1)"
                }
              }
            ) }, x))
          }
        ),
        /* @__PURE__ */ e(n, { sx: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          overflow: "hidden",
          pointerEvents: "none",
          fontFamily: "monospace",
          fontSize: "10px",
          lineHeight: 1,
          wordBreak: "break-all",
          userSelect: "none",
          zIndex: 1
        }, children: Array.from({ length: 40 }).map((u, x) => /* @__PURE__ */ e(n, { children: Math.random().toString(2).slice(2) }, x)) }),
        /* @__PURE__ */ l(n, { sx: { position: "absolute", bottom: 20, right: 40, textAlign: "right", opacity: 0.3, zIndex: 6 }, children: [
          /* @__PURE__ */ e(Y, { sx: { fontSize: "0.6rem" }, children: "COORD: 6.2442° N, 75.5812° W" }),
          /* @__PURE__ */ l(Y, { sx: { fontSize: "0.6rem" }, children: [
            "SYS_LOAD: ",
            (Math.random() * 100).toFixed(2),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e(
          K,
          {
            maxWidth: "xl",
            sx: {
              position: "relative",
              zIndex: 5,
              px: { xs: 2, sm: 3, md: 10, lg: 15 },
              display: "flex",
              justifyContent: "flex-start"
            },
            children: /* @__PURE__ */ l(
              W,
              {
                direction: "column",
                spacing: { xs: 2, sm: 3, md: 4 },
                sx: { width: "100%", maxWidth: "900px", textAlign: "left", alignItems: "flex-start" },
                children: [
                  /* @__PURE__ */ l(n, { sx: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, children: [
                    /* @__PURE__ */ e(
                      n,
                      {
                        sx: {
                          border: `1px solid ${p.contrast.text.primary}`,
                          color: p.contrast.text.primary,
                          px: 2,
                          py: 0.5,
                          mb: 4,
                          ...z.ui.code,
                          fontSize: "0.9rem",
                          letterSpacing: "0.1em"
                        },
                        children: "strategySystemV2.0"
                      }
                    ),
                    /* @__PURE__ */ e(
                      jr,
                      {
                        sx: {
                          color: p.contrast.text.primary,
                          mb: { xs: 1, sm: 1.5, md: 2 },
                          maxWidth: "850px",
                          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "6rem", lg: "8rem" },
                          lineHeight: 0.9,
                          letterSpacing: "-0.04em",
                          textAlign: "left",
                          fontWeight: 400
                        },
                        children: t
                      }
                    ),
                    /* @__PURE__ */ e(
                      Pe,
                      {
                        sx: {
                          color: p.contrast.text.primary,
                          maxWidth: "600px",
                          mb: { xs: 4, sm: 5, md: 6 },
                          opacity: 0.9,
                          fontWeight: 300,
                          fontSize: { xs: "1rem", sm: "1.2rem", md: "2rem" },
                          lineHeight: 1.1,
                          textAlign: "left",
                          borderLeft: `4px solid ${p.contrast.text.primary}`,
                          pl: 3
                        },
                        children: r
                      }
                    )
                  ] }),
                  /* @__PURE__ */ l(
                    W,
                    {
                      direction: { xs: "column", md: "row" },
                      spacing: { xs: 3, md: 4 },
                      sx: { alignItems: "flex-start" },
                      children: [
                        /* @__PURE__ */ e(
                          He,
                          {
                            variant: "primary",
                            text: "Recuperar tiempo",
                            size: "large",
                            showIcon: !1,
                            sx: {
                              height: { xs: "55px", md: "90px" },
                              px: { xs: 4, md: 8 },
                              fontSize: { xs: "0.9rem", md: "1.5rem" },
                              fontWeight: 400,
                              borderRadius: 0,
                              bgcolor: p.contrast.text.primary,
                              color: p.contrast.background,
                              border: "none",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: p.contrast.text.primary,
                                opacity: 0.9,
                                transform: "scale(1.02)"
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ e(n, { sx: {
                          pt: { xs: 1, md: 2 },
                          position: "relative"
                        }, children: /* @__PURE__ */ l(
                          L,
                          {
                            sx: {
                              color: p.contrast.text.primary,
                              fontWeight: 400,
                              fontSize: { xs: "0.8rem", md: "1.2rem" },
                              letterSpacing: "0.1em",
                              textTransform: "none",
                              lineHeight: 1.2,
                              textAlign: "left",
                              opacity: 0.6
                            },
                            children: [
                              "// ",
                              m.toLowerCase().replace(/\s+/g, "")
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}, oa = ({
  data: t,
  date: r,
  time: a,
  variant: o = "elevated",
  onRefresh: i = void 0
}) => {
  const s = I(), p = () => {
    switch (o) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${s.contrast.divider}`,
            color: s.contrast.text.primary
          },
          surface: {
            background: s.contrast.surface,
            border: `1px solid ${s.contrast.divider}`
          }
        };
      case "elevated":
        return {
          card: {
            background: s.contrast.surface,
            border: "none",
            color: s.contrast.text.primary
          },
          surface: {
            background: s.contrast.background,
            border: `1px solid ${s.contrast.divider}`
          }
        };
      default:
        return {
          card: {
            background: s.contrast.surface,
            border: `1px solid ${s.contrast.divider}`,
            color: s.contrast.text.primary
          },
          surface: {
            background: s.contrast.background,
            border: `1px solid ${s.contrast.divider}`
          }
        };
    }
  }, c = (h) => {
    switch (h) {
      case "excellent":
        return s.palette.success;
      case "good":
        return s.palette.accent;
      case "fair":
        return "#D97706";
      case "poor":
        return "#DC2626";
      default:
        return s.palette.accent;
    }
  }, d = p();
  return /* @__PURE__ */ e(
    ze,
    {
      variant: o,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...d.card
      },
      children: /* @__PURE__ */ l(ue, { sx: { p: 3 }, children: [
        /* @__PURE__ */ l(n, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ e(n, { sx: {
              width: 48,
              height: 48,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: d.surface.background,
              border: d.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ e(ar, { sx: {
              color: s.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ l(n, { children: [
              /* @__PURE__ */ e(A, { sx: {
                color: s.helpers.text.secondary,
                mb: 0.5
              }, children: r }),
              /* @__PURE__ */ e(fe, { sx: {
                color: s.helpers.text.primary,
                fontWeight: 400
              }, children: a })
            ] })
          ] }),
          i && /* @__PURE__ */ e(
            U,
            {
              size: "small",
              onClick: i,
              sx: {
                color: s.helpers.text.secondary,
                "&:hover": {
                  background: s.helpers.state.hover,
                  color: s.palette.accent
                }
              },
              children: /* @__PURE__ */ e(dt, {})
            }
          )
        ] }),
        t.quality && /* @__PURE__ */ e(n, { sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          background: d.surface.background,
          border: d.surface.border,
          backdropFilter: "blur(10px)"
        }, children: /* @__PURE__ */ l(n, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ e(A, { sx: {
            color: s.helpers.text.secondary,
            textTransform: "none",
            letterSpacing: 0.5
          }, children: "Calidad del Sueño" }),
          /* @__PURE__ */ e(
            oe,
            {
              label: t.quality.toUpperCase(),
              size: "small",
              sx: {
                backgroundColor: c(t.quality) + "20",
                color: c(t.quality),
                fontWeight: 400,
                fontSize: "0.75rem",
                height: 24,
                "& .MuiChip-label": {
                  px: 1.5
                }
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ l(n, { sx: {
          mb: 3,
          p: 3,
          borderRadius: 3,
          background: d.surface.background,
          border: d.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ l(n, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2
          }, children: [
            /* @__PURE__ */ e(N, { sx: {
              color: s.helpers.text.primary,
              fontWeight: 400
            }, children: "Duración del Sueño" }),
            /* @__PURE__ */ e(
              oe,
              {
                label: `${t.totalHours}H ${t.totalMinutes}M`,
                sx: {
                  backgroundColor: s.palette.accent,
                  color: s.palette.white,
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  height: 32,
                  "& .MuiChip-label": {
                    px: 2
                  }
                }
              }
            )
          ] }),
          /* @__PURE__ */ l(n, { sx: {
            height: 40,
            borderRadius: 2,
            background: s.palette.accent,
            position: "relative",
            overflow: "hidden",
            mb: 2
          }, children: [
            /* @__PURE__ */ e(n, { sx: {
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2
            }, children: Array.from({ length: 20 }, (h, m) => /* @__PURE__ */ e(n, { sx: {
              width: 2,
              height: 8,
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            } }, m)) }),
            /* @__PURE__ */ e(n, { sx: {
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              transform: "translateY(-50%)"
            } }),
            /* @__PURE__ */ e(A, { sx: {
              position: "absolute",
              top: 4,
              left: 8,
              fontWeight: 400,
              color: s.palette.white
            }, children: t.remStart }),
            /* @__PURE__ */ e(A, { sx: {
              position: "absolute",
              top: 4,
              right: 8,
              fontWeight: 400,
              color: s.palette.white
            }, children: t.remEnd }),
            /* @__PURE__ */ e(A, { sx: {
              position: "absolute",
              bottom: 4,
              left: 8,
              color: s.palette.white
            }, children: "REM" }),
            /* @__PURE__ */ e(A, { sx: {
              position: "absolute",
              bottom: 4,
              right: 8,
              color: s.palette.white
            }, children: "REM" })
          ] })
        ] }),
        /* @__PURE__ */ l(n, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderRadius: 2,
          background: d.surface.background,
          border: d.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ e(A, { sx: {
              color: s.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Temperatura:" }),
            /* @__PURE__ */ l(N, { sx: {
              color: s.helpers.text.primary,
              fontWeight: 400
            }, children: [
              t.temperature,
              "°C"
            ] })
          ] }),
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            t.hasWifi && /* @__PURE__ */ e(n, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: s.palette.accent + "20",
              color: s.palette.accent
            }, children: /* @__PURE__ */ e(ir, { sx: { fontSize: 16 } }) }),
            t.hasBluetooth && /* @__PURE__ */ e(n, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: s.palette.success + "20",
              color: s.palette.success
            }, children: /* @__PURE__ */ e(sr, { sx: { fontSize: 16 } }) })
          ] })
        ] })
      ] })
    }
  );
}, na = ({
  data: t,
  variant: r = "elevated",
  showLocationIcon: a = !1,
  onRefresh: o = void 0
}) => {
  const i = I(), s = () => {
    switch (r) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${i.contrast.divider}`,
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.surface,
            border: `1px solid ${i.contrast.divider}`
          }
        };
      case "elevated":
        return {
          card: {
            background: i.contrast.surface,
            border: "none",
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.background,
            border: `1px solid ${i.contrast.divider}`
          }
        };
      default:
        return {
          card: {
            background: i.contrast.surface,
            border: `1px solid ${i.contrast.divider}`,
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.background,
            border: `1px solid ${i.contrast.divider}`
          }
        };
    }
  }, p = (d) => {
    const h = d.toLowerCase();
    return h.includes("clear") || h.includes("sunny") ? /* @__PURE__ */ e(Ye, {}) : h.includes("cloud") || h.includes("overcast") ? /* @__PURE__ */ e(cr, {}) : h.includes("rain") || h.includes("precipitation") ? /* @__PURE__ */ e(dr, {}) : /* @__PURE__ */ e(Ye, {});
  }, c = s();
  return /* @__PURE__ */ e(
    ze,
    {
      variant: r,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...c.card
      },
      children: /* @__PURE__ */ l(ue, { sx: { p: 3 }, children: [
        /* @__PURE__ */ l(n, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            a && /* @__PURE__ */ e(lr, { sx: {
              fontSize: 20,
              color: i.helpers.text.primary
            } }),
            /* @__PURE__ */ e(N, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: t.location })
          ] }),
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ e(A, { sx: {
              color: i.helpers.text.secondary
            }, children: "Actualizado ahora" }),
            o && /* @__PURE__ */ e(
              U,
              {
                size: "small",
                onClick: o,
                sx: {
                  color: i.helpers.text.secondary,
                  "&:hover": {
                    background: i.helpers.state.hover,
                    color: i.palette.accent
                  }
                },
                children: /* @__PURE__ */ e(dt, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l(n, { sx: {
          textAlign: "center",
          mb: 4,
          p: 3,
          borderRadius: 3,
          ...c.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ e(n, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2
          }, children: p(t.condition) }),
          /* @__PURE__ */ l(Pe, { sx: {
            fontSize: "3.5rem",
            fontWeight: 400,
            color: i.helpers.text.primary,
            mb: 1,
            lineHeight: 1
          }, children: [
            t.temperature,
            "°"
          ] }),
          /* @__PURE__ */ e(N, { sx: {
            color: i.helpers.text.primary,
            mb: 1,
            fontWeight: 400
          }, children: t.condition }),
          /* @__PURE__ */ l(L, { sx: {
            color: i.helpers.text.secondary,
            fontWeight: 400
          }, children: [
            "Máx ",
            t.high,
            "° — Mín ",
            t.low,
            "°"
          ] })
        ] }),
        /* @__PURE__ */ l(n, { sx: {
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          p: 2.5,
          borderRadius: 3,
          ...c.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ l(n, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ e(A, { sx: {
              color: i.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Viento" }),
            /* @__PURE__ */ l(N, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: [
              t.wind,
              " km/h"
            ] })
          ] }),
          /* @__PURE__ */ l(n, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ e(A, { sx: {
              color: i.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Lluvia" }),
            /* @__PURE__ */ l(N, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: [
              t.precipitation,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ l(n, { sx: { pt: 2 }, children: [
          /* @__PURE__ */ e(ve, { sx: {
            mb: 3,
            borderColor: i.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ e(N, { sx: {
            fontWeight: 400,
            mb: 3,
            color: i.helpers.text.primary
          }, children: "Pronóstico por Hora" }),
          /* @__PURE__ */ e(n, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: t.hourlyForecast.map((d, h) => /* @__PURE__ */ l(n, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderRadius: 2,
            background: c.surface.background,
            border: c.surface.border,
            backdropFilter: "blur(10px)",
            transition: "all 0.2s ease",
            "&:hover": {
              background: i.helpers.state.hover,
              transform: "translateX(4px)"
            }
          }, children: [
            /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              p(d.condition),
              /* @__PURE__ */ e(A, { sx: {
                color: i.helpers.text.secondary,
                minWidth: "60px",
                fontWeight: 400
              }, children: d.time })
            ] }),
            /* @__PURE__ */ e(L, { sx: {
              color: i.helpers.text.secondary,
              flex: 1,
              textAlign: "center",
              fontWeight: 400
            }, children: d.condition }),
            /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              /* @__PURE__ */ l(A, { sx: {
                color: i.helpers.text.secondary,
                minWidth: "40px",
                textAlign: "center"
              }, children: [
                d.precipitation,
                "%"
              ] }),
              /* @__PURE__ */ l(N, { sx: {
                fontWeight: 400,
                color: i.helpers.text.primary,
                minWidth: "50px",
                textAlign: "right"
              }, children: [
                d.temperature,
                "°"
              ] })
            ] })
          ] }, h)) })
        ] })
      ] })
    }
  );
}, aa = ({
  searchValue: t,
  onSearchChange: r,
  selectedTab: a,
  onTabChange: o,
  onClearFilters: i,
  filteredCount: s,
  categoryTabs: p
}) => {
  const c = I();
  return /* @__PURE__ */ l(n, { sx: {
    mb: 4,
    p: 4,
    background: c.contrast.background,
    border: `4px solid ${c.contrast.text.primary}`,
    borderRadius: 0,
    transition: "all 0.2s ease",
    "&:hover": {
      boxShadow: `8px 8px 0px ${c.contrast.text.primary}`,
      transform: "translate(-4px, -4px)"
    }
  }, children: [
    /* @__PURE__ */ l(
      W,
      {
        direction: "row",
        sx: { justifyContent: "space-between", alignItems: "center", mb: 3 },
        children: [
          /* @__PURE__ */ l(n, { sx: {
            fontSize: "1.25rem",
            fontWeight: 400,
            textTransform: "none",
            letterSpacing: "0.05em",
            color: c.contrast.text.primary
          }, children: [
            s,
            " Servicios"
          ] }),
          t && /* @__PURE__ */ e(
            Ce,
            {
              variant: "text",
              size: "small",
              onClick: i,
              sx: {
                color: c.contrast.text.primary,
                fontWeight: 400,
                textTransform: "none",
                textDecoration: "underline",
                "&:hover": {
                  background: "transparent",
                  opacity: 0.7
                }
              },
              children: "Limpiar"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(n, { sx: { mb: 3 }, children: /* @__PURE__ */ e(
      it,
      {
        fullWidth: !0,
        placeholder: "Buscar servicios...",
        value: t,
        onChange: r,
        sx: {
          "& .MuiOutlinedInput-root": {
            background: c.contrast.background,
            borderRadius: 0,
            border: `3px solid ${c.contrast.text.primary}`,
            transition: "all 0.1s ease",
            "&:hover": {
              borderColor: c.contrast.text.primary
            },
            "&.Mui-focused": {
              borderColor: c.contrast.text.primary,
              boxShadow: `4px 4px 0px ${c.contrast.text.primary}`
            }
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "1rem",
            fontWeight: 400,
            padding: "12px 16px",
            color: c.contrast.text.primary,
            textTransform: "none",
            "&::placeholder": {
              color: c.contrast.text.primary,
              opacity: 0.5
            }
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
          }
        }
      }
    ) }),
    /* @__PURE__ */ e(ve, { sx: { mb: 3, borderColor: c.contrast.text.primary, borderWidth: "2px" } }),
    /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e(
      Ft,
      {
        value: a,
        onChange: o,
        variant: "scrollable",
        scrollButtons: "auto",
        sx: {
          minHeight: 48,
          "& .MuiTab-root": {
            minHeight: 48,
            fontSize: "0.9rem",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: "9999px",
            mx: 0.5,
            transition: "all 0.1s ease",
            color: c.contrast.text.primary,
            background: "transparent",
            border: "2px solid transparent",
            "&:hover": {
              background: "rgba(0,0,0,0.05)",
              borderColor: c.contrast.text.primary
            },
            "&.Mui-selected": {
              background: c.contrast.text.primary,
              color: c.contrast.background,
              borderColor: c.contrast.text.primary
            }
          },
          "& .MuiTabs-indicator": {
            display: "none"
          }
        },
        children: p.map((d, h) => /* @__PURE__ */ e(
          $t,
          {
            label: d.label
          },
          h
        ))
      }
    ) })
  ] });
}, ia = ({ stats: t, getCategories: r }) => {
  const a = M(), o = [
    {
      value: t.total,
      label: "Servicios",
      color: a.palette.primary.main,
      description: "Total disponibles"
    },
    {
      value: t.active,
      label: "Activos",
      color: a.palette.secondary.main,
      description: "Listos para implementar"
    },
    {
      value: r().length,
      label: "Categorías",
      color: a.palette.text.primary,
      description: "Especialidades técnicas"
    }
  ];
  return /* @__PURE__ */ e(n, { sx: { mb: 8 }, children: /* @__PURE__ */ e(P, { container: !0, spacing: 3, sx: { justifyContent: "center" }, children: o.map((i, s) => /* @__PURE__ */ e(P, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ l(n, { sx: {
    p: 4,
    textAlign: "center",
    background: a.palette.background.paper,
    border: `1px solid ${a.palette.divider}`,
    borderRadius: 2,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: a.shadows[4],
      borderColor: a.palette.primary.main
    }
  }, children: [
    /* @__PURE__ */ e(fe, { sx: {
      color: i.color,
      mb: 1,
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1
    }, children: i.value }),
    /* @__PURE__ */ e(L, { sx: {
      color: "text.primary",
      fontSize: "0.95rem",
      fontWeight: 400,
      mb: 0.5,
      textTransform: "none",
      letterSpacing: "0.05em"
    }, children: i.label }),
    /* @__PURE__ */ e(L, { sx: {
      color: "text.secondary",
      fontSize: "0.8rem",
      lineHeight: 1.4
    }, children: i.description })
  ] }) }, s)) }) });
}, fo = O(me)(({ theme: t }) => ({
  backgroundColor: "#1a1a1a",
  color: "#f5f5f5",
  borderRadius: t.spacing(2),
  padding: t.spacing(2),
  overflow: "auto",
  "&:hover": {
    backgroundColor: "#3a3a3a",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
  }
})), bo = ({ code: t, language: r = "tsx", className: a = "" }) => {
  M();
  const o = I();
  return /* @__PURE__ */ l(fo, { className: a, children: [
    /* @__PURE__ */ l(n, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 2
    }, children: [
      /* @__PURE__ */ e(A, { sx: {
        color: o.helpers.text.mediumContrast,
        textTransform: "none",
        letterSpacing: "0.05em"
      }, children: r }),
      /* @__PURE__ */ e(
        U,
        {
          size: "small",
          onClick: () => navigator.clipboard.writeText(t),
          sx: { color: o.helpers.text.mediumContrast },
          children: /* @__PURE__ */ e(pr, { fontSize: "small" })
        }
      )
    ] }),
    /* @__PURE__ */ e(n, { component: "pre", sx: {
      fontSize: "0.875rem",
      color: o.helpers.text.highContrast,
      fontFamily: "monospace",
      margin: 0,
      whiteSpace: "pre-wrap"
    }, children: /* @__PURE__ */ e(n, { component: "code", children: t }) })
  ] });
}, yo = ({ props: t }) => {
  const r = M();
  return !t || t.length === 0 ? null : /* @__PURE__ */ e(Wt, { component: me, sx: { borderRadius: 2 }, children: /* @__PURE__ */ l(Mt, { children: [
    /* @__PURE__ */ e(Dt, { children: /* @__PURE__ */ l(Ve, { sx: { backgroundColor: r.palette.grey[50] }, children: [
      /* @__PURE__ */ e(V, { sx: { fontWeight: 400 }, children: "Propiedad" }),
      /* @__PURE__ */ e(V, { sx: { fontWeight: 400 }, children: "Tipo" }),
      /* @__PURE__ */ e(V, { sx: { fontWeight: 400 }, children: "Requerido" }),
      /* @__PURE__ */ e(V, { sx: { fontWeight: 400 }, children: "Descripción" }),
      /* @__PURE__ */ e(V, { sx: { fontWeight: 400 }, children: "Default" })
    ] }) }),
    /* @__PURE__ */ e(_t, { children: t.map((a, o) => /* @__PURE__ */ l(Ve, { sx: {
      "&:hover": { backgroundColor: r.palette.action.hover }
    }, children: [
      /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(Y, { children: a.name }) }),
      /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(Y, { children: a.type }) }),
      /* @__PURE__ */ e(V, { children: /* @__PURE__ */ e(
        oe,
        {
          label: a.required ? "Sí" : "No",
          size: "small",
          color: a.required ? "error" : "success",
          variant: "outlined"
        }
      ) }),
      /* @__PURE__ */ e(V, { sx: {
        fontSize: "0.875rem",
        color: r.palette.text.secondary
      }, children: a.description }),
      /* @__PURE__ */ e(V, { children: a.defaultValue ? /* @__PURE__ */ e(Y, { children: a.defaultValue }) : /* @__PURE__ */ e(n, { sx: { color: r.palette.text.disabled }, children: "-" }) })
    ] }, o)) })
  ] }) });
}, sa = ({
  title: t,
  description: r,
  children: a,
  codeExample: o,
  props: i,
  className: s = ""
}) => {
  const p = M();
  return /* @__PURE__ */ l(n, { sx: { display: "flex", flexDirection: "column", gap: 4 }, className: s, children: [
    /* @__PURE__ */ l(n, { sx: {
      borderBottom: `1px solid ${p.palette.divider}`,
      pb: 3
    }, children: [
      /* @__PURE__ */ e(fe, { sx: { mb: 1 }, children: t }),
      /* @__PURE__ */ e(L, { sx: { color: p.palette.text.secondary }, children: r })
    ] }),
    /* @__PURE__ */ l(me, { sx: {
      position: "relative",
      p: 4,
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: 4,
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ e(n, { sx: { mb: 2 }, children: /* @__PURE__ */ e(N, { sx: { color: p.palette.text.primary }, children: "Preview" }) }),
      /* @__PURE__ */ e(n, { sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        position: "relative",
        zIndex: 1
      }, children: a })
    ] }),
    o && /* @__PURE__ */ l(n, { children: [
      /* @__PURE__ */ e(N, { sx: { mb: 2 }, children: "Código de Ejemplo" }),
      /* @__PURE__ */ e(bo, { code: o })
    ] }),
    i && i.length > 0 && /* @__PURE__ */ l(n, { children: [
      /* @__PURE__ */ e(N, { sx: { mb: 2 }, children: "Propiedades" }),
      /* @__PURE__ */ e(yo, { props: i })
    ] })
  ] });
}, wo = O(_e)(({ theme: t }) => ({
  backgroundColor: t.palette.grey[100],
  borderRadius: t.spacing(2),
  maxWidth: 1024,
  margin: "0 auto",
  boxShadow: t.shadows[3]
})), et = O(Q)(({ theme: t, isSelected: r }) => ({
  minWidth: 32,
  width: 32,
  height: 32,
  padding: 0,
  borderRadius: t.spacing(1),
  backgroundColor: r ? t.palette.text.primary : t.palette.background.paper,
  color: r ? t.palette.background.paper : t.palette.text.secondary,
  border: `1px solid ${t.palette.divider}`,
  "&:hover": {
    backgroundColor: r ? t.palette.text.primary : t.palette.action.hover
  }
})), ko = O(Q)(({ theme: t, isSelected: r }) => ({
  width: "100%",
  justifyContent: "flex-start",
  padding: t.spacing(1, 1.5),
  borderRadius: t.spacing(1),
  backgroundColor: r ? t.palette.text.primary : t.palette.background.paper,
  color: r ? t.palette.background.paper : t.palette.text.secondary,
  textTransform: "none",
  fontSize: "0.875rem",
  "&:hover": {
    backgroundColor: r ? t.palette.text.primary : t.palette.action.hover
  }
})), So = O(n)(({ theme: t }) => ({
  backgroundColor: t.palette.background.paper,
  borderRadius: t.spacing(2),
  padding: t.spacing(3),
  position: "relative",
  minHeight: 320
})), la = ({
  rotationAngle: t = 35,
  brightness: r = 30,
  shadowDensity: a = 25
}) => {
  const o = M(), [i, s] = v("rotation"), [p, c] = v("cube"), [d, h] = v("spot"), m = [
    { id: "cube", name: "Cube", icon: "□", isSelected: !0 },
    { id: "sphere", name: "Sphere", icon: "○" },
    { id: "cone", name: "Cone", icon: "△" },
    { id: "cylinder", name: "Cylinder", icon: "●" },
    { id: "more", name: "More", icon: "⋯" }
  ], u = [
    { id: "render", name: "Render", icon: "◉" },
    { id: "rotation", name: "Rotation", icon: "⟲", isSelected: !0 },
    { id: "texture", name: "Texture", icon: "◐" },
    { id: "polygons", name: "Polygons", icon: "◢" },
    { id: "points", name: "Points", icon: "●" },
    { id: "intrude", name: "Intrude", icon: "↓" }
  ], x = [
    { id: "spot", name: "Spot", icon: "⊙", isSelected: !0 },
    { id: "area", name: "Area", icon: "◼" },
    { id: "target", name: "Target", icon: "◎" },
    { id: "sun", name: "Sun", icon: "◉" }
  ];
  return /* @__PURE__ */ e(wo, { children: /* @__PURE__ */ l(ue, { sx: { p: 3 }, children: [
    /* @__PURE__ */ l(n, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3
    }, children: [
      /* @__PURE__ */ e(y, { variant: "body2", sx: {
        color: o.palette.text.secondary
      }, children: "Sat—19 January" }),
      /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ e(n, { sx: {
          width: 12,
          height: 12,
          backgroundColor: o.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ e(n, { sx: {
          width: 12,
          height: 12,
          backgroundColor: o.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ e(n, { sx: {
          width: 12,
          height: 12,
          backgroundColor: o.palette.error.main,
          borderRadius: "50%"
        } })
      ] }),
      /* @__PURE__ */ e(y, { variant: "body2", sx: {
        color: o.palette.text.secondary
      }, children: "2019" })
    ] }),
    /* @__PURE__ */ l(P, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ e(P, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ l(n, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ l(n, { children: [
          /* @__PURE__ */ e(y, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: o.palette.text.primary,
            mb: 1.5
          }, children: "Forms" }),
          /* @__PURE__ */ e(n, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: m.map((f) => /* @__PURE__ */ e(
            et,
            {
              isSelected: p === f.id,
              onClick: () => c(f.id),
              children: f.icon
            },
            f.id
          )) })
        ] }),
        /* @__PURE__ */ l(n, { children: [
          /* @__PURE__ */ e(y, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: o.palette.text.primary,
            mb: 1.5
          }, children: "Tools" }),
          /* @__PURE__ */ e(n, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: u.map((f) => /* @__PURE__ */ e(
            ko,
            {
              isSelected: i === f.id,
              onClick: () => s(f.id),
              startIcon: /* @__PURE__ */ e("span", { children: f.icon }),
              children: f.name
            },
            f.id
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ e(P, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ l(So, { children: [
        /* @__PURE__ */ e(n, { sx: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
          borderRadius: 2,
          overflow: "hidden"
        }, children: /* @__PURE__ */ e(n, { sx: {
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          height: "100%"
        }, children: Array.from({ length: 96 }, (f, b) => /* @__PURE__ */ e(n, { sx: {
          border: `1px solid ${o.palette.grey[300]}`
        } }, b)) }) }),
        /* @__PURE__ */ l(n, { sx: {
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 256
        }, children: [
          /* @__PURE__ */ e(n, { sx: {
            width: 96,
            height: 96,
            border: `2px solid ${o.palette.text.primary}`,
            position: "relative",
            transform: "rotate(45deg)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderLeft: `1px solid ${o.palette.grey[600]}`
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderTop: `1px solid ${o.palette.grey[600]}`
            }
          } }),
          /* @__PURE__ */ l(n, { sx: {
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ e(n, { sx: {
              width: 128,
              height: 32,
              border: `2px solid ${o.palette.grey[400]}`,
              borderRadius: "16px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }, children: /* @__PURE__ */ e(n, { sx: {
              width: 8,
              height: 8,
              backgroundColor: o.palette.grey[600],
              borderRadius: "50%"
            } }) }),
            /* @__PURE__ */ l(n, { sx: { mt: 1, textAlign: "center" }, children: [
              /* @__PURE__ */ e(y, { variant: "body2", sx: {
                color: o.palette.text.secondary
              }, children: "Rotation" }),
              /* @__PURE__ */ l(y, { variant: "h4", sx: {
                fontWeight: 400,
                color: o.palette.text.primary
              }, children: [
                t,
                "°"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ l(n, { sx: {
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.75rem"
          }, children: [
            /* @__PURE__ */ e(y, { variant: "caption", sx: { color: o.palette.error.main }, children: "X" }),
            /* @__PURE__ */ e(y, { variant: "caption", sx: { color: o.palette.success.main }, children: "Y" }),
            /* @__PURE__ */ e(y, { variant: "caption", sx: { color: o.palette.info.main }, children: "Z" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ e(P, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ l(n, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ l(n, { children: [
          /* @__PURE__ */ e(y, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: o.palette.text.primary,
            mb: 1.5
          }, children: "Lightning" }),
          /* @__PURE__ */ e(P, { container: !0, spacing: 1, children: x.map((f) => /* @__PURE__ */ e(P, { size: 6, children: /* @__PURE__ */ e(
            et,
            {
              isSelected: d === f.id,
              onClick: () => h(f.id),
              sx: { width: 48, height: 48 },
              children: f.icon
            }
          ) }, f.id)) })
        ] }),
        /* @__PURE__ */ l(n, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          /* @__PURE__ */ l(n, { children: [
            /* @__PURE__ */ l(n, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ e(y, { variant: "caption", sx: {
                color: o.palette.text.secondary
              }, children: "Brightness" }),
              /* @__PURE__ */ l(y, { variant: "caption", sx: {
                color: o.palette.text.secondary
              }, children: [
                r,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ e(n, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: o.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ e(n, { sx: {
              height: "100%",
              width: `${r}%`,
              backgroundColor: o.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] }),
          /* @__PURE__ */ l(n, { children: [
            /* @__PURE__ */ l(n, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ e(y, { variant: "caption", sx: {
                color: o.palette.text.secondary
              }, children: "Shadow Density" }),
              /* @__PURE__ */ l(y, { variant: "caption", sx: {
                color: o.palette.text.secondary
              }, children: [
                a,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ e(n, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: o.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ e(n, { sx: {
              height: "100%",
              width: `${a}%`,
              backgroundColor: o.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ l(n, { sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 3,
      pt: 2,
      borderTop: `1px solid ${o.palette.divider}`
    }, children: [
      /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ e(n, { sx: {
          width: 16,
          height: 16,
          border: `1px solid ${o.palette.grey[400]}`,
          borderRadius: 1
        } }),
        /* @__PURE__ */ l(n, { sx: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ e(y, { variant: "caption", sx: {
            color: o.palette.text.secondary,
            fontSize: "0.75rem"
          }, children: "END IS UI" }),
          /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ e(y, { variant: "caption", sx: {
              color: o.palette.text.secondary,
              fontSize: "0.75rem"
            }, children: "UI" }),
            /* @__PURE__ */ e(n, { sx: {
              width: 4,
              height: 4,
              backgroundColor: o.palette.text.primary,
              borderRadius: "50%"
            } })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e(y, { variant: "caption", sx: {
        color: o.palette.text.secondary,
        fontSize: "0.75rem"
      }, children: "013" })
    ] })
  ] }) });
}, vo = O(Q, {
  shouldForwardProp: (t) => t !== "colors" && t !== "isScrolled"
})(({ theme: t, colors: r, isScrolled: a }) => ({
  marginX: t.spacing(0.5),
  color: r.contrast.text.primary,
  fontWeight: 400,
  textTransform: "none",
  fontSize: z.ui.caption.fontSize,
  transition: "all 0.3s ease-in-out",
  position: "relative",
  border: "none",
  padding: t.spacing(1, 1.5),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 8,
    left: "50%",
    width: 0,
    height: "2px",
    backgroundColor: r.contrast.text.primary,
    transition: "all 0.3s ease-in-out",
    transform: "translateX(-50%)"
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: r.contrast.text.primary,
    opacity: 0.8,
    border: "none",
    "&::after": {
      width: "60%"
    }
  }
})), Io = O(n)(({ theme: t }) => ({
  flexGrow: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  display: "none",
  [t.breakpoints.up("md")]: {
    display: "flex"
  }
})), Co = () => {
  const [t, r] = v(null), [a, o] = v(!1), i = I(), s = Le(), { mode: p, toggleColorMode: c } = Be();
  $(() => {
    const x = () => {
      o(window.scrollY > 20);
    };
    return window.addEventListener("scroll", x), () => window.removeEventListener("scroll", x);
  }, []);
  const d = [
    { name: "inicio", path: j.HOME },
    { name: "servicios", path: j.SERVICES },
    { name: "superAI", path: j.SUPER_AI },
    { name: "porqueAi4u", path: j.WHY_AI4U },
    { name: "portafolio", path: j.PORTFOLIO }
  ], h = (x) => {
    r(x.currentTarget);
  }, m = () => {
    r(null);
  }, u = (x) => {
    m(), s(x), Fe();
  };
  return /* @__PURE__ */ e(
    Ot,
    {
      position: "fixed",
      color: "transparent",
      elevation: 0,
      sx: {
        backgroundColor: a ? _(i.contrast.surface, 0.85) : "transparent",
        backdropFilter: a ? "blur(10px)" : "none",
        borderBottom: a ? `1px solid ${_(i.contrast.border, 0.1)}` : "none",
        transition: "all 0.3s ease-in-out",
        zIndex: (x) => x.zIndex.drawer + 1
      },
      children: /* @__PURE__ */ e(K, { maxWidth: "lg", children: /* @__PURE__ */ l(Lt, { disableGutters: !0, children: [
        /* @__PURE__ */ e(
          n,
          {
            component: ce,
            to: j.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 3,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              alignItems: "center"
            },
            children: /* @__PURE__ */ e(ne, { variant: "desktop", light: i.mode === "dark" })
          }
        ),
        /* @__PURE__ */ l(n, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
          /* @__PURE__ */ e(
            U,
            {
              size: "large",
              "aria-label": "Menu de navegación",
              "aria-controls": "menu-appbar",
              "aria-haspopup": "true",
              onClick: h,
              sx: {
                color: i.contrast.text.primary,
                transition: "color 0.3s ease-in-out",
                border: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: 0.7
                }
              },
              children: t ? /* @__PURE__ */ e(ct, {}) : /* @__PURE__ */ e(wr, {})
            }
          ),
          /* @__PURE__ */ l(
            nt,
            {
              id: "menu-appbar",
              anchorEl: t,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
              },
              keepMounted: !0,
              transformOrigin: {
                vertical: "top",
                horizontal: "left"
              },
              open: !!t,
              onClose: m,
              sx: {
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: i.contrast.surface,
                  border: `1px solid ${i.contrast.border}`,
                  boxShadow: pe.lg
                }
              },
              children: [
                d.map((x) => /* @__PURE__ */ e(
                  ye,
                  {
                    onClick: () => u(x.path),
                    component: ce,
                    to: x.path,
                    sx: {
                      color: i.contrast.text.primary,
                      "&:hover": {
                        backgroundColor: i.helpers.state.hover,
                        color: i.palette.black
                      }
                    },
                    children: /* @__PURE__ */ e(y, { sx: { ...z.label.main }, children: x.name })
                  },
                  x.name
                )),
                /* @__PURE__ */ e(
                  ye,
                  {
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      py: 2,
                      "&:hover": {
                        backgroundColor: "transparent"
                      }
                    },
                    children: /* @__PURE__ */ e(n, { sx: { width: "100%", maxWidth: (x) => x.spacing(25) }, children: /* @__PURE__ */ e(Qe, { light: i.mode === "dark" }) })
                  }
                ),
                /* @__PURE__ */ l(
                  ye,
                  {
                    onClick: c,
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      color: i.contrast.text.primary,
                      "&:hover": { backgroundColor: i.helpers.state.hover }
                    },
                    children: [
                      p === "light" ? /* @__PURE__ */ e(Ke, { fontSize: "small" }) : /* @__PURE__ */ e(Xe, { fontSize: "small" }),
                      /* @__PURE__ */ e(y, { children: p === "light" ? "Modo oscuro" : "Modo claro" })
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e(
          n,
          {
            component: ce,
            to: j.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ e(ne, { variant: "mobile", light: i.mode === "dark" })
          }
        ),
        /* @__PURE__ */ l(Io, { children: [
          d.map((x) => /* @__PURE__ */ e(
            vo,
            {
              colors: i,
              isScrolled: a,
              onClick: () => Fe(),
              component: ce,
              to: x.path,
              sx: { ...z.label.secondary, letterSpacing: "0.1em" },
              children: x.name
            },
            x.name
          )),
          /* @__PURE__ */ e(
            n,
            {
              sx: {
                ml: { xs: 0.5, md: 1 },
                display: "flex",
                alignItems: "center",
                flexShrink: 0
              },
              children: /* @__PURE__ */ e(Qe, { light: i.mode === "dark" })
            }
          ),
          /* @__PURE__ */ e(
            U,
            {
              onClick: c,
              size: "small",
              sx: {
                ml: 1,
                color: i.contrast.text.primary,
                border: "none",
                "&:hover": { backgroundColor: "transparent", opacity: 0.7 }
              },
              children: p === "light" ? /* @__PURE__ */ e(Ke, { fontSize: "small" }) : /* @__PURE__ */ e(Xe, { fontSize: "small" })
            }
          )
        ] })
      ] }) })
    }
  );
}, tt = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], zo = [
  "agentes.",
  "orquestación",
  "de agentes.",
  "empleados ia.",
  "automatizaciones.",
  "conexión con",
  "tus sistemas."
], ca = ({
  badge: t = "ai4u // siempre activo",
  lines: r = zo,
  primaryButtonText: a = "hablar con el equipo"
}) => {
  const o = I(), [i, s] = v(/* @__PURE__ */ new Set()), [p, c] = v(0), d = xe([]);
  $(() => {
    const x = setInterval(() => c((f) => (f + 1) % tt.length), 5e3);
    return () => clearInterval(x);
  }, []), $(() => {
    const x = [];
    return d.current.forEach((f, b) => {
      if (!f) return;
      const S = new IntersectionObserver(
        ([R]) => {
          R.isIntersecting && s((w) => new Set(w).add(b));
        },
        { threshold: 0.3 }
      );
      S.observe(f), x.push(S);
    }), () => x.forEach((f) => f.disconnect());
  }, [r.length]);
  const h = q((x, f) => {
    d.current[f] = x;
  }, []), m = i.size > 0 ? Math.max(...i) : -1, u = i.size / r.length * 100;
  return /* @__PURE__ */ l(n, { sx: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ l(n, { sx: { position: "absolute", inset: 0, height: "100%", zIndex: 0 }, children: [
      tt.map((x, f) => /* @__PURE__ */ e(n, { sx: { position: "absolute", inset: 0, height: "100%" }, children: /* @__PURE__ */ e(
        Ne,
        {
          src: x,
          alt: "",
          priority: f === 0,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: f === p ? 0.35 : 0,
            transition: "opacity 2s ease-in-out, transform 12s ease-out",
            filter: "grayscale(100%) contrast(1.1)",
            transform: f === p ? "scale(1.06)" : "scale(1)"
          }
        }
      ) }, f)),
      /* @__PURE__ */ e(n, { sx: {
        position: "absolute",
        inset: 0,
        height: "100%",
        backgroundColor: _(o.contrast.background, 0.55)
      } })
    ] }),
    /* @__PURE__ */ l(n, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      px: { xs: 3, md: 8, lg: 12 },
      pt: { xs: 10, md: 12 },
      pb: 0
    }, children: [
      /* @__PURE__ */ l(n, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: { xs: 10, md: 16 } }, children: [
        /* @__PURE__ */ e(n, { sx: {
          border: `1px solid ${o.contrast.text.primary}`,
          color: o.contrast.text.primary,
          px: 1.5,
          py: 0.4,
          fontFamily: "monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.08em",
          opacity: 0.65
        }, children: t }),
        /* @__PURE__ */ e(n, { sx: { textAlign: "right", opacity: 0.35 }, children: /* @__PURE__ */ e(Y, { sx: { fontSize: "0.65rem", display: "block" }, children: "6.2442° N, 75.5812° W" }) })
      ] }),
      /* @__PURE__ */ e(n, { sx: {
        fontFamily: "monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        opacity: 0.4,
        mb: { xs: 3, md: 4 }
      }, children: "// lo que hacemos" }),
      /* @__PURE__ */ e(n, { sx: { display: "flex", flexDirection: "column", gap: { xs: 0, md: 0 } }, children: r.map((x, f) => {
        const b = i.has(f), S = f === m, R = b ? S ? 1 : 0.55 : 0.12, w = S ? g.accentColors.orange : o.contrast.text.primary;
        return /* @__PURE__ */ e(
          n,
          {
            ref: (T) => h(T, f),
            component: "h1",
            sx: {
              m: 0,
              fontSize: "clamp(3.5rem, 13vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              fontWeight: 300,
              fontFamily: '"Red Hat Display", sans-serif',
              color: w,
              opacity: R,
              transition: "opacity 0.5s ease, color 0.5s ease"
            },
            children: x
          },
          f
        );
      }) }),
      /* @__PURE__ */ l(n, { sx: { mt: { xs: 10, md: 14 } }, children: [
        /* @__PURE__ */ e(n, { sx: { borderTop: `1px solid ${_(o.contrast.text.primary, 0.2)}`, mb: { xs: 4, md: 5 } } }),
        /* @__PURE__ */ e(n, { sx: { display: "flex", justifyContent: "flex-end", pb: { xs: 6, md: 8 } }, children: /* @__PURE__ */ e(
          He,
          {
            variant: "primary",
            text: a,
            size: "large",
            showIcon: !1,
            sx: {
              height: { xs: "48px", md: "52px" },
              px: { xs: 4, md: 6 },
              fontSize: { xs: "0.8rem", md: "0.85rem" },
              fontWeight: 400,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              borderRadius: 0,
              bgcolor: "transparent",
              color: o.contrast.text.primary,
              border: `1px solid ${o.contrast.text.primary}`,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: g.accentColors.orange,
                borderColor: g.accentColors.orange,
                color: "#fff"
              }
            }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ e(n, { sx: { position: "sticky", bottom: 0, zIndex: 6 }, children: /* @__PURE__ */ e(n, { sx: { height: "1px", bgcolor: _(o.contrast.text.primary, 0.1) }, children: /* @__PURE__ */ e(n, { sx: {
      height: "100%",
      bgcolor: g.accentColors.orange,
      width: `${u}%`,
      transition: "width 0.4s ease"
    } }) }) })
  ] });
}, rt = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], To = ["agentes", "entrenamiento", "automatizaciones"], da = ({
  badge: t = "ai4u.equipo // siempre activo",
  primaryButtonText: r = "hablar con el equipo"
}) => {
  const a = I(), [o, i] = v(0);
  return $(() => {
    const s = setInterval(
      () => i((p) => (p + 1) % rt.length),
      5e3
    );
    return () => clearInterval(s);
  }, []), /* @__PURE__ */ l(n, { sx: {
    position: "relative",
    height: "100vh",
    minHeight: "600px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }, children: [
    /* @__PURE__ */ l(n, { sx: { position: "absolute", inset: 0 }, children: [
      rt.map((s, p) => /* @__PURE__ */ e(n, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ e(
        Ne,
        {
          src: s,
          alt: "",
          priority: p === 0,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(100%) contrast(1.1)",
            opacity: p === o ? 0.38 : 0,
            transform: p === o ? "scale(1.06)" : "scale(1)",
            transition: "opacity 2s ease-in-out, transform 12s ease-out"
          }
        }
      ) }, p)),
      /* @__PURE__ */ e(n, { sx: {
        position: "absolute",
        inset: 0,
        background: `linear-gradient(
            to bottom,
            ${_(a.contrast.background, 0.05)} 0%,
            ${_(a.contrast.background, 0.2)}  35%,
            ${_(a.contrast.background, 0.72)} 72%,
            ${_(a.contrast.background, 0.93)} 100%
          )`
      } })
    ] }),
    /* @__PURE__ */ e(Y, { sx: {
      position: "absolute",
      top: { xs: 72, md: 24 },
      right: { xs: 24, md: 40 },
      fontSize: "0.65rem",
      opacity: 0.3,
      zIndex: 2,
      color: a.contrast.text.primary
    }, children: "6.2442° N, 75.5812° W" }),
    /* @__PURE__ */ l(n, { sx: {
      position: "absolute",
      bottom: 28,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      "@keyframes breathe": {
        "0%, 100%": { opacity: 0.2 },
        "50%": { opacity: 0.55 }
      },
      animation: "breathe 2.5s ease-in-out infinite"
    }, children: [
      /* @__PURE__ */ e(Y, { sx: {
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        color: a.contrast.text.primary,
        opacity: 0.5
      }, children: "scroll" }),
      /* @__PURE__ */ e(n, { sx: {
        width: "1px",
        height: "36px",
        background: `linear-gradient(to bottom, ${_(a.contrast.text.primary, 0.25)}, transparent)`
      } })
    ] }),
    /* @__PURE__ */ l(n, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 4,
      px: { xs: 3, md: 5 },
      pb: { xs: 10, md: 6 }
    }, children: [
      /* @__PURE__ */ l(n, { children: [
        /* @__PURE__ */ e(Y, { sx: {
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          color: g.accentColors.orange,
          mb: 2,
          display: "block"
        }, children: t }),
        /* @__PURE__ */ l(
          n,
          {
            component: "h1",
            sx: {
              m: 0,
              fontSize: { xs: "clamp(3rem, 12vw, 5rem)", md: "clamp(4rem, 8vw, 7rem)" },
              fontWeight: 300,
              fontFamily: '"Red Hat Display", sans-serif',
              lineHeight: 0.87,
              letterSpacing: "-0.045em",
              color: a.contrast.text.primary
            },
            children: [
              "más tiempo",
              /* @__PURE__ */ e("br", {}),
              "para lo que",
              /* @__PURE__ */ e("br", {}),
              "importa."
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l(n, { sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2.5,
        flexShrink: 0,
        pb: "4px"
      }, children: [
        /* @__PURE__ */ e(n, { sx: { display: "flex", flexDirection: "column", gap: 0.75, alignItems: "flex-end" }, children: To.map((s) => /* @__PURE__ */ e(Y, { sx: {
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: a.contrast.text.primary,
          opacity: 0.35,
          textTransform: "uppercase"
        }, children: s }, s)) }),
        /* @__PURE__ */ e(
          He,
          {
            variant: "primary",
            text: r,
            size: "large",
            showIcon: !1,
            sx: {
              height: { xs: "44px", md: "50px" },
              px: { xs: 3, md: 5 },
              fontSize: { xs: "0.75rem", md: "0.82rem" },
              fontWeight: 400,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              borderRadius: 0,
              bgcolor: a.contrast.text.primary,
              color: a.contrast.background,
              border: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: g.accentColors.orange,
                color: "#fff"
              }
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(n, { sx: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "1px",
      bgcolor: _(a.contrast.text.primary, 0.1),
      zIndex: 3
    } })
  ] });
}, pa = ({
  label: t,
  body: r,
  pillars: a,
  defaultOpen: o = !0,
  accentColor: i = g.hotOrange
}) => {
  const [s, p] = v(o), c = I();
  return /* @__PURE__ */ l(
    n,
    {
      sx: {
        borderRadius: 0,
        overflow: "hidden",
        border: `1px solid ${c.contrast.border}`,
        backgroundColor: c.contrast.surface
      },
      children: [
        /* @__PURE__ */ l(
          n,
          {
            component: "button",
            onClick: () => p((d) => !d),
            sx: {
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1.5,
              px: 2.5,
              background: "none",
              border: "none",
              cursor: "pointer",
              borderBottom: s ? `1px solid ${c.contrast.border}` : "none"
            },
            children: [
              /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
                /* @__PURE__ */ e(n, { sx: { width: 3, height: 16, backgroundColor: i } }),
                /* @__PURE__ */ e(
                  n,
                  {
                    component: "span",
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 700,
                      color: c.contrast.text.secondary,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase"
                    },
                    children: t
                  }
                )
              ] }),
              /* @__PURE__ */ e(
                n,
                {
                  component: "span",
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 11,
                    color: c.contrast.text.disabled,
                    transform: s ? "rotate(180deg)" : "rotate(0)",
                    display: "inline-block",
                    transition: "transform 0.2s"
                  },
                  children: "∧"
                }
              )
            ]
          }
        ),
        s && /* @__PURE__ */ l(n, { sx: { p: 2.5 }, children: [
          /* @__PURE__ */ e(
            n,
            {
              component: "div",
              sx: {
                fontSize: 13.5,
                lineHeight: 1.75,
                color: c.contrast.text.primary,
                fontStyle: "italic",
                maxWidth: 720
              },
              children: r
            }
          ),
          a && a.length > 0 && /* @__PURE__ */ e(n, { sx: { display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }, children: a.map((d) => /* @__PURE__ */ l(
            n,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.875,
                px: 1.5,
                py: 0.625,
                backgroundColor: `${d.color}0d`,
                border: `1px solid ${d.color}30`
              },
              children: [
                /* @__PURE__ */ e(Se, { id: d.icon, size: 12, color: d.color, strokeWidth: 2 }),
                /* @__PURE__ */ e(
                  n,
                  {
                    component: "span",
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: d.color
                    },
                    children: d.label
                  }
                )
              ]
            },
            d.label
          )) })
        ] })
      ]
    }
  );
}, ha = ({
  logo: t,
  title: r,
  subtitle: a,
  badges: o,
  actions: i
}) => {
  const s = I();
  return /* @__PURE__ */ l(
    n,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
        px: 3.5,
        backgroundColor: s.contrast.surface,
        borderBottom: `1px solid ${s.contrast.border}`,
        flexShrink: 0
      },
      children: [
        /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          t && /* @__PURE__ */ e(n, { sx: { display: "inline-flex" }, children: t }),
          t && /* @__PURE__ */ e(n, { sx: { width: "1px", height: 28, backgroundColor: s.contrast.border } }),
          /* @__PURE__ */ l(n, { children: [
            /* @__PURE__ */ e(
              n,
              {
                component: "h1",
                sx: {
                  m: 0,
                  fontFamily: '"Red Hat Display", sans-serif',
                  fontWeight: 900,
                  fontSize: 16,
                  letterSpacing: "0.04em",
                  color: s.contrast.text.primary
                },
                children: r
              }
            ),
            a && /* @__PURE__ */ e(
              n,
              {
                sx: {
                  fontFamily: '"Necto Mono", monospace',
                  fontSize: 10,
                  color: s.contrast.text.disabled,
                  mt: 0.125,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase"
                },
                children: a
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ l(n, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
          o,
          i
        ] })
      ]
    }
  );
}, ga = ({
  branding: t,
  statusBadge: r,
  groups: a,
  stats: o,
  clock: i,
  signature: s,
  width: p = 252
}) => {
  const c = g.erieBlack, d = "rgba(255,255,255,0.06)", h = g.white, m = "rgba(255,255,255,0.45)";
  return /* @__PURE__ */ l(
    n,
    {
      component: "aside",
      sx: {
        width: p,
        flexShrink: 0,
        backgroundColor: c,
        borderRight: `1px solid ${d}`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
        overflowY: "auto",
        color: h
      },
      children: [
        /* @__PURE__ */ l(n, { sx: { p: "22px 20px 18px", borderBottom: `1px solid ${d}` }, children: [
          t.logo && /* @__PURE__ */ e(n, { sx: { mb: 1.75 }, children: t.logo }),
          /* @__PURE__ */ e(
            n,
            {
              sx: {
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: "0.2em",
                color: h,
                textTransform: "uppercase",
                lineHeight: 1
              },
              children: t.title
            }
          ),
          t.subtitle && /* @__PURE__ */ e(
            n,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9,
                color: m,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mt: 0.5
              },
              children: t.subtitle
            }
          )
        ] }),
        r && /* @__PURE__ */ e(n, { sx: { p: "10px 20px", borderBottom: `1px solid ${d}` }, children: /* @__PURE__ */ l(
          n,
          {
            sx: {
              display: "inline-flex",
              alignItems: "center",
              gap: 0.875,
              px: 1.375,
              py: 0.625,
              backgroundColor: `${g.telemetry[r.status]}1a`,
              border: `1px solid ${g.telemetry[r.status]}33`
            },
            children: [
              /* @__PURE__ */ e(De, { status: r.status, size: 6 }),
              /* @__PURE__ */ e(
                n,
                {
                  component: "span",
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 9,
                    color: g.telemetry[r.status],
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase"
                  },
                  children: r.label
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ e(n, { component: "nav", sx: { flex: 1, py: 1.75 }, children: a.map((u) => /* @__PURE__ */ l(n, { sx: { mb: 2.25 }, children: [
          /* @__PURE__ */ l(
            n,
            {
              sx: {
                px: "20px",
                pb: 0.75,
                fontFamily: '"Necto Mono", monospace',
                fontSize: 8.5,
                fontWeight: 700,
                color: m,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              },
              children: [
                "◈ ",
                u.label
              ]
            }
          ),
          u.items.map((x) => /* @__PURE__ */ l(
            n,
            {
              component: "a",
              href: x.href,
              target: x.external ? "_blank" : void 0,
              rel: x.external ? "noopener noreferrer" : void 0,
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                px: "20px",
                py: 0.875,
                textDecoration: "none",
                borderLeft: "2px solid transparent",
                transition: "all 0.15s",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderLeftColor: g.hotOrange
                }
              },
              children: [
                /* @__PURE__ */ e(
                  Se,
                  {
                    id: x.icon,
                    size: 14,
                    color: "rgba(255,255,255,0.4)",
                    strokeWidth: 1.6
                  }
                ),
                /* @__PURE__ */ l(n, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ e(
                    n,
                    {
                      sx: {
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: h,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      },
                      children: x.name
                    }
                  ),
                  x.hint && /* @__PURE__ */ e(
                    n,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8.5,
                        color: g.moderateBlue,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        mt: "1px",
                        opacity: 0.8
                      },
                      children: x.hint
                    }
                  )
                ] }),
                x.status && /* @__PURE__ */ e(De, { status: x.status, size: 6 })
              ]
            },
            x.id
          ))
        ] }, u.id)) }),
        o && o.length > 0 && /* @__PURE__ */ e(
          n,
          {
            sx: {
              borderTop: `1px solid ${d}`,
              p: "14px 20px",
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(o.length, 2)}, 1fr)`,
              gap: 1
            },
            children: o.map((u) => /* @__PURE__ */ l(
              n,
              {
                sx: {
                  textAlign: "center",
                  py: 1.25,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)"
                },
                children: [
                  /* @__PURE__ */ e(
                    n,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 22,
                        fontWeight: 700,
                        color: u.color ?? g.moderateBlue,
                        lineHeight: 1
                      },
                      children: u.value
                    }
                  ),
                  /* @__PURE__ */ e(
                    n,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8,
                        color: m,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        mt: 0.375
                      },
                      children: u.label
                    }
                  )
                ]
              },
              u.label
            ))
          }
        ),
        i && /* @__PURE__ */ l(
          n,
          {
            sx: {
              borderTop: `1px solid ${d}`,
              p: "12px 20px",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ e(
                n,
                {
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 19,
                    fontWeight: 700,
                    color: h,
                    letterSpacing: "0.05em",
                    lineHeight: 1
                  },
                  children: i.time
                }
              ),
              i.date && /* @__PURE__ */ e(
                n,
                {
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 8.5,
                    color: m,
                    mt: 0.5,
                    letterSpacing: "0.1em"
                  },
                  children: i.date
                }
              )
            ]
          }
        ),
        s && /* @__PURE__ */ l(
          n,
          {
            sx: {
              borderTop: `1px solid ${d}`,
              p: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 1.5
            },
            children: [
              s.logo,
              /* @__PURE__ */ l(n, { children: [
                /* @__PURE__ */ e(
                  n,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 8.5,
                      color: m,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase"
                    },
                    children: s.caption
                  }
                ),
                /* @__PURE__ */ e(
                  n,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 11,
                      fontWeight: 700,
                      color: s.accentColor ?? g.hotOrange,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase"
                    },
                    children: s.label
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}, ma = ({ children: t }) => /* @__PURE__ */ l(n, { sx: { display: "flex", flexDirection: "column", minHeight: "100vh" }, children: [
  /* @__PURE__ */ e(Xr, {}),
  /* @__PURE__ */ e(Co, {}),
  /* @__PURE__ */ e(
    n,
    {
      component: "main",
      sx: {
        flexGrow: 1,
        width: "100%",
        maxWidth: "100%"
      },
      children: t
    }
  ),
  /* @__PURE__ */ e(xo, {})
] }), Eo = () => {
  const t = M(), r = I();
  return /* @__PURE__ */ e(
    n,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: 3,
        padding: 4,
        background: `linear-gradient(135deg, ${r.contrast.surface} 0%, ${r.contrast.background} 100%)`
      },
      children: /* @__PURE__ */ l(n, { sx: { width: "100%", maxWidth: 600 }, children: [
        /* @__PURE__ */ e(
          E,
          {
            variant: "rectangular",
            height: 300,
            sx: {
              borderRadius: 2,
              mb: 2,
              bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ e(
          E,
          {
            variant: "text",
            height: 40,
            width: "80%",
            sx: {
              mb: 1,
              bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ e(
          E,
          {
            variant: "text",
            height: 24,
            width: "60%",
            sx: {
              mb: 1,
              bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ e(
          E,
          {
            variant: "text",
            height: 24,
            width: "70%",
            sx: {
              bgcolor: t.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        )
      ] })
    }
  );
}, ua = ({
  children: t,
  fallback: r = /* @__PURE__ */ e(Eo, {})
}) => /* @__PURE__ */ e(Ht, { fallback: r, children: t }), xa = () => {
  const { pathname: t, hash: r } = Vt();
  return $(() => {
    if (r) {
      const a = r.replace("#", ""), o = document.getElementById(a);
      if (o)
        o.scrollIntoView({ behavior: "smooth" });
      else {
        const i = setTimeout(() => {
          const s = document.getElementById(a);
          s && s.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(i);
      }
    } else
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }, [t, r]), null;
}, fa = ({ children: t }) => {
  const [r, a] = v(!0), o = M(), i = H(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return $(() => {
    let s = 0;
    const p = i.length, c = () => {
      s++, s === p && setTimeout(() => {
        a(!1);
      }, 500);
    }, d = () => {
      s++, s === p && setTimeout(() => {
        a(!1);
      }, 500);
    };
    i.forEach((h) => {
      const m = new Image();
      m.onload = c, m.onerror = d, m.src = h;
    }), p === 0 && setTimeout(() => {
      a(!1);
    }, 500);
  }, [i]), r ? /* @__PURE__ */ e(
    n,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ e(K, { maxWidth: "lg", children: /* @__PURE__ */ l(W, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ e(n, { sx: { mb: 4 }, children: /* @__PURE__ */ e(ne, {}) }),
        /* @__PURE__ */ e(n, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ e(
          E,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ l(W, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ l(W, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ e(
            E,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ e("div", { style: { opacity: r ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: t });
}, ba = ({ children: t }) => {
  const [r, a] = v(!0), o = M(), i = H(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return $(() => {
    let s = 0;
    const p = i.length, c = () => {
      s++, s === p && setTimeout(() => {
        a(!1);
      }, 500);
    }, d = () => {
      s++, s === p && setTimeout(() => {
        a(!1);
      }, 500);
    };
    i.forEach((h) => {
      const m = new Image();
      m.onload = c, m.onerror = d, m.src = h;
    }), p === 0 && setTimeout(() => {
      a(!1);
    }, 500);
  }, [i]), r ? /* @__PURE__ */ e(
    n,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ e(K, { maxWidth: "lg", children: /* @__PURE__ */ l(W, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ e(n, { sx: { mb: 4 }, children: /* @__PURE__ */ e(ne, {}) }),
        /* @__PURE__ */ e(n, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ e(
          E,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ l(W, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ l(W, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ e(
            E,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ e("div", { style: { opacity: r ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: t });
}, ya = ({ children: t }) => {
  const [r, a] = v(!0), o = M();
  return $(() => {
    const i = [
      "/assets/images/hero-image.png",
      "/assets/images/hero-image2.png",
      "/assets/images/hero-image3.png",
      "/assets/images/ai4u-logo.png",
      "/assets/images/ai4u-logo-dark.png"
    ];
    let s = 0;
    const p = i.length, c = () => {
      s++, s === p && setTimeout(() => {
        a(!1);
      }, 500);
    }, d = () => {
      s++, s === p && setTimeout(() => {
        a(!1);
      }, 500);
    };
    i.forEach((h) => {
      const m = new Image();
      m.onload = c, m.onerror = d, m.src = h;
    }), p === 0 && setTimeout(() => {
      a(!1);
    }, 500);
  }, []), r ? /* @__PURE__ */ e(
    n,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ e(K, { maxWidth: "lg", children: /* @__PURE__ */ l(W, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ e(n, { sx: { mb: 4 }, children: /* @__PURE__ */ e(ne, {}) }),
        /* @__PURE__ */ e(n, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ e(
          E,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ l(W, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ l(W, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ e(
            E,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ e(
            E,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: o.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ e("div", { style: { opacity: r ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: t });
}, wa = ({ children: t }) => /* @__PURE__ */ e(D, { children: t }), ka = ({
  children: t,
  title: r,
  subtitle: a,
  className: o = "",
  variant: i = "default"
}) => {
  const s = M(), p = () => {
    switch (i) {
      case "glassmorphism":
        return {
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)"
        };
      case "futuristic":
        return {
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0A0A0A 0%, #1f2937 100%)",
          color: "#FFFFFF"
        };
      default:
        return {
          minHeight: "100vh",
          background: "#FFFFFF"
        };
    }
  }, c = () => {
    switch (i) {
      case "glassmorphism":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
        };
      case "futuristic":
        return {
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        };
      default:
        return {
          background: "#FFFFFF",
          borderBottom: `1px solid ${s.palette.divider}`
        };
    }
  };
  return /* @__PURE__ */ l(n, { sx: p(), className: o, children: [
    (r || a) && /* @__PURE__ */ e(n, { component: "header", sx: c(), children: /* @__PURE__ */ e(K, { maxWidth: "xl", sx: { py: { xs: 8, md: 12 } }, children: /* @__PURE__ */ l(n, { sx: { textAlign: "center" }, children: [
      r && /* @__PURE__ */ e(Pe, { sx: {
        mb: { xs: 4, md: 6 },
        color: i === "futuristic" ? "#FFFFFF" : "#171717"
      }, children: r }),
      a && /* @__PURE__ */ e(L, { sx: {
        fontSize: { xs: "1.125rem", md: "1.25rem" },
        color: i === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        maxWidth: "md",
        mx: "auto",
        lineHeight: 1.6
      }, children: a })
    ] }) }) }),
    /* @__PURE__ */ e(n, { component: "main", sx: { display: "flex", flexDirection: "column" }, children: t })
  ] });
}, Sa = ({
  children: t,
  title: r,
  description: a,
  className: o = "",
  variant: i = "default"
}) => {
  const s = M();
  return /* @__PURE__ */ l(n, { sx: (() => {
    switch (i) {
      case "glassmorphism":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: s.spacing(4),
          padding: s.spacing(4)
        };
      case "futuristic":
        return {
          background: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: s.spacing(4),
          padding: s.spacing(4)
        };
      default:
        return {
          background: s.palette.background.paper,
          borderRadius: s.spacing(2),
          border: `1px solid ${s.palette.divider}`,
          padding: s.spacing(3)
        };
    }
  })(), className: o, children: [
    (r || a) && /* @__PURE__ */ l(n, { sx: { mb: 4 }, children: [
      r && /* @__PURE__ */ e(gt, { sx: {
        mb: 2,
        // Estilo minimalista: usar color del tema en lugar de gradiente naranja
        color: i === "futuristic" ? "#FFFFFF" : s.palette.text.primary
      }, children: r }),
      a && /* @__PURE__ */ e(L, { sx: {
        fontSize: "1.125rem",
        color: i === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        mb: 4
      }, children: a })
    ] }),
    t
  ] });
}, va = ({
  children: t,
  className: r = "",
  maxWidth: a = "xl",
  padding: o = "lg"
}) => /* @__PURE__ */ e(
  K,
  {
    maxWidth: a,
    sx: (() => {
      switch (o) {
        case "none":
          return {};
        case "sm":
          return { px: 2, py: 2 };
        case "md":
          return { px: 3, py: 3 };
        case "lg":
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 4 };
        case "xl":
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 6 };
        default:
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 4 };
      }
    })(),
    className: r,
    children: t
  }
), Ia = ({
  children: t,
  cols: r = 1,
  gap: a = "lg",
  className: o = ""
}) => /* @__PURE__ */ e(
  P,
  {
    container: !0,
    spacing: (() => {
      switch (a) {
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
        default:
          return 4;
      }
    })(),
    className: o,
    children: Bt.Children.map(t, (s, p) => /* @__PURE__ */ e(
      P,
      {
        size: {
          xs: 12,
          sm: r >= 2 ? 6 : 12,
          md: r >= 3 ? 4 : r >= 2 ? 6 : 12,
          lg: r >= 4 ? 3 : r >= 3 ? 4 : r >= 2 ? 6 : 12,
          xl: r >= 6 ? 2 : r >= 4 ? 3 : r >= 3 ? 4 : r >= 2 ? 6 : 12
        },
        children: s
      },
      p
    ))
  }
), Ca = ({
  children: t,
  spacing: r = "md",
  className: a = ""
}) => /* @__PURE__ */ e(
  W,
  {
    spacing: (() => {
      switch (r) {
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
        default:
          return 3;
      }
    })(),
    className: a,
    children: t
  }
);
var Ao = /* @__PURE__ */ ((t) => (t.OPERATION = "operation", t.STRATEGY = "strategy", t.EDUCATION = "education", t.TRANSFORMATION = "transformation", t))(Ao || {}), Ro = /* @__PURE__ */ ((t) => (t.AUTOMATION = "automation", t.AI_ASSISTANT = "ai_assistant", t.ANALYTICS = "analytics", t.ECOMMERCE = "ecommerce", t.TRAINING = "training", t.CONSULTING = "consulting", t))(Ro || {}), Fo = /* @__PURE__ */ ((t) => (t.ACTIVE = "active", t.INACTIVE = "inactive", t.COMING_SOON = "coming_soon", t.DEPRECATED = "deprecated", t))(Fo || {});
function ot(t) {
  return String(t).padStart(2, "0");
}
function je() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Bogota" }).format(/* @__PURE__ */ new Date());
}
function za(t) {
  const r = je(), a = /* @__PURE__ */ new Date(`${r}T00:00:00Z`), o = new Date(a.getTime() - t * 864e5);
  return new Intl.DateTimeFormat("en-CA", { timeZone: "UTC" }).format(o);
}
function Te() {
  const [t, r] = je().split("-").map(Number);
  return { year: t, month: r };
}
function xt(t, r, a) {
  const o = t * 12 + (r - 1) + a;
  return { year: Math.floor(o / 12), month: (o % 12 + 12) % 12 + 1 };
}
function Ue(t, r) {
  return new Date(t, r, 0).getDate();
}
function ae(t, r, a) {
  return `${t}-${ot(r)}-${ot(a)}`;
}
function $o(t = 0) {
  const r = Te(), { year: a, month: o } = xt(r.year, r.month, t);
  return ae(a, o, 1);
}
function Wo(t = 0) {
  const r = Te(), { year: a, month: o } = xt(r.year, r.month, t);
  return ae(a, o, Ue(a, o));
}
function Ta() {
  return { from: $o(-1), to: Wo(-1) };
}
function Ea() {
  const { year: t, month: r } = Te(), a = Math.floor((r - 1) / 3) * 3 + 1, o = a + 2;
  return {
    from: ae(t, a, 1),
    to: ae(t, o, Ue(t, o))
  };
}
function Aa() {
  const { year: t, month: r } = Te(), a = r <= 6 ? 1 : 7, o = a + 5;
  return {
    from: ae(t, a, 1),
    to: ae(t, o, Ue(t, o))
  };
}
function Ra() {
  const t = je();
  return { from: `${t.slice(0, 4)}-01-01`, to: t };
}
export {
  _a as AI4U_DESIGN_TOKENS,
  g as AI4U_PALETTE,
  Jn as AuthCard,
  X as BORDER_TOKENS,
  be as BREAKPOINT_TOKENS,
  wa as BasicLoadingWrapper,
  L as BodyText,
  Tn as Branding,
  Un as Breadcrumb,
  $n as BudgetCard,
  Ce as Button,
  Oa as COMPONENT_SPACING,
  Wa as COMPONENT_VARIANTS,
  yt as CONTRAST_PAIRS,
  ze as Card,
  En as ChatButton,
  Y as CodeText,
  pt as ColorModeContext,
  va as Container,
  he as ContextualLink,
  Se as DashboardIcon,
  ga as DashboardSidebar,
  ha as DashboardTopBar,
  He as DiagnosticCTA,
  sa as Documentation,
  Gn as ErrorBoundary,
  Kn as ExpandableSection,
  Xn as FilterStats,
  xo as Footer,
  we as GeometricIcon,
  jr as Giant,
  zn as GiantNumber,
  Xr as GoogleTranslateProvider,
  Qe as GoogleTranslateWidget,
  Ia as Grid,
  Pe as H1,
  gt as H2,
  fe as H3,
  N as H4,
  mn as H5,
  un as H6,
  da as HeroFullscreen,
  ra as HeroSection,
  Mn as ImageLightbox,
  fn as ImagePreloader,
  In as IntelligentImagePreloader,
  ma as Layout,
  Ne as LazyImage,
  ua as LazyPage,
  bn as LoadingScreen,
  ba as LoadingWrapper,
  ne as Logo,
  La as MUI_BREAKPOINTS,
  Wn as MetricCard,
  co as Modal,
  la as ModelingInterface,
  Qn as ModuleCard,
  Co as Navbar,
  ta as Navigation,
  Zr as NavigationDot,
  Sn as OptimizedImage,
  vn as OptimizedImageAdvanced,
  ka as PageLayout,
  ea as PeriodPicker,
  wn as PixelArtFilter,
  yn as PixelArtImage,
  Fn as ProcessStep,
  Zn as ProgressiveContent,
  Vn as RelatedPages,
  ut as SEOHead,
  pe as SHADOW_TOKENS,
  Z as SPACING_TOKENS,
  ee as SURFACE_PRESETS,
  ca as ScrollRevealHero,
  xa as ScrollToTop,
  Sa as Section,
  gn as Select,
  jn as ServiceCard,
  Ro as ServiceCategory,
  qn as ServiceCrossLink,
  Fo as ServiceStatus,
  Ao as ServiceSuperCategory,
  Cn as ServiceThumbnail,
  An as ServicesButton,
  aa as ServicesFilter,
  ia as ServicesStats,
  fa as SimpleAppWrapper,
  ya as SimpleLoadingWrapper,
  oa as SleepWidget,
  A as SmallText,
  Ca as Stack,
  De as StatusDot,
  Yn as SuperCategoryFilter,
  ln as SurfaceProvider,
  z as TEXT_VARIANTS,
  Ba as TRANSITION_TOKENS,
  k as TYPOGRAPHY_TOKENS,
  Pa as TYPOGRAPHY_UTILITIES,
  Ze as TextField,
  hn as Textarea,
  sn as ThemeProvider,
  Rn as TransactionCard,
  xn as Typography,
  xn as TypographyWrapper,
  pa as VisionBanner,
  na as WeatherWidget,
  kt as Z_INDEX_TOKENS,
  ht as analytics,
  kn as buildSEOMetadata,
  Nn as cleanMetaDescription,
  Na as createAI4UTokens,
  za as daysAgoBogotaIso,
  Hn as generateKeywords,
  mo as getBreadcrumbStructuredData,
  Pn as getCanonicalUrl,
  Ea as getCurrentQuarterRangeBogota,
  Aa as getCurrentSemesterRangeBogota,
  Ln as getFAQStructuredData,
  $o as getFirstDayOfMonthBogota,
  Dn as getHomeStructuredData,
  Wo as getLastDayOfMonthBogota,
  Bn as getPageMetaTags,
  Ta as getPreviousMonthRangeBogota,
  go as getServiceStructuredData,
  _n as getServicesStructuredData,
  On as getUseCasesStructuredData,
  Ra as getYtdRangeBogota,
  pn as initAnalytics,
  je as todayBogotaIso,
  nn as useBreakpoint,
  re as useBreakpointUp,
  Be as useColorMode,
  I as useColors,
  wt as useComponentColors,
  cn as useComponentVariant,
  Ma as useContrastColors,
  dn as useContrastPair,
  an as useIsMobile,
  Er as useSurface
};
//# sourceMappingURL=index.js.map
