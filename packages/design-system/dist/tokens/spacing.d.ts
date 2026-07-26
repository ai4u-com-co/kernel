export declare const SPACING_TOKENS: {
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
export declare const COMPONENT_SPACING: {
    readonly padding: {
        readonly button: {
            readonly sm: "1.25 2.5";
            readonly md: "1.5 3";
            readonly lg: "2 4";
        };
        readonly card: {
            readonly sm: 6;
            readonly md: 8;
            readonly lg: 12;
        };
        readonly input: {
            readonly sm: "1.25 2";
            readonly md: "1.5 2.5";
            readonly lg: "2 3";
        };
    };
    readonly margin: {
        readonly section: 12;
        readonly subsection: 8;
        readonly element: 4;
    };
    readonly layout: {
        readonly container: {
            readonly xs: 2;
            readonly sm: 3;
            readonly md: 4;
            readonly lg: 6;
        };
        readonly section: {
            readonly xs: 6;
            readonly sm: 8;
            readonly md: 10;
            readonly lg: 12;
        };
    };
};
export type SpacingSize = keyof typeof SPACING_TOKENS.spacing;
