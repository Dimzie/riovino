import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/products/operations';
import { useParams } from 'react-router';
import { Section } from 'pages/Common.styled';
import BackBtn from 'components/BackBtn/BackBtn';

const TypePage = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  console.log(type);
  useEffect(() => {
    dispatch(getProducts(type));
  }, [dispatch]);
  return (
    <Section>
      <BackBtn />
    </Section>
  );
};

export default TypePage;
