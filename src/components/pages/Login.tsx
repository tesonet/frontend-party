import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../styled/Box';
import bg from '../../assets/Layer-2.jpg';
import PageBackground from '../common/PageBackground';
import PageOverlay from '../common/PageOverlay';
import { ReactComponent as LogoSVG } from '../../assets/logotype-testio_.svg';
import lockSVG from '../../assets/ico-lock.svg';
import InputWithIcon from '../common/InputWithIcon';
import userSVG from '../../assets/ico-username.svg';
import { Redirect } from 'react-router-dom';
import LoginButton from '../common/LoginButton';
import ErrorBox from '../common/ErrorBox';
import useAuth from '../utils/useAuth';

const LoginContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100wh;
  z-index: 0;
`;
const LoginBox = styled(Box)`
  width: 100%;
`;

const Logo = styled(LogoSVG)`
  display: block;
  height: 64px;
  margin: 0 auto 70px auto;
`;

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { getToken, authenticated, error } = useAuth();
  console.log(error);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getToken(username, password);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <LoginContainer>
      <PageBackground backgroundImage={bg} />
      <PageOverlay backgroundColor="#000000" opacity={0.8} />
      <LoginBox maxWidth={{ _: '90%', sm: '90%', md: '360px' }}>
        <Logo alt="Tesonet app" />
        <form noValidate onSubmit={handleSubmit}>
          <InputWithIcon
            iconSrc={lockSVG}
            mb={2}
            onChange={(e: any) => setUsername(e.target.value)}
            value={username}
            name="username"
            width="100%"
          />
          <InputWithIcon
            iconSrc={userSVG}
            mb={2}
            onChange={(e: any) => setPassword(e.target.value)}
            value={password}
            name="password"
            type="password"
            width="100%"
          />
          <LoginButton />
          {error && (
            <ErrorBox mt={2}>{'Something went wrong...'}</ErrorBox>
          )}
        </form>
      </LoginBox>
    </LoginContainer>
  );
}
