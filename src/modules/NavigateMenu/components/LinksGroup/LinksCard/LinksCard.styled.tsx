'use client';

//core
import styled from 'styled-components';
//constants
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
`;

export const VotingCard = styled.div`
  background-color: ${colors.purple};
  color: ${(props) => props.theme.groupborder};
  ${insideCard};
`;

export const BreedsCard = styled.div`
  background-color: ${colors.green};
  color: ${(props) => props.theme.groupborder};
  ${insideCard};
`;

export const GalleryCard = styled.div`
  background-color: ${colors.peach};
  color: ${(props) => props.theme.groupborder};
  ${insideCard};
`;
