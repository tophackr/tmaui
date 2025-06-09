import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'node:path';
import postcssGapProperties from 'postcss-gap-properties';
import postcssImport from 'postcss-import';
import postcssLogical from 'postcss-logical';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const __dirname = import.meta.dirname;

// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ projects: ['./tsconfig.dist.json'] }),
    dts({
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.dist.json',
    }),
  ],
  build: {
    target: 'es2022',
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index',
      cssFileName: 'tmaui',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
    },
  },
  css: {
    modules: {
      generateScopedName: 'tgui.[hash]',
    },
    postcss: {
      plugins: [
        postcssImport(),
        autoprefixer(),
        postcssLogical(),
        postcssGapProperties(),
        cssnano({
          preset: [
            'default',
            {
              calc: false,
              discardEmpty: true,
            },
          ],
        }),
      ],
    },
  },
  test: {
    environment: 'happy-dom',
  },
  clearScreen: false,
});
