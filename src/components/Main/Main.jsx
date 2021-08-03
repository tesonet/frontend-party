import React from 'react';

import { CommonContainer } from '@Common';

import { useUserAuthentication } from '../../hooks';

const Main = () => {
  const { isAuthenticated } = useUserAuthentication();

  return (
    <CommonContainer>
      {isAuthenticated ? 'Hey, nice to see you here, go take a look at some servers' : 'Login to see servers'}
    </CommonContainer>
  );
};
export default Main;
