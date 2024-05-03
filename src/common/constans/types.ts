/* core */
import { ElementType } from 'react';
import { StaticImageData } from 'next/image';

export interface ILinksGroup {
  card: ElementType;
  button: ElementType;
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  href: string;
  label: string;
}
