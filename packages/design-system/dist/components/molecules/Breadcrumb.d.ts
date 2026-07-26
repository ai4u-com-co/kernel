import { default as React } from 'react';
interface BreadcrumbItem {
    name: string;
    path: string;
    current?: boolean;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    showHome?: boolean;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
