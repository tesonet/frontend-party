import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/store";
import { logIn, logInSuccess } from "../../store/user/actions";
import { Redirect } from "react-router";
import localStorageUtils from "../../utils/localStorage";

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

  const handleLogIn = (): void => {
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
    <div>
      Login
      <input
        name="username"
        onChange={handleChange}
        value={values.username}
        data-test="username-field"
      />
      <input
        name="password"
        type="password"
        data-test="password-field"
        onChange={handleChange}
        value={values.password}
      />
      <button onClick={handleLogIn}>Log In</button>
    </div>
  );
};

export default Login;
