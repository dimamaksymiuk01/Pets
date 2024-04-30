'use client';

//core
import styled from 'styled-components';

export const PosterWrapper = styled.div`
  width: 680px;
  height: 840px;
  background-color: ${(props) => props.theme.poster};
  border-radius: 20px;
  position: relative;
`;
