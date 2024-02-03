import React from 'react';
import { H1Title, List } from './DestiladosCatalogList.styled';
import DestiladosCatalogItem from 'components/Items/DestiladosCatalogItem/DestiladosCatalogItem';
import { destiladosCatalogList } from 'data/data';
import BackBtn from 'components/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';

const DestiladosCatalogList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  return (
    <>
      <H1Title>Destilados</H1Title>
      <List>
        {destiladosCatalogList.map(({ title, img, alt, type, id, qty }) => (
          <DestiladosCatalogItem
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

export default DestiladosCatalogList;
