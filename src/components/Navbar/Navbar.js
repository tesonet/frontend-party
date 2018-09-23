import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LogoIcon from "./../../assets/logo-version-2.png";
import { logout } from "./../../store/actions";
import { HOME_ROUTE } from "./../../config/global_conts.js";
import classes from "./Navbar.scss";

class Navbar extends Component {
	render() {
		return (
			<div className={`${classes.Navbar} d-flex justify-content-between align-items-center px-3 py-4`}>
				<Link to={HOME_ROUTE}>
					<img src={LogoIcon} />
				</Link>
				<button onClick={this.props.logout} className="px-3 py-2">
					<i className="fas fa-sign-out-alt" /> Logout
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
});

export default connect(
	null,
	mapDispatchToProps
)(Navbar);
