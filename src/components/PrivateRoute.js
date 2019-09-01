import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  // eslint-disable-next-line react/prop-types
  const Authentication = ({ authenticated, ...props }) =>
    !authenticated ? <Redirect to="/" /> : <ComposedComponent {...props} />;

  function mapStateToProps(state) {
    return { authenticated: state.authReducer.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}