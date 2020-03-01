import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import { checkAuth } from './store/thunk/auth';

const App = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  let routes = (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Redirect to="/home" />
    </Switch>
  );

  if (!token) {
    routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return routes;
};
export default App;
