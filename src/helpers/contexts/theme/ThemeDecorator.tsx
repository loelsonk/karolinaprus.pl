import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
