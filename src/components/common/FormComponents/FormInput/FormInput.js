import React from "react";
import { Field } from "formik";

import { joinTruthy } from "../../../../utils/utils";
import styles from "./FormInput.module.scss";

export const FormInput = (props) => {
  return (
    <div
      data-testid={`form-input-${props.name}`}
      className={joinTruthy([
        styles["form-input"],
        props.classNames?.wrapper,
      ])}
    >
      {props.leadingIcon && (
        <div
          data-testid="form-input-leading-icon"
          className={joinTruthy([
            styles["form-input__icon"],
            styles["form-input__icon--leading-icon"],
          ])}
        >
          {props.leadingIcon}
        </div>
      )}
      <Field
        component={props.component || "input"}
        className={joinTruthy([
          styles["form-input__input-field"],
          props.classNames?.inputField,
          props.error && styles["form-input__input-field--invalid"]
        ])}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        required={props.isRequiredField}
        autoComplete="on"
      />
      {props.error && (
        <span 
          data-testid="form-input-error"
          className={styles["form-input__error"]}
        >
          {props.error}
        </span>
      )}
    </div>
  );
};