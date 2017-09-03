import 'whatwg-fetch';

import auth from '~/auth';


const JSON_HEADER = 'application/json;charset=utf-8';


const call = async (method, url, options = {}) => {
  const token = auth.utils.getToken();
  const {data} = options;
  const params = {
    method,
    headers: {
      Accept: JSON_HEADER,
    },
  };

  if (data != null) {
    params.body = JSON.stringify(data);
    params.headers['Content-Type'] = JSON_HEADER;
  }

  if (token) params.headers.Authorization = `Bearer ${token}`;


  try {
    const res = await fetch(`/api/${url}`, params);
    const json = await res.json();
    if (res.status >= 200 && res.status < 300) return json;
    throw json;
  } catch (err) {
    throw err;
  }
};


export default {
  logIn(data) {
    return call('post', 'tokens', {data});
  },
  getServers() {
    return call('get', 'servers');
  },
};
