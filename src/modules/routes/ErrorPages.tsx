import * as background from '@assets/background.jpg';
import { BodyBackground } from '@components/BodyBackground';
import { H1 } from '@components/text/Text.components';
import { styled } from '@components/theme';
import * as React from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ErrorText = styled(H1)`
  color: ${p => p.theme.colors.white};
  align-self: center;
`;

export const Error404 = () => (
  <Container>
    <BodyBackground background={background} />
    <ErrorText>Page not found</ErrorText>
  </Container>
);

export const Error500 = () => (
  <Container>
    <BodyBackground background={background} />
    <ErrorText>Server error</ErrorText>
  </Container>
);
