import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return(
    <div className="login">
      <div className="login__wrap">
      <img className="login__logo" src="./img/logo.svg" alt="testio" title="testio" />
      <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
