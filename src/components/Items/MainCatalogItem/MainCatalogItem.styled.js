import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Li = styled.li`
  /* Responsive, Mobile Li */
  background-color: transparent;
  border: 1px solid rgb(0, 0, 0, 0.2);
  width: 100%;
  transition: box-shadow 100ms ease-in;

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  }

  /* Tablets Li */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  /* Laptops, Desctops, Televisors Li */
  @media screen and (min-width: 769px) {
    width: calc((100% - 40px) / 4);
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

export const ImgContainer = styled.div``;

export const Quantity = styled.p`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 20px;
`;
