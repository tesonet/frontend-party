import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./FormControl.module";

const FormControl = ({
  cssModifier,
  error,
  name,
  onChange,
  placeholder,
  type,
  value
}) => {
  return (
    <div
      className={classnames(styles.form__control, styles[cssModifier], {
        [styles["form__control--error"]]: error
      })}
    >
      <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
        aria-label="BLABLA"
      />
      {error && <span className={styles.form__control__error}>{error}</span>}
    </div>
  );
};

FormControl.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

FormControl.defaultProps = {
  type: "text"
};

export default FormControl;
