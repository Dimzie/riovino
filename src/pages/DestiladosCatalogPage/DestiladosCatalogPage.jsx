import BackBtn from 'components/BackBtn/BackBtn';
import DestiladosCatalogList from 'components/Lists/DestiladosCatalogList/DestiladosCatalogList';
import { Section } from 'pages/Common.styled';
import React from 'react';

const DestiladosCatalogPage = () => {
  return (
    <Section>
      <DestiladosCatalogList />
      <BackBtn />
    </Section>
  );
};

export default DestiladosCatalogPage;
