import React, { useState } from 'react';
import {
  CartContainer,
  Container,
  TypeBtn,
  ImgContainer,
  InfoContainer,
  Iva,
  Li,
  Price,
  PriceContainer,
  Region,
  RegionContainer,
  Title,
  TypeBtnList,
  TypeBtnLi,
  Img,
} from './TypeItem.styled';
import zagl from '../../../images/no-photo.png';
import AddCartForm from 'components/AddCartForm/AddCartForm';
import Modal from 'components/Modal/Modal';
import UpdateProductForm from 'components/UpdateProductForm/UpdateProductForm';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../redux/products/operations';
import CriticsList from 'components/Lists/CriticsList/CriticsList';
import { regionFlagCheck } from 'helpers/functions/regionFlagCheck';
import { ivaInclude } from 'helpers/functions/ivaIncludeCalculate';
import DeleteForm from 'components/DeleteForm/DeleteForm';
import { TrashIcon, UpdateIcon } from 'helpers/Icons/Icons.styled';
import { useAuth } from 'hooks/useAuth';

const TypeItem = ({
  title,
  alcohol,
  imageURL,
  imageID,
  price,
  region,
  capacity,
  id,
  critics,
}) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { user } = useAuth();

  const toggleUpdateModal = () => {
    setIsUpdateModalOpen(!isUpdateModalOpen);
  };

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const disptach = useDispatch();

  const onHandleDelete = () => {
    disptach(removeProduct(id));
    setIsDeleteModalOpen(false);
  };

  return (
    <Li>
      <Container>
        <InfoContainer>
          <Title>{title}</Title>
          <RegionContainer>
            {regionFlagCheck(region)}
            <Region> {region}</Region>
          </RegionContainer>
        </InfoContainer>
        <ImgContainer>
          <Img src={imageURL ? imageURL : zagl} alt={imageID} />
        </ImgContainer>
        <CriticsList critics={critics} />
        <CartContainer>
          <PriceContainer>
            <Price>{ivaInclude(price)}€</Price>
            <Iva>IVA incl.</Iva>
          </PriceContainer>
          <AddCartForm />
        </CartContainer>
        {user.userType === 'admin' && (
          <TypeBtnList>
            <TypeBtnLi>
              <TypeBtn type="button" onClick={toggleDeleteModal}>
                <TrashIcon />
              </TypeBtn>
            </TypeBtnLi>
            <TypeBtnLi>
              <TypeBtn type="button" onClick={toggleUpdateModal}>
                <UpdateIcon />
              </TypeBtn>
            </TypeBtnLi>
          </TypeBtnList>
        )}
        {isDeleteModalOpen && (
          <Modal onCloseModal={toggleDeleteModal}>
            <DeleteForm
              onDelete={onHandleDelete}
              onCloseModal={toggleDeleteModal}
            />
          </Modal>
        )}
        {isUpdateModalOpen && (
          <Modal onCloseModal={toggleUpdateModal}>
            <UpdateProductForm />
          </Modal>
        )}
      </Container>
    </Li>
  );
};

export default TypeItem;
