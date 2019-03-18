import React from 'react';
import './ServerListItem.scss';

const ServerListItem = ({ server }) => (
  <li>
    <div className="server-box">
      <div> {server.name} </div>
      <div> {server.distance} km </div>
    </div>
  </li>
);

export default ServerListItem;
