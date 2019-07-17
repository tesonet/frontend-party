import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import testioLogo from "../../../assets/testio-dark.png";

import styles from "./styles.css";

const ServerListHeader = ({ logoutAction }) => {
  const [logout, setLogout] = useState(false);
  return logout ? (
    <Redirect to="/" />
  ) : (
    <div className={styles.container}>
      <img className={styles.logo} src={testioLogo} alt="testio logo" />
      <div className={styles.logoutContainer}>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            logoutAction();
            setLogout(true);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

ServerListHeader.propTypes = {
  logoutAction: PropTypes.func.isRequired
};

export default ServerListHeader;
