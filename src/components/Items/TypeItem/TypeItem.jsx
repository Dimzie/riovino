import React from 'react';
import { ImgContainer, Li, Title } from './TypeItem.styled';
import zagl from '../../../images/zaglushka.jpg';

const TypeItem = ({ _id, title, alcohol, imageURL, imageID }) => {
  return (
    <Li key={_id}>
      <ImgContainer>
        <img src={imageURL ? imageURL : zagl} alt={imageID} />
      </ImgContainer>
      <Title>{title}</Title>
      <p>Alcohol:{alcohol}%</p>
    </Li>
  );
};

export default TypeItem;
