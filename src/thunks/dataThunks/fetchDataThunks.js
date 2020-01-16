import axios from "axios";
import {
  onServerListFetch,
  onServerListFetchError,
  onServerListFetchSuccess
} from "../../actions/fetchDataAction/fetchServerList";
import { getFromLocalStorage } from "../../utils/localStorage";
import { SERVER_URL } from "../../constants/api";

export const onServerListDataFetch = () => dispatch => {
  dispatch(onServerListFetch());
  const authToken = getFromLocalStorage("authToken");

  axios({
    method: "GET",
    url: `${SERVER_URL}/servers`,
    headers: {
      Authorization: authToken
    }
  })
    .then(res => {
      dispatch(onServerListFetchSuccess(res.data))
    })
    .catch(err => dispatch(onServerListFetchError("There was a problem with server. Try again later")))
};
