/* components */
import { NavMenuContainer } from './NavMenu.styled';
import { LinksGroup, NavMenuText } from './components';
import { Header } from '@/modules';

export const NavMenu = () => (
  <NavMenuContainer>
    <Header />
    <NavMenuText />
    <LinksGroup />
  </NavMenuContainer>
);
