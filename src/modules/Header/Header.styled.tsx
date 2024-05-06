'use client';

/* core */
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftBar = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  gap: 5px;
  cursor: pointer;
  width: 100%;
  height: 50px;
`;

export const CustomLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
