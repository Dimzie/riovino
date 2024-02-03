import React from 'react';
import { H1Title, List } from './VinosCatalogList.styled';
import VinosCatalogItem from 'components/Items/VinosCatalogItem/VinosCatalogItem';
import { vinosCatalogList } from 'data/data';

const VinosCatalogList = () => {
  return (
    <>
      <H1Title>Vinos</H1Title>
      <List>
        {vinosCatalogList.map(({ title, img, alt, type, id, qty }) => (
          <VinosCatalogItem
            title={title}
            img={img}
            key={id}
            alt={alt}
            qty={qty}
            type={type}
          />
        ))}
      </List>
    </>
  );
};

export default VinosCatalogList;
