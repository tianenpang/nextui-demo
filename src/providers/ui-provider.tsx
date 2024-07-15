'use client';

import type { ReactNode } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export const UIProvider = (props: Readonly<{ children: ReactNode }>) => {
  const { children } = props;

  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};
