import { default as React, ReactNode } from 'react';
import { DashboardIconId } from '../atoms/DashboardIcon';
interface Pillar {
    label: string;
    icon: DashboardIconId;
    color: string;
}
interface VisionBannerProps {
    /** Etiqueta superior (chip mono). */
    label: string;
    /** Cuerpo del banner — puede incluir markup. */
    body: ReactNode;
    /** Pilares opcionales mostrados como chips bajo el cuerpo. */
    pillars?: Pillar[];
    /** Estado inicial. Default `true`. */
    defaultOpen?: boolean;
    /** Color de acento del bar lateral. Default hotOrange del DS. */
    accentColor?: string;
}
/**
 * VisionBanner — banner colapsable de misión/visión para dashboards.
 *
 * Estructura: header con barra lateral de acento + label + toggle,
 * cuerpo expandible con texto y chips opcionales de pilares.
 *
 * @example
 * <VisionBanner
 *   label="Nuestra Misión"
 *   body={<>Construir...</>}
 *   pillars={[{ label: "Valor", icon: "diamond", color: "#3DAED1" }]}
 * />
 */
declare const VisionBanner: React.FC<VisionBannerProps>;
export default VisionBanner;
