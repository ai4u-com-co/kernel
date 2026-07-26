import { default as React } from 'react';
type IconType = 'arrow-up' | 'arrow-down' | 'arrow-right' | 'arrow-left' | 'plus' | 'minus' | 'circle' | 'square' | 'triangle' | 'cross' | 'line' | 'dot';
interface MetricCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    iconType?: IconType;
    trend?: 'up' | 'down' | 'neutral';
    size?: 'compact' | 'normal' | 'large';
    onClick?: () => void;
    label?: string;
}
declare const MetricCard: React.FC<MetricCardProps>;
export default MetricCard;
