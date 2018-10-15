import React from 'react';
import {Route, Redirect} from 'react-router-dom';

/*
  Compopnent which is checking if token is in localStorage.
  If not, redirect to login page.
*/
const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render = {props =>
            localStorage.testio_token ? (
                <Component {...props} />
            ):(
                <Redirect to="/"/>
            )
          }
      />
);

export default PrivateRoute
