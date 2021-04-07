import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setServersList } from "./services/slice";
import { selectServersList } from "./services/selectors";

import "./ServersList.scss";
import {joinTruthy} from "../../utils/utils";

export const ServersList = (props) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const serversList = useSelector(selectServersList);

  useEffect(() => {
    if (token) {
      fetch("https://playground.tesonet.lt/v1/servers", {
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then(response => response.json())
        .then(data => {
          if (data?.length > 0) {
            dispatch(setServersList(data));
          }
        })
        .catch(err => {
          console.log("Error");
        });
    }
  }, []);

  return (
    <ul className="servers-list">
      <li className={joinTruthy([
        "servers-list__server-info",
        "servers-list__server-info--first-row"
      ])}>
        <span>SERVER</span>
        <span>DISTANCE</span>
      </li>
      {serversList.map(serverInfo => (
        <li className="servers-list__server-info">
          <span>{serverInfo.name}</span>
          <span>{serverInfo.distance} km</span>
        </li>
      ))}
    </ul>
  );
};

export default ServersList;