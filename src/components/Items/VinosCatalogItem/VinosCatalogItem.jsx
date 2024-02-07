import React from 'react';
import { Link } from 'react-router-dom';
import { ImgContainer, Li, Quantity, Title } from './VinosCatalogItem.styled';

const VinosCatalogItem = ({ title, img, alt, qty, type, state }) => {
  return (
    <Li>
      <Link to={`/vinos/${type}`} state={state}>
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

export default VinosCatalogItem;
