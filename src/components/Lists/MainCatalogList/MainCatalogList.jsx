import React, { useEffect } from 'react';
import { H1Title, List } from './MainCatalogList.styled';
import { mainCatalogList } from 'data/data';
import MainCatalogItem from 'components/Items/MainCatalogItem/MainCatalogItem';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProducts } from 'hooks/useProducts';
import { getCountByType } from '../../../redux/products/operations';

const MainCatalogList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { countByType } = useProducts();
  useEffect(() => {
    dispatch(getCountByType());
  }, [dispatch]);

  return (
    <>
      <H1Title>Catalogar</H1Title>
      <List>
        {mainCatalogList.map(({ title, img, href, alt, id, countKey }) => {
          const totalCount = countByType[countKey];
          return (
            <MainCatalogItem
              title={title}
              img={img}
              href={href}
              key={id}
              alt={alt}
              qty={totalCount}
              state={{ from: location }}
            />
          );
        })}
      </List>
    </>
  );
};

export default MainCatalogList;
