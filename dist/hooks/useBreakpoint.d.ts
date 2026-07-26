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
export declare function useBreakpointUp(bp: Breakpoint): boolean;
/**
 * El breakpoint activo del viewport: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`.
 *
 * Preferir `useBreakpointUp` cuando alcance con un booleano: es más barato y
 * expresa mejor la intención (mobile first). Este es para cuando el
 * comportamiento cambia en más de dos escalones.
 */
export declare function useBreakpoint(): Breakpoint;
/**
 * Atajo: `true` por debajo de `md` (768px), el corte tablet del ecosistema.
 *
 * Es el caso de uso más común — decidir entre tabla y tarjetas, o entre menú
 * lateral y menú hamburguesa.
 */
export declare function useIsMobile(): boolean;
