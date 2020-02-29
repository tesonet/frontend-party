import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginBackground from '../../components/Login/LoginBackground';
import LoginLogo from '../../components/Login/LoginLogo';
import LoginForm from '../../components/Login/LoginForm';
import LoginInput from '../../components/Login/LoginInput';
import LoginButton from '../../components/Login/LoginButton';
import PasswordIcon from '../../components/Icons/PasswordIcon';
import UserIcon from '../../components/Icons/UserIcon';
import { auth } from '../../store/requests/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  return (
    <LoginBackground>
      <LoginLogo />
      <LoginForm>
        <LoginInput
          placeholder="Username"
          type="text"
          onChange={e => setUsername(e.target.value)}></LoginInput>
        <UserIcon />
        <LoginInput
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}></LoginInput>
        <PasswordIcon />
        <LoginButton onClick={e => (e.preventDefault(), dispatch(auth(username, password)))}>
          {loading ? 'Loading...' : 'Log In'}
        </LoginButton>
      </LoginForm>
    </LoginBackground>
  );
};

export default Login;
