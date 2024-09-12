import React, { useState } from 'react';
import {
  CartContainer,
  Container,
  DeleteBtn,
  ImgContainer,
  InfoContainer,
  Iva,
  Li,
  Price,
  PriceContainer,
  Region,
  RegionContainer,
  Title,
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
import DeleteConfirm from 'components/DeleteConfirm/DeleteConfirm';

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
          <img src={imageURL ? imageURL : zagl} alt={imageID} />
        </ImgContainer>
        <CriticsList critics={critics} />
        <CartContainer>
          <PriceContainer>
            <Price>{ivaInclude(price)}€</Price>
            <Iva>IVA incl.</Iva>
          </PriceContainer>
          <AddCartForm />
        </CartContainer>
        <DeleteBtn type="button" onClick={toggleDeleteModal}>
          Delete
        </DeleteBtn>
        <DeleteBtn type="button" onClick={toggleUpdateModal}>
          Update
        </DeleteBtn>
        {isDeleteModalOpen && (
          <Modal onCloseModal={toggleDeleteModal}>
            <DeleteConfirm
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
