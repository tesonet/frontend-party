import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../../assets/images/logo-dark.png";
import { NavLink } from "react-router-dom";
import { logOut } from "../../../pages/AuthPage/authActions";

const AuthorizedHeader = ({ dispatch, history, withAuth }) => {
  return withAuth &&
    <header className="top-header">
      <img className="top-header_logo" src={logo} alt="logo"/>
      <nav className="main-navigation">
        <NavLink to="/servers">Servers</NavLink>
        <NavLink to="/favourite-servers">Favourite servers</NavLink>
      </nav>
      <button
        className="top-header_btn-logout btn"
        type="button"
        onClick={() => {
          dispatch(logOut())
          history.push("/")
        }}
      >
        Logout
      </button>
    </header>
}

export default withRouter(connect((state) => ({ withAuth: state.authReducer.withAuth }))(AuthorizedHeader));