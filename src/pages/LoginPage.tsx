import * as React from 'react';

import { LoginLayout } from '@layouts/LoginLayout';
import { LoginContainer } from '@containers/Login/Login';

const LoginPage = () => (
  <LoginLayout>
    <LoginContainer />
  </LoginLayout>
);

export default LoginPage;
