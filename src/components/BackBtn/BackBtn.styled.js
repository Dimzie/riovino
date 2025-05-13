import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtnLink = styled(Link)`
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 150px;
  font-size: 18px;
  padding: 10px 20px;
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

export const BackBtnSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
