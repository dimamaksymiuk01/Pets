import ThemeSwitch from 'common/components/ThemeSwitch';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'PETS | HONE',
  description: 'PETS',
};
const Home = () => {
  return <ThemeSwitch />;
};
