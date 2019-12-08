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
    return (
      <div className="servers__list-loading">
        <h1>L O A D I N G ...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="servers__list-error">
        <h1>Whoops... :( Something went wrong - please try refreshing your page!</h1>
      </div>
    );
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