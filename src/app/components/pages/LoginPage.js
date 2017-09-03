import React from 'react';
import {connect} from 'react-redux';
import {compose, branch, renderComponent} from 'recompose';
import {Redirect} from 'react-router';
import styled from 'styled-components';

import auth from '~/auth';

import {Badge} from '../';
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

  > *:first-child {
    margin-bottom: 40px;
  }

  > form {
    width: 100%;
    max-width: 400px;
  }
`;


const LoginPage = () => (
  <Container className='container-fluid'>
    <Badge />
    <LoginForm />
  </Container>
);


const enhance = compose(
  connect(state => ({isAuthenticated: auth.selectors.isAuthenticated(state)})),
  branch(props => props.isAuthenticated, renderComponent(() => <Redirect to='/servers' />)),
);

export default enhance(LoginPage);
