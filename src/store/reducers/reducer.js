const initialState = {
  token: null,
  list: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        loading: true,
      };

    case "AUTH_FAIL":
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case "AUTH_SUCCESS":
      return {
        ...state,
        token: action.token,
        loading: false,
        error: null,
      };

    case "SET_LIST":
      return {
        ...state,
        list: action.list
      };

    case "AUTH_LOGOUT":
      return {
        ...state,
        token: null,
        error: null
      };

    default:
      return state;
  }
};

export default reducer;
