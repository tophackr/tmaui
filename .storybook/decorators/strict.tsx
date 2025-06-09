import { StrictMode } from 'react';
import { Decorator } from '@storybook/react-vite';

export const StrictDecorator: Decorator = (Story) => (
  <StrictMode>
    <Story />
  </StrictMode>
);

