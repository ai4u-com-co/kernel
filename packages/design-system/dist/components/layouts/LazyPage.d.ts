import { default as React } from 'react';
interface LazyPageProps {
    children?: React.ReactNode;
    fallback?: React.ReactNode;
}
declare const LazyPage: React.FC<LazyPageProps>;
export default LazyPage;
