import React from "react";

import { joinTruthy } from "../../../utils/utils";
import styles from "./Button.scss";

export const Button = (props) => {
  return (
    <button
      data-testid={props.dataTestId || "button"}
      className={joinTruthy([
        styles["button"],
        props.className,
        props.isDisabled && styles["button--disabled"],
      ])}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.leadingIcon && (
        <span
          data-testid="button-leading-icon"
          className={styles["button__leading-icon-wrapper"]}
        >
          {props.leadingIcon}
        </span>
      )}
      {props.children}
    </button>
  );
};

export default Button;