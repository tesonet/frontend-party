import React from 'react';
import {connect} from 'react-redux';
import {compose, branch, renderComponent} from 'recompose';
import {Redirect} from 'react-router';
import styled from 'styled-components';

import auth from '~/auth';

import {Badge} from '../';
import {LoginForm} from '../forms';


const Background = styled.div`
  height: 100%;
  align-items: center;
  background: url(${`${process.env.PUBLIC_URL}/bg.jpeg`}) no-repeat center center fixed;
  background-size: cover;
`;


const TopSpacer = styled.div`
  min-height: 30px;
  height: 20vh;

  @media screen and (min-height: 600px){
    height: 30vh;
  }
`;


const BadgeContainer = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;


const Container = styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding-bottom: 30px;

  > form {
    margin: auto;
    width: 100%;
    max-width: 400px;
  }
`;


const LoginPage = () => (
  <Background>
    <Container className='container-fluid'>
      <TopSpacer />
      <BadgeContainer>
        <Badge />
      </BadgeContainer>
      <LoginForm />
    </Container>
  </Background>
);


const enhance = compose(
  connect(state => ({isAuthenticated: auth.selectors.isAuthenticated(state)})),
  branch(props => props.isAuthenticated, renderComponent(() => <Redirect to='/servers' />)),
);

export default enhance(LoginPage);
