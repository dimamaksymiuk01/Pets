import {
  LinksCardContainer,
  StyledButton,
} from '@/common/components/LinksGroup/LinksGroup.styled';
import Link from 'next/link';
import { linksData } from '@/common/components/LinksGroup/linksData';

export const ButtonGroup = () => (
  <LinksCardContainer>
    {linksData.map(({ id, href, label }) => (
      <Link key={id} href={href}>
        <StyledButton>{label}</StyledButton>
      </Link>
    ))}
  </LinksCardContainer>
);
