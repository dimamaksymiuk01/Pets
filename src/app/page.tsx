import { Metadata } from 'next';
import { HomeContent } from '@/modules/HomeContent/HomeContent';

export const metadata: Metadata = {
  title: 'PETS | HOME',
  description: 'PETS',
};

const Home = () => {
  return (
    <>
      <HomeContent />
    </>
  );
};

export default Home;
