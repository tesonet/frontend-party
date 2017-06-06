import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './views/home/index';
import Login from './views/login/index';

const PrivateRoute = connect(state => (
  { token: state.ui.token }
))(({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      props.token ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}
        />
      )
    )}
  />
));

const Routes = () => (
  <div>
    <PrivateRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </div>
);

export default Routes;
