import { C as t, A as r } from "../palette-n0sYhpzg.js";
import { a as u, S as y, u as T, b as N } from "../palette-n0sYhpzg.js";
const n = {
  // Familias de fuentes
  fontFamily: {
    primary: '"Red Hat Display", sans-serif',
    code: '"Necto Mono", "Space Mono", monospace'
  },
  // Pesos de fuente - Bold & Minimal
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 700,
    bold: 900
    // Extra bold for impact
  },
  // Tamaños de fuente - Dramatic Scale
  fontSize: {
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    base: "1rem",
    // 16px
    lg: "1.25rem",
    // 20px
    xl: "1.5rem",
    // 24px
    "2xl": "2.25rem",
    // 36px
    "3xl": "3.5rem",
    // 56px
    "4xl": "5rem",
    // 80px
    "5xl": "7rem",
    // 112px
    "6xl": "9rem",
    // 144px
    "7xl": "11rem"
    // 176px
  },
  // Alturas de línea - Functional
  lineHeight: {
    tight: 0.9,
    snug: 1.1,
    normal: 1.5,
    relaxed: 1.8
  },
  // Espaciado de letras - Aggressive
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.02em",
    normal: "0em",
    wide: "0.05em",
    wider: "0.1em",
    widest: "0.2em"
  }
}, a = {
  // Títulos "DECONSTRUCTED"
  display: {
    giant: {
      fontSize: { xs: "3rem", md: "7rem", lg: "10rem" },
      fontWeight: 900,
      lineHeight: 0.85,
      letterSpacing: "-0.05em"
    },
    large: {
      fontSize: { xs: "2.5rem", md: "5rem", lg: "7rem" },
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: "-0.04em"
    },
    medium: {
      fontSize: { xs: "2rem", md: "3.5rem", lg: "5rem" },
      fontWeight: 700,
      lineHeight: 0.95,
      letterSpacing: "-0.03em"
    },
    small: {
      fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3.5rem" },
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    },
    number: {
      fontSize: { xs: "5rem", md: "12rem", lg: "18rem" },
      fontWeight: 900,
      lineHeight: 0.8,
      letterSpacing: "-0.06em",
      fontFamily: n.fontFamily.code
      // Monospace for numbers
    }
  },
  // Etiquetas industriales (Abloh Signature)
  label: {
    main: {
      fontFamily: n.fontFamily.code,
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0.1em",
      opacity: 0.8
    },
    secondary: {
      fontFamily: n.fontFamily.code,
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: "0.05em",
      textTransform: "lowercase",
      opacity: 0.6
    }
  },
  // Texto de cuerpo
  body: {
    large: {
      fontSize: { xs: "1.125rem", md: "1.25rem" },
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "-0.01em"
    },
    regular: {
      fontSize: { xs: "1rem", md: "1.125rem" },
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "-0.01em"
    },
    small: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5
    }
  },
  // Texto de interfaz
  ui: {
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "0.15em"
    },
    caption: {
      fontSize: n.fontSize.xs,
      fontWeight: 400,
      lineHeight: 1.2
    },
    code: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: n.fontFamily.code
    }
  }
}, p = {
  // Clases de texto para uso directo
  text: {
    display: "font-black leading-none tracking-tighter",
    heading: "font-bold leading-tight",
    body: "font-normal leading-relaxed",
    label: "font-mono text-sm leading-normal tracking-widest"
  }
}, o = {
  // Espaciado base (8px)
  base: 8,
  // Escala de espaciado (más generosa)
  spacing: {
    0: 0,
    1: 8,
    // 0.5rem
    2: 16,
    // 1rem
    3: 24,
    // 1.5rem
    4: 32,
    // 2rem
    5: 40,
    // 2.5rem
    6: 48,
    // 3rem
    8: 64,
    // 4rem
    10: 80,
    // 5rem
    12: 96,
    // 6rem
    16: 128,
    // 8rem
    20: 160,
    // 10rem
    24: 192,
    // 12rem
    32: 256,
    // 16rem
    40: 320,
    // 20rem
    48: 384,
    // 24rem
    56: 448,
    // 28rem
    64: 512
    // 32rem
  },
  // Radios de borde (más sutiles)
  borderRadius: {
    none: 0,
    sm: 4,
    default: 8,
    md: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
    full: 9999
  },
  // Anchos de borde (más finos)
  borderWidth: {
    0: 0,
    default: 1,
    2: 2,
    thick: 4,
    heavy: 6
  },
  // Tamaños de elementos (más espaciados)
  sizes: {
    // Iconos
    iconXs: 16,
    iconSm: 20,
    iconMd: 24,
    iconLg: 32,
    iconXl: 40,
    // Botones (más altos)
    buttonSm: 40,
    buttonMd: 48,
    buttonLg: 56,
    // Inputs (más altos)
    inputSm: 40,
    inputMd: 48,
    inputLg: 56,
    // Cards (más espaciadas)
    cardSm: 240,
    cardMd: 320,
    cardLg: 400
  }
}, x = {
  // Espaciado interno de componentes (más generoso) - UNIDADES MUI (x8px)
  padding: {
    button: {
      sm: "1.25 2.5",
      // Aproximado para usar con theme.spacing
      md: "1.5 3",
      lg: "2 4"
    },
    card: {
      sm: 6,
      md: 8,
      lg: 12
    },
    input: {
      sm: "1.25 2",
      md: "1.5 2.5",
      lg: "2 3"
    }
  },
  // Márgenes (más generosos) - UNIDADES MUI (x8px)
  margin: {
    section: 12,
    // 96px
    subsection: 8,
    // 64px
    element: 4
    // 32px
  },
  // Espaciado de layout - valores RESPONSIVOS para usar directamente en sx
  layout: {
    container: {
      xs: 2,
      // 16px en móvil
      sm: 3,
      // 24px en tablet
      md: 4,
      // 32px en desktop pequeño
      lg: 6
      // 48px en desktop grande
    },
    section: {
      xs: 6,
      // 48px en móvil
      sm: 8,
      // 64px en tablet
      md: 10,
      // 80px en desktop
      lg: 12
      // 96px en desktop grande
    }
  }
}, m = {
  none: "0 0 #0000",
  sm: "0 1px 2px rgba(23, 23, 23, 0.05)",
  default: "0 4px 12px rgba(23, 23, 23, 0.08)",
  md: "0 4px 12px rgba(23, 23, 23, 0.08)",
  lg: "0 8px 24px rgba(23, 23, 23, 0.10)",
  drawer: "-4px 0 24px rgba(0, 0, 0, 0.12)",
  dark: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.20)",
    default: "0 4px 12px rgba(0, 0, 0, 0.30)",
    md: "0 4px 12px rgba(0, 0, 0, 0.30)"
  },
  ai4u: {
    card: "0 4px 12px rgba(23, 23, 23, 0.08)",
    button: "0 1px 2px rgba(23, 23, 23, 0.05)",
    glow: "none"
    // Sin glow — Brand Book §sombras
  }
}, l = {
  width: {
    none: "0",
    thin: "1px",
    medium: "2px",
    thick: "4px"
  },
  radius: {
    none: "0px",
    sm: "0.5rem",
    // 8px  — error panels, inline boxes
    md: "1rem",
    // 16px — cards, inputs (the workhorse)
    lg: "1rem",
    full: "9999px"
    // buttons, badges, chips, search
  }
}, s = {
  dropdown: 1e3,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080
}, g = {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "400ms"
  },
  easing: {
    linear: "linear",
    step: "steps(4, end)",
    // Industrial step feel
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
  }
}, i = {
  xs: 0,
  // móvil (base — mobile first)
  sm: 640,
  // móvil grande
  md: 768,
  // tablet
  lg: 1024,
  // laptop
  xl: 1280,
  // escritorio
  "2xl": 1536
  // escritorio ancho
}, f = {
  values: i
}, d = {
  palette: r,
  contrast: t,
  typography: n,
  textVariants: a,
  spacing: o,
  shadows: m,
  borders: l,
  zIndex: s,
  transitions: g,
  breakpoints: i
}, S = (e) => ({
  ...d,
  colors: {
    mode: e,
    primary: {
      main: r.black,
      contrastText: r.white
    },
    background: {
      default: t[e].background,
      paper: t[e].surface
    },
    text: {
      primary: t[e].text.primary,
      secondary: t[e].text.secondary,
      disabled: t[e].text.disabled
    },
    divider: t[e].divider,
    border: t[e].border
  },
  // Helpers para acceso rápido
  helpers: {
    border: {
      primary: t[e].border,
      secondary: t[e].divider
    },
    background: {
      primary: t[e].background,
      secondary: e === "light" ? r.gray[50] : r.gray[900]
    },
    text: {
      primary: t[e].text.primary,
      secondary: t[e].text.secondary
    }
  }
});
export {
  d as AI4U_DESIGN_TOKENS,
  r as AI4U_PALETTE,
  l as BORDER_TOKENS,
  i as BREAKPOINT_TOKENS,
  x as COMPONENT_SPACING,
  u as COMPONENT_VARIANTS,
  t as CONTRAST_PAIRS,
  f as MUI_BREAKPOINTS,
  m as SHADOW_TOKENS,
  o as SPACING_TOKENS,
  y as SURFACE_PRESETS,
  a as TEXT_VARIANTS,
  g as TRANSITION_TOKENS,
  n as TYPOGRAPHY_TOKENS,
  p as TYPOGRAPHY_UTILITIES,
  s as Z_INDEX_TOKENS,
  S as createAI4UTokens,
  T as useComponentColors,
  N as useContrastColors
};
//# sourceMappingURL=index.js.map
