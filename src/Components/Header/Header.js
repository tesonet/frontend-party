import React from "react";
import { ReactComponent as LogoutIcon } from "../../assets/img/logout.svg";
import logo from "../../assets/img/logo-dark@2x.png";

export const Header = ({ logout }) => (
  <div className="header__container">
    <div className="header__logo">
      <img src={logo} alt="Testio logo" width="115" height="30" />
    </div>
    <div className="header__logout" onClick={logout}>
      <LogoutIcon />
      <div className="header__text">Logout</div>
    </div>
  </div>
);
