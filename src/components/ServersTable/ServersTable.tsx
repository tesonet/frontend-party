import {
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import React from 'react';

interface Props {
  servers: [
    {
      distance: string,
      name: string,
    }
  ]
}

const ServersTable = ({ servers }: Props) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>
          Server
        </TableCell>
        <TableCell align="right">
          Distance
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {
        servers.map((server) => (
          <TableRow key={`${server.name}${server.distance}`}>
            <TableCell>{server.name}</TableCell>
            <TableCell align="right">
              {server.distance}
              {' '}
              km
            </TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
);

export default ServersTable;
