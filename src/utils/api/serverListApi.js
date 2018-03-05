import axios from 'axios';
import get from 'lodash.get';
import orderBy from 'lodash.orderby';

import { API_ENDPOINT_SERVERS } from '../../constants/endpoints';

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
    .then(response => orderBy(
      get(response, 'data'),
      ['name', 'distance'],
      ['dec', 'asc'],
    ))
    .catch(error => {
      throw new Error(get(error, 'response.data.message', 'Server error'));
    });
