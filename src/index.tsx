import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Page404 from './components/ErrorPages/Page404';
import PrivateRoute from './components/Routes/PrivateRoute';
import ServerList from './components/ServerList/ServerList';

import 'simplebar/dist/simplebar.min.css';
import './index.scss';

const App: React.FC = () => (
  <div id="app">
    <div className="content">
      <Router>
        <Switch>
          <Route exact path={['/', '/login']} component={Login} />
          <Switch>
            <PrivateRoute path='/servers' component={ServerList} />
            <Route><Page404 /></Route>
          </Switch>
        </Switch>
      </Router>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
