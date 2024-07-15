import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { GeistSans } from 'geist/font/sans';

import { ThemeProvider } from '@providers/theme-provider';
import { UIProvider } from '@providers/ui-provider';

import './globals.scss';

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html suppressHydrationWarning className={GeistSans.variable} dir="ltr" lang="en-US">
      <body>
        <ThemeProvider>
          <UIProvider>{children}</UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'NextUI Demo'
};

export default RootLayout;

interface RootLayoutProps {
  children: ReactNode;
  params: { locale: string };
}
