import {
  Table, TableBody, TableCell, TableHead, TableRow,
} from '@material-ui/core';
import React from 'react';
import { Servers } from 'store/modules/servers/types';

interface Props {
  servers: Servers
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
        servers.map(({ name, distance }) => (
          <TableRow key={`${name}${distance}`}>
            <TableCell>{name}</TableCell>
            <TableCell align="right">
              {distance}
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
