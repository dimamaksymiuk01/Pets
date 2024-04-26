import { Metadata } from 'next';
import { StyledApp, Name } from '@/common/components/ThemeSwitch/ThemeSwitch.styled';
import ThemeSwitch from '@/common/components/ThemeSwitch/ThemeSwitch';

export const metadata: Metadata = {
  title: 'PETS | HONE',
  description: 'PETS',
};

const Home = () => {
  return (
    <StyledApp>
      <ThemeSwitch />
      <Name>Dima</Name>
    </StyledApp>
  );
};

export default Home;
