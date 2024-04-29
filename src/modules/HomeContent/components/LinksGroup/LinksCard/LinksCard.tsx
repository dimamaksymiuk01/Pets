import Image from 'next/image';
import Voting from '@/public/pictures/voting.png';
import Breeds from '@/public//pictures/breeds.png';
import Gallery from '@/public//pictures/gallery.png';
import { LinksCardContainer } from '@/modules/HomeContent/components/LinksGroup/LinksCard/LinksCard.styled';

export const LinksCard = () => {
  return (
    <LinksCardContainer>
      <div>
        <Image
          src={Voting}
          width={100}
          height={124}
          priority={true}
          alt='Picture of voting'
        />
      </div>
      <div>
        <Image
          src={Breeds}
          width={117}
          height={163}
          priority={true}
          alt='Picture of breeds'
        />
      </div>
      <div>
        <Image
          src={Gallery}
          width={112}
          height={190}
          priority={true}
          alt='Picture of voting'
        />
      </div>
    </LinksCardContainer>
  );
};
