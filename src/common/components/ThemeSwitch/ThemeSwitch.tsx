'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme, ThemeState } from '@/store/themeSlice';
import { darkTheme, lightTheme, Name } from './ThemeSwitch.styled';
import { ThemeProvider } from 'styled-components';
import { Switch } from 'antd';
import Test from '@/common/components/Block';

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch defaultChecked={currentTheme === 'dark'} onChange={toggleTheme} />
        <Name>Lox</Name>
        <Test />
      </ThemeProvider>
    </>
  );
}
