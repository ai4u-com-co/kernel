// Configuración principal del tema AI4U
// Fuente: Brand Book 2025 + Design System ZIP (mayo 2026)
import { AI4U_PALETTE, CONTRAST_PAIRS } from './palette';
import { TYPOGRAPHY_TOKENS, TEXT_VARIANTS } from './typography';
import { SPACING_TOKENS } from './spacing';

// Sombras sutiles — sin color, sin glow (Brand Book §shadows)
export const SHADOW_TOKENS = {
  none:    '0 0 #0000',
  sm:      '0 1px 2px rgba(23, 23, 23, 0.05)',
  default: '0 4px 12px rgba(23, 23, 23, 0.08)',
  md:      '0 4px 12px rgba(23, 23, 23, 0.08)',
  lg:      '0 8px 24px rgba(23, 23, 23, 0.10)',
  drawer:  '-4px 0 24px rgba(0, 0, 0, 0.12)',

  dark: {
    sm:      '0 1px 2px rgba(0, 0, 0, 0.20)',
    default: '0 4px 12px rgba(0, 0, 0, 0.30)',
    md:      '0 4px 12px rgba(0, 0, 0, 0.30)',
  },

  ai4u: {
    card:   '0 4px 12px rgba(23, 23, 23, 0.08)',
    button: '0 1px 2px rgba(23, 23, 23, 0.05)',
    glow:   'none', // Sin glow — Brand Book §sombras
  },
} as const;

// Radii — exactamente 3 valores (Brand Book §radii)
export const BORDER_TOKENS = {
  width: {
    none:   '0',
    thin:   '1px',
    medium: '2px',
    thick:  '4px',
  },
  radius: {
    none: '0px',
    sm:   '0.5rem',   // 8px  — error panels, inline boxes
    md:   '1rem',     // 16px — cards, inputs (the workhorse)
    lg:   '1rem',
    full: '9999px',   // buttons, badges, chips, search
  },
} as const;

// Configuración de z-index
export const Z_INDEX_TOKENS = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

// Configuración de transiciones - Snappy
export const TRANSITION_TOKENS = {
  duration: {
    fast: '100ms',
    normal: '200ms',
    slow: '400ms',
  },
  easing: {
    linear: 'linear',
    step: 'steps(4, end)', // Industrial step feel
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// ─── Breakpoints ─────────────────────────────────────────────────────────────
// FUENTE ÚNICA DE VERDAD del ecosistema. Valores alineados con los defaults de
// Tailwind porque 14 de las ~18 apps del ecosistema son Tailwind; el design
// system (MUI) se adapta a ellas, no al revés.
//
// Para que MUI quiebre en los mismos puntos, pasar `MUI_BREAKPOINTS` a
// createTheme (ver abajo). Para que una app Tailwind quede anclada
// explícitamente a estos valores, importar `styles/tailwind-theme.css`.
export const BREAKPOINT_TOKENS = {
  xs: 0,      // móvil (base — mobile first)
  sm: 640,    // móvil grande
  md: 768,    // tablet
  lg: 1024,   // laptop
  xl: 1280,   // escritorio
  '2xl': 1536, // escritorio ancho
} as const;

/**
 * Fragmento listo para `createTheme({ breakpoints: MUI_BREAKPOINTS })`.
 *
 * Es **opt-in**: sin esto, MUI usa sus propios defaults (600/900/1200/1536),
 * que no coinciden con Tailwind. Adoptarlo alinea una app MUI con el resto del
 * ecosistema, pero mueve los puntos de quiebre existentes — revisar visualmente
 * antes de subirlo a producción.
 */
export const MUI_BREAKPOINTS = {
  values: BREAKPOINT_TOKENS,
} as const;

// Tema completo de tokens
export const AI4U_DESIGN_TOKENS = {
  palette: AI4U_PALETTE,
  contrast: CONTRAST_PAIRS,
  typography: TYPOGRAPHY_TOKENS,
  textVariants: TEXT_VARIANTS,
  spacing: SPACING_TOKENS,
  shadows: SHADOW_TOKENS,
  borders: BORDER_TOKENS,
  zIndex: Z_INDEX_TOKENS,
  transitions: TRANSITION_TOKENS,
  breakpoints: BREAKPOINT_TOKENS,
} as const;

// Tema para modo claro/oscuro
export const createAI4UTokens = (mode: 'light' | 'dark') => ({
  ...AI4U_DESIGN_TOKENS,
  colors: {
    mode,
    primary: {
      main: AI4U_PALETTE.black,
      contrastText: AI4U_PALETTE.white,
    },
    background: {
      default: CONTRAST_PAIRS[mode].background,
      paper: CONTRAST_PAIRS[mode].surface,
    },
    text: {
      primary: CONTRAST_PAIRS[mode].text.primary,
      secondary: CONTRAST_PAIRS[mode].text.secondary,
      disabled: CONTRAST_PAIRS[mode].text.disabled,
    },
    divider: CONTRAST_PAIRS[mode].divider,
    border: CONTRAST_PAIRS[mode].border,
  },
  // Helpers para acceso rápido
  helpers: {
    border: {
      primary: CONTRAST_PAIRS[mode].border,
      secondary: CONTRAST_PAIRS[mode].divider,
    },
    background: {
      primary: CONTRAST_PAIRS[mode].background,
      secondary: mode === 'light' ? AI4U_PALETTE.gray[50] : AI4U_PALETTE.gray[900],
    },
    text: {
      primary: CONTRAST_PAIRS[mode].text.primary,
      secondary: CONTRAST_PAIRS[mode].text.secondary,
    }
  }
});

export default AI4U_DESIGN_TOKENS;