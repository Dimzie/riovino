import React from 'react';
import {
  Container,
  CriticList,
  EditBtn,
  ImgContainer,
  InfoContainer,
  Iva,
  Li,
  Price,
  PriceContainer,
  Region,
  RegionContainer,
  RegionImg,
  Title,
} from './TypeItem.styled';
import zagl from '../../../images/no-photo.png';
import { spainFlag } from 'images/images.index';
import AddCartForm from 'components/AddCartForm/AddCartForm';

const TypeItem = ({
  _id,
  title,
  alcohol,
  imageURL,
  imageID,
  price,
  region,
  capacity,
}) => {
  const regionFlagCheck = region => {
    if (
      region.includes('Ribera del Duero') ||
      region.includes('Rioja') ||
      region.includes('Rías Baixas') ||
      region.includes('Rueda') ||
      region.includes('Navarra') ||
      region.includes('Jerez') ||
      region.includes('Málaga') ||
      region.includes('Huelva')
    ) {
      return spainFlag;
    }
  };

  const ivaInclude = (price, iva) => {
    const priceToNumb = Number(price);
    const result = priceToNumb + (price / 100) * 21;
    if (!iva) {
      return result.toFixed(2);
    } else {
      return priceToNumb.toFixed(2);
    }
  };

  return (
    <Li key={_id}>
      <Container>
        <InfoContainer>
          <Title>{title}</Title>
          <RegionContainer>
            <RegionImg src={regionFlagCheck(region)} alt={region} height="13" />
            <Region> {region}</Region>
          </RegionContainer>
        </InfoContainer>
        <ImgContainer>
          <img src={imageURL ? imageURL : zagl} alt={imageID} />
        </ImgContainer>
        <CriticList>
          <li></li>
          <li></li>
        </CriticList>
        <PriceContainer>
          <Price>{ivaInclude(price)}€</Price>
          <Iva>IVA incl.</Iva>
        </PriceContainer>
        <AddCartForm />
        <EditBtn type="button">Edit</EditBtn>
      </Container>
    </Li>
  );
};

export default TypeItem;
