import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {authService} from '../services/authService';
import {ROUTES} from '../routes';

// If not logged in - redirect to /login
export const ProtectedRoute = ({children, ...routeProps}) => (
  <Route
    {...routeProps}
    render={({location}) =>
      authService.isLoggedIn() ?
        children :
        (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: {from: location}
            }}
          />
        )
    }
  />
);
