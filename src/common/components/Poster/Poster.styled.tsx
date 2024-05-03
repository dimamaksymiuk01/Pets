'use client';

/* core */
import styled from 'styled-components';

export const PosterWrapper = styled.div`
  width: 680px;
  height: 840px;
  background-color: ${(props) => props.theme.poster};
  border-radius: 20px;
  position: relative;

  img {
    position: absolute;
    right: 0;
    top: -68px;
    width: clamp(26.563rem, -7.009rem + 69.94vw, 55.938rem); //max895 min425
    height: max-content;
    object-fit: contain;

    @media (max-width: 1024px) {
      top: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
