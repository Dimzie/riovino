import React from 'react';
import { AddBtnStyled } from './AddCartBtn.styled';
import { AddBtnIcon } from 'helpers/Icons/Icons.styled';

const AddCartBtn = ({ handleAddToCart }) => {
  return (
    <AddBtnStyled type="button" onClick={handleAddToCart}>
      <AddBtnIcon />
    </AddBtnStyled>
  );
};

export default AddCartBtn;
