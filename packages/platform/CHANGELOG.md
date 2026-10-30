# Changelog — @ai4u/platform

## 0.8.0 — 2026-10-30

Seguridad y robustez (auditoría de 0.7.0). Compatible salvo lo listado en "Cambios visibles".

### Cambios visibles (revisa tus consumidores antes de actualizar)
- **Cuerpo de un 500 no operacional.** `toErrorResponse` / `withApiHandler` ya no devuelven
  `err.message` cuando el error NO es operacional y su status es >= 500 (excepciones desconocidas,
  `InfrastructureError`/`ExternalServiceError`, `AppError` con `isOperational:false`). Responden
  `{ "error": "Error interno", "code": "UNEXPECTED_ERROR" | <code>, "category", "requestId" }`; el mensaje real
  (redactado) queda solo en el log. Los 4xx y los `AppError` operacionales conservan su mensaje.
  Antes: `{"error":"connect ECONNREFUSED 10.0.0.5:5432 password authentication failed…"}`.
  Si una app mostraba `body.error` de un 500 al usuario, ahora verá "Error interno": usa `requestId`
  para correlacionar con el log.
- **Nivel de log de errores lanzados.** Un 4xx LANZADO (`UnauthorizedError`, `ForbiddenError`,
  `NotFoundError`, `ValidationError`…) se loguea como `warn` (sin stack), igual que un 4xx retornado como
  `Response`; antes era `error`. Los 5xx siguen en `error`. Los paneles/automatizaciones que filtran por
  `level=ERROR` (p. ej. nightly fixer) verán menos ruido; los que contaban 401/403/404 por nivel ERROR
  deben pasar a WARN.
- **`x-request-id` entrante** se acepta solo si cumple `/^[A-Za-z0-9._-]{1,128}$/`; si no, se genera uno
  nuevo (antes se reflejaba tal cual, hasta 5000+ caracteres).
- **Logger**: `msg` y los extras (recursivo, profundidad 4) pasan por `redactSecrets` y las claves
  sensibles se enmascaran también en objetos anidados; `tenant`, `userId` y `requestId` del contexto de la
  request ya no se pueden pisar con extras (si no hay contexto, el extra sigue valiendo); cada línea lleva
  `platformVersion`.
- **client-errors**: `service` debe cumplir `/^[A-Za-z0-9._-]{1,80}$/` y `path` ser un pathname codificado que
  empieza con `/` (si no, 400 sin registrar); cuerpo sin `content-length` por encima de `maxBytes` => 413 sin
  leerlo entero; la clave del rate limit sale de `x-vercel-forwarded-for` / `x-real-ip` antes que de
  `x-forwarded-for`.
- `engines.node` pasa a `>=22`.

### Añadido
- `readIdentity(req, { serviceId?, allowedTenants?, normalizeTenant?, acceptLegacy? })` delega en
  `readMcSession` de mc-sso 1.3.0 (pin `#v1.3.0`, sin cambio en el árbol). `configureIdentity({...})` fija el
  default de la app (las opciones por llamada lo pisan). `Identity.serviceId` expone el servicio de la sesión.
  **Opt-in**: sin opciones el comportamiento es idéntico al de 0.7.0 (no se deriva nada de `SERVICE_ID`: en
  varias apps no coincide con el `serviceId` de su handler SSO y cortaría sesiones válidas). Si hay una cookie
  de sesión y no hay `serviceId` configurado, se emite UN WARN por proceso (medir adopción).
- `isModuleAllowedStrict(moduleId, allowedModules)` y `requireModule(identity, id, { strict: true })`
  (`null`/`undefined`/`[]` => ningún módulo); `withApiHandler({ strictModules: true })` lo aplica a
  `requireModule`. `isModuleAllowed` / `requireModule` sin opción conservan su semántica (null/[] = todo).
- `platformVersion` (constante `PLATFORM_VERSION` en `src/version.ts`, atada a package.json por test).

### Corregido
- Logger: `fetch` al ingest con `AbortSignal.timeout(2000)` (un ingest colgado retenía la respuesta de la API
  hasta el timeout de la función); `flushLogs()` concurrente espera al envío en curso en vez de retornar con
  el buffer vacío; si el envío falla (red, timeout, 5xx/408/429) el lote se reencola con tope de 1000
  registros (los más viejos se descartan) y los envíos automáticos esperan 5 s tras un fallo; ya no lanza
  `TypeError` al loguear un objeto con referencias circulares.

### Cómo adoptar el endurecimiento de auth
1. Averigua el `serviceId` con el que la app crea su handler SSO (`createMcAuthHandler({ serviceId })`);
   NO asumas que es `SERVICE_ID`.
2. Una vez, al arrancar la app: `configureIdentity({ serviceId: "<ese id>" })` (o pasa `sessionAuth:
   { serviceId }` a `withApiHandler`). Apps de un solo tenant: añade `allowedTenants: ["<tenant>"]`
   (y `normalizeTenant` de `@ai4u/config` si hay alias).
3. Mide: el WARN "readIdentity sin serviceId configurado" deja de salir y una cookie de otra app/tenant
   pasa a dar 401. Las sesiones "legacy" (emitidas por mc-sso <= 1.2.0, sin `serviceId`) se aceptan hasta
   que actives `acceptLegacy: false` (hazlo >= 8 h después de que todas las apps emitan sesiones con
   `serviceId`, que es lo que duran).
4. Rutas en apps que no son Mission Control: usa `requireModule(..., { strict: true })` / `strictModules`.

### Decisión pendiente (no cambiada a propósito)
`allowedModules` ausente o `[]` sigue significando acceso a TODOS los módulos en `isModuleAllowed` /
`requireModule` por defecto (copia de `access.ts` de Mission Control; puede ser intencional para admins).
Cambiarlo altera permisos reales: requiere confirmación de Mariano. Mientras tanto el modo estricto es opt-in.

### No incluido
- `@vercel/oidc` sigue en `^3.8.9`: la 4.0.5 mantiene la API usada (`getVercelOidcToken`) y pasa los tests, pero
  arrastra `@vercel/cli-config` con `zod` fijado a 4.1.11, así que no cierra los 3 high de `npm audit`.
- Sin `peerDependencies` de next/react: el código no los importa.
- devDependencies (vitest 5, etc.) sin tocar: `npm install vitest@5` da ERESOLVE en el monorepo (otros paquetes
  están en vitest 2/4).

## 0.7.0 — 2026-10-28

### Añadido
- `@ai4u/platform/instrumentation`: `onRequestError(err, request, context)` para
  `export { onRequestError } from ...` en `instrumentation.ts`. Registra errores de render,
  rutas, acciones y proxy de Next (ERROR + flush) sin headers/cookies/cuerpo/querystring.
  No-op en Edge.
- `@ai4u/platform/client`: `installClientErrorReporter` y `reportClientError` (errores del
  navegador: dedupe 60 s, 5 por sesión, sendBeacon/fetch keepalive, solo pathname).
- `@ai4u/platform/client-errors`: `createClientErrorHandler` (POST sin auth: JSON, tope de
  tamaño, mismo origen, límite por IP en memoria, saneado; responde 204).
- `@ai4u/platform/jobs`: `runJob(name, fn, { log?, rethrow?, tenant? })` para crons.

### Corregido
- `@ai4u/platform/logger`: `serializeErr` enmascara claves y tokens en `message` y `stack`
  (query `?key=`/`token=`/`signature=`…, `Bearer`/`Basic`, JWT, claves `sk-…`/`AIza…`/`ghp_…`/
  `sb_secret_…`, credenciales `user:clave@` en URL). Nueva función pura `redactSecrets(text)`.
  Los correos se enmascaran a `[correo]@dominio` (si el dominio no es ASCII normal, solo
  `[correo]`); es PII, no un secreto (errores de SMTP traen el destinatario) y es fail-closed
  (Unicode, locales largos, localhost/IP, `@` encadenados como `@a@b.com`; falsos positivos aceptados:
  `pkg@1.2.3`, `git@github.com`). Las rutas npm con scope (`/node_modules/@scope/pkg`) no se tocan;
  un correo pegado a una ruta (`https://host/ana@x.com`) sí se enmascara. Lo que precede al
  correo solo se conserva si la racha parece claramente una ruta (`/`, `./`, `../`, `~/`,
  `esquema://` o `node_modules/`); en otro caso (`a/b@x.com`) toda la racha es parte local.
  La query entera de las URLs `http(s)://…?…` se enmascara (`?[redacted]`, el path se conserva) y
  los parámetros `nombre=valor` cuyo nombre TERMINA en token/key/secret/signature/sig/password/
  passwd/pass/auth/credential/session se enmascaran también fuera de URLs. Los tokens se enmascaran completos (sin límite de longitud por token). Se redacta primero
  y luego se recorta: `message` a 16 384 caracteres y `stack` a 32 768 (`…[truncado]`);
  entrada acotada y regex ancladas con lookbehind mantienen el coste lineal.

### Sin cambios
- `withApiHandler`, `getLogger`, `configureTransport` y el resto de la API existente.

## 0.6.2 — 2026-09-30

### Corregido
- `@ai4u/platform/auth`: `parseCookies` (usado por `readIdentity`) llamaba a
  `decodeURIComponent` sin guardia. Una sola cookie con percent-encoding inválido
  (p.ej. `%E0%A4%A`) en el header `Cookie` hacía lanzar `URIError: URI malformed` a
  `readIdentity`, y `withApiHandler` respondía **500** en toda ruta envuelta, con o sin
  `requireModule`/`requireRole` (siempre que hubiera secreto de sesión configurado).
- Ahora una cookie mal codificada se **ignora** y las demás se siguen leyendo (mismo
  criterio que el parser de cookies de Next, `@edge-runtime/cookies`). No se usa el valor
  crudo: así un duplicado basura (`mc_session=<válido>; mc_session=%E0`) no pisa al
  válido. Una `mc_session` mal codificada da identidad `null` (401 donde se exige
  sesión), nunca 500.

### Sin cambios
- API pública y comportamiento con cookies bien codificadas (incluido percent-encoding
  válido y valores con `=`).

## 0.6.1 — 2026-09-30

### Cambiado
- Dependencia `@ai4u/mc-sso` de `github:ai4u-com-co/mc-sso#v1.1.0` a `#v1.2.0`, la
  misma que ya usan las apps. Es aditiva (1.2.0 suma `createMcAuthHandler`,
  `readMcSession`, `mcSessionGuard` y `MC_SESSION_COOKIE`; `verifySession`, lo único
  que usa `@ai4u/platform/auth`, no cambia). Evita que una app termine con dos copias
  de mc-sso (la suya 1.2.0 y la anidada 1.1.0 de platform).
- Reemplaza al PR #10 de bump-bot en el espejo `ai4u-com-co/platform` (la fuente de
  verdad es el monorepo kernel; el espejo se sobrescribe al publicar el tag).

### Sin cambios
- API y comportamiento de todos los subpaths.

## 0.6.0 — 2026-09-30

### Agregado
- Subpath nuevo `@ai4u/platform/gateway-identity` (Fase 3, identidad servicio-a-servicio
  hacia `sap-b1-backend` con OIDC de Vercel):
  - `getGatewayIdentityHeaders(opts?)` → `{ "x-ai4u-identity": <token> }` o `{}`. Pide el
    token a `@vercel/oidc` (`getVercelOidcToken({ audience })`) dentro de cada llamada,
    con tope `timeoutMs` (default 1500 ms). Fail-open: nunca lanza. Nunca loguea el token
    (JWTs redactados en mensajes de error); en Vercel 1 `warn`/min por instancia, fuera
    de Vercel `debug`. Opciones `getToken` y `logger` inyectables.
  - Constantes `GATEWAY_IDENTITY_HEADER` (`x-ai4u-identity`), `GATEWAY_OIDC_AUDIENCE`
    (`https://sap-b1-backend.ai4u`) y `GATEWAY_IDENTITY_TIMEOUT_MS` (1500).
  - Reemplaza al `lib/gateway-identity.ts` copiado en mission-control, ai4u-kpis y
    planeador-produccion (misma semántica).
- Dependencia `@vercel/oidc` ^3.8.9. Solo la carga el subpath `gateway-identity`: el barrel
  raíz (`@ai4u/platform`) no lo re-exporta.

### Sin cambios
- Logger, errores, http, auth y security: sin cambios de API ni de comportamiento.
