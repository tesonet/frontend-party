import React from 'react';
import ActionButton from './ActionButton';
import sort from '../../store/actions/sort';
import './Panel.scss';

const Panel = () => {
  return (
    <div className="Panel">
      <ActionButton action={sort.servers} options={{ text: 'server' }} />
      <ActionButton action={sort.distance} options={{ text: 'distance' }} />
    </div>
  )
}

export default Panel;