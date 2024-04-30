//components
import { ThemeSwitch } from '@/common/components';
//styles
import { CustomLink, HeaderContainer, LogoContainer } from './Header.styled';
//pictures
import Logo from '@/public/icons/logo.svg';

export const Header = () => (
  <HeaderContainer>
    <CustomLink href={'/'}>
      <LogoContainer>
        <Logo />
        <span>PetsPaw</span>
      </LogoContainer>
    </CustomLink>
    <ThemeSwitch />
  </HeaderContainer>
);
