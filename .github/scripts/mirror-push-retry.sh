# shellcheck shell=bash
# Helpers de push al repo espejo con reintento acotado. Se usa con `source` desde
# .github/workflows/mirror.yml — no es un ejecutable suelto.
#
# Por qué existe: el push al espejo falló 2 veces (mc-sso-v1.2.0, contracts-v0.6.1, sep-30-2026)
# con "remote: Permission to ai4u-com-co/<espejo>.git denied to ai4u-bump-bot[bot]" / HTTP 403
# menos de 1 s después de mintear el token de instalación, y funcionó al relanzar el job sin
# cambiar nada. Es un 403 transitorio (propagación del token recién creado), no un permiso
# faltante. Reintentamos SOLO los `git push`, con espera creciente y un tope fijo — un error no
# transitorio (non-fast-forward, tag existente en otro commit, etc.) falla en el primer intento.
#
# Códigos de retorno de mirror_publish / mirror_push_with_retry:
#   0 = publicado (o ya estaba publicado, idempotente)
#   1 = error NO transitorio → el workflow debe fallar ya
#   2 = error transitorio que agotó los intentos → vale la pena re-mintear el token y reintentar

MIRROR_PUSH_ATTEMPTS="${MIRROR_PUSH_ATTEMPTS:-3}"
# Espera antes del intento N+1 (índice 0 = antes del 2º intento). 20 s, luego 40 s.
read -r -a MIRROR_PUSH_BACKOFF <<<"${MIRROR_PUSH_BACKOFF_SECS:-20 40}"

# ¿El output de git corresponde a un error transitorio del lado de GitHub/red?
mirror_is_transient() {
  grep -Eqi \
    -e 'Permission to .* denied to' \
    -e 'returned error: (403|429|5[0-9][0-9])' \
    -e 'HTTP (403|429|5[0-9][0-9])' \
    -e 'Could not resolve host' \
    -e 'Connection (timed out|reset|refused)' \
    -e 'Operation timed out' \
    -e 'RPC failed' \
    -e 'early EOF' \
    -e 'remote end hung up' \
    -e 'Internal Server Error' \
    <<<"$1"
}

# mirror_push_with_retry <descripción> <args de git push...>
mirror_push_with_retry() {
  local desc="$1"
  shift
  local attempt out delay
  for ((attempt = 1; attempt <= MIRROR_PUSH_ATTEMPTS; attempt++)); do
    if out="$(git push "$@" 2>&1)"; then
      [ -n "$out" ] && printf '%s\n' "$out"
      echo "OK: push de ${desc} (intento ${attempt}/${MIRROR_PUSH_ATTEMPTS})."
      return 0
    fi
    printf '%s\n' "$out"
    if ! mirror_is_transient "$out"; then
      echo "::error::push de ${desc} falló con un error NO transitorio (intento ${attempt}/${MIRROR_PUSH_ATTEMPTS}) — no se reintenta."
      return 1
    fi
    if ((attempt < MIRROR_PUSH_ATTEMPTS)); then
      delay="${MIRROR_PUSH_BACKOFF[attempt - 1]:-${MIRROR_PUSH_BACKOFF[-1]}}"
      echo "::warning::push de ${desc} falló con un error transitorio (intento ${attempt}/${MIRROR_PUSH_ATTEMPTS}); reintento en ${delay}s."
      sleep "$delay"
    fi
  done
  echo "::warning::push de ${desc} agotó ${MIRROR_PUSH_ATTEMPTS} intentos con errores transitorios."
  return 2
}

# mirror_publish <tag> (ej. v1.2.0)
# Debe correrse dentro del clone del espejo, con el commit de sync (si hubo cambios) y el tag
# local ya creados. Idempotente: se puede volver a llamar tras un fallo parcial.
mirror_publish() {
  local tag_name="$1"
  local ahead head remote_lines remote_sha

  # 1) Contenido: solo si hay commits locales que el remoto no tiene (tras un push exitoso
  #    el ref de seguimiento se actualiza y esto da 0 → no re-empuja).
  if ! ahead="$(git rev-list --count '@{upstream}..HEAD')"; then
    echo "::error::no pude comparar HEAD contra su rama remota."
    return 1
  fi
  if [ "$ahead" -gt 0 ]; then
    mirror_push_with_retry "contenido" || return $?
  else
    echo "Contenido: nada que empujar (el espejo ya tiene HEAD)."
  fi

  # 2) Tag: si ya existe en el espejo apuntando al mismo commit, no es error.
  if ! head="$(git rev-parse HEAD)"; then
    return 1
  fi
  if ! remote_lines="$(git ls-remote origin "refs/tags/${tag_name}" "refs/tags/${tag_name}^{}")"; then
    echo "::error::no pude consultar los tags del espejo (git ls-remote)."
    return 1
  fi
  if [ -n "$remote_lines" ]; then
    # Tag anotado → la línea ^{} trae el commit; tag liviano → solo la línea normal.
    remote_sha="$(awk '$2 ~ /\^\{\}$/ {print $1}' <<<"$remote_lines")"
    [ -z "$remote_sha" ] && remote_sha="$(awk 'NR==1 {print $1}' <<<"$remote_lines")"
    if [ "$remote_sha" = "$head" ]; then
      echo "Tag ${tag_name}: ya existe en el espejo apuntando al mismo commit (${head}), nada que hacer."
      return 0
    fi
    echo "::error::el tag ${tag_name} ya existe en el espejo apuntando a ${remote_sha}, no a ${head}. No se sobreescribe."
    return 1
  fi
  mirror_push_with_retry "tag ${tag_name}" origin "refs/tags/${tag_name}"
}
