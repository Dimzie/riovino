import React from 'react';
import MainCatalogList from 'components/Lists/MainCatalogList/MainCatalogList';
import { Main, Section } from 'pages/Common.styled';

const MainCatalogPage = () => {
  return (
    <Main>
      <Section>
        <MainCatalogList />
      </Section>
    </Main>
  );
};

export default MainCatalogPage;
