import React from 'react';
import { useLocalStorage, useRedirect, useUserAuthentication } from '../../hooks';

import Item from './Item';

const Items = () => {
  const { toMain, toLogin, toServerList } = useRedirect();
  const { isAuthenticated, updateUserAuthentication } = useUserAuthentication();
  const { removeToken } = useLocalStorage();

  const itemsVisibleForAuthenticated = (
    <>
      <Item onClick={toServerList} label="Servers" />
      <Item
        onClick={() => {
          removeToken();
          updateUserAuthentication(false);
        }}
        label="Logout"
      />
    </>
  );

  return (
    <>
      <Item onClick={toMain} label="Main" />
      {!isAuthenticated && <Item onClick={toLogin} label="Login" />}
      {isAuthenticated && itemsVisibleForAuthenticated}
    </>
  );
};

export default Items;
