import axios from 'axios';
import get from 'lodash.get';
import orderBy from 'lodash.orderby';

import { API_ENDPOINT_SERVERS } from '../../constants/endpoints';
import { errors as copy } from '../../assets/copy/global.json';

/**
 * Orders the server list by distance and name values.
 *
 * @param  {Array} list
 *
 * @return {Array} ordered list
 */
export const orderServerList = list => orderBy(
  list,
  ['name', 'distance'],
  ['dec', 'asc'],
);

/**
 * Requests a private server list by passing an auth token to the API.
 *
 * @param  {string} token
 *
 * @return {Array} serverList
 * @throws Will throw an error if user is not authorized, or if a different error occurs on the server.
 */
export const getServerList = token =>
  axios.get(API_ENDPOINT_SERVERS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => orderServerList(get(response, 'data')))
    .catch(error => {
      throw new Error(get(error, 'response.data.message', copy.errorServerListRetrieve));
    });
