import React from 'react';
import LoginBackground from '../../components/Login/LoginBackground';
import LoginLogo from '../../components/Login/LoginLogo';
import LoginForm from '../../components/Login/LoginForm';
import LoginInput from '../../components/Login/LoginInput';
import LoginButton from '../../components/Login/LoginButton';
import PasswordIcon from '../../components/Icons/PasswordIcon';
import UserIcon from '../../components/Icons/UserIcon';

const Login = () => (
  <LoginBackground>
    <LoginLogo />
    <LoginForm>
      <LoginInput placeholder="Username" type="text"></LoginInput>
      <UserIcon />
      <LoginInput placeholder="Password" type="password"></LoginInput>
      <PasswordIcon />
      <LoginButton>Log In</LoginButton>
    </LoginForm>
  </LoginBackground>
);

export default Login;
