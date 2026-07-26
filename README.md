# kernel

Etapa 2 de la migración a monorepo del ecosistema superAI: los paquetes compartidos
(`@ai4u/platform`, `@ai4u/mc-sso`, `@ai4u/design-system`, `@ai4u/config`) fusionados en
un repo con historia preservada, para que cambiar el vocabulario compartido entre ellos
sea un commit, no una coordinación manual entre 4 repos.

**Piloto actual (jul-26-2026): solo `@ai4u/config`**, el paquete más chico (18 líneas,
2 consumidores reales) y el de menor blast radius. `platform`/`mc-sso`/`sistemaDiseno`
NO están acá todavía — se mueven después de validar el mecanismo con el que menos duele.

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
  config/     — @ai4u/config, historia importada de ai4u-com-co/config vía git subtree
```

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

## Siguiente paso (no hecho todavía)

Repetir este mismo patrón con `platform` (27 consumidores), `mc-sso` (21) y
`sistemaDiseno` (25) — en ese orden solo después de confirmar que el mecanismo de
espejo funciona de punta a punta con `config` en un ciclo real (tag → push a
`ai4u-com-co/config` → `bump-bot` lo detecta → PR draft en un consumidor real → CI
verde). Ese ciclo real todavía no corrió.
