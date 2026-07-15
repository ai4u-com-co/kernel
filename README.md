# @ai4u/config

Config compartida del ecosistema **superAI**: para que agregar un módulo nuevo no
implique volver a copiar 15-20 variables de entorno a mano en cada proyecto de Vercel.

Distribución: igual que `@ai4u/platform`, `@ai4u/mc-sso` y `@ai4u/design-system` — repo
GitHub con `dist/` commiteado, consumido por tag:
`"@ai4u/config": "github:donchelo/config#vX.Y.Z"`.

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
npm install github:donchelo/config
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
