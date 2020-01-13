import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/store";
import { logIn } from "../../store/user/actions";
import { Redirect } from "react-router";

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

  return token ? (
    <Redirect to="/servers" />
  ) : (
    <div>
      Login
      <input name="username" onChange={handleChange} value={values.username} />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={values.password}
      />
      <button onClick={handleLogIn}>Log In</button>
    </div>
  );
};

export default Login;
