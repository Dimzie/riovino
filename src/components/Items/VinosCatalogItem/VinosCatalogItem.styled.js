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

  /* Laptops Li */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: calc((100% - 40px) / 3);
  }

  /* Desctops Li */
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: calc((100% - 60px) / 4);
  }

  /* Televisors Li */
  @media screen and (min-width: 1201px) {
    width: calc((100% - 80px) / 5);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 74px;
`;

export const Title = styled.h2`
text-align: center;
`;

export const ImgContainer = styled.div`
  margin-bottom: 20px;
`;

export const Quantity = styled.p`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 20px;
`;
