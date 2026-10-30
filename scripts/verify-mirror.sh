#!/usr/bin/env bash
# Verifica que el ÚLTIMO tag `<paquete>-vX.Y.Z` de cada paquete en kernel exista también como
# `vX.Y.Z` en su repo espejo (mirror.json). Sale con 1 y lista los faltantes si alguno no llegó.
#
# Por qué existe: platform-v0.7.0 (30-oct-2026) se taggeó sobre un commit con `[skip ci]`, mirror.yml
# nunca corrió y el espejo quedó en v0.6.2 sin que nada avisara.
#
# Uso: scripts/verify-mirror.sh            (requiere `gh` autenticado o GH_TOKEN, `jq` y los tags locales)
# Salida: una línea por paquete; los faltantes se imprimen también como `MISSING <paquete> <tag>`.
set -euo pipefail

cd "$(dirname "$0")/.."

missing=0
for pkg in $(jq -r 'keys[]' mirror.json); do
  repo="$(jq -r --arg p "$pkg" '.[$p]' mirror.json)"
  latest="$(git tag -l "${pkg}-v*" --sort=-v:refname | head -n1)"
  if [ -z "$latest" ]; then
    echo "SKIP    ${pkg}: sin tags en kernel todavía (espejo ${repo})"
    continue
  fi
  version="${latest#${pkg}-}"
  if gh api "repos/${repo}/git/ref/tags/${version}" >/dev/null 2>&1; then
    echo "OK      ${pkg}: ${latest} → ${repo}@${version}"
  else
    echo "MISSING ${pkg} ${latest}  (${repo} no tiene ${version})"
    missing=$((missing + 1))
  fi
done

if [ "$missing" -gt 0 ]; then
  echo
  echo "${missing} paquete(s) sin publicar en su espejo. Re-publicar sin re-taggear:"
  echo "  gh workflow run mirror.yml -f tag=<paquete>-vX.Y.Z"
  exit 1
fi
