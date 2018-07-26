import React from 'react';
import ServersListItemView from './ServersListItemView';

export default function ServersListView({ data }) {
  if ( ! data.length) return null;

  return (
    <section>
      <header>
        Server
        Distance
      </header>

      <ul>
        {
          data.map(
            (server, i) => <ServersListItemView
              key={ i }
              name={ server.name }
              distance={ server.distance }
            />
          )
        }
      </ul>
    </section>
  );
}

ServersListView.defaultProps = {
  data: []
};
