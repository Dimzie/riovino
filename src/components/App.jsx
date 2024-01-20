import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import MainCatalogPage from '../pages/MainCatalogPage/MainCatalogPage';
import VinosCatalogPage from 'pages/VinosCatalogPage/VinosCatalogPage';
import DestiladosCatalogPage from 'pages/DestiladosCatalogPage/DestiladosCatalogPage';
import EspumososCatalogPage from 'pages/EspumososCatalogPage/EspumososCatalogPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainCatalogPage />} />
          <Route path="/vinos" element={<VinosCatalogPage />} />
          <Route path="/espumosos" element={<EspumososCatalogPage />} />
          <Route path="/destilados" element={<DestiladosCatalogPage />} />
        </Route>
      </Routes>
    </>
  );
};
