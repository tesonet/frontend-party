import React from 'react';
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

type ProtectedRouteTypes = {
  component: React.ComponentType<RouteComponentProps<any>>;
};

export default function ProtectedRoute({
  component: Component,
  ...rest
}: ProtectedRouteTypes & RouteProps) {
  const authenticated = false;

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
