import { describe, it, expect, afterEach, vi } from 'vitest';
import {
  todayBogotaIso,
  daysAgoBogotaIso,
  getFirstDayOfMonthBogota,
  getLastDayOfMonthBogota,
  getPreviousMonthRangeBogota,
  getCurrentQuarterRangeBogota,
  getCurrentSemesterRangeBogota,
  getYtdRangeBogota,
} from '../dateBogota';

// Instante elegido a propósito: 2026-08-15T02:00:00Z es de noche en Colombia
// (America/Bogota = UTC-5, sin horario de verano): la hora local en Bogotá es
// 2026-08-14 21:00. Es exactamente el caso que rompe el bug que este módulo
// corrige — un servidor corriendo en UTC (o cualquier reloj no-Bogotá) que use
// `new Date()` crudo cree que "hoy" es 15-ago cuando en Bogotá todavía es
// 14-ago. `todayBogotaIso`/`daysAgoBogotaIso` son el mismo algoritmo que
// `lib/pulse/aging.ts` de mission-control (fuente de verdad ya en producción);
// los valores esperados abajo son los que esa implementación produce para
// este mismo instante.
const NIGHT_IN_COLOMBIA_UTC = '2026-08-15T02:00:00Z';

describe('dateBogota', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('todayBogotaIso ancla al día de Bogotá, no al UTC del servidor', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(NIGHT_IN_COLOMBIA_UTC));

    // UTC ya está en 15-ago; Bogotá todavía está en 14-ago.
    expect(todayBogotaIso()).toBe('2026-08-14');
  });

  it('daysAgoBogotaIso(1) resta un día calendario de Bogotá, no de UTC', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(NIGHT_IN_COLOMBIA_UTC));

    expect(daysAgoBogotaIso(0)).toBe('2026-08-14');
    expect(daysAgoBogotaIso(1)).toBe('2026-08-13');
    expect(daysAgoBogotaIso(29)).toBe('2026-07-16');
  });

  it('getFirstDayOfMonthBogota / getLastDayOfMonthBogota respetan offsetMonths sobre el mes de Bogotá', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(NIGHT_IN_COLOMBIA_UTC));

    expect(getFirstDayOfMonthBogota()).toBe('2026-08-01');
    expect(getLastDayOfMonthBogota()).toBe('2026-08-31');
    expect(getFirstDayOfMonthBogota(-1)).toBe('2026-07-01');
    expect(getLastDayOfMonthBogota(-1)).toBe('2026-07-31');
    // cruce de año hacia atrás
    expect(getFirstDayOfMonthBogota(-8)).toBe('2025-12-01');
    expect(getLastDayOfMonthBogota(-8)).toBe('2025-12-31');
  });

  it('getPreviousMonthRangeBogota', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(NIGHT_IN_COLOMBIA_UTC));

    expect(getPreviousMonthRangeBogota()).toEqual({ from: '2026-07-01', to: '2026-07-31' });
  });

  it('getCurrentQuarterRangeBogota devuelve el trimestre calendario completo (jul-sep para agosto)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(NIGHT_IN_COLOMBIA_UTC));

    expect(getCurrentQuarterRangeBogota()).toEqual({ from: '2026-07-01', to: '2026-09-30' });
  });

  it('getCurrentSemesterRangeBogota devuelve el semestre calendario completo (jul-dic para agosto)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(NIGHT_IN_COLOMBIA_UTC));

    expect(getCurrentSemesterRangeBogota()).toEqual({ from: '2026-07-01', to: '2026-12-31' });
  });

  it('getYtdRangeBogota va del 1 de enero al día de hoy en Bogotá (no en UTC)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(NIGHT_IN_COLOMBIA_UTC));

    expect(getYtdRangeBogota()).toEqual({ from: '2026-01-01', to: '2026-08-14' });
  });

  it('leap year: último día de febrero en año bisiesto', () => {
    vi.useFakeTimers();
    // 2028 es bisiesto; misma técnica de instante "de noche en Colombia".
    vi.setSystemTime(new Date('2028-02-15T02:00:00Z'));

    expect(getLastDayOfMonthBogota()).toBe('2028-02-29');
  });
});
