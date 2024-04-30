//types
import type { FC, PropsWithChildren } from 'react';
//styles
import { WrapperStyled } from './Wrapper.styled';
//components
import { NavigateMenu } from '@/modules/NavigateMenu/NavigateMenu';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <WrapperStyled>
    <NavigateMenu />
    {children}
  </WrapperStyled>
);
