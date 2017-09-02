import React from 'react';
import styled from 'styled-components';

import {LoginForm} from '../forms';


const Container = styled.div`
  background: gray;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${`${process.env.PUBLIC_URL}/bg.jpeg`}) no-repeat center center fixed;
  background-size: cover;

  > form {
    width: 100%;
    max-width: 400px;
  }
`;


const LoginPage = () => (
  <Container className='container-fluid'>
    <LoginForm />
  </Container>
);

export default LoginPage;
