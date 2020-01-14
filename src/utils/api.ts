const url = "http://playground.tesonet.lt/v1";

export const fetchServers = (token: string): Promise<Response> => {
  return fetch(`${url}/servers`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
};

export const fetchToken = (
  username: string,
  password: string
): Promise<string> => {
  return fetch(`${url}/tokens`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data.token);
};
