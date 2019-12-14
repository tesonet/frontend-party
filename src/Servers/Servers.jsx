import React, {useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useToken from '../hooks/use-token';
import { serverListActions } from '../reducers/server-list';

import './Servers.css';

export const Servers = () => {

  const dispatch = useDispatch();
  const [token] = useToken();

  const servers = useSelector(state => state.serverList.servers);
  const setServers = useCallback(
    (servers) => {
      dispatch({ type: serverListActions.setServers, payload: servers });
    },
    [dispatch]
  );

  const sortServers = useCallback(
    order => {
      dispatch({type: serverListActions.sortServers, payload: order});
    },
    [dispatch]
  );

  useEffect( () => {
    const fetchServers = async () => {
      const response = await fetch('http://playground.tesonet.lt/v1/servers', {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json'
        },
        mode: 'cors',
      });

      if (response.ok) {
        setServers(await response.json());
      }
    };
    fetchServers();

  }, [token, setServers])

  return (
    <div className="servers-list">
      <table>
        <tr>
          <th onClick={() => sortServers('name')}>Server</th>
          <th onClick={() => sortServers('distance')}>Distance</th>
        </tr>
          {servers.map(({ name, distance }, key)=>(
            <tr key={key}>
              <td>{name}</td>
              <td>{distance}</td>
            </tr>
          ))}
      </table>
    </div>
    );
}
