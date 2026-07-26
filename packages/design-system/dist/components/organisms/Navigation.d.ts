import { default as React } from 'react';
interface NavigationItem {
    id: string;
    label: string;
    href?: string;
    onClick?: () => void;
}
interface NavigationProps {
    items: NavigationItem[];
    activeItem?: string;
    onItemClick?: (item: NavigationItem) => void;
    variant?: 'horizontal' | 'vertical' | 'tabs';
    className?: string;
}
declare const Navigation: ({ items, activeItem, onItemClick, variant, className }: NavigationProps) => React.JSX.Element;
export default Navigation;
