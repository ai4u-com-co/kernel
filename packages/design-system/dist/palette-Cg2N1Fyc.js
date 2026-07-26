const e = {
  mintCream: "#EAF4EB",
  // Fondo de página — cálido, natural
  erieBlack: "#171717",
  // Texto primario, superficies oscuras
  hotOrange: "#FF6E00",
  // Energía, CTAs, danger/error
  moderateBlue: "#3DAED1",
  // Tecnología, info, success
  cadetGray: "#94989B",
  // Texto secundario, captions, bordes
  white: "#FFFFFF",
  // Superficies elevadas (cards)
  black: "#171717",
  // Alias → Erie Black (backward compat)
  // ── Colores secundarios y acentos oficiales del Brand Identity ──
  extended: {
    neonBlaze: "#ff6e00",
    // Más ácido, más intenso. Ideal para dark UI y botones activos
    digitalCoral: "#FF7477",
    // Más limpio y vibrante. Ideal para dashboards humanos o wellness
    frostSignal: "#DFF7EB",
    // Más frío y sintético. Ideal para fondos con estética futurista
    grapheneBlack: "#0A0A0A",
    // Negro profundo, absoluto. Para interfaces con estética cyber
    quantumBlue: "#1FA9F6",
    // Azul eléctrico, más saturado. Transmite data y conectividad
    techSlate: "#7D848B",
    // Gris técnico con tinte metálico. Para bordes, skeletons, sliders
    cyberOlive: "#eaf4eb",
    // Verde lima metálico. Para resaltar en tecnología verde
    deepNeuralTeal: "#2B7A78"
    // Teal saturado para sistemas autónomos y telemetría de IA
  },
  // Escala de grises internos (uso en MUI internals)
  gray: {
    50: "#F9F9F9",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#2A2A2A",
    900: "#171717"
    // Erie Black
  },
  // Tints semánticos
  tints: {
    hotOrange5: "rgba(255, 110, 0, 0.05)",
    hotOrange8: "rgba(255, 110, 0, 0.08)",
    hotOrange30: "rgba(255, 110, 0, 0.30)",
    moderateBlue4: "rgba(61, 174, 209, 0.04)",
    moderateBlue8: "rgba(61, 174, 209, 0.08)",
    moderateBlue15: "rgba(61, 174, 209, 0.15)",
    erieBlack8: "rgba(23, 23, 23, 0.08)",
    erieBlack10: "rgba(23, 23, 23, 0.10)",
    erieBlack20: "rgba(23, 23, 23, 0.20)",
    erieBlack30: "rgba(23, 23, 23, 0.30)",
    mintCream60: "rgba(234, 244, 235, 0.60)"
  },
  // Semántica (inversión crítica de marca)
  // orange = error/danger   ← NO usar rojo
  // blue   = success/info   ← NO usar verde
  semantic: {
    success: "#3DAED1",
    danger: "#FF6E00",
    info: "#3DAED1",
    warning: "#FF6E00"
  },
  // Tamaprint — paleta de cliente (Tamaprint es cliente histórico de AI4U).
  // Slot oficial dentro del DS para mantener consistencia en proyectos Tamaprint
  // (Mission Control, login, dashboards internos, cotizador).
  tamaprint: {
    primary: "#00ADEF",
    // azul corporativo Tamaprint
    primaryDark: "#0082C8",
    primaryLight: "#33BFFF",
    dark: "#231F20",
    primary8: "rgba(0, 173, 239, 0.08)",
    primary15: "rgba(0, 173, 239, 0.15)",
    primary25: "rgba(0, 173, 239, 0.25)",
    primary40: "rgba(0, 173, 239, 0.40)"
  },
  // Slate scale (superficies de dashboards de monitoreo).
  // Complementa a `gray` (neutro) cuando se necesita un tinte azul-frío.
  slate: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A"
  },
  // Telemetría (dashboards de monitoreo — NO marca)
  // Semántica universal de operación: verde=ok, rojo=falla, ámbar=transición.
  // Usar SOLO en superficies de dashboard/observabilidad, nunca en CTAs ni feedback de marca.
  telemetry: {
    online: "#22C55E",
    // verde — servicio operativo
    offline: "#EF4444",
    // rojo — servicio caído
    starting: "#F59E0B",
    // ámbar — en arranque/transición
    checking: "#94A3B8",
    // gris azulado — verificando
    idle: "#A3A3A3"
    // gris — inactivo/desconocido
  },
  // Backward compat — accentColors (legacy)
  accentColors: {
    orange: "#FF6E00",
    mint: "#EAF4EB",
    // Mint Cream — NO es el VOLT verde
    blue: "#3DAED1",
    cadetGray: "#94989B"
  },
  accent: "#FF6E00",
  // Semantic aliases (legacy)
  success: "#3DAED1",
  error: "#FF6E00",
  warning: "#FF6E00",
  info: "#3DAED1"
}, a = {
  light: {
    background: e.mintCream,
    // #EAF4EB — cálido
    surface: e.white,
    // #FFFFFF — cards elevadas
    text: {
      primary: e.erieBlack,
      // #171717
      secondary: e.cadetGray,
      // #94989B
      disabled: e.gray[400]
    },
    border: e.tints.erieBlack10,
    divider: e.tints.erieBlack10
  },
  dark: {
    background: e.erieBlack,
    // #171717
    surface: e.gray[800],
    // #2A2A2A — cards elevadas en dark
    text: {
      primary: e.white,
      secondary: e.cadetGray,
      disabled: e.gray[600]
    },
    border: "rgba(255, 255, 255, 0.12)",
    divider: "rgba(255, 255, 255, 0.08)"
  }
}, i = {
  // Superficies de marca
  mintCream: {
    background: e.mintCream,
    surface: e.white,
    text: {
      primary: e.erieBlack,
      secondary: e.cadetGray,
      disabled: e.gray[400]
    },
    border: e.tints.erieBlack10,
    divider: e.tints.erieBlack10,
    effectiveMode: "light"
  },
  black: {
    background: e.erieBlack,
    surface: e.gray[800],
    text: {
      primary: e.white,
      secondary: e.cadetGray,
      disabled: e.gray[600]
    },
    border: "rgba(255, 255, 255, 0.12)",
    divider: "rgba(255, 255, 255, 0.08)",
    effectiveMode: "dark"
  },
  white: {
    background: e.white,
    surface: e.white,
    text: {
      primary: e.erieBlack,
      secondary: e.cadetGray,
      disabled: e.gray[400]
    },
    border: e.tints.erieBlack10,
    divider: e.tints.erieBlack10,
    effectiveMode: "light"
  },
  orange: {
    background: e.hotOrange,
    surface: e.hotOrange,
    text: {
      primary: e.white,
      secondary: "rgba(255,255,255,0.75)",
      disabled: "rgba(255,255,255,0.45)"
    },
    border: "rgba(255,255,255,0.30)",
    divider: "rgba(255,255,255,0.20)",
    effectiveMode: "dark"
  },
  // Dashboard claro — superficie operativa con tinte slate (Mission Control).
  dashboard: {
    background: "#F1F5F9",
    // slate-100
    surface: "#FFFFFF",
    text: {
      primary: "#0F172A",
      // slate-900
      secondary: "#64748B",
      // slate-500
      disabled: "#94A3B8"
      // slate-400
    },
    border: "#E2E8F0",
    // slate-200
    divider: "#E2E8F0",
    effectiveMode: "light"
  },
  // Dashboard oscuro — superficie para sidebars/topbars de monitoreo.
  dashboardDark: {
    background: "#171717",
    // erieBlack
    surface: "#1E1E1E",
    text: {
      primary: "#F1F5F9",
      // slate-100
      secondary: "#94A3B8",
      // slate-400
      disabled: "#64748B"
      // slate-500
    },
    border: "rgba(255, 255, 255, 0.07)",
    divider: "rgba(255, 255, 255, 0.12)",
    effectiveMode: "dark"
  },
  // Alias legacy — 'volt' renombrado internamente a mintCream
  volt: {
    background: e.mintCream,
    surface: e.white,
    text: {
      primary: e.erieBlack,
      secondary: e.cadetGray,
      disabled: e.gray[400]
    },
    border: e.tints.erieBlack10,
    divider: e.tints.erieBlack10,
    effectiveMode: "light"
  }
}, t = {
  button: {
    primary: {
      background: e.erieBlack,
      text: e.white,
      hover: e.gray[800]
    },
    secondary: {
      background: "transparent",
      text: e.erieBlack,
      border: e.erieBlack,
      hover: e.erieBlack,
      hoverText: e.white
    },
    accent: {
      background: e.hotOrange,
      text: e.white,
      hover: "#E66400"
    },
    ghost: {
      background: "transparent",
      text: e.erieBlack,
      hover: e.tints.erieBlack8
    },
    outline: {
      background: "transparent",
      text: e.erieBlack,
      border: e.tints.erieBlack20,
      hover: e.tints.erieBlack8
    },
    minimal: {
      background: "transparent",
      text: e.erieBlack,
      border: "none",
      hover: e.tints.erieBlack8
    }
  },
  card: {
    light: {
      background: e.mintCream,
      text: e.erieBlack,
      border: e.tints.erieBlack10
    },
    elevated: {
      background: e.white,
      text: e.erieBlack,
      border: e.tints.erieBlack10
    },
    dark: {
      background: e.erieBlack,
      text: e.white,
      border: "rgba(255,255,255,0.08)"
    },
    blue: {
      background: e.tints.moderateBlue8,
      text: e.erieBlack,
      border: e.tints.moderateBlue15
    }
  }
}, d = (r) => a[r], c = (r) => ({
  ...a[r],
  components: t
});
export {
  e as A,
  t as C,
  i as S,
  a,
  d as b,
  c as u
};
//# sourceMappingURL=palette-Cg2N1Fyc.js.map
