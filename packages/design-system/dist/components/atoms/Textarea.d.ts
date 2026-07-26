import { default as React, TextareaHTMLAttributes } from 'react';
export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'ref'> {
    error?: boolean;
    scrollIntoViewOnFocus?: boolean;
    sx?: any;
}
export declare const Textarea: ({ error, scrollIntoViewOnFocus, sx, onFocus, rows, ...props }: TextareaProps) => React.JSX.Element;
export default Textarea;
