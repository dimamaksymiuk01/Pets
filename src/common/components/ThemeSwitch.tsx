'use client';

import styled, { ThemeProvider } from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import { useState } from 'react';
import { Switch } from 'antd';

interface IThemeProps {
  body?: string;
  title?: string;
  subtitle?: string;
}
const darkTheme: DefaultTheme = {
  body: '#1c1c1c',
  title: '#fff',
  subtitle: '#b6b6b6',
};
const lightTheme: DefaultTheme = {
  body: '#fff',
  title: '#1c1c1c',
  subtitle: '#b6b6b6',
};

const StyledApp = styled.div<IThemeProps>`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
`;

const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;

const Info = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';

  const togleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <StyledApp>
          <Name>Styled Components Example</Name>
          <Switch defaultChecked onChange={togleTheme} />
          <Info>Цо ти?</Info>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}
