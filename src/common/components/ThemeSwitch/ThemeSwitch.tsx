'use client';

//instruments
import { useTheme } from '@/common/hooks';
import { THEME_ENUM } from '@/common/constans';
//components
import { Slider, SwitchContainer } from './ThemeSwitch.styled';

export const ThemeSwitch = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <SwitchContainer>
      <input
        type='checkbox'
        defaultChecked={currentTheme === THEME_ENUM.LIGHT}
        onChange={toggleTheme}
      />
      <Slider className='slider' />
    </SwitchContainer>
  );
};
