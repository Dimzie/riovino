import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BackBtnLink, BackBtnSpan } from './BackBtn.styled';
import { BackIcon } from 'helpers/Icons/Icons.styled';

const BackBtn = () => {
  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');
  return (
    <BackBtnLink to={backLink.current}>
      <BackBtnSpan>
        <BackIcon />
        Atrás
      </BackBtnSpan>
    </BackBtnLink>
  );
};

export default BackBtn;
