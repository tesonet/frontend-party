import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { App_Routes } from 'Routes';

interface IProps {
  shouldRedirect: boolean;
  component: any;
  path: App_Routes;
  redirectTo: App_Routes;
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
