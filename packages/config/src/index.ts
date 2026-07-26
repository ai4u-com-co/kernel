/**
 * @ai4u/config — config compartida del ecosistema superAI.
 *
 * Lee valores NO secretos (URLs de servicios hermanos, dominios, feature flags)
 * desde la tabla `system_settings` de Supabase de Mission Control, con fallback
 * automático a `process.env` cuando Supabase no está configurado, no responde,
 * o la fila no existe. Los secretos reales (contraseñas, llaves de API) siguen
 * viviendo en variables de entorno de Vercel — este paquete es solo para lo
 * que hoy se copia-pega en cada `.env.example` del ecosistema.
 *
 * Uso típico (una app nueva solo necesita las 2 vars que ya suele tener para
 * conectarse a Supabase, nada más):
 *
 *   import { getConfig } from "@ai4u/config"
 *   const sapBackendUrl = await getConfig("SAP_BACKEND_URL")
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js"

export interface ConfigOptions {
  /** Default: process.env.NEXT_PUBLIC_SUPABASE_URL */
  supabaseUrl?: string
  /** Default: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY (la anon key solo puede leer filas is_secret=false, por RLS) */
  supabaseAnonKey?: string
  /** Cuánto se cachea el snapshot de la tabla en memoria antes de refrescar. Default 5 min. */
  ttlMs?: number
}

interface Snapshot {
  values: Map<string, string>
  fetchedAt: number
}

const DEFAULT_TTL_MS = 5 * 60_000

let client: SupabaseClient | null = null
let clientCacheKey = ""
let snapshot: Snapshot | null = null
let inFlight: Promise<Snapshot> | null = null

function resolveClient(opts: ConfigOptions): SupabaseClient | null {
  const url = opts.supabaseUrl ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = opts.supabaseAnonKey ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anonKey) return null

  const cacheKey = `${url}::${anonKey}`
  if (!client || clientCacheKey !== cacheKey) {
    client = createClient(url, anonKey)
    clientCacheKey = cacheKey
    snapshot = null
  }
  return client
}

async function loadSnapshot(opts: ConfigOptions): Promise<Snapshot> {
  const supabase = resolveClient(opts)
  const values = new Map<string, string>()
  if (supabase) {
    const { data, error } = await supabase.from("system_settings").select("key, value")
    if (!error && data) {
      for (const row of data as { key: string; value: string }[]) {
        values.set(row.key, row.value)
      }
    }
  }
  return { values, fetchedAt: Date.now() }
}

async function getSnapshot(opts: ConfigOptions): Promise<Snapshot> {
  const ttl = opts.ttlMs ?? DEFAULT_TTL_MS
  if (snapshot && Date.now() - snapshot.fetchedAt < ttl) return snapshot
  if (!inFlight) {
    inFlight = loadSnapshot(opts).finally(() => {
      inFlight = null
    })
  }
  snapshot = await inFlight
  return snapshot
}

/**
 * Lee un valor de config compartida. Prioridad:
 *   1. `system_settings` en Supabase (solo filas `is_secret=false`, visibles con la anon key)
 *   2. `process.env[key]` como fallback
 */
export async function getConfig(key: string, opts: ConfigOptions = {}): Promise<string | undefined> {
  const snap = await getSnapshot(opts)
  const fromSupabase = snap.values.get(key)
  if (fromSupabase !== undefined) return fromSupabase
  return process.env[key]
}

/** Limpia el cache en memoria. Útil en tests o justo después de rotar un valor en Supabase. */
export function clearConfigCache(): void {
  snapshot = null
  client = null
  clientCacheKey = ""
}
