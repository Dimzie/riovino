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
  background-color: rgba(46, 47, 66, 1);
  border: none;
  color: white;
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
  margin-right: 20px;
  background-color: rgba(46, 47, 66, 1);
  border: none;
  color: white;
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
  border: rgba(46, 47, 66, 1);
  background-color: rgba(46, 47, 66, 1);
  padding: 2px 5px;
  color: white;
  outline: none;
  transition: border-color 200ms ease-in;
  &:focus {
    border: 1px solid #c0aa41;
  }
`;

export const AddBtn = styled.button`
  height: 35px;
  border: 1px solid #c0aa41;
  background-color: #c0aa41;
  color: #ffffff;
  padding: 0px 12px;
  cursor: pointer;
  transition: color 100ms ease-in, border-color 100ms ease-in,
    background-color 100ms ease-in;
  &:hover,
  &:focus {
    color: #c0aa41;
    border-color: #c0aa41;
    background-color: #ffffff;
  }
`;
