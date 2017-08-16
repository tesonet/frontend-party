import Api from './Api';

function isRequest({ api }) {
  return api && typeof api === 'function';
}

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText || response.status);
    error.response = response;
    throw error;
  }
}

function json(response) {
  return response.json().then(data => {
    return {
      data: data,
      status: response.status
    }
  });
}

function request(context, base, { api, types, ...rest }, next) {
  const accessToken = context.getState().login.token;
  const [REQUEST, SUCCESS, FAILURE] = types;

  next({ ...rest, type: REQUEST });

  const process = (url, params = {}) => {
  var newApi = new Api({ api: base, accessToken });
  var operation;

  switch (params.method) {
    case 'GET':
      operation = newApi.get(url);
      break;
    case 'POST':
      operation = newApi.post(url, params);
      break;
    case 'PATCH':
      operation = newApi.patch(url, params);
      break;
    case 'DELETE':
      operation = newApi.delete(url, params);
      break;
    default:
      operation = newApi.get(url);
  }

  return operation
    .then(status)
    .then(response => response)
    .then(json)
    .then(args => {
      next({ ...rest, payload: args.data, status: args.status, type: SUCCESS });
    })
    .catch(error => {
      if (error && error.response) {
        error.response.json().then(data => {
          next({ ...rest, error, payload: data, type: FAILURE });
        });
      } else {
        next({ ...rest, error, type: FAILURE });
      }
    });
  }

  return api(process);
}

export default function apiMiddleware(url) {
  return function(context) {
    return next => action => isRequest(action) ? request(context, url, action, next) : next(action)
  }
}
