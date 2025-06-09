import { createRequire } from 'node:module';
import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname, join } from 'path';

const require = createRequire(import.meta.url);

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  docs: {
    defaultName: 'Documentation',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return prop.parent.fileName.includes('src/components');
        }

        if (!prop.declarations || prop.declarations.length === 0) {
          return false;
        }

        return prop.declarations[0].fileName.includes('src/components');
      },
    },
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      resolve: {
        alias: {
          components: path.resolve(__dirname, '../src/components'),
          stories: path.resolve(__dirname, '../src/stories'),
          icons: path.resolve(__dirname, '../src/icons'),
        },
      },
    });
  },
  staticDirs: ['./media'],
  core: {
    disableWhatsNewNotifications: true,
  },
};

export default config;
