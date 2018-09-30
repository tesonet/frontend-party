import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { isAuthToken } from '../../api/auth-token';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthToken() === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}
  />
);
