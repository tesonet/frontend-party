import { Loading } from '@components/Loading';
import { LoginContainer } from '@modules/auth/LoginContainer';
import { withAuthAccess } from '@modules/auth/withAuthAccess';
import { ServerList } from '@modules/servers/ServerList';
import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import { compose } from 'redux';

import { Error404, Error500 } from '../ErrorPages';

import { routePath } from './actions';

export const routes: RouteConfig[] = [
  {
    path: routePath.login,
    component: () => (
      <React.Suspense fallback={<Loading />}>
        <LoginContainer />
      </React.Suspense>
    ),
  },
  {
    path: routePath.root,
    component: compose(withAuthAccess)(() => (
      <React.Suspense fallback={<Loading />}>
        <ServerList />
      </React.Suspense>
    )),
  },
  {
    path: routePath.error,
    component: Error500,
  },
  {
    path: routePath.any,
    component: Error404,
  },
];
