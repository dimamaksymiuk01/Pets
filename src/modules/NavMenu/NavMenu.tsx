'use client';

/* components */
import { NavMenuContainer } from './NavMenu.styled';
import { LinksGroup, NavMenuText } from './components';
import { Header } from '@/modules/Header';
import { usePage } from '@/common/hooks';

export const NavMenu = () => {
  const { isPage, togglePage } = usePage();
  return (
    <NavMenuContainer>
      {isPage && (
        <>
          <Header />
          <NavMenuText />
          <LinksGroup />
        </>
      )}
    </NavMenuContainer>
  );
};
