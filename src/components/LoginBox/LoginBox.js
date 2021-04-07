import React from "react";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { ReactComponent as TestioIcon } from "../../assets/logo-testio.svg";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/password-icon.svg";
import Button from "../common/Button/Button";
import { FormInput } from "../common/FormComponents/FormInput/FormInput";
import { setIsLoginInProgress } from "./services/slice";
import { selectIsLoginInProgress } from "./services/selectors";
import "./LoginBox.scss";

export const LoginBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoginInProgress = useSelector(selectIsLoginInProgress);

  const handleLogin = (values) => {
    dispatch(setIsLoginInProgress(true));
    fetch("https://playground.tesonet.lt/v1/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      })
    }).then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          history.push("/servers");
        }
        dispatch(setIsLoginInProgress(false));
      })
      .catch(err => {
        dispatch(setIsLoginInProgress(false));
      });
  };

  return (
    <div className="login-box">
      <TestioIcon className="login-box__icon" />
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
                wrapper: "login-box__input-wrapper",
                inputField: "login-box__input-field"
              }}
              name="username"
              placeholder="Username"
              setFieldValue={props.setFieldValue}
              value={props.values.username}
              leadingIcon={<UserIcon />}
              isRequiredField
            />
            <FormInput
              classNames={{
                wrapper: "login-box__input-wrapper",
                inputField: "login-box__input-field"
              }}
              name="password"
              placeholder="Password"
              setFieldValue={props.setFieldValue}
              value={props.values.password}
              type="password"
              leadingIcon={<PasswordIcon />}
              isRequiredField
            />
            <Button
              className="login-box__login-button"
              isDisabled={isLoginInProgress}
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginBox;