import React from 'react';

export default function ServersListItemView({ name, distance, unit }) {
  if ( ! name || ! distance) return null;

  return (
    <div className="partial_servers-servers-list-item row py-2">
      <div className="col">{ name }</div>
      <div className="col text-right">{ distance } { unit }</div>
    </div>
  );
}

ServersListItemView.defaultProps = {
  name: null,
  distance: null,
  unit: 'km'
};
