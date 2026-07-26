import { default as React } from 'react';
interface ServiceCrossLinkProps {
    serviceName: string;
    serviceSlug: string;
    description?: string;
    caseStudy?: {
        client: string;
        sector: string;
        slug: string;
    };
    variant?: 'minimal' | 'detailed';
    className?: string;
}
/**
 * ServiceCrossLink - Enlaces cruzados entre servicios y casos
 *
 * Conecta servicios con casos de uso de forma contextual
 * Optimizado para SEO y distribución semántica de enlaces
 *
 * @example
 * <ServiceCrossLink
 *   serviceName="SuperAI Empresarial"
 *   serviceSlug="superai-empresarial"
 *   caseStudy={{ client: "True", sector: "Fashion", slug: "fashion" }}
 * />
 */
declare const ServiceCrossLink: React.FC<ServiceCrossLinkProps>;
export default ServiceCrossLink;
