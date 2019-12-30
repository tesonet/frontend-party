import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthorizedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to="/" />)}
  />
);

AuthorizedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AuthorizedRoute;
