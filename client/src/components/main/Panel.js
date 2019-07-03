import React from 'react';
import ActionButton from './ActionButton';
import './Panel.scss';

const Panel = () => {
  return (
    <div className="Panel">
      <ActionButton options={{ text: 'server' }} />
      <ActionButton options={{ text: 'distance' }} />
    </div>
  )
}

export default Panel;