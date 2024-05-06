'use client';

/* core */
import type { FC, PropsWithChildren } from 'react';

/* instruments */
import { StoreProvider } from './StoreProvider';
import { AppThemeProvider } from './AppThemeProvider';

export const RootProvider: FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>
    <AppThemeProvider>{children}</AppThemeProvider>
  </StoreProvider>
);
