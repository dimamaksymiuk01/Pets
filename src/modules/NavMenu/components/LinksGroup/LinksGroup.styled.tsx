'use client';

/* core */
import styled from 'styled-components';
/* instruments */
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
export const CardWithButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinksCardContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.btnHome};
  color: ${colors.pink};
  width: 146px;
  height: 36px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.theme.btnHomeHover};
  }
  &:active {
    background-color: ${(props) => props.theme.btnHomeActive};
    color: ${colors.white};
  }
`;
