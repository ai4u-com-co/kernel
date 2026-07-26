import { default as React, ReactNode } from 'react';
interface DashboardTopBarProps {
    /** Slot para el logo de marca (img o componente). */
    logo?: ReactNode;
    /** Título principal del dashboard. */
    title: string;
    /** Subtítulo / meta (mono uppercase). */
    subtitle?: string;
    /** Slot para badges/indicadores secundarios (lado derecho, antes de actions). */
    badges?: ReactNode;
    /** Slot para botones de acción (lado derecho). */
    actions?: ReactNode;
}
/**
 * DashboardTopBar — barra superior de dashboards (Mission Control).
 *
 * Estructura: logo + divider + title/subtitle a la izquierda;
 * badges + actions a la derecha.
 *
 * @example
 * <DashboardTopBar
 *   logo={<img src="/logo.svg" />}
 *   title="Ecosistema IA"
 *   subtitle="12 módulos · 11 web · 1 CLI"
 *   actions={<Button>Actualizar</Button>}
 * />
 */
declare const DashboardTopBar: React.FC<DashboardTopBarProps>;
export default DashboardTopBar;
