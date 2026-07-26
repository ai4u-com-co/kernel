import { default as React } from 'react';
import { TelemetryStatus } from '../atoms/StatusDot';
import { DashboardIconId } from '../atoms/DashboardIcon';
interface ModuleCardProps {
    /** Identificador estable del módulo (sirve como key en listas). */
    id: string;
    /** Nombre visible del módulo. */
    name: string;
    /** Descripción corta del módulo. */
    description: string;
    /** Ícono del set DashboardIcon. */
    icon: DashboardIconId;
    /** Color de acento del módulo (HEX). Se usa para borde, badge de ícono y CTA. */
    accentColor: string;
    /** Estado actual del módulo. */
    status: TelemetryStatus;
    /** URL para abrir el módulo. Si null → no se renderiza CTA. */
    openUrl?: string | null;
    /** Si true, renderiza CTA como "Herramienta interna" (sin link). */
    isCli?: boolean;
    /** Etiqueta del CTA cuando online. Default "Abrir". */
    ctaLabel?: string;
}
/**
 * ModuleCard — tarjeta de módulo para dashboards de monitoreo (Mission Control).
 *
 * Estructura: accent bar + icon badge + nombre + status + descripción + CTA.
 * Consume StatusDot y DashboardIcon. Color de acento configurable por módulo.
 *
 * @example
 * <ModuleCard
 *   id="preflight"
 *   name="preFlight"
 *   description="Validación PDF con IA"
 *   icon="file-scan"
 *   accentColor="#3DAED1"
 *   status="online"
 *   openUrl="https://pre-flight-ai4u.vercel.app"
 * />
 */
declare const ModuleCard: React.FC<ModuleCardProps>;
export default ModuleCard;
