import styled from 'styled-components';

export const BurgerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0px 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover svg,
  &:focus svg {
    color: #c0aa41;
  }

  /* Laptops, Desctops, Televisors BurgerBtn */
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
