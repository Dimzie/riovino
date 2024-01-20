import React from 'react';
import { List } from './DestiladosCatalogList.styled';
import DestiladosCatalogItem from 'components/Items/DestiladosCatalogItem/DestiladosCatalogItem';
import { destiladosCatalogList } from 'data/data';

const DestiladosCatalogList = () => {
  return (
    <List>
      {destiladosCatalogList.map(({ title, img, alt, href, id, qty }) => (
        <DestiladosCatalogItem
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

export default DestiladosCatalogList;
