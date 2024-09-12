import styled from 'styled-components';

export const Li = styled.li`
  /* Responsive, Mobile Li */
  padding: 20px;
  background-color: rgba(1, 1, 1, 0.4);
  width: 100%;

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
