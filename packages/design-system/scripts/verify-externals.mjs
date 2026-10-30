#!/usr/bin/env node
// Verifica que dist/ NO contenga código de MUI/Emotion/React bundleado.
//
// Contexto (1.4.1): con `external` por nombre exacto, los subpaths
// (`@mui/material/styles`, `@mui/icons-material/<X>`, `@emotion/*`) se bundleaban y el
// dist quedaba atado a la versión de MUI instalada al compilar (crash con MUI >= 9.1:
// `theme.motion` indefinido en el styled-engine empotrado). Este script corre tras el
// build, sin navegador ni dependencias, y falla si reaparece.
//
// Uso: node scripts/verify-externals.mjs   (cwd = packages/design-system)
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

// Especificadores bare permitidos en dist (peers / externals declarados).
const ALLOWED = [/^@mui\//, /^@emotion\//, /^react$/, /^react-dom(\/|$)/, /^react\/jsx-runtime$/,
  /^react\/jsx-dev-runtime$/, /^react-router-dom$/, /^react-helmet-async$/]

// Huellas de código de terceros incrustado (no aparecen si solo se importa).
const MARKERS = [
  [/@mui\/styled-engine/, 'referencia a @mui/styled-engine empotrado'],
  [/MUI: [A-Za-z]/, 'mensajes internos de MUI ("MUI: ...")'],
  [/__emotion_(real|base|styles|label)/, 'internals de @emotion/styled'],
  [/emotion-(element|cache)-/, 'internals de @emotion/react'],
  [/Symbol\.for\(["']react\./, 'react-is / símbolos de React empotrados'],
  [/theme\.motion|\.reducedMotion/, 'código de tema/motion de MUI empotrado'],
]

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}

const files = walk(dist).filter((f) => /\.(m?js|cjs)$/.test(f))
if (files.length === 0) { console.error('verify-externals: no hay dist/ (¿corriste el build?)'); process.exit(2) }

const problems = []
let muiImports = 0
const SPEC = [
  /\bfrom\s*["']([^"']+)["']/g,          // import x from "y" / export * from "y"
  /\bimport\s*["']([^"']+)["']/g,        // import "y"
  /\bimport\(\s*["']([^"']+)["']\s*\)/g, // import("y")
  /\brequire\(\s*["']([^"']+)["']\s*\)/g, // require("y")
]
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  const rel = relative(root, f)
  for (const re of SPEC) {
    for (const m of src.matchAll(re)) {
      const spec = m[1]
      if (spec.startsWith('.') || spec.startsWith('/') || spec.startsWith('node:')) continue
      if (spec.startsWith('@mui/')) muiImports++
      if (!ALLOWED.some((a) => a.test(spec))) problems.push(`${rel}: import no permitido "${spec}"`)
    }
  }
  for (const [re, what] of MARKERS) {
    if (re.test(src)) problems.push(`${rel}: ${what} (${re})`)
  }
}
if (muiImports === 0) problems.push('dist no importa ningún @mui/*: ¿cambió el build o se bundleó todo?')

if (problems.length) {
  console.error('verify-externals FALLÓ: dist/ contiene código de terceros bundleado o imports inesperados.\n')
  for (const p of problems) console.error(' - ' + p)
  console.error('\nRevisa rollupOptions.external en vite.config.ts (debe cubrir /^@mui\\//, /^@emotion\\//, react, react-dom, ...).')
  process.exit(1)
}
console.log(`verify-externals OK: ${files.length} archivos JS/CJS revisados, ${muiImports} imports @mui/* externos, 0 código de terceros bundleado.`)
