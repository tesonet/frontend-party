import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './components/Login';
import { ServersList } from './components/ServersList';
import './index.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/servers" exact component={ServersList} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
