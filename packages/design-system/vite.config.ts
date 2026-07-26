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
          external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled',
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
