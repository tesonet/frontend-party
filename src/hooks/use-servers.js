import { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useToken from '../hooks/use-token';
import { serverListActions } from '../reducers/server-list';

export default () => {
  const dispatch = useDispatch();
  const {token} = useToken();

  const servers = useSelector(state => state.serverList.servers);
  const setServers = useCallback(
    (servers) => {
      dispatch({
        type: serverListActions.setServers,
        payload: servers,
      });
    },
    [dispatch]
  );

  const [serversLoading, setServersLoading] = useState(true);

  const sortServers = useCallback(
    order => {
      dispatch({
        type: serverListActions.sortServers,
        payload: order,
      });
    },
    [dispatch]
  );

  useEffect( () => {
    const fetchServers = async () => {
      const response = await fetch(
        'http://playground.tesonet.lt/v1/servers', {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json'
        },
        mode: 'cors',
      });

      if (response.ok) {
        setServers(await response.json());
      }
      setServersLoading(false);
    };
    fetchServers();

  }, [token, setServers]);

  return {servers, sortServers, serversLoading};
};