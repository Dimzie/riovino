import React from 'react';
import { Link } from 'react-router-dom';
import {
  ImgContainer,
  Li,
  Quantity,
  Title,
} from './EspumososCatalogItem.styled';

const EspumososCatalogItem = ({ title, href, img, alt, qty }) => {
  return (
    <Li>
      <Link to={href}>
        <ImgContainer>
          <img src={img} alt={alt} />
        </ImgContainer>
        <Title>{title}</Title>
        <Quantity>({qty})</Quantity>
      </Link>
    </Li>
  );
};

export default EspumososCatalogItem;
