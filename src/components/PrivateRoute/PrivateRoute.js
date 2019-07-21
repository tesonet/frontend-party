import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapStateToProps = state => {
  return {
    userToken: state.userReducer.userToken
  };
};

const PrivateRoute = ({ userToken, component: Component, ...rest }) => {
  //Utilize localStorage in case of browser reload.
  try {
    if (userToken.length <= 0) {
      userToken = localStorage.getItem("userToken");
    }
  } catch (e) {}
  return (
    <Route
      {...rest}
      render={props =>
        !!userToken === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
