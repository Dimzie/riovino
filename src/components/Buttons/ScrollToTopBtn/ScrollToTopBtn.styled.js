import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

export const ScrollBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 100px;
  right: 40px;
  border: 1px solid white;
  background-color: #000000;
  transition: all 100ms ease-in;
  opacity: ${props => (props.$scrollBtnVisible === 'false' ? '0' : '1')};
  visibility: ${props =>
    props.$scrollBtnVisible === 'false' ? 'hidden' : 'visible'};
  transform: ${props =>
    props.$scrollBtnVisible === 'false' ? 'scale(0.5)' : 'scale(1)'};
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: #c0aa41;
  }
  &:hover svg,
  &:focus svg {
    color: #c0aa41;
  }
`;

export const ScrollBtnIcon = styled(IoIosArrowUp)`
  width: 30px;
  height: 30px;
  color: #ffffff;
  transition: color 100ms ease-in;
`;
