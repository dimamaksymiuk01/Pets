import ThemeSwitch from 'common/components/ThemeSwitch';
import { Metadata } from 'next';
import { StyledApp } from 'common/components/ThemeSwitch.styled';

export const metadata: Metadata = {
  title: 'PETS | HONE',
  description: 'PETS',
};

const Home = () => {
  return (
    <StyledApp>
      <ThemeSwitch />
    </StyledApp>
  );
};

export default Home;
