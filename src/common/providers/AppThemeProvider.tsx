'use client';

/* core */
import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
/* instruments */
import { darkTheme, lightTheme, GlobalStyle } from '@/common/styles';
import { useMount, useTheme } from '@/common/hooks';
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
