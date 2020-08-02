import * as React from 'react';
import { useDispatch } from 'react-redux';

import { actions } from '@redux/ducks/auth';
import { Header } from '@components/Header/Header';

export const HeaderContainer = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.logout());
  };

  return <Header onLogout={handleLogout} />;
};

export default HeaderContainer;
