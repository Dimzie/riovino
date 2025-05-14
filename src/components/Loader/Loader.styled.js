import styled from 'styled-components';

export const LoaderWrapper = styled.span`
  position: absolute;
  top: 85px;
  left: 0;
  width: 100%;
  height: 4px;
  display: inline-block;
  background: rgba(1, 1, 1, 0.4);
  overflow: hidden;
  z-index: 1000;

  &::after {
    content: '';
    width: 0;
    height: 4px;
    background: #c0aa41;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: animloader 2000ms linear infinite;
  }

  @keyframes animloader {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
