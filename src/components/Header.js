import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-testio-dark-blue.png";
import { FaSignOutAlt } from "react-icons/fa";
import HeaderStyles from './styles/HeaderStyles';



const Header = () => {
  return (
    <HeaderStyles>
      <img src={logo} alt="Logo" />
      <Link to="/logout" style={{ textDecoration: "none" }}>
        <button className="header-button">
          <FaSignOutAlt size={18} style={{ marginRight: "12px" }} />
          <span className="header-button__text">Logout</span>
        </button>
      </Link>
    </HeaderStyles>
  );
};

export default Header;
