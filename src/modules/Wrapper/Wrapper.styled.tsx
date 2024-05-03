'use client';

/* core */
import styled from 'styled-components';

export const GlobalContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const WrapperStyled = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  gap: clamp(3.125rem, -3.107rem + 12.97vw, 8.563rem);

  @media (max-width: 845px) {
    justify-content: center;
    width: 100%;
  }
`;
