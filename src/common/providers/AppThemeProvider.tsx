'use client';

//core
import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
//style
import { darkTheme, lightTheme, GlobalStyle } from '@/common/styles/GlobalStyle';
//instruments
import { useMount, useTheme } from '@/common/hooks';
//const
import { baseTheme } from '@/common/constans';

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { currentTheme } = useTheme();
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
