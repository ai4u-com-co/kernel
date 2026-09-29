/** "Hoy" en America/Bogota como YYYY-MM-DD. */
export declare function todayBogotaIso(): string;
/**
 * Fecha en America/Bogota, N días atrás de hoy, como YYYY-MM-DD.
 * Ancla al día de Bogotá (medianoche UTC de esa fecha) y resta N×86_400_000ms:
 * seguro porque Colombia no tiene horario de verano (offset fijo UTC-5).
 */
export declare function daysAgoBogotaIso(n: number): string;
/** Primer día (YYYY-MM-DD) del mes con offset `offsetMonths` respecto al mes actual en Bogotá (0 = mes actual, -1 = mes anterior). */
export declare function getFirstDayOfMonthBogota(offsetMonths?: number): string;
/** Último día (YYYY-MM-DD) del mes con offset `offsetMonths` respecto al mes actual en Bogotá (0 = mes actual, -1 = mes anterior). */
export declare function getLastDayOfMonthBogota(offsetMonths?: number): string;
/** Rango completo (1° a último día) del mes anterior al actual en Bogotá. */
export declare function getPreviousMonthRangeBogota(): {
    from: string;
    to: string;
};
/**
 * Trimestre calendario actual completo (límites de calendario, no "hasta
 * hoy" — igual que el mes actual: si hoy cae a mitad del trimestre, el `to`
 * queda en el futuro y es la fuente de datos la que trunca de forma natural).
 */
export declare function getCurrentQuarterRangeBogota(): {
    from: string;
    to: string;
};
/** Semestre calendario actual completo, mismo criterio que {@link getCurrentQuarterRangeBogota}. */
export declare function getCurrentSemesterRangeBogota(): {
    from: string;
    to: string;
};
/**
 * YTD: del 1 de enero al día de hoy en Bogotá — pensado para comparar contra
 * el año anterior (yoy), no contra el "periodo inmediatamente anterior"
 * (cruzaría el límite de año).
 */
export declare function getYtdRangeBogota(): {
    from: string;
    to: string;
};
