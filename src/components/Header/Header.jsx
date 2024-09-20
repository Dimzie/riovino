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
  AddBtn,
  UserWrapper,
  UserImgWrapper,
  CartBtn,
} from './Header.styled';
import Container from 'components/GlobalContainer/GlobalContainer';
import {
  AddBtnIcon,
  AddIcon,
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
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isProductsLoading } = useProducts();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoggedIn } = useAuth();

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
            <img src={headerLogo3} alt="Rio Vino Logo" wight="55" height="55" />
          </LogoImgContainer> */}
          <HeaderBtnList>
            {user.userType === 'admin' && (
              <AddBtn type="button" onClick={toggleModal}>
                <AddIcon />
              </AddBtn>
            )}
            <Link to={'/cart'}>
              <CartBtn>
                <AddBtnIcon />
              </CartBtn>
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
