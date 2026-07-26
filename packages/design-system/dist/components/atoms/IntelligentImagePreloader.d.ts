import { default as React } from 'react';
interface IntelligentImagePreloaderProps {
    criticalImages: string[];
    importantImages: string[];
    backgroundImages: string[];
    onCriticalLoaded?: () => void;
    onImportantLoaded?: () => void;
    onAllLoaded?: () => void;
    showProgress?: boolean;
}
export declare const IntelligentImagePreloader: React.FC<IntelligentImagePreloaderProps>;
export default IntelligentImagePreloader;
