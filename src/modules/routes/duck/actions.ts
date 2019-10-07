import { createAction } from '@redux/createAction';

export enum RouteActionType {
  Push = 'ROUTE_PUSH',
}

export const routePath = {
  root: '/',
  login: '/login',
  error: '/error',
  any: '*',
};

const push = (path: string) => createAction(RouteActionType.Push, { path });

export const routeActions = {
  open: (path: string) => push(path),
};
