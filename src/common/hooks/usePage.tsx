import { useDispatch, useSelector } from 'react-redux';
import { togglePage } from '@/store/pageSlice';
import { RootState } from '@/store';
import { useCallback } from 'react';

export const usePage = () => {
  const dispatch = useDispatch();
  const isPage = useSelector((state: RootState) => state.page.isPage);

  const togglePageHandler = useCallback(() => {
    dispatch(togglePage());
  }, [dispatch]);

  return { isPage, togglePage: togglePageHandler };
};
