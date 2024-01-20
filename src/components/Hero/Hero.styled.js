import styled from 'styled-components';
import bkg from 'images/HeroImg/Hero.jpg';

export const HeroSection = styled.section`
  position: absolute;
  z-index: -999;
  width: 100%;
  height: 100vh;
  background-color: rgba(46, 47, 66, 1);
  background-image: url(${bkg});
  background-size: cover;
  background-position: center;
`;
