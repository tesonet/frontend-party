import React  from 'react';
import { Redirect } from 'react-router-dom';

import useToken from '../hooks/use-token';
import useServers from '../hooks/use-servers';
import routes from '../routes';

import './Servers.css';

export const Servers = () => {
  const {token, resetToken} = useToken();
  const {servers, sortServers} = useServers();

  if (!token) {
    return <Redirect to={routes.login} />
  }

  return (
    <div className="servers-list">
      <button onClick={()=>{resetToken()}}>Logout</button>
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
