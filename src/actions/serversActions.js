import {
  SERVER_LIST_REQUESTED,
  SERVER_LIST_RECEIVED,
  SERVER_LIST_NOT_RECEIVED
} from "./types";
import fetchServers from "../services/servers/servers";

export const serverListRequested = () => ({
  type: SERVER_LIST_REQUESTED
});

export const serverListReceived = payload => ({
  type: SERVER_LIST_RECEIVED,
  payload
});

export const serverListNotReceived = () => ({
  type: SERVER_LIST_NOT_RECEIVED
});

export const onFetchServerList = () => async dispatch => {
  dispatch(serverListRequested());
  try {
    const servers = await fetchServers();
    dispatch(serverListReceived(servers));
  } catch (err) {
    dispatch(serverListNotReceived());
  }
};
