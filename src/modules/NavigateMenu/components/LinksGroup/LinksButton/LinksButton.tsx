'use client';

//styles
import { LinksButtonContainer, StyledButton } from './LinksButton.styled';
//core
import Link from 'next/link';
//constants
import { ILinksButtonProps } from '@/common/constans';

const linksData: ILinksButtonProps[] = [
  {
    href: '/voting',
    label: 'VOTING',
  },
  {
    href: '/breeds',
    label: 'BREEDS',
  },
  {
    href: '/gallery',
    label: 'GALLERY',
  },
];

export const LinksButton = () => (
  <LinksButtonContainer>
    {linksData.map(({ href, label }, index) => (
      <Link key={index} href={href}>
        <StyledButton>{label}</StyledButton>
      </Link>
    ))}
  </LinksButtonContainer>
);
