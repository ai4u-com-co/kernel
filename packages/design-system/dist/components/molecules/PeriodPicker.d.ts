import { default as React } from 'react';
export interface PeriodPreset {
    id: string;
    label: string;
    /** Rango que resuelve este preset. Puede ser estático o (para presets relativos a "hoy", como "mes actual") una función evaluada al hacer click. */
    range: {
        from: string;
        to: string;
    } | (() => {
        from: string;
        to: string;
    });
}
export interface PeriodPickerProps {
    presets: PeriodPreset[];
    activePresetId: string;
    onPresetChange: (id: string) => void;
    /** ISO YYYY-MM-DD */
    fromDate: string;
    /** ISO YYYY-MM-DD */
    toDate: string;
    onFromChange: (v: string) => void;
    onToChange: (v: string) => void;
    minDate?: string;
    maxDate?: string;
    /** Muestra los dos inputs de rango custom. Default `true`. */
    showCustomRange?: boolean;
    disabled?: boolean;
}
/**
 * Pills de preset + (opcional) dos inputs de fecha para rango custom. No
 * conoce semántica de negocio ("mes actual", anclas de fecha, etc.) — eso
 * vive en `presets` (definidos por quien lo consume, ver `dateBogota.ts` para
 * las utilidades ancladas a America/Bogota que arman esos rangos). Al hacer
 * click en un preset, resuelve `preset.range` y emite `fromDate`/`toDate`
 * (además de `activePresetId`) — así el consumidor no repite esa lógica.
 * Editar los inputs de rango custom solo emite `fromDate`/`toDate`, sin tocar
 * `activePresetId` (el consumidor decide si eso implica "desactivar" el
 * preset activo).
 */
export declare const PeriodPicker: ({ presets, activePresetId, onPresetChange, fromDate, toDate, onFromChange, onToChange, minDate, maxDate, showCustomRange, disabled, }: PeriodPickerProps) => React.JSX.Element;
export default PeriodPicker;
