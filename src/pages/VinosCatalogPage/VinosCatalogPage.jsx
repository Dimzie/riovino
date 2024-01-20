import React, { useRef } from 'react';
import { Main, Section } from 'pages/Common.styled';
import VinosCatalogList from 'components/Lists/VinosCatalogList/VinosCatalogList';
import { Link, useLocation } from 'react-router-dom';

const VinosCatalogPage = () => {
  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');
  return (
    <Main>
      <Section>
        <VinosCatalogList />
        <Link to={backLink.current}>
          <button type="button">Back</button>
        </Link>
      </Section>
    </Main>
  );
};

export default VinosCatalogPage;
