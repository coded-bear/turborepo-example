import { dirname, join, resolve } from 'path';
import { StorybookConfig } from '@storybook/react-vite';

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  // @ts-ignore
  framework: getAbsolutePath('@storybook/react-vite'),
  stories: ['../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-themes'),
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },

  async viteFinal(config) {
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: '@coded-bear/ui',
            replacement: resolve(__dirname, '../../../packages/ui/'),
          },
        ],
      },
    };
  },
};

export default config;
