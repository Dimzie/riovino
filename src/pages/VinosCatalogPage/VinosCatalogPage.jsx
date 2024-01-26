import React from 'react';
import { Main, Section } from 'pages/Common.styled';
import VinosCatalogList from 'components/Lists/VinosCatalogList/VinosCatalogList';
import BackBtn from 'components/BackBtn/BackBtn';

const VinosCatalogPage = () => {
  return (
    <Main>
      <Section>
        <VinosCatalogList />
        <BackBtn />
      </Section>
    </Main>
  );
};

export default VinosCatalogPage;
