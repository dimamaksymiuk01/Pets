/* core */
import Image from 'next/image';
/* components */
import { PosterWrapper } from './Poster.styled';
import Girl from '@/public/pictures/girlAndCat.png';

export const Poster = () => (
  <PosterWrapper>
    <div>
      <Image src={Girl} alt={'girl and cat'} />
    </div>
  </PosterWrapper>
);
