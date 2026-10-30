# CLAUDE.md — kernel

Monorepo (npm workspaces) con los **paquetes compartidos del ecosistema superAI**. Es la fuente de
verdad del código; cada paquete se sigue publicando a los consumidores como
`github:ai4u-com-co/<repo>#vX.Y.Z` a través de un repo espejo. Lo usa quien mantiene los paquetes
compartidos, no es una app ni se despliega. Repo público: no poner secretos ni datos de clientes.

- Rama default: `main`. Node 22 en CI. Paquetes en TypeScript (`tsc`) con tests `vitest`.

## Paquetes (`packages/`, versión según su `package.json`)
| Carpeta | Paquete | Repo espejo (`mirror.json`) |
|---|---|---|
| `config` | `@ai4u/config` 0.2.0 | `ai4u-com-co/config` |
| `platform` | `@ai4u/platform` 0.7.0 | `ai4u-com-co/platform` |
| `mc-sso` | `@ai4u/mc-sso` 1.3.0 | `ai4u-com-co/mc-sso` |
| `design-system` | `@ai4u/design-system` 1.4.0 | `ai4u-com-co/sistemaDiseno` |
| `contracts` | `@ai4u/contracts` 0.7.0 | `ai4u-com-co/contracts` |

`design-system` tiene su propio `CLAUDE.md` (Vite + MUI + Storybook, reglas responsive): léelo antes de tocarlo.

## Comandos (raíz, `package.json`)
- `npm ci` — instalar todos los workspaces
- `npm run type-check` / `npm test` / `npm run build` — corren en todos los paquetes con
  `--workspaces --if-present`
- `design-system` tiene `typecheck` y su alias `type-check`, así que la raíz sí lo corre. No tiene
  script `test` (sus 7 tests nunca corren; ver README).

## Convenciones y trampas
- **`dist/` de cada paquete se commitea.** El CI (`ci.yml`) corre type-check, test, build y falla si
  `git diff packages/*/dist` no está limpio: tras cambiar `src/`, corre `npm run build` y commitea.
- `design-system` usa Vite/Rollup. Su `dist/` solo depende del código y de las versiones de Vite/Rollup
  (dos builds seguidos son idénticos); el desfase contra el tag `v1.4.0` era por bundlear MUI (corregido
  en 1.4.1). `npm run verify-externals` (en el CI) falla si `@mui/*`/`@emotion/*`/React vuelven a bundlearse.
- Los consumidores leen `dist/`, no `src/`. Un cambio de comportamiento pide: test, entrada en el
  `CHANGELOG.md` del paquete y subir `version`.
- Hay dependencia interna `platform -> mc-sso` fijada por tag de GitHub; si subes `mc-sso`, revisa
  ese pin.
- Paquetes que tocan tenants (`platform`, `contracts`, `mc-sso`): no hardcodear tenant; permisos y
  queries con scope por tenant. Solo se habla con SAP vía `sap-b1-backend` (:4100).

## Publicar un paquete (espejo)
1. PR a `main` con el cambio, `dist/` al día y CI en verde. **El commit que se va a taggear NO puede
   llevar `[skip ci]`** en el mensaje (GitHub no dispara workflows de push/tags para ese commit).
2. `scripts/release.sh <paquete> <versión>` (ej. `platform 0.7.1`): valida versión, CHANGELOG, `dist/`
   limpio y que HEAD no tenga `[skip ci]`; crea y empuja el tag `<paquete>-vX.Y.Z` y espera a que
   aparezca `vX.Y.Z` en el espejo. Si un tag ya existe pero el espejo no lo recibió:
   `gh workflow run mirror.yml -f tag=<paquete>-vX.Y.Z`. El workflow `verify-mirror.yml` (semanal)
   abre un Issue si algún último tag de kernel no está en su espejo.
3. `.github/workflows/mirror.yml` compila el paquete y hace `rsync --delete` de su contenido al repo
   espejo (commit + tag `vX.Y.Z`), **excluyendo `.github/workflows/`** (la GitHub App no tiene el permiso
   `workflows`; el publish no crea, modifica ni borra workflows del espejo). Tiene reintentos ante 403/5xx transitorios
   (`.github/scripts/mirror-push-retry.sh`). No sobrescribe un tag ya existente en otro commit.
4. Los consumidores pinean `github:ai4u-com-co/<espejo>#vX.Y.Z` (actualización automatizada por `bump-bot`).
- **No edites a mano el contenido de los repos espejo** (src/, dist/, plantillas): el siguiente publish
  lo sobrescribe con lo de aquí. Las plantillas de Issue/PR (`.github/ISSUE_TEMPLATE/`,
  `PULL_REQUEST_TEMPLATE.md`) SÍ viajan al espejo desde `packages/<paquete>/.github/`; cámbialas acá.
  Los **workflows del espejo (`.github/workflows/ci.yml`) NO los toca el publish**: se editan en el
  propio espejo. Los `packages/*/.github/workflows/` de kernel son copias de referencia que el publish ignora.
- Secrets del workflow: `BUMP_BOT_APP_CLIENT_ID` y `BUMP_BOT_APP_PRIVATE_KEY` (GitHub App de
  bump-bot). Según el README deben estar cargados en este repo (paso humano); no se ven desde aquí.
- Los espejos permanecen para siempre (decisión del README): los consumidores no migran a `kernel`.

## Por confirmar
- `design-system` aún no se publica desde kernel; su `design-system/CLAUDE.md` y el README del espejo
  deben apuntar a `ai4u-com-co/sistemaDiseno`.
- Si el Actions budget de la org permite una ola de bumps (ver `OBSERVABILITY`/auditoría de costos).
