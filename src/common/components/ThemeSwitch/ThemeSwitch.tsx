'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme, ThemeState } from '@/store/themeSlice';
import { Switch } from 'antd';
import OpenEye from '@/public/icons/openEye.svg';
import ClosedEye from '@/public/icons/closedEye.svg';
import { ThemeSwitchContainer } from '@/common/components/ThemeSwitch/ThemeSwitch.styled';

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);
  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeSwitchContainer>
      <OpenEye />
      <ClosedEye />
      <Switch defaultChecked={currentTheme === 'dark'} onChange={toggleTheme} />
    </ThemeSwitchContainer>
  );
}
