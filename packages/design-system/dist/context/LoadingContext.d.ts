import { default as React, ReactNode } from 'react';
interface LoadingContextType {
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
    criticalImagesLoaded: boolean;
    setCriticalImagesLoaded: (loaded: boolean) => void;
}
interface LoadingProviderProps {
    children: ReactNode;
}
export declare const LoadingProvider: React.FC<LoadingProviderProps>;
export declare const useLoading: () => LoadingContextType;
export {};
