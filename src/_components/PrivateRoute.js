import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = () => {
  return (
    <Route
      render={props =>
        localStorage.getItem("token") ? (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
