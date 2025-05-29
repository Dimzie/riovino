import React from 'react';
import {
  AddressItem,
  AddressLink,
  AddressList,
  Address,
  AddressText,
  HeaderSection,
  HeaderWrapper,
  HeaderBtnList,
  AuthBtn,
  LogOutBtn,
  UserWrapper,
  UserImgWrapper,
  CartBtn,
  QuantNumber,
  CartBtnWrapper,
  // LogoImgContainer,
} from './Header.styled';
import Container from 'components/GlobalContainer/GlobalContainer';
import {
  AddBtnIcon,
  LocationIcon,
  PhoneIcon,
} from 'helpers/Icons/Icons.styled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Loader from 'components/Loader/Loader';
import { useProducts } from 'hooks/useProducts';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const { isProductsLoading, cart } = useProducts();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoggedIn, isUserLoading } = useAuth();
  console.log(isUserLoading);

  return (
    <HeaderSection>
      {isProductsLoading && <Loader />}
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
          {/* <LogoImgContainer>
            <img src={headerLogo} alt="Rio Vino Logo" height="75" />
          </LogoImgContainer> */}
          <HeaderBtnList>
            <Link to={'/cart'} state={{ from: location }}>
              <CartBtnWrapper>
                <CartBtn>
                  <AddBtnIcon />
                </CartBtn>
                {isLoggedIn
                  ? user.cart.length > 0 && (
                      <QuantNumber>
                        {user.cart.length > 99 ? '99+' : user.cart.length}
                      </QuantNumber>
                    )
                  : cart.length > 0 && (
                      <QuantNumber>
                        {cart.length > 99 ? '99+' : cart.length}
                      </QuantNumber>
                    )}
              </CartBtnWrapper>
            </Link>
            {isLoggedIn ? (
              <UserWrapper>
                <UserImgWrapper>
                  <img src="" alt="" />
                </UserImgWrapper>
                <LogOutBtn
                  onClick={() => {
                    dispatch(logout());
                    navigate('/');
                  }}
                >
                  Salir
                </LogOutBtn>
              </UserWrapper>
            ) : (
              <AuthBtn to={'/auth'} state={{ from: location }}>
                Sign In / Sign Out
              </AuthBtn>
            )}
          </HeaderBtnList>
          <BurgerMenu />
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};

export default Header;
