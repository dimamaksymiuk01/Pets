import { HeaderStyled } from '@/modules/Header/Header.styled';
import ThemeSwitch from '@/common/components/ThemeSwitch/ThemeSwitch';

export const Header = () => {
  return (
    <HeaderStyled>
      <ThemeSwitch />
    </HeaderStyled>
  );
};
