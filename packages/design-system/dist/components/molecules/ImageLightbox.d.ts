import { default as React } from 'react';
export interface ImageLightboxProps {
    src: string;
    alt?: string;
    open: boolean;
    onClose: () => void;
}
export declare const ImageLightbox: ({ src, alt, open, onClose }: ImageLightboxProps) => React.JSX.Element;
export default ImageLightbox;
