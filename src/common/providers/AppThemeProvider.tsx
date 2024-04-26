'use client';
import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import {
  darkTheme,
  lightTheme,
} from '@/common/components/ThemeSwitch/ThemeSwitch.styled';
import { ThemeState } from '@/store/themeSlice';

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);
  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
