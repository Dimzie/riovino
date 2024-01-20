import React from 'react';
import { List } from './MainCatalogList.styled';
import { mainCatalogList } from 'data/data';
import MainCatalogItem from 'components/Items/MainCatalogItem/MainCatalogItem';

const MainCatalogList = () => {
  return (
    <List>
      {mainCatalogList.map(({ title, img, href, alt, id }) => (
        <MainCatalogItem
          title={title}
          img={img}
          href={href}
          key={id}
          alt={alt}
        />
      ))}
    </List>
  );
};

export default MainCatalogList;
