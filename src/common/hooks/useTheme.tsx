/* core */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
/* instruments */
import { AppDispatch, RootState } from '@/store';
import { THEME_ENUM } from '@/common/constans';
import { setTheme } from '@/store/themeSlice';

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
