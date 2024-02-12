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
  const { products } = useProducts();
  console.log(products.products);
  //   console.log(subType);
  useEffect(() => {
    dispatch(getProducts(subType));
  }, [dispatch, subType]);

  return (
    <>
      <ul>
        {products.products.map(({ title }) => {
          return (
            <li>
              <h2>{title}</h2>
            </li>
          );
        })}
      </ul>
      <BackBtn backLink={backLink} />
    </>
  );
};

export default TypeList;
