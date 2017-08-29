export default function reducer ( state={
  data: {},
  user: null,
  authenticated: false,
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
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
    default:
      return state
  }
}
