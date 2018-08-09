import React from 'react';
import LogoutContainer, { ROUTE_PATH as logoutRoute } from '../containers/Auth/Logout/LogoutContainer';
import ServersContainer, { ROUTE_PATH as serversRoute } from '../containers/Servers/ServersContainer';
import LoginContainer, { ROUTE_PATH as loginRoute } from '../containers/Auth/Login/LoginContainer';

export default [
  { path: serversRoute, component: (props) => <ServersContainer { ...props } /> },
  { path: loginRoute, component: (props) => <LoginContainer { ...props } /> },
  { path: logoutRoute, component: (props) => <LogoutContainer { ...props } /> }
];
