import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Table.module.scss';

const Cell = ({ children }) => {
  return <div className={styles['cell']}>{children}</div>;
};

Cell.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cell;
