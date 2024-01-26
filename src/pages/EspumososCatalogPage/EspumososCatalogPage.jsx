import BackBtn from 'components/BackBtn/BackBtn';
import EspumososCatalogList from 'components/Lists/EspumososCatalogList/EspumososCatalogList';
import { Section } from 'pages/Common.styled';
import React from 'react';

const EspumososCatalogPage = () => {
  return (
    <Section>
      <EspumososCatalogList />
      <BackBtn />
    </Section>
  );
};

export default EspumososCatalogPage;
