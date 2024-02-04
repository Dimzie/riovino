import { BurgerIcon } from 'helpers/Icons/Icons.styled';
import React from 'react';
import { BurgerBtn } from './BurgerMenu.styled';

const BurgerMenu = () => {
  return <BurgerBtn type="button"><BurgerIcon/></BurgerBtn>;
};

export default BurgerMenu;
