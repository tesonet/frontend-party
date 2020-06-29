import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getHttpRequest } from "../../utils/fetchApi";
import { multipleSort } from "../../utils/helpers";
import ServerList from "../ServerList/ServerList";
import HomePageHeader from "../HomePageHeader/HomePageHeader";

const HomePage = ({ token, handleLogout }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHttpRequest(`https://playground.tesonet.lt/v1/servers`, token).then(
      (response) => {
        const ordered = response.sort((a, b) => {
          return (
            multipleSort(a.distance, b.distance) || multipleSort(a.name, b.name)
          );
        });
        setData(ordered);
      }
    );
  }, []);
  return (
    <div>
      <HomePageHeader handleLogout={handleLogout} />
      <ServerList data={data} />
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  token: PropTypes.string,
  handleLogout: PropTypes.func
};
