import React from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';
import { serverPropTypes } from '../../propTypes';

const TableBody = ({ servers }) => (
  <tbody>
    {servers.map(({ name, distance }) => (
      <tr key={`${name}${distance}`} className="text-black text-center bg-gray-100 hover:bg-gray-300">
        <TableCell>{name}</TableCell>
        <TableCell>{distance}</TableCell>
      </tr>
    ))}
  </tbody>
);

TableBody.propTypes = {
  servers: PropTypes.arrayOf(serverPropTypes).isRequired,
};

export default TableBody;
