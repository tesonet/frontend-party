import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { RoutesMap } from '@redux/ducks/routes';
import { useUserStatus } from '@hooks/useUserStatus';

export const withAuth = (Component: React.ComponentType<any>) => () => {
  const isAuthorised = useUserStatus();

  return isAuthorised ? <Component /> : <Redirect to={RoutesMap.LOGIN_ROUTE} />;
};
