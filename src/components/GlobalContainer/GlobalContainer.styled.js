import styled from 'styled-components';

export const Container = styled.div`
  /* Responsive Container */
  flex-grow: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;

  /* Mobiles Container */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 320px;
  }

  /* Tablets Container */
  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-grow: 1;
    width: 480px;
  }

  /* Laptops Container */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex-grow: 1;
    width: 768px;
  }

  /* Desctops Container */
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    flex-grow: 1;
    width: 1024px;
  }

  /* Televisors Container */
  @media screen and (min-width: 1201px) {
    flex-grow: 1;
    width: 1200px;
  }
`;