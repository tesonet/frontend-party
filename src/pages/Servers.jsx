import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingIndicator } from 'components/LoadingElements';
import { actions as authActions } from 'store/authorize';
import { actions as serversActions } from 'store/servers';

const ServerList = ({ history }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.servers.isLoading);
  const error = useSelector(state => state.servers.error);
  const servers = useSelector(state => state.servers.servers);

  useEffect(() => {
    dispatch(serversActions.getServers());
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(authActions.logOut(history));
        }}
      >
        Log out
      </button>
      {error ? (
        error
      ) : (
        <div>{isLoading ? <LoadingIndicator /> : JSON.stringify(servers)}</div>
      )}
    </div>
  );
};

export default ServerList;
