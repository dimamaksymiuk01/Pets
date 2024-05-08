import { ComponentType } from 'react';
import { Line1, Line2, Line3, Line4, Line5, Line6 } from './BurgerMenu.styled';

interface IMenuLine {
  Component: ComponentType<{ $isOpen: boolean }>;
  id: number;
}

export const openLines: IMenuLine[] = [
  { Component: Line1, id: 1 },
  { Component: Line2, id: 2 },
  { Component: Line3, id: 3 },
];

export const closedLines: IMenuLine[] = [
  { Component: Line4, id: 1 },
  { Component: Line5, id: 2 },
  { Component: Line6, id: 3 },
];
