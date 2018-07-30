import React from 'react';
import ServersContainer, { ROUTE_PATH as serversRoute } from '../containers/Servers/ServersContainer';

export default [
  {
    path: serversRoute,
    component: () => <ServersContainer />
  }
];
