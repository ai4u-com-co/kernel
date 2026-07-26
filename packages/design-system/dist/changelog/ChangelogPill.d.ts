export interface ChangelogPillProps {
    /**
     * clientId / tenant registrado en el servicio (ej. "tamaprint", "flexoimpresos").
     * Requerido — el sistema es multitenant, no hay tenant por defecto.
     * Cada app lo provee desde su propia config/env.
     */
    client: string;
    /** appId registrado en el servicio (ej. "kpis", "orderloader"). Requerido. */
    app: string;
    /** URL del servicio central. Por defecto el de producción. */
    serviceUrl?: string;
    /** Cantidad de entradas a listar en el popover. */
    limit?: number;
    /** Tema visual. Por defecto "light". */
    mode?: 'light' | 'dark';
    /** Alineación del popover respecto al botón. Por defecto 'right' (crece a la izquierda). */
    align?: 'left' | 'right';
}
/**
 * Pill de changelog brutalista, MUI-free (React + inline styles).
 * Lee del servicio central (GET público) y muestra el historial en un popover.
 * Multitenant: `client` y `app` son requeridos.
 */
export declare const ChangelogPill: ({ client, app, serviceUrl, limit, mode, align, }: ChangelogPillProps) => import("react/jsx-runtime").JSX.Element | null;
export default ChangelogPill;
