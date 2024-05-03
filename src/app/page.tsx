/* core */
import { Metadata } from 'next';
/* components */
import { Poster } from '@/common/components';

export const metadata: Metadata = {
  title: 'PETS | HOME',
  description: 'PETS',
};

const Home = () => {
  return <Poster />;
};

export default Home;
