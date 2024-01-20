import styled from 'styled-components';

export const HeaderSection = styled.header`
  position: absolute;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 15px;
  background-color: rgba(1, 1, 1, 0.25);
`;

export const Address = styled.address``;

export const AddressList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const AddressItem = styled.li``;

export const AddressLinkLocation = styled.a`
  display: flex;
  position: relative;
  gap: 5px;
  align-items: center;
  padding: 2px 0px;
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

export const AddressLinkPhone = styled.a`
  display: flex;
  position: relative;
  gap: 5px;
  align-items: center;
  padding: 2px 0px;
  transition: color 100ms ease-in;

  &:hover,
  &:focus {
    color: #c0aa41;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background-color: #c0aa41;
    transition: width 400ms cubic-bezier(0.25, 1, 0.5, 1);
  }
  &:hover::before {
    right: 0;
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
`;
