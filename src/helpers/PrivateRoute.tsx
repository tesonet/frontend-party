// react and react dependencies
import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  return (
      <Route
          {...rest}
          render={routeProps =>
            localStorage.getItem('authToken') ? (
              <Component {...routeProps} />
            ) : (
              <Redirect to={{ pathname: '/login', state: { from: routeProps.location } }} />
            )
          }
      />
  );
};
