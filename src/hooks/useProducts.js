import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectProductById,
  selectProducts,
  selectCountByType,
  selectVinosCount,
  selectEspumososCount,
  selectDestiladosCount,
  selectIsProductLoading,
} from '../redux/products/selectors';

export const useProducts = () => {
  const products = useSelector(selectProducts);
  const productById = useSelector(selectProductById);
  const countByType = useSelector(selectCountByType);
  const vinosCount = useSelector(selectVinosCount);
  const espumososCount = useSelector(selectEspumososCount);
  const destiladosCount = useSelector(selectDestiladosCount);
  const isProductsLoading = useSelector(selectIsLoading);
  const isProductLoading = useSelector(selectIsProductLoading);
  const productError = useSelector(selectError);

  return {
    products,
    productById,
    countByType,
    vinosCount,
    espumososCount,
    destiladosCount,
    isProductsLoading,
    isProductLoading,
    productError,
  };
};
