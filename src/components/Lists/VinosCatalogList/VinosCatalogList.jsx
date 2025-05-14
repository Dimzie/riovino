import React, { useEffect } from 'react';
import { H1Title, List } from './VinosCatalogList.styled';
import VinosCatalogItem from 'components/Items/VinosCatalogItem/VinosCatalogItem';
import { vinosCatalogList } from 'data/data';
import BackBtn from 'components/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useProducts } from 'hooks/useProducts';
import { getVinosCount } from '../../../redux/products/operations';

const VinosCatalogList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const dispatch = useDispatch();
  const { vinosCount } = useProducts();
  useEffect(() => {
    dispatch(getVinosCount());
  }, [dispatch]);
  return (
    <>
      <H1Title>Vinos</H1Title>
      <List>
        {vinosCatalogList.map(({ title, img, alt, href, id, countKey }) => {
          const totalCount = vinosCount[countKey];
          return (
            <VinosCatalogItem
              title={title}
              img={img}
              key={id}
              alt={alt}
              qty={totalCount}
              href={href}
              state={{ from: location }}
            />
          );
        })}
      </List>

      <BackBtn backLink={backLink} />
    </>
  );
};

export default VinosCatalogList;
