/* core */
import Image from 'next/image';
/* components */
import { PosterWrapper } from './Poster.styled';
import Girl from '@/public/pictures/girlAndCat.png';

export const Poster = () => (
  <PosterWrapper>
    <Image src={Girl} quality={100} alt={'girl and cat'} />
  </PosterWrapper>
);
