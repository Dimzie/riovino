import styled from 'styled-components';

export const AddBtnStyled = styled.button`
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
