export interface ConfigOptions {
    /** Default: process.env.NEXT_PUBLIC_SUPABASE_URL */
    supabaseUrl?: string;
    /** Default: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY (la anon key solo puede leer filas is_secret=false, por RLS) */
    supabaseAnonKey?: string;
    /** Cuánto se cachea el snapshot de la tabla en memoria antes de refrescar. Default 5 min. */
    ttlMs?: number;
}
/**
 * Lee un valor de config compartida. Prioridad:
 *   1. `system_settings` en Supabase (solo filas `is_secret=false`, visibles con la anon key)
 *   2. `process.env[key]` como fallback
 */
export declare function getConfig(key: string, opts?: ConfigOptions): Promise<string | undefined>;
/** Limpia el cache en memoria. Útil en tests o justo después de rotar un valor en Supabase. */
export declare function clearConfigCache(): void;
//# sourceMappingURL=index.d.ts.map