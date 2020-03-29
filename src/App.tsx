import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './components/Login';
import { Servers } from './components/Servers';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/servers" exact component={Servers} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
