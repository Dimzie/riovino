import React from 'react';
import {
  ImgContainer,
  Li,
  Quantity,
  Title,
} from './DestiladosCatalogItem.styled';
import { Link } from 'react-router-dom';

const DestiladosCatalogItem = ({ title, href, img, alt, qty }) => {
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

export default DestiladosCatalogItem;
