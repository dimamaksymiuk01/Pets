/* core */
import { ElementType } from 'react';
import { StaticImageData } from 'next/image';

export interface ILinksData {
  id: number;
  card: ElementType;
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  href: string;
  label: string;
}
