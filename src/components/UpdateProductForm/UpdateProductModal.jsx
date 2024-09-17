import React, { useEffect } from 'react';
import UpdateProductForm from './UpdateProductForm';
import { useDispatch } from 'react-redux';
import { getProductById } from '../../redux/products/operations';
import { useProducts } from 'hooks/useProducts';

const UpdateProductModal = ({ id, onCloseModal }) => {
  const { isProductLoading } = useProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    if (id === undefined) {
      return;
    }

    dispatch(getProductById(id));
  }, [dispatch, id]);
  return (
    <div>
      {!isProductLoading && <UpdateProductForm onCloseModal={onCloseModal} />}
    </div>
  );
};

export default UpdateProductModal;
