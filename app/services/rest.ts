const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const post = (endpoint: string, payload: object) => {
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: defaultHeaders,
  })
    .then((response: Response) => response.json())
    .catch(err => {
      throw new Error(`Invalid server response: ${err}`);
    });
};

export const secureGet = (endpoint: string, token: string) => {
  return fetch(endpoint, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      Authorization: token,
    },
  })
    .then((response: Response) => response.json())
    .catch(err => {
      throw new Error(`Invalid server response: ${err}`);
    });
};
