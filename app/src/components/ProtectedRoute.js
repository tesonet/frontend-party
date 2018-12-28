import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from '../utils/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
)

export default ProtectedRoute;