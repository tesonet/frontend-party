import * as types from "./actionTypes";

const DEFAULT_ERROR = "Failed to fetch data";

const INITIAL_STATE = {
  servers: [],
  token: localStorage.getItem("tokenPlayground") || "",
  error: null,
  fetching: false
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.AUTHORIZATION:
      localStorage.setItem("tokenPlayground", payload.token);
      return { ...state, token: payload.token };
    case types.AUTHORIZATION_FAILED:
      return { ...state, token: null, error: payload };
    case types.GET_SERVERS_SUCCESS:
      return { ...state, servers: payload, fetching: false };
    case types.GET_SERVERS_FAILURE:
      return { ...state, error: DEFAULT_ERROR, fetching: false };
    case types.FETCHING: {
      return { ...state, fetching: true };
    }
    case types.LOGOUT: {
      localStorage.setItem("tokenPlayground", "");
      return { ...state, token: "", fetching: false };
    }
    case types.SORT_BY_NAME: {
      const serversSorted = [...payload].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      return { ...state, servers: serversSorted, fetching: false };
    }

    case types.SORT_BY_DISTANCE: {
      const serverSorted = [...payload].sort((a, b) => {
        return b.distance - a.distance;
      });
      return { ...state, servers: serverSorted, fetching: false };
    }
    default:
      return state;
  }
};
