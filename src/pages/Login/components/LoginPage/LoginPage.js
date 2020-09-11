import React from 'react';
import mainLogo from '@/assets/images/logo.svg';
import { StyledLoginWrapper, StyledLoginContainer, StyledLogo } from './LoginPage.styles';
import LoginForm from '../LoginForm/LoginForm';

const LoginPage = () => (
  <StyledLoginWrapper>
    <StyledLoginContainer>
      <StyledLogo src={mainLogo} alt="logo" />
      <LoginForm />
    </StyledLoginContainer>
  </StyledLoginWrapper>
);

export default LoginPage;
