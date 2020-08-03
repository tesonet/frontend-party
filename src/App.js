import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import ServersListPage from './pages/ServersListPage';
import { PrivateRoute } from './utils/privateRouterHelper';

const App = () => {
  const { token } = useSelector(({ auth }) => auth);
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          path="/login"
          render={() => (token ? (<Redirect to="/servers" />) : (<LoginPage />))}
        />
        <PrivateRoute path="/servers" component={ServersListPage} />
      </Switch>
    </>
  );
};

export default App;
