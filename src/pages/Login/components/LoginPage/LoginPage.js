import React from 'react';
import { StyledLoginWrapper, StyledLoginContainer, StyledLogo } from './LoginPage.styles';
import mainLogo from '@/assets/images/logo.svg'
import LoginForm from '../LoginForm/LoginForm'

const LoginPage = () => (
  <StyledLoginWrapper>
    <StyledLoginContainer>
      <StyledLogo src={mainLogo} alt='logo' />
      <LoginForm>
      </LoginForm>
    </StyledLoginContainer>
  </StyledLoginWrapper>
)

export default LoginPage;