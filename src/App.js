import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles';
import Login from './pages/login';
import Servers from './pages/servers';
import { AuthorizedRoute, UnauthorizedRoute } from './pages/routes';

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <UnauthorizedRoute path="/" exact component={Login} />
        <AuthorizedRoute path="/servers" component={Servers} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
