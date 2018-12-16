import * as types from "./actionTypes";
import { RSAA } from "redux-api-middleware";

const AUTHORIZATION_LINK = "http://playground.tesonet.lt/v1/tokens";
const SERVERS_LINK = "http://playground.tesonet.lt/v1/servers";

export const authorizing = (username, password) => {
  return {
    [RSAA]: {
      endpoint: AUTHORIZATION_LINK,
      method: "POST",
      body: JSON.stringify({
        username,
        password
      }),
      headers: { "Content-Type": "application/json" },
      types: [types.FETCHING, types.AUTHORIZATION, types.AUTHORIZATION_FAILED]
    }
  };
};

export const fetchServers = () => ({
  [RSAA]: {
    endpoint: SERVERS_LINK,
    method: "GET",
    headers: { Authorization: localStorage.getItem("tokenPlayground") },
    types: [
      types.FETCHING,
      types.GET_SERVERS_SUCCESS,
      types.GET_SERVERS_FAILURE
    ]
  }
});

export const logout = () => ({ type: types.LOGOUT });

export const sortByName = payload => ({ type: types.SORT_BY_NAME, payload });

export const sortByDistance = payload => ({
  type: types.SORT_BY_DISTANCE,
  payload
});
