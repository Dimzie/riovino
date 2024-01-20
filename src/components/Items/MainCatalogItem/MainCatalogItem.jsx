import React from 'react';
import { Link } from 'react-router-dom';
import { ImgContainer, Li, Quantity, Title } from './MainCatalogItem.styled';

const CatalogItem = ({ title, href, img, alt }) => {
  return (
    <Li>
      <Link to={href}>
        <ImgContainer>
          <img src={img} alt={alt} />
        </ImgContainer>
        <Title>{title}</Title>
        <Quantity>(2400)</Quantity>
      </Link>
    </Li>
  );
};

export default CatalogItem;
