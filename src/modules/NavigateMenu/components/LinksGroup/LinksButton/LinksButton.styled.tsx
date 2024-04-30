'use client';

//core
import styled from 'styled-components';
//constants
import { colors } from '@/common/styles';

export const LinksButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
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
`;
