import React, { useEffect } from 'react';
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
import Modal from 'components/Modal/Modal';
import AddProductForm from 'components/AddProductForm/AddProductForm';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import headerLogo from '../../images/Header/header_logo.png';

const Header = () => {
    const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isProductsLoading } = useProducts();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [cartQuantity, setCartQuantity] = useState(0);

  const updateCartQuantity = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const uniqueProductCount = new Set(cartItems.map(item => item.id)).size;
    setCartQuantity(uniqueProductCount > 99 ? '99+' : uniqueProductCount);
  };

  useEffect(() => {
    updateCartQuantity(); // Initial load
    window.addEventListener('storage', updateCartQuantity); // Listen for changes in localStorage (e.g., from other tabs)

    return () => {
      window.removeEventListener('storage', updateCartQuantity); // Clean up the event listener when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs only once, after the component mounts

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
            {/* {user.userType === 'admin' && (
              <AddBtn type="button" onClick={toggleModal}>
                <AddIcon />
              </AddBtn>
            )} */}
            <Link to={'/cart'} state={{ from: location }}>
              <CartBtnWrapper>
                <CartBtn>
                  <AddBtnIcon />
                </CartBtn>
                {cartQuantity > 0 && <QuantNumber>{cartQuantity}</QuantNumber>}
              </CartBtnWrapper>
            </Link>
            {isModalOpen && (
              <Modal onCloseModal={toggleModal}>
                <AddProductForm onCloseModal={toggleModal} />
              </Modal>
            )}
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
              <AuthBtn to={'/auth'}>Sign In / Sign Up</AuthBtn>
            )}
          </HeaderBtnList>
          <BurgerMenu />
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};

export default Header;
