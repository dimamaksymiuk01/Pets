/* components */
import { ThemeSwitch } from '@/common/components';
import { HeaderContainer, LeftBar } from './Header.styled';
import { Logo } from '@/common/components/Logo/Logo';

/* instruments */
import { HamburgerMenu } from '@/common/components/BurgerMenu/BurgerMenu';

export const Header = () => (
  <HeaderContainer>
    <LeftBar>
      <HamburgerMenu />
      <Logo />
    </LeftBar>
    <ThemeSwitch />
  </HeaderContainer>
);
