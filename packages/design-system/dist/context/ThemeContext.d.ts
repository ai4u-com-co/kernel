import { default as React, ReactNode } from 'react';
import { PaletteMode } from '@mui/material/styles';
interface ThemeContextType {
    mode: PaletteMode;
    toggleColorMode: () => void;
}
export declare const ColorModeContext: React.Context<ThemeContextType>;
export declare const useColorMode: () => ThemeContextType;
export declare const ThemeProvider: React.FC<{
    children?: ReactNode;
}>;
export default ThemeProvider;
