import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Table.module.scss';

const Body = ({ children }) => {
  return <div className={styles['body']}>{children}</div>;
};

Body.propTypes = {
  children: PropTypes.node.isRequired
};

export default Body;
