import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { State } from '@redux/reducer';
import { getToken } from '@utils/token';
import { RoutesMap } from '@redux/ducks/routes';

export const withAuth = (Component: React.ComponentType<any>) => () => {
  const { isLoggedIn, isLoading } = useSelector((state: State) => state?.user);
  const hasToken = !!getToken();

  return isLoggedIn && hasToken && !isLoading ? <Component /> : <Redirect to={RoutesMap.LOGIN_ROUTE} />;
};
