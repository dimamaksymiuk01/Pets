'use client';
import { useSelector } from 'react-redux';
import { ThemeState } from '@/store/themeSlice';
import { Info } from '@/common/components/ThemeSwitch/ThemeSwitch.styled';
import { ThemeProvider } from 'styled-components';
import {
  darkTheme,
  lightTheme,
} from '@/common/components/ThemeSwitch/ThemeSwitch.styled';

const Test = () => {
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);
  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Info>Test</Info>
    </ThemeProvider>
  );
};

export default Test;
