import { useSyncExternalStore, useCallback } from 'react';
import { BREAKPOINT_TOKENS } from '../tokens/theme';

export type Breakpoint = keyof typeof BREAKPOINT_TOKENS;

/**
 * `true` cuando el viewport es de `bp` para arriba (mobile first).
 *
 *   const esEscritorio = useBreakpointUp('lg');
 *   return esEscritorio ? <Tabla /> : <ListaDeTarjetas />;
 *
 * Usa `matchMedia`, así que solo re-renderiza al **cruzar** el umbral — a
 * diferencia de `useWindowSize`, que re-renderiza en cada píxel de resize.
 *
 * SSR: devuelve `false` en el servidor (mobile first), y React re-hidrata con
 * el valor real. Componer para móvil primero evita el parpadeo de layout.
 */
export function useBreakpointUp(bp: Breakpoint): boolean {
  const query = `(min-width: ${BREAKPOINT_TOKENS[bp]}px)`;

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (typeof window === 'undefined' || !window.matchMedia) return () => {};
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    [query]
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  }, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/**
 * El breakpoint activo del viewport: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`.
 *
 * Preferir `useBreakpointUp` cuando alcance con un booleano: es más barato y
 * expresa mejor la intención (mobile first). Este es para cuando el
 * comportamiento cambia en más de dos escalones.
 */
export function useBreakpoint(): Breakpoint {
  const sm = useBreakpointUp('sm');
  const md = useBreakpointUp('md');
  const lg = useBreakpointUp('lg');
  const xl = useBreakpointUp('xl');
  const xxl = useBreakpointUp('2xl');

  if (xxl) return '2xl';
  if (xl) return 'xl';
  if (lg) return 'lg';
  if (md) return 'md';
  if (sm) return 'sm';
  return 'xs';
}

/**
 * Atajo: `true` por debajo de `md` (768px), el corte tablet del ecosistema.
 *
 * Es el caso de uso más común — decidir entre tabla y tarjetas, o entre menú
 * lateral y menú hamburguesa.
 */
export function useIsMobile(): boolean {
  return !useBreakpointUp('md');
}
