import React from 'react';
import ServersContainer from '../containers/Servers/ServersContainer';
import routes from './routes';

const requiredRoutes = [
  {
    path: '/servers'
  }
];

function routeExists(requiredRoute) {
  let exists = false;

  routes.forEach(route => {
    if (
      route.path === requiredRoute.path &&
      route.component().type === ServersContainer
    ) {
      exists = true;
    }
  });

  return exists;
}

it('contains necessary routes', () => {
  for (let requiredRoute of requiredRoutes) {
    expect(routeExists(requiredRoute)).toBe(true);
  }
});
