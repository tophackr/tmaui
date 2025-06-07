import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssGapProperties from 'postcss-gap-properties';
import postcssLogical from 'postcss-logical';
import postcssModules from 'postcss-modules';

const __dirname = import.meta.dirname;

// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ projects: ['./tsconfig.dist.json'] }),
    dts({
      entryRoot: 'src',
      insertTypesEntry: true,
      outDir: 'dist/types',
      tsconfigPath: './tsconfig.dist.json',
    }),
  ],
  css: {
    modules: {
      generateScopedName: 'tgui.[hash]',
    },
    postcss: {
      plugins: [
        postcssImport(),
        autoprefixer(),
        postcssLogical(),
        postcssModules({
          generateScopedName: 'tgui.[hash]',
          getJSON: () => {},
        }),
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
  clearScreen: false,
  build: {
    target: 'es2022',
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'esm/index.js' : 'cjs/index.js'),
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
      },
      onwarn(warning, warn) {
        if (
          warning.code === 'EMIT_CHUNK' &&
          /.*\.module\.css$/.test(warning.id || '')
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      icons: path.resolve(__dirname, 'src/icons'),
    },
  },
});
