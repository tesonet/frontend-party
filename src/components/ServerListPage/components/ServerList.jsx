import React from 'react';
import PropTypes from 'prop-types';

import { ASCENDING, DESCENDING } from '../config/constatns';
import SortableHeadRow from './SortableHeadRow';

const ServerList = ({ servers, handleSortAction, sortDirection }) => (
  <table className="table-fixed m-auto">
    <thead>
      <tr className="text-gray-300 bg-tesonet-purple-900 font-bold">
        <th className="w-1/3 p-2">Server</th>
        <th className="w-1/3 p-2">
          <SortableHeadRow
            name="Distance"
            handleSortAction={handleSortAction}
            sortDirection={sortDirection}
          />
        </th>
      </tr>
    </thead>
    <tbody>
      {servers.map(({ name, distance }) => (
        <tr className="bg-gray-100 text-black text-center">
          <td className="p-2">{name}</td>
          <td className="p-2">{distance}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

ServerList.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      distance: PropTypes.number,
    }),
  ).isRequired,
  handleSortAction: PropTypes.func.isRequired,
  sortDirection: PropTypes.oneOf([null, ASCENDING, DESCENDING]).isRequired,
};

export default ServerList;
