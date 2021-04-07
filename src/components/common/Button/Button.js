import React from "react";

import { joinTruthy } from "../../../utils/utils";
import "./Button.scss";

export const Button = (props) => {
  return (
    <button
      data-testid="button"
      className={joinTruthy([
        "button",
        props.className,
        props.isDisabled && "button--disabled",
      ])}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.leadingIcon && (
        <span
          data-testid="button-leading-icon"
          className="button__leading-icon-wrapper"
        >
          {props.leadingIcon}
        </span>
      )}
      {props.children}
    </button>
  );
};

export default Button;