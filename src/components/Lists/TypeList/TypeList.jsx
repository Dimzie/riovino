import BackBtn from 'components/BackBtn/BackBtn';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../../../redux/products/operations';
import { useProducts } from 'hooks/useProducts';
import TypeItem from 'components/Items/TypeItem/TypeItem';
import { H2Title, List } from './TypeList.styled';
import { allSubTypes } from 'data/data';

const TypeList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const dispatch = useDispatch();
  const { subType } = useParams();
  const { isProductsLoading, products } = useProducts();

  const getSubTypeByParams = subType => {
    const result = allSubTypes.find(type => type.href === subType);
    return result;
  };
  const result = getSubTypeByParams(subType);

  useEffect(() => {
    const result = getSubTypeByParams(subType);
    dispatch(getProducts(result.id));
  }, [dispatch, subType]);

  return (
    <>
      <H2Title>{result.title}</H2Title>
      {!isProductsLoading && (
        <List>
          {products.products.map(
            ({
              id,
              name,
              price,
              stock,
              desc
            }) => {
              return (
                <TypeItem
                  key={id}
                  name={name}
                  price={price}
                  id={id}
                  stock={stock}
                  desc={desc}
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