'use client';

import { DefaultTheme } from 'styled-components';
import { colors } from '@/common/styles/index';
import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  theme?: DefaultTheme;
}
export const darkTheme: DefaultTheme = {
  body: colors.black,
  text100: colors.white,
  text200: colors.gray,
  groupborder: colors.white300,
};

export const lightTheme: DefaultTheme = {
  body: colors.white100,
  text100: colors.black,
  text200: colors.gray,
  groupborder: colors.white300,
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text100};
  }
`;
