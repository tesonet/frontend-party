import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useLocalStorage } from '../hooks';

const ProtectedRoute = ({
  path,
  component,
  fallBackRoute,
  ...rest
}) => {
  const { token } = useLocalStorage();

  if (token) {
    return <Route path={path} component={component} {...rest} />;
  }

  return <Redirect to={fallBackRoute} />;
};

export default ProtectedRoute;
