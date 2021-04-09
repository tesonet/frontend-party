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
import { selectAuthenticationFailed, selectIsLoginInProgress } from "./services/selectors";
import messages from "./messages";
import { loginHandler } from "../../app/services";
import styles from "./LoginBox.scss";

export const LoginBox = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoginInProgress = useSelector(selectIsLoginInProgress);
  const authenticationFailed = useSelector(selectAuthenticationFailed);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(intl.formatMessage(messages.usernameMissingMessage)),
    password: Yup.string().required(intl.formatMessage(messages.passwordMissingMessage)),
  });

  const handleLogin = (values) => {
    loginHandler(values, dispatch, history);
  };

  return (
    <div className={styles["login-box"]}>
      <TestioIcon className={styles["login-box__icon"]} />
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
          <Form className={styles["login-box__form"]}>
            <FormInput
              classNames={{
                wrapper: styles["login-box__input-wrapper"],
                inputField: styles["login-box__input-field"]
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
                wrapper: styles["login-box__input-wrapper"],
                inputField: styles["login-box__input-field"]
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
              className={styles["login-box__login-button"]}
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