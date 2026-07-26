import { default as React, ReactNode } from 'react';
interface BrandingProps {
    /** Slot para el logo (img o componente). */
    logo?: ReactNode;
    /** Título principal (uppercase, peso heavy). */
    title: string;
    /** Subtítulo (mono, uppercase, color secundario). */
    subtitle?: string;
    /** Alineación. Default `left`. */
    align?: 'left' | 'center';
    /** Tema de superficie. Default `dark`. */
    variant?: 'dark' | 'light';
    /** Color del título. Override del variant. */
    titleColor?: string;
    /** Color del subtítulo. Override del variant. */
    subtitleColor?: string;
}
/**
 * Branding — bloque de identidad reusable (logo + título + subtítulo).
 *
 * Se usa como header de DashboardSidebar, DashboardTopBar y pantallas de
 * auth/landing. Mantiene la jerarquía tipográfica del DS sin replicar
 * estilos por componente.
 *
 * @example
 * <Branding
 *   logo={<img src="/logo.svg" />}
 *   title="Mission Control"
 *   subtitle="Ecosistema IA · v1.0"
 * />
 */
declare const Branding: React.FC<BrandingProps>;
export default Branding;
