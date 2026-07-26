import { default as React } from 'react';
import { SxProps, Theme } from '@mui/material';
interface LazyImageProps {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    sx?: SxProps<Theme>;
    skeletonHeight?: string | number;
    skeletonWidth?: string | number;
    priority?: boolean;
}
declare const LazyImage: React.FC<LazyImageProps>;
export default LazyImage;
