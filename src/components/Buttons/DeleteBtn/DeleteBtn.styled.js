import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: block;
  text-align: center;
  font-size: 18px;
  padding: 10px 10px;
  background-color: #000000;
  border: 1px solid #ffffff;
  color: #ffffff;
  transition: color 100ms ease-in, border-color 100ms ease-in;
  &:hover,
  &:focus {
    color: #c0aa41;
    border-color: #c0aa41;
  }
`;

export const DeleteBtnSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
