import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const isServe = command === 'serve';

  return {
    plugins: [
      react(),
      ...(isServe ? [] : [dts({
        include: ['src'],
        exclude: ['src/**/__tests__/**', 'src/**/*.test.tsx', 'src/**/*.test.ts', 'src/demo/**'],
        outDir: 'dist',
        insertTypesEntry: true,
        logLevel: 'warn',
      })]),
    ],
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
    },
    ...(isServe ? {} : {
      build: {
        lib: {
          entry: {
            index: resolve(__dirname, 'src/index.ts'),
            'tokens/index': resolve(__dirname, 'src/tokens/index.ts'),
            'changelog/index': resolve(__dirname, 'src/changelog/index.ts'),
          },
          formats: ['es', 'cjs'],
          fileName: (format, entryName) =>
            format === 'es' ? `${entryName}.js` : `${entryName}.cjs`,
        },
        rollupOptions: {
          // Externalizar por nombre Y por subpath (`@mui/material/styles`,
          // `@mui/icons-material/<X>`, `@emotion/*`). Con coincidencia exacta los
          // subpaths se bundleaban y el dist quedaba atado a la versión de MUI
          // instalada al compilar (crash con MUI >= 9.1, ver CHANGELOG 1.4.1).
          // Verificado en CI por scripts/verify-externals.mjs.
          external: [
            /^@mui\//,
            /^@emotion\//,
            'react',
            'react-dom',
            'react/jsx-runtime',
            'react-router-dom',
            'react-helmet-async',
          ],
          output: {
            preserveModules: false,
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
        cssCodeSplit: false,
        sourcemap: true,
      },
    }),
  };
})
