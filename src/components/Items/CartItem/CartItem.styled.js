import styled from 'styled-components';

export const Li = styled.li`
  /* Responsive, Mobile Li */
  position: relative;
  padding: 10px;
  background-color: transparent;
  border: 1px solid rgb(0, 0, 0, 0.2);
  width: 100%;
  transition: box-shadow 100ms ease-in;

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  }

  /* Tablets Li */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  /* Laptops, Desctops, Televisors Li */
  @media screen and (min-width: 769px) {
    width: 848px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto';
  color: #000000;
  margin-bottom: 6px;
`;

export const Img = styled.img`
  height: 200px;
`;

export const CartItemInfo = styled.div`
  width: 100%;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const CartItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const RegionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const CartItemQuantityForm = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const CartItemPrice = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: rgb(0, 0, 0, 0.6);
`;

export const CartTotalItemPrice = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
`;

export const LiquidQty = styled.span`
  color: rgb(0, 0, 0, 0.6);
  font-size: 16px;
`;

export const CartMultiplier = styled.span`
  font-family: 'Roboto';
  font-size: 24px;
  color: rgb(0, 0, 0, 0.6);
`;
