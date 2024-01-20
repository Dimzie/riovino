import Footer from 'components/Footer/Footer';
import GlobalContainer from 'components/GlobalContainer/GlobalContainer';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<Loader />}>
        <GlobalContainer>
          <Outlet />
        </GlobalContainer>
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
