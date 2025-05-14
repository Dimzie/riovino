import BackBtn from 'components/BackBtn/BackBtn';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  H1Title,
  List,
  PayBtn,
  PaymentWrapper,
  TotalPrice,
} from './CartList.styled';
import CartItem from 'components/Items/CartItem/CartItem';
import { priceWithIva } from 'helpers/functions/priceAndIva';

export const CartList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  // Function to delete an item from the cart
  const deleteItem = id => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    setCartItems(updatedCart); // Update state for re-rendering
  };

  const totalPrice = cartItems
    .reduce((sum, item) => sum + priceWithIva(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <H1Title>Cesta</H1Title>
      {cartItems.length === 0 ? (
        <List>
          <p>Su cesta está actualmente vacía {'😔'}</p>
        </List>
      ) : (
        <List>
          {cartItems.map(({ id, quantity, price, title, productImages }) => (
            <CartItem
              key={id}
              id={id}
              title={title}
              quantity={quantity}
              price={price}
              productImages={productImages}
              deleteItem={deleteItem}
            />
          ))}
        </List>
      )}
      <PaymentWrapper>
        <TotalPrice>Total: {totalPrice} €</TotalPrice>
        {totalPrice > 0 && <PayBtn>Pagar pedido</PayBtn>}
      </PaymentWrapper>
      <BackBtn backLink={backLink} />
    </>
  );
};
