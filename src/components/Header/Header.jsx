import React from 'react';
import {
  AddressItem,
  AddressLinkLocation,
  AddressLinkPhone,
  AddressList,
  Address,
  AddressText,
  HeaderSection,
  LogoImgContainer,
} from './Header.styled';
import Container from 'components/GlobalContainer/GlobalContainer';
import { LocationIcon, PhoneIcon } from 'helpers/Icons/Icons.styled';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <Address>
          <AddressList>
            <AddressItem>
              <AddressLinkLocation
                target="_blank"
                href="https://maps.app.goo.gl/dP5ZFtLXGKSZnNqA8"
              >
                <LocationIcon />
                <AddressText>Calpe 03710, Alicante</AddressText>
              </AddressLinkLocation>
            </AddressItem>
            <LogoImgContainer>
              <img src="" alt="Rio Vino Logo" />
            </LogoImgContainer>
            <AddressItem>
              <AddressLinkPhone href="tel:+34123456789" aria-label="Phone">
                <PhoneIcon />
                <AddressText>+ (34) 123 456 789</AddressText>
              </AddressLinkPhone>
            </AddressItem>
          </AddressList>
        </Address>
      </Container>
    </HeaderSection>
  );
};

export default Header;
