import React from 'react';
import {
  AddressItem,
  AddressLink,
  AddressList,
  Address,
  AddressText,
  HeaderSection,
  LogoImgContainer,
  HeaderWrapper,
  HeaderBtnList,
  LogInBtn,
  SignUpBtn,
} from './Header.styled';
import Container from 'components/GlobalContainer/GlobalContainer';
import { LocationIcon, PhoneIcon } from 'helpers/Icons/Icons.styled';
import { headerLogo3 } from 'images/images.index';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderWrapper>
          <Address>
            <AddressList>
              <AddressItem>
                <AddressLink
                  target="_blank"
                  href="https://maps.app.goo.gl/dP5ZFtLXGKSZnNqA8"
                >
                  <LocationIcon />
                  <AddressText>Calpe 03710, Alicante</AddressText>
                </AddressLink>
              </AddressItem>
              <AddressItem>
                <AddressLink href="tel:+34123456789" aria-label="Phone">
                  <PhoneIcon />
                  <AddressText>+ (34) 123 456 789</AddressText>
                </AddressLink>
              </AddressItem>
            </AddressList>
          </Address>
          <LogoImgContainer>
            <img src={headerLogo3} alt="Rio Vino Logo" wight="55" height="55" />
          </LogoImgContainer>
          <HeaderBtnList>
            <LogInBtn type="button">Log In</LogInBtn>
            <SignUpBtn type="button">Sign Up</SignUpBtn>
          </HeaderBtnList>
          <BurgerMenu/>
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};

export default Header;
