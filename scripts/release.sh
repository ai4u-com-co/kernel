#!/usr/bin/env bash
# Publica un paquete del kernel: valida, crea el tag `<paquete>-vX.Y.Z`, lo empuja y espera a que
# mirror.yml deje `vX.Y.Z` en el repo espejo.
#
# Uso:   scripts/release.sh <paquete> <versión> [--yes] [--skip-build]
# Ej.:   scripts/release.sh platform 0.7.1
#
# Valida (y aborta si falla):
#   - estás en `main`, limpio y al día con origin/main
#   - la versión coincide con packages/<paquete>/package.json y está en su CHANGELOG.md (si existe)
#   - el commit HEAD NO contiene `[skip ci]` (u otras variantes): GitHub no dispara workflows de push
#     —tags incluidos— para ese commit y el espejo no se publicaría (caso platform-v0.7.0)
#   - dist/ coincide con un build fresco (a menos que pases --skip-build)
#   - el tag no existe ya, ni local ni en origin
# Nunca borra ni mueve tags. Si el tag ya existe y solo falta el espejo:
#   gh workflow run mirror.yml -f tag=<paquete>-vX.Y.Z
set -euo pipefail

usage() { sed -n '2,16p' "$0" | sed 's/^# \{0,1\}//'; exit 2; }
[ $# -ge 2 ] || usage
PKG="$1"; VER="$2"; shift 2
YES=0; SKIP_BUILD=0
for a in "$@"; do
  case "$a" in
    --yes) YES=1 ;;
    --skip-build) SKIP_BUILD=1 ;;
    *) echo "Opción desconocida: $a" >&2; usage ;;
  esac
done

cd "$(dirname "$0")/.."
TAG="${PKG}-v${VER}"
die() { echo "ERROR: $*" >&2; exit 1; }

[[ "$VER" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]] || die "versión '$VER' no es X.Y.Z"
[ -d "packages/$PKG" ] || die "no existe packages/$PKG"
MIRROR="$(jq -r --arg p "$PKG" '.[$p] // empty' mirror.json)"
[ -n "$MIRROR" ] || die "$PKG no tiene repo espejo en mirror.json"

[ "$(git branch --show-current)" = "main" ] || die "hay que estar en la rama main"
[ -z "$(git status --porcelain)" ] || die "el árbol de trabajo no está limpio"
git fetch -q origin main --tags
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] || die "main local no coincide con origin/main (haz pull)"

PKG_VER="$(jq -r .version "packages/$PKG/package.json")"
[ "$PKG_VER" = "$VER" ] || die "packages/$PKG/package.json dice $PKG_VER, no $VER"
if [ -f "packages/$PKG/CHANGELOG.md" ]; then
  grep -Eq "^##+ +\[?v?${VER//./\\.}\]?([ ]|$)" "packages/$PKG/CHANGELOG.md" \
    || die "packages/$PKG/CHANGELOG.md no tiene una entrada para $VER"
else
  echo "AVISO: $PKG no tiene CHANGELOG.md (se omite esa validación)."
fi

MSG="$(git log -1 --format=%B HEAD)"
if grep -Eqi '\[(skip ci|ci skip|no ci|skip actions|actions skip)\]|skip-checks: *true' <<<"$MSG"; then
  die "el commit HEAD ($(git rev-parse --short HEAD)) contiene un marcador de salto de CI; GitHub no ejecutaría mirror.yml para el tag. Haz un commit nuevo sin ese marcador (p. ej. un cambio de docs) y vuelve a correr."
fi

if git rev-parse -q --verify "refs/tags/$TAG" >/dev/null || git ls-remote --exit-code --tags origin "refs/tags/$TAG" >/dev/null 2>&1; then
  die "el tag $TAG ya existe. Si el espejo no lo recibió: gh workflow run mirror.yml -f tag=$TAG"
fi

if [ "$SKIP_BUILD" -eq 0 ]; then
  echo "→ Verificando que dist/ coincide con un build fresco…"
  npm ci --silent
  npm run build --workspace="packages/$PKG" --silent
  git diff --quiet -- "packages/$PKG/dist" || die "dist/ de $PKG está desactualizado: corre 'npm run build' y commitea el resultado"
fi

echo "Se publicará: $TAG (commit $(git rev-parse --short HEAD)) → espejo $MIRROR @ v$VER"
if [ "$YES" -ne 1 ]; then
  read -r -p "¿Crear y empujar el tag? [s/N] " ans
  [[ "$ans" =~ ^[sSyY]$ ]] || die "cancelado"
fi

git tag "$TAG"
git push origin "refs/tags/$TAG"

echo "→ Esperando a que $MIRROR tenga v$VER (máx. 6 min)…"
for _ in $(seq 1 36); do
  if gh api "repos/$MIRROR/git/ref/tags/v$VER" >/dev/null 2>&1; then
    echo "OK: $MIRROR@v$VER publicado."
    exit 0
  fi
  sleep 10
done
die "pasaron 6 min y $MIRROR no tiene v$VER. Revisa Actions (mirror.yml) o re-publica: gh workflow run mirror.yml -f tag=$TAG"
