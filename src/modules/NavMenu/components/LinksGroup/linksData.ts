/* instruments */
import { ILinksData } from './typeLinksData';
import { ROUTES_ENUM } from '@/common/enums';

/* components */
import Voting from '@/public/pictures/voting.png';
import Breeds from '@/public/pictures/breeds.png';
import Gallery from '@/public/pictures/gallery.png';
import { BreedsCard, GalleryCard, VotingCard } from './LinksGroup.styled';

export const linksData: ILinksData[] = [
  {
    id: 0,
    card: VotingCard,
    src: Voting,
    width: 100,
    height: 124,
    alt: 'Picture of voting',
    href: ROUTES_ENUM.VOTING,
    label: 'VOTING',
  },
  {
    id: 1,
    card: BreedsCard,
    src: Breeds,
    width: 117,
    height: 163,
    alt: 'Picture of breeds',
    href: ROUTES_ENUM.BREEDS,
    label: 'BREEDS',
  },
  {
    id: 2,
    card: GalleryCard,
    src: Gallery,
    width: 112,
    height: 190,
    alt: 'Picture of voting',
    href: ROUTES_ENUM.GALLERY,
    label: 'GALLERY',
  },
];
