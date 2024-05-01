//core
import Image from 'next/image';
import Link from 'next/link';
//pictures
import Voting from '@/public/pictures/voting.png';
import Breeds from '@/public/pictures/breeds.png';
import Gallery from '@/public/pictures/gallery.png';
//constants
import { ILinksGroup } from '@/common/constans';
//styles
import {
  BreedsCard,
  GalleryCard,
  LinksCardContainer,
  VotingCard,
  StyledButton,
  CardWithButtonContainer,
} from './LinksGroup.styled';

const linksCardsData: ILinksGroup[] = [
  {
    card: VotingCard,
    button: StyledButton,
    src: Voting,
    width: 100,
    height: 124,
    alt: 'Picture of voting',
    href: '/voting',
    label: 'VOTING',
  },
  {
    card: BreedsCard,
    button: StyledButton,
    src: Breeds,
    width: 117,
    height: 163,
    alt: 'Picture of breeds',
    href: '/breeds',
    label: 'BREEDS',
  },
  {
    card: GalleryCard,
    button: StyledButton,
    src: Gallery,
    width: 112,
    height: 190,
    alt: 'Picture of voting',
    href: '/gallery',
    label: 'GALLERY',
  },
];

export const LinksGroup = () => (
  <LinksCardContainer>
    {linksCardsData.map(
      ({ card: Component, button, href, label, src, width, height, alt }, index) => (
        <CardWithButtonContainer key={index}>
          <Component>
            <Image src={src} width={width} height={height} priority alt={alt} />
          </Component>
          <Link key={index} href={href}>
            <StyledButton>{label}</StyledButton>
          </Link>
        </CardWithButtonContainer>
      ),
    )}
  </LinksCardContainer>
);
