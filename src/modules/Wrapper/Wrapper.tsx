/* instruments */
import type { FC, PropsWithChildren } from 'react';
/* components */
import { WrapperStyled } from './Wrapper.styled';
import { NavMenu } from '@/modules/NavMenu';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <WrapperStyled>
    <NavMenu />
    {children}
  </WrapperStyled>
);
