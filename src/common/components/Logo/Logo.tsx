import LogoSVG from '@/public/icons/logo.svg';
import { CustomLink, LogoContainer } from './Logo.styled';
import { ROUTES_ENUM } from '@/common/enums';

export const Logo = () => (
  <CustomLink href={ROUTES_ENUM.HOME}>
    <LogoContainer>
      <LogoSVG />
      <span>PetsPaw</span>
    </LogoContainer>
  </CustomLink>
);
