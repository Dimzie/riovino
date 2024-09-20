import BackBtn from 'components/BackBtn/BackBtn';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { H1Title, List } from './CartList.styled';

export const CartList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  return (
    <>
      <H1Title>Cesta</H1Title>
      <List>
        <p>Su cesta está actualmente vacía {'😔'}</p>
      </List>
      <BackBtn backLink={backLink} />
    </>
  );
};
