import ActionTypes from "../constants/actionTypes";
import Urls from "../constants/apis";
import { authGet } from "../api";

export const serversLoaded = data => ({
  type: ActionTypes.ServersLoaded,
  data
});

export const fetchServers = dispatch => {
  authGet(dispatch)(Urls.servers).then(res => dispatch(serversLoaded(res)));
};
