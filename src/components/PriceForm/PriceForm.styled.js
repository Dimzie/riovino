import styled from 'styled-components';

export const PriceFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-width: 300px;
  height: fit-content;
  align-self: flex-start;
  padding: 20px;
  justify-content: center;
  align-items: center;
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
  max-width: 200px;
  &:hover,
  &:focus {
    color: #c0aa41;
    border-color: #c0aa41;
    background-color: #ffffff;
  }
`;

export const TotalPrice = styled.h2`
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 20px;
`;
