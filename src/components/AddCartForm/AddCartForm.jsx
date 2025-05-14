import React, { useState } from 'react';
import {
  AddBtn,
  CartForm,
  FormDecreaseBtn,
  FormIncreaseBtn,
  FormInput,
} from './AddCartForm.styled';
import { AddBtnIcon } from 'helpers/Icons/Icons.styled';

const AddCartForm = ({ name, id, price, taxes}) => {
  const [quantity, setQuantity] = useState(1);

  // Increase the quantity with a maximum limit of 1000
  const increaseValue = () => {
    setQuantity(prevQuantity =>
      prevQuantity < 1000 ? prevQuantity + 1 : 1000
    );
  };

  // Decrease the quantity with a minimum limit of 1
  const decreaseValue = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Handle the input change and ensure the quantity is valid and within range
  const handleInputChange = event => {
    const value = event.target.value;
    const parsedValue = parseInt(value, 10);

    // Set the quantity only if it's a valid number and within the range of 1 to 1000
    if (value === '' || parsedValue < 1 || parsedValue > 1000) {
      setQuantity(1); // Reset to 1 if invalid input
    } else {
      setQuantity(parsedValue);
    }
  };

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    const newItem = { id, name,  price, quantity, taxes };
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingItemIndex = storedCart.findIndex(item => item.id === id);
  
    let updatedCart;
    if (existingItemIndex !== -1) {
      updatedCart = storedCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + quantity, taxes} : item
      );
    } else {
      updatedCart = [...storedCart, newItem];
    }
  
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    // 🔹 Trigger storage event manually
    window.dispatchEvent(new Event("storage"));
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
        max="1000"
      />
      <FormIncreaseBtn type="button" onClick={increaseValue}>
        +
      </FormIncreaseBtn>
      <AddBtn type="button" onClick={handleAddToCart}>
        <AddBtnIcon />
      </AddBtn>
    </CartForm>
  );
};

export default AddCartForm;
