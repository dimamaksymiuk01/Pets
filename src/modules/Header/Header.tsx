/* components */
import { ThemeSwitch } from '@/common/components';
import { CustomLink, HeaderContainer, LeftBar, LogoContainer } from './Header.styled';
import Logo from '@/public/icons/logo.svg';

/* instruments */
import { ROUTES_ENUM } from '@/common/enums';
import { HamburgerMenu } from '@/common/components/BurgerMenu/BurgerMenu';

export const Header = () => (
  <HeaderContainer>
    <LeftBar>
      <HamburgerMenu />
      <CustomLink href={ROUTES_ENUM.HOME}>
        <LogoContainer>
          <Logo />
          <span>PetsPaw</span>
        </LogoContainer>
      </CustomLink>
    </LeftBar>
    <ThemeSwitch />
  </HeaderContainer>
);
