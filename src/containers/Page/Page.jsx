import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';

import { Dashboard } from 'components/PageElements';
import { actions as authActions } from 'store/authorize';

import { PageWrapper } from './atoms';

const Page = ({ history, withDashboard, center, children }) => {
  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(authActions.logOut(history)), [
    dispatch
  ]);

  return (
    <PageWrapper
      alignItems={center && 'center'}
      justifyContent={center && 'center'}
    >
      {withDashboard && <Dashboard onClickLogout={logout} />}
      {children}
    </PageWrapper>
  );
};

export default withRouter(Page);
