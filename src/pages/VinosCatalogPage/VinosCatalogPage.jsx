import React from 'react';
import { Main, Section } from 'pages/Common.styled';
import VinosCatalogList from 'components/Lists/VinosCatalogList/VinosCatalogList';

const VinosCatalogPage = () => {
  return (
    <Main>
      <Section>
        <VinosCatalogList />
      </Section>
    </Main>
  );
};

export default VinosCatalogPage;
