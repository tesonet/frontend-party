import { Loading } from '@components/Loading';
import { withAuthAccess } from '@modules/auth/withAuthAccess';
import * as Loadable from 'react-loadable';
import { RouteConfig } from 'react-router-config';
import { compose } from 'redux';

import { Error404, Error500 } from '../ErrorPages';

import { routePath } from './actions';

export const routes: RouteConfig[] = [
  {
    path: routePath.login,
    component: Loadable({
      loader: () =>
        import('@modules/auth/LoginContainer').then(
          ({ LoginContainer }) => LoginContainer,
        ),
      loading: Loading,
    }),
  },
  {
    path: routePath.root,
    component: Loadable({
      loader: () =>
        import('@modules/servers/ServerList').then(({ ServerList }) =>
          compose(withAuthAccess)(ServerList),
        ),
      loading: Loading,
    }),
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
