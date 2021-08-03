import React from 'react';
import { TOKEN } from '@Config/constants';

import { useLocalStorage, useRedirect, useUserAuthentication } from '../../../hooks';
import Item from './Item';

const Items = ({ isMobileExpanded }) => {
  const { toMain, toLogin, toServerList } = useRedirect();
  const { isAuthenticated, updateUserAuthentication } = useUserAuthentication();
  const { removeValue } = useLocalStorage(TOKEN);

  const visibleInMobileClass = isMobileExpanded ? 'visible' : 'hidden';

  const itemsVisibleForAuthenticated = (
    <>
      <Item onClick={toServerList} label="Servers" />
      <Item
        onClick={() => {
          removeValue();
          updateUserAuthentication(false);
        }}
        label="Logout"
      />
    </>
  );

  return (
    <div className={`${visibleInMobileClass} w-full md:flex md:items-end md:visible md:w-auto`}>
      <Item onClick={toMain} label="Main" />
      {!isAuthenticated && <Item onClick={toLogin} label="Login" />}
      {isAuthenticated && itemsVisibleForAuthenticated}
    </div>
  );
};

export default Items;
