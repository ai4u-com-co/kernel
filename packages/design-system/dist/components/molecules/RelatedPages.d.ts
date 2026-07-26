import { default as React } from 'react';
interface RelatedPageItem {
    href: string;
    label: string;
    context?: string;
    trackingLabel?: string;
}
interface RelatedPagesProps {
    pages: RelatedPageItem[];
    title?: string;
    variant?: 'horizontal' | 'vertical';
    className?: string;
}
/**
 * RelatedPages - Widget sutil de páginas relacionadas
 *
 * Máximo 3 enlaces con contexto semántico claro
 * Diseño hipermegaminimalista con spacing generoso
 * Optimizado para SEO y distribución de link juice
 *
 * @example
 * <RelatedPages
 *   title="También podrías estar interesado en:"
 *   pages={[
 *     { to: '/servicios', label: 'Nuestros servicios', context: 'Conoce qué ofrecemos' },
 *     { to: '/casos-de-uso', label: 'Casos reales', context: 'Ve resultados comprobables' }
 *   ]}
 * />
 */
declare const RelatedPages: React.FC<RelatedPagesProps>;
export default RelatedPages;
