import * as React from 'react';
import { Route, Switch } from 'react-router';

import { RoutesMap } from '@redux/ducks/routes';
import { loadable } from '@utils/loadable';
import { withAuth } from '@containers/withAuth/WithAuth';
import { Loader } from '@components/Loader/Loader';

export const routes = [
  {
    path: RoutesMap.LOGIN_ROUTE,
    component: loadable(() => import('@pages/LoginPage'), { fallback: <Loader /> }),
  },
  {
    path: RoutesMap.HOME_ROUTE,
    component: withAuth(loadable(() => import('@pages/HomePage'), { fallback: <Loader /> })),
  },
  {
    path: RoutesMap.UNKNOWN_ROUTE,
    component: loadable(() => import('@pages/NotFoundPage'), { fallback: <Loader /> }),
  },
];

export const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.path} path={route.path} exact component={route.component} />
    ))}
  </Switch>
);
