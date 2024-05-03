'use client';

/* core */
import styled from 'styled-components';
/* styles */
// import { media } from '@/common/styles';

export const PosterWrapper = styled.div`
  width: 680px;
  height: 840px;
  background-color: ${(props) => props.theme.poster};
  border-radius: 20px;

  div {
    width: 100%;
    height: 100%;
    max-height: 545px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      //775
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
