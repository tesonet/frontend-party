import React from "react";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useIntl} from "react-intl";

import { ReactComponent as TestioIcon } from "../../assets/logo-testio.svg";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
import { ReactComponent as PasswordIcon } from "../../assets/password-icon.svg";
import Button from "../common/Button/Button";
import { FormInput } from "../common/FormComponents/FormInput/FormInput";
import { setAuthenticationFailed, setIsLoginInProgress } from "./services/slice";
import { selectAuthenticationFailed, selectIsLoginInProgress } from "./services/selectors";
import messages from "./messages";
import "./LoginBox.scss";

export const LoginBox = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoginInProgress = useSelector(selectIsLoginInProgress);
  const authenticationFailed = useSelector(selectAuthenticationFailed);

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
        } else {
          dispatch(setAuthenticationFailed(true));
        }
        dispatch(setIsLoginInProgress(false));
      })
      .catch(() => {
        dispatch(setIsLoginInProgress(false));
        dispatch(setAuthenticationFailed(true));
      });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(intl.formatMessage(messages.usernameMissingMessage)),
    password: Yup.string().required(intl.formatMessage(messages.passwordMissingMessage)),
  });

  return (
    <div className="login-box">
      <TestioIcon className="login-box__icon" />
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
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
              error={props.errors.username || (authenticationFailed && intl.formatMessage(messages.authenticationFailedMessage))}
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
              error={props.errors.password || (authenticationFailed && intl.formatMessage(messages.authenticationFailedMessage))}
            />
            <Button
              dataTestId="login-button"
              className="login-box__login-button"
              isDisabled={isLoginInProgress}
            >
              {isLoginInProgress ?
                intl.formatMessage(messages.loginInProgressButtonText) :
                intl.formatMessage(messages.loginButtonTextDefault)
              }
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginBox;