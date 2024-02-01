import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectProducts,
} from '../redux/products/selectors';

export const useProducts = () => {
  const products = useSelector(selectProducts);
  const isProductsLoading = useSelector(selectIsLoading);
  const productError = useSelector(selectError);

  return {
    products,
    isProductsLoading,
    productError,
  };
};
