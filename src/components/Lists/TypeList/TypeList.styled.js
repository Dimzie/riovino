import styled from 'styled-components';

export const H2Title = styled.h1`
  font-family: 'Carattere';
  text-align: center;
  font-size: 72px;
  margin-bottom: 25px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
`;

export const BackBtnSpan = styled.span`
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 200px;
  font-size: 18px;
  padding: 10px 20px;
  background-color: #000000;
  border: 1px solid #ffffff;
  color: #ffffff;
  transition: color 100ms ease-in, border-color 100ms ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #c0aa41;
    border-color: #c0aa41;
  }
`;
