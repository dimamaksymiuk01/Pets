//core
import Image from 'next/image';
//pictures
import Voting from '@/public/pictures/voting.png';
import Breeds from '@/public/pictures/breeds.png';
import Gallery from '@/public/pictures/gallery.png';
//constants
import { ILinksCardsData } from '@/common/constans';
//styles
import {
  BreedsCard,
  GalleryCard,
  LinksCardContainer,
  VotingCard,
} from './LinksCard.styled';

const linksCardsData: ILinksCardsData[] = [
  {
    component: VotingCard,
    src: Voting,
    width: 100,
    height: 124,
    alt: 'Picture of voting',
  },
  {
    component: BreedsCard,
    src: Breeds,
    width: 117,
    height: 163,
    alt: 'Picture of breeds',
  },
  {
    component: GalleryCard,
    src: Gallery,
    width: 112,
    height: 190,
    alt: 'Picture of voting',
  },
];

export const LinksCard = () => (
  <LinksCardContainer>
    {linksCardsData.map(({ component: Component, src, width, height, alt }, index) => (
      <Component key={index}>
        <Image src={src} width={width} height={height} priority alt={alt} />
      </Component>
    ))}
  </LinksCardContainer>
);
