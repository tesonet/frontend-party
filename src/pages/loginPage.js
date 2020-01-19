import React from "react";
import Logo from "../assets/svg/tesio-logo_xl.svg";
import { LoginForm } from "../components";
import { getFromLocalStorage } from "../utils/localStorage";

const LoginPage = ({ history }) => {
  const isAuth = getFromLocalStorage("isAuth");
  isAuth && history.push("/home");

  return (
    <div className="wrapper">
      <div className="gs-overlay gs-overlay--dark">
        <section className="inner">
          <img src={Logo} alt="Testio Logo" />
          <LoginForm history={history} />
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
