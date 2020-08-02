import * as React from 'react';
import { Route, Switch } from 'react-router';

import { RoutesMap } from '@redux/ducks/routes';
import { loadable } from '@utils/loadable';
import { withAuth } from '@containers/withAuth/WithAuth';

export const routes = [
  {
    path: RoutesMap.LOGIN_ROUTE,
    component: loadable(() => import('@pages/LoginPage')),
  },
  {
    path: RoutesMap.HOME_ROUTE,
    component: withAuth(loadable(() => import('@pages/HomePage'))),
  },
  {
    path: RoutesMap.UNKNOWN_ROUTE,
    component: loadable(() => import('@pages/NotFoundPage')),
  },
];

export const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.path} path={route.path} exact component={route.component} />
    ))}
  </Switch>
);
