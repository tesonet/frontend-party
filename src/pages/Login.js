// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LoginContainer } from '../containers/LoginContainer/LoginContainer';

const hasToken = localStorage.getItem('token');

type LoginPageProps = {
  isLoggedIn: boolean,
};

export const LoginPageDisconnected = ({ isLoggedIn }: LoginPageProps) =>
  isLoggedIn && hasToken ? (
    <Redirect to="/home" />
  ) : (
    <React.Fragment>
      <div className="container">
        <LoginContainer />
      </div>
    </React.Fragment>
  );

const mapStateToProps = state => ({ isLoggedIn: state.loginReducer.isLoggedIn });

export const LoginPage = connect(mapStateToProps)(LoginPageDisconnected);
