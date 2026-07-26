interface UseLazyImageOptions {
    threshold?: number;
    rootMargin?: string;
    priority?: boolean;
}
export declare const useLazyImage: (src: string, options?: UseLazyImageOptions) => {
    imgRef: import('react').RefObject<HTMLImageElement>;
    isLoaded: boolean;
    isInView: boolean;
    error: boolean;
    imageSrc: string;
};
export {};
