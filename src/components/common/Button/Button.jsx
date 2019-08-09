import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module";
import classnames from "classnames";

const Button = ({ title, loadingClass }) => {
  return (
    <button className={classnames({ loading: loadingClass }, styles.button)}>
      <span>{title}</span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
