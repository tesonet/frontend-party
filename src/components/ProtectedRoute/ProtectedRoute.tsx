import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes';

interface Props {
  children: React.ReactNode;
  path: string;
}

export const ProtectedRoute: React.FC<Props> = ({ children, path }) => (
  <Route
    path={path}
    render={({ location }) =>
      localStorage.getItem('auth-token') ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: ROUTES.login,
            state: { from: location }
          }}
        />
      )
    }
  />
);
