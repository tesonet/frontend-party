import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';

import { Dashboard } from 'components/PageElements';
import { actions as authActions } from 'store/authorize';

import { Box } from 'components/Core';

import { PageResponsiveContainer, LoadingIndicator } from './atoms';

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
    <Box
      display='flex'
      flex='1'
      alignItems='center'
      flexDirection='column'
      {...rest}
    >
      <PageResponsiveContainer
        alignItems={center && 'center'}
        justifyContent={center && 'center'}
      >
        {withDashboard && <Dashboard onClickLogout={logout} />}
        {isLoading && <LoadingIndicator />}
        {children}
      </PageResponsiveContainer>
    </Box>
  );
};

export default withRouter(Page);
