'use client';

import {
  BurgerContainer,
  Checkbox,
  CheckboxClose,
  HamburgerClosedLines,
  HamburgerLines,
  HeaderContainer,
  Line1,
  Line2,
  Line3,
  Line4,
  Line5,
  Line6,
  MenuItems,
  NavContainer,
  Overlay,
} from './BurgerMenu.styled';
import { LinksGroup } from '@/modules/NavMenu/components';
import { useMenu } from '@/common/hooks';
import { Logo } from '@/common/components/Logo/Logo';

export const HamburgerMenu = () => {
  const { isOpen, toggleMenu } = useMenu();

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
          {/*<div>*/}
          {/*  <Logo />*/}
          {/*</div>*/}
          <CheckboxClose type='checkbox' checked={isOpen} onChange={toggleMenu} />
          <HamburgerClosedLines>
            <Line4 isOpen={isOpen} />
            <Line5 isOpen={isOpen} />
            <Line6 isOpen={isOpen} />
          </HamburgerClosedLines>
          <BurgerContainer>
            <LinksGroup />
          </BurgerContainer>
        </MenuItems>
        <Overlay isOpen={isOpen} />
      </NavContainer>
    </HeaderContainer>
  );
};
