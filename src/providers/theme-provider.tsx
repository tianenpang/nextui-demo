'use client';

import type { ReactNode } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

const DEFAULT_THEME_PROPS = {
  attribute: 'data-theme',
  defaultTheme: 'system',
  disableTransitionOnChange: false,
  enableColorScheme: false,
  enableSystem: true,
  storageKey: 'theme',
  themes: ['light', 'dark'],
  value: { dark: 'dark', light: 'light' }
};

export const ThemeProvider = (props: Readonly<{ children: ReactNode }>) => {
  const { children } = props;

  return <NextThemesProvider {...DEFAULT_THEME_PROPS}>{children}</NextThemesProvider>;
};
