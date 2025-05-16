import React from 'react';
import {
  CartForm,
  FormDecreaseBtn,
  FormIncreaseBtn,
  FormInput,
} from './CartFromCheck.styled';

const CartFormCheck = ({
  cartQuantity,
  handleUpdateCartQuantity,
}) => {
  // Increase the quantity with a maximum limit of 1000
const increaseValue = () => {
    const newQty = cartQuantity < 1000 ? cartQuantity + 1 : 1000;
    handleUpdateCartQuantity(newQty);
  };

  const decreaseValue = () => {
    const newQty = cartQuantity > 1 ? cartQuantity - 1 : 1;
    handleUpdateCartQuantity(newQty);
  };

  const handleInputChange = event => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);

    const newQty =
      value === '' || isNaN(parsedValue) || parsedValue < 1 || parsedValue > 1000
        ? 1
        : parsedValue;

    handleUpdateCartQuantity(newQty);
  };

  return (
    <CartForm action="">
      <FormDecreaseBtn type="button" onClick={decreaseValue}>
        -
      </FormDecreaseBtn>
      <FormInput
        type="number"
        value={cartQuantity}
        onChange={handleInputChange}
        min="1"
        max="1000"
      />
      <FormIncreaseBtn type="button" onClick={increaseValue}>
        +
      </FormIncreaseBtn>
    </CartForm>
  );
};

export default CartFormCheck;
