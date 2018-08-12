import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IProps extends RouteProps {
  isAuthenticated: boolean;
  redirectTo: string;
}

const PrivateRoute: React.SFC<IProps> = ({
  isAuthenticated,
  redirectTo,
  ...rest
}) => (isAuthenticated ? <Route {...rest} /> : <Redirect to={redirectTo} />);

export default PrivateRoute;
