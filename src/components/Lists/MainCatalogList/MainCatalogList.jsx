import React from 'react';
import { H1Title, List } from './MainCatalogList.styled';
import { mainCatalogList } from 'data/data';
import MainCatalogItem from 'components/Items/MainCatalogItem/MainCatalogItem';
import { useLocation } from 'react-router-dom';

const MainCatalogList = () => {
  const location = useLocation();

  return (
    <>
      <H1Title>Catalogar</H1Title>
      <List>
        {mainCatalogList.map(({ title, img, href, alt, id, qty }) => (
          <MainCatalogItem
            title={title}
            img={img}
            href={href}
            key={id}
            alt={alt}
            qty={qty}
            state={{ from: location }}
          />
        ))}
      </List>
    </>
  );
};

export default MainCatalogList;
