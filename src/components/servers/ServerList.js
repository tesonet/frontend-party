import React from 'react';
import ServerSummary from './ServerSummary';
import "./server-list.scss";

const ServerList = () => {
  return (
    <div className="server-wrapper">
        <table>
            <thead>
                <tr>
                    <th>SERVER</th>
                    <th>DISTANCE</th>
                </tr>
            </thead>
            <tbody>
                <ServerSummary />
                <ServerSummary />
                <ServerSummary />
                <ServerSummary />
            </tbody>
        </table>
    </div>
  )
}

export default ServerList;