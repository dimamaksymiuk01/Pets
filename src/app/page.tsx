import { Metadata } from 'next';
import { Header } from '@/modules/Header/Header';
import { HomeContent } from '@/modules/HomeContent/HomeContent';

export const metadata: Metadata = {
  title: 'PETS | HOME',
  description: 'PETS',
};

const Home = () => {
  return (
    <>
      <Header />
      <HomeContent />
    </>
  );
};

export default Home;
