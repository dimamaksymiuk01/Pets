import Image from 'next/image';
import { LinksGroupContainer } from '@/modules/HomeContent/components/LinksGroup/LinksGroup.styled';
import Voting from '@/public/pictures/voting.png';
import Breeds from '@/public//pictures/breeds.png';
import Gallery from '@/public//pictures/gallery.png';
export const LinksGroup = () => {
  return (
    <LinksGroupContainer>
      <div>
        <Image src={Voting} width={100} height={124} alt='Picture of voting' />
      </div>
      <div>
        <Image src={Breeds} width={117} height={163} alt='Picture of breeds' />
      </div>
      <div>
        <Image src={Gallery} width={112} height={190} alt='Picture of voting' />
      </div>
    </LinksGroupContainer>
  );
};
