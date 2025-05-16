import styled from 'styled-components';

export const H1Title = styled.h1`
  font-family: 'Carattere';
  text-align: center;
  font-size: 72px;
  margin-bottom: 25px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
`;

export const EmptyCartMsg = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;
