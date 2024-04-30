//core
import { ElementType } from 'react';
import { StaticImageData } from 'next/image';

export interface ILinksCardsData {
  component: ElementType;
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
}

export interface ILinksButtonProps {
  href: string;
  label: string;
}
