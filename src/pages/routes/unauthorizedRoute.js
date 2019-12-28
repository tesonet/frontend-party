import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const UnauthorizedRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={props =>
      localStorage.getItem('token') ? <Redirect to="/servers" /> : <Component {...props} />
    }
  />
);

UnauthorizedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default UnauthorizedRoute;
