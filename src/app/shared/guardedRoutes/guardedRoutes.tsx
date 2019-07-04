import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

type RoutePropsWithComponent = RouteProps & Required<Pick<RouteProps, 'component'>>;

export const NonAuthenticatedRouteConnectable: React.FC<RoutePropsWithComponent> = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (rest as {authenticationSlice: any}).authenticationSlice.isAuthenticated
    ? <Redirect to={'/'} />
    : <Component {...props} />
  }/>
);

export const AuthenticatedRouteConnectable: React.FC<RoutePropsWithComponent> = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (rest as {authenticationSlice: any}).authenticationSlice.isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { redirectedFrom: props.location } }} />
  }/>
);

const mapStateToProps = (storeState: any) => ({
  authenticationSlice: storeState.authentication
});

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any)=> ({
  ...stateProps,
  // ...dispatchProps,
  ...ownProps,
});

export const NonAuthenticatedRoute = connect(mapStateToProps, undefined, mergeProps)(NonAuthenticatedRouteConnectable);

export const AuthenticatedRoute = connect(mapStateToProps, undefined, mergeProps)(AuthenticatedRouteConnectable);