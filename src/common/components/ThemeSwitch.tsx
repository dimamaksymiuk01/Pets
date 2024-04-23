'use client';

import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Switch } from 'antd';
import { darkTheme, lightTheme, StyledApp } from 'common/components/ThemeSwitch.styled';

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
          <Switch defaultChecked onChange={togleTheme} />
        </StyledApp>
      </ThemeProvider>
    </>
  );
}
