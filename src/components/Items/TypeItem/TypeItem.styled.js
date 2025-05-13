import styled from 'styled-components';

export const Li = styled.li`
  /* Responsive, Mobile Li */
  position: relative;
  padding: 20px 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  background-color: transparent;
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
  /* color: #c0aa41; */
  color: #000000;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80px;
  margin-bottom: 5px;
`;

export const RegionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegionImg = styled.img`
  height: 10px;
  margin-right: 5px;
`;

export const Region = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
`;

export const ImgContainer = styled.div`
  margin-bottom: 10px;
`;

export const Img = styled.img`
  height: 380px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const CartContainer = styled.div`
  min-height: 80px;
`;

export const Price = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  margin-right: 10px;
`;

export const Iva = styled.p`
  font-family: 'Roboto';
`;

export const TypeBtnList = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const TypeBtnLi = styled.li``;

export const TypeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 0;
  width: 40px;
  height: 40px;
  background-color: rgba(46, 47, 66, 1);
  border: 1px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  transition: color 100ms ease-in, border 100ms ease-in;
  &:hover {
    border: 1px solid #c0aa41;
    color: #c0aa41;
  }
`;
