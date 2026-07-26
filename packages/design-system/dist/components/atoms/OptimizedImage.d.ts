import { default as React } from 'react';
interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    sx?: any;
    priority?: boolean;
    fallback?: string;
}
declare const OptimizedImage: React.FC<OptimizedImageProps>;
export default OptimizedImage;
