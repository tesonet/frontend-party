import React, { useState, useEffect } from "react";

//Components.
import ImageProxy from "../ImageProxy/ImageProxy";
import Logout from "../Logout/Logout";

//Constants.
import { API_URL } from "../../constants/api";

//Images.
import testioImgPath from "../../assets/images/logo-color.png";

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

  const handleOrdering = e => {
    let sortBy = e.target.innerText.toLowerCase();
    if (sortBy === "server") {
      sortBy = "name";
    }

    const breweries = [...servers].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });

    setServers(breweries);
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
          <Logout className="ServerList__logout" />
        </div>
      </div>
      <div className="ServerList__list">
        <div className="ServerList__legend">
          <div className="ServerList__server" onClick={handleOrdering}>
            Server
          </div>
          <div className="ServerList__distance" onClick={handleOrdering}>
            Distance
          </div>
        </div>
        {Object.keys(servers).map(i => {
          return (
            <div className="ServerList__item" key={i}>
              <p className="ServerList__item-name">{servers[i].name}</p>
              <p className="ServerList__item-distance">{servers[i].distance}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ServerList;
