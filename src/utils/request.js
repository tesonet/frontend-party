import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
const parseJSON = (response) => response.json();

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

/**
 * Serializing object
 * @param {object} data
 * @return {string}
 */
export const serialize = (data) => (
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
);
/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url Name of the route to be requested
 * @param  {string} options
 *
 * @return {object} The response data
 */
const request = (url, options) => fetch(url, options)
  .then(checkStatus)
  .then(parseJSON);

export default request;
