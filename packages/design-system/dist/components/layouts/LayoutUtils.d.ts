import { default as React, ReactNode } from 'react';
interface PageLayoutProps {
    children?: ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    variant?: 'default' | 'glassmorphism' | 'futuristic';
}
interface SectionProps {
    children: ReactNode;
    title?: string;
    description?: string;
    className?: string;
    variant?: 'default' | 'glassmorphism' | 'futuristic';
}
interface ContainerProps {
    children?: ReactNode;
    className?: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}
declare const PageLayout: ({ children, title, subtitle, className, variant }: PageLayoutProps) => React.JSX.Element;
declare const Section: ({ children, title, description, className, variant }: SectionProps) => React.JSX.Element;
declare const Container: ({ children, className, maxWidth, padding }: ContainerProps) => React.JSX.Element;
declare const Grid: ({ children, cols, gap, className }: {
    children: ReactNode;
    cols?: 1 | 2 | 3 | 4 | 6 | 12;
    gap?: "sm" | "md" | "lg" | "xl";
    className?: string;
}) => React.JSX.Element;
declare const Stack: ({ children, spacing, className }: {
    children: ReactNode;
    spacing?: "sm" | "md" | "lg" | "xl";
    className?: string;
}) => React.JSX.Element;
export { PageLayout, Section, Container, Grid, Stack };
export default PageLayout;
