import React from 'react';
import {
  CartItemContainer,
  CartItemWrapper,
  CartItemPrice,
  CartItemQuantityForm,
  CartTotalItemPrice,
  Img,
  Li,
  RegionContainer,
  Title,
  CartItemInfo,
  LiquidQty,
  CartMultiplier,
  CartPriceContainer,
} from './CartItem.styled';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  updateCartItemQuantity,
} from '../../../redux/products/productsSlice';
import DeleteBtn from 'components/Buttons/DeleteBtn/DeleteBtn';
import { extractIvaValue, priceWithIva } from 'helpers/functions/priceAndIva';
import { formatTitleString } from 'helpers/functions/formatTitleString';
import { zaglushka } from 'images/images.index';
import { regionFlagCheck } from 'helpers/functions/regionFlagCheck';
import { extractAfterLastDash } from 'helpers/functions/extractAfterLastDash';
import CartFormCheck from 'components/Forms/CartFormCheck/CartFormCheck';

const CartItem = ({ id, name, taxes, price, quantity }) => {
  const dispatch = useDispatch();
  const ivaValue = extractIvaValue(taxes);

  const handleUpdateCartQuantity = newQuantity => {
    dispatch(updateCartItemQuantity({ id, quantity: newQuantity }));
  };

  const handleDelete = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Li>
        <CartItemContainer>
          <Img src={zaglushka} alt="Sin Foto" />
          <CartItemWrapper>
            <CartItemInfo>
              <Title>
                {formatTitleString(name)}{' '}
                <LiquidQty>{extractAfterLastDash(name)}</LiquidQty>
              </Title>
              <RegionContainer>{regionFlagCheck(name)}</RegionContainer>
            </CartItemInfo>
            <CartItemQuantityForm>
              <CartFormCheck
                cartQuantity={quantity}
                handleUpdateCartQuantity={handleUpdateCartQuantity}
              />
              <CartPriceContainer>
                <CartMultiplier>x</CartMultiplier>
                <CartItemPrice>{priceWithIva(price, ivaValue)}€</CartItemPrice>
                <CartMultiplier>=</CartMultiplier>
                <CartTotalItemPrice>
                  {(priceWithIva(price, ivaValue) * quantity).toFixed(2)}€
                </CartTotalItemPrice>
                <DeleteBtn handleDelete={handleDelete} />
              </CartPriceContainer>
            </CartItemQuantityForm>
          </CartItemWrapper>
        </CartItemContainer>
      </Li>
    </>
  );
};

export default CartItem;
