import { HomeContentContainer } from '@/modules/HomeContent/HomeContent.styled';
import { HomeText } from '@/modules/HomeContent/components/HomeText/HomeText';
import { LinksGroup } from '@/modules/HomeContent/components/LinksGroup/LinksGroup';

export const HomeContent = () => {
  return (
    <HomeContentContainer>
      <HomeText />
      <LinksGroup />
    </HomeContentContainer>
  );
};
