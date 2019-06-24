import React from 'react';
import {Redirect, Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ServersList from '../components/ServersList';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login';

export const history = createHistory();

const AppRouter = () => {
  return (

    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute exact path='/login' component={Login}/>
          <PrivateRoute
            exact
            component={ServersList}
            path='/servers'
          />
          <Redirect from='/' to='/login'/>
        </Switch>
      </div>
    </Router>

  );
};

export default AppRouter;
