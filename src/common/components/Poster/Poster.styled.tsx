'use client';

import styled from 'styled-components';

export const PosterWrapper = styled.div`
  width: 100%;
  max-width: 680px;
  max-height: 840px;
  background-color: ${(props) => props.theme.poster};
  border-radius: 20px;
  margin-left: 137px;
`;
