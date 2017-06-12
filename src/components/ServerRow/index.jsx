import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.scss';

const Row = (props) => {
  const { item, isHeader } = props;
  return (
    <div
      className={cn(
        'row',
        styles.row,
        isHeader && styles.head,
      )}
    >
      <div className="col-xs-8">{item.name}</div>
      <div className={cn('col-xs-4', styles.distance)}>
        {item.distance ? `${item.distance} km` : 'DISTANCE'}
      </div>
    </div>
  );
};

Row.defaultProps = {
  isHeader: false,
};

Row.propTypes = {
  isHeader: PropTypes.bool,
  item: PropTypes.PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.number,
  }).isRequired,
};

export default Row;
