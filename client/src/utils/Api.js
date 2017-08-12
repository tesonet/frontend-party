export default class Api {
  constructor(props) {
    this.api = props.api;
    this.accessToken = props.accessToken;
  }

  get(address, data = undefined) {
    return this.r('GET', this.api + address, this.accessToken, data);
  }

  post(address, data = {}) {
    return this.r('POST', this.api + address, this.accessToken, data);
  }

  patch(address, data = {}) {
    return this.r('PATCH', this.api + address, this.accessToken, data);
  }

  delete(address, data = {}) {
    return this.r('DELETE', this.api + address, this.accessToken, data);
  }

  r(method, address, accessToken, data) {
    var params = { method: method, headers: {} };

    if (data) {
      params['body'] = JSON.stringify(data);
    }

    if (accessToken) {
      params['headers']['authorization'] = accessToken;
    }

    params['headers']['Accept'] = 'application/json';
    params['headers']['Content-Type'] = 'application/json';

    return fetch(address, params);
  }
}
