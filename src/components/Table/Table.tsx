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

  /**
   * Sorting could be extracted to a 'util' function
   * lodash lib could be used too - but it is rather heavy
   */
  const sort = (type: string) => {
    if (servers.length < 2) return;
    const copyServers = [...servers];
    switch (type) {
      case 'name':
        copyServers.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
        break;
      case 'distance':
        copyServers.sort((a, b) =>
          a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
        );
        break;
      default:
        console.warn('invalid sorting property');
        break;
    }
    setServers(copyServers);
  };

  return (
    <table className={'w-full'}>
      <tbody>
        <tr className={'border-solid bg-gray-200 h-16'}>
          <th align={'left'}>
            <span className={'mx-4'} onClick={() => sort('name')}>
              SERVER
            </span>
          </th>
          <th align={'right'}>
            <span className={'mx-4'} onClick={() => sort('distance')}>
              DISTANCE
            </span>
          </th>
        </tr>
        {error ? <h1>Error: {error.message}</h1> : null}
        {servers.map(server => (
          <tr
            key={`${server.name}${server.distance}`}
            className={'border-solid border-t-2 border-gray-300 text-gray-600'}
          >
            <td align={'left'} className={'py-3'}>
              <span className={'mx-4'}>{server.name}</span>
            </td>
            <td align={'right'}>
              <span className={'mx-4'}>{server.distance} km </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
