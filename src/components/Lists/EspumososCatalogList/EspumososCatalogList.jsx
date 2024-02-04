import React from 'react';
import { H1Title, List } from './EspumososCatalogList.styled';
import { espumososCatalogList } from 'data/data';
import EspumososCatalogItem from 'components/Items/EspumososCatalogItem/EspumososCatalogItem';
import BackBtn from 'components/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';

const EspumososCatalogList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  return (
    <>
      <H1Title>Espumosos</H1Title>
      <List>
        {espumososCatalogList.map(({ title, img, alt, type, id, qty }) => (
          <EspumososCatalogItem
            title={title}
            img={img}
            type={type}
            key={id}
            alt={alt}
            qty={qty}
            state={{ from: location }}
          />
        ))}
      </List>
      <BackBtn backLink={backLink} />
    </>
  );
};

export default EspumososCatalogList;
