import ThemeSwitch from '@/common/components/ThemeSwitch/ThemeSwitch';
import { HeaderContainer, LogoContainer } from '@/modules/Header/Header.styled';
import Logo from '@/public/icons/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <span>PetsPaw</span>
      </LogoContainer>
      <ThemeSwitch />
    </HeaderContainer>
  );
};
