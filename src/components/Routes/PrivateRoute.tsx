import React from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps
} from 'react-router-dom';
import { isLoggedIn } from '../../auth/authentication';

interface PrivateRouteProps extends RouteProps {
  component:
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const handleRender = (routeProps: RouteComponentProps) => {
    if (isLoggedIn()) {
      return <Component {...routeProps} />;
    }

    return <Redirect to={{ pathname: '/login', state: { from: routeProps.location } }} />;
  };

  return <Route {...rest} render={handleRender} />;
};

export default PrivateRoute;
