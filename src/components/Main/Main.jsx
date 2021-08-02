import React from 'react';
import { useUserAuthentication } from '../../hooks';

const Main = () => {
  const { isAuthenticated } = useUserAuthentication();

  return (
    <div className="text-center tracking-wide text-gray-300 text-lg">
      {isAuthenticated ? 'Hey, nice to see you here, go take a look at some servers' : 'Login to see servers'}
    </div>
  );
};
export default Main;
