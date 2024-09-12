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
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 60px 20px;
  max-width: 90%;
  min-width: 288px;
  box-sizing: border-box;
  max-height: 90vh;
  background-color: #1c1c28;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  width: 28px;
  padding: 0;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 100ms ease-in, transform 100ms ease-in;
  color: #ffffff;

  &:hover,
  &:focus {
    color: #c0aa41;
    transform: rotate(90deg);
  }
`;
