import React from 'react';
import ServersContainer from '../containers/Servers/ServersContainer';
import routes from './routes';

const requiredRoutes = [
  { path: '/servers', component: ServersContainer },
];

function routeExists(requiredRoute) {
  let exists = false;

  routes.forEach(route => {
    const wrapper = shallow(<div>{ route.component() }</div>);

    if (
      route.path === requiredRoute.path &&
      wrapper.find(requiredRoute.component).length > 0
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
