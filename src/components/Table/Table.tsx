import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

import { IAPIResponse } from './Table.interface';

const Table: React.FC = () => {
  const [servers, setServers] = useState<IAPIResponse[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const request: Promise<AxiosResponse> = axios.get('http://playground.tesonet.lt/v1/servers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      request
        .then(res => {
          setServers(res.data);
          setError(null);
        })
        .catch(err => {
          setError(err);
        });
    }
  }, []);

  return (
    <table className={'w-full'}>
      <tbody>
        <tr className={'border-solid'}>
          <th align={'left'}>SERVER</th>
          <th align={'right'}>DISTANCE</th>
        </tr>
        {error ? <h1>Error: {error.message}</h1> : null}
        {servers.map(server => (
          <tr
            key={`${server.name}${server.distance}`}
            className={'border-solid border-t-2 border-gray-300 text-gray-600'}
          >
            <td align={'left'} className={'py-3'}>
              {server.name}
            </td>
            <td align={'right'}>{server.distance} km</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
