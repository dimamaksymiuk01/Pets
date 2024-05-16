'use client';

/* core */
import Image from 'next/image';
import Link from 'next/link';

/* components */
import {
  LinksCardContainer,
  StyledButton,
  CardWithButtonContainer,
} from './LinksGroup.styled';

/*instruments */
import { linksData } from './linksData';
import { usePage } from '@/common/hooks';

export const LinksGroup = () => {
  const { isPage, togglePage } = usePage();

  // const handleButtonClick = () => {
  //   togglePage();
  // };
  return (
    <LinksCardContainer>
      {linksData.map(({ card: Component, id, href, label, src, width, height, alt }) => (
        <CardWithButtonContainer key={id}>
          <Component>
            <Image
              src={src}
              quality={100}
              width={width}
              height={height}
              priority
              alt={alt}
            />
          </Component>
          <Link key={id} href={href}>
            <StyledButton>{label}</StyledButton>
          </Link>
        </CardWithButtonContainer>
      ))}
    </LinksCardContainer>
  );
};
