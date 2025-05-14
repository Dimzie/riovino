import React from 'react';
import {
  ImgContainer,
  Li,
  Quantity,
  StyledLink,
  Title,
} from './DestiladosCatalogItem.styled';

const DestiladosCatalogItem = ({ title, type, img, alt, qty, state }) => {
  return (
    <Li>
      <StyledLink to={`/destilados/${type}`} state={state}>
        <ImgContainer>
          <img src={img} alt={alt} />
        </ImgContainer>
        <Title>{title}</Title>
        <Quantity>
          (<i>{qty} typos</i>)
        </Quantity>
      </StyledLink>
    </Li>
  );
};

export default DestiladosCatalogItem;
