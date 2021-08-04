import React from 'react';

import { CommonContainer } from '@Common';

import { useUserAuthentication } from '../../hooks';
import { LOGGED_IN_MESSAGE, LOGGED_OUT_MESSAGE } from './config/constants';

const Main = () => {
  const { isAuthenticated } = useUserAuthentication();

  return (
    <CommonContainer>
      {isAuthenticated ? LOGGED_IN_MESSAGE : LOGGED_OUT_MESSAGE}
    </CommonContainer>
  );
};
export default Main;
