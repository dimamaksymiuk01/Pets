'use client';

import styled from 'styled-components';
import { colors } from '@/common/styles';

export const HomeTextContainer = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: left;

  span:nth-child(1) {
    font-size: 44px;
    font-weight: 500;
  }
  span:nth-child(2) {
    font-size: 20px;
    color: ${colors.gray};
    padding-top: 10px;
    font-weight: 400;
  }
  span:nth-child(3) {
    font-size: 20px;
    padding-top: 60px;
    font-weight: 500;
  }
`;
