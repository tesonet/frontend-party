import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';

import { Dashboard } from 'components/PageElements';
import { LoadingIndicator } from 'components/LoadingElements';
import { actions as authActions } from 'store/authorize';

import { PageWrapper, PageResponsiveContainer } from './atoms';

const Page = ({
  isLoading,
  history,
  withDashboard,
  center,
  children,
  ...rest
}) => {
  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(authActions.logOut(history)), [
    dispatch
  ]);

  return (
    <PageWrapper {...rest}>
      <PageResponsiveContainer
        alignItems={center && 'center'}
        justifyContent={center && 'center'}
      >
        {withDashboard && <Dashboard onClickLogout={logout} />}
        {isLoading && <LoadingIndicator />}
        {children}
      </PageResponsiveContainer>
    </PageWrapper>
  );
};

export default withRouter(Page);
