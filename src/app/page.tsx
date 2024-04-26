import { Metadata } from 'next';
import ThemeSwitch from '@/common/components/ThemeSwitch/ThemeSwitch';
import { Wrapper } from '@/common/components';

export const metadata: Metadata = {
  title: 'PETS | HONE',
  description: 'PETS',
};

const Home = () => (
  <Wrapper>
    <ThemeSwitch />
  </Wrapper>
);

export default Home;
