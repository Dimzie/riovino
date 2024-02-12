import BackBtn from 'components/BackBtn/BackBtn';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../../../redux/products/operations';
import { useProducts } from 'hooks/useProducts';

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
      <h2>Total products: {products.totalProducts}</h2>
      {!isProductsLoading && (
        <ul>
          {products.products.map(({ _id, title }) => {
            return (
              <li key={_id}>
                <h2>{title}</h2>
              </li>
            );
          })}
        </ul>
      )}
      <BackBtn backLink={backLink} />
    </>
  );
};

export default TypeList;
