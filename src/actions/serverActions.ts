import ActionTypes from "../constants/actionTypes";
import Urls from "../constants/apis";
import { authGet } from "../api";
import ErrorMessages from "../constants/errorMessages";

export const serversLoaded = data => ({
  type: ActionTypes.ServersLoaded as ActionTypes.ServersLoaded,
  data
});

export const serversLoading = {
  type: ActionTypes.ServersLoading as ActionTypes.ServersLoading
};

export const serversLoadingFailed = error => ({
  type: ActionTypes.ServersLoadingFailed as ActionTypes.ServersLoadingFailed,
  error
});

export const fetchServers = async dispatch => {
  dispatch(serversLoading);
  try {
    const res = await authGet(dispatch)(Urls.servers);
    dispatch(serversLoaded(res));
  } catch (error) {
    dispatch(serversLoadingFailed(ErrorMessages.somethingWrong));
  }
};
