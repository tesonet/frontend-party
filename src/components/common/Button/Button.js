import React from "react";

import { joinTruthy } from "../../../utils/utils";
import "./Button.scss";

export const Button = (props) => {
  return (
    <button className={joinTruthy([
      "button",
      props.className,
    ])}>
      {props.children}
    </button>
  );
};

export default Button;