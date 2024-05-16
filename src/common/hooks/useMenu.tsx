import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '@/store/menuSlice';
import { RootState } from '@/store';
import { useCallback } from 'react';

export const useMenu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  const toggleMenuHandler = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  return { isOpen, toggleMenu: toggleMenuHandler };
};
