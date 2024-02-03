import React from 'react';
import { Link } from 'react-router-dom';
import { ImgContainer, Li, Quantity, Title } from './VinosCatalogItem.styled';

const VinosCatalogItem = ({ title, href, img, alt, qty, type }) => {
  return (
    <Li>
      <Link to={`/vinos/${type}`}>
        <ImgContainer>
          <img src={img} alt={alt} />
        </ImgContainer>
        <Title>{title}</Title>
        <Quantity>({qty})</Quantity>
      </Link>
    </Li>
  );
};

export default VinosCatalogItem;
