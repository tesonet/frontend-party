import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from './views/header/container';
import Servers from './views/servers/container';
import Login from './views/login/container';

const PrivateRoutes = connect(state => (
  { token: state.ui.token }
))((props) => {
  if (props.token) {
    return (
      <div className="container-fluid">
        <Header />
        <Route exact path="/" component={Servers} />
      </div>
    );
  }
  if (props.location.pathname !== '/login') {
    return <Redirect to="/login" />;
  }
  return null;
});

const Routes = () => (
  <div>
    <Route component={PrivateRoutes} />
    <Route exact path="/login" component={Login} />
  </div>
);

export default Routes;
