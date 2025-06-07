import path from 'node:path';
import { defineConfig } from 'vitest/config';

const __dirname = import.meta.dirname;

// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['**/*.test.ts', '**/*.spec.ts'],
  },
  resolve: {
    alias: {
      helpers: path.resolve(__dirname, 'src/helpers'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
});
