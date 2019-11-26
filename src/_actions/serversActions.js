import axios from "axios";
import { history } from "../_helpers/history";

import {
  SERVERS_LOADED,
  SERVERS_LOADING,
  SERVERS_SERVER_ERROR,
  SERVERS_SORT_BY_SERVER,
  SERVERS_SORT_BY_DISTANCE
} from "../_constants/types";

export const fetchServers = () => dispatch => {
  dispatch({
    type: SERVERS_LOADING
  });

  axios({
    method: "get",
    url: "http://playground.tesonet.lt/v1/servers",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => {
      dispatch({
        type: SERVERS_LOADED,
        payload: res.data
      });
    })
    .then(() => {
      dispatch({
        type: SERVERS_SORT_BY_SERVER
      });
    })
    .catch(err => {
      try {
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          history.push("/login");
          dispatch({
            type: LOGOUT_SUCCESS
          });
        }
      } catch (error) {
        dispatch({
          type: SERVERS_SERVER_ERROR
        });
      }
    });
};

export const sortByServer = () => dispatch => {
  dispatch({
    type: SERVERS_SORT_BY_SERVER
  });
};

export const sortByDistance = () => dispatch => {
  dispatch({
    type: SERVERS_SORT_BY_DISTANCE
  });
};
