import styled from 'styled-components';

export const Li = styled.li`
  /* Responsive, Mobile Li */
  position: relative;
  padding: 20px;
  background-color: rgba(1, 1, 1, 0.4);
  width: 100%;

  /* Tablets Li */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  /* Laptops, Desctops, Televisors Li */
  @media screen and (min-width: 769px) {
    width: calc((100% - 60px) / 4);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 6px;
  color: #c0aa41;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80px;
`;

export const RegionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegionImg = styled.img`
  height: 13px;
  margin-right: 5px;
`;

export const Region = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
`;

export const ImgContainer = styled.div``;

export const CriticList = styled.ul``;

export const CriticItem = styled.li``;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  margin-right: 10px;
`;

export const Iva = styled.p`
  font-family: 'Roboto';
`;

export const EditBtn = styled.button`
  font-family: 'Roboto';
  text-align: center;
  margin-top: 15px;
  padding: 0;
  width: 50px;
  height: 35px;
  background-color: rgba(46, 47, 66, 1);
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: color 100ms ease-in;
  &:hover {
    color: #c0aa41;
  }
`;
