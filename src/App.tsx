import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login/Login';
import Page404 from './components/ErrorPages/Page404';
import PrivateRoute from './components/Routes/PrivateRoute';
import Servers from './components/Servers/Servers';

const AppComponent: React.FC = () => (
  <div id="app">
    <div className="content">
      <Switch>
        <Route exact path={['/', '/login']} component={Login} />
        <Switch>
          <PrivateRoute path='/servers' component={Servers} />
          <Route><Page404 /></Route>
        </Switch>
      </Switch>
    </div>
  </div>
);

const App = connect()(AppComponent);
export default App;