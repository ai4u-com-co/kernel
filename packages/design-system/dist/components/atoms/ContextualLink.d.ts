import { default as React, ElementType, ReactNode } from 'react';
export interface ContextualLinkProps {
    /** URL de destino. */
    href: string;
    variant?: 'subtle' | 'accent' | 'inline';
    children?: ReactNode;
    className?: string;
    ariaLabel?: string;
    /**
     * Componente de enlace del framework (ej: `Link` de next/link, `NavLink` de react-router-dom).
     * Si se omite, usa `<a>` nativo.
     *
     * @example
     * import NextLink from 'next/link';
     * <ContextualLink href="/servicios" LinkComponent={NextLink}>...</ContextualLink>
     */
    LinkComponent?: ElementType;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
declare const ContextualLink: React.FC<ContextualLinkProps>;
export default ContextualLink;
