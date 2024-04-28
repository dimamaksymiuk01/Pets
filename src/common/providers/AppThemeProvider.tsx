'use client';

import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { ThemeState } from '@/store/themeSlice';
import { darkTheme, lightTheme } from '@/common/styles/GlobalStyle';
import { GlobalStyle } from '@/common/styles/GlobalStyle';
import { useMount } from '@/common/hooks';
import { baseTheme } from '@/common/constans/themes';

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);
  const isMounted = useMount();
  const theme = currentTheme === baseTheme ? lightTheme : darkTheme;

  return (
    <>
      {isMounted && (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      )}
    </>
  );
};
