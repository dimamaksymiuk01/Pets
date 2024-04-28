'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme, ThemeState } from '@/store/themeSlice';
import {
  Slider,
  SwitchContainer,
  ThemeSwitchContainer,
} from '@/common/components/ThemeSwitch/ThemeSwitch.styled';
import { THEME } from '@/common/constans/themes';

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state: { theme: ThemeState }) => state.theme);
  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return (
    <SwitchContainer>
      <input
        type='checkbox'
        defaultChecked={currentTheme === THEME.LIGHT}
        onChange={toggleTheme}
      />
      <Slider className='slider' />
    </SwitchContainer>
  );
}
