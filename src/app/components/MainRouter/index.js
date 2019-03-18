import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ServerPage from '../../containers/ServerPage';
import SigninPage from '../../containers/SigninPage';

const MainRouter = props => (
  <Switch>
    <Route exact path="/" component={SigninPage} />
    <Route exact path="/servers" component={ServerPage} />
    <Route path="*" render={() => <Redirect to="/" />} />
  </Switch>
);

export default MainRouter;
