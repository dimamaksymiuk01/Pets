import type { FC, PropsWithChildren } from 'react';
import { WrapperStyled } from '@/common/components/Wrapper/Wrapper.styled';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <WrapperStyled>{children}</WrapperStyled>
);
