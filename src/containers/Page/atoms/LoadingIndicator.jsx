import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from {
    left: -200px;
    width: 30%;
  }
  50% {
    width: 30%;
  }
  70% {
    width: 70%;
  }
  80% {
    left: 50%;
  }
  95% {
    left: 120%;
  }
  to {
    left: 100%;
  }
`;

export default styled('div')`
  height: 4px;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  &::before {
    display: block;
    position: absolute;
    content: '';
    left: -200px;
    width: 200px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.green};
    animation: ${loadingAnimation} 2s linear infinite;
  }
`;
