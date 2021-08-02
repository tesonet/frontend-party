import React from 'react';
import TableCell from './TableCell';

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

export default TableBody;
