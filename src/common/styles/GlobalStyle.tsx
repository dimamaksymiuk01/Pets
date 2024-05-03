'use client';

/* core */
import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';
/* instruments */
import { colors } from './colors';

interface GlobalStyleProps {
  theme?: DefaultTheme;
}

export const darkTheme: DefaultTheme = {
  body: colors.black,
  text100: colors.white,
  text200: colors.gray,
  groupborder: colors.white300,
  btnHome: colors.black100,
  btnHomeHover: colors.white200,
  btnHomeActive: colors.pink,
  poster: colors.black100,
};

export const lightTheme: DefaultTheme = {
  body: colors.white100,
  text100: colors.black,
  text200: colors.gray,
  groupborder: colors.white300,
  btnHome: colors.white,
  btnHomeHover: colors.white200,
  btnHomeActive: colors.pink,
  poster: colors.white200,
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text100};
  }
`;
