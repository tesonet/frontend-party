import 'whatwg-fetch';


const JSON_HEADER = 'application/json;charset=utf-8';


const call = async (method, url, options = {}) => {
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
};
