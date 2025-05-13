import React from 'react';
import {
  ImgContainer,
  InfoContainer,
  Li,
  Quantity,
  StyledLink,
  Title,
} from './EspumososCatalogItem.styled';

const EspumososCatalogItem = ({ title, type, img, alt, qty, state }) => {
  return (
    <Li>
      <StyledLink to={`/espumosos/${type}`} state={state}>
        <ImgContainer>
          <img src={img} alt={alt} />
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Quantity>
            (<i>{qty} typos</i>)
          </Quantity>
        </InfoContainer>
      </StyledLink>
    </Li>
  );
};

export default EspumososCatalogItem;
