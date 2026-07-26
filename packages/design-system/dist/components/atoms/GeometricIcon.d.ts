import { default as React } from 'react';
interface GeometricIconProps {
    type: 'arrow-up' | 'arrow-down' | 'arrow-right' | 'arrow-left' | 'plus' | 'minus' | 'circle' | 'square' | 'triangle' | 'cross' | 'line' | 'dot' | 'search' | 'clear' | 'check';
    size?: 'small' | 'medium' | 'large';
    color?: string;
    variant?: 'filled' | 'outline' | 'minimal';
    onClick?: () => void;
    sx?: any;
}
declare const GeometricIcon: React.FC<GeometricIconProps>;
export default GeometricIcon;
