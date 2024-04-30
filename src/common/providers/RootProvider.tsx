'use client';

//type
import type { FC, PropsWithChildren } from 'react';
//components
import { AppThemeProvider, StoreProvider } from '@/common/providers';

export const RootProvider: FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>
    <AppThemeProvider>{children}</AppThemeProvider>
  </StoreProvider>
);
