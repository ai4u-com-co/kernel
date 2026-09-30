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
| `platform` | `@ai4u/platform` 0.6.2 | `ai4u-com-co/platform` |
| `mc-sso` | `@ai4u/mc-sso` 1.2.0 | `ai4u-com-co/mc-sso` |
| `design-system` | `@ai4u/design-system` 1.4.0 | `ai4u-com-co/sistemaDiseno` |
| `contracts` | `@ai4u/contracts` 0.7.0 | `ai4u-com-co/contracts` |

`design-system` tiene su propio `CLAUDE.md` (Vite + MUI + Storybook, reglas responsive): léelo antes de tocarlo.

## Comandos (raíz, `package.json`)
- `npm ci` — instalar todos los workspaces
- `npm run type-check` / `npm test` / `npm run build` — corren en todos los paquetes con
  `--workspaces --if-present`
- Ojo: `design-system` llama `typecheck` (sin guion) y no tiene script `test`, así que la raíz lo
  salta en silencio. Verificarlo: `npm run typecheck --workspace=packages/design-system`.

## Convenciones y trampas
- **`dist/` de cada paquete se commitea.** El CI (`ci.yml`) corre type-check, test, build y falla si
  `git diff packages/*/dist` no está limpio: tras cambiar `src/`, corre `npm run build` y commitea.
- `design-system` usa Vite/Rollup: su `dist/` puede diferir entre entornos de build por el minificador
  (no determinista); no es bug de código.
- Los consumidores leen `dist/`, no `src/`. Un cambio de comportamiento pide: test, entrada en el
  `CHANGELOG.md` del paquete y subir `version`.
- Hay dependencia interna `platform -> mc-sso` fijada por tag de GitHub; si subes `mc-sso`, revisa
  ese pin.
- Paquetes que tocan tenants (`platform`, `contracts`, `mc-sso`): no hardcodear tenant; permisos y
  queries con scope por tenant. Solo se habla con SAP vía `sap-b1-backend` (:4100).

## Publicar un paquete (espejo)
1. PR a `main` con el cambio, `dist/` al día y CI en verde.
2. Tag `<paquete>-vX.Y.Z` (ej. `platform-v0.6.3`; la carpeta debe existir en `packages/`).
3. `.github/workflows/mirror.yml` compila el paquete y hace `rsync --delete` de su contenido al repo
   espejo (commit + tag `vX.Y.Z`). Tiene reintentos ante 403/5xx transitorios
   (`.github/scripts/mirror-push-retry.sh`). No sobrescribe un tag ya existente en otro commit.
4. Los consumidores pinean `github:ai4u-com-co/<espejo>#vX.Y.Z` (actualización automatizada por `bump-bot`).
- **No edites los repos espejo a mano**: el siguiente publish los sobrescribe con lo de aquí.
- Secrets del workflow: `BUMP_BOT_APP_CLIENT_ID` y `BUMP_BOT_APP_PRIVATE_KEY` (GitHub App de
  bump-bot). Según el README deben estar cargados en este repo (paso humano); no se ven desde aquí.
- Los espejos permanecen para siempre (decisión del README): los consumidores no migran a `kernel`.

## Por confirmar
- Si los secrets de la GitHub App ya están configurados en este repo (el README los marca pendientes).
- Estado de publicación de `mc-sso` y `design-system` desde kernel (el README, de julio, dice que aún
  no se habían taggeado; hoy hay tags `mc-sso-v1.2.0`, `platform-v0.6.x`, `contracts-v0.7.0`).
- `design-system` aún cita `github:donchelo/sistemaDiseno` en su guía; confirmar origen canónico.
