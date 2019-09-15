import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import logoutIcon from "../../../express/public/static/img/logout/logout-ico.png"

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
     localStorage.removeItem('auth_token');
     this.props.logoutRequest(null);
     this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <div className="btn-logout box" onClick={this.handleLogout}>
                    <img src={logoutIcon} className="logout-ico"/>
                    Logout
                </div>
            </div>
        )
    }
}

LogoutButton.propTypes = {
    logoutRequest: PropTypes.func
};

export default withRouter(LogoutButton);
