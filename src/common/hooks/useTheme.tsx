/* core */
import { useCallback } from 'react';

/* instruments */
import { RootState } from '@/store';
import { THEME_ENUM } from '@/common/constans';
import { setTheme } from '@/store/themeSlice';
import { useAppDispatch, useAppSelector } from '@/common/hooks/stor';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state: RootState) => state.theme);

  const toggleTheme = useCallback(() => {
    dispatch(
      setTheme(currentTheme === THEME_ENUM.LIGHT ? THEME_ENUM.DARK : THEME_ENUM.LIGHT),
    );
  }, [currentTheme, dispatch]);

  return { currentTheme, toggleTheme };
};
