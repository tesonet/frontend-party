import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { ROUTE_LOGIN } from '../../constants/routes';

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: ROUTE_LOGIN,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = store => {
  const { auth: { token } } = store;

  return { token };
};

export default connect(mapStateToProps)(PrivateRoute);
