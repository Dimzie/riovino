import React from 'react';
import { BackBtnLink, BackBtnSpan } from './BackBtn.styled';
import { BackIcon } from 'helpers/icons/Icons.styled';

const BackBtn = ({ backLink }) => {
  return (
    <BackBtnLink to={backLink}>
      <BackBtnSpan>
        <BackIcon />
        Atrás
      </BackBtnSpan>
    </BackBtnLink>
  );
};

export default BackBtn;
