import React from 'react';
import { Link } from 'react-router-dom';
import { ImgContainer, Li, Quantity, Title } from './MainCatalogItem.styled';

const CatalogItem = ({ title, href, img, alt, qty, state }) => {
  return (
    <Li>
      <Link to={href} state={state}>
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

export default CatalogItem;
