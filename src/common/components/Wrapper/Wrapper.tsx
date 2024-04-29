import type { FC, PropsWithChildren } from 'react';
import { WrapperStyled } from '@/common/components/Wrapper/Wrapper.styled';
import { Poster } from '@/common/components/Poster/Poster';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <WrapperStyled>
    {children} <Poster />
  </WrapperStyled>
);
