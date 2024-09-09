import React from 'react';
import {
  ImgContainer,
  Li,
  Quantity,
  Title,
} from './DestiladosCatalogItem.styled';
import { Link } from 'react-router-dom';

const DestiladosCatalogItem = ({ title, type, img, alt, qty, state }) => {
  return (
    <Li>
      <Link to={`/destilados/${type}`} state={state}>
        <ImgContainer>
          <img src={img} alt={alt} />
        </ImgContainer>
        <Title>{title}</Title>
        <Quantity>
          (<i>{qty} typos</i>)
        </Quantity>
      </Link>
    </Li>
  );
};

export default DestiladosCatalogItem;
