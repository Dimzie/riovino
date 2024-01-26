import React from 'react';
import { H1Title, List } from './MainCatalogList.styled';
import { mainCatalogList } from 'data/data';
import MainCatalogItem from 'components/Items/MainCatalogItem/MainCatalogItem';

const MainCatalogList = () => {
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
          />
        ))}
      </List>
    </>
  );
};

export default MainCatalogList;
