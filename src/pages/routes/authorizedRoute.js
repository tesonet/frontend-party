import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthorizedRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={props =>
      localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

AuthorizedRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default AuthorizedRoute;
