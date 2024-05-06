'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 50px;
  height: 50px;
  z-index: 100;
  position: relative;
`;

export const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const MenuItems = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  padding-top: 120px;
  box-shadow: ${(props) =>
    props.isOpen ? 'inset 0 0 2000px rgba(255, 255, 255, 0.5)' : 'none'};

  height: ${(props) => (props.isOpen ? '100vh' : 'auto')};
  width: ${(props) => (props.isOpen ? '100vw' : 'auto')};
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translate(-150%)')};
  flex-direction: column;
  margin-left: -40px;
  padding-left: 50px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
  position: ${(props) => (props.isOpen ? 'fixed' : 'relative')};
  top: ${(props) => (props.isOpen ? '-30px' : 'auto')};
  left: ${(props) => (props.isOpen ? '0' : 'auto')};
  z-index: ${(props) => (props.isOpen ? '99' : '1')};
  background-color: ${(props) => (props.isOpen ? '#fff' : 'transparent')};

  li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #0e2431;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.7rem;

    &:hover {
      font-weight: bolder;
    }
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
`;

export const HamburgerLines = styled.div`
  height: 26px;
  width: 32px;
  position: absolute;
  top: 12px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Line = styled.span`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
`;

export const Line1 = styled(Line)<{ isOpen: boolean }>`
  transform-origin: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => (props.isOpen ? 'rotate(45deg)' : 'none')};
`;

export const Line2 = styled(Line)<{ isOpen: boolean }>`
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.isOpen ? 'scaleY(0)' : 'none')};
`;

export const Line3 = styled(Line)<{ isOpen: boolean }>`
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => (props.isOpen ? 'rotate(-45deg)' : 'none')};
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => (props.isOpen ? '98' : '-1')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
`;
