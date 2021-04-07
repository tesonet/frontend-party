import React from "react";
import { Redirect } from "react-router-dom";

import LoginBox from "../../components/LoginBox/LoginBox";
import "./Login.scss";

export const Login = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/servers"  />
  }

  return (
    <div className="login">
      <LoginBox />
    </div>
  );
};

export default Login;