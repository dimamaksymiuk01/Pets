import ThemeSwitch from '@/common/components/ThemeSwitch/ThemeSwitch';
import { HeaderStyled, LogoContainer } from '@/modules/Header/Header.styled';
import Logo from '@/public/icons/logo.svg';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoContainer>
        <Logo />
        <span>PetsPaw</span>
      </LogoContainer>
      <ThemeSwitch />
    </HeaderStyled>
  );
};
