import styled from 'styled-components';

export const CartForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormDecreaseBtn = styled.button`
  font-family: 'Roboto';
  text-align: center;
  padding: 0;
  width: 25px;
  height: 35px;
  margin-right: 5px;
  background-color: transparent;
  border: 1px solid rgb(0, 0, 0, 0.2);
  color: #000000;
  cursor: pointer;
  transition: color 100ms ease-in;
  &:hover {
    color: #c0aa41;
  }
`;

export const FormIncreaseBtn = styled.button`
  font-family: 'Roboto';
  text-align: center;
  padding: 0;
  width: 25px;
  height: 35px;
  background-color: transparent;
  border: 1px solid rgb(0, 0, 0, 0.2);
  color: #000000;
  cursor: pointer;
  transition: color 100ms ease-in;
  &:hover {
    color: #c0aa41;
  }
`;

export const FormInput = styled.input`
  font-family: 'Roboto';
  width: 50px;
  height: 35px;
  margin-right: 5px;
  text-align: center;
  background-color: transparent;
  border: 1px solid rgb(0, 0, 0, 0.2);
  padding: 2px 5px;
  color: #000000;
  outline: none;
  transition: border-color 200ms ease-in;
  &:focus {
    border: 1px solid #c0aa41;
  }
`;