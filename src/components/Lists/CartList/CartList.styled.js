import styled from 'styled-components';

export const H1Title = styled.h1`
  font-family: 'Carattere';
  text-align: center;
  font-size: 72px;
  margin-bottom: 25px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
`;

export const TotalPrice = styled.h2`
  text-align: center;
`;

export const PaymentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  gap: 20px;
`;

export const PayBtn = styled.button`
  cursor: pointer;
  display: block;
  color: inherit;
  text-align: center;
  font-size: 18px;
  padding: 10px 20px;
  background-color: #c0aa41;
  border: 1px solid #c0aa41;
  transition: color 100ms ease-in, border-color 100ms ease-in;
  &:hover,
  &:focus {
    color: #c0aa41;
    border-color: #c0aa41;
    background-color: #ffffff;
  }
`;
