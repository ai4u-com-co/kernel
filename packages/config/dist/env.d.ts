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
export type EnvClass = "platform" | "service" | "tenant" | "provider";
export interface EnvVarSpec {
    /** Nombre canónico. */
    name: string;
    class: EnvClass;
    /** Nombres viejos aceptados (en orden de prioridad), con aviso en el log. */
    aliases: readonly string[];
    /** true si el valor es secreto (nunca va a logs ni a NEXT_PUBLIC_*). */
    secret: boolean;
    description: string;
}
/** Datos del contrato (clases platform y service). Para docs, `renderEnvExample` y env-doctor. */
export declare const ENV_CONTRACT: {
    readonly SAP_BACKEND_URL: EnvVarSpec & {
        name: "SAP_BACKEND_URL";
    };
    readonly PLATFORM_INGEST_URL: EnvVarSpec & {
        name: "PLATFORM_INGEST_URL";
    };
    readonly INGEST_SECRET: EnvVarSpec & {
        name: "INGEST_SECRET";
    };
    readonly NEXT_PUBLIC_CHANGELOG_URL: EnvVarSpec & {
        name: "NEXT_PUBLIC_CHANGELOG_URL";
    };
    readonly CHANGELOG_API_KEY: EnvVarSpec & {
        name: "CHANGELOG_API_KEY";
    };
    readonly NEXT_PUBLIC_SUPABASE_URL: EnvVarSpec & {
        name: "NEXT_PUBLIC_SUPABASE_URL";
    };
    readonly NEXT_PUBLIC_SUPABASE_ANON_KEY: EnvVarSpec & {
        name: "NEXT_PUBLIC_SUPABASE_ANON_KEY";
    };
    readonly MISSION_CONTROL_URL: EnvVarSpec & {
        name: "MISSION_CONTROL_URL";
    };
    readonly MISSION_CONTROL_SECRET: EnvVarSpec & {
        name: "MISSION_CONTROL_SECRET";
    };
    readonly SAP_BACKEND_API_KEY: EnvVarSpec & {
        name: "SAP_BACKEND_API_KEY";
    };
    readonly SUPABASE_SERVICE_ROLE_KEY: EnvVarSpec & {
        name: "SUPABASE_SERVICE_ROLE_KEY";
    };
    readonly CRON_SECRET: EnvVarSpec & {
        name: "CRON_SECRET";
    };
    readonly NEXT_PUBLIC_CHANGELOG_CLIENT: EnvVarSpec & {
        name: "NEXT_PUBLIC_CHANGELOG_CLIENT";
    };
    readonly NEXT_PUBLIC_CHANGELOG_APP: EnvVarSpec & {
        name: "NEXT_PUBLIC_CHANGELOG_APP";
    };
    readonly SERVICE_ID: EnvVarSpec & {
        name: "SERVICE_ID";
    };
};
export type CanonicalName = keyof typeof ENV_CONTRACT;
/** Un nombre del contrato (con autocompletado) o cualquier otra variable propia de la app. */
export type EnvName = CanonicalName | (string & {});
/** Patrones de las clases tenant/provider (resueltos por helper, nunca `process.env[...]` suelto). */
export declare const ENV_PATTERNS: readonly [{
    readonly pattern: "{TENANT}_SAP_API_KEY";
    readonly class: "tenant";
    readonly secret: true;
    readonly aliases: readonly ["{TENANT}_GATEWAY_API_KEY", "SAP_API_KEY_{TENANT}", "{TENANT}_API_KEY"];
    readonly description: "Llave del tenant hacia el gateway SAP. Fallback final: SAP_BACKEND_API_KEY. Usar getGatewayApiKey().";
}, {
    readonly pattern: "{TENANT}_{PROVIDER}_API_KEY";
    readonly class: "tenant";
    readonly secret: true;
    readonly aliases: readonly [];
    readonly description: "Llave del proveedor de IA que entrega el tenant. Usar getProviderKey().";
}, {
    readonly pattern: "AI4U_{PROVIDER}_API_KEY";
    readonly class: "tenant";
    readonly secret: true;
    readonly aliases: readonly [];
    readonly description: "Llave propia de Ai4U para el proveedor (fallback cuando el tenant no tiene la suya). Usar getProviderKey().";
}];
/**
 * Ids de tenant conocidos → prefijo de variable. Es DATO (para normalizar alias de id),
 * no una lista cerrada: un tenant nuevo funciona sin tocar este paquete.
 */
export declare const TENANT_ID_ALIASES: Readonly<Record<string, string>>;
/** Prefijo de tenant en nombres de variable: id del gateway en mayúsculas, solo [A-Z0-9]. */
export type TenantEnvPrefix = string & {
    readonly __tenantEnvPrefix?: true;
};
export declare const PROVIDERS: {
    readonly ANTHROPIC: {
        readonly legacyAliases: readonly ["CLAUDE_API_KEY"];
    };
    readonly OPENAI: {
        readonly legacyAliases: readonly [];
    };
    readonly GEMINI: {
        readonly legacyAliases: readonly ["GOOGLE_GENERATIVE_AI_API_KEY"];
    };
    readonly APIFY: {
        readonly legacyAliases: readonly ["APIFY_API_TOKEN"];
    };
};
export type Provider = keyof typeof PROVIDERS;
/** Fuente de variables. Default: `process.env`. Útil en tests. */
export type EnvSource = Readonly<Record<string, string | undefined>>;
/** Solo para tests: olvida qué avisos ya se emitieron. */
export declare function resetEnvWarnings(): void;
/**
 * Lee una variable: primero el nombre canónico, luego sus alias en orden (avisa una vez
 * por alias usado). Variables fuera del contrato se leen tal cual, sin alias.
 */
export declare function readEnv(name: EnvName, env?: EnvSource): string | undefined;
/** Como `readEnv`, pero lanza un Error claro si la variable falta. */
export declare function requireEnv(name: EnvName, env?: EnvSource): string;
export interface LoadEnvSpec<R extends EnvName, O extends EnvName> {
    require?: readonly R[];
    optional?: readonly O[];
    /** Default: `process.env`. */
    env?: EnvSource;
    /** Default: `process.env.NODE_ENV === "production"`. */
    production?: boolean;
}
export type LoadedEnv<R extends EnvName, O extends EnvName> = {
    [K in R]: string;
} & {
    [K in O]: string | undefined;
};
/**
 * Valida todas las variables juntas al arrancar (p.ej. en `lib/env.ts`).
 * - En producción (`NODE_ENV === "production"`) lanza UN Error con la lista completa de faltantes.
 * - Fuera de producción solo avisa (`console.warn`) y devuelve las faltantes como `undefined`
 *   (el tipo dice `string` para las requeridas: en dev/test podrían venir vacías).
 */
export declare function loadEnv<R extends EnvName = never, O extends EnvName = never>(spec: LoadEnvSpec<R, O>): LoadedEnv<R, O>;
/**
 * Normaliza un id de tenant al prefijo usado en variables: mayúsculas, solo [A-Z0-9], y
 * alias de id resueltos ("flexo" → "FLEXOIMPRESOS", "la-magdalena" → "MAGDALENA").
 * Lanza si el id queda vacío.
 */
export declare function normalizeTenant(id: string): TenantEnvPrefix;
export type GatewayKeySource = "tenant" | "service";
export interface GatewayApiKey {
    key: string;
    /** "tenant" = `{TENANT}_SAP_API_KEY` (o su alias); "service" = fallback `SAP_BACKEND_API_KEY`. */
    source: GatewayKeySource;
    /** Nombre de la variable de donde salió (nunca el valor). */
    envName: string;
}
/**
 * Llave hacia el gateway SAP. Orden: `{T}_SAP_API_KEY` → alias (`{T}_GATEWAY_API_KEY`,
 * `SAP_API_KEY_{T}`, `{T}_API_KEY`, con aviso) → `SAP_BACKEND_API_KEY` (y su alias).
 * Sin tenant, solo el fallback. `null` si no hay ninguna.
 */
export declare function getGatewayApiKey(tenant?: string | null, env?: EnvSource): GatewayApiKey | null;
export type ProviderKeySource = "tenant" | "ai4u" | "legacy";
export interface ProviderKey {
    key: string;
    /** De dónde salió: para que los logs de costo por tenant sean auditables. */
    source: ProviderKeySource;
    /** Nombre de la variable de donde salió (nunca el valor). */
    envName: string;
}
/**
 * Llave de un proveedor de IA. Orden:
 *   1. `{TENANT}_{PROVIDER}_API_KEY`  → source "tenant" (solo si se pasa tenant)
 *   2. `AI4U_{PROVIDER}_API_KEY`      → source "ai4u"
 *   3. `{PROVIDER}_API_KEY` y alias legados (`CLAUDE_API_KEY`, ...) → source "legacy", con aviso
 * `null` si no hay ninguna.
 */
export declare function getProviderKey(provider: Provider | Lowercase<Provider>, tenant?: string | null, env?: EnvSource): ProviderKey | null;
/**
 * Genera el contenido de un `.env.example` con comentarios (descripción, clase, si es
 * secreto, alias aceptados) para los nombres pedidos, en el orden dado. Sin valores.
 */
export declare function renderEnvExample(names: readonly EnvName[]): string;
//# sourceMappingURL=env.d.ts.map