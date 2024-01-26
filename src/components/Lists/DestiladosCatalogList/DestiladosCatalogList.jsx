import React from 'react';
import { H1Title, List } from './DestiladosCatalogList.styled';
import DestiladosCatalogItem from 'components/Items/DestiladosCatalogItem/DestiladosCatalogItem';
import { destiladosCatalogList } from 'data/data';

const DestiladosCatalogList = () => {
  return (
    <>
      <H1Title>Destilados</H1Title>
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
    </>
  );
};

export default DestiladosCatalogList;
