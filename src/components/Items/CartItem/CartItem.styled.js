import styled from 'styled-components';

export const Li = styled.li`
  /* Responsive, Mobile Li */
  position: relative;
  padding: 20px 10px;
  background-color: transparent;
  border: 1px solid rgb(0,0,0, 0.2);
  width: 100%;

  /* Tablets Li */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  /* Laptops, Desctops, Televisors Li */
  @media screen and (min-width: 769px) {
    width: 848px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto';
  color: #000000;
`;