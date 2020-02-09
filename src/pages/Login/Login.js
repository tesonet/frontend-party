import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const loggedIn = useSelector(({ auth }) => auth.loggedIn);

  return loggedIn ? (
    <Redirect to="/servers" />
  ) : (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
