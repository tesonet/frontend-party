import React from 'react';
import LoginContainer from '../../containers/Auth/Login/LoginContainer';
import LogoutContainer from '../../containers/Auth/Logout/LogoutContainer';
import ServersContainer from '../../containers/Servers/ServersContainer';
import routes from '../routes';

const requiredRoutes = [
  { path: '/servers', component: ServersContainer },
  { path: '/login', component: LoginContainer },
  { path: '/logout', component: LogoutContainer }
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
