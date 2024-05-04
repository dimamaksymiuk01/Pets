/* components */
import { ThemeSwitch } from '@/common/components';
import { CustomLink, HeaderContainer, LogoContainer } from './Header.styled';
import Logo from '@/public/icons/logo.svg';

/* instruments */
import { ROUTES_ENUM } from '@/common/enums';

export const Header = () => (
  <HeaderContainer>
    <CustomLink href={ROUTES_ENUM.HOME}>
      <LogoContainer>
        <Logo />
        <span>PetsPaw</span>
      </LogoContainer>
    </CustomLink>
    <ThemeSwitch />
  </HeaderContainer>
);
