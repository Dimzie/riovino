import React from 'react';
import {
  AddressItem,
  AddressLink,
  AddressList,
  Address,
  AddressText,
  HeaderSection,
  // LogoImgContainer,
  HeaderWrapper,
  HeaderBtnList,
  // LogInBtn,
  // SignUpBtn,
  AuthBtn,
} from './Header.styled';
import Container from 'components/GlobalContainer/GlobalContainer';
import { LocationIcon, PhoneIcon } from 'helpers/Icons/Icons.styled';
// import { headerLogo3 } from 'images/images.index';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Loader from 'components/Loader/Loader';
import { useProducts } from 'hooks/useProducts';
import Modal from 'components/Modal/Modal';
import AddProductForm from 'components/AddProductForm/AddProductForm';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

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
              <button type="button" onClick={toggleModal}>
                Add
              </button>
            )}
            {isModalOpen && (
              <Modal onCloseModal={toggleModal}>
                <AddProductForm onCloseModal={toggleModal} />
              </Modal>
            )}
            {isLoggedIn ? (
              <div>
                <p>{user.email}</p>
                <button
                  onClick={() => {
                    dispatch(logout());
                    navigate('/');
                  }}
                >
                  Log out
                </button>
              </div>
            ) : (
              <AuthBtn to={'/auth'}>Sign In / Sign Up</AuthBtn>
            )}
            {/* <LogInBtn type="button">Log In</LogInBtn>
            <SignUpBtn type="button">Sign Up</SignUpBtn> */}
          </HeaderBtnList>
          <BurgerMenu />
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};

export default Header;
