import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { APP_ROUTES } from 'Routes';

interface IProps {
  shouldRedirect: boolean;
  component: any;
  path: APP_ROUTES;
  redirectTo: APP_ROUTES;
}

const PrivateRoute: React.SFC<IProps> = ({
  component: Component,
  shouldRedirect,
  redirectTo,
  ...rest
}) => (
  <Route
    {...rest}
    // tslint:disable-next-line:jsx-no-lambda
    render={props =>
      shouldRedirect === true ? (
        <Redirect
          to={{ pathname: redirectTo, state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PrivateRoute;
