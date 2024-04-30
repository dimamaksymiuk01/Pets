//styles
import { NavigateMenuContainer } from './NavigateMenu.styled';
//components
import { NavigateMenuText, LinksGroup } from './components';
import { Header } from '@/modules';

export const NavigateMenu = () => (
  <NavigateMenuContainer>
    <Header />
    <NavigateMenuText />
    <LinksGroup />
  </NavigateMenuContainer>
);
