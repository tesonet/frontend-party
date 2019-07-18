import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import ServerListHeader from "../server-list-header";

import styles from "./styles.css";

const ServerList = ({ getServerListAction, serverList }) => {
  useEffect(() => {
    getServerListAction();
  }, [getServerListAction]);
  return (
    <Fragment>
      <ServerListHeader />
      <div>
        <div className={`${styles.tableRow} ${styles.tableHeader}`}>
          <h6 className={`${styles.text} ${styles.tableHeaderText}`}>server</h6>
          <h6 className={`${styles.text} ${styles.tableHeaderText}`}>
            distance
          </h6>
        </div>
        <div className={styles.tableBody}>
          {serverList.map(server => (
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
    </Fragment>
  );
};

ServerList.propTypes = {
  getServerListAction: PropTypes.func.isRequired,
  serverList: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ServerList;
