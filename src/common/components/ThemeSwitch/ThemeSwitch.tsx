'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme, ThemeState } from '@/store/themeSlice';
import { Name } from './ThemeSwitch.styled';
import { Switch } from 'antd';

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);
  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <Switch defaultChecked={currentTheme === 'dark'} onChange={toggleTheme} />
      <Name>Lox</Name>
    </>
  );
}
