import BackBtn from 'components/BackBtn/BackBtn';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProducts } from '../../../redux/products/operations';
import { useProducts } from 'hooks/useProducts';
import TypeItem from 'components/Items/TypeItem/TypeItem';
import { H2Title, List } from './TypeList.styled';
import { formatTitleString } from 'helpers/functions/formatTitleString';

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
      <H2Title>{formatTitleString(products.subType)}</H2Title>
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
              critics,
              productImages,
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
                  id={_id}
                  critics={critics}
                  productImages={productImages}
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
