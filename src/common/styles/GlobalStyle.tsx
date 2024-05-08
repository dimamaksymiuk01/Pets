'use client';

/* core */
import { createGlobalStyle, DefaultTheme } from 'styled-components';

/* instruments */
import { colors } from './colors';

interface IGlobalStyleProps {
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
  burger: colors.black100,
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
  burger: colors.white500,
};

export const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text100};
  }
`;
