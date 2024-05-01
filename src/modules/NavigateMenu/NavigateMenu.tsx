//styles
import { NavigateMenuContainer } from './NavigateMenu.styled';
//components
import { LinksGroup, NavigateMenuText } from './components';
import { Header } from '@/modules';

export const NavigateMenu = () => (
  <NavigateMenuContainer>
    <Header />
    <NavigateMenuText />
    <LinksGroup />
  </NavigateMenuContainer>
);
