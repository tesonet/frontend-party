import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import ServersPage from './servers/ServersPage';
import { useSelector } from 'react-redux';
import { RootState } from './rootReducer';
import NotFoundPage from './NotFoundPage';

const App = () => {
  const { accessToken } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    localStorage.setItem('token', accessToken);
  }, [accessToken]);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {accessToken ? <Redirect to="/servers" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/servers">{accessToken ? <ServersPage /> : <Redirect to="/login" />}</Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
