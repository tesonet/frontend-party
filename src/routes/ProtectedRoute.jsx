import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  path,
  Component,
  fallBackRoute,
  permissionRule,
  ...rest
}) => {
  if (permissionRule) {
    return <Route path={path} render={() => <Component />} {...rest} />;
  }

  return <Redirect to={fallBackRoute} />;
};

export default ProtectedRoute;
