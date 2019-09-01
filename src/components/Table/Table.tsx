import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';

import { IAPIResponse } from './Table.interface';

/**
 * Table to dipslay the data fetch from the api
 * Could be turned into scrollable table with fixed header
 */

const Table: React.FC = () => {
  const [servers, setServers] = useState<IAPIResponse[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsFetching(true);
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
        })
        .finally(() => {
          setIsFetching(false);
        });
    } else {
      setError(new Error('You do not have a permission to see the data'));
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
    <React.Fragment>
      {error && !isFetching ? <h1>Error: {error.message}</h1> : null}
      {isFetching ? <h1>Loading...</h1> : null}
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
    </React.Fragment>
  );
};

export default Table;
