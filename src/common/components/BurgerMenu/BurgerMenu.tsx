'use client';

/* components */
import {
  BurgerContainer,
  Checkbox,
  CheckboxClose,
  HamburgerClosedLines,
  HamburgerLines,
  BurgerWrapper,
  MenuItems,
  NavContainer,
  Overlay,
} from './BurgerMenu.styled';
import { LinksGroup } from '@/common/components/LinksGroup/LinksGroup';

/* instruments */
import { useMenu } from '@/common/hooks';
import { closedLines, openLines } from './BurgerData';

export const BurgerMenu = () => {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <BurgerWrapper>
      <NavContainer>
        <Checkbox type='checkbox' checked={isOpen} onChange={toggleMenu} />
        <HamburgerLines>
          {openLines.map(({ Component, id }) => (
            <Component key={id} $isOpen={isOpen} />
          ))}
        </HamburgerLines>
        <MenuItems $isOpen={isOpen}>
          <CheckboxClose type='checkbox' checked={isOpen} onChange={toggleMenu} />
          <HamburgerClosedLines>
            {closedLines.map(({ Component, id }) => (
              <Component key={id} $isOpen={isOpen} />
            ))}
          </HamburgerClosedLines>
          <BurgerContainer>
            <LinksGroup />
          </BurgerContainer>
        </MenuItems>
        <Overlay $isOpen={isOpen} />
      </NavContainer>
    </BurgerWrapper>
  );
};
