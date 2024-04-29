import { HomeContentContainer } from '@/modules/HomeContent/HomeContent.styled';
import { HomeText } from '@/modules/HomeContent/components/HomeText/HomeText';
import { LinksGroup } from '@/modules/HomeContent/components/LinksGroup/LinksGroup';
import { Header } from '@/modules/Header/Header';

export const HomeContent = () => {
  return (
    <HomeContentContainer>
      <Header />
      <HomeText />
      <LinksGroup />
    </HomeContentContainer>
  );
};
