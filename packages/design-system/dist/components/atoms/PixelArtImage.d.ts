import { default as React } from 'react';
import { BoxProps } from '@mui/material';
interface PixelArtImageProps extends Omit<BoxProps, 'component'> {
    src: string;
    pixelArtSrc: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    transitionDuration?: number;
}
declare const PixelArtImage: React.FC<PixelArtImageProps>;
export default PixelArtImage;
