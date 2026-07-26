export interface ImageLightboxProps {
    src: string;
    alt?: string;
    open: boolean;
    onClose: () => void;
}
export declare const ImageLightbox: ({ src, alt, open, onClose }: ImageLightboxProps) => import("react/jsx-runtime").JSX.Element;
export default ImageLightbox;
