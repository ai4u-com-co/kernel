# CLAUDE.md — @ai4u/config

## Qué es
Paquete TypeScript `@ai4u/config` (v0.2.0) del ecosistema superAI de Ai4U. Hace dos cosas:
1. `getConfig(key)`: lee valores NO secretos de la tabla `system_settings` de Mission Control
   (Supabase, con anon key) y cae a `process.env` si no hay fila o Supabase no responde. Caché en memoria (default 5 min).
2. Contrato de variables de entorno (`src/env.ts`, subpath `@ai4u/config/env`): nombres canónicos, alias,
   llaves por tenant y helpers síncronos (`readEnv`, `requireEnv`, `loadEnv`, `normalizeTenant`,
   `getGatewayApiKey`, `getProviderKey`, `ENV_CONTRACT`, `renderEnvExample`).
Repo PÚBLICO: la documentación y los PRs no deben incluir secretos ni infraestructura interna.

## Stack
TypeScript 5, vitest 2, única dependencia `@supabase/supabase-js`. CI usa Node 22. Sin Next/React.

## Comandos (package.json)
- `npm install` / `npm ci`
- `npm run type-check` (tsc --noEmit)
- `npm test` (vitest run)
- `npm run build` (tsc → `dist/`)

## Estructura
- `src/index.ts`: `getConfig`, `clearConfigCache`, y reexporta `./env`.
- `src/env.ts`: contrato y helpers de entorno (sin Supabase).
- `tests/config.test.ts`, `tests/env.test.ts`.
- `dist/`: build COMMITEADO (forma de distribución, ver abajo).
- `CHANGELOG.md`: se mantiene a mano por versión.

## Convenciones y trampas
- **`dist/` se commitea.** El CI (`.github/workflows/ci.yml`) corre type-check, test, build y falla si
  `git diff -- dist` no está limpio. Tras tocar `src/`, correr `npm run build` y commitear `dist/`.
- **Nunca imprimir ni lanzar el valor de una variable**, solo su nombre (los avisos de alias y errores
  de `requireEnv`/`loadEnv` siguen esa regla).
- Los avisos de alias/legado hacen `console.warn` una sola vez por nombre por proceso (estado en `globalThis`).
- No hay estado de módulo que dependa de configuración: todo se lee de `process.env` en cada llamada.
- Un string vacío cuenta como variable faltante. `loadEnv` lanza solo si `NODE_ENV === "production"`.
- `readEnv` usa acceso dinámico `process.env[name]`: es para servidor; en componentes cliente de Next las
  `NEXT_PUBLIC_*` solo se inlinean con acceso literal.
- Multitenant: `normalizeTenant` no tiene lista cerrada (un tenant nuevo no requiere tocar el paquete;
  ver `TENANT_ID_ALIASES`). No hardcodear tenants en lógica; llaves y queries con scope por tenant.
- No guardar secretos en `system_settings`: por RLS la anon key solo ve filas `is_secret=false`.
- Agregar una variable al contrato: editar `ENV_CONTRACT` en `src/env.ts` (clase `platform | service |
  tenant | provider`), agregar test y actualizar README y CHANGELOG.

## Variables de entorno que usa el paquete
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`: proyecto Supabase de Mission Control para
  `getConfig` (también se pueden pasar por opciones).
- El resto de nombres (`SAP_BACKEND_URL`, `MISSION_CONTROL_SECRET`, llaves por tenant, etc.) son el
  contrato que el paquete describe, no variables que el repo necesite para compilar.

## Publicación y rama default
- Rama default: `main`. No hay `npm publish`: los consumidores instalan por tag de GitHub,
  `github:ai4u-com-co/config#vX.Y.Z`.
- Según el README, la fuente de verdad está en el monorepo `ai4u-com-co/kernel` (`packages/config`) y este
  repo es el espejo publicado. Por confirmar: el flujo exacto de sincronización kernel → espejo y si se
  puede contribuir directo aquí.
- Al subir versión: actualizar `version` en `package.json`, `CHANGELOG.md`, el ejemplo de instalación del
  README, rebuild de `dist/` y tag.

## Piezas relacionadas
Hermanos del ecosistema con el mismo modelo de distribución: `@ai4u/platform`, `@ai4u/mc-sso`,
`@ai4u/design-system`. La tabla `system_settings` vive en el repo `mission-control` (por confirmar el nombre exacto del repo).
