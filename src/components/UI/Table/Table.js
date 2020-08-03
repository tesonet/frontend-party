import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({ data, columns }) => (
  <div className="table">
    <div data-test="table-header" className="table__header">
      {columns ? columns.map((column) => (
        <div className="table__column" key={column}>
          {column}
        </div>
      )) : null}
    </div>
    <div data-test="table-body" className="table__body">
      {data ? data.map((item) => (
        <div className="table__row" key={item.name + item.distance}>
          <div className="table__column">
            {item.name}
          </div>
          <div className="table__column">
            {item.distance}
          </div>
        </div>
      )) : null}
    </div>
  </div>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
