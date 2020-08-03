const URL = 'https://playground.tesonet.lt/v1';
const HEADERS = { 'Content-Type': 'application/json' };

const status = (res) => {
  if (res.ok) {
    return res;
  }
  const err = new Error(res.statusText);
  err.response = res;
  throw err;
};

export const getToken = (username, password) => (
  fetch(`${URL}/tokens`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: HEADERS,
  })
    .then(status)
    .then((res) => res.json())
);

export const getServers = (token) => (
  fetch(`${URL}/servers`, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  })
    .then(status)
    .then((res) => res.json())
);
