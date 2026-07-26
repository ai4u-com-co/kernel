# @ai4u/contracts

Vocabulario compartido del ecosistema **superAI**: tipos y mapas que dos o más repos
necesitan ver idénticos. Si un mismo concepto vive duplicado en más de un repo (y las
copias pueden divergir en silencio), este es el lugar — no una copia local más.

Distribución: igual que `@ai4u/platform`, `@ai4u/mc-sso`, `@ai4u/design-system` y
`@ai4u/config` — repo GitHub con `dist/` commiteado, consumido por tag:
`"@ai4u/contracts": "github:ai4u-com-co/contracts#vX.Y.Z"`.

## Qué resuelve (y qué NO)

- **Sí**: el vocabulario SAP (`ENTITY_MAP`) que hoy vive copiado byte a byte en
  `mission-control` y `sap-b1-chat` — un solo lugar para que "ventas/pedidos" siempre
  signifique lo mismo en todo el ecosistema.
- **No** (todavía, y a propósito): el cliente HTTP hacia `sap-b1-backend`
  (`BackendClient`). Existe una copia en `mission-control` y otra en `sap-b1-chat`,
  pero **no son iguales**: la de `sap-b1-chat` agrega un header `x-mc-secret` para
  auth de servicio a servicio (`kpis → backend`, ver `sap-b1-backend/lib/auth.ts`),
  que `mission-control` no necesita. Unificarlas a ciegas sería perder esa
  funcionalidad real, no una limpieza — queda documentado para decidir con
  intención en una pasada aparte, no en esta.
- **No**: la observabilidad (`bootstrapObservability`). Es lógica de arranque
  (kernel), no vocabulario — pertenece a `@ai4u/platform`, no acá.

## Instalación

```bash
npm install github:ai4u-com-co/contracts#v0.1.0
```

## Uso

```ts
import { ENTITY_MAP, type EntityConfig } from "@ai4u/contracts"

const cfg = ENTITY_MAP["ventas/pedidos"]
```
