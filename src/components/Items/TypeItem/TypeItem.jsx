import React, { useState } from 'react';
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
  AddFormContainer,
} from './TypeItem.styled';
import zagl from '../../../images/no-photo.png';
import AddCartForm from 'components/AddCartForm/AddCartForm';
import { regionFlagCheck } from 'helpers/functions/regionFlagCheck';
import { formatTitleString } from 'helpers/functions/formatTitleString';
import { inStockCheck } from 'helpers/functions/inStockCheck';
import { extractAfterLastDash } from 'helpers/functions/extractAfterLastDash';
import { Link, useParams } from 'react-router-dom';
import { extractIvaValue, priceWithIva } from 'helpers/functions/priceAndIva';
import AddCartBtn from 'components/AddCartBtn/AddCartBtn';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/products/productsSlice';
// import { critics } from 'data/data';

const TypeItem = ({ id, name, price, stock, taxes, state }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { subType } = useParams(); // текущая подкатегория (например, "tintos")
  const pathParts = window.location.pathname.split('/');
  const category = pathParts[2]; // "vinos", "espumosos" и т.п.
  const ivaValue = extractIvaValue(taxes);

  const handleAddToCart = () => {
    console.log(name);
    dispatch(addToCart({ product: { id, name, price, taxes }, quantity }));
  };

  return (
    <Li>
      <Container>
        <InfoContainer>
          <Link to={`/${category}/${subType}/${id}`} state={state}>
            <Title>
              {formatTitleString(name)}{' '}
              <LiquidQty>{extractAfterLastDash(name)}</LiquidQty>
            </Title>
          </Link>
          <RegionContainer>{regionFlagCheck(name)}</RegionContainer>
        </InfoContainer>
        <Link to={`/${category}/${subType}/${id}`} state={state}>
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
        </Link>
        {/* <CriticsList critics={critics} /> */}
        <CartContainer>
          <PriceContainer>
            <Price>{priceWithIva(price, ivaValue)}€</Price>
            <Iva>IVA incl.</Iva>
          </PriceContainer>
          <AddFormContainer>
            <AddCartForm
              name={name}
              id={id}
              price={price}
              taxes={taxes}
              setQuantity={setQuantity}
              quantity={quantity}
            />
            <AddCartBtn handleAddToCart={handleAddToCart} />
          </AddFormContainer>
        </CartContainer>
        {inStockCheck(stock)}
      </Container>
    </Li>
  );
};

export default TypeItem;
