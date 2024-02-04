import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/products/operations';
import { useParams } from 'react-router';
import { Section } from 'pages/Common.styled';
import BackBtn from 'components/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';

const TypePage = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const dispatch = useDispatch();
  const { type } = useParams();
  console.log(type);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Section>
      <BackBtn backLink={backLink} />
    </Section>
  );
};

export default TypePage;
