import React from 'react';
import { Link } from 'react-router-dom';
import {
  ImgContainer,
  Li,
  Quantity,
  Title,
} from './EspumososCatalogItem.styled';

const EspumososCatalogItem = ({ title, type, img, alt, qty, state }) => {
  console.log(type);
  return (
    <Li>
      <Link to={`/espumosos/${type}`} state={state}>
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

export default EspumososCatalogItem;
