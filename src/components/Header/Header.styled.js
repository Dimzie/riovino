import styled from 'styled-components';

export const HeaderSection = styled.header`
  position: absolute;
  width: 100%;
  padding: 15px 0px;
  background-color: rgba(1, 1, 1, 0.3);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Address = styled.address`
  /* Laptops, Desctops, Televisors Adress*/
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AddressList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 158px;
`;

export const AddressItem = styled.li``;

export const AddressLink = styled.a`
  display: flex;
  position: relative;
  gap: 5px;
  align-items: center;
  padding: 4px 0px;
  transition: color 100ms ease-in;

  &:hover,
  &:focus {
    color: #c0aa41;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #c0aa41;
    transition: width 400ms cubic-bezier(0.25, 1, 0.5, 1);
  }
  &:hover::before {
    left: 0;
    width: 100%;
  }
`;

export const AddressText = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const LogoImgContainer = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
`;

export const HeaderBtnList = styled.ul`
  /* Responsive HeaderBtnList */
  display: none;

  /* Laptops, Desctops, Televisors HeaderBtnList  */
  @media screen and (min-width: 769px) {
    height: 40px;
    display: flex;
    gap: 12px;
  }
`;

export const LogInBtn = styled.button`
  border: 1px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  padding: 0px 8px;
  cursor: pointer;
  transition: color 100ms ease-in, border-color 100ms ease-in;

  &:hover,
  &:focus {
    color: #c0aa41;
    border-color: #c0aa41;
  }
`;

export const SignUpBtn = styled.button`
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
