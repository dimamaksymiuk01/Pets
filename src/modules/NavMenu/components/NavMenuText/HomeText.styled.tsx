'use client';

/* core */
import styled from 'styled-components';

/* instruments */
import { colors } from '@/common/styles';

export const NavMenuTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: left;
  font-weight: 500;
  font-size: 20px;
  padding-top: 80px;

  span:nth-child(1) {
    font-size: 44px;
  }

  span:nth-child(2) {
    color: ${colors.gray};
    font-weight: 400;
    padding-top: 10px;
  }

  span:nth-child(3) {
    padding-top: clamp(1.875rem, 0.794rem + 5.41vw, 3.75rem);
  }
`;
