/* components */
import { ThemeSwitch, Logo, BurgerMenu } from '@/common/components';
import { HeaderContainer, LeftBar } from './Header.styled';

/* instruments */

export const Header = () => (
  <HeaderContainer>
    <LeftBar>
      <BurgerMenu />
      <Logo />
    </LeftBar>
    <ThemeSwitch />
  </HeaderContainer>
);
