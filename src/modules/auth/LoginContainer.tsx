import * as background from '@assets/background.jpg';
import { BodyBackground } from '@components/BodyBackground';
import { styled } from '@components/theme';
import * as React from 'react';

import { Login } from './Login';

const LoginPageContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 320px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const LoginContainer: React.FunctionComponent = () => {
  return (
    <LoginPageContainer>
      <BodyBackground background={background} />
      <Login />
    </LoginPageContainer>
  );
};

export { LoginContainer };
