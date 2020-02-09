import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { onLogin } from "../../actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(({ auth }) => auth.loggedIn);
  const user = {
    username: "tesonet",
    password: "partyanimal"
  };

  const login = () => dispatch(onLogin(user));

  return loggedIn ? (
    <Redirect to="/servers" />
  ) : (
    <div>
      <Input />
      <Input />
      <Button onClick={login} buttonText="Log in" />
    </div>
  );
};

export default Login;
