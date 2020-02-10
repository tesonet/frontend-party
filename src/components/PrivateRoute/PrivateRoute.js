import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import paths from "../../App";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector(({ auth }) => auth.loggedIn);

  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to={paths.login} />
      }
    />
  );
};

export default PrivateRoute;
