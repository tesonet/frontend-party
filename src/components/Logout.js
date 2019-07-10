import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/actions";
import { Redirect } from "react-router-dom";

const Logout = props => {
  useEffect(() => {
    props.onLogout();
  });

  return <Redirect to="/login" />;
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
