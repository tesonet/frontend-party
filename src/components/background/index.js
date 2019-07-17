import React from "react";
import PropTypes from "prop-types";

import styles from "./style.css";

const Background = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundColor} />
      <div className={styles.backgroundImg} />
      {children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired
};

export default Background;
