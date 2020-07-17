import { SET_SERVERS } from "../actions/servers.actions";

const initialState = [];

const serversReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVERS:
      return [...action.data];

    default:
      return state;
  }
};

export default serversReducer;
