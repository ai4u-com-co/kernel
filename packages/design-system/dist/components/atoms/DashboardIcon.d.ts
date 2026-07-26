import { default as React } from 'react';
export type DashboardIconId = 'file-scan' | 'package' | 'grid' | 'tag' | 'clipboard-list' | 'landmark' | 'refresh-cw' | 'diamond' | 'trending-up' | 'users' | 'rotate-cw' | 'power' | 'terminal' | 'external-link' | 'file-plus' | 'calendar' | 'logout';
declare const SIZE_MAP: {
    readonly xs: 14;
    readonly sm: 16;
    readonly md: 20;
    readonly lg: 24;
    readonly xl: 32;
};
interface DashboardIconProps {
    id: DashboardIconId;
    size?: keyof typeof SIZE_MAP | number;
    color?: string;
    strokeWidth?: number;
}
/**
 * DashboardIcon — set de íconos línea para dashboards operativos de Tamaprint.
 *
 * Complementa a GeometricIcon (shapes abstractos AI4U). Aquí viven íconos
 * funcionales (file, terminal, calendar, etc.) usados en NavItem y ModuleCard.
 *
 * @example
 * <DashboardIcon id="terminal" size="md" />
 * <DashboardIcon id="package" color="#3DAED1" />
 */
declare const DashboardIcon: React.FC<DashboardIconProps>;
export default DashboardIcon;
