import React from 'react';
import ServersListItemView from './ServersListItemView';

const defaultProps = {
  data: []
};

export default function ServersListView({ data }) {
  if ( ! data.length) return null;

  return (
    <section className="partial_servers-servers-list">
      <header>
        <div className="row py-2 text-uppercase">
          <div className="col">Server</div>
          <div className="col text-right">Distance</div>
        </div>
      </header>

      <div>
        {
          data.map(
            (server, i) => <ServersListItemView
              key={ i }
              name={ server.name }
              distance={ server.distance }
            />
          )
        }
      </div>
    </section>
  );
}

ServersListView.defaultProps = defaultProps;
