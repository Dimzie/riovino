import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import MainCatalogPage from '../pages/MainCatalogPage/MainCatalogPage';
import VinosCatalogPage from 'pages/VinosCatalogPage/VinosCatalogPage';
import DestiladosCatalogPage from 'pages/DestiladosCatalogPage/DestiladosCatalogPage';
import EspumososCatalogPage from 'pages/EspumososCatalogPage/EspumososCatalogPage';
import TypePage from 'pages/TypePage/TypePage';
import Authpage from 'pages/AuthPage/Authpage';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { getCurrent } from '../redux/auth/operations';
import RestrictedRoute from './Routes/RestrictedRoute';
import CartPage from 'pages/CartPage/CartPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainCatalogPage />} />
            <Route
              path="/auth"
              element={
                <RestrictedRoute redirectTo="/" component={<Authpage />} />
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/vinos" element={<VinosCatalogPage />} />
            <Route path="/espumosos" element={<EspumososCatalogPage />} />
            <Route path="/destilados" element={<DestiladosCatalogPage />} />
            <Route path="/vinos/:subType" element={<TypePage />} />
            <Route path="/espumosos/:subType" element={<TypePage />} />
            <Route path="/destilados/:subType" element={<TypePage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

// useEffect(() => {
//   const handleVisibilityChange = () => {
//     document.title = document.hidden
//       ? 'Come back...😔'
//       : 'Rio Vino';
//   };

//   document.addEventListener('visibilitychange', handleVisibilityChange);

//   return () => {
//     document.removeEventListener('visibilitychange', handleVisibilityChange);
//   };
// }, []);
