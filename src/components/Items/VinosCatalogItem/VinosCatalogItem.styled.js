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

export const Title = styled.h2`
  text-align: center;
`;

export const ImgContainer = styled.div`
  margin-bottom: 20px;
`;

export const Quantity = styled.p`
  text-align: center;
`;
