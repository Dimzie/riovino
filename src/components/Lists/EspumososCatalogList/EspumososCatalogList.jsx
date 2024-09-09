import React, { useEffect } from 'react';
import { H1Title, List } from './EspumososCatalogList.styled';
import { espumososCatalogList } from 'data/data';
import EspumososCatalogItem from 'components/Items/EspumososCatalogItem/EspumososCatalogItem';
import BackBtn from 'components/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProducts } from 'hooks/useProducts';
import { getEspumososCount } from '../../../redux/products/operations';

const EspumososCatalogList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const dispatch = useDispatch();
  const { espumososCount } = useProducts();
  useEffect(() => {
    dispatch(getEspumososCount());
  }, [dispatch]);
  return (
    <>
      <H1Title>Espumosos</H1Title>
      <List>
        {espumososCatalogList.map(({ title, img, alt, type, id, countKey }) => {
          const totalCount = espumososCount[countKey];
          return (
            <EspumososCatalogItem
              title={title}
              img={img}
              key={id}
              alt={alt}
              qty={totalCount}
              type={type}
              state={{ from: location }}
            />
          );
        })}
      </List>
      <BackBtn backLink={backLink} />
    </>
  );
};

export default EspumososCatalogList;
