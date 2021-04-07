import React from "react";

import "./Input.scss";
import {joinTruthy} from "../../../utils/utils";

export const Input = (props) => {
  return (
    <div className={joinTruthy([
      "input",
      props.classNames?.wrapper,
    ])}>
      <input
        placeholder={props.placeholder}
        className={joinTruthy([
          "input__input-field",
          props.classNames?.inputField,
        ])}
      />
      {props.errors && (
        <span className="input__error-message" >
          {props.errors}
        </span>
      )}
    </div>
  );
};

export default Input;