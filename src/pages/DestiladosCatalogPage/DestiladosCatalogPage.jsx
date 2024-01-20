import DestiladosCatalogList from 'components/Lists/DestiladosCatalogList/DestiladosCatalogList';
import { Section } from 'pages/Common.styled';
import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const DestiladosCatalogPage = () => {
  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');
  return (
    <Section>
      <DestiladosCatalogList />
      <Link to={backLink.current}>
        <button type="button">Back</button>
      </Link>
    </Section>
  );
};

export default DestiladosCatalogPage;
