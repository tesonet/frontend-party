import React from 'react';
import PropTypes from 'prop-types';

import { ASCENDING, DESCENDING } from '../config/constants';
import { TableHead, TableBody } from './Table';

const ServerList = ({ servers, handleSortAction, sortConfig }) => (
  <table className="table-fixed m-auto">
    <TableHead handleSortAction={handleSortAction} sortConfig={sortConfig} />
    <TableBody servers={servers} />
  </table>
);

ServerList.defaultProps = {
  sortConfig: {
    distance: null,
    name: null,
  },
};

ServerList.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      distance: PropTypes.number,
    }),
  ).isRequired,
  handleSortAction: PropTypes.func.isRequired,
  sortConfig: PropTypes.shape({
    distance: PropTypes.oneOf([null, ASCENDING, DESCENDING]),
    name: PropTypes.oneOf([null, ASCENDING, DESCENDING]),
  }),
};

export default ServerList;
