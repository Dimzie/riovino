import styled from 'styled-components';

export const Container = styled.div`
  /* Responsive Container */
  flex-grow: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;

  /* Mobiles Container */
  @media screen and (min-width: 320px) and (max-width: 479px) {
    width: 320px;
  }

  /* Tablets Container */
  @media screen and (min-width: 480px) and (max-width: 767px) {
    flex-grow: 1;
    width: 480px;
  }

  /* Laptops Container */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-grow: 1;
    width: 768px;
  }

  /* Desctops Container */
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    flex-grow: 1;
    width: 1024px;
  }

  /* Televisors Container */
  @media screen and (min-width: 1200px) {
    flex-grow: 1;
    width: 1200px;
  }
`;