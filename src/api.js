const call = (method, url, options = {}) => new Promise((resolve, reject) => {
  const {data} = options;
  const params = {
    method,
    headers: {
      Accept: 'application/json;charset=utf-8',
    },
  };

  if (data != null) {
    params.body = JSON.stringify(data);
    params.headers['Content-Type'] = 'application/json;charset=utf-8';
  }

  fetch(`/api/${url}`, params).then((res) => {
    if (res.ok) {
      res.json().then(resolve).catch(reject);
    } else {
      reject(res.body);
    }
  }).catch(reject);
});


export default {
  login(data) {
    return call('post', 'tokens', {data});
  },
};
