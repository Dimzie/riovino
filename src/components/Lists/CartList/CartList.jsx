import BackBtn from 'components/Buttons/BackBtn/BackBtn';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { EmptyCartMsg, H1Title, List, CartWrapper } from './CartList.styled';
import CartItem from 'components/Items/CartItem/CartItem';
import { useProducts } from 'hooks/useProducts';
import { extractIvaValue, priceWithIva } from 'helpers/functions/priceAndIva';
import PriceForm from 'components/Forms/PriceForm/PriceForm';
import { useAuth } from 'hooks/useAuth';

export const CartList = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const { user, isLoggedIn } = useAuth();

  const { cart } = useProducts();

  const total = cart.reduce((acc, { product, quantity }) => {
    const ivaValue = extractIvaValue(product.taxes);
    const itemTotal = priceWithIva(product.price, ivaValue) * quantity;
    return acc + itemTotal;
  }, 0);

  const userTotal = user.cart.reduce((acc, { product, quantity }) => {
    const ivaValue = extractIvaValue(product.taxes);
    const itemTotal = priceWithIva(product.price, ivaValue) * quantity;
    return acc + itemTotal;
  }, 0);

  const currentCart = isLoggedIn ? user.cart : cart;
  const currentTotal = isLoggedIn ? userTotal : total;

  const renderList = () => {
    if (!isLoggedIn) {
      return (
        cart.length > 0 && (
          <List>
            {cart.map(({ product, quantity }) => (
              <CartItem
                key={product.id}
                id={product.id}
                name={product.name}
                quantity={quantity}
                price={product.price}
                taxes={product.taxes}
              />
            ))}
          </List>
        )
      );
    } else {
      return (
        user.cart.length > 0 && (
          <List>
            {user.cart.map(({ product, quantity }) => (
              <CartItem
                key={product.id}
                id={product.id}
                name={product.name}
                quantity={quantity}
                price={product.price}
                taxes={product.taxes}
              />
            ))}
          </List>
        )
      );
    }
  };

  return (
    <>
      <H1Title>Cesta</H1Title>
      {cart.length === 0 && (
        <EmptyCartMsg>Su cesta está actualmente vacía.</EmptyCartMsg>
      )}
      <CartWrapper>
        {renderList()}
        {currentCart.length > 0 && <PriceForm total={currentTotal} />}
      </CartWrapper>
      <BackBtn backLink={backLink} />
    </>
  );
};
