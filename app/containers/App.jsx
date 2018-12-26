import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import NotFoundPage from 'app/containers/NotFoundPage';
import ServersPage from 'app/containers/ServersPage';
import LoginPage from 'app/containers/LoginPage';
import { Pages } from 'app/utils/routes';

const App = () => (
  <div className="app-wrapper">
    <Switch>
      <Route
        exact path={Pages.login.route} render={
          (props) => (<LoginPage {...props} title={Pages.login.title}/>)
        }/>
      <Route
        exact path={Pages.servers.route} render={
          (props) => (<ServersPage {...props} title={Pages.servers.title}/>)
        }/>
      <Route
        exact path={Pages.notFound.route} render={
          (props) => (<NotFoundPage {...props} title={Pages.notFound.title}/>)
        }/>
    </Switch>
  </div>
);

export default App;
