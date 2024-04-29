'use client';

import {
  LinksButtonContainer,
  StyledButton,
} from '@/modules/HomeContent/components/LinksGroup/LinksButton/LinksButton.styled';

export const LinksButton = () => {
  const handleClick = () => {
    console.log('There is future link at this btn');
  };

  return (
    <LinksButtonContainer>
      <StyledButton type={'button'} onClick={handleClick}>
        Voting
      </StyledButton>
      <StyledButton type={'button'} onClick={handleClick}>
        Voting
      </StyledButton>
      <StyledButton type={'button'} onClick={handleClick}>
        Voting
      </StyledButton>
    </LinksButtonContainer>
  );
};
