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
  TestInp,
} from './BurgerMenu.styled';
import { LinksGroup } from '@/modules/NavMenu/components';

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
          <TestInp type={'checkbox'} checked={isOpen} onChange={toggleMenu} />
          <LinksGroup />
        </MenuItems>
        <Overlay isOpen={isOpen} />
      </NavContainer>
    </HeaderContainer>
  );
};
