import { default as React } from 'react';
interface ImagePreloaderProps {
    images: string[];
    onAllLoaded?: () => void;
}
declare const ImagePreloader: React.FC<ImagePreloaderProps>;
export default ImagePreloader;
