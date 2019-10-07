import * as React from 'react';

import { keyframes, styled } from './theme';

const LoaderAnimation = keyframes`
  0% {
      opacity: 1;
      transform: scale(1.1, 1.1);
  }
  100% {
    opacity: 0;
    transform: scale(1, 1);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 32px;
  width: 100%;
  padding: 16px 0;
  transform: translate(-16px, -16px) scale(0.16) translate(16px, 16px);
`;

const Dot = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.primary};
  animation: ${LoaderAnimation} 1s linear infinite;
`;

const DotContainer = styled.div`
  &:nth-child(1) {
    transform: rotate(0deg);
    transform-origin: 164px 100px;

    ${Dot} {
      left: 148px;
      top: 84px;
      animation-delay: -0.875s;
    }
  }

  &:nth-child(2) {
    transform: rotate(45deg);
    transform-origin: 145.25483398400002px 145.25483398400002px;

    ${Dot} {
      left: 129.25483398400002px;
      top: 129.25483398400002px;
      animation-delay: -0.75s;
    }
  }

  &:nth-child(3) {
    transform: rotate(90deg);
    transform-origin: 100px 164px;

    ${Dot} {
      left: 84px;
      top: 148px;
      animation-delay: -0.625s;
    }
  }

  &:nth-child(4) {
    transform: rotate(135deg);
    transform-origin: 54.745166016px 145.25483398400002px;

    ${Dot} {
      left: 38.745166016px;
      top: 129.25483398400002px;
      animation-delay: -0.5s;
    }
  }

  &:nth-child(5) {
    transform: rotate(180deg);
    transform-origin: 36px 100px;

    ${Dot} {
      left: 20px;
      top: 84px;
      animation-delay: -0.375s;
    }
  }

  &:nth-child(6) {
    transform: rotate(225deg);
    transform-origin: 54.745166016px 54.745166016px;

    ${Dot} {
      left: 38.745166016px;
      top: 38.745166016px;
      animation-delay: -0.25s;
    }
  }

  &:nth-child(7) {
    transform: rotate(270deg);
    transform-origin: 100px 36px;

    ${Dot} {
      left: 84px;
      top: 20px;
      animation-delay: -0.125s;
    }
  }

  &:nth-child(8) {
    transform: rotate(315deg);
    transform-origin: 145.25483398400002px 54.745166016px;

    ${Dot} {
      left: 129.25483398400002px;
      top: 38.745166016px;
      animation-delay: 0s;
    }
  }

  &:nth-child(9) {
    transform: rotate(360deg);
    transform-origin: 164px 100px;

    ${Dot} {
      left: 148px;
      top: 84px;
      animation-delay: 0.125s;
    }
  }
`;

export const Loading: React.FunctionComponent = () => {
  return (
    <Container>
      {Array.from(new Array(8)).map((_, index) => (
        <DotContainer key={index}>
          <Dot />
        </DotContainer>
      ))}
    </Container>
  );
};
