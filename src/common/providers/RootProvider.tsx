'use client';

/* core */
import type { FC, PropsWithChildren } from 'react';

/* instruments */
import { AppThemeProvider, StoreProvider } from '@/common/providers';

export const RootProvider: FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>
    <AppThemeProvider>{children}</AppThemeProvider>
  </StoreProvider>
);
