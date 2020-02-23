import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Cell from './Cell';
import Body from './Body';
import styles from './Table.module.scss';

const Table = ({ children }) => {
  return <div className={styles['table']}>{children}</div>;
};

Table.Row = Row;
Table.Cell = Cell;
Table.Body = Body;

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default Table;
