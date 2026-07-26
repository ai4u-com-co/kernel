import { default as React } from 'react';
import { BoxProps } from '@mui/material';
interface GiantNumberProps extends BoxProps {
    children: React.ReactNode;
    numberVariant?: 'primary' | 'outline';
}
export declare const GiantNumber: ({ children, numberVariant, sx, ...props }: GiantNumberProps) => import("react/jsx-runtime").JSX.Element;
export default GiantNumber;
