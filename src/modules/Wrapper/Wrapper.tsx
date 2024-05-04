/* instruments */
import type { FC, PropsWithChildren } from 'react';

/* components */
import { GlobalContainer, WrapperStyled } from './Wrapper.styled';
import { NavMenu } from '@/modules/NavMenu';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <GlobalContainer>
    <WrapperStyled>
      <NavMenu />
      {children}
    </WrapperStyled>
  </GlobalContainer>
);
