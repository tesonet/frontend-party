import React from 'react';
import cn from 'classnames';
import styles from './row.scss';

const Row = props => (
  <div
    className={cn(
      'row',
      styles.row,
      props.index === -1 && styles.head
    )}
  >
    <div className="col-md-9 col-xs-12">{props.item.name}</div>
    <div className={cn('col-md-3 col-xs-12', styles.distance)}>
      {props.item.distance ? `${props.item.distance} km` : 'DISTANCE'}
    </div>
  </div>
);

export default Row;
