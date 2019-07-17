import React, { useEffect } from "react";
import PropTypes from "prop-types";

import testioLogo from "../../../assets/testio.png";

import styles from "./styles.css";

const ServerList = ({ getServerListAction, serverList }) => {
  useEffect(() => {
    getServerListAction();
  }, [getServerListAction]);
  return <div className={styles.container}>server List component</div>;
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
