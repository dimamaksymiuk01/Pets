import { Metadata } from 'next';
import ThemeSwitch from '@/common/components/ThemeSwitch/ThemeSwitch';
import RootLayout from '@/app/layout';

export const metadata: Metadata = {
  title: 'PETS | HONE',
  description: 'PETS',
};

const Home = () => {
  return (
    <RootLayout>
      <ThemeSwitch />
    </RootLayout>
  );
};

export default Home;
