import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { auth } from '~/state';

function PrivateRoute({ ...props }) {
  const authToken = useSelector(auth.selectors.getToken);

  if (!authToken) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
