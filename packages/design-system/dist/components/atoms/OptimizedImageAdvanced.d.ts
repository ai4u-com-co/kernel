import { default as React } from 'react';
import { SxProps, Theme } from '@mui/material';
interface OptimizedImageAdvancedProps {
    imageName: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    sx?: SxProps<Theme>;
    skeletonHeight?: string | number;
    skeletonWidth?: string | number;
    priority?: boolean;
    size?: 'thumbnail' | 'small' | 'medium' | 'large' | 'original';
    format?: 'webp' | 'original';
    fallback?: string;
    preload?: boolean;
    showOptimizationInfo?: boolean;
    className?: string;
}
export declare const OptimizedImageAdvanced: React.FC<OptimizedImageAdvancedProps>;
export default OptimizedImageAdvanced;
