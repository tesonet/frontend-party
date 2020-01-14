import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/store";
import {
  logIn,
  logInSuccess,
  Errors,
  logInError
} from "../../store/user/actions";
import { Redirect } from "react-router";
import localStorageUtils from "../../utils/localStorage";

import { LoginContainer, LoginForm, LoginContent } from "./Login.styles";
import TextField from "../TextField/TextField";
import { Button } from "../Button/Button";
import { FormField } from "../Form/Form";
import Logo from "../Logo/Logo";
import { ErrorBox } from "../Error/Error";

interface Credentials {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [values, setValues] = useState<Credentials>({
    username: "",
    password: ""
  });
  const dispatch = useDispatch();
  const token = useSelector(({ user }: State) => (user ? user.token : null));
  const isFetching = useSelector(({ user }: State) => user.isFetching);
  const error = useSelector(({ user }: State) => user.error);

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setValues(v => ({ ...v, [target.name]: target.value }));
  };

  const handleLogIn = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!values.username) {
      dispatch(logInError(Errors.USERNAME_EMPTY));
    } else if (!values.password) {
      dispatch(logInError(Errors.PASSWORD_EMPTY));
    } else {
      dispatch(logIn(values.username, values.password));
    }
  };

  useEffect(() => {
    if (!token) {
      const lsToken = localStorageUtils.getToken();
      if (lsToken) {
        dispatch(logInSuccess(lsToken));
      }
    }
  }, [token]);

  return token ? (
    <Redirect to="/servers" />
  ) : (
    <LoginContainer>
      <LoginContent>
        <Logo variation="light" align="center" />
        <LoginForm onSubmit={handleLogIn}>
          <FormField>
            <ErrorBox message={error} />
          </FormField>
          <FormField>
            <TextField
              name="username"
              onChange={handleChange}
              value={values.username}
              data-test="username-field"
              placeholder="Username"
              icon="user"
            />
          </FormField>
          <FormField>
            <TextField
              name="password"
              type="password"
              data-test="password-field"
              onChange={handleChange}
              value={values.password}
              placeholder="Password"
              icon="padlock"
            />
          </FormField>
          <FormField>
            <Button type="submit">
              {!isFetching ? "Log In" : "Loading..."}
            </Button>
          </FormField>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
