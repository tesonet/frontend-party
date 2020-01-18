import * as types from "../types";

export function onServerListFetch() {
  return {
    type: types.SERVER_LIST_FETCH
  };
}

export function onServerListFetchError(error) {
  return {
    type: types.SERVER_LIST_FETCH_ERROR,
    error
  };
}

export function onServerListFetchSuccess(serverList) {
  return {
    type: types.SERVER_LIST_FETCH_SUCCESS,
    serverList
  };
}
