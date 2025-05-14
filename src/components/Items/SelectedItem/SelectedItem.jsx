import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../redux/products/operations';

const SelectedItemPage = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const productById = useSelector(state => state.products.productById);

  useEffect(() => {
    if (itemId) {
      dispatch(getProductById(itemId));
    }
  }, [dispatch, itemId]);

  return (
    <>
      <p>ID: {itemId}</p>
      <p>Название: {productById?.name}</p>
    </>
  );
};

export default SelectedItemPage;