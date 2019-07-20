import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Components.
import ImageProxy from "../ImageProxy/ImageProxy";

//Constants.
import { API_URL } from "../../constants/api";

//Images.
import testioImgPath from "../../assets/icons/logo.svg";

const ServerList = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    if (servers.length === 0) {
      retrieveServers();
    }
  });

  const retrieveServers = () => {
    fetch(API_URL + "/servers", {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + localStorage.getItem("userToken")
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => setServers(data));
  };

  return (
    <div className="ServerList">
      <div className="ServerList__header">
        <ImageProxy
          className="ServerList__figure"
          src={testioImgPath}
          alt="testio"
        />
        <div className="ServerList__actions">
          <div className="ServerList__logout">
            <div className="ServerList__logout-icon" />
            <Link to="/">Logout</Link>
          </div>
        </div>
      </div>
      <div className="ServerList__list">
        {Object.keys(servers).map(i => {
          return (
            <div key={i}>
              <p>{servers[i].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ServerList;
