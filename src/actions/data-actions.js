import {TESONET_API_URL} from './URL-const'

export const fetchServer = () => {
  return (dispatch, getState) => {

    const userToken = getState().user.user.token
    const loginHeaders = new Headers()
    loginHeaders.append('Authorization', userToken)
    loginHeaders.append('Accept', 'application/json')

    const request = fetch(TESONET_API_URL.SERVERS, {
      method: 'GET',
      headers: loginHeaders
    })

    console.log('here');
    request.then((response) => {
      if (isAuthorized(response.status)) {
        return response.json()

      } else if (isUnauthorized(response.status)) {
        this.error = 'Sorry, but unauthorized to see this content 😕🔒'
        throw Error(this.error)

      } else {
        this.error = 'Sorry, but something goes wrong. Try again later!'
        throw Error(this.error)
      }
    }).then((json) => {
      dispatch({type: 'FETCHED_SERVERS_FULFILLED', payload: json})
    }).catch(error => {
      dispatch({type: 'FETCHED_SERVERS_ERROR', payload: error.message})
    })
  }
}

const isUnauthorized = (status) => status === 401
const isAuthorized = (status) => status === 200
