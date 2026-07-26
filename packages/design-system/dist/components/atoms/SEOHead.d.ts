import { default as React } from 'react';
export interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string;
    /** URL canónica completa. En Next.js App Router usa `metadata.alternates.canonical` en su lugar. */
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object;
    noIndex?: boolean;
    noFollow?: boolean;
}
/**
 * SEOHead — inyecta meta tags en SPAs (react-helmet-async).
 *
 * En Next.js App Router NO uses este componente: declara `export const metadata`
 * o `generateMetadata()` en el layout/page directamente.
 * Usa `buildSEOMetadata()` para obtener un objeto compatible con el metadata API de Next.js.
 */
declare const SEOHead: React.FC<SEOHeadProps>;
/**
 * Devuelve un objeto compatible con `metadata` de Next.js App Router.
 *
 * @example
 * // app/page.tsx
 * export const metadata = buildSEOMetadata({ title: 'Inicio', description: '...' });
 */
export declare const buildSEOMetadata: (props?: SEOHeadProps) => {
    openGraph: {
        images: {
            url: string;
        }[];
        siteName: string;
        locale: string;
        url?: string | undefined;
        title: string;
        description: string;
        type: "website";
    };
    twitter: {
        card: "summary_large_image";
        title: string;
        description: string;
        images: string[];
        site: string;
    };
    alternates?: {
        canonical: string;
    } | undefined;
    robots: {
        index: boolean;
        follow: boolean;
        googleBot: {
            index: boolean;
            follow: boolean;
        };
    };
    keywords?: string | undefined;
    title: string;
    description: string;
};
export default SEOHead;
