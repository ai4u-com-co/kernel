import { default as React } from 'react';
import { SxProps, Theme } from '@mui/material';
interface ExpandableSectionProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    defaultExpanded?: boolean;
    variant?: 'minimal' | 'card' | 'bordered';
    showIcon?: boolean;
    sx?: SxProps<Theme>;
}
declare const ExpandableSection: ({ title, subtitle, children, defaultExpanded, variant, showIcon, sx, }: ExpandableSectionProps) => import("react/jsx-runtime").JSX.Element;
export default ExpandableSection;
