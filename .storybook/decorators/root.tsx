import { AppRoot } from 'components';
import { Decorator } from '@storybook/react-vite';

export const AppRootDecorator: Decorator = (Story, context) => (
  <AppRoot
    platform={context.globals.platform}
    appearance={context.globals.theme}
  >
    <Story />
  </AppRoot>
);
