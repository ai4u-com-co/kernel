import { default as React } from 'react';
interface ProgressiveContentProps {
    summary: React.ReactNode;
    details: React.ReactNode;
    showDetails?: boolean;
    onToggle?: (expanded: boolean) => void;
    variant?: 'inline' | 'separated' | 'card';
    maxHeight?: number;
}
declare const ProgressiveContent: ({ summary, details, showDetails, onToggle, variant, maxHeight }: ProgressiveContentProps) => import("react/jsx-runtime").JSX.Element;
export default ProgressiveContent;
