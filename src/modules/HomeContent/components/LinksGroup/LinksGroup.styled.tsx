'use client';

import styled from 'styled-components';
import { colors } from '@/common/styles';

const insideCard = `
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid;
  width: 138px;
  height: 198px;
`;

export const LinksGroupContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  div:nth-child(1) {
    background-color: ${colors.purple};
    border-color: ${(props) => props.theme.groupborder};
    ${insideCard};
  }

  div:nth-child(2) {
    background-color: ${colors.green};
    border-color: #ffffff99;
    ${insideCard};
  }

  div:nth-child(3) {
    background-color: ${colors.purple};
    border-color: #ffffff99;
    ${insideCard};
  }
`;
