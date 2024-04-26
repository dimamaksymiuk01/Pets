import { DefaultTheme } from 'styled-components';
import { colors } from '@/common/styles/index';
import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  theme?: DefaultTheme;
}
export const darkTheme: DefaultTheme = {
  body: colors.black,
};

export const lightTheme: DefaultTheme = {
  body: colors.white100,
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${({ theme }) => theme.body};
  }
`;
