/* components */
import { ThemeSwitch, Logo } from '@/common/components';
import { HeaderContainer, LeftBar } from './Header.styled';

/* instruments */

export const Header = () => (
  <HeaderContainer>
    <LeftBar>
      <Logo />
    </LeftBar>
    <ThemeSwitch />
  </HeaderContainer>
);
