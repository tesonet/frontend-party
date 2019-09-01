import { getServerList } from "../services/servers";
import { SERVER_LIST } from ".";

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