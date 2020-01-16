import React from 'react';
import { connect } from "react-redux";
import { onLogout } from "../../thunks/userThunks/logoutThunk";
import TestioLogoDark from "../../assets/svg/tesio-logo-dark.svg";
import LogoutIcon from "../../assets/svg/logout.svg";

const Navigation = ({ handleLogout, history }) => {
    
    return (
        <nav className="nav">
            <img  src={TestioLogoDark} alt="Testio logo" className="nav__logo"/>
            <button className="nav__btn-logout" onClick={() => handleLogout(history)}>
            <img src={LogoutIcon} alt="Logout icon" className="logout-icon"/>
            Logout
            </button>
        </nav>
    )
}

const mapStateToProps = state => state.authUser;

const mapDispatchToProps = dispatch => ({
    handleLogout: (history) => dispatch(onLogout(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
