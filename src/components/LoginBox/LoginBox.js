import React from "react";
import { Form, Formik } from "formik";

import { ReactComponent as Icon } from "../../assets/logo-testio..svg";
import Button from "../common/Button/Button";
import { FormInput } from "../common/FormComponents/FormInput/FormInput";
import "./LoginBox.scss";

export const LoginBox = () => {

  const handleLogin = (values) => {
    console.log(values);
  };

  return (
    <div className="login-box">
      <Icon className="login-box__icon" />
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleLogin}
      >
        {props => (
          <Form className="login-box__form">
            <FormInput
              classNames={{
                wrapper: "login-box__input-wrapper"
              }}
              name="username"
              placeholder="Username"
              setFieldValue={props.setFieldValue}
              value={props.values.username}
              isRequiredField
            />
            <FormInput
              classNames={{
                wrapper: "login-box__input-wrapper"
              }}
              name="password"
              placeholder="Password"
              setFieldValue={props.setFieldValue}
              value={props.values.password}
              type="password"
              isRequiredField
            />
            <Button className="login-box__login-button">
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginBox;