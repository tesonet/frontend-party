import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import auth from '../../utils/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.getToken() !== null ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
        }}
      />
    )
  )} />
);

export default ProtectedRoute;