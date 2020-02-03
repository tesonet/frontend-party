export const getIsAuthenticated = state => !!state.auth.userToken
export const getToken = state => state.auth.userToken
export const getIsLoggingIn = state => state.auth.isLoggingIn
export const getErrorMessage = state => state.auth.errorMessage
