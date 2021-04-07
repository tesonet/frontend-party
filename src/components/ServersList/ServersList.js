import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setIsServersListLoading,
  setServersList,
  setServersListLoadingFailed,
} from "./services/slice";
import {
  selectIsServersListLoading,
  selectServersList,
  selectServersListLoadingFailed,
} from "./services/selectors";
import { joinTruthy } from "../../utils/utils";
import "./ServersList.scss";

export const ServersList = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const serversList = useSelector(selectServersList);
  const isServersListLoading = useSelector(selectIsServersListLoading);
  const serversListLoadingFailed = useSelector(selectServersListLoadingFailed);
  const [serversListInternal, setServersListInternal] = useState(serversList || []);

  useEffect(() => {
    setServersListInternal(serversList);
  }, [serversList]);

  useEffect(() => {
    if (token) {
      dispatch(setIsServersListLoading(true));
      fetch("https://playground.tesonet.lt/v1/servers", {
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then(response => response.json())
        .then(data => {
          if (data?.length > 0) {
            dispatch(setIsServersListLoading(false));
            dispatch(setServersList(data));
          }
        })
        .catch(err => {
          dispatch(setIsServersListLoading(false));
          dispatch(setServersListLoadingFailed(true));
        });
    }
  }, []);

  return (
    <ul className="servers-list">
      <li className={joinTruthy([
        "servers-list__server-info",
        "servers-list__server-info--first-row"
      ])}>
        <span>
          SERVER
        </span>
        <span>
          DISTANCE
        </span>
      </li>
      {isServersListLoading ? (
        <div className="servers-list__loading-text">
          Servers list loading...
        </div>
      ) : serversListLoadingFailed ? (
        <div className="servers-list__loading-text">
          Servers list loading failed.
          Try to refresh the page.
        </div>
      ) : serversListInternal.map(serverInfo => (
        <li
          key={`${serverInfo.name}-${serverInfo.distance}`}
          className="servers-list__server-info"
        >
          <span>{serverInfo.name}</span>
          <span>{serverInfo.distance} km</span>
        </li>
      ))}
    </ul>
  );
};

export default ServersList;