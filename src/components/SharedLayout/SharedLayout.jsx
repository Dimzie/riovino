import ScrollToTopBtn from 'components/Buttons/ScrollToTopBtn/ScrollToTopBtn';
import Footer from 'components/Footer/Footer';
import GlobalContainer from 'components/GlobalContainer/GlobalContainer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const [scrollBtnVisible, setScrollBtnVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setScrollBtnVisible(true);
    } else {
      setScrollBtnVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <GlobalContainer>
          <Outlet />
        </GlobalContainer>
      </Suspense>
      <Footer />
      <ScrollToTopBtn scrollBtnVisible={scrollBtnVisible} />
    </>
  );
};

export default SharedLayout;
