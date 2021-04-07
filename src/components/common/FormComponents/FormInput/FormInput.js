import React from "react";
import { Field } from "formik";

import { joinTruthy } from "../../../../utils/utils";
import "./FormInput.scss";

export const FormInput = (props) => {
  return (
    <div
      className={joinTruthy([
        "form-input",
        props.classNames?.wrapper,
      ])}
    >
      {props.leadingIcon && (
        <div
          className={joinTruthy([
            "form-input__icon",
            "form-input__icon--leading-icon",
          ])}
        >
          {props.leadingIcon}
        </div>
      )}
      <Field
        component={props.component || "input"}
        className={joinTruthy([
          "form-input__input-field",
          props.classNames?.inputField,
          props.error && "form-input__input-field--invalid"
        ])}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        required={props.isRequiredField}
        autoComplete="on"
      >
        {props.children}
      </Field>
      {props.error && (
        <span className="form-input__error">{props.error}</span>
      )}
    </div>
  );
};