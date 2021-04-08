import React from "react";
import { Redirect } from "react-router-dom";

import LoginBox from "../../components/LoginBox/LoginBox";
import styles from "./Login.scss";

export const Login = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/servers"  />
  }

  return (
    <div className={styles["login"]}>
      <LoginBox />
    </div>
  );
};

export default Login;