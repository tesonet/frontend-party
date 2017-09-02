export default function reducer ( state={
  data: {},
  user: null,
  authenticated: false,
  authChecked: null,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case "TOKEN_VALID_FULFILLED":
      return {
        ...state,
        authChecked: true,
        authenticated: true,
        fetching: false,
        fetched: true,
        user: {
          ...state.user,
          token: action.payload
        }
      }
    case "TOKEN_INVALID_FULFILLED":
      return {
        ...state,
        authenticated: false,
        authChecked: true,
        fetching: false,
        fetched: true,
        user: null
      }
    case "FETCHED_TOKENS_FULFILLED":
      return {
        ...state,
        authenticated: true,
        fetching: false,
        fetched: true,
        user: {
          ...state.user,
          token: action.payload.token
        }
      }
    case "FETCHED_TOKENS_ERROR":
      return {
        ...state,
        authenticated: false,
        fetching: false,
        fetched: true,
        error: action.payload
      }
    case "FETCHED_SERVERS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: {
          ...state.data,
          servers: action.payload
        }
      }
    case "FETCHED_SERVERS_ERROR":
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload
      }
    case "SIGNOUT":
      return {
        ...state,
        data: {},
        user: null,
        authenticated: false,
        authChecked: true,
        fetching: false,
        fetched: false,
        error: null,
      }
    default:
      return state
  }
}
