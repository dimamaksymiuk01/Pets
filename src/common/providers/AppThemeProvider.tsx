'use client';

import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { ThemeState } from '@/store/themeSlice';
import { darkTheme, lightTheme } from '@/common/styles/StyleProvider';

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);
  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};