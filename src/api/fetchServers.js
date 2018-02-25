const URL = 'http://playground.tesonet.lt/v1/servers';

export default token =>
  fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json());
