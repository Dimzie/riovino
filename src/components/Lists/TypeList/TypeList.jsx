import BackBtn from 'components/BackBtn/BackBtn';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../../../redux/products/operations';
import { useProducts } from 'hooks/useProducts';
import TypeItem from 'components/Items/TypeItem/TypeItem';
import { H2Title, List } from './TypeList.styled';

const TypeList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const dispatch = useDispatch();
  const { subType } = useParams();
  const { isProductsLoading, products } = useProducts();

  useEffect(() => {
    dispatch(getProducts(subType));
  }, [dispatch, subType]);

  return (
    <>
      <H2Title>{}</H2Title>
      {!isProductsLoading && (
        <List>
          {products.products.map(
            ({
              _id,
              title,
              alcohol,
              imageURL,
              imageID,
              price,
              region,
              capacity,
            }) => {
              return (
                <TypeItem
                  key={_id}
                  title={title}
                  alcohol={alcohol}
                  imageURL={imageURL}
                  imageID={imageID}
                  price={price}
                  region={region}
                  capacity={capacity}
                />
              );
            }
          )}
        </List>
      )}
      <BackBtn backLink={backLink} />
    </>
  );
};

export default TypeList;
