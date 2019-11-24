import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LoginAuthRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated === true ? <Redirect to='/' /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

LoginAuthRoute.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(LoginAuthRoute);
