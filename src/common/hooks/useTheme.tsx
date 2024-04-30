//core
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/store/themeSlice';
//types
import { AppDispatch, RootState } from '@/store';
//enum
import { THEME_ENUM } from '@/common/constans';

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state: RootState) => state.theme);

  const toggleTheme = () => {
    dispatch(
      setTheme(currentTheme === THEME_ENUM.LIGHT ? THEME_ENUM.DARK : THEME_ENUM.LIGHT),
    );
  };

  return { currentTheme, toggleTheme };
};
