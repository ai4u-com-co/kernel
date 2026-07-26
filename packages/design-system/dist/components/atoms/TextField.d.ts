import { InputHTMLAttributes } from 'react';
export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'ref'> {
    size?: 'small' | 'medium' | 'large';
    error?: boolean;
    sx?: any;
}
export declare const TextField: ({ size, error, sx, ...props }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export default TextField;
