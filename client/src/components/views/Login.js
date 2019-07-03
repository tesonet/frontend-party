import React from 'react';
import Background from '../Background';
import LoginForm from '../auth/LoginForm';

const Login = () => {
  return (
    <div className="Login view">
      <Background>
        <LoginForm />
      </Background>
    </div>
  )
}

export default Login;