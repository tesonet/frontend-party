import React from 'react';
import cn from 'classnames';
import styles from './styles.scss';

const Row = props => (
  <div
    className={cn(
      'row',
      styles.row,
      props.index === -1 && styles.head
    )}
  >
    <div className="col-xs-9">{props.item.name}</div>
    <div className={cn('col-xs-3', styles.distance)}>
      {props.item.distance ? `${props.item.distance} km` : 'DISTANCE'}
    </div>
  </div>
);

export default Row;
