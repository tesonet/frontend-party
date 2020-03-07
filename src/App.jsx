import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, Servers } from 'pages';
import { checkAuth } from 'utils/authorization';

const App = () => (
  <Switch>
    <Route path='/servers' component={checkAuth(Servers)} />
    <Route path='/' component={Login} />
  </Switch>
);

export default App;
