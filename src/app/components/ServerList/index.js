import React from 'react';
import { ServerListItem } from '../';
import './ServerList.scss';

const ServerList = props => (
  <div className="main-container">
    <div className="cols-title server-box">
      <div>Server</div>
      <div>Distance</div>
    </div>

    <ul className="list-style">
      {props.servers.map(servers => (
        <ServerListItem
          server={servers}
          key={`${servers.name} : ${servers.distance}`}
        />
      ))}
    </ul>
  </div>
);

export default ServerList;
