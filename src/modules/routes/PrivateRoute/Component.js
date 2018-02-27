import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Redirect } from '../../../lib/components';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default PrivateRoute;
