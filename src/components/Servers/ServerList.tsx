import React from 'react';
import SimpleBar from 'simplebar-react';
import { Server } from '../../redux/containers/servers/serversReducer';

interface Props {
  servers: Server[];
  loading: boolean;
  error: any;
}

const ServerList: React.SFC<Props> = ({ servers, loading, error }) => {
  if (loading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <SimpleBar className="servers__list">
      <ul>
        {servers.map(x => (
          <li key={`${x.name} - ${x.distance}`} className="servers__list-item">
            <div>{x.name}</div>
            <div>{`${x.distance} km`}</div>
          </li>
        ))}
      </ul>
    </SimpleBar>
  );
};

export default ServerList;