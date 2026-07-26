export declare const SHADOW_TOKENS: {
    readonly none: "0 0 #0000";
    readonly sm: "0 1px 2px rgba(23, 23, 23, 0.05)";
    readonly default: "0 4px 12px rgba(23, 23, 23, 0.08)";
    readonly md: "0 4px 12px rgba(23, 23, 23, 0.08)";
    readonly lg: "0 8px 24px rgba(23, 23, 23, 0.10)";
    readonly drawer: "-4px 0 24px rgba(0, 0, 0, 0.12)";
    readonly dark: {
        readonly sm: "0 1px 2px rgba(0, 0, 0, 0.20)";
        readonly default: "0 4px 12px rgba(0, 0, 0, 0.30)";
        readonly md: "0 4px 12px rgba(0, 0, 0, 0.30)";
    };
    readonly ai4u: {
        readonly card: "0 4px 12px rgba(23, 23, 23, 0.08)";
        readonly button: "0 1px 2px rgba(23, 23, 23, 0.05)";
        readonly glow: "none";
    };
};
export declare const BORDER_TOKENS: {
    readonly width: {
        readonly none: "0";
        readonly thin: "1px";
        readonly medium: "2px";
        readonly thick: "4px";
    };
    readonly radius: {
        readonly none: "0px";
        readonly sm: "0.5rem";
        readonly md: "1rem";
        readonly lg: "1rem";
        readonly full: "9999px";
    };
};
export declare const Z_INDEX_TOKENS: {
    readonly dropdown: 1000;
    readonly sticky: 1020;
    readonly fixed: 1030;
    readonly modalBackdrop: 1040;
    readonly modal: 1050;
    readonly popover: 1060;
    readonly tooltip: 1070;
    readonly toast: 1080;
};
export declare const TRANSITION_TOKENS: {
    readonly duration: {
        readonly fast: "100ms";
        readonly normal: "200ms";
        readonly slow: "400ms";
    };
    readonly easing: {
        readonly linear: "linear";
        readonly step: "steps(4, end)";
        readonly easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)";
    };
};
export declare const BREAKPOINT_TOKENS: {
    readonly xs: 0;
    readonly sm: 640;
    readonly md: 768;
    readonly lg: 1024;
    readonly xl: 1280;
    readonly '2xl': 1536;
};
/**
 * Fragmento listo para `createTheme({ breakpoints: MUI_BREAKPOINTS })`.
 *
 * Es **opt-in**: sin esto, MUI usa sus propios defaults (600/900/1200/1536),
 * que no coinciden con Tailwind. Adoptarlo alinea una app MUI con el resto del
 * ecosistema, pero mueve los puntos de quiebre existentes — revisar visualmente
 * antes de subirlo a producción.
 */
export declare const MUI_BREAKPOINTS: {
    readonly values: {
        readonly xs: 0;
        readonly sm: 640;
        readonly md: 768;
        readonly lg: 1024;
        readonly xl: 1280;
        readonly '2xl': 1536;
    };
};
export declare const AI4U_DESIGN_TOKENS: {
    readonly palette: {
        readonly mintCream: "#EAF4EB";
        readonly erieBlack: "#171717";
        readonly hotOrange: "#FF6E00";
        readonly moderateBlue: "#3DAED1";
        readonly cadetGray: "#94989B";
        readonly white: "#FFFFFF";
        readonly black: "#171717";
        readonly extended: {
            readonly neonBlaze: "#ff6e00";
            readonly digitalCoral: "#FF7477";
            readonly frostSignal: "#DFF7EB";
            readonly grapheneBlack: "#0A0A0A";
            readonly quantumBlue: "#1FA9F6";
            readonly techSlate: "#7D848B";
            readonly cyberOlive: "#eaf4eb";
            readonly deepNeuralTeal: "#2B7A78";
        };
        readonly gray: {
            readonly 50: "#F9F9F9";
            readonly 100: "#F5F5F5";
            readonly 200: "#E5E5E5";
            readonly 300: "#D4D4D4";
            readonly 400: "#A3A3A3";
            readonly 500: "#737373";
            readonly 600: "#525252";
            readonly 700: "#404040";
            readonly 800: "#2A2A2A";
            readonly 900: "#171717";
        };
        readonly tints: {
            readonly hotOrange5: "rgba(255, 110, 0, 0.05)";
            readonly hotOrange8: "rgba(255, 110, 0, 0.08)";
            readonly hotOrange30: "rgba(255, 110, 0, 0.30)";
            readonly moderateBlue4: "rgba(61, 174, 209, 0.04)";
            readonly moderateBlue8: "rgba(61, 174, 209, 0.08)";
            readonly moderateBlue15: "rgba(61, 174, 209, 0.15)";
            readonly erieBlack8: "rgba(23, 23, 23, 0.08)";
            readonly erieBlack10: "rgba(23, 23, 23, 0.10)";
            readonly erieBlack20: "rgba(23, 23, 23, 0.20)";
            readonly erieBlack30: "rgba(23, 23, 23, 0.30)";
            readonly mintCream60: "rgba(234, 244, 235, 0.60)";
        };
        readonly semantic: {
            readonly success: "#3DAED1";
            readonly danger: "#FF6E00";
            readonly info: "#3DAED1";
            readonly warning: "#FF6E00";
        };
        readonly tamaprint: {
            readonly primary: "#00ADEF";
            readonly primaryDark: "#0082C8";
            readonly primaryLight: "#33BFFF";
            readonly dark: "#231F20";
            readonly primary8: "rgba(0, 173, 239, 0.08)";
            readonly primary15: "rgba(0, 173, 239, 0.15)";
            readonly primary25: "rgba(0, 173, 239, 0.25)";
            readonly primary40: "rgba(0, 173, 239, 0.40)";
        };
        readonly slate: {
            readonly 50: "#F8FAFC";
            readonly 100: "#F1F5F9";
            readonly 200: "#E2E8F0";
            readonly 300: "#CBD5E1";
            readonly 400: "#94A3B8";
            readonly 500: "#64748B";
            readonly 600: "#475569";
            readonly 700: "#334155";
            readonly 800: "#1E293B";
            readonly 900: "#0F172A";
        };
        readonly telemetry: {
            readonly online: "#22C55E";
            readonly offline: "#EF4444";
            readonly starting: "#F59E0B";
            readonly checking: "#94A3B8";
            readonly idle: "#A3A3A3";
        };
        readonly accentColors: {
            readonly orange: "#FF6E00";
            readonly mint: "#EAF4EB";
            readonly blue: "#3DAED1";
            readonly cadetGray: "#94989B";
        };
        readonly accent: "#FF6E00";
        readonly success: "#3DAED1";
        readonly error: "#FF6E00";
        readonly warning: "#FF6E00";
        readonly info: "#3DAED1";
    };
    readonly contrast: {
        readonly light: {
            readonly background: "#EAF4EB";
            readonly surface: "#FFFFFF";
            readonly text: {
                readonly primary: "#171717";
                readonly secondary: "#94989B";
                readonly disabled: "#A3A3A3";
            };
            readonly border: "rgba(23, 23, 23, 0.10)";
            readonly divider: "rgba(23, 23, 23, 0.10)";
        };
        readonly dark: {
            readonly background: "#171717";
            readonly surface: "#2A2A2A";
            readonly text: {
                readonly primary: "#FFFFFF";
                readonly secondary: "#94989B";
                readonly disabled: "#525252";
            };
            readonly border: "rgba(255, 255, 255, 0.12)";
            readonly divider: "rgba(255, 255, 255, 0.08)";
        };
    };
    readonly typography: {
        readonly fontFamily: {
            readonly primary: "\"Red Hat Display\", sans-serif";
            readonly code: "\"Necto Mono\", \"Space Mono\", monospace";
        };
        readonly fontWeight: {
            readonly light: 300;
            readonly regular: 400;
            readonly medium: 500;
            readonly semiBold: 700;
            readonly bold: 900;
        };
        readonly fontSize: {
            readonly xs: "0.75rem";
            readonly sm: "0.875rem";
            readonly base: "1rem";
            readonly lg: "1.25rem";
            readonly xl: "1.5rem";
            readonly '2xl': "2.25rem";
            readonly '3xl': "3.5rem";
            readonly '4xl': "5rem";
            readonly '5xl': "7rem";
            readonly '6xl': "9rem";
            readonly '7xl': "11rem";
        };
        readonly lineHeight: {
            readonly tight: 0.9;
            readonly snug: 1.1;
            readonly normal: 1.5;
            readonly relaxed: 1.8;
        };
        readonly letterSpacing: {
            readonly tighter: "-0.05em";
            readonly tight: "-0.02em";
            readonly normal: "0em";
            readonly wide: "0.05em";
            readonly wider: "0.1em";
            readonly widest: "0.2em";
        };
    };
    readonly textVariants: {
        readonly display: {
            readonly giant: {
                readonly fontSize: {
                    readonly xs: "3rem";
                    readonly md: "7rem";
                    readonly lg: "10rem";
                };
                readonly fontWeight: 900;
                readonly lineHeight: 0.85;
                readonly letterSpacing: "-0.05em";
            };
            readonly large: {
                readonly fontSize: {
                    readonly xs: "2.5rem";
                    readonly md: "5rem";
                    readonly lg: "7rem";
                };
                readonly fontWeight: 700;
                readonly lineHeight: 0.9;
                readonly letterSpacing: "-0.04em";
            };
            readonly medium: {
                readonly fontSize: {
                    readonly xs: "2rem";
                    readonly md: "3.5rem";
                    readonly lg: "5rem";
                };
                readonly fontWeight: 700;
                readonly lineHeight: 0.95;
                readonly letterSpacing: "-0.03em";
            };
            readonly small: {
                readonly fontSize: {
                    readonly xs: "1.5rem";
                    readonly md: "2.5rem";
                    readonly lg: "3.5rem";
                };
                readonly fontWeight: 700;
                readonly lineHeight: 1;
                readonly letterSpacing: "-0.02em";
            };
            readonly number: {
                readonly fontSize: {
                    readonly xs: "5rem";
                    readonly md: "12rem";
                    readonly lg: "18rem";
                };
                readonly fontWeight: 900;
                readonly lineHeight: 0.8;
                readonly letterSpacing: "-0.06em";
                readonly fontFamily: "\"Necto Mono\", \"Space Mono\", monospace";
            };
        };
        readonly label: {
            readonly main: {
                readonly fontFamily: "\"Necto Mono\", \"Space Mono\", monospace";
                readonly fontSize: "0.875rem";
                readonly fontWeight: 400;
                readonly letterSpacing: "0.1em";
                readonly opacity: 0.8;
            };
            readonly secondary: {
                readonly fontFamily: "\"Necto Mono\", \"Space Mono\", monospace";
                readonly fontSize: "0.75rem";
                readonly fontWeight: 400;
                readonly letterSpacing: "0.05em";
                readonly textTransform: "lowercase";
                readonly opacity: 0.6;
            };
        };
        readonly body: {
            readonly large: {
                readonly fontSize: {
                    readonly xs: "1.125rem";
                    readonly md: "1.25rem";
                };
                readonly fontWeight: 400;
                readonly lineHeight: 1.5;
                readonly letterSpacing: "-0.01em";
            };
            readonly regular: {
                readonly fontSize: {
                    readonly xs: "1rem";
                    readonly md: "1.125rem";
                };
                readonly fontWeight: 400;
                readonly lineHeight: 1.6;
                readonly letterSpacing: "-0.01em";
            };
            readonly small: {
                readonly fontSize: "0.875rem";
                readonly fontWeight: 400;
                readonly lineHeight: 1.5;
            };
        };
        readonly ui: {
            readonly button: {
                readonly fontSize: "0.875rem";
                readonly fontWeight: 700;
                readonly lineHeight: 1;
                readonly letterSpacing: "0.15em";
            };
            readonly caption: {
                readonly fontSize: "0.75rem";
                readonly fontWeight: 400;
                readonly lineHeight: 1.2;
            };
            readonly code: {
                readonly fontSize: "0.875rem";
                readonly fontWeight: 400;
                readonly lineHeight: 1.4;
                readonly fontFamily: "\"Necto Mono\", \"Space Mono\", monospace";
            };
        };
    };
    readonly spacing: {
        readonly base: 8;
        readonly spacing: {
            readonly 0: 0;
            readonly 1: 8;
            readonly 2: 16;
            readonly 3: 24;
            readonly 4: 32;
            readonly 5: 40;
            readonly 6: 48;
            readonly 8: 64;
            readonly 10: 80;
            readonly 12: 96;
            readonly 16: 128;
            readonly 20: 160;
            readonly 24: 192;
            readonly 32: 256;
            readonly 40: 320;
            readonly 48: 384;
            readonly 56: 448;
            readonly 64: 512;
        };
        readonly borderRadius: {
            readonly none: 0;
            readonly sm: 4;
            readonly default: 8;
            readonly md: 12;
            readonly lg: 16;
            readonly xl: 24;
            readonly '2xl': 32;
            readonly full: 9999;
        };
        readonly borderWidth: {
            readonly 0: 0;
            readonly default: 1;
            readonly 2: 2;
            readonly thick: 4;
            readonly heavy: 6;
        };
        readonly sizes: {
            readonly iconXs: 16;
            readonly iconSm: 20;
            readonly iconMd: 24;
            readonly iconLg: 32;
            readonly iconXl: 40;
            readonly buttonSm: 40;
            readonly buttonMd: 48;
            readonly buttonLg: 56;
            readonly inputSm: 40;
            readonly inputMd: 48;
            readonly inputLg: 56;
            readonly cardSm: 240;
            readonly cardMd: 320;
            readonly cardLg: 400;
        };
    };
    readonly shadows: {
        readonly none: "0 0 #0000";
        readonly sm: "0 1px 2px rgba(23, 23, 23, 0.05)";
        readonly default: "0 4px 12px rgba(23, 23, 23, 0.08)";
        readonly md: "0 4px 12px rgba(23, 23, 23, 0.08)";
        readonly lg: "0 8px 24px rgba(23, 23, 23, 0.10)";
        readonly drawer: "-4px 0 24px rgba(0, 0, 0, 0.12)";
        readonly dark: {
            readonly sm: "0 1px 2px rgba(0, 0, 0, 0.20)";
            readonly default: "0 4px 12px rgba(0, 0, 0, 0.30)";
            readonly md: "0 4px 12px rgba(0, 0, 0, 0.30)";
        };
        readonly ai4u: {
            readonly card: "0 4px 12px rgba(23, 23, 23, 0.08)";
            readonly button: "0 1px 2px rgba(23, 23, 23, 0.05)";
            readonly glow: "none";
        };
    };
    readonly borders: {
        readonly width: {
            readonly none: "0";
            readonly thin: "1px";
            readonly medium: "2px";
            readonly thick: "4px";
        };
        readonly radius: {
            readonly none: "0px";
            readonly sm: "0.5rem";
            readonly md: "1rem";
            readonly lg: "1rem";
            readonly full: "9999px";
        };
    };
    readonly zIndex: {
        readonly dropdown: 1000;
        readonly sticky: 1020;
        readonly fixed: 1030;
        readonly modalBackdrop: 1040;
        readonly modal: 1050;
        readonly popover: 1060;
        readonly tooltip: 1070;
        readonly toast: 1080;
    };
    readonly transitions: {
        readonly duration: {
            readonly fast: "100ms";
            readonly normal: "200ms";
            readonly slow: "400ms";
        };
        readonly easing: {
            readonly linear: "linear";
            readonly step: "steps(4, end)";
            readonly easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)";
        };
    };
    readonly breakpoints: {
        readonly xs: 0;
        readonly sm: 640;
        readonly md: 768;
        readonly lg: 1024;
        readonly xl: 1280;
        readonly '2xl': 1536;
    };
};
export declare const createAI4UTokens: (mode: "light" | "dark") => {
    colors: {
        mode: "light" | "dark";
        primary: {
            main: "#171717";
            contrastText: "#FFFFFF";
        };
        background: {
            default: "#EAF4EB" | "#171717";
            paper: "#FFFFFF" | "#2A2A2A";
        };
        text: {
            primary: "#171717" | "#FFFFFF";
            secondary: "#94989B";
            disabled: "#A3A3A3" | "#525252";
        };
        divider: "rgba(23, 23, 23, 0.10)" | "rgba(255, 255, 255, 0.08)";
        border: "rgba(23, 23, 23, 0.10)" | "rgba(255, 255, 255, 0.12)";
    };
    helpers: {
        border: {
            primary: "rgba(23, 23, 23, 0.10)" | "rgba(255, 255, 255, 0.12)";
            secondary: "rgba(23, 23, 23, 0.10)" | "rgba(255, 255, 255, 0.08)";
        };
        background: {
            primary: "#EAF4EB" | "#171717";
            secondary: "#171717" | "#F9F9F9";
        };
        text: {
            primary: "#171717" | "#FFFFFF";
            secondary: "#94989B";
        };
    };
    palette: {
        readonly mintCream: "#EAF4EB";
        readonly erieBlack: "#171717";
        readonly hotOrange: "#FF6E00";
        readonly moderateBlue: "#3DAED1";
        readonly cadetGray: "#94989B";
        readonly white: "#FFFFFF";
        readonly black: "#171717";
        readonly extended: {
            readonly neonBlaze: "#ff6e00";
            readonly digitalCoral: "#FF7477";
            readonly frostSignal: "#DFF7EB";
            readonly grapheneBlack: "#0A0A0A";
            readonly quantumBlue: "#1FA9F6";
            readonly techSlate: "#7D848B";
            readonly cyberOlive: "#eaf4eb";
            readonly deepNeuralTeal: "#2B7A78";
        };
        readonly gray: {
            readonly 50: "#F9F9F9";
            readonly 100: "#F5F5F5";
            readonly 200: "#E5E5E5";
            readonly 300: "#D4D4D4";
            readonly 400: "#A3A3A3";
            readonly 500: "#737373";
            readonly 600: "#525252";
            readonly 700: "#404040";
            readonly 800: "#2A2A2A";
            readonly 900: "#171717";
        };
        readonly tints: {
            readonly hotOrange5: "rgba(255, 110, 0, 0.05)";
            readonly hotOrange8: "rgba(255, 110, 0, 0.08)";
            readonly hotOrange30: "rgba(255, 110, 0, 0.30)";
            readonly moderateBlue4: "rgba(61, 174, 209, 0.04)";
            readonly moderateBlue8: "rgba(61, 174, 209, 0.08)";
            readonly moderateBlue15: "rgba(61, 174, 209, 0.15)";
            readonly erieBlack8: "rgba(23, 23, 23, 0.08)";
            readonly erieBlack10: "rgba(23, 23, 23, 0.10)";
            readonly erieBlack20: "rgba(23, 23, 23, 0.20)";
            readonly erieBlack30: "rgba(23, 23, 23, 0.30)";
            readonly mintCream60: "rgba(234, 244, 235, 0.60)";
        };
        readonly semantic: {
            readonly success: "#3DAED1";
            readonly danger: "#FF6E00";
            readonly info: "#3DAED1";
            readonly warning: "#FF6E00";
        };
        readonly tamaprint: {
            readonly primary: "#00ADEF";
            readonly primaryDark: "#0082C8";
            readonly primaryLight: "#33BFFF";
            readonly dark: "#231F20";
            readonly primary8: "rgba(0, 173, 239, 0.08)";
            readonly primary15: "rgba(0, 173, 239, 0.15)";
            readonly primary25: "rgba(0, 173, 239, 0.25)";
            readonly primary40: "rgba(0, 173, 239, 0.40)";
        };
        readonly slate: {
            readonly 50: "#F8FAFC";
            readonly 100: "#F1F5F9";
            readonly 200: "#E2E8F0";
            readonly 300: "#CBD5E1";
            readonly 400: "#94A3B8";
            readonly 500: "#64748B";
            readonly 600: "#475569";
            readonly 700: "#334155";
            readonly 800: "#1E293B";
            readonly 900: "#0F172A";
        };
        readonly telemetry: {
            readonly online: "#22C55E";
            readonly offline: "#EF4444";
            readonly starting: "#F59E0B";
            readonly checking: "#94A3B8";
            readonly idle: "#A3A3A3";
        };
        readonly accentColors: {
            readonly orange: "#FF6E00";
            readonly mint: "#EAF4EB";
            readonly blue: "#3DAED1";
            readonly cadetGray: "#94989B";
        };
        readonly accent: "#FF6E00";
        readonly success: "#3DAED1";
        readonly error: "#FF6E00";
        readonly warning: "#FF6E00";
        readonly info: "#3DAED1";
    };
    contrast: {
        readonly light: {
            readonly background: "#EAF4EB";
            readonly surface: "#FFFFFF";
            readonly text: {
                readonly primary: "#171717";
                readonly secondary: "#94989B";
                readonly disabled: "#A3A3A3";
            };
            readonly border: "rgba(23, 23, 23, 0.10)";
            readonly divider: "rgba(23, 23, 23, 0.10)";
        };
        readonly dark: {
            readonly background: "#171717";
            readonly surface: "#2A2A2A";
            readonly text: {
                readonly primary: "#FFFFFF";
                readonly secondary: "#94989B";
                readonly disabled: "#525252";
            };
            readonly border: "rgba(255, 255, 255, 0.12)";
            readonly divider: "rgba(255, 255, 255, 0.08)";
        };
    };
    typography: {
        readonly fontFamily: {
            readonly primary: "\"Red Hat Display\", sans-serif";
            readonly code: "\"Necto Mono\", \"Space Mono\", monospace";
        };
        readonly fontWeight: {
            readonly light: 300;
            readonly regular: 400;
            readonly medium: 500;
            readonly semiBold: 700;
            readonly bold: 900;
        };
        readonly fontSize: {
            readonly xs: "0.75rem";
            readonly sm: "0.875rem";
            readonly base: "1rem";
            readonly lg: "1.25rem";
            readonly xl: "1.5rem";
            readonly '2xl': "2.25rem";
            readonly '3xl': "3.5rem";
            readonly '4xl': "5rem";
            readonly '5xl': "7rem";
            readonly '6xl': "9rem";
            readonly '7xl': "11rem";
        };
        readonly lineHeight: {
            readonly tight: 0.9;
            readonly snug: 1.1;
            readonly normal: 1.5;
            readonly relaxed: 1.8;
        };
        readonly letterSpacing: {
            readonly tighter: "-0.05em";
            readonly tight: "-0.02em";
            readonly normal: "0em";
            readonly wide: "0.05em";
            readonly wider: "0.1em";
            readonly widest: "0.2em";
        };
    };
    textVariants: {
        readonly display: {
            readonly giant: {
                readonly fontSize: {
                    readonly xs: "3rem";
                    readonly md: "7rem";
                    readonly lg: "10rem";
                };
                readonly fontWeight: 900;
                readonly lineHeight: 0.85;
                readonly letterSpacing: "-0.05em";
            };
            readonly large: {
                readonly fontSize: {
                    readonly xs: "2.5rem";
                    readonly md: "5rem";
                    readonly lg: "7rem";
                };
                readonly fontWeight: 700;
                readonly lineHeight: 0.9;
                readonly letterSpacing: "-0.04em";
            };
            readonly medium: {
                readonly fontSize: {
                    readonly xs: "2rem";
                    readonly md: "3.5rem";
                    readonly lg: "5rem";
                };
                readonly fontWeight: 700;
                readonly lineHeight: 0.95;
                readonly letterSpacing: "-0.03em";
            };
            readonly small: {
                readonly fontSize: {
                    readonly xs: "1.5rem";
                    readonly md: "2.5rem";
                    readonly lg: "3.5rem";
                };
                readonly fontWeight: 700;
                readonly lineHeight: 1;
                readonly letterSpacing: "-0.02em";
            };
            readonly number: {
                readonly fontSize: {
                    readonly xs: "5rem";
                    readonly md: "12rem";
                    readonly lg: "18rem";
                };
                readonly fontWeight: 900;
                readonly lineHeight: 0.8;
                readonly letterSpacing: "-0.06em";
                readonly fontFamily: "\"Necto Mono\", \"Space Mono\", monospace";
            };
        };
        readonly label: {
            readonly main: {
                readonly fontFamily: "\"Necto Mono\", \"Space Mono\", monospace";
                readonly fontSize: "0.875rem";
                readonly fontWeight: 400;
                readonly letterSpacing: "0.1em";
                readonly opacity: 0.8;
            };
            readonly secondary: {
                readonly fontFamily: "\"Necto Mono\", \"Space Mono\", monospace";
                readonly fontSize: "0.75rem";
                readonly fontWeight: 400;
                readonly letterSpacing: "0.05em";
                readonly textTransform: "lowercase";
                readonly opacity: 0.6;
            };
        };
        readonly body: {
            readonly large: {
                readonly fontSize: {
                    readonly xs: "1.125rem";
                    readonly md: "1.25rem";
                };
                readonly fontWeight: 400;
                readonly lineHeight: 1.5;
                readonly letterSpacing: "-0.01em";
            };
            readonly regular: {
                readonly fontSize: {
                    readonly xs: "1rem";
                    readonly md: "1.125rem";
                };
                readonly fontWeight: 400;
                readonly lineHeight: 1.6;
                readonly letterSpacing: "-0.01em";
            };
            readonly small: {
                readonly fontSize: "0.875rem";
                readonly fontWeight: 400;
                readonly lineHeight: 1.5;
            };
        };
        readonly ui: {
            readonly button: {
                readonly fontSize: "0.875rem";
                readonly fontWeight: 700;
                readonly lineHeight: 1;
                readonly letterSpacing: "0.15em";
            };
            readonly caption: {
                readonly fontSize: "0.75rem";
                readonly fontWeight: 400;
                readonly lineHeight: 1.2;
            };
            readonly code: {
                readonly fontSize: "0.875rem";
                readonly fontWeight: 400;
                readonly lineHeight: 1.4;
                readonly fontFamily: "\"Necto Mono\", \"Space Mono\", monospace";
            };
        };
    };
    spacing: {
        readonly base: 8;
        readonly spacing: {
            readonly 0: 0;
            readonly 1: 8;
            readonly 2: 16;
            readonly 3: 24;
            readonly 4: 32;
            readonly 5: 40;
            readonly 6: 48;
            readonly 8: 64;
            readonly 10: 80;
            readonly 12: 96;
            readonly 16: 128;
            readonly 20: 160;
            readonly 24: 192;
            readonly 32: 256;
            readonly 40: 320;
            readonly 48: 384;
            readonly 56: 448;
            readonly 64: 512;
        };
        readonly borderRadius: {
            readonly none: 0;
            readonly sm: 4;
            readonly default: 8;
            readonly md: 12;
            readonly lg: 16;
            readonly xl: 24;
            readonly '2xl': 32;
            readonly full: 9999;
        };
        readonly borderWidth: {
            readonly 0: 0;
            readonly default: 1;
            readonly 2: 2;
            readonly thick: 4;
            readonly heavy: 6;
        };
        readonly sizes: {
            readonly iconXs: 16;
            readonly iconSm: 20;
            readonly iconMd: 24;
            readonly iconLg: 32;
            readonly iconXl: 40;
            readonly buttonSm: 40;
            readonly buttonMd: 48;
            readonly buttonLg: 56;
            readonly inputSm: 40;
            readonly inputMd: 48;
            readonly inputLg: 56;
            readonly cardSm: 240;
            readonly cardMd: 320;
            readonly cardLg: 400;
        };
    };
    shadows: {
        readonly none: "0 0 #0000";
        readonly sm: "0 1px 2px rgba(23, 23, 23, 0.05)";
        readonly default: "0 4px 12px rgba(23, 23, 23, 0.08)";
        readonly md: "0 4px 12px rgba(23, 23, 23, 0.08)";
        readonly lg: "0 8px 24px rgba(23, 23, 23, 0.10)";
        readonly drawer: "-4px 0 24px rgba(0, 0, 0, 0.12)";
        readonly dark: {
            readonly sm: "0 1px 2px rgba(0, 0, 0, 0.20)";
            readonly default: "0 4px 12px rgba(0, 0, 0, 0.30)";
            readonly md: "0 4px 12px rgba(0, 0, 0, 0.30)";
        };
        readonly ai4u: {
            readonly card: "0 4px 12px rgba(23, 23, 23, 0.08)";
            readonly button: "0 1px 2px rgba(23, 23, 23, 0.05)";
            readonly glow: "none";
        };
    };
    borders: {
        readonly width: {
            readonly none: "0";
            readonly thin: "1px";
            readonly medium: "2px";
            readonly thick: "4px";
        };
        readonly radius: {
            readonly none: "0px";
            readonly sm: "0.5rem";
            readonly md: "1rem";
            readonly lg: "1rem";
            readonly full: "9999px";
        };
    };
    zIndex: {
        readonly dropdown: 1000;
        readonly sticky: 1020;
        readonly fixed: 1030;
        readonly modalBackdrop: 1040;
        readonly modal: 1050;
        readonly popover: 1060;
        readonly tooltip: 1070;
        readonly toast: 1080;
    };
    transitions: {
        readonly duration: {
            readonly fast: "100ms";
            readonly normal: "200ms";
            readonly slow: "400ms";
        };
        readonly easing: {
            readonly linear: "linear";
            readonly step: "steps(4, end)";
            readonly easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)";
        };
    };
    breakpoints: {
        readonly xs: 0;
        readonly sm: 640;
        readonly md: 768;
        readonly lg: 1024;
        readonly xl: 1280;
        readonly '2xl': 1536;
    };
};
export default AI4U_DESIGN_TOKENS;
