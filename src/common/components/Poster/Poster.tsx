import Image from 'next/image';
import poster from '@/public/pictures/girlAndCat.png';
import { PosterWrapper } from '@/common/components/Poster/Poster.styled';

export const Poster = () => {
  return (
    <PosterWrapper>
      {/*<Image src={poster} width={700} priority={true} alt={'girlAndCat'} />*/}
    </PosterWrapper>
  );
};
