import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, Servers } from './pages';

const App = () => (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/servers' component={Servers} />
  </Switch>
);

export default App;
