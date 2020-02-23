import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './components/shared/PrivateRoute';

const Auth = lazy(() => import('./components/pages/Auth'));
const Servers = lazy(() => import('./components/pages/Servers'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" exact>
            <Auth />
          </Route>
          <PrivateRoute path="/" exact>
            <Servers />
          </PrivateRoute>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default hot(App);
