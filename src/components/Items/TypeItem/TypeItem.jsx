import React from 'react';
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
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../redux/products/operations';
import CriticsList from 'components/Lists/CriticsList/CriticsList';
import { regionFlagCheck } from 'helpers/functions/regionFlagCheck';
import { ivaInclude } from 'helpers/functions/ivaIncludeCalculate';

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
  const disptach = useDispatch();

  const onHandleDelete = () => {
    disptach(removeProduct(id));
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
        <DeleteBtn type="button" onClick={onHandleDelete}>
          Delete
        </DeleteBtn>
      </Container>
    </Li>
  );
};

export default TypeItem;
