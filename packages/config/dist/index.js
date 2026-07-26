"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = getConfig;
exports.clearConfigCache = clearConfigCache;
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
const supabase_js_1 = require("@supabase/supabase-js");
const DEFAULT_TTL_MS = 5 * 60000;
let client = null;
let clientCacheKey = "";
let snapshot = null;
let inFlight = null;
function resolveClient(opts) {
    const url = opts.supabaseUrl ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = opts.supabaseAnonKey ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey)
        return null;
    const cacheKey = `${url}::${anonKey}`;
    if (!client || clientCacheKey !== cacheKey) {
        client = (0, supabase_js_1.createClient)(url, anonKey);
        clientCacheKey = cacheKey;
        snapshot = null;
    }
    return client;
}
async function loadSnapshot(opts) {
    const supabase = resolveClient(opts);
    const values = new Map();
    if (supabase) {
        const { data, error } = await supabase.from("system_settings").select("key, value");
        if (!error && data) {
            for (const row of data) {
                values.set(row.key, row.value);
            }
        }
    }
    return { values, fetchedAt: Date.now() };
}
async function getSnapshot(opts) {
    const ttl = opts.ttlMs ?? DEFAULT_TTL_MS;
    if (snapshot && Date.now() - snapshot.fetchedAt < ttl)
        return snapshot;
    if (!inFlight) {
        inFlight = loadSnapshot(opts).finally(() => {
            inFlight = null;
        });
    }
    snapshot = await inFlight;
    return snapshot;
}
/**
 * Lee un valor de config compartida. Prioridad:
 *   1. `system_settings` en Supabase (solo filas `is_secret=false`, visibles con la anon key)
 *   2. `process.env[key]` como fallback
 */
async function getConfig(key, opts = {}) {
    const snap = await getSnapshot(opts);
    const fromSupabase = snap.values.get(key);
    if (fromSupabase !== undefined)
        return fromSupabase;
    return process.env[key];
}
/** Limpia el cache en memoria. Útil en tests o justo después de rotar un valor en Supabase. */
function clearConfigCache() {
    snapshot = null;
    client = null;
    clientCacheKey = "";
}
