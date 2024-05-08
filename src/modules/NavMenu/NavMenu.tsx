'use client';

/* components */
import { NavMenuContainer } from './NavMenu.styled';
import { LinksGroup, NavMenuText } from './components';
import { Header } from '@/modules/Header';
import { usePage } from '@/common/hooks';

export const NavMenu = () => {
  const { isPage, togglePage } = usePage();
  const dd = true;

  return (
    <NavMenuContainer>
      <Header />
      {dd && (
        <>
          <NavMenuText />
          <LinksGroup />
        </>
      )}
    </NavMenuContainer>
  );
};
