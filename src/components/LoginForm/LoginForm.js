import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/login/login.actions';

import Input from '../UI/Input';
import Button from '../UI/Button';
import Logo from '../UI/Logo';

import './LoginForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loggingIn, isError } = useSelector(({ auth }) => auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  const onChangeHandler = (event, setState) => {
    setState(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="login-form">
      <Logo type="login" style={logoStyle} />
      <Input
        icon="user"
        placeholder="Username"
        value={username}
        type="text"
        onChange={(event) => onChangeHandler(event, setUsername)}
        required
      />
      <Input
        icon="lock"
        placeholder="Password"
        value={password}
        type="password"
        onChange={(event) => onChangeHandler(event, setPassword)}
        required
      />
      {isError
        ? (
          <div className="error-container">
            <p>Error!</p>
            <p>Something went wrong!</p>
          </div>
        ) : null}
      <Button type="submit">
        {loggingIn ? 'Please wait...' : 'Log In'}
      </Button>
    </form>
  );
};

const logoStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '3rem',
};

export default LoginForm;
