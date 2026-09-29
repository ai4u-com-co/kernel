"use strict";
/**
 * Contrato de variables de entorno del ecosistema Ai4U (v1).
 *
 * Fuente de verdad: `fase1-contrato-env.md` (inventario 29-sep-2026). Este módulo
 * es SÍNCRONO, no depende de Supabase y funciona en Node, Edge y middleware
 * (se importa también por el subpath `@ai4u/config/env`, que no arrastra
 * `@supabase/supabase-js`).
 *
 * Reglas de diseño:
 * - Nunca se imprime ni se incluye en un Error el VALOR de una variable, solo su nombre.
 * - Sin estado mutable a nivel de módulo que dependa de configuración (Turbopack puede
 *   instanciar el módulo N veces): todo se lee de `process.env` en cada llamada. El único
 *   estado es el set de avisos ya emitidos, que vive en `globalThis` bajo una Symbol
 *   compartida (`Symbol.for`), así N instancias del módulo avisan una sola vez.
 * - Lectura dinámica (`process.env[name]`): sirve en servidor. En componentes cliente de
 *   Next.js las `NEXT_PUBLIC_*` solo se inlinean con acceso literal
 *   (`process.env.NEXT_PUBLIC_X`), así que ahí no uses estos helpers.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVIDERS = exports.TENANT_ID_ALIASES = exports.ENV_PATTERNS = exports.ENV_CONTRACT = void 0;
exports.resetEnvWarnings = resetEnvWarnings;
exports.readEnv = readEnv;
exports.requireEnv = requireEnv;
exports.loadEnv = loadEnv;
exports.normalizeTenant = normalizeTenant;
exports.getGatewayApiKey = getGatewayApiKey;
exports.getProviderKey = getProviderKey;
exports.renderEnvExample = renderEnvExample;
function spec(name, cls, secret, aliases, description) {
    return { name, class: cls, aliases, secret, description };
}
/** Datos del contrato (clases platform y service). Para docs, `renderEnvExample` y env-doctor. */
exports.ENV_CONTRACT = {
    // --- platform: igual para todas las apps (Shared Env Var del team) ---
    SAP_BACKEND_URL: spec("SAP_BACKEND_URL", "platform", false, ["BACKEND_URL", "NEXT_PUBLIC_BACKEND_URL", "SAP_B1_BACKEND_URL", "KPIS_APP_URL"], "URL base del gateway sap-b1-backend (único borde con SAP B1)."),
    PLATFORM_INGEST_URL: spec("PLATFORM_INGEST_URL", "platform", false, [], "Endpoint de ingesta de logs de @ai4u/platform."),
    INGEST_SECRET: spec("INGEST_SECRET", "platform", true, [], "Secreto para autenticar la ingesta de logs."),
    NEXT_PUBLIC_CHANGELOG_URL: spec("NEXT_PUBLIC_CHANGELOG_URL", "platform", false, ["CHANGELOG_URL", "NEXT_PUBLIC_CHANGELOG_SERVICE_URL"], "URL del servicio de changelog (pill de versión)."),
    CHANGELOG_API_KEY: spec("CHANGELOG_API_KEY", "platform", true, [], "API key del servicio de changelog."),
    NEXT_PUBLIC_SUPABASE_URL: spec("NEXT_PUBLIC_SUPABASE_URL", "platform", false, ["SUPABASE_URL"], "URL del proyecto Supabase."),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: spec("NEXT_PUBLIC_SUPABASE_ANON_KEY", "platform", false, ["SUPABASE_ANON_KEY"], "Anon key de Supabase (pública por diseño; la protección es RLS)."),
    MISSION_CONTROL_URL: spec("MISSION_CONTROL_URL", "platform", false, ["NEXT_PUBLIC_MC_URL"], "URL de Mission Control (SSO y navegación entre módulos)."),
    // --- service: identidad de ESTA app ---
    MISSION_CONTROL_SECRET: spec("MISSION_CONTROL_SECRET", "service", true, ["MC_INTERNAL_SECRET", "SAP_BACKEND_SECRET", "BACKEND_SERVICE_SECRET"], "Secreto servicio-a-servicio con Mission Control / gateway (transitorio: Fase 3 lo reemplaza por OIDC)."),
    SAP_BACKEND_API_KEY: spec("SAP_BACKEND_API_KEY", "service", true, ["SAP_B1_BACKEND_API_KEY"], "Llave de esta app hacia el gateway SAP cuando la app es de un solo tenant (fallback de {TENANT}_SAP_API_KEY)."),
    SUPABASE_SERVICE_ROLE_KEY: spec("SUPABASE_SERVICE_ROLE_KEY", "service", true, ["SUPABASE_SERVICE_KEY"], "Service role de Supabase (solo si la app escribe; salta RLS)."),
    CRON_SECRET: spec("CRON_SECRET", "service", true, [], "Secreto que manda Vercel Cron; uno por proyecto."),
    NEXT_PUBLIC_CHANGELOG_CLIENT: spec("NEXT_PUBLIC_CHANGELOG_CLIENT", "service", false, ["NEXT_PUBLIC_CLIENT_ID", "NEXT_PUBLIC_CHANGELOG_CLIENT_ID"], "Cliente (tenant) con el que esta app se registra en el changelog."),
    NEXT_PUBLIC_CHANGELOG_APP: spec("NEXT_PUBLIC_CHANGELOG_APP", "service", false, ["NEXT_PUBLIC_APP_ID", "NEXT_PUBLIC_CHANGELOG_APP_ID"], "Id de esta app en el changelog."),
    SERVICE_ID: spec("SERVICE_ID", "service", false, ["PLATFORM_SERVICE"], "Nombre del servicio en los logs."),
};
/** Patrones de las clases tenant/provider (resueltos por helper, nunca `process.env[...]` suelto). */
exports.ENV_PATTERNS = [
    {
        pattern: "{TENANT}_SAP_API_KEY",
        class: "tenant",
        secret: true,
        aliases: ["{TENANT}_GATEWAY_API_KEY", "SAP_API_KEY_{TENANT}", "{TENANT}_API_KEY"],
        description: "Llave del tenant hacia el gateway SAP. Fallback final: SAP_BACKEND_API_KEY. Usar getGatewayApiKey().",
    },
    {
        pattern: "{TENANT}_{PROVIDER}_API_KEY",
        class: "tenant",
        secret: true,
        aliases: [],
        description: "Llave del proveedor de IA que entrega el tenant. Usar getProviderKey().",
    },
    {
        pattern: "AI4U_{PROVIDER}_API_KEY",
        class: "tenant",
        secret: true,
        aliases: [],
        description: "Llave propia de Ai4U para el proveedor (fallback cuando el tenant no tiene la suya). Usar getProviderKey().",
    },
];
/**
 * Ids de tenant conocidos → prefijo de variable. Es DATO (para normalizar alias de id),
 * no una lista cerrada: un tenant nuevo funciona sin tocar este paquete.
 */
exports.TENANT_ID_ALIASES = {
    FLEXO: "FLEXOIMPRESOS",
    LAMAGDALENA: "MAGDALENA",
    MULTYHEALTH: "MULTIHEALTH",
};
exports.PROVIDERS = {
    ANTHROPIC: { legacyAliases: ["CLAUDE_API_KEY"] },
    OPENAI: { legacyAliases: [] },
    GEMINI: { legacyAliases: ["GOOGLE_GENERATIVE_AI_API_KEY"] },
    APIFY: { legacyAliases: ["APIFY_API_TOKEN"] },
};
// ---------------------------------------------------------------------------
// Avisos (una vez por clave por proceso, compartido entre instancias del módulo)
// ---------------------------------------------------------------------------
const WARNED_KEY = Symbol.for("@ai4u/config.env.warned");
function warnedSet() {
    const g = globalThis;
    let set = g[WARNED_KEY];
    if (!set) {
        set = new Set();
        g[WARNED_KEY] = set;
    }
    return set;
}
/** Emite `console.warn(message)` una sola vez por `key` en todo el proceso. `message` NUNCA lleva valores. */
function warnOnce(key, message) {
    const set = warnedSet();
    if (set.has(key))
        return;
    set.add(key);
    console.warn(message);
}
/** Solo para tests: olvida qué avisos ya se emitieron. */
function resetEnvWarnings() {
    warnedSet().clear();
}
// ---------------------------------------------------------------------------
// Lectura
// ---------------------------------------------------------------------------
function defaultEnv() {
    return typeof process !== "undefined" && process.env ? process.env : {};
}
/** Valor no vacío o undefined (una variable definida como "" cuenta como faltante). */
function raw(env, name) {
    const v = env[name];
    return v === undefined || v.trim() === "" ? undefined : v;
}
function contractSpec(name) {
    return Object.prototype.hasOwnProperty.call(exports.ENV_CONTRACT, name)
        ? exports.ENV_CONTRACT[name]
        : undefined;
}
function aliasMessage(alias, canonical) {
    return `[@ai4u/config] La variable "${alias}" es un alias obsoleto de "${canonical}". Renómbrala a "${canonical}"; el alias se retirará.`;
}
function resolve(name, env) {
    const direct = raw(env, name);
    if (direct !== undefined)
        return { value: direct, envName: name };
    const s = contractSpec(name);
    if (!s)
        return undefined;
    for (const alias of s.aliases) {
        const v = raw(env, alias);
        if (v !== undefined) {
            warnOnce(`alias:${alias}`, aliasMessage(alias, name));
            return { value: v, envName: alias };
        }
    }
    return undefined;
}
/**
 * Lee una variable: primero el nombre canónico, luego sus alias en orden (avisa una vez
 * por alias usado). Variables fuera del contrato se leen tal cual, sin alias.
 */
function readEnv(name, env = defaultEnv()) {
    return resolve(name, env)?.value;
}
function missingMessage(name) {
    const s = contractSpec(name);
    const aliases = s && s.aliases.length > 0 ? ` (alias aceptados: ${s.aliases.join(", ")})` : "";
    return `"${name}"${aliases}`;
}
/** Como `readEnv`, pero lanza un Error claro si la variable falta. */
function requireEnv(name, env = defaultEnv()) {
    const v = readEnv(name, env);
    if (v === undefined) {
        throw new Error(`[@ai4u/config] Falta la variable de entorno requerida ${missingMessage(name)}.`);
    }
    return v;
}
/**
 * Valida todas las variables juntas al arrancar (p.ej. en `lib/env.ts`).
 * - En producción (`NODE_ENV === "production"`) lanza UN Error con la lista completa de faltantes.
 * - Fuera de producción solo avisa (`console.warn`) y devuelve las faltantes como `undefined`
 *   (el tipo dice `string` para las requeridas: en dev/test podrían venir vacías).
 */
function loadEnv(spec) {
    const env = spec.env ?? defaultEnv();
    const production = spec.production ?? env.NODE_ENV === "production";
    const out = {};
    const missing = [];
    for (const name of spec.require ?? []) {
        const v = readEnv(name, env);
        if (v === undefined)
            missing.push(name);
        out[name] = v;
    }
    for (const name of spec.optional ?? []) {
        out[name] = readEnv(name, env);
    }
    if (missing.length > 0) {
        const msg = `[@ai4u/config] Faltan ${missing.length} variable(s) de entorno requerida(s): ${missing
            .map(missingMessage)
            .join(", ")}.`;
        if (production)
            throw new Error(msg);
        console.warn(`${msg} (fuera de producción solo se avisa)`);
    }
    return out;
}
// ---------------------------------------------------------------------------
// Tenants y llaves
// ---------------------------------------------------------------------------
/**
 * Normaliza un id de tenant al prefijo usado en variables: mayúsculas, solo [A-Z0-9], y
 * alias de id resueltos ("flexo" → "FLEXOIMPRESOS", "la-magdalena" → "MAGDALENA").
 * Lanza si el id queda vacío.
 */
function normalizeTenant(id) {
    const base = String(id ?? "")
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
    if (!base)
        throw new Error("[@ai4u/config] normalizeTenant: id de tenant vacío o inválido.");
    return exports.TENANT_ID_ALIASES[base] ?? base;
}
/**
 * Llave hacia el gateway SAP. Orden: `{T}_SAP_API_KEY` → alias (`{T}_GATEWAY_API_KEY`,
 * `SAP_API_KEY_{T}`, `{T}_API_KEY`, con aviso) → `SAP_BACKEND_API_KEY` (y su alias).
 * Sin tenant, solo el fallback. `null` si no hay ninguna.
 */
function getGatewayApiKey(tenant, env = defaultEnv()) {
    if (tenant) {
        const t = normalizeTenant(tenant);
        const canonical = `${t}_SAP_API_KEY`;
        const v = raw(env, canonical);
        if (v !== undefined)
            return { key: v, source: "tenant", envName: canonical };
        for (const alias of [`${t}_GATEWAY_API_KEY`, `SAP_API_KEY_${t}`, `${t}_API_KEY`]) {
            const a = raw(env, alias);
            if (a !== undefined) {
                warnOnce(`alias:${alias}`, aliasMessage(alias, canonical));
                return { key: a, source: "tenant", envName: alias };
            }
        }
    }
    const fb = resolve("SAP_BACKEND_API_KEY", env);
    return fb ? { key: fb.value, source: "service", envName: fb.envName } : null;
}
function normalizeProvider(provider) {
    const p = String(provider ?? "").toUpperCase();
    if (!Object.prototype.hasOwnProperty.call(exports.PROVIDERS, p)) {
        throw new Error(`[@ai4u/config] getProviderKey: proveedor desconocido "${provider}". Válidos: ${Object.keys(exports.PROVIDERS).join(", ")}.`);
    }
    return p;
}
/**
 * Llave de un proveedor de IA. Orden:
 *   1. `{TENANT}_{PROVIDER}_API_KEY`  → source "tenant" (solo si se pasa tenant)
 *   2. `AI4U_{PROVIDER}_API_KEY`      → source "ai4u"
 *   3. `{PROVIDER}_API_KEY` y alias legados (`CLAUDE_API_KEY`, ...) → source "legacy", con aviso
 * `null` si no hay ninguna.
 */
function getProviderKey(provider, tenant, env = defaultEnv()) {
    const p = normalizeProvider(provider);
    if (tenant) {
        const t = normalizeTenant(tenant);
        const name = `${t}_${p}_API_KEY`;
        const v = raw(env, name);
        if (v !== undefined)
            return { key: v, source: "tenant", envName: name };
    }
    const ai4uName = `AI4U_${p}_API_KEY`;
    const ai4u = raw(env, ai4uName);
    if (ai4u !== undefined)
        return { key: ai4u, source: "ai4u", envName: ai4uName };
    const preferred = tenant ? `"${normalizeTenant(tenant)}_${p}_API_KEY" o "${ai4uName}"` : `"${ai4uName}"`;
    for (const legacy of [`${p}_API_KEY`, ...exports.PROVIDERS[p].legacyAliases]) {
        const v = raw(env, legacy);
        if (v !== undefined) {
            warnOnce(`legacy:${legacy}`, `[@ai4u/config] Usando la llave legada "${legacy}" para ${p}. Define ${preferred}; la llave legada se retirará.`);
            return { key: v, source: "legacy", envName: legacy };
        }
    }
    return null;
}
// ---------------------------------------------------------------------------
// .env.example
// ---------------------------------------------------------------------------
function patternFor(name) {
    const providers = Object.keys(exports.PROVIDERS).join("|");
    if (new RegExp(`^AI4U_(${providers})_API_KEY$`).test(name))
        return exports.ENV_PATTERNS[2];
    if (new RegExp(`^[A-Z0-9]+_(${providers})_API_KEY$`).test(name))
        return exports.ENV_PATTERNS[1];
    if (/^[A-Z0-9]+_SAP_API_KEY$/.test(name))
        return exports.ENV_PATTERNS[0];
    return undefined;
}
/**
 * Genera el contenido de un `.env.example` con comentarios (descripción, clase, si es
 * secreto, alias aceptados) para los nombres pedidos, en el orden dado. Sin valores.
 */
function renderEnvExample(names) {
    const blocks = names.map((name) => {
        const s = contractSpec(name);
        const lines = [];
        if (s) {
            lines.push(`# ${s.description}`);
            lines.push(`# Clase: ${s.class} · Secreto: ${s.secret ? "sí" : "no"}`);
            if (s.aliases.length > 0)
                lines.push(`# Alias aceptados (obsoletos): ${s.aliases.join(", ")}`);
        }
        else {
            const p = patternFor(name);
            if (p) {
                lines.push(`# ${p.description}`);
                lines.push(`# Clase: ${p.class} · Secreto: ${p.secret ? "sí" : "no"} · Patrón: ${p.pattern}`);
            }
            else {
                lines.push("# Variable propia de la app (fuera del contrato @ai4u/config).");
            }
        }
        lines.push(`${name}=`);
        return lines.join("\n");
    });
    return [
        "# Generado desde el contrato de @ai4u/config (renderEnvExample). No pongas valores reales aquí.",
        "",
        blocks.join("\n\n"),
        "",
    ].join("\n");
}
