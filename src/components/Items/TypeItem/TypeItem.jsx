import React from 'react';
import {
  CartContainer,
  Container,
  ImgContainer,
  InfoContainer,
  Iva,
  Li,
  Price,
  PriceContainer,
  RegionContainer,
  Title,
  Img,
  LiquidQty,
} from './TypeItem.styled';
import zagl from '../../../images/no-photo.png';
import AddCartForm from 'components/AddCartForm/AddCartForm';
// import Modal from 'components/Modal/Modal';
// import { useDispatch } from 'react-redux';
// import { removeProduct } from '../../../redux/products/operations';
// import CriticsList from 'components/Lists/CriticsList/CriticsList';
import { regionFlagCheck } from 'helpers/functions/regionFlagCheck';
// import DeleteForm from 'components/DeleteForm/DeleteForm';
// import { TrashIcon, UpdateIcon } from 'helpers/Icons/Icons.styled';
// import { useAuth } from 'hooks/useAuth';
// import UpdateProductModal from 'components/UpdateProductForm/UpdateProductModal';
import { formatTitleString } from 'helpers/functions/formatTitleString';
import { inStockCheck } from 'helpers/functions/inStockCheck';
import { extractAfterLastDash } from 'helpers/functions/extractAfterLastDash';
// import { critics } from 'data/data';

const TypeItem = ({ id, name, price, stock, desc }) => {
  // const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  // const toggleUpdateModal = () => {
  //   setIsUpdateModalOpen(!isUpdateModalOpen);
  // };

  // const toggleDeleteModal = () => {
  //   setIsDeleteModalOpen(!isDeleteModalOpen);
  // };

  // const onHandleDelete = () => {
  //   dispatch(removeProduct(id));
  //   setIsDeleteModalOpen(false);
  // };

  return (
    <Li>
      <Container>
        <InfoContainer>
          <Title>
            {formatTitleString(name)}{' '}
            <LiquidQty>{extractAfterLastDash(name)}</LiquidQty>
          </Title>
          <RegionContainer>{regionFlagCheck(name)}</RegionContainer>
        </InfoContainer>
        <ImgContainer>
          {/* {productImages.length > 0 ? (
            <Img
              key={productImages[0].imageID}
              src={productImages[0].imageURL ? productImages[0].imageURL : zagl}
              alt={productImages[0].imageID}
            />
          ) : (
            <Img src={zagl} alt="Sin Foto" />
          )} */}
          <Img src={zagl} alt="Sin Foto" />
        </ImgContainer>
        {/* <CriticsList critics={critics} /> */}
        <CartContainer>
          <PriceContainer>
            <Price>{price.toFixed(2)}€</Price>
            <Iva>IVA incl.</Iva>
          </PriceContainer>
          <AddCartForm name={name} id={id} price={price} />
        </CartContainer>
        {inStockCheck(stock)}
        {/* {user.userType === 'admin' && (
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
            <UpdateProductModal id={id} onCloseModal={toggleUpdateModal} />
          </Modal>
        )} */}
      </Container>
    </Li>
  );
};

export default TypeItem;
