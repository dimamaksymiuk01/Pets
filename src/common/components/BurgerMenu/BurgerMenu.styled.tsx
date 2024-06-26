'use client';
import styled from 'styled-components';
import { colors } from '@/common/styles';

interface IBurgerMenuProps {
  $isOpen: boolean;
}

export const BurgerWrapper = styled.div`
  width: 60px;
  height: 60px;
  z-index: 100;
  border-radius: 20px;
  background-color: ${(props) => props.theme.burger};
  position: relative;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const MenuItems = styled.div<IBurgerMenuProps>`
  display: flex;
  list-style: none;
  padding-top: 120px;
  height: ${(props) => (props.$isOpen ? '100vh' : 'auto')};
  width: ${(props) => (props.$isOpen ? '100vw' : 'auto')};
  transform: ${(props) => (props.$isOpen ? 'translateX(0)' : 'translate(-150%)')};
  flex-direction: column;
  transition: transform 0.5s ease-in-out;
  position: ${(props) => (props.$isOpen ? 'fixed' : 'relative')};
  top: ${(props) => (props.$isOpen ? '-30px' : 'auto')};
  left: ${(props) => (props.$isOpen ? '0' : '-300px')};
  z-index: ${(props) => (props.$isOpen ? '99' : '1')};
  background-color: ${({ theme }) => theme.body};
`;

export const BurgerContainer = styled.div`
  position: absolute;
  right: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
`;

export const Checkbox = styled.input`
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 15px;
  left: 13px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
`;

export const HamburgerLines = styled.div`
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HamburgerClosedLines = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${(props) => props.theme.burger};
  border-radius: 20px;
  position: absolute;
  top: 55px;
  right: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: opacity 0.5s ease-in-out;
`;

export const CheckboxClose = styled.input`
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 55px;
  right: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  color: black;
`;

export const Line = styled.div<IBurgerMenuProps>`
  display: block;
  height: 4px;
  width: 30px;
  border-radius: 10px;
  background: ${colors.pink};
`;

export const Line1 = styled(Line)<IBurgerMenuProps>`
  transform-origin: -10px;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : undefined)};
`;

export const Line2 = styled(Line)`
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.$isOpen ? 'scaleY(0)' : undefined)};
`;

export const Line3 = styled(Line)`
  transform-origin: -10px;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => (props.$isOpen ? 'rotate(-45deg)' : undefined)};
`;

export const Line4 = styled(Line)`
  margin-top: 9px;
  margin-left: 23px;
  transform-origin: -10px;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : undefined)};
`;

export const Line5 = styled(Line)`
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.$isOpen ? 'scaleY(0)' : undefined)};
`;

export const Line6 = styled(Line)`
  margin-bottom: 18px;
  margin-left: 20px;
  transform-origin: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => (props.$isOpen ? 'rotate(-45deg)' : undefined)};
`;

export const Overlay = styled.div<IBurgerMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => (props.$isOpen ? '98' : '-1')};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
`;
