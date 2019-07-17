import { getServerList } from "../services/server-list";
import { SERVER_LIST } from ".";

export const getServerListAction = () => async (
  dispatch,
  getState,
  { storageClient }
) => {
  const token = storageClient.get("token");
  const data = await getServerList(token);
  if (data) {
    dispatch({ type: SERVER_LIST, payload: data });
  }
};
