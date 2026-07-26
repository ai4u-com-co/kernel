# kernel

Etapa 2 de la migración a monorepo del ecosistema superAI: los paquetes compartidos
(`@ai4u/platform`, `@ai4u/mc-sso`, `@ai4u/design-system`, `@ai4u/config`) fusionados en
un repo con historia preservada, para que cambiar el vocabulario compartido entre ellos
sea un commit, no una coordinación manual entre 4 repos.

**Estado (jul-26-2026): los 5 paquetes migrados** (los 4 originales + `contracts`,
creado el mismo día como quinto paquete compartido y plegado acá para consistencia).
`config` con el ciclo end-to-end probado en producción real (tag → espejo → bump-bot →
PR → merge → deploy). `platform` (27 consumidores), `mc-sso` (21) y
`design-system`/`sistemaDiseno` (25) con historia importada, build/type-check en verde
— **sin publicar tags nuevos todavía**, a propósito (ver nota abajo). `contracts` ya
tenía su tag original `v0.1.0` (de antes de existir `kernel`) y un único consumidor real
(`sap-b1-chat`) — bajo riesgo si algún día se fuerza un ciclo de prueba ahí, pero no
hace falta: nada cambió de su contenido.

Confirmado también: el pin interno `platform → mc-sso` (`github:ai4u-com-co/mc-sso#v1.1.0`,
corregido en julio tras el bug del pin flotando) llegó correcto en la copia importada.

**`design-system` es distinto a los otros 3 en un punto importante** (ver sección
"Fidelidad del build" abajo): su `dist/` NO es byte a byte idéntico al publicado, y no
es un bug — es no-determinismo conocido del minificador de Vite/Rollup entre entornos
de build distintos, no una diferencia de código fuente.

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

**Nota de nombres — no tocado a propósito**: el script de type-check de `design-system`
se llama `typecheck` (sin guion, documentado así en su propio `CLAUDE.md` — convención
intencional, no un descuido), distinto al resto (`type-check`). `npm run type-check
--workspaces --if-present` desde la raíz lo salta en silencio (`--if-present` no
distingue "no existe" de "existe con otro nombre"). Verificarlo hoy requiere el comando
explícito `npm run typecheck --workspace=packages/design-system` — corrido a mano,
en verde.

**Deuda real preexistente encontrada (no causada por esta migración, no corregida)**:
`design-system` tiene **6+ archivos de test reales** (`src/**/__tests__/*.test.tsx`:
Button, Navigation, Accessibility, SEOHead, Logo, ServiceCard) pero **ningún script
`test` en `package.json`** — nunca corrieron en CI. No es un `vitest run` trivial de
agregar: usa `@storybook/addon-vitest` en **modo navegador vía Playwright**
(`@vitest/browser-playwright`), que necesita navegadores instalados y una config de
Storybook — wirearlo de verdad es trabajo aparte, no algo para hacer de paso en un
import de historia.

## Espejo — estado real

**El mecanismo de build está probado**: `npm run build` desde la raíz genera
`packages/config/dist/` **byte a byte idéntico** al `dist/` actualmente publicado en
`ai4u-com-co/config` (verificado con `diff -r`, no solo "el build no truena").

**La automatización (`.github/workflows/mirror.yml`) reusa la GitHub App de
`bump-bot`** (mismo mecanismo ya validado en `ai4u-com-co/bump-bot#bump.yml`): mintea
un token de instalación acotado solo al repo espejo que corresponde, vía
`actions/create-github-app-token@v3`.

### Credencial [PASO HUMANO]

Los secrets `BUMP_BOT_APP_CLIENT_ID` / `BUMP_BOT_APP_PRIVATE_KEY` viven hoy solo en el
repo `bump-bot` — GitHub nunca expone el valor de un secreto ya configurado (no hay
API para leerlo, ni con autorización), así que hace falta que alguien con acceso a la
clave privada original la agregue también acá:

```bash
gh secret set BUMP_BOT_APP_CLIENT_ID --repo ai4u-com-co/kernel --body "<mismo valor que en bump-bot>"
gh secret set BUMP_BOT_APP_PRIVATE_KEY --repo ai4u-com-co/kernel --body "$(cat ruta/a/la/clave-privada.pem)"
```

O vía UI: `https://github.com/ai4u-com-co/kernel/settings/secrets/actions/new`.

Sin esos secrets, el workflow falla explícito (no en silencio) en el step
"Verificar credencial".

## Nota sobre `platform`, `mc-sso` y `design-system`: por qué no se taggearon todavía

A diferencia de `config` (2 consumidores, bump trivial de bajo costo para probar el
mecanismo completo), los otros 3 tienen mucho más blast radius (27, 21 y 25
consumidores). El mecanismo de espejo ya está probado end-to-end con `config` —
repetir esa prueba acá forzando un bump artificial dispararía `bump-bot` sobre
decenas de consumidores reales a la vez, solo para "probar algo" que ya se probó.
No se justifica.

El primer tag real de cada uno desde `kernel` se hace cuando haya un cambio real que
publicar (un fix, una feature) — no antes.

## Fidelidad del build — qué se verificó en cada paquete

| Paquete | Compilador | `dist/` vs publicado |
|---|---|---|
| `config` | `tsc` | Byte a byte idéntico |
| `platform` | `tsc` | Byte a byte idéntico |
| `mc-sso` | `tsc` | Byte a byte idéntico |
| `design-system` | Vite/Rollup | **No** idéntico — confirmado no-determinismo del minificador (dos builds seguidos en el mismo lugar SÍ son idénticos entre sí; la diferencia es contra el publicado en otro entorno de build). Nombres de variables minificadas distintos, mismo código fuente (mismo commit vía subtree), typecheck limpio. |
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
