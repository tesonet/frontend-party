import {TESONET_API_URL} from './URL-const'

export const validateToken = (token) => {
  return (dispatch) => {
    const userToken = token
    const loginHeaders = new Headers()
    loginHeaders.append('Authorization', userToken)
    loginHeaders.append('Accept', 'application/json')

    const request = fetch(TESONET_API_URL.SERVERS, {
      method: 'GET',
      headers: loginHeaders
    })

    request.then((response) => {
      if (isAuthorized(response.status)) {
        dispatch({type: 'TOKEN_VALID_FULFILLED', payload: token})
      } else if (isUnauthorized(response.status)) {
        dispatch({type: 'TOKEN_INVALID_FULFILLED'})
      } else {
        this.error = 'Sorry, but something goes wrong. Try again later!'
        throw Error(this.error)
      }
    }).catch(error => {
      dispatch({type: 'FETCHED_TOKENS_ERROR', payload: error.message})
    })
  }
}

export const fetchToken = (credentials) => {
  // const loginData = {
  //   "username": "tesonet",
  //   "password": "partyanimal"
  // }

  const loginData = {
    "username": credentials.username,
    "password": credentials.password,
  }
  const loginHeaders = new Headers()
  loginHeaders.append('Content-Type', 'application/json')
  loginHeaders.append('Accept', 'application/json')

  const request = fetch(TESONET_API_URL.TOKENS, {
      method: 'POST',
      headers: loginHeaders,
      body: JSON.stringify(loginData),
  })

  return (dispatch) => {
    request.then((response) => {

      if (isAuthorized(response.status)) {
        this.isAuthenticated = true
        return response.json()

      } else if (isUnauthorized(response.status)) {
        this.error = 'Sorry, but looks like username or password you\'ve entered isn\'t correct 😕🔒. Try again!'
        throw Error(this.error)

      } else {
        this.error = 'Sorry, but something goes wrong. Try again later!'
        throw Error(this.error)
      }
    }).then((json) => {
      localStorage.token = json.token
      dispatch({
        type: 'FETCHED_TOKENS_FULFILLED',
        payload: json
      })
    })
    .catch( error => {
      dispatch({
        type: 'FETCHED_TOKENS_ERROR',
        payload: error.message
      })
    })
  }
}

export const logout = () => {
  localStorage.removeItem('token')

  return (dispatch) => {
    dispatch({
      type: 'SIGNOUT'
    })
  }
}

const isUnauthorized = (status) => status === 401
const isAuthorized = (status) => status === 200
