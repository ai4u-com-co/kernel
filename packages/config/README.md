# @ai4u/config

Config compartida del ecosistema **superAI**: para que agregar un módulo nuevo no
implique volver a copiar 15-20 variables de entorno a mano en cada proyecto de Vercel.

Distribución: igual que `@ai4u/platform`, `@ai4u/mc-sso` y `@ai4u/design-system` — repo
GitHub con `dist/` commiteado, consumido por tag:
`"@ai4u/config": "github:ai4u-com-co/config#vX.Y.Z"` (código fuente en el monorepo
`ai4u-com-co/kernel`, `packages/config`; el repo `config` es el espejo publicado).

## Qué resuelve (y qué NO)

- **Sí**: URLs de servicios hermanos (`SAP_BACKEND_URL`, `CHANGELOG_URL`, etc.),
  feature flags, dominios, branding por tenant — todo lo que hoy se repite igual
  en 3+ `.env.example` del ecosistema y cambia junto (ej. cuando `sap-b1-backend`
  cambia de dominio, hoy hay que tocar 10 repos; con esto se cambia una fila).
- **No**: contraseñas, llaves de API, tokens — esos siguen viviendo en variables
  de entorno de Vercel por proyecto. `@ai4u/config` lee la tabla `system_settings`
  con la **anon key** de Supabase, que por RLS solo puede ver filas `is_secret=false`
  (ver migración `mission-control-main/supabase/migrations/20260605000001_system_settings.sql`).

## Instalación

```bash
npm install github:ai4u-com-co/config#v0.2.0
```

Requiere `@supabase/supabase-js` (ya viene como dependencia). La mayoría de apps del
ecosistema ya tienen `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`
apuntando al proyecto de Mission Control — si es así, **no hace falta ninguna
variable nueva**.

## Uso

```ts
import { getConfig } from "@ai4u/config"

const sapBackendUrl = await getConfig("SAP_BACKEND_URL")
// si Supabase no responde, no está configurado, o la fila no existe:
// cae automáticamente a process.env.SAP_BACKEND_URL
```

Opciones (todas opcionales):

```ts
await getConfig("SAP_BACKEND_URL", {
  supabaseUrl: "https://otro-proyecto.supabase.co", // default: NEXT_PUBLIC_SUPABASE_URL
  supabaseAnonKey: "...",                            // default: NEXT_PUBLIC_SUPABASE_ANON_KEY
  ttlMs: 60_000,                                     // default: 5 minutos
})
```

`clearConfigCache()` limpia el snapshot en memoria — útil en tests o justo después
de cambiar un valor en `system_settings`.

## Contrato de variables de entorno (v0.2.0)

Nombres canónicos, alias aceptados y llaves por tenant del ecosistema, como **datos** y
helpers síncronos (sin Supabase, aptos para Node, Edge y middleware). Se importan desde la
raíz o desde el subpath liviano `@ai4u/config/env` (no arrastra `@supabase/supabase-js`).

Reglas: nunca se imprime ni se lanza el **valor** de una variable (solo su nombre); los
alias funcionan con un `console.warn` **una sola vez por alias por proceso**; y no hay
estado a nivel de módulo que dependa de configuración (todo se lee de `process.env` en
cada llamada).

> Lectura dinámica (`process.env[name]`): es para código de servidor. En componentes
> cliente de Next.js las `NEXT_PUBLIC_*` solo se inlinean con acceso literal.

### `readEnv` / `requireEnv`

```ts
import { readEnv, requireEnv } from "@ai4u/config/env"

const url = readEnv("SAP_BACKEND_URL")
// 1. SAP_BACKEND_URL  2. BACKEND_URL, NEXT_PUBLIC_BACKEND_URL, SAP_B1_BACKEND_URL, KPIS_APP_URL
// (si sale de un alias: aviso "renómbrala a SAP_BACKEND_URL", una vez)

const secret = requireEnv("MISSION_CONTROL_SECRET") // lanza si falta, con los alias aceptados
```

Un string vacío cuenta como faltante. Variables fuera del contrato se leen tal cual.

### `loadEnv` — validar todo al arrancar (`lib/env.ts`)

```ts
import { loadEnv } from "@ai4u/config/env"

export const env = loadEnv({
  require: ["SAP_BACKEND_URL", "NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"],
  optional: ["CRON_SECRET", "SERVICE_ID"],
})
// env.SAP_BACKEND_URL: string · env.CRON_SECRET: string | undefined
```

En producción (`NODE_ENV === "production"`) lanza **un** Error con la lista completa de
faltantes; fuera de producción solo avisa (y las faltantes vienen `undefined`).

### Tenants: `normalizeTenant`, `getGatewayApiKey`, `getProviderKey`

```ts
import { normalizeTenant, getGatewayApiKey, getProviderKey } from "@ai4u/config/env"

normalizeTenant("flexo")        // "FLEXOIMPRESOS"
normalizeTenant("la-magdalena") // "MAGDALENA"
normalizeTenant("tenant-nuevo") // "TENANTNUEVO" (un tenant nuevo no requiere tocar el paquete)

getGatewayApiKey(tenantId)
// {TENANT}_SAP_API_KEY → alias {TENANT}_GATEWAY_API_KEY, SAP_API_KEY_{TENANT}, {TENANT}_API_KEY
// → SAP_BACKEND_API_KEY.  Devuelve { key, source: "tenant" | "service", envName } o null.

const k = getProviderKey("ANTHROPIC", tenantId)
// {TENANT}_ANTHROPIC_API_KEY → AI4U_ANTHROPIC_API_KEY → ANTHROPIC_API_KEY / CLAUDE_API_KEY (legado, con aviso)
if (k) log.info("llamada IA", { tenant: tenantId, keySource: k.source, keyEnv: k.envName }) // nunca k.key
```

Proveedores: `ANTHROPIC` (alias `CLAUDE_API_KEY`), `OPENAI`, `GEMINI`
(alias `GOOGLE_GENERATIVE_AI_API_KEY`), `APIFY` (alias `APIFY_API_TOKEN`).

### `ENV_CONTRACT` y `renderEnvExample`

```ts
import { ENV_CONTRACT, ENV_PATTERNS, renderEnvExample } from "@ai4u/config/env"

ENV_CONTRACT.SAP_BACKEND_URL
// { name, class: "platform", aliases: [...], secret: false, description }

writeFileSync(".env.example", renderEnvExample([
  "SAP_BACKEND_URL", "MISSION_CONTROL_SECRET", "TAMAPRINT_SAP_API_KEY", "AI4U_OPENAI_API_KEY",
]))
```

Clases: `platform` (igual para todas las apps), `service` (identidad de esta app),
`tenant` (`{TENANT}_*`, resueltas por helper) y `provider` (propias de la app, fuera del
contrato en v1).

## Cómo agregar/editar un valor compartido

Los valores viven en la tabla `system_settings` del Supabase de **mission-control**
(no de este repo). Ejemplo para agregar uno nuevo (correr desde donde ya se corren
las migraciones de mission-control, con `service_role`, con autorización explícita):

```sql
insert into public.system_settings (key, value, description, is_secret)
values ('SAP_BACKEND_URL', 'https://sap-b1-backend.vercel.app', 'URL del gateway SAP B1', false)
on conflict (key) do update set value = excluded.value;
```

## Desarrollo

```bash
npm install
npm run build       # tsc → dist/
npm run type-check
npm test             # vitest
```
