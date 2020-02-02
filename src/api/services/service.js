import urljoin from 'url-join'

/* eslint-disable no-underscore-dangle */
export default class {
  constructor(client, baseUrl) {
    this.client = client
    this._baseUrl = typeof baseUrl === 'string' ? baseUrl : ''
  }

  get baseUrl() {
    return this._baseUrl
  }

  set baseUrl(url) {
    if (typeof url === 'string') {
      this._baseUrl = url
    }
  }

  getUri(...args) {
    return urljoin(this.baseUrl, ...args)
  }
}
