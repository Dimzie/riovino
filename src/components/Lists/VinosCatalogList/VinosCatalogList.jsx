import React from 'react';
import { H1Title, List } from './VinosCatalogList.styled';
import VinosCatalogItem from 'components/Items/VinosCatalogItem/VinosCatalogItem';
import { vinosCatalogList } from 'data/data';
import BackBtn from 'components/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';

const VinosCatalogList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
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
            state={{ from: location }}
          />
        ))}
      </List>
      <BackBtn backLink={backLink} />
    </>
  );
};

export default VinosCatalogList;
