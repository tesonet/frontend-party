import React, { useState } from "react";
import axios from "axios";
import { css } from "emotion";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from "react-bootstrap/InputGroup";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import Form from "react-bootstrap/Form";
import { loginStyles } from "./login.style";
import { TESONET_BASE_URL, AUTHENTICATION_URI } from "components/constants";
import { withRouter, RouteComponentProps } from "react-router";
import { commonStyles } from "components/common.style";

const LoginComponent = (props: RouteComponentProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className={css(commonStyles.container as any, loginStyles.wrapper)}>
      <div className={css(loginStyles.formContainer)}>
        <div className={css(loginStyles.whiteLogo)} />
        <div className={css(loginStyles.errorContainer)}>
          {errorMessage && <Alert variant={"danger"}>{errorMessage}</Alert>}
        </div>
        <InputGroup className={css(loginStyles.inputGroup)}>
          <InputGroup.Prepend>
            <div className={`${css(loginStyles.inputIcon)} input-group-text`}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
            size="lg"
            className={css(loginStyles.formControl, loginStyles.input)}
            value={username}
            onChange={(e: any) => {
              setUsername(e.target.value);
              setErrorMessage("");
            }}
          />
        </InputGroup>
        <InputGroup className={css(loginStyles.inputGroup)}>
          <InputGroup.Prepend>
            <div className={`${css(loginStyles.inputIcon)} input-group-text`}>
              <FontAwesomeIcon icon={faLock} />
            </div>
          </InputGroup.Prepend>
          <Form.Control
            type="password"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
            size="lg"
            className={css(loginStyles.formControl, loginStyles.input)}
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
              setErrorMessage("");
            }}
          />
        </InputGroup>
        <Button
          onClick={() => {
            if (!username) {
              return setErrorMessage("Username can not be empty");
            }
            if (!password) {
              return setErrorMessage("Password can not be empty");
            }
            axios
              .post(`${TESONET_BASE_URL}${AUTHENTICATION_URI}`, {
                username,
                password
              })
              .then(response => {
                localStorage.setItem("accessToken", response.data.token);
                setErrorMessage("");
                props.history.push("/server-list");
              })
              .catch(error => setErrorMessage(error.response.data.message));
          }}
          className={css(loginStyles.formControl, loginStyles.button as any)}
          variant="success"
        >
          Log In
        </Button>
      </div>
    </div>
  );
};

export const Login = withRouter(LoginComponent);
