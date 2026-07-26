type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';
interface DiagnosticCTAProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    showIcon?: boolean;
    text?: string;
    className?: string;
    sx?: any;
}
export declare const DiagnosticCTA: ({ variant, size, showIcon, text, className, sx, }: DiagnosticCTAProps) => import("react/jsx-runtime").JSX.Element;
export default DiagnosticCTA;
