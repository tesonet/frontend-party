import React from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";

export default function(ComposedComponent) {
  const Authentication = ({ authenticated, ...props }) =>
    // disabled react/destructuring-assignment
    authenticated ? <Redirect to="/" /> : <ComposedComponent {...props} />;

  function mapStateToProps(state) {
    return { authenticated: state.authReducer.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
