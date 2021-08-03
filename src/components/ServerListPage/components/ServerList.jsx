import React from 'react';
import PropTypes from 'prop-types';

import { sortConfigDefaultProps, sortConfigPropTypes } from '../propTypes';
import { TableHead, TableBody } from './Table';

const ServerList = ({ servers, handleSortAction, sortConfig }) => (
  <table className="table-fixed m-auto">
    <TableHead handleSortAction={handleSortAction} sortConfig={sortConfig} />
    <TableBody servers={servers} />
  </table>
);

ServerList.defaultProps = {
  sortConfig: sortConfigDefaultProps,
};

ServerList.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      distance: PropTypes.number,
    }),
  ).isRequired,
  handleSortAction: PropTypes.func.isRequired,
  sortConfig: sortConfigPropTypes,
};

export default ServerList;
