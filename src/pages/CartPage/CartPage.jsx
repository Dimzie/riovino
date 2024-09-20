import { CartList } from 'components/Lists/CartList/CartList';
import { Section } from 'pages/Common.styled';
import React from 'react';

const CartPage = () => {
  return (
    <Section>
      <CartList />
    </Section>
  );
};

export default CartPage;
