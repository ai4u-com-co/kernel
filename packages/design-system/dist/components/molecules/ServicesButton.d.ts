type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';
interface ServicesButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    showIcon?: boolean;
    text?: string;
    className?: string;
    sx?: any;
}
export declare const ServicesButton: ({ variant, size, showIcon, text, className, sx, }: ServicesButtonProps) => import("react/jsx-runtime").JSX.Element;
export default ServicesButton;
