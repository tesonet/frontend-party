function setAuthToken(authToken) {
  return {
    type: 'SET_AUTH_TOKEN',
    authToken
  }
}

export {
  setAuthToken
}