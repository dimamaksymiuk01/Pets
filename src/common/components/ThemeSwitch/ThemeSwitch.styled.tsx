'use client';

import styled, { DefaultTheme } from 'styled-components';

interface IThemeProps {
  body?: string;
  title?: string;
  subtitle?: string;
}
export const darkTheme: DefaultTheme = {
  body: '#1c1c1c',
  title: '#fff',
  subtitle: '#b6b6b6',
};
export const lightTheme: DefaultTheme = {
  body: '#fff',
  title: '#1c1c1c',
  subtitle: '#b6b6b6',
};

export const StyledApp = styled.div<IThemeProps>`
  min-height: 100vh;
  text-align: center;
  background-color: ${(props) => props.theme.body};
`;

export const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;

export const Info = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;
