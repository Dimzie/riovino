import React, { useEffect } from 'react';
import { Section } from 'pages/Common.styled';
import SelectedItem from 'components/Items/SelectedItem/SelectedItem';
import { getProductById } from '../../redux/products/operations';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import BackBtn from 'components/Buttons/BackBtn/BackBtn';

const SelectedItemPage = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    if (itemId) {
      dispatch(getProductById(itemId));
    }
  }, [dispatch, itemId]);

  return (
    <Section>
      <SelectedItem />
      <BackBtn backLink={backLink} />
    </Section>
  );
};

export default SelectedItemPage;
