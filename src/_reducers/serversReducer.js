import {
  SERVERS_LOADED,
  SERVERS_LOADING,
  SERVERS_SERVER_ERROR,
  SERVERS_SORT_BY_SERVER,
  SERVERS_SORT_BY_DISTANCE
} from "../_constants/types";

const initialState = {
  isLoading: null,
  servers: null,
  errorMessage: null,
  sortDescending: true,
  sortByServer: null,
  sortByDistance: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SERVERS_LOADED:
      return {
        ...state,
        isLoading: false,
        servers: action.payload
      };
    case SERVERS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SERVERS_SERVER_ERROR:
      return {
        ...state,
        isLoading: false,
        servers: null,
        errorMessage: "Server is unavailable at the moment."
      };
    case SERVERS_SORT_BY_SERVER:
      const getServerNumber = server => {
        return parseInt(server.name.replace(/^\D+/g, ""), 10);
      };
      let serversCopy = [...state.servers];
      let sortedServers = serversCopy.sort((a, b) => {
        if (state.sortDescending) {
          return getServerNumber(b) - getServerNumber(a);
        }
        return getServerNumber(a) - getServerNumber(b);
      });
      return {
        ...state,
        isLoading: false,
        servers: sortedServers,
        errorMessage: null,
        sortDescending: !state.sortDescending,
        sortByServer: true,
        sortByDistance: false
      };
    case SERVERS_SORT_BY_DISTANCE:
      serversCopy = [...state.servers];
      sortedServers = serversCopy.sort((a, b) => {
        if (state.sortDescending) {
          return b.distance - a.distance;
        }
        return a.distance - b.distance;
      });
      return {
        ...state,
        isLoading: false,
        servers: serversCopy,
        errorMessage: null,
        sortDescending: !state.sortDescending,
        sortByServer: false,
        sortByDistance: true
      };
  }
  return state;
};
