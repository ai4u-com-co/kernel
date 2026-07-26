export declare const TYPOGRAPHY_TOKENS: {
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
export declare const TEXT_VARIANTS: {
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
export declare const TYPOGRAPHY_UTILITIES: {
    readonly text: {
        readonly display: "font-black leading-none tracking-tighter";
        readonly heading: "font-bold leading-tight";
        readonly body: "font-normal leading-relaxed";
        readonly label: "font-mono text-sm leading-normal tracking-widest";
    };
};
export type TypographySize = keyof typeof TYPOGRAPHY_TOKENS.fontSize;
export type TypographyWeight = keyof typeof TYPOGRAPHY_TOKENS.fontWeight;
export type TypographyVariant = keyof typeof TEXT_VARIANTS;
