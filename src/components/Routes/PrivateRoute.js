import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import DefaultRedirect from './DefaultRedirect';

const PrivateRoute = ({
  component: Component,
  redirectComponent: RedirectComponent = DefaultRedirect,
  token,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} />
      ) : (
        <RedirectComponent {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  token: PropTypes.string,
  redirectComponent: PropTypes.func,
};

const mapStateToProps = store => {
  const { auth: { token } } = store;

  return { token };
};

export default connect(mapStateToProps)(PrivateRoute);
