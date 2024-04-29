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

export const LinksCardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & > div:nth-child(1) {
    background-color: ${colors.purple};
    color: ${(props) => props.theme.groupborder};
    ${insideCard};
  }

  & > div:nth-child(2) {
    background-color: ${colors.green};
    color: ${(props) => props.theme.groupborder};
    ${insideCard};
  }

  & > div:nth-child(3) {
    background-color: ${colors.peach};
    color: ${(props) => props.theme.groupborder};
    ${insideCard};
  }
`;
