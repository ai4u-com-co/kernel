import { default as React, ReactNode } from 'react';
import { CardProps as MuiCardProps } from '@mui/material';
interface CardProps extends Omit<MuiCardProps, 'variant'> {
    children?: ReactNode;
    variant?: 'default' | 'elevated' | 'outlined' | 'industrial' | 'dashboard';
    elevation?: number;
    showContent?: boolean;
    label?: string;
    sx?: any;
}
export declare const Card: ({ children, variant, elevation, showContent, label, sx, ...props }: CardProps) => React.JSX.Element;
export default Card;
