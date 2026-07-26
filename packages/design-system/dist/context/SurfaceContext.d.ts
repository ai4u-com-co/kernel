import { default as React, ReactNode } from 'react';
import { SurfaceType } from '../tokens/palette';
interface SurfaceContextType {
    surface: SurfaceType;
}
interface SurfaceProviderProps {
    children: ReactNode;
    surface?: SurfaceType;
}
export declare const SurfaceProvider: React.FC<SurfaceProviderProps>;
export declare const useSurface: () => SurfaceContextType;
export {};
