'use client';

import { ThemeProvider } from 'styled-components';
import { Switch } from 'antd';
import { darkTheme, lightTheme, StyledApp } from './ThemeSwitch.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, ThemeState } from '@/store/themeSlice';

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <StyledApp>
          <Switch defaultChecked={currentTheme === 'dark'} onChange={toggleTheme} />
        </StyledApp>
      </ThemeProvider>
    </>
  );
}
