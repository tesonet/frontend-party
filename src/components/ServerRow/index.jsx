import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.scss';

const Row = props => (
  <div
    className={cn(
      'row',
      styles.row,
      props.index === -1 && styles.head,
    )}
  >
    <div className="col-xs-8">{props.item.name}</div>
    <div className={cn('col-xs-4', styles.distance)}>
      {props.item.distance ? `${props.item.distance} km` : 'DISTANCE'}
    </div>
  </div>
);

Row.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.number,
  }).isRequired,
};

export default Row;
