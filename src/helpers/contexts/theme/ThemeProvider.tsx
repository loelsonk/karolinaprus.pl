import React from 'react';
import { ThemeProvider as ThemeProviderBase } from 'styled-components';
import { theme } from './theme';

export const ThemeProvider = ({ children }) => (
  <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>
);
