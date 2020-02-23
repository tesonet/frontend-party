import 'whatwg-fetch';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function useFetch(url, dependencies) {
  const history = useHistory();
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState();
  const API_BASE = 'http://playground.tesonet.lt/v1';
  const TOKEN = localStorage.getItem('token');

  function doFetch(method, body = {}) {
    setIsFetching(true);

    return new Promise((resolve, reject) => {
      window
        .fetch(API_BASE + url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...(TOKEN && { Authorization: localStorage.getItem('token') })
          },
          ...((method === 'POST' || method === 'PUT') && {
            body: JSON.stringify(body)
          })
        })
        .then(async r => {
          const response = await r.json();

          setIsFetching(false);

          if (!r.ok) {
            if (r.status === 401) {
              localStorage.removeItem('token');
              history.push('/login');
            }

            return reject(response);
          }

          setData(response);

          return resolve(response);
        });
    });
  }

  const request = {
    get: () => doFetch('GET'),
    post: body => doFetch('POST', body)
  };

  useEffect(() => {
    if (Array.isArray(dependencies)) {
      request.get();
    }
  }, dependencies);

  return [request, isFetching, data];
}

export default useFetch;
