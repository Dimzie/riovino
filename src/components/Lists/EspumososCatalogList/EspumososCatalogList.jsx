import React from 'react';
import { List } from './EspumososCatalogList.styled';
import { espumososCatalogList } from 'data/data';
import EspumososCatalogItem from 'components/Items/EspumososCatalogItem/EspumososCatalogItem';

const EspumososCatalogList = () => {
  return (
    <List>
      {espumososCatalogList.map(({ title, img, alt, href, id, qty }) => (
        <EspumososCatalogItem
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

export default EspumososCatalogList;
