/* core */
import { useCallback } from 'react';

/* instruments */
import { THEME_ENUM } from '@/common/constans';
import { setTheme } from '@/store/themeSlice';
import { useAppDispatch, useAppSelector } from '@/common/hooks/stor';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.theme);

  const oppositeTheme = (theme: THEME_ENUM) =>
    theme === THEME_ENUM.LIGHT ? THEME_ENUM.DARK : THEME_ENUM.LIGHT;

  const toggleTheme = useCallback(() => {
    dispatch(setTheme(oppositeTheme(currentTheme)));
  }, [currentTheme, dispatch]);

  return { currentTheme, toggleTheme };
};
