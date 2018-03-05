import axios from 'axios';
import get from 'lodash.get';

import { API_ENDPOINT_AUTH } from '../../constants/endpoints';

/**
 * Requests an authentication token from the API.
 *
 * @param  {string} username
 * @param  {string} password
 *
 * @return {string} token
 * @throws Will throw an error if user is not authorized by the server.
 */
export const getAuthToken = (username, password) =>
  axios.post(API_ENDPOINT_AUTH, {
    username,
    password,
  })
    .then(response => get(response, 'data.token', null))
    .catch(() => {
      throw new Error('Authentication failed. Try again.'); // TODO: default to translation
    });
