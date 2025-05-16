import React, { useEffect } from 'react';
import { H1Title, List } from './DestiladosCatalogList.styled';
import DestiladosCatalogItem from 'components/Items/DestiladosCatalogItem/DestiladosCatalogItem';
import { destiladosCatalogList } from 'data/data';
import BackBtn from 'components/Buttons/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDestiladosCount } from '../../../redux/products/operations';
import { useProducts } from 'hooks/useProducts';

const DestiladosCatalogList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const dispatch = useDispatch();

  const { destiladosCount } = useProducts();
  useEffect(() => {
    dispatch(getDestiladosCount());
  }, [dispatch]);
  return (
    <>
      <H1Title>Destilados</H1Title>
      <List>
        {destiladosCatalogList.map(
          ({ title, img, alt, href, id, countKey }) => {
            const totalCount = destiladosCount[countKey];
            return (
              <DestiladosCatalogItem
                title={title}
                img={img}
                href={href}
                key={id}
                alt={alt}
                qty={totalCount}
                state={{ from: location }}
              />
            );
          }
        )}
      </List>
      <BackBtn backLink={backLink} />
    </>
  );
};

export default DestiladosCatalogList;
