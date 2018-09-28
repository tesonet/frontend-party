// Some of this code could probably be extracted to a small reusable utility module, but I'm trying
// not to overengineer this.

const AUTHORIZATION_HEADER = 'Authorization';
const CONTENT_TYPE_HEADER = 'Content-Type';

const JSON_MIME_TYPE = 'application/json';

const TOKENS_ENDPOINT = 'http://playground.tesonet.lt/v1/tokens';
const SERVERS_ENDPOINT = 'http://playground.tesonet.lt/v1/servers';

class HTTPError extends Error {
  constructor(message) {
    super(message);
    this.name = 'HTTPError';
  }
}

const fetchJSON = (resource, {method, headers, body}) => {
  const requestOptions = {
    method,
    headers
  };

  if (body !== undefined) {
    requestOptions.headers = {
      ...requestOptions.headers,
      [CONTENT_TYPE_HEADER]: JSON_MIME_TYPE
    };
    requestOptions.body = JSON.stringify(body);
  }

  return window
    .fetch(resource, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new HTTPError();
      }
    });
};

const parseServer = server => {
  // Server names returned by the API contain numbers.
  // Sorting numbers lexicographically can yield unexpected results.
  // Extract the country and number components so we can sort servers numerically.
  const [country, numberString] = server.name.split(' #');
  return {
    ...server,
    country,
    number: parseInt(numberString, 10)
  };
};

export default {
  HTTPError,

  createToken(username, password) {
    const body = {username, password};
    return fetchJSON(TOKENS_ENDPOINT, {method: 'POST', body})
      .then(response => response.token);
  },

  getServers(token) {
    const headers = {[AUTHORIZATION_HEADER]: token};
    return fetchJSON(SERVERS_ENDPOINT, {headers})
      .then(servers => servers.map(parseServer));
  }
};
