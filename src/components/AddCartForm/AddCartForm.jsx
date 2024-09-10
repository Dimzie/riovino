import React, { useState } from 'react';
import {
  AddBtn,
  AddBtnIcon,
  CartForm,
  FormDecreaseBtn,
  FormIncreaseBtn,
  FormInput,
} from './AddCartForm.styled';

const AddCartForm = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseValue = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity === '' || isNaN(prevQuantity)) {
        return 1;
      }
      return prevQuantity + 1;
    });
  };

  const decreaseValue = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity === '' || isNaN(prevQuantity)) {
        return 1;
      }
      return prevQuantity > 1 ? prevQuantity - 1 : 1;
    });
  };

  const handleInputChange = event => {
    const value = event.target.value;

    if (value === '') {
      setQuantity('');
    } else if (Number(value) > 0) {
      setQuantity(Number(value));
    }
  };

  return (
    <CartForm action="">
      <FormDecreaseBtn type="button" onClick={decreaseValue}>
        -
      </FormDecreaseBtn>
      <FormInput
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min="1"
      />
      <FormIncreaseBtn type="button" onClick={increaseValue}>
        +
      </FormIncreaseBtn>
      <AddBtn type="button">
        <AddBtnIcon />
      </AddBtn>
    </CartForm>
  );
};

export default AddCartForm;
