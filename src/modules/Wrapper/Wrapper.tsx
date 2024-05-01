//types
import type { FC, PropsWithChildren } from 'react';
//styles
import { WrapperStyled } from './Wrapper.styled';
//components
import { NavMenu } from '@/modules/NavMenu';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <WrapperStyled>
    <NavMenu />
    {children}
  </WrapperStyled>
);
