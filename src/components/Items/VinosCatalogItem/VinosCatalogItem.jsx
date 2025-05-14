import React from 'react';
import {
  ImgContainer,
  InfoContainer,
  Li,
  Quantity,
  StyledLink,
  Title,
} from './VinosCatalogItem.styled';

const VinosCatalogItem = ({ title, img, alt, qty, href, state }) => {
  return (
    <Li>
      <StyledLink to={`/vinos/${href}`} state={state}>
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

export default VinosCatalogItem;
