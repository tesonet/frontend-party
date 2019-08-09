import React from "react";
import PropTypes from "prop-types";
import styles from "./FormError.module";

const FormError = ({ text }) => {
  return <p className={styles.form__error}>{text}</p>;
};

FormError.propTypes = {
  text: PropTypes.string.isRequired
};

export default FormError;
