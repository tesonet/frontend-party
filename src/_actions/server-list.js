import { getServerList } from "../services/server-list";
import { SERVER_LIST, ORDER_BY_NAME, ORDER_BY_DISTANCE } from ".";

export const getServerListAction = () => async (
  dispatch,
  getState,
  { storageClient }
) => {
  const token = storageClient.get("token");
  const data = await getServerList(token);
  if (data) {
    return dispatch({ type: SERVER_LIST, payload: data });
  }
  return dispatch({ type: SERVER_LIST, payload: [] });
};

export const orderByName = () => {
  return {
    type: ORDER_BY_NAME
  };
};

export const orderByDistance = () => {
  return {
    type: ORDER_BY_DISTANCE
  };
};
