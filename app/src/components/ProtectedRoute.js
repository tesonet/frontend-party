import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from '../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthorized() ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
)

export default PrivateRoute;