import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0px 16px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 400px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 700px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 900px;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 1100px;
  }

  @media screen and (min-width: 1201px) {
    width: 1200px;
  }
`;
