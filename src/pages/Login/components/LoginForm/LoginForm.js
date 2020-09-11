import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '@/shared/components/Input/Input';
import Button from '@/shared/components/Button/Button';
import { login } from '@/api/services/authentication.service';
import { StyledErrorMessage } from './LoginForm.styles';

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });
  const { username, password } = userCredentials;
  const { authLoading, authSuccess, authFailure } = useSelector((state) => state.authentication);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const submitForm = () => {
    dispatch(login(userCredentials));
  };

  if (authSuccess) return <Redirect to="/servers" />;

  return (
    <>
      <Input
        placeholder="Username"
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        icon="username"
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        onChange={handleInputChange}
        value={password}
        icon="password"
      />
      <Button title="Log In" onClick={submitForm} loading={authLoading} />
      <StyledErrorMessage>{authFailure && 'Invalid username or password.'}</StyledErrorMessage>
    </>
  );
};

export default LoginForm;
