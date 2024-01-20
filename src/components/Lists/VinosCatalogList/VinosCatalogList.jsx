import React from 'react';
import { List } from './VinosCatalogList.styled';
import VinosCatalogItem from 'components/Items/VinosCatalogItem/VinosCatalogItem';
import { vinosCatalogList } from 'data/data';

const VinosCatalogList = () => {
  return (
    <List>
      {vinosCatalogList.map(({ title, img, alt, href, id, qty }) => (
        <VinosCatalogItem
          title={title}
          img={img}
          href={href}
          key={id}
          alt={alt}
          qty={qty}
        />
      ))}
    </List>
  );
};

export default VinosCatalogList;
