import React from 'react';
import { StyledBackground, StyledContent, Logo } from './styles';
import LoginForm from './loginForm';

const Login = () => (
  <StyledBackground>
    <StyledContent>
      <Logo />
      <LoginForm />
    </StyledContent>
  </StyledBackground>
);

export default Login;
