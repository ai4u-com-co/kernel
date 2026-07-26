import { default as React, ReactNode } from 'react';
import { TelemetryStatus } from '../atoms/StatusDot';
import { DashboardIconId } from '../atoms/DashboardIcon';
export interface SidebarNavItem {
    id: string;
    name: string;
    href: string;
    icon: DashboardIconId;
    hint?: string;
    external?: boolean;
    status?: TelemetryStatus;
}
export interface SidebarGroup {
    id: string;
    label: string;
    items: SidebarNavItem[];
}
export interface SidebarStat {
    label: string;
    value: number | string;
    color?: string;
}
interface DashboardSidebarProps {
    /** Header de marca (logo + titulo + subtitulo). */
    branding: {
        logo?: ReactNode;
        title: string;
        subtitle?: string;
    };
    /** Badge de estado del sistema (chip con dot). */
    statusBadge?: {
        status: TelemetryStatus;
        label: string;
    };
    /** Grupos de navegación. */
    groups: SidebarGroup[];
    /** Stats compactas (grilla 2 columnas). */
    stats?: SidebarStat[];
    /** Reloj / footer textual. */
    clock?: {
        time: string;
        date?: string;
    };
    /** Firma de "powered by". */
    signature?: {
        logo?: ReactNode;
        caption: string;
        label: string;
        accentColor?: string;
    };
    /** Width en px. Default 252. */
    width?: number;
}
/**
 * DashboardSidebar — sidebar oscuro de navegación para dashboards de monitoreo.
 *
 * Estructura: branding · status badge · grupos de nav (con dot por item) ·
 * stats grid · clock · signature.
 *
 * Superficie oscura fija (AI4U_PALETTE.erieBlack), independiente del tema
 * global del dashboard.
 *
 * @example
 * <DashboardSidebar
 *   branding={{ logo: <img src="/logo.svg" />, title: "Mission Control" }}
 *   groups={[{ id: "prod", label: "Producción", items: [...] }]}
 * />
 */
declare const DashboardSidebar: React.FC<DashboardSidebarProps>;
export default DashboardSidebar;
