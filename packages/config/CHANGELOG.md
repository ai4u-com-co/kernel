# Changelog — @ai4u/config

## 0.2.0 — 2026-09-29

### Agregado
- Contrato de variables de entorno v1 (`src/env.ts`, también en el subpath `@ai4u/config/env`,
  sin dependencia de Supabase):
  - `ENV_CONTRACT` (nombre canónico, clase, alias, secreto, descripción), `ENV_PATTERNS`,
    `PROVIDERS`, `TENANT_ID_ALIASES`.
  - `readEnv`, `requireEnv`, `loadEnv` (en producción lanza con la lista de faltantes; fuera
    de producción avisa).
  - `normalizeTenant`, `getGatewayApiKey`, `getProviderKey` (devuelve `source` y `envName`).
  - `renderEnvExample` para generar `.env.example` desde el contrato.
- Avisos de alias/legado: `console.warn` una vez por nombre por proceso (set en `globalThis`
  con `Symbol.for`), nunca con valores.

### Sin cambios
- `getConfig` / `clearConfigCache` y la lectura de `system_settings`.

## 0.1.1
- Versión publicada previa (lectura de `system_settings` con fallback a `process.env`).
