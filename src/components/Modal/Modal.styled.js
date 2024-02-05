import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: rgba(128, 128, 128, 0.1);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px 18px;
  min-width: 300px;
  min-height: 350px;
  background-color: white;
`;

export const CloseBtn = styled.button`
  position: absolute;
  width: 30px;
  padding: 0;
  top: 12px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 150ms ease-in;
  color: #000000;

  &:hover,
  &:focus {
    color: red;
  }
`;
