import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth, servers } from '~/state';
import { Loader } from '~/components';

import logoutIcon from '<assets>/icons/logout.svg';

import './style.scss';

const compareByName = ({ name: a }, { name: b }) => (a > b ? 1 : -1);
const compareByDistance = ({ distance: a }, { distance: b }) => (a > b ? 1 : -1);

function Servers() {
  const dispatch = useDispatch();
  const serversData = useSelector(servers.selectors.getServersData);
  const isFetching = useSelector(servers.selectors.isFetching);
  const [displayedServers, setDisplayedServers] = useState([]);
  useEffect(() => {
    if (!serversData) {
      dispatch(servers.actions.requestServers());
    }
    if (!displayedServers.length && serversData) {
      setDisplayedServers(serversData);
    }
  }, [serversData, dispatch, displayedServers]);

  return (
    <div className="servers container">
      {isFetching && <Loader />}
      <div className="servers__header px-2 md:px-4">
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
      <div className="servers__content">
        <ul className="servers__content-list">
          <li className="server_content-header">
            <button
              onClick={() => setDisplayedServers([...serversData.sort(compareByName)])}
              type="button"
            >
              Server
            </button>
            <button
              onClick={() => setDisplayedServers([...serversData.sort(compareByDistance)])}
              type="button"
            >
              Distance
            </button>
          </li>
          {displayedServers.map(({ name, distance }, index) => (
            <li key={index}>
              <span>{name} </span>
              <span>{distance}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Servers;
