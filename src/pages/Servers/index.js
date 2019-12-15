import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth, servers } from '~/state';
import { Loader } from '~/components';

import logoutIcon from '<assets>/icons/logout.svg';

import './style.scss';

function Servers() {
  const dispatch = useDispatch();
  const serversData = useSelector(servers.selectors.getServersData);
  const isFetching = useSelector(servers.selectors.isFetching);

  useEffect(() => {
    if (!serversData) {
      dispatch(servers.actions.requestServers());
    }
  });
  console.log(serversData);
  const [displayedServers, setDisplayedServers] = useState(serversData);

  return (
    <div className="servers container">
      {!isFetching && <Loader />}
      <div className="servers__header">
        <h1>
          testio<mark>.</mark>
        </h1>
        <button
          onClick={() => dispatch(auth.actions.logout())}
          type="button"
          className="servers__header-logout"
        >
          <img src={logoutIcon} alt="logout" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Servers;
