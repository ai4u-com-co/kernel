# kernel

Etapa 2 de la migración a monorepo del ecosistema superAI: los paquetes compartidos
(`@ai4u/platform`, `@ai4u/mc-sso`, `@ai4u/design-system`, `@ai4u/config`) fusionados en
un repo con historia preservada, para que cambiar el vocabulario compartido entre ellos
sea un commit, no una coordinación manual entre 4 repos.

**Estado (30-oct-2026)**: los 5 paquetes viven acá y se publican desde acá. Versiones: `config` 0.2.0,
`contracts` 0.7.0, `mc-sso` 1.3.0, `platform` 0.7.0 y `design-system` 1.4.0. Consumidores reales
(leídos de los `package.json`): `platform` 36, `mc-sso` 28, `config` 35, `design-system` 34, `contracts` 4.
El ciclo completo (tag → espejo → `bump-bot` → PR → merge → deploy) ya corrió en producción para
`config`, `contracts`, `mc-sso` y `platform` (hasta 0.6.2). `design-system` **no** se ha publicado
todavía desde `kernel` (su espejo `sistemaDiseno#v1.4.0` es anterior a este `dist/`); la 1.4.1
(fix del crash con MUI >= 9.1, ver `packages/design-system/CHANGELOG.md`) espera su tag `design-system-v1.4.1`.

El pin interno `platform → mc-sso` debe mantenerse en la última versión estable de `mc-sso`
(hoy `#v1.3.0`); si subes `mc-sso`, súbelo en el mismo PR.

## Por qué existe (y qué NO cambia para los 27+ consumidores)

Los repos `ai4u-com-co/config` (y luego `platform`, `mc-sso`, `sistemaDiseno`) siguen
existiendo como **espejos de solo lectura**: cuando se tagea `config-vX.Y.Z` acá, un
workflow compila ese paquete y publica su contenido como un commit + tag en
`ai4u-com-co/config`. Los consumidores siguen instalando exactamente
`"@ai4u/config": "github:ai4u-com-co/config#vX.Y.Z"` — nada cambia del lado de afuera,
`bump-bot` sigue funcionando sin tocarlo.

## Estructura

```
packages/
  config/         — @ai4u/config, historia importada de ai4u-com-co/config vía git subtree
  platform/       — @ai4u/platform, historia importada de ai4u-com-co/platform vía git subtree
  mc-sso/         — @ai4u/mc-sso, historia importada de ai4u-com-co/mc-sso (rama master) vía git subtree
  design-system/  — @ai4u/design-system, historia importada de ai4u-com-co/sistemaDiseno (rama master) vía git subtree
  contracts/      — @ai4u/contracts, historia importada de ai4u-com-co/contracts vía git subtree
```

**Scripts de verificación**: `design-system` define `typecheck` y `type-check` (alias, mismo
comando) para que `npm run type-check --workspaces --if-present` desde la raíz **sí** lo corra.

**Deuda real preexistente (no corregida)**: `design-system` tiene 7 archivos de test
(`src/**/__tests__/*.test.tsx`) pero **ningún script `test`**: nunca corrieron en CI. Además
`Button.test.tsx` usa `jest.mock`/`jest.fn` aunque el repo usa vitest 4 + Playwright
(`@vitest/browser-playwright`). Cablearlos es trabajo aparte.

## Espejo — estado real

**El mecanismo de build está probado**: `npm run build` desde la raíz genera
`packages/config/dist/` **byte a byte idéntico** al `dist/` actualmente publicado en
`ai4u-com-co/config` (verificado con `diff -r`, no solo "el build no truena").

**Publicar**: usa `scripts/release.sh <paquete> <versión>` (ver `CLAUDE.md`). Si un tag ya existe pero el
espejo no lo recibió, se re-publica sin re-crearlo: `gh workflow run mirror.yml -f tag=<paquete>-vX.Y.Z`.
**Nunca** pongas `[skip ci]` en un commit que vayas a taggear: GitHub no dispara workflows de `push`
(tags incluidos) para ese commit y el espejo no se publica (caso `platform-v0.7.0`, 30-oct-2026).

**El publish no toca los workflows del espejo**: `mirror.yml` excluye `.github/workflows/` del rsync
(la GitHub App no tiene el permiso `workflows`, y no se le da a propósito). Los `ci.yml` de cada espejo se
editan en el espejo; los de `packages/*/.github/workflows/` en este repo son copias de referencia que el
publish ignora. Las plantillas Issue/PR (`packages/*/.github/ISSUE_TEMPLATE/`, `PULL_REQUEST_TEMPLATE.md`)
sí se sincronizan.

**La automatización (`.github/workflows/mirror.yml`) reusa la GitHub App de
`bump-bot`** (mismo mecanismo ya validado en `ai4u-com-co/bump-bot#bump.yml`): mintea
un token de instalación acotado solo al repo espejo que corresponde, vía
`actions/create-github-app-token@v3`.

### Credencial

Los secrets `BUMP_BOT_APP_CLIENT_ID` / `BUMP_BOT_APP_PRIVATE_KEY` están cargados en este repo y el
espejo los usa desde sep-2026. Sin ellos el workflow falla explícito en el step "Verificar credencial".
Para rotarlos: `gh secret set BUMP_BOT_APP_CLIENT_ID --repo ai4u-com-co/kernel` (idem la clave privada).

## Carga de consumidores y bumps

`platform`, `mc-sso` y `design-system` tienen decenas de consumidores: cada tag nuevo provoca un PR
de `bump-bot` por consumidor (CI + preview). Por eso `bump-bot` espera 12 h de estabilidad antes de
bumpear (`tag-is-stable.sh`); publicar dos versiones seguidas dentro de esa ventana colapsa en un
solo bump a la última. La lista de consumidores de `bump-bot` (`consumers.json`) debe coincidir con
los `package.json` reales: si un repo nuevo no aparece ahí, no recibe bumps.

## Fidelidad del build — qué se verificó en cada paquete

| Paquete | Compilador | `dist/` vs publicado |
|---|---|---|
| `config` | `tsc` | Byte a byte idéntico |
| `platform` | `tsc` | Byte a byte idéntico |
| `mc-sso` | `tsc` | Byte a byte idéntico |
| `design-system` | Vite/Rollup | Hasta 1.4.0 **no** reproducible contra el tag `v1.4.0` del espejo, con `src/` idéntico: la causa no era el minificador sino que `vite.config.ts` externalizaba `@mui/material` y `@mui/icons-material` solo por nombre exacto, así que los subpaths (`@mui/material/styles`, `@mui/icons-material/<X>`, `@emotion/*`) se bundleaban y el `dist/` dependía de la versión de MUI instalada al compilar (el tag lleva `@mui/styled-engine` 9.0.0 sin `theme.motion` y crashea con MUI >= 9.1). **Corregido en 1.4.1**: `external` por regex (`/^@mui\//`, `/^@emotion\//`, react…) y `npm run verify-externals` en el CI. Dos builds seguidos son idénticos (verificado: 197 archivos, mismos SHA-256). |
| `contracts` | `tsc` | Byte a byte idéntico |

Los 5: historia completa preservada vía `git subtree` (`config`/`platform`/`contracts`
desde `main`, `mc-sso`/`sistemaDiseno` desde `master`), CI real de `kernel` en verde.

## Decisión: los repos-espejo quedan para siempre

`ai4u-com-co/config`, `platform`, `mc-sso` y `sistemaDiseno` **no se retiran**. Razones:

1. La arquitectura de la Etapa 2 se diseñó entera alrededor de la invisibilidad para
   los consumidores — 27+21+25+1 repos reales instalan vía `github:owner/repo#tag`.
   Migrarlos a instalar directo desde `kernel` volvería a tocar cada uno de esos
   consumidores, exactamente la disrupción que esta etapa evitó.
2. No hay costo real de mantenerlos: `mirror.yml` los sincroniza solo, no son
   mantenimiento manual — no hay "deuda" que retirarlos resuelva.
3. Reabrir esto solo tendría sentido si el ecosistema entero migrara a instalar
   paquetes directo desde `kernel` (un cambio de convención de instalación en 74+
   repos) — eso es una decisión de producto/infraestructura mucho más grande que
   esta migración, no algo a decidir de paso acá.

`kernel` queda como la fuente de verdad del código; los 4 repos, como la interfaz
pública estable hacia los consumidores. Sin fecha de retiro.
