export declare const useColors: () => {
    mode: import('@mui/material').PaletteMode;
    effectiveMode: import('@mui/material').PaletteMode;
    surface: import('..').SurfaceType;
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
        readonly background: "#EAF4EB";
        readonly surface: "#FFFFFF";
        readonly text: {
            readonly primary: "#171717";
            readonly secondary: "#94989B";
            readonly disabled: "#A3A3A3";
        };
        readonly border: "rgba(23, 23, 23, 0.10)";
        readonly divider: "rgba(23, 23, 23, 0.10)";
    } | {
        readonly background: "#171717";
        readonly surface: "#2A2A2A";
        readonly text: {
            readonly primary: "#FFFFFF";
            readonly secondary: "#94989B";
            readonly disabled: "#525252";
        };
        readonly border: "rgba(255, 255, 255, 0.12)";
        readonly divider: "rgba(255, 255, 255, 0.08)";
    } | {
        readonly background: "#FFFFFF";
        readonly surface: "#FFFFFF";
        readonly text: {
            readonly primary: "#171717";
            readonly secondary: "#94989B";
            readonly disabled: "#A3A3A3";
        };
        readonly border: "rgba(23, 23, 23, 0.10)";
        readonly divider: "rgba(23, 23, 23, 0.10)";
        readonly effectiveMode: "light";
    } | {
        readonly background: "#FF6E00";
        readonly surface: "#FF6E00";
        readonly text: {
            readonly primary: "#FFFFFF";
            readonly secondary: "rgba(255,255,255,0.75)";
            readonly disabled: "rgba(255,255,255,0.45)";
        };
        readonly border: "rgba(255,255,255,0.30)";
        readonly divider: "rgba(255,255,255,0.20)";
        readonly effectiveMode: "dark";
    } | {
        readonly background: "#F1F5F9";
        readonly surface: "#FFFFFF";
        readonly text: {
            readonly primary: "#0F172A";
            readonly secondary: "#64748B";
            readonly disabled: "#94A3B8";
        };
        readonly border: "#E2E8F0";
        readonly divider: "#E2E8F0";
        readonly effectiveMode: "light";
    } | {
        readonly background: "#171717";
        readonly surface: "#1E1E1E";
        readonly text: {
            readonly primary: "#F1F5F9";
            readonly secondary: "#94A3B8";
            readonly disabled: "#64748B";
        };
        readonly border: "rgba(255, 255, 255, 0.07)";
        readonly divider: "rgba(255, 255, 255, 0.12)";
        readonly effectiveMode: "dark";
    };
    components: {
        readonly button: {
            readonly primary: {
                readonly background: "#171717";
                readonly text: "#FFFFFF";
                readonly hover: "#2A2A2A";
            };
            readonly secondary: {
                readonly background: "transparent";
                readonly text: "#171717";
                readonly border: "#171717";
                readonly hover: "#171717";
                readonly hoverText: "#FFFFFF";
            };
            readonly accent: {
                readonly background: "#FF6E00";
                readonly text: "#FFFFFF";
                readonly hover: "#E66400";
            };
            readonly ghost: {
                readonly background: "transparent";
                readonly text: "#171717";
                readonly hover: "rgba(23, 23, 23, 0.08)";
            };
            readonly outline: {
                readonly background: "transparent";
                readonly text: "#171717";
                readonly border: "rgba(23, 23, 23, 0.20)";
                readonly hover: "rgba(23, 23, 23, 0.08)";
            };
            readonly minimal: {
                readonly background: "transparent";
                readonly text: "#171717";
                readonly border: "none";
                readonly hover: "rgba(23, 23, 23, 0.08)";
            };
        };
        readonly card: {
            readonly light: {
                readonly background: "#EAF4EB";
                readonly text: "#171717";
                readonly border: "rgba(23, 23, 23, 0.10)";
            };
            readonly elevated: {
                readonly background: "#FFFFFF";
                readonly text: "#171717";
                readonly border: "rgba(23, 23, 23, 0.10)";
            };
            readonly dark: {
                readonly background: "#171717";
                readonly text: "#FFFFFF";
                readonly border: "rgba(255,255,255,0.08)";
            };
            readonly blue: {
                readonly background: "rgba(61, 174, 209, 0.08)";
                readonly text: "#171717";
                readonly border: "rgba(61, 174, 209, 0.15)";
            };
        };
    };
    helpers: {
        background: {
            primary: "#EAF4EB" | "#171717" | "#FF6E00" | "#FFFFFF" | "#F1F5F9";
            secondary: "#FF6E00" | "#FFFFFF" | "#2A2A2A" | "#1E1E1E";
            accent: string;
        };
        text: {
            primary: "#171717" | "#FFFFFF" | "#F1F5F9" | "#0F172A";
            secondary: "#94989B" | "#94A3B8" | "#64748B" | "rgba(255,255,255,0.75)";
            disabled: "#A3A3A3" | "#525252" | "#94A3B8" | "#64748B" | "rgba(255,255,255,0.45)";
            accent: "#171717" | "#FFFFFF";
            highContrast: string;
            mediumContrast: string;
            darkHighContrast: string;
            darkMediumContrast: string;
        };
        border: {
            primary: "rgba(23, 23, 23, 0.10)" | "#E2E8F0" | "rgba(255, 255, 255, 0.12)" | "rgba(255,255,255,0.30)" | "rgba(255, 255, 255, 0.07)";
            secondary: "rgba(23, 23, 23, 0.10)" | "#E2E8F0" | "rgba(255, 255, 255, 0.12)" | "rgba(255, 255, 255, 0.08)" | "rgba(255,255,255,0.20)";
            accent: "#A3A3A3" | "#525252";
        };
        state: {
            hover: string;
            selected: string;
            disabled: string;
        };
    };
    theme: import('@mui/material').Theme;
};
export declare const useComponentVariant: (componentType: "button" | "card", variant: string) => {
    readonly background: "#171717";
    readonly text: "#FFFFFF";
    readonly hover: "#2A2A2A";
} | {
    readonly background: "transparent";
    readonly text: "#171717";
    readonly border: "#171717";
    readonly hover: "#171717";
    readonly hoverText: "#FFFFFF";
} | {
    readonly background: "#FF6E00";
    readonly text: "#FFFFFF";
    readonly hover: "#E66400";
} | {
    readonly background: "transparent";
    readonly text: "#171717";
    readonly hover: "rgba(23, 23, 23, 0.08)";
} | {
    readonly background: "#EAF4EB";
    readonly text: "#171717";
    readonly border: "rgba(23, 23, 23, 0.10)";
} | {
    readonly background: "#FFFFFF";
    readonly text: "#171717";
    readonly border: "rgba(23, 23, 23, 0.10)";
} | {
    readonly background: "#171717";
    readonly text: "#FFFFFF";
    readonly border: "rgba(255,255,255,0.08)";
} | {
    readonly background: "rgba(61, 174, 209, 0.08)";
    readonly text: "#171717";
    readonly border: "rgba(61, 174, 209, 0.15)";
} | null;
export declare const useContrastPair: () => {
    mode: import('@mui/material').PaletteMode;
    light: {
        background: "#EAF4EB" | "#171717" | "#FF6E00" | "#FFFFFF" | "#F1F5F9";
        text: "#171717" | "#FFFFFF" | "#F1F5F9" | "#0F172A";
    };
    dark: {
        background: "#EAF4EB" | "#171717" | "#FF6E00" | "#FFFFFF" | "#F1F5F9";
        text: "#171717" | "#FFFFFF" | "#F1F5F9" | "#0F172A";
    };
};
