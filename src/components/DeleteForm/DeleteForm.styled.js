import styled from 'styled-components';

export const Question = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 20px;
  margin-bottom: 25px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Li = styled.li`
`

export const DeleteFormYesBtn = styled.button`
  font-family: 'Roboto';
  text-align: center;
  padding: 0px 20px;
  width: 80px;
  height: 35px;
  background-color: rgba(46, 47, 66, 1);
  border: 1px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  transition: color 100ms ease-in, border 100ms ease-in;
  &:hover {
    border: 1px solid #c0aa41;
    color: #c0aa41;
  }
`;

export const DeleteFormNoBtn = styled.button`
  font-family: 'Roboto';
  height: 35px;
  width: 80px;
  border: 1px solid #c0aa41;
  background-color: #c0aa41;
  color: #ffffff;
  padding: 0px 20px;
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
