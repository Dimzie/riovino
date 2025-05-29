import React from 'react';
import { PayBtn, PriceFormContainer, TotalPrice } from './PriceForm.styled';

const PriceForm = ({ total }) => {
  return (
    <PriceFormContainer>
      <TotalPrice>Total: {total.toFixed(2)}€</TotalPrice>
      <PayBtn>Pagar un pedido</PayBtn>
    </PriceFormContainer>
  );
};

export default PriceForm;
