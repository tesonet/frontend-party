import { URL_TOKENS, URL_SERVERS } from '../config/consts';

const login = async (username, password) => {
  const body = {
    'username': username,
    'password': password
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  const response = await fetch(URL_TOKENS, options);

  if (response.status === 200) {
    const data = await response.json();
    return { username, token: data.token, status: response.status };
  }
  if (response.status === 401) {
    const data = await response.json();
    return { username, token: null, status: response.status, message: data.message };
  }
};

const servers = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  const response = await fetch(URL_SERVERS, options);

  if (response.status === 200) {
    const data = await response.json();
    return { list: data, status: response.status };
  }

  if (response.status === 401) {
    const data = await response.json();
    return { status: response.status, message: data.message };
  }
};

export default { login, servers }