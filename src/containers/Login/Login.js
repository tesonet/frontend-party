import React, { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginBackground from '../../components/Login/LoginBackground';
import LoginLogo from '../../components/Login/LoginLogo';
import LoginForm from '../../components/Login/LoginForm';
import LoginInput from '../../components/Login/LoginInput';
import LoginButton from '../../components/Login/LoginButton';
import LoginError from '../../components/Login/LoginError';
import LoginRequiredError from '../../components/Login/LoginRequiredError';
import PasswordIcon from '../../components/Icons/PasswordIcon';
import UserIcon from '../../components/Icons/UserIcon';
import Spinner from '../../components/Spinner/Spinner';
import { auth } from '../../store/thunk/auth';

const MemoLoginBackground = memo(LoginBackground);

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

  return (
    <MemoLoginBackground>
      <LoginLogo />
      <LoginForm>
        <LoginInput
          placeholder="Username"
          type="text"
          onChange={e => setUsername(e.target.value)}></LoginInput>
        <UserIcon />
        <LoginRequiredError show={!username && isRequriedError}>Required</LoginRequiredError>
        <LoginInput
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}></LoginInput>
        <PasswordIcon />
        <LoginRequiredError show={!password && isRequriedError}>Required</LoginRequiredError>
        <LoginButton onClick={e => login(e)}>
          {loading ? <Spinner size="20px" show={loading} /> : 'Log In'}
        </LoginButton>
        <LoginError>{loginError}</LoginError>
      </LoginForm>
    </MemoLoginBackground>
  );
};

export default Login;
