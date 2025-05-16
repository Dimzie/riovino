import React from 'react';
import { Li, Title } from './CartItem.styled';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/products/productsSlice';
import DeleteBtn from 'components/DeleteBtn/DeleteBtn';
import { extractIvaValue, priceWithIva } from 'helpers/functions/priceAndIva';
import { formatTitleString } from 'helpers/functions/formatTitleString';

const CartItem = ({ id, name, taxes, price, quantity }) => {
  const dispatch = useDispatch();
  const ivaValue = extractIvaValue(taxes);

  const countCheck = quantity => {
    if (quantity > 1) {
      return `${quantity} botellas`;
    } else {
      return `${quantity} botella`;
    }
  };

  const handleDelete = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Li>
        <Title>{formatTitleString(name)}</Title>
        <p>{countCheck(quantity)}</p>
        <p>{priceWithIva(price, ivaValue)}€</p>
        {/* <button type="button" onClick={handleDelete}>delete</button> */}
        <DeleteBtn handleDelete={handleDelete} />
      </Li>
    </>
  );
};

export default CartItem;
