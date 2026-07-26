interface UseImageOptimizationOptions {
    priority?: boolean;
    size?: 'thumbnail' | 'small' | 'medium' | 'large' | 'original';
    format?: 'webp' | 'original';
    fallback?: string;
    preload?: boolean;
}
export declare const useImageOptimization: (imageName: string, options?: UseImageOptimizationOptions) => {
    src: string;
    isLoaded: boolean;
    error: boolean;
    format: string;
    size: string;
    supportsWebP: boolean;
    isLoading: boolean;
};
export declare const useImagePreloader: (imageNames: string[]) => {
    loadedImages: string[];
    totalImages: number;
    progress: number;
    isComplete: boolean;
};
export declare const useImageOptimizationInfo: (imageName: string) => {
    originalSize?: number;
    webpSize?: number;
    savings?: number;
    sizes?: {
        [key: string]: {
            width: number;
            height: number;
            size: number;
        };
    };
} | null;
export {};
