import EspumososCatalogList from 'components/Lists/EspumososCatalogList/EspumososCatalogList';
import { Section } from 'pages/Common.styled';
import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const EspumososCatalogPage = () => {
  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');
  return (
    <Section>
      <EspumososCatalogList />
      <Link to={backLink.current}>
        <button type="button">Back</button>
      </Link>
    </Section>
  );
};

export default EspumososCatalogPage;
