'use client';

//core
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  gap: clamp(0.625rem, -8.446rem + 18.9vw, 8.563rem);

  @media (max-width: 845px) {
    justify-content: center;
    width: 100%;
  }
`;
