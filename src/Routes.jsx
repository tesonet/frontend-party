import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from './views/Header';
import Servers from './views/Servers';
import Login from './views/Login';

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
