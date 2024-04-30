'use client';

//core
import styled from 'styled-components';
//constants
import { colors } from '@/common/styles';

export const NavMenuTextContainer = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: left;
  font-weight: 500;
  font-size: 20px;

  span:nth-child(1) {
    font-size: 44px;
  }

  span:nth-child(2) {
    color: ${colors.gray};
    padding-top: 10px;
    font-weight: 400;
  }

  span:nth-child(3) {
    padding-top: 60px;
  }
`;
