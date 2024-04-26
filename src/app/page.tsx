import { Metadata } from 'next';
import ThemeSwitch from '@/common/components/ThemeSwitch/ThemeSwitch';
import Test from '@/common/components/Block';

export const metadata: Metadata = {
  title: 'PETS | HONE',
  description: 'PETS',
};

const Home = () => (
  <div>
    <ThemeSwitch />
    <Test />
  </div>
);

export default Home;
