import React from 'react';

export default function ServersListItemView({ name, distance }) {
  if ( ! name || ! distance) return null;

  return (
    <li>
      { name }
      { distance }
    </li>
  );
}

ServersListItemView.defaultProps = {
  name: null,
  distance: null
};
