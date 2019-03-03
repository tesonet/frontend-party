import React, { useEffect } from 'react';
import { BrowserRouter as ReactRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from '../login/LoginContainer.js';
import List from '../list/ListContainer.js';

import { checkToken } from '../../redux/auth/actions.js';

const Router = (props) => {
  const { dispatch, loggedIn, tokenCheckDone } = props;
  const paths = {
    login: '/',
    serverList: '/servers/',
  };

  useEffect(() => {
    dispatch(checkToken());
  }, []);

  // avoid flash of login screen when checking localstorage
  if (tokenCheckDone === false) {
    return null;
  }

  return (
    <ReactRouter>
      <Switch>
        <Route exact path={paths.login} render={() => (loggedIn ? <Redirect to={paths.serverList} /> : <Login />)} />
        <Route path={paths.serverList} render={() => (loggedIn ? <List /> : <Redirect to={paths.login} />)} />
        <Redirect to={paths.login} />
      </Switch>
    </ReactRouter>
  );
};

export default Router;

Router.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  tokenCheckDone: PropTypes.bool.isRequired,
};
