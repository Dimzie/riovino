import BackBtn from 'components/BackBtn/BackBtn';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../../../redux/products/operations';
import { useProducts } from 'hooks/useProducts';
import TypeItem from 'components/Items/TypeItem/TypeItem';
import { BackBtnSpan, H2Title, List } from './TypeList.styled';
import { allSubTypes } from 'data/data';

const TypeList = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const dispatch = useDispatch();
  const { subType } = useParams();
  const { isProductsLoading, products } = useProducts();

  const loadMore = () => {
    if (!isProductsLoading) {
      setPage(prev => prev + 1);
    }
  };

  const getSubTypeByParams = subType => {
    const result = allSubTypes.find(type => type.href === subType);
    return result;
  };
  const result = getSubTypeByParams(subType);

  useEffect(() => {
    const result = getSubTypeByParams(subType);
    dispatch(
      getProducts({
        subType: result.id,
        page,
      })
    );
  }, [dispatch, page, subType]);

  return (
    <>
      <H2Title>{result.title}</H2Title>
      <List>
        {products.products.map(({ id, name, price, stock, desc, taxes }) => {
          return (
            <TypeItem
              key={id}
              name={name}
              price={price}
              id={id}
              stock={stock}
              desc={desc}
              taxes={taxes}
              state={{ from: location }}
            />
          );
        })}
      </List>
      {products.products.length !== products.totalProducts && (
        <BackBtnSpan onClick={loadMore}>
          {isProductsLoading && page !== 1 ? 'LOADING' : 'LOAD MORE'}
        </BackBtnSpan>
      )}
      <BackBtn backLink={backLink} />
    </>
  );
};

export default TypeList;
