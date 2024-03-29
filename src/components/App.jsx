import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import MainCatalogPage from '../pages/MainCatalogPage/MainCatalogPage';
import VinosCatalogPage from 'pages/VinosCatalogPage/VinosCatalogPage';
import DestiladosCatalogPage from 'pages/DestiladosCatalogPage/DestiladosCatalogPage';
import EspumososCatalogPage from 'pages/EspumososCatalogPage/EspumososCatalogPage';
import TypePage from 'pages/TypePage/TypePage';
import Authpage from 'pages/AuthPage/Authpage';
// import { useEffect } from 'react';

export const App = () => {
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

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainCatalogPage />} />
          <Route path="/auth" element={<Authpage />} />
          <Route path="/vinos" element={<VinosCatalogPage />} />
          <Route path="/espumosos" element={<EspumososCatalogPage />} />
          <Route path="/destilados" element={<DestiladosCatalogPage />} />
          <Route path="/vinos/:subType" element={<TypePage />} />
          <Route path="/espumosos/:subType" element={<TypePage />} />
          <Route path="/destilados/:subType  " element={<TypePage />} />
        </Route>
      </Routes>
    </>
  );
};
