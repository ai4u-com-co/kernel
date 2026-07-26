import { default as React, SelectHTMLAttributes } from 'react';
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'ref'> {
    size?: 'small' | 'medium' | 'large';
    error?: boolean;
    children?: React.ReactNode;
    sx?: any;
}
export declare const Select: ({ size, error, sx, children, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export default Select;
