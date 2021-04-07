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
import { joinTruthy, sortArrayOfObjectsByKey } from "../../utils/utils";
import Button from "../common/Button/Button";
import { ReactComponent as SortTriangleIcon } from "../../assets/sort-triangle.svg";
import "./ServersList.scss";

export const ServersList = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const serversList = useSelector(selectServersList);
  const isServersListLoading = useSelector(selectIsServersListLoading);
  const serversListLoadingFailed = useSelector(selectServersListLoadingFailed);
  const [serversListInternal, setServersListInternal] = useState(serversList || []);
  const [isSortingByName, setIsSortingByName] = useState(false);
  const [isSortingByDistance, setIsSortingByDistance] = useState(false);

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
  }, [dispatch, token]);

  const handleSortServersListByName = () => {
    let sortedServersList;
    if (isSortingByName) {
      sortedServersList = sortArrayOfObjectsByKey([...serversListInternal], "name");
      setIsSortingByName(false);
      setIsSortingByDistance(false);
    } else {
      sortedServersList = sortArrayOfObjectsByKey([...serversListInternal], "name", true);
      setIsSortingByName(true);
      setIsSortingByDistance(false);
    }
    setServersListInternal(sortedServersList);
  };

  const handleSortServersListByDistance = () => {
    let sortedServersList;
    if (isSortingByDistance) {
      sortedServersList = sortArrayOfObjectsByKey([...serversListInternal], "distance");
      setIsSortingByDistance(false);
      setIsSortingByName(false);
    } else {
      sortedServersList = sortArrayOfObjectsByKey([...serversListInternal], "distance", true);
      setIsSortingByDistance(true);
      setIsSortingByName(false);
    }
    setServersListInternal(sortedServersList);
  };

  return (
    <ul className="servers-list">
      <li className={joinTruthy([
        "servers-list__server-info",
        "servers-list__server-info--first-row"
      ])}>
        <span className="servers-list__column-title">
          SERVER
          <Button
            className="servers-list__sort-button"
            onClick={handleSortServersListByName}
          >
            <SortTriangleIcon
              className={joinTruthy([
                "servers-list__sort-icon",
                isSortingByName && "servers-list__sort-icon--active",
              ])}
            />
          </Button>
        </span>
        <span className="servers-list__column-title">
          DISTANCE
          <Button
            className="servers-list__sort-button"
            onClick={handleSortServersListByDistance}
          >
            <SortTriangleIcon
              className={joinTruthy([
                "servers-list__sort-icon",
                isSortingByDistance && "servers-list__sort-icon--active",
              ])}
            />
          </Button>
        </span>
      </li>
      {isServersListLoading || serversListLoadingFailed ? (
        <div className="servers-list__loading-error-text">
          {isServersListLoading ? "Servers list loading..." : "Servers list loading failed. Try to refresh the page."}
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