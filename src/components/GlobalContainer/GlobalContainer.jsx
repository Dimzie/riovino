import React from 'react';
import { Container } from './GlobalContainer.styled';

const GlobalContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GlobalContainer;
