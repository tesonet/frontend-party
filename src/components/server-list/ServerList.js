import React, { useEffect, Fragment } from "react";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

import ServerListHeader from "../server-list-header";

import styles from "./styles.css";

const ServerList = ({
  getServerListAction,
  serverList,
  orderByName,
  orderByDistance
}) => {
  useEffect(() => {
    getServerListAction();
  }, [getServerListAction]);
  return (
    <Fragment>
      <ServerListHeader />
      {!serverList.data.length ? (
        <div className={styles.loaderContainer}>
          <Loader type="Bars" color="#99cc33" height="150" width="150" />
        </div>
      ) : (
        <div>
          <div className={`${styles.tableRow} ${styles.tableHeader}`}>
            <button
              type="button"
              className={`${styles.filterButton} ${styles.text}`}
              onClick={() => {
                orderByName();
              }}
            >
              server
            </button>
            <button
              type="button"
              className={`${styles.filterButton} ${styles.text}`}
              onClick={() => {
                orderByDistance();
              }}
            >
              distance
            </button>
          </div>
          <div className={styles.tableBody}>
            {serverList.data.map(server => (
              <div
                key={server.name + server.distance}
                className={styles.tableRow}
              >
                <p className={styles.text}>{server.name}</p>
                <p className={styles.text}>{server.distance}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

ServerList.propTypes = {
  getServerListAction: PropTypes.func.isRequired,
  serverList: PropTypes.shape({
    filterType: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        distance: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired,
  orderByName: PropTypes.func.isRequired,
  orderByDistance: PropTypes.func.isRequired
};

export default ServerList;
