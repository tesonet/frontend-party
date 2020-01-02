import React from 'react';
import { Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import GlobalStyle from './styles';
import Login from './pages/login';
import Servers from './pages/servers';
import { AuthorizedRoute, UnauthorizedRoute } from './routes';

export const history = createBrowserHistory();

const App = () => (
  <>
    <GlobalStyle />
    <Router history={history}>
      <Switch>
        <AuthorizedRoute path="/servers" component={Servers} />
        <UnauthorizedRoute path="/" component={Login} />
      </Switch>
    </Router>
  </>
);

export default App;
