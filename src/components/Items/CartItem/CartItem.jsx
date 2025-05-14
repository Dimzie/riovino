import React from 'react';
import { Li } from './CartItem.styled';

const CartItem = ({ id, title, quantity, price, deleteItem}) => {

  const countCheck = quantity => {
    if (quantity > 1) {
      return `${quantity} botellas`;
    } else {
      return `${quantity} botella`;
    }
  };

  const handleDelete = () => {
    deleteItem(id); // Call the delete function passed from CartList
  };

  return (
    <>
      <Li>
        <p>{title}</p>
        <p>{countCheck(quantity)}</p>
        <p>{price}€</p>
        <button type="button" onClick={handleDelete}>
          del
        </button>
      </Li>
    </>
  );
};

export default CartItem;
