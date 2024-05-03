'use client';

/* core */
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  gap: clamp(3.125rem, -3.107rem + 12.97vw, 8.563rem);

  @media (max-width: 845px) {
    justify-content: center;
    width: 100%;
  }
`;
