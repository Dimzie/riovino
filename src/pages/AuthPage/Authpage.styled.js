import styled from 'styled-components';

export const BtnWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border: none;
  cursor: pointer;
  z-index: 2;
  background-color: transparent;
  transition: all 250ms ease;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  ${({ $activeBtn }) =>
    $activeBtn === 'in'
      ? 'transform: translateX(-50%)'
      : 'transform: translateX(50%)'};
  width: 200px;
  height: 50px;
  background-color: orange;

  transition: transform 250ms ease;
`;
