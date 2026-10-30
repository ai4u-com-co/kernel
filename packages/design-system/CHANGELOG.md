# Changelog — @ai4u/design-system

Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/), versionado semántico.
El historial por app también vive en el changelog-service central.

## [1.4.1] - 2026-10-30

### Corregido
- **Crash en consumidores con `@mui/material` >= 9.1** (`Cannot read properties of undefined (reading 'reducedMotion')`
  al montar un `Button`/cualquier `ButtonBase`: `TouchRipple` de MUI >= 9.1 lee `theme.motion.reducedMotion`).
- **Causa raíz**: `vite.config.ts` externalizaba `@mui/material`, `@mui/icons-material`, `@emotion/*` solo por
  nombre exacto. Los subpaths (`@mui/material/styles`, `@mui/material/CssBaseline`, `@mui/icons-material/<X>`,
  `@emotion/*`) se **bundleaban** dentro de `dist/index.js`/`index.cjs`, incluido `@mui/styled-engine` y el
  `createTheme` de la versión instalada al compilar. El `dist` del tag 1.4.0 empotró `styled-engine` 9.0.0 (sin
  `theme.motion`) y el `TouchRipple` externo de MUI >= 9.1 recibía un tema sin `motion`.
- Ahora `rollupOptions.external` usa `/^@mui\//`, `/^@emotion\//`, `react`, `react-dom`, `react/jsx-runtime`,
  `react-router-dom` y `react-helmet-async`. El `dist` ya no depende de la versión de MUI usada al compilar y
  siempre usa la MUI/Emotion/React del consumidor. `dist/index.js` pasó de 447 437 a 288 021 bytes y
  `dist/index.cjs` de 281 886 a 173 642.

### Agregado
- `scripts/verify-externals.mjs` y `npm run verify-externals`: falla si `dist/` contiene código de
  MUI/Emotion/React bundleado o imports bare fuera de los externals permitidos. Corre en el CI raíz después del
  Build. No usa navegador ni dependencias.

### Cómo verificar
- `npm run build && npm run verify-externals` (en `packages/design-system`).
- Humo manual: montar `ThemeProvider` + `Button` del dist con react-dom/client + jsdom, disparar `mousedown` y
  comprobar que no lanza, contra `@mui/material` 9.0.1, 9.2.0 y 9.5.0.

### Sin cambios
- API, tokens, breakpoints, tamaños de texto, colores y peer dependencies. (El cambio visual va en 1.5.0.)

## [1.4.0] - nota retroactiva

Importado desde `ai4u-com-co/sistemaDiseno` (tag `v1.4.0`): `PeriodPicker` y utilidades de fecha en zona Bogotá
(`dateBogota`). **Defecto conocido**: ese tag bundleó `@mui/styled-engine` 9.0.0 y crashea con `@mui/material` >= 9.1
(ver 1.4.1). Usar >= 1.4.1. El tag 1.4.0 no se reutiliza: el espejo ya lo tiene.
