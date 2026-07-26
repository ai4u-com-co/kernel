import { default as React } from 'react';
import { BoxProps } from '@mui/material';
interface PixelArtFilterProps extends Omit<BoxProps, 'component'> {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    transitionDuration?: number;
    pixelSize?: number;
}
declare const PixelArtFilter: React.FC<PixelArtFilterProps>;
export default PixelArtFilter;
