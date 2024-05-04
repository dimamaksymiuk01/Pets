'use client';

/* core */
import styled from 'styled-components';

export const ThemeSwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

export const SwitchContainer = styled.label`
  font-size: 13px;
  position: relative;
  display: inline-block;
  width: 45px;
  height: 26px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Slider = styled.span`
  --background: #ff868e;
  --box-shadow: #fff000;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 17px;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px var(--box-shadow);
    background: var(--background);
    transition: 0.5s;
  }

  ${SwitchContainer} input:checked + & {
    background-color: var(--background);

    &:before {
      transform: translateX(100%);
      box-shadow: inset 15px -4px 0px 15px var(--box-shadow);
    }
  }
`;
