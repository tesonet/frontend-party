import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/store";
import { logIn, logInSuccess } from "../../store/user/actions";
import { Redirect } from "react-router";
import localStorageUtils from "../../utils/localStorage";

import { LoginContainer, LoginForm, LoginContent } from "./Login.styles";
import TextField from "../TextField/TextField";
import { Button } from "../Button/Button";
import { FormField } from "../Form/Form";
import Logo from "../Logo/Logo";

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

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setValues(v => ({ ...v, [target.name]: target.value }));
  };

  const handleLogIn = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(logIn(values.username, values.password));
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
        <Logo />
        <LoginForm onSubmit={handleLogIn}>
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
            <Button type="submit">Log In</Button>
          </FormField>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
