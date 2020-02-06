import React from "react";
import { PropTypes } from "prop-types";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../../assets/images/logo-dark.svg";
import icon from "../../assets/icons/ico-lock.svg";
import "./Header.scss";

const Header = ({ onLogout }) => (
    <Navbar>
        <NavbarBrand>
            <img src={logo} className="header-logo" />
        </NavbarBrand>
        <a className="logout-link" onClick={onLogout}>
            <img src={icon} />
            Logout
        </a>
    </Navbar>
);

export default Header;

Header.propTypes = {
    onLogout: PropTypes.func
};
