// Utilidades de fecha ancladas a America/Bogota (UTC-5 fijo, Colombia no
// tiene horario de verano). Usar SIEMPRE estas en vez de `new Date()` crudo
// para cualquier fecha de negocio (filtros, rangos, envíos a SAP): la hora
// local del proceso que ejecuta el código (navegador o servidor Vercel, casi
// siempre en UTC) no es la hora de Bogotá — de noche en Colombia `new Date()`
// ya cayó en el día siguiente en UTC. Ese es el bug que este módulo corrige;
// no repetirlo.

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/** "Hoy" en America/Bogota como YYYY-MM-DD. */
export function todayBogotaIso(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Bogota' }).format(new Date());
}

/**
 * Fecha en America/Bogota, N días atrás de hoy, como YYYY-MM-DD.
 * Ancla al día de Bogotá (medianoche UTC de esa fecha) y resta N×86_400_000ms:
 * seguro porque Colombia no tiene horario de verano (offset fijo UTC-5).
 */
export function daysAgoBogotaIso(n: number): string {
  const today = todayBogotaIso();
  const anchor = new Date(`${today}T00:00:00Z`);
  const past = new Date(anchor.getTime() - n * 86_400_000);
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'UTC' }).format(past);
}

/** Año y mes (1-12) de "hoy" en Bogotá — punto de partida para toda la aritmética de calendario de abajo. */
function todayBogotaYearMonth(): { year: number; month: number } {
  const [year, month] = todayBogotaIso().split('-').map(Number);
  return { year, month };
}

/**
 * Suma/resta meses en aritmética de calendario pura (año/mes como enteros,
 * sin pasar por ningún `Date` ni timezone). `month` es 1-12.
 */
function addMonths(year: number, month: number, offsetMonths: number): { year: number; month: number } {
  const total = year * 12 + (month - 1) + offsetMonths;
  return { year: Math.floor(total / 12), month: (((total % 12) + 12) % 12) + 1 };
}

/**
 * Último día del mes `month` (1-12) de `year`. `new Date(year, month, 0)`
 * interpreta (year, month, day) como componentes de reloj *locales puros* y
 * los vuelve a leer en el mismo marco local con `.getDate()` — nunca cruza un
 * límite de timezone, así que es seguro siempre que `year`/`month` ya vengan
 * anclados a Bogotá (que es lo que garantiza `todayBogotaYearMonth`).
 */
function lastDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function isoDate(year: number, month: number, day: number): string {
  return `${year}-${pad(month)}-${pad(day)}`;
}

/** Primer día (YYYY-MM-DD) del mes con offset `offsetMonths` respecto al mes actual en Bogotá (0 = mes actual, -1 = mes anterior). */
export function getFirstDayOfMonthBogota(offsetMonths = 0): string {
  const base = todayBogotaYearMonth();
  const { year, month } = addMonths(base.year, base.month, offsetMonths);
  return isoDate(year, month, 1);
}

/** Último día (YYYY-MM-DD) del mes con offset `offsetMonths` respecto al mes actual en Bogotá (0 = mes actual, -1 = mes anterior). */
export function getLastDayOfMonthBogota(offsetMonths = 0): string {
  const base = todayBogotaYearMonth();
  const { year, month } = addMonths(base.year, base.month, offsetMonths);
  return isoDate(year, month, lastDayOfMonth(year, month));
}

/** Rango completo (1° a último día) del mes anterior al actual en Bogotá. */
export function getPreviousMonthRangeBogota(): { from: string; to: string } {
  return { from: getFirstDayOfMonthBogota(-1), to: getLastDayOfMonthBogota(-1) };
}

/**
 * Trimestre calendario actual completo (límites de calendario, no "hasta
 * hoy" — igual que el mes actual: si hoy cae a mitad del trimestre, el `to`
 * queda en el futuro y es la fuente de datos la que trunca de forma natural).
 */
export function getCurrentQuarterRangeBogota(): { from: string; to: string } {
  const { year, month } = todayBogotaYearMonth();
  const quarterStartMonth = Math.floor((month - 1) / 3) * 3 + 1; // 1, 4, 7, 10
  const quarterEndMonth = quarterStartMonth + 2;
  return {
    from: isoDate(year, quarterStartMonth, 1),
    to: isoDate(year, quarterEndMonth, lastDayOfMonth(year, quarterEndMonth)),
  };
}

/** Semestre calendario actual completo, mismo criterio que {@link getCurrentQuarterRangeBogota}. */
export function getCurrentSemesterRangeBogota(): { from: string; to: string } {
  const { year, month } = todayBogotaYearMonth();
  const semesterStartMonth = month <= 6 ? 1 : 7;
  const semesterEndMonth = semesterStartMonth + 5;
  return {
    from: isoDate(year, semesterStartMonth, 1),
    to: isoDate(year, semesterEndMonth, lastDayOfMonth(year, semesterEndMonth)),
  };
}

/**
 * YTD: del 1 de enero al día de hoy en Bogotá — pensado para comparar contra
 * el año anterior (yoy), no contra el "periodo inmediatamente anterior"
 * (cruzaría el límite de año).
 */
export function getYtdRangeBogota(): { from: string; to: string } {
  const today = todayBogotaIso();
  return { from: `${today.slice(0, 4)}-01-01`, to: today };
}
