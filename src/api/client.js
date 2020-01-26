import _ from 'lodash'
import {of, throwError} from 'rxjs'
import {ajax} from 'rxjs/ajax'
import {mergeMap, catchError} from 'rxjs/operators'
import queryString from 'query-string'
import urljoin from 'url-join'

export default class {
  defaultHeaders = {
    'Content-Type': 'application/json',
  }

  makeRequest = (...props) =>
    ajax(...props).pipe(
      mergeMap(obj => of(obj.response)),
      catchError(err => throwError(err)),
    )

  get = (url, params, headers = {}) => {
    const targetUrl = _.isPlainObject(params)
      ? urljoin(url, `?${queryString.stringify(params)}`)
      : url

    return this.makeRequest({
      method: 'GET',
      url: targetUrl,
      headers: _.merge({}, this.defaultHeaders, headers),
    })
  }

  post = (url, body, headers = {}) =>
    this.makeRequest({
      method: 'POST',
      url,
      body,
      headers: _.merge({}, this.defaultHeaders, headers),
    })

  delete = (url, headers = {}) =>
    this.makeRequest({
      method: 'DELETE',
      url,
      headers: _.merge({}, this.defaultHeaders, headers),
    })

  put = (url, body, headers) =>
    this.makeRequest({
      method: 'PUT',
      url,
      body,
      headers: _.merge({}, this.defaultHeaders, headers),
    })

  request = ({url, method = 'GET', body, headers = {}}) =>
    this.makeRequest({
      method,
      url,
      body,
      headers: _.merge({}, this.defaultHeaders, headers),
    })

  setAuthToken = token => {
    if (token) {
      this.defaultHeaders.Authorization = `Bearer ${token}`
    } else if (typeof this.defaultHeaders.Authorization !== 'undefined') {
      delete this.defaultHeaders.Authorization
    }
  }
}
