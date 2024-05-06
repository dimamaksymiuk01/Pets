'use client';

import { FC, useState } from 'react';
import {
  Checkbox,
  HamburgerLines,
  HeaderContainer,
  Line1,
  Line2,
  Line3,
  MenuItems,
  NavContainer,
  Overlay,
} from './BurgerMenu.styled';

export const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Checkbox type='checkbox' checked={isOpen} onChange={toggleMenu} />
        <HamburgerLines>
          <Line1 isOpen={isOpen} />
          <Line2 isOpen={isOpen} />
          <Line3 isOpen={isOpen} />
        </HamburgerLines>
        <MenuItems isOpen={isOpen}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Blogs</a>
          </li>
          <li>
            <a href='#'>Portfolio</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </MenuItems>
        <Overlay isOpen={isOpen} />
      </NavContainer>
    </HeaderContainer>
  );
};
