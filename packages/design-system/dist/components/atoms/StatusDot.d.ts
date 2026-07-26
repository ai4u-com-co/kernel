import { default as React } from 'react';
import { AI4U_PALETTE } from '../../tokens/palette';
export type TelemetryStatus = keyof typeof AI4U_PALETTE.telemetry;
interface StatusDotProps {
    status: TelemetryStatus;
    size?: number;
    pulse?: boolean;
    label?: string;
    className?: string;
}
/**
 * StatusDot — indicador de estado de servicio para dashboards de monitoreo.
 *
 * Usa la paleta `telemetry` (verde/rojo/ámbar), NO la paleta semántica de marca.
 *
 * @example
 * <StatusDot status="online" />
 * <StatusDot status="offline" label="No disponible" />
 */
declare const StatusDot: React.FC<StatusDotProps>;
export default StatusDot;
