import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { auth } from '../../store/thunk/auth';
import { PasswordIcon, UserIcon } from '../../components/Icons';
import {
  LoginBackground,
  LoginLogo,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginError,
  LoginRequiredError,
} from '../../components/Login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRequriedError, setIsRequiredError] = useState(false);
  const loading = useSelector(state => state.auth.loading);
  const loginError = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  const login = e => {
    e.preventDefault();
    setIsRequiredError(true);
    if (password && username) {
      dispatch(auth(username, password));
    }
  };

  const showReqError = credential => !credential && isRequriedError;

  return (
    <LoginBackground>
      <LoginLogo />
      <LoginForm>
        <LoginInput
          placeholder="Username"
          type="text"
          onChange={e => setUsername(e.target.value)}></LoginInput>
        <UserIcon />
        {showReqError(username) && <LoginRequiredError>Required</LoginRequiredError>}
        <LoginInput
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}></LoginInput>
        <PasswordIcon />
        {showReqError(password) && <LoginRequiredError>Required</LoginRequiredError>}
        <LoginButton onClick={e => login(e)}>
          {loading ? <Spinner size="20px" /> : 'Log In'}
        </LoginButton>
        {loginError && <LoginError>{loginError}</LoginError>}
      </LoginForm>
    </LoginBackground>
  );
};

export default Login;
