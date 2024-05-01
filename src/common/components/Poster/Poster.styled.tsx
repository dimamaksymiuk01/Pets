'use client';

import styled from 'styled-components';
import { media } from '@/common/styles';

export const PosterWrapper = styled.div`
  width: 680px;
  height: 840px;
  background-color: ${(props) => props.theme.poster};
  border-radius: 20px;
  position: relative;

  img {
    position: absolute;
    top: -62px;
    right: 0;
  }

  @media (max-width: 845px) {
    display: none;
  }
`;
